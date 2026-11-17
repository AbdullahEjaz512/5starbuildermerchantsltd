import Image from "next/image";
import { company, deliveryAreas } from "@/lib/site";

export function DeliveryBanner() {
    return (
        <section className="w-full bg-surface-low py-14">
            <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-6 lg:px-12">
                <div className="bg-surface p-8 lg:p-12 shadow-md relative overflow-hidden">
                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        <div className="lg:col-span-7 space-y-4">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent-bright text-on-accent label-tracked text-[10px] uppercase tracking-widest font-bold">
                                <span className="material-symbols-outlined text-sm">local_shipping</span>
                                Logistics Division
                            </div>
                            <h2 className="font-display font-bold text-2xl md:text-3xl uppercase text-carbon tracking-tight">
                                We deliver as well — from single boards to full articulated packs
                            </h2>
                            <p className="text-lg text-ink-variant max-w-2xl leading-relaxed">
                                Whether you need 4 sheets of acoustic plasterboard dropped urgently to a domestic
                                loft conversion in Solihull, or 20 tonnes of structural Scandinavian C24 delivered
                                direct onto steels in Aston, our private Birmingham fleet handles it effortlessly.
                            </p>
                            <div className="flex flex-wrap gap-2 pt-2 text-ink">
                                {deliveryAreas.map((area) => (
                                    <span
                                        key={area}
                                        className="px-3 py-1.5 bg-surface-container label-tracked text-[10px] uppercase font-semibold"
                                    >
                                        {area}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="lg:col-span-5 flex flex-col gap-3">
                            {/* High-res delivery fleet visual */}
                            <div className="relative w-full h-44 overflow-hidden bg-surface-container shadow-sm group">
                                <Image
                                    src="/images/delivery-truck.jpg"
                                    alt="5 Star Builders Merchants logistics fleet and forklift yard loading"
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 40vw"
                                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-carbon/90 via-carbon/20 to-transparent"></div>
                                <div className="absolute bottom-3 left-3 text-on-accent">
                                    <span className="label-tracked text-[10px] uppercase font-bold text-accent-bright flex items-center gap-1.5">
                                        <span className="inline-block w-2 h-2 rounded-full bg-accent-bright status-pip"></span>
                                        Dedicated Birmingham Fleet
                                    </span>
                                    <span className="text-xs font-semibold block text-white/95 mt-0.5">
                                        Mechanical HIAB Offload & Express Transit Drops
                                    </span>
                                </div>
                            </div>
                            <div className="bg-surface-container p-4 space-y-1.5">
                                <div className="label-tracked text-xs uppercase font-bold text-carbon flex items-center gap-2">
                                    <span className="material-symbols-outlined text-accent-bright">precision_manufacturing</span>
                                    HIAB Crane Offload Available
                                </div>
                                <p className="text-xs text-ink-variant">
                                    Over-the-wall and second-storey scaffolding direct mechanical offload service.
                                </p>
                            </div>
                            <div className="bg-surface-container p-4 space-y-1.5">
                                <div className="label-tracked text-xs uppercase font-bold text-carbon flex items-center gap-2">
                                    <span className="material-symbols-outlined text-accent-bright">flash_on</span>
                                    Express Transit Van Dispatch
                                </div>
                                <p className="text-xs text-ink-variant">
                                    Urgent site run for fittings, electrical cable drums, tools and bonding plumping.
                                </p>
                            </div>
                            <a
                                href={`tel:${company.mobile.replace(/\s/g, "")}`}
                                className="w-full text-center px-4 py-3.5 bg-carbon text-on-accent hover:bg-accent transition-colors label-tracked text-xs uppercase tracking-wider font-bold shadow-md"
                            >
                                Book Delivery Slot: {company.mobile}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}