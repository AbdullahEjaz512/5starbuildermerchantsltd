"use client";

import Link from "next/link";
import { useState } from "react";
import { company, navLinks } from "@/lib/site";
import { MobileNav } from "./MobileNav";
import { Logo } from "@/components/logo/Logo";

export function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <header className="sticky top-0 z-50 bg-canvas/95 backdrop-blur-md border-b border-stone-line">
                <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-6 lg:px-12">
                    <div className="flex items-center justify-between h-16 md:h-20">
                        {/* Logo */}
                        <Link
                            href="/"
                            aria-label="5 Star Builders Merchants home"
                            className="flex w-[190px] shrink-0 items-center sm:w-[220px]"
                        >
                            <Logo
                                showTagline={false}
                                variant="dark"
                                size="compact"
                            />
                        </Link>

                        {/* Desktop nav */}
                        <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-ink-variant hover:text-accent transition-colors font-display font-semibold text-xs uppercase tracking-widest"
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <a
                                href={`tel:${company.phone.replace(/\s/g, "")}`}
                                className="inline-flex items-center gap-2 px-4 py-2.5 bg-carbon text-on-accent font-display font-semibold text-xs uppercase tracking-widest hover:bg-accent transition-colors shadow-hard"
                            >
                                <span className="w-2 h-2 rounded-full bg-accent-bright status-pip"></span>
                                Call {company.phone}
                            </a>
                        </nav>

                        {/* Mobile menu toggle */}
                        <button
                            onClick={() => setIsOpen((prev) => !prev)}
                            className="md:hidden inline-flex flex-col items-center justify-center w-10 h-10 border border-stone-line hover:bg-surface-low"
                            aria-expanded={isOpen}
                            aria-controls="mobile-menu"
                            aria-label={isOpen ? "Close menu" : "Open menu"}
                        >
                            <span className="block w-5 h-0.5 bg-ink"></span>
                            <span className="block w-5 h-0.5 bg-ink mt-1.5"></span>
                            <span className="block w-5 h-0.5 bg-ink mt-1.5"></span>
                        </button>
                    </div>
                </div>
            </header>

            <MobileNav isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </>
    );
}