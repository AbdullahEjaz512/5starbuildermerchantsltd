import Image from "next/image";
import { services, company } from "@/lib/site";
import { ServiceCard } from "./ServiceCard";

export function ServicesGrid() {
    return (
        <section className="w-full bg-surface py-16" id="services">
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
                        <ServiceCard key={service.id} {...service} />
                    ))}
                </div>

                {/* Supporting message */}
                <div className="mt-12 bg-carbon text-on-accent p-8 lg:p-12 relative overflow-hidden">
                    <Image
                        src="/images/cta-texture.jpg"
                        alt="Structural building materials"
                        fill
                        className="object-cover opacity-15 mix-blend-luminosity pointer-events-none"
                    />
                    <div className="relative z-10 max-w-4xl space-y-4">
                        <div className="inline-block px-3 py-1 bg-accent-bright text-on-accent label-tracked text-[10px] uppercase tracking-widest font-bold">
                            Direct Trade Motto
                        </div>
                        <h3 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl uppercase text-on-accent tracking-tight leading-none">
                            &ldquo;We provide all building stuff&rdquo;
                        </h3>
                        <p className="font-display font-bold text-lg text-accent-bright uppercase tracking-wide">
                            Repair • Renovation • Any Building Work
                        </p>
                        <p className="text-lg text-on-accent/70 max-w-2xl leading-relaxed">
                            No endless accounts forms or call centers. Talk directly to experienced yard merchants
                            who know Birmingham site logistics, building regs, and how to get your materials loaded
                            without waiting.
                        </p>
                        <div className="pt-4 flex flex-col sm:flex-row gap-4">
                            <a
                                href={`tel:${company.phone.replace(/\s/g, "")}`}
                                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-accent-bright hover:bg-accent text-on-accent label-tracked text-xs uppercase tracking-wider transition-colors font-bold shadow-md"
                            >
                                <span className="material-symbols-outlined">call</span>
                                <span>Ring Counter: {company.phone}</span>
                            </a>
                            <a
                                href={`https://wa.me/${company.whatsapp}?text=Hi%2C%20I%20need%20a%20trade%20quote%20for%20building%20supplies`}
                                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-surface text-carbon hover:bg-surface-container transition-colors label-tracked text-xs uppercase tracking-wider font-bold"
                            >
                                <span className="material-symbols-outlined text-accent-bright">chat</span>
                                <span>WhatsApp Material List: {company.mobile}</span>
                            </a>
                        </div>
                    </div>
                    <div className="hidden xl:block absolute -right-8 -bottom-10 opacity-10 select-none pointer-events-none">
                        <span className="font-display text-[140px] uppercase font-bold text-on-accent">
                            5 Star B6
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}