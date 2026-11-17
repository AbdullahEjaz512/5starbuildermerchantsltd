import Link from "next/link";
import Image from "next/image";
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
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service) => (
                        <Link
                            key={service.id}
                            href={`/services#${service.id}`}
                            className="group bg-surface-lowest p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
                        >
                            <div>
                                {/* Photographic header */}
                                <div className="relative w-full h-44 -mx-6 -mt-6 mb-5 overflow-hidden bg-surface-container">
                                    <Image
                                        src={service.image}
                                        alt={service.name}
                                        fill
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                        className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-carbon/80 via-carbon/20 to-transparent"></div>
                                    <div className="absolute top-3 right-3">
                                        <span className="label-tracked text-[10px] uppercase px-2.5 py-1 bg-carbon/90 text-on-accent font-semibold backdrop-blur-sm border border-white/10">
                                            {service.badge}
                                        </span>
                                    </div>
                                    <div className="absolute bottom-3 left-3 w-9 h-9 bg-accent-bright text-on-accent flex items-center justify-center shadow-md">
                                        <span className="material-symbols-outlined text-xl">{service.icon}</span>
                                    </div>
                                </div>

                                <h3 className="font-display font-bold text-base uppercase text-carbon font-bold group-hover:text-accent transition-colors">
                                    {service.name}
                                </h3>
                                <p className="text-xs text-ink-variant mt-2 leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                            <div className="mt-6 pt-4 bg-surface-low -mx-6 -mb-6 p-4 flex items-center justify-between label-tracked text-[10px] uppercase">
                                <span className="text-ink-variant font-bold">{service.stock}</span>
                                <span className="text-accent font-bold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                                    In Stock <span>→</span>
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}