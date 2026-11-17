import type { Metadata } from "next";
import Image from "next/image";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactDetails } from "@/components/contact/ContactDetails";
import { MapEmbed } from "@/components/contact/MapEmbed";
import { company } from "@/lib/site";

export const metadata: Metadata = {
    title: "Contact",
    description:
        "Contact 5 Star Builders Merchants Ltd at 30 Tame Road, Birmingham B6 7DS. Call 0121 7291749 or WhatsApp 07397 573929 for building materials, delivery, and trade quotes.",
};

export default function ContactPage() {
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
                                Get your materials. Call the yard.
                            </h1>
                        </div>
                        <div className="lg:col-span-4 flex flex-col justify-between h-full space-y-4">
                            <p className="text-lg text-ink-variant leading-relaxed">
                                Need a quote, a stock check, or a delivery slot? Ring the trade counter or send us
                                your material list — we will come back with prices and timings the same day.
                            </p>
                            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2 label-tracked text-xs text-carbon uppercase font-bold tracking-wider">
                                <span className="flex items-center gap-1.5">
                                    <span className="material-symbols-outlined text-accent text-base">bolt</span>
                                    Same-Day Response
                                </span>
                                <span className="flex items-center gap-1.5">
                                    <span className="material-symbols-outlined text-accent text-base">verified</span>
                                    Trade Counter Open
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact details + form */}
            <section className="w-full bg-surface py-16">
                <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-6 lg:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                        <div className="lg:col-span-5">
                            <ContactDetails />
                        </div>
                        <div className="lg:col-span-7">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>

            {/* Map */}
            <section className="w-full bg-surface-low py-16">
                <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-6 lg:px-12">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8">
                        <div>
                            <span className="label-tracked text-xs text-accent font-bold uppercase tracking-widest">
                                Find the depot
                            </span>
                            <h2 className="font-display font-bold text-2xl md:text-3xl uppercase text-carbon tracking-tight mt-1">
                                30 Tame Road, Aston
                            </h2>
                        </div>
                        <p className="text-sm text-ink-variant max-w-md">
                            Just off the A38(M) Aston Expressway, minutes from M6 Junction 6. Drive-in turning for
                            artic trucks and HIAB offload.
                        </p>
                    </div>
                    <MapEmbed />
                </div>
            </section>

            {/* Strong call actions */}
            <section className="w-full bg-carbon text-on-accent py-12 sm:py-16">
                <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-6 lg:px-12">
                    <div className="bg-surface-highest/10 p-6 sm:p-12 lg:p-16 relative overflow-hidden">
                        <Image
                            src="/images/cta-texture.jpg"
                            alt="5 Star Builders Merchants trade materials and depot"
                            fill
                            className="object-cover opacity-15 mix-blend-luminosity pointer-events-none"
                        />
                        <div className="relative z-10 max-w-4xl space-y-6">
                            <div className="inline-block px-3 py-1 bg-accent-bright text-on-accent label-tracked text-[10px] uppercase tracking-widest font-bold">
                                Direct Dispatch
                            </div>
                            <h2 className="font-display font-bold text-2xl sm:text-4xl lg:text-5xl uppercase text-on-accent tracking-tight leading-tight sm:leading-none">
                                Ring the counter. Load the van. Build.
                            </h2>
                            <p className="text-base sm:text-lg text-on-accent/70 max-w-2xl leading-relaxed">
                                Talk directly to experienced yard merchants who know Birmingham site logistics,
                                building regs, and how to get your materials loaded without waiting.
                            </p>
                            <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row gap-3 sm:gap-4">
                                <a
                                    href={`tel:${company.phone.replace(/\s/g, "")}`}
                                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-4 bg-accent-bright hover:bg-accent text-on-accent label-tracked text-xs uppercase tracking-wider transition-colors font-bold shadow-md"
                                >
                                    <span className="material-symbols-outlined">call</span>
                                    <span>Ring Counter: {company.phone}</span>
                                </a>
                                <a
                                    href={`https://wa.me/${company.whatsapp}?text=Hi%2C%20I%20need%20a%20trade%20quote%20for%20building%20supplies`}
                                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-4 bg-surface text-carbon hover:bg-surface-container transition-colors label-tracked text-xs uppercase tracking-wider font-bold"
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
        </>
    );
}