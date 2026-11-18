"use client";

import { useState } from "react";
import { faqs } from "@/lib/faq";

export type FaqItem = {
    id: string;
    question: string;
    answer: string;
};

type FaqAccordionProps = {
    items: FaqItem[];
    heading?: string;
    intro?: string;
    className?: string;
};

export function FaqAccordion({ items, heading, intro, className }: FaqAccordionProps) {
    const [openIds, setOpenIds] = useState<Set<string>>(new Set());

    const isOpen = (id: string) => openIds.has(id);

    const toggle = (id: string) => {
        setOpenIds((prev) => {
            const next = new Set(prev);
            if (next.has(id)) next.delete(id);
            else next.add(id);
            return next;
        });
    };

    return (
        <section className={`w-full ${className ?? ""}`}>
            <div className="mx-auto w-full max-w-[1280px]">
                {heading || intro ? (
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-12">
                        <div className="space-y-3">
                            {heading && (
                                <div className="flex items-center gap-2 text-accent label-tracked text-xs font-bold uppercase tracking-widest">
                                    <span className="inline-block w-2 h-2 bg-accent-bright"></span>
                                    {heading}
                                </div>
                            )}
                            {intro && <p className="text-sm text-ink-variant max-w-xl leading-relaxed">{intro}</p>}
                        </div>
                    </div>
                ) : null}

                <div className="space-y-3">
                    {items.map((item) => {
                        const open = isOpen(item.id);
                        return (
                            <article
                                key={item.id}
                                className="group relative bg-surface-lowest border border-stone-line shadow-sm overflow-hidden"
                            >
                                <button
                                    onClick={() => toggle(item.id)}
                                    aria-expanded={open}
                                    aria-controls={`faq-panel-${item.id}`}
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
                                    id={`faq-panel-${item.id}`}
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
        </section>
    );
}
