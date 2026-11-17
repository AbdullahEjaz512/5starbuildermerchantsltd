"use client";

import { useState } from "react";
import { company } from "@/lib/site";

type FormState = {
    name: string;
    phone: string;
    email: string;
    message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

export function ContactForm() {
    const [form, setForm] = useState<FormState>({
        name: "",
        phone: "",
        email: "",
        message: "",
    });
    const [errors, setErrors] = useState<FormErrors>({});
    const [submitted, setSubmitted] = useState(false);

    const validate = (): FormErrors => {
        const next: FormErrors = {};
        if (!form.name.trim()) next.name = "Please enter your name.";
        if (!form.phone.trim()) {
            next.phone = "Please enter your phone number.";
        } else if (!/^[0-9+\s()-]{7,}$/.test(form.phone.trim())) {
            next.phone = "Please enter a valid phone number.";
        }
        if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
            next.email = "Please enter a valid email address.";
        }
        if (!form.message.trim()) next.message = "Please tell us what you need.";
        return next;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const nextErrors = validate();
        setErrors(nextErrors);
        if (Object.keys(nextErrors).length === 0) {
            // No backend configured — graceful success state + mailto fallback.
            const subject = encodeURIComponent(`Material enquiry from ${form.name}`);
            const body = encodeURIComponent(
                `Name: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\n\nMessage:\n${form.message}`,
            );
            window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`;
            setSubmitted(true);
        }
    };

    const field = (key: keyof FormState) => ({
        value: form[key],
        onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
            setForm((prev) => ({ ...prev, [key]: e.target.value }),
            ),
    });

    if (submitted) {
        return (
            <div className="bg-surface-lowest p-8 shadow-sm border border-stone-line">
                <div className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-accent-bright text-3xl">check_circle</span>
                    <div>
                        <h3 className="font-display font-bold text-xl uppercase text-carbon font-bold">
                            Enquiry ready to send
                        </h3>
                        <p className="text-sm text-ink-variant mt-2 leading-relaxed">
                            Your email client should open with your message pre-filled. If it did not, call us
                            directly on{" "}
                            <a href={`tel:${company.phone.replace(/\s/g, "")}`} className="text-accent font-bold hover:underline">
                                {company.phone}
                            </a>{" "}
                            or WhatsApp{" "}
                            <a href={`tel:${company.mobile.replace(/\s/g, "")}`} className="text-accent font-bold hover:underline">
                                {company.mobile}
                            </a>
                            .
                        </p>
                        <button
                            onClick={() => {
                                setSubmitted(false);
                                setForm({ name: "", phone: "", email: "", message: "" });
                            }}
                            className="mt-4 label-tracked text-xs uppercase tracking-widest text-accent font-bold hover:underline"
                        >
                            Send another enquiry
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} noValidate className="bg-surface-lowest p-6 lg:p-8 shadow-sm border border-stone-line space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                    <label htmlFor="name" className="label-tracked text-xs text-carbon font-bold uppercase tracking-widest">
                        Name *
                    </label>
                    <input
                        id="name"
                        type="text"
                        autoComplete="name"
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

            <div className="space-y-1.5">
                <label htmlFor="email" className="label-tracked text-xs text-carbon font-bold uppercase tracking-widest">
                    Email
                </label>
                <input
                    id="email"
                    type="email"
                    autoComplete="email"
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
                <label htmlFor="message" className="label-tracked text-xs text-carbon font-bold uppercase tracking-widest">
                    Message *
                </label>
                <textarea
                    id="message"
                    rows={5}
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

            <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-on-accent font-display font-bold text-xs uppercase tracking-widest hover:bg-accent-deep transition-colors shadow-hard-accent"
            >
                <span className="material-symbols-outlined">send</span>
                Send Enquiry
            </button>

            <p className="text-xs text-ink-variant text-center">
                Prefer to talk? Call{" "}
                <a href={`tel:${company.phone.replace(/\s/g, "")}`} className="text-accent font-bold hover:underline">
                    {company.phone}
                </a>{" "}
                or WhatsApp{" "}
                <a href={`tel:${company.mobile.replace(/\s/g, "")}`} className="text-accent font-bold hover:underline">
                    {company.mobile}
                </a>
                .
            </p>
        </form>
    );
}