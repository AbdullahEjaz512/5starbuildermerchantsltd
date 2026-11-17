import { company } from "@/lib/site";

export function CTASection() {
    return (
        <section className="w-full bg-carbon text-on-accent py-16">
            <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-6 lg:px-12">
                <div className="bg-surface-highest/10 p-8 sm:p-12 lg:p-16 relative overflow-hidden">
                    <div className="relative z-10 max-w-4xl space-y-6">
                        <div className="inline-block px-3 py-1 bg-accent-bright text-on-accent label-tracked text-[10px] uppercase tracking-widest font-bold">
                            Direct Trade Motto
                        </div>
                        <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl uppercase text-on-accent tracking-tight leading-none">
                            &ldquo;We provide all building stuff&rdquo;
                        </h2>
                        <p className="font-display font-bold text-lg text-accent-bright uppercase tracking-wide">
                            Repair • Renovation • Any Building Work
                        </p>
                        <p className="text-lg text-on-accent/70 max-w-2xl leading-relaxed">
                            No endless accounts forms or call centers. Talk directly to experienced yard merchants
                            who know Birmingham site logistics, building regs, and how to get your materials loaded
                            without waiting.
                        </p>

                        {/* Direct dispatch actions */}
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

                    {/* Ambient architectural coordinate stamp */}
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