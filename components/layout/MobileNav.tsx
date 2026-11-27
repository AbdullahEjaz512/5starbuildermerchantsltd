"use client";

import Link from "next/link";
import { useEffect } from "react";
import { company, navLinks, services } from "@/lib/site";

type MobileNavProps = {
    isOpen: boolean;
    onClose: () => void;
};

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
    // Lock body scroll while the menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    // Close on Escape
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [onClose]);

    if (!isOpen) return null;

    return (
        <div
            id="mobile-menu"
            className="md:hidden fixed inset-0 top-16 z-40 bg-carbon text-on-accent overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
        >
            <div className="px-5 py-8">
                <nav className="space-y-1">
                    {navLinks.map((link) => (
                        <div key={link.href} className="border-b border-carbon-line">
                            <Link
                                href={link.href}
                                onClick={onClose}
                                className="block py-4 text-2xl font-display font-bold uppercase tracking-tight hover:text-accent-bright transition-colors"
                            >
                                {link.label}
                            </Link>
                            {link.href === "/services" && (
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 pb-4">
                                    {services.map((service) => (
                                        <Link
                                            key={service.id}
                                            href={`/services/${service.id}`}
                                            onClick={onClose}
                                            className="flex items-center gap-2 py-2 text-sm text-on-accent/75 hover:text-accent-bright"
                                        >
                                            <span className="material-symbols-outlined text-accent-bright text-base">{service.icon}</span>
                                            {service.name}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </nav>

                <div className="mt-8 space-y-3">
                    <a
                        href={`tel:${company.phone.replace(/\s/g, "")}`}
                        className="flex items-center justify-between gap-3 px-5 py-4 bg-accent-bright text-on-accent font-display font-bold text-sm uppercase tracking-widest"
                    >
                        <span>Call Trade Line</span>
                        <span>{company.phone}</span>
                    </a>
                    <a
                        href={`https://wa.me/${company.whatsapp}?text=Hi%2C%20I%20need%20a%20trade%20quote%20for%20building%20supplies`}
                        className="flex items-center justify-between gap-3 px-5 py-4 bg-carbon-soft border border-carbon-line text-on-accent font-display font-bold text-sm uppercase tracking-widest"
                    >
                        <span>WhatsApp</span>
                        <span>{company.mobile}</span>
                    </a>
                </div>

                <p className="mt-8 text-xs uppercase tracking-widest text-on-accent/40">
                    {company.address}
                </p>
            </div>
        </div>
    );
}