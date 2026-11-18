"use client";

import { useRef, useState } from "react";
import { company } from "@/lib/site";

type FormState = {
    name: string;
    phone: string;
    email: string;
    subject: string;
    message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const MAX = {
    name: 100,
    email: 254,
    phone: 30,
    subject: 150,
    message: 5000,
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[+]?[0-9\s().-]{7,}$/;

export function ContactForm() {
    const [form, setForm] = useState<FormState>({
        name: "",
        phone: "",
        email: "",
        subject: "",
        message: "",
    });
    const [errors, setErrors] = useState<FormErrors>({});
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
    const [serverError, setServerError] = useState<string | null>(null);
    const submittingRef = useRef(false);

    const validate = (): FormErrors => {
        const next: FormErrors = {};
        const name = form.name.trim();
        const email = form.email.trim();
        const phone = form.phone.trim();
        const subject = form.subject.trim();
        const message = form.message.trim();

        if (!name) next.name = "Please enter your name.";
        else if (name.length > MAX.name) next.name = `Name must be under ${MAX.name} characters.`;

        if (!phone) next.phone = "Please enter your phone number.";
        else if (phone.length > MAX.phone) next.phone = "Phone number is too long.";
        else if (!PHONE_RE.test(phone)) next.phone = "Please enter a valid phone number.";

        if (!email) next.email = "Please enter your email address.";
        else if (email.length > MAX.email) next.email = "Email is too long.";
        else if (!EMAIL_RE.test(email)) next.email = "Please enter a valid email address.";

        if (subject.length > MAX.subject) next.subject = "Subject is too long.";

        if (!message) next.message = "Please tell us what you need.";
        else if (message.length > MAX.message) next.message = `Message must be under ${MAX.message} characters.`;

        return next;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (submittingRef.current) return;

        const nextErrors = validate();
        setErrors(nextErrors);
        setServerError(null);
        if (Object.keys(nextErrors).length > 0) return;

        submittingRef.current = true;
        setStatus("submitting");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: form.name.trim(),
                    email: form.email.trim(),
                    phone: form.phone.trim(),
                    subject: form.subject.trim(),
                    message: form.message.trim(),
                    company: "", // honeypot — always empty for real users
                }),
            });

            const data = (await res.json().catch(() => ({}))) as {
                ok?: boolean;
                error?: string;
                fields?: FormErrors;
            };

            if (!res.ok || !data.ok) {
                if (data.fields) setErrors(data.fields);
                setServerError(data.error ?? "We could not send your enquiry. Please call us on 0121 7291749.");
                setStatus("error");
                return;
            }

            setStatus("success");
            setForm({ name: "", phone: "", email: "", subject: "", message: "" });
        } catch {
            setServerError("Network error. Please check your connection or call us on 0121 7291749.");
            setStatus("error");
        } finally {
            submittingRef.current = false;
        }
    };

    const field = (key: keyof FormState) => ({
        value: form[key],
        onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
            setForm((prev) => ({ ...prev, [key]: e.target.value })),
    });

    if (status === "success") {
        return (
            <div className="bg-surface-lowest p-8 shadow-sm border border-stone-line">
                <div className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-accent-bright text-3xl">check_circle</span>
                    <div>
                        <h3 className="font-display font-bold text-xl uppercase text-carbon">
                            Enquiry submitted
                        </h3>
                        <p className="text-sm text-ink-variant mt-2 leading-relaxed">
                            Thank you for contacting 5 Star Builders Merchants. Your enquiry has been submitted
                            successfully. Our team will get back to you as soon as possible.
                        </p>
                        <p className="text-sm text-ink-variant mt-2 leading-relaxed">
                            Need a faster response? Call{" "}
                            <a href={`tel:${company.phone.replace(/\s/g, "")}`} className="text-accent font-bold hover:underline">
                                {company.phone}
                            </a>{" "}
                            or WhatsApp{" "}
                            <a href={`https://wa.me/${company.whatsapp}`} className="text-accent font-bold hover:underline">
                                {company.mobile}
                            </a>
                            .
                        </p>
                        <button
                            onClick={() => setStatus("idle")}
                            className="mt-4 label-tracked text-xs uppercase tracking-widest text-accent font-bold hover:underline"
                        >
                            Send another enquiry
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    const isSubmitting = status === "submitting";

    return (
        <form onSubmit={handleSubmit} noValidate className="bg-surface-lowest p-6 lg:p-8 shadow-sm border border-stone-line space-y-5">
            {/* Honeypot — hidden from users, catches bots */}
            <div className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
                <label htmlFor="company">Company</label>
                <input
                    id="company"
                    name="company"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value=""
                    onChange={() => { }}
                />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                    <label htmlFor="name" className="label-tracked text-xs text-carbon font-bold uppercase tracking-widest">
                        Name *
                    </label>
                    <input
                        id="name"
                        type="text"
                        autoComplete="name"
                        maxLength={MAX.name}
                        {...field("name")}
                        className={`w-full bg-surface-low border ${errors.name ? "border-accent" : "border-stone-line"} px-4 py-3 text-sm text-carbon placeholder:text-ink-muted focus:border-carbon focus:outline-none`}
                        placeholder="Your full name"
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? "name-error" : undefined}
                    />
                    {errors.name && (
                        <p id="name-error" className="text-xs text-accent font-semibold">
                            {errors.name}
                        </p>
                    )}
                </div>

                <div className="space-y-1.5">
                    <label htmlFor="phone" className="label-tracked text-xs text-carbon font-bold uppercase tracking-widest">
                        Phone *
                    </label>
                    <input
                        id="phone"
                        type="tel"
                        autoComplete="tel"
                        maxLength={MAX.phone}
                        {...field("phone")}
                        className={`w-full bg-surface-low border ${errors.phone ? "border-accent" : "border-stone-line"} px-4 py-3 text-sm text-carbon placeholder:text-ink-muted focus:border-carbon focus:outline-none`}
                        placeholder="07xxx xxxxxx"
                        aria-invalid={!!errors.phone}
                        aria-describedby={errors.phone ? "phone-error" : undefined}
                    />
                    {errors.phone && (
                        <p id="phone-error" className="text-xs text-accent font-semibold">
                            {errors.phone}
                        </p>
                    )}
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                    <label htmlFor="email" className="label-tracked text-xs text-carbon font-bold uppercase tracking-widest">
                        Email *
                    </label>
                    <input
                        id="email"
                        type="email"
                        autoComplete="email"
                        maxLength={MAX.email}
                        {...field("email")}
                        className={`w-full bg-surface-low border ${errors.email ? "border-accent" : "border-stone-line"} px-4 py-3 text-sm text-carbon placeholder:text-ink-muted focus:border-carbon focus:outline-none`}
                        placeholder="you@example.com"
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? "email-error" : undefined}
                    />
                    {errors.email && (
                        <p id="email-error" className="text-xs text-accent font-semibold">
                            {errors.email}
                        </p>
                    )}
                </div>

                <div className="space-y-1.5">
                    <label htmlFor="subject" className="label-tracked text-xs text-carbon font-bold uppercase tracking-widest">
                        Subject
                    </label>
                    <input
                        id="subject"
                        type="text"
                        maxLength={MAX.subject}
                        {...field("subject")}
                        className={`w-full bg-surface-low border ${errors.subject ? "border-accent" : "border-stone-line"} px-4 py-3 text-sm text-carbon placeholder:text-ink-muted focus:border-carbon focus:outline-none`}
                        placeholder="e.g. Timber quote"
                        aria-invalid={!!errors.subject}
                        aria-describedby={errors.subject ? "subject-error" : undefined}
                    />
                    {errors.subject && (
                        <p id="subject-error" className="text-xs text-accent font-semibold">
                            {errors.subject}
                        </p>
                    )}
                </div>
            </div>

            <div className="space-y-1.5">
                <label htmlFor="message" className="label-tracked text-xs text-carbon font-bold uppercase tracking-widest">
                    Message *
                </label>
                <textarea
                    id="message"
                    rows={5}
                    maxLength={MAX.message}
                    {...field("message")}
                    className={`w-full bg-surface-low border ${errors.message ? "border-accent" : "border-stone-line"} px-4 py-3 text-sm text-carbon placeholder:text-ink-muted focus:border-carbon focus:outline-none resize-y`}
                    placeholder="Tell us what materials you need, quantities, and delivery postcode…"
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "message-error" : undefined}
                />
                {errors.message && (
                    <p id="message-error" className="text-xs text-accent font-semibold">
                        {errors.message}
                    </p>
                )}
            </div>

            {serverError && (
                <div
                    role="alert"
                    className="flex items-start gap-2 p-3 bg-accent/10 border border-accent/30 text-sm text-accent"
                >
                    <span className="material-symbols-outlined text-base">error</span>
                    <span>{serverError}</span>
                </div>
            )}

            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-on-accent font-display font-bold text-xs uppercase tracking-widest hover:bg-accent-deep transition-colors shadow-hard-accent disabled:opacity-60 disabled:cursor-not-allowed"
            >
                {isSubmitting ? (
                    <>
                        <span className="material-symbols-outlined animate-spin">progress_activity</span>
                        Sending…
                    </>
                ) : (
                    <>
                        <span className="material-symbols-outlined">send</span>
                        Send Enquiry
                    </>
                )}
            </button>

            <p className="text-xs text-ink-variant text-center">
                Prefer to talk? Call{" "}
                <a href={`tel:${company.phone.replace(/\s/g, "")}`} className="text-accent font-bold hover:underline">
                    {company.phone}
                </a>{" "}
                or WhatsApp{" "}
                <a href={`https://wa.me/${company.whatsapp}`} className="text-accent font-bold hover:underline">
                    {company.mobile}
                </a>
                .
            </p>
        </form>
    );
}
