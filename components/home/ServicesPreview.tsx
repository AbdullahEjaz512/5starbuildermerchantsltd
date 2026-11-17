import Link from "next/link";
import { services } from "@/lib/site";

export function ServicesPreview() {
    return (
        <section className="w-full bg-surface py-16" id="trade-materials">
            <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-6 lg:px-12">
                {/* Section header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-10">
                    <div>
                        <span className="label-tracked text-xs text-accent font-bold uppercase tracking-widest">
                            Comprehensive Trade Stocks
                        </span>
                        <h2 className="font-display font-bold text-2xl md:text-3xl uppercase text-carbon tracking-tight mt-1">
                            Core Building Stuff & Materials
                        </h2>
                    </div>
                    <p className="text-sm text-ink-variant max-w-md">
                        Continuous trade yard replenishment. Guaranteed British Standards conformity across all
                        electrical, timber, plumbing, and structural envelopes.
                    </p>
                </div>

                {/* 8 bespoke material cards grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {services.map((service) => (
                        <Link
                            key={service.id}
                            href={`/services#${service.id}`}
                            className="group bg-surface-lowest p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
                        >
                            <div>
                                <div className="flex items-center justify-between mb-4">
                                    <div className="w-12 h-12 bg-surface-container flex items-center justify-center text-carbon group-hover:bg-accent-bright group-hover:text-on-accent transition-colors">
                                        <span className="material-symbols-outlined text-2xl">{service.icon}</span>
                                    </div>
                                    <span className="label-tracked text-[10px] uppercase px-2 py-1 bg-surface-container text-ink font-semibold">
                                        {service.badge}
                                    </span>
                                </div>
                                <h3 className="font-display font-bold text-base uppercase text-carbon font-bold">
                                    {service.name}
                                </h3>
                                <p className="text-xs text-ink-variant mt-2 leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                            <div className="mt-6 pt-4 bg-surface-low -mx-6 -mb-6 p-4 flex items-center justify-between label-tracked text-[10px] uppercase">
                                <span className="text-ink-variant font-bold">{service.stock}</span>
                                <span className="text-accent font-bold">In Stock →</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}