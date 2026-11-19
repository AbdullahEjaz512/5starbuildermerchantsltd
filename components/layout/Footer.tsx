"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { company, navLinks, services } from "@/lib/site";
import { Logo } from "@/components/logo/Logo";

export function Footer() {
    const [year, setYear] = useState(2026);

    useEffect(() => {
        setYear(new Date().getFullYear());
    }, []);

    return (
        <footer className="bg-carbon text-on-accent border-t border-carbon-line">
            <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-6 lg:px-12 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-carbon-line">
                    {/* Brand column */}
                    <div className="lg:col-span-4 space-y-5">

                        {/* Brand Logo */}
                        <Link
                            href="/"
                            aria-label="5 Star Builders Merchants home"
                            className="block w-full max-w-[380px]"
                        >
                            <Logo
                                variant="light"
                                showTagline={true}
                                size="default"
                            />
                        </Link>

                        <p className="text-on-accent/70 max-w-sm leading-relaxed">
                            Birmingham's heavy structural & architectural merchant partner. Supporting regional contractors, developers, and trades with certified supplies, timber, and same-day fleet haulage.
                        </p>
                        <div className="p-4 bg-carbon-soft border border-carbon-line">
                            <div className="font-display font-bold text-xs uppercase tracking-widest text-accent-bright mb-1">
                                Direct Trade Slogan
                            </div>
                            <p className="font-display font-bold text-base uppercase tracking-wider">
                                &ldquo;{company.tagline}&rdquo;
                            </p>
                        </div>
                    </div>

                    {/* Directory links */}
                    <div className="lg:col-span-2 space-y-4">
                        <h3 className="font-display font-bold text-xs uppercase tracking-widest text-on-accent/50">
                            Directory
                        </h3>
                        <ul className="space-y-2.5 text-sm">
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="flex items-center gap-2 text-on-accent/70 hover:text-accent-bright transition-colors"
                                    >
                                        <span className="text-accent-bright text-xs">■</span>
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services summary */}
                    <div className="lg:col-span-3 space-y-4">
                        <h3 className="font-display font-bold text-xs uppercase tracking-widest text-on-accent/50">
                            Building Supplies
                        </h3>
                        <ul className="space-y-2 text-sm">
                            {services.map((service) => (
                                <li key={service.id} className="flex items-center gap-2 text-on-accent/70">
                                    <span className="text-accent-bright text-xs">■</span>
                                    {service.name}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact block */}
                    <div className="lg:col-span-3 space-y-4">
                        <h3 className="font-display font-bold text-xs uppercase tracking-widest text-on-accent/50">
                            Depot & Dispatch
                        </h3>
                        <div className="space-y-3 text-sm">
                            <p className="leading-relaxed">
                                <span className="text-accent-bright">■</span> {company.address}
                            </p>
                            <a
                                href={`tel:${company.phone.replace(/\s/g, "")}`}
                                className="block text-on-accent/70 hover:text-accent-bright transition-colors"
                            >
                                <span className="text-accent-bright">■</span> {company.phone}
                            </a>
                            <a
                                href={`tel:${company.mobile.replace(/\s/g, "")}`}
                                className="block text-on-accent/70 hover:text-accent-bright transition-colors"
                            >
                                <span className="text-accent-bright">■</span> {company.mobile}
                            </a>
                            <p className="text-on-accent/50 text-xs uppercase tracking-wider">
                                {company.hours}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 text-xs uppercase tracking-widest text-on-accent/40 text-center md:text-left">
                    <p>© {year} {company.name}. All rights reserved.</p>
                    <p className="flex items-center justify-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-accent-bright status-pip"></span>
                        Trade counter open Mon – Sat 07:00 – 17:30
                    </p>
                </div>
            </div>
        </footer>
    );
}