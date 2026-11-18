import { NextResponse } from "next/server";
import { Resend } from "resend";

/* -------------------------------------------------------------------------- */
/*  Configuration                                                             */
/* -------------------------------------------------------------------------- */

const MAX_NAME = 100;
const MAX_EMAIL = 254;
const MAX_PHONE = 30;
const MAX_SUBJECT = 150;
const MAX_MESSAGE = 5000;

// Best-effort in-memory rate limiter. On serverless platforms each instance has
// its own memory, so this is a first line of defence only. For production-grade
// limiting across instances, configure a persistent store (e.g. Upstash Redis).
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const RATE_LIMIT_MAX = 5; // max submissions per IP per window
const rateLimitStore = new Map<string, { count: number; resetAt: number }>();

function checkRateLimit(ip: string): { allowed: boolean; retryAfter?: number } {
  const now = Date.now();
  const entry = rateLimitStore.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitStore.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return { allowed: true };
  }

  if (entry.count >= RATE_LIMIT_MAX) {
    return { allowed: false, retryAfter: Math.ceil((entry.resetAt - now) / 1000) };
  }

  entry.count += 1;
  return { allowed: true };
}

/* -------------------------------------------------------------------------- */
/*  Helpers                                                                   */
/* -------------------------------------------------------------------------- */

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, "\u0026amp;")
    .replace(/</g, "\u0026lt;")
    .replace(/>/g, "\u0026gt;")
    .replace(/"/g, "\u0026quot;")
    .replace(/'/g, "\u0026#39;");
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// Permissive international phone validation: digits, spaces, +, -, (), min 7 digits.
const PHONE_RE = /^[+]?[0-9\s().-]{7,}$/;

type Payload = {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  subject?: unknown;
  message?: unknown;
  company?: unknown; // honeypot
};

type CleanData = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

function validateAndClean(body: Payload): { data?: CleanData; errors?: Record<string, string> } {
  const errors: Record<string, string> = {};

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const phone = typeof body.phone === "string" ? body.phone.trim() : "";
  const subject = typeof body.subject === "string" ? body.subject.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";

  if (!name) errors.name = "Name is required.";
  else if (name.length > MAX_NAME) errors.name = `Name must be under ${MAX_NAME} characters.`;

  if (!email) errors.email = "Email is required.";
  else if (email.length > MAX_EMAIL) errors.email = "Email is too long.";
  else if (!EMAIL_RE.test(email)) errors.email = "Please enter a valid email address.";

  if (!phone) errors.phone = "Phone number is required.";
  else if (phone.length > MAX_PHONE) errors.phone = "Phone number is too long.";
  else if (!PHONE_RE.test(phone)) errors.phone = "Please enter a valid phone number.";

  if (subject.length > MAX_SUBJECT) errors.subject = "Subject is too long.";

  if (!message) errors.message = "Message is required.";
  else if (message.length > MAX_MESSAGE) errors.message = `Message must be under ${MAX_MESSAGE} characters.`;

  if (Object.keys(errors).length > 0) return { errors };

  return {
    data: {
      name,
      email,
      phone,
      subject: subject || "General enquiry",
      message,
    },
  };
}

/* -------------------------------------------------------------------------- */
/*  Email templates                                                           */
/* -------------------------------------------------------------------------- */

function buildHtmlEmail(d: CleanData, submittedAt: string): string {
  const safe = {
    name: escapeHtml(d.name),
    email: escapeHtml(d.email),
    phone: escapeHtml(d.phone),
    subject: escapeHtml(d.subject),
    message: escapeHtml(d.message).replace(/\n/g, "<br />"),
    submittedAt: escapeHtml(submittedAt),
  };

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Website Enquiry</title>
</head>
<body style="margin:0;padding:0;background-color:#f4f1ec;font-family:Arial,Helvetica,sans-serif;color:#1c1c1c;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f1ec;padding:24px 0;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;background-color:#ffffff;border:1px solid #e2ddd5;">
          <tr>
            <td style="background-color:#010101;padding:24px 28px;">
              <span style="display:inline-block;width:10px;height:10px;background-color:#fc763b;margin-right:10px;vertical-align:middle;"></span>
              <span style="color:#ffffff;font-size:16px;font-weight:bold;letter-spacing:1px;text-transform:uppercase;vertical-align:middle;">5 Star Builders Merchants</span>
            </td>
          </tr>
          <tr>
            <td style="padding:28px;">
              <h1 style="margin:0 0 4px;font-size:20px;color:#010101;text-transform:uppercase;letter-spacing:0.5px;">New Website Enquiry</h1>
              <p style="margin:0 0 20px;font-size:13px;color:#8e8880;">Received ${safe.submittedAt}</p>

              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
                <tr>
                  <td style="padding:10px 0;border-bottom:1px solid #eee;font-size:12px;color:#8e8880;text-transform:uppercase;letter-spacing:1px;width:120px;">Name</td>
                  <td style="padding:10px 0;border-bottom:1px solid #eee;font-size:15px;color:#1c1c1c;font-weight:bold;">${safe.name}</td>
                </tr>
                <tr>
                  <td style="padding:10px 0;border-bottom:1px solid #eee;font-size:12px;color:#8e8880;text-transform:uppercase;letter-spacing:1px;">Email</td>
                  <td style="padding:10px 0;border-bottom:1px solid #eee;font-size:15px;color:#1c1c1c;"><a href="mailto:${safe.email}" style="color:#a63b00;text-decoration:none;">${safe.email}</a></td>
                </tr>
                <tr>
                  <td style="padding:10px 0;border-bottom:1px solid #eee;font-size:12px;color:#8e8880;text-transform:uppercase;letter-spacing:1px;">Phone</td>
                  <td style="padding:10px 0;border-bottom:1px solid #eee;font-size:15px;color:#1c1c1c;"><a href="tel:${safe.phone}" style="color:#a63b00;text-decoration:none;">${safe.phone}</a></td>
                </tr>
                <tr>
                  <td style="padding:10px 0;border-bottom:1px solid #eee;font-size:12px;color:#8e8880;text-transform:uppercase;letter-spacing:1px;">Subject</td>
                  <td style="padding:10px 0;border-bottom:1px solid #eee;font-size:15px;color:#1c1c1c;">${safe.subject}</td>
                </tr>
              </table>

              <h2 style="margin:24px 0 8px;font-size:13px;color:#8e8880;text-transform:uppercase;letter-spacing:1px;">Message</h2>
              <div style="background-color:#fbf9f6;border-left:3px solid #fc763b;padding:16px;font-size:15px;line-height:1.6;color:#1c1c1c;">
                ${safe.message}
              </div>

              <p style="margin:24px 0 0;font-size:12px;color:#8e8880;line-height:1.5;">
                Reply directly to this email to respond to the customer. Their address is set as the Reply-To.
              </p>
            </td>
          </tr>
          <tr>
            <td style="background-color:#fbf9f6;padding:16px 28px;border-top:1px solid #e2ddd5;">
              <p style="margin:0;font-size:11px;color:#8e8880;line-height:1.5;">
                5 Star Builders Merchants Ltd · 30 Tame Road, Birmingham, B6 7DS · 0121 7291749
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function buildTextEmail(d: CleanData, submittedAt: string): string {
  return [
    "NEW WEBSITE ENQUIRY — 5 Star Builders Merchants",
    "",
    `Received: ${submittedAt}`,
    "",
    `Name:    ${d.name}`,
    `Email:   ${d.email}`,
    `Phone:   ${d.phone}`,
    `Subject: ${d.subject}`,
    "",
    "Message:",
    d.message,
    "",
    "---",
    "Reply directly to this email to respond to the customer.",
    "5 Star Builders Merchants Ltd · 30 Tame Road, Birmingham, B6 7DS · 0121 7291749",
  ].join("\n");
}

/* -------------------------------------------------------------------------- */
/*  Route handler                                                             */
/* -------------------------------------------------------------------------- */

export async function POST(request: Request) {
  try {
    // --- Rate limiting -------------------------------------------------
    const forwarded = request.headers.get("x-forwarded-for");
    const ip = forwarded ? forwarded.split(",")[0].trim() : "unknown";
    const rate = checkRateLimit(ip);
    if (!rate.allowed) {
      return NextResponse.json(
        { ok: false, error: "Too many submissions. Please try again later." },
        { status: 429, headers: rate.retryAfter ? { "Retry-After": String(rate.retryAfter) } : undefined },
      );
    }

    // --- Parse body ----------------------------------------------------
    let body: Payload;
    try {
      body = (await request.json()) as Payload;
    } catch {
      return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
    }

    // --- Honeypot ------------------------------------------------------
    // The "company" field is hidden from real users. If filled, silently
    // accept (so bots don't learn) but do not send an email.
    if (typeof body.company === "string" && body.company.trim() !== "") {
      return NextResponse.json({ ok: true });
    }

    // --- Validate ------------------------------------------------------
    const { data, errors } = validateAndClean(body);
    if (!data) {
      return NextResponse.json(
        { ok: false, error: "Please check the highlighted fields.", fields: errors },
        { status: 422 },
      );
    }

    // --- Environment config -------------------------------------------
    const apiKey = process.env.RESEND_API_KEY;
    const fromEmail = process.env.CONTACT_FROM_EMAIL;
    const toEmail = process.env.CONTACT_TO_EMAIL;

    if (!apiKey || !fromEmail || !toEmail) {
      console.error(
        "[contact] Missing email configuration. Required: RESEND_API_KEY, CONTACT_FROM_EMAIL, CONTACT_TO_EMAIL.",
      );
      return NextResponse.json(
        { ok: false, error: "Email service is not configured. Please call us on 0121 7291749." },
        { status: 500 },
      );
    }

    // --- Send via Resend ----------------------------------------------
    const resend = new Resend(apiKey);
    const submittedAt = new Date().toLocaleString("en-GB", {
      timeZone: "Europe/London",
      dateStyle: "full",
      timeStyle: "short",
    });

    const { error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: data.email,
      subject: "New Website Enquiry — 5 Star Builders Merchants",
      html: buildHtmlEmail(data, submittedAt),
      text: buildTextEmail(data, submittedAt),
    });

    if (error) {
      console.error("[contact] Resend error:", error.name, error.message);
      return NextResponse.json(
        { ok: false, error: "We could not send your enquiry. Please call us on 0121 7291749." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] Unexpected error:", err instanceof Error ? err.message : "unknown");
    return NextResponse.json(
      { ok: false, error: "Something went wrong. Please call us on 0121 7291749." },
      { status: 500 },
    );
  }
}
