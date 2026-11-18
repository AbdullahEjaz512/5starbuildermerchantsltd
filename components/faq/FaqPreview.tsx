"use client";

import Link from "next/link";
import { useState } from "react";
import { homepageFaqs } from "@/lib/faq";

export function FaqPreview() {
    const [openId, setOpenId] = useState<string | null>(homepageFaqs[0]?.id ?? null);

    const toggle = (id: string) => {
        setOpenId((prev) => (prev === id ? null : id));
    };

    return (
        <section className="w-full bg-surface px-5 sm:px-6 lg:px-12 py-16 lg:py-24">
            <div className="mx-auto w-full max-w-[1280px]">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
                    {/* Left: heading + CTA */}
                    <div className="lg:col-span-4 space-y-5">
                        <div className="flex items-center gap-2 text-accent label-tracked text-xs font-bold uppercase tracking-widest">
                            <span className="inline-block w-2 h-2 bg-accent-bright"></span>
                            Common Questions
                        </div>
                        <h2 className="font-display font-bold text-2xl md:text-3xl text-carbon uppercase tracking-tight leading-tight">
                            Answers before you call
                        </h2>
                        <p className="text-sm text-ink-variant leading-relaxed">
                            Quick answers on materials, delivery, stock checks, and quotes. For anything else,
                            our trade counter is a phone call away.
                        </p>
                        <Link
                            href="/contact#faq"
                            className="inline-flex items-center gap-2 px-5 py-3 bg-carbon text-on-accent font-display font-bold text-xs uppercase tracking-widest hover:bg-accent transition-colors shadow-hard"
                        >
                            <span>View All FAQs</span>
                            <span className="material-symbols-outlined text-base">arrow_forward</span>
                        </Link>
                    </div>

                    {/* Right: compact accordion */}
                    <div className="lg:col-span-8 space-y-3">
                        {homepageFaqs.map((item) => {
                            const open = openId === item.id;
                            return (
                                <article
                                    key={item.id}
                                    className="bg-surface-lowest border border-stone-line shadow-sm overflow-hidden"
                                >
                                    <button
                                        onClick={() => toggle(item.id)}
                                        aria-expanded={open}
                                        aria-controls={`home-faq-panel-${item.id}`}
                                        className="w-full flex items-center justify-between gap-3 px-5 py-4 text-left transition-colors hover:bg-surface-high focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                                    >
                                        <span className="text-sm text-carbon font-semibold leading-relaxed">
                                            {item.question}
                                        </span>
                                        <span
                                            className={`flex items-center justify-center w-5 h-5 shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""
                                                }`}
                                        >
                                            <span className="material-symbols-outlined text-accent text-sm">expand_more</span>
                                        </span>
                                    </button>
                                    <div
                                        id={`home-faq-panel-${item.id}`}
                                        className={`overflow-hidden transition-all duration-300 ease-out ${open ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
                                            }`}
                                    >
                                        <div className="px-5 pb-4 text-sm text-ink-variant leading-relaxed">
                                            {item.answer}
                                        </div>
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
