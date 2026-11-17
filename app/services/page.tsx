import type { Metadata } from "next";
import { ServicesGrid } from "@/components/services/ServicesGrid";
import { company } from "@/lib/site";

export const metadata: Metadata = {
    title: "Services",
    description:
        "5 Star Builders Merchants Ltd supplies plumbing, wood, electric, fascia, guttering, drainage, plasterboard, and scheme bonding across Birmingham. We provide all building stuff — repair, renovation, any building work.",
};

export default function ServicesPage() {
    return (
        <>
            {/* Page header */}
            <section className="w-full bg-surface-low px-5 sm:px-6 lg:px-12 py-16 lg:py-24">
                <div className="mx-auto w-full max-w-[1280px] flex flex-col gap-8">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                            <span className="inline-block w-2.5 h-2.5 bg-accent-bright"></span>
                            <span className="label-tracked text-xs text-accent font-bold uppercase tracking-widest">
                                Birmingham's Independent Trade Ally
                            </span>
                            <span className="hidden sm:inline text-ink-muted text-xs">/</span>
                            <span className="hidden sm:inline label-tracked text-xs text-ink-variant tracking-wider">
                                Depot: 30 Tame Road, B6 7DS
                            </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="px-3 py-1 bg-carbon text-on-accent label-tracked text-xs uppercase tracking-wider">
                                Est. West Midlands
                            </span>
                            <span className="px-3 py-1 bg-surface-highest text-ink label-tracked text-xs uppercase tracking-wider">
                                BS EN 1996 Certified
                            </span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
                        <div className="lg:col-span-8">
                            <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-carbon tracking-tight font-bold uppercase leading-none">
                                All building stuff. Repair, renovation & any building work.
                            </h1>
                        </div>
                        <div className="lg:col-span-4 flex flex-col justify-between h-full space-y-4">
                            <p className="text-lg text-ink-variant leading-relaxed">
                                From our strategic depot on Tame Road in Aston, we supply the full structural and
                                architectural envelope — timber, copper, electrical, drainage, plasterboard, and
                                scheme bonding — with same-day fleet dispatch across the West Midlands.
                            </p>
                            <div className="flex items-center gap-6 pt-2 label-tracked text-xs text-carbon uppercase font-bold tracking-wider">
                                <span className="flex items-center gap-1.5">
                                    <span className="material-symbols-outlined text-accent text-base">bolt</span>
                                    Fast-Track Yard Turnaround
                                </span>
                                <span className="flex items-center gap-1.5">
                                    <span className="material-symbols-outlined text-accent text-base">verified</span>
                                    Zero Red Tape
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <ServicesGrid />
        </>
    );
}