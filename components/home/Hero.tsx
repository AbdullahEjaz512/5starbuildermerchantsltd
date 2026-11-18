import Link from "next/link";
import Image from "next/image";
import { company } from "@/lib/site";

export function Hero() {
    return (
        <section className="relative w-full overflow-hidden bg-canvas pt-6 pb-16 lg:pt-10">
            <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-6 lg:px-12">
                {/* Top operational metadata strip */}
                <div className="flex flex-wrap items-center justify-between gap-3 sm:gap-4 pb-6 sm:pb-8">
                    <div className="inline-flex items-center gap-2.5 px-3 py-1.5 bg-surface-high text-ink">
                        <span className="inline-block w-2 h-2 bg-accent-bright status-pip"></span>
                        <span className="label-tracked text-[10px] sm:text-xs uppercase tracking-widest">
                            Established Birmingham Merchants • 30 Tame Road, B6 7DS
                        </span>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="label-tracked text-[10px] sm:text-xs uppercase tracking-wider text-accent bg-surface-container px-3 py-1.5 flex items-center gap-1.5 font-bold">
                            <span className="material-symbols-outlined text-sm">local_shipping</span>
                            Delivery across the West Midlands
                        </span>
                    </div>
                </div>

                {/* Architectural split grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                    {/* Left: heavy confident typography */}
                    <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
                        <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl uppercase text-carbon leading-[1.02] tracking-tight">
                            Everything you need to build.
                            <span className="block text-accent">Delivered across Birmingham.</span>
                        </h1>
                        <p className="text-lg text-ink-variant max-w-xl leading-relaxed">
                            Direct merchant pricing on structural timber, acoustic plasterboard, scheme bonding,
                            copper plumbing, drainage, and electrical supplies. Trade counter pickup in minutes or
                            rapid site delivery straight to your plot.
                        </p>

                        {/* CTAs */}
                        <div className="pt-2 flex flex-col sm:flex-row flex-wrap gap-3">
                            <a
                                href={`tel:${company.phone.replace(/\s/g, "")}`}
                                className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-accent-bright hover:bg-accent text-on-accent font-display font-bold text-xs uppercase tracking-widest transition-colors shadow-hard-accent"
                            >
                                <span className="material-symbols-outlined text-lg">call</span>
                                <span>Call Trade Line: {company.phone}</span>
                            </a>
                            <a
                                href={`tel:${company.mobile.replace(/\s/g, "")}`}
                                className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-carbon text-on-accent hover:bg-carbon-soft font-display font-bold text-xs uppercase tracking-widest transition-colors shadow-hard"
                            >
                                <span className="material-symbols-outlined text-lg">smartphone</span>
                                <span>Direct Mobile: {company.mobile}</span>
                            </a>
                            <Link
                                href="/services"
                                className="inline-flex items-center justify-center gap-2 px-5 py-4 bg-surface-container text-ink hover:bg-surface-high font-display font-bold text-xs uppercase tracking-widest transition-colors"
                            >
                                <span>Explore Stock Matrix</span>
                                <span className="material-symbols-outlined text-base">arrow_downward</span>
                            </Link>
                        </div>

                        {/* Live metrics blueprint inset */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-2.5 pt-4">
                            <div className="bg-surface-low p-3 sm:p-3.5">
                                <div className="label-tracked text-[10px] text-ink-variant uppercase tracking-wider">
                                    Yard Ready
                                </div>
                                <div className="font-display font-bold text-base sm:text-lg text-carbon uppercase mt-0.5 sm:mt-1">
                                    7:00 AM
                                </div>
                                <div className="text-[11px] sm:text-xs text-ink-variant mt-0.5">Mon–Sat Trade Desk</div>
                            </div>
                            <div className="bg-surface-low p-3 sm:p-3.5">
                                <div className="label-tracked text-[10px] text-ink-variant uppercase tracking-wider">
                                    Express Delivery
                                </div>
                                <div className="font-display font-bold text-base sm:text-lg text-accent uppercase mt-0.5 sm:mt-1">
                                    Same Day
                                </div>
                                <div className="text-[11px] sm:text-xs text-ink-variant mt-0.5">West Midlands Coverage</div>
                            </div>
                            <div className="bg-surface-low p-3 sm:p-3.5">
                                <div className="label-tracked text-[10px] text-ink-variant uppercase tracking-wider">
                                    Trade Counter
                                </div>
                                <div className="font-display font-bold text-base sm:text-lg text-carbon uppercase mt-0.5 sm:mt-1">
                                    Pickup
                                </div>
                                <div className="text-[11px] sm:text-xs text-ink-variant mt-0.5">30 Tame Road, B6 7DS</div>
                            </div>
                        </div>
                    </div>

                    {/* Right: photographic yard depth monolith */}
                    <div className="lg:col-span-5 relative">
                        <div className="relative bg-surface-container shadow-xl overflow-hidden group">
                            <div className="w-full h-[320px] sm:h-[420px] lg:h-[540px] relative overflow-hidden">
                                <Image
                                    src="/images/hero-yard.jpg"
                                    alt="5 Star Builders Merchants main trade yard and materials depot, Aston Birmingham"
                                    fill
                                    priority
                                    sizes="(max-width: 1024px) 100vw, 42vw"
                                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-carbon via-carbon/30 to-carbon/10"></div>
                            </div>

                            {/* Structural yard stamp badge */}
                            <div className="absolute top-4 right-4 bg-carbon text-on-accent px-3 py-2 shadow-lg">
                                <div className="label-tracked text-[10px] text-accent-bright uppercase tracking-widest font-bold">
                                    Birmingham Main Yard
                                </div>
                                <div className="font-display font-bold text-base sm:text-lg uppercase tracking-tight">
                                    Depot #01
                                </div>
                                <div className="label-tracked text-[10px] text-on-accent/50">
                                    Tame Road Depot • B6 7DS
                                </div>
                            </div>

                            {/* Bottom live fleet overlay */}
                            <div className="absolute bottom-0 left-0 right-0 p-3.5 sm:p-5 bg-carbon/95 text-on-accent backdrop-blur-md">
                                <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                                    <span className="label-tracked text-[10px] uppercase tracking-widest text-accent-bright flex items-center gap-1.5 font-bold">
                                        <span className="inline-block w-2 h-2 rounded-full bg-accent-bright status-pip"></span>
                                        Active Fleet Offload Unit
                                    </span>
                                    <span className="label-tracked text-[10px] text-on-accent/50 uppercase">
                                        Aston • B6
                                    </span>
                                </div>
                                <p className="text-[11px] sm:text-xs text-on-accent/70 leading-relaxed">
                                    Same-day fleet departures from our Tame Road depot. Next departure:{" "}
                                    <span className="font-bold text-on-accent">Active Yard Queues</span>.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}