import { company } from "@/lib/site";

export function ContactDetails() {
    return (
        <div className="bg-carbon text-on-accent p-6 lg:p-8 space-y-6 shadow-hard">
            <div className="space-y-2">
                <span className="label-tracked text-xs text-accent-bright uppercase tracking-widest font-bold">
                    Depot & Dispatch
                </span>
                <h2 className="font-display font-bold text-2xl uppercase text-on-accent tracking-tight">
                    Talk to the yard
                </h2>
                <p className="text-sm text-on-accent/70 leading-relaxed">
                    No call centers. No ticket numbers. Speak directly to the merchant who will load your van
                    or dispatch your load.
                </p>
            </div>

            <div className="space-y-4">
                <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-accent-bright text-xl">location_on</span>
                    <div>
                        <div className="label-tracked text-[10px] uppercase tracking-wider text-on-accent/50">
                            Registered Address
                        </div>
                        <p className="text-sm font-semibold">{company.address}</p>
                    </div>
                </div>

                <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-accent-bright text-xl">call</span>
                    <div>
                        <div className="label-tracked text-[10px] uppercase tracking-wider text-on-accent/50">
                            Trade Line
                        </div>
                        <a
                            href={`tel:${company.phone.replace(/\s/g, "")}`}
                            className="text-sm font-bold hover:text-accent-bright transition-colors"
                        >
                            {company.phone}
                        </a>
                    </div>
                </div>

                <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-accent-bright text-xl">smartphone</span>
                    <div>
                        <div className="label-tracked text-[10px] uppercase tracking-wider text-on-accent/50">
                            Mobile / WhatsApp
                        </div>
                        <a
                            href={`tel:${company.mobile.replace(/\s/g, "")}`}
                            className="text-sm font-bold hover:text-accent-bright transition-colors"
                        >
                            {company.mobile}
                        </a>
                    </div>
                </div>

                <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-accent-bright text-xl">schedule</span>
                    <div>
                        <div className="label-tracked text-[10px] uppercase tracking-wider text-on-accent/50">
                            Trade Counter Hours
                        </div>
                        <p className="text-sm font-semibold">{company.hours}</p>
                        <p className="text-xs text-on-accent/50">{company.sunday}</p>
                    </div>
                </div>
            </div>

            <div className="pt-4 border-t border-carbon-line space-y-3">
                <a
                    href={`tel:${company.phone.replace(/\s/g, "")}`}
                    className="flex items-center justify-center gap-2 px-5 py-4 bg-accent-bright text-on-accent label-tracked text-xs uppercase tracking-widest font-bold hover:bg-accent transition-colors"
                >
                    <span className="material-symbols-outlined">call</span>
                    Call {company.phone}
                </a>
                <a
                    href={`https://wa.me/${company.whatsapp}?text=Hi%2C%20I%20need%20a%20trade%20quote%20for%20building%20supplies`}
                    className="flex items-center justify-center gap-2 px-5 py-4 bg-carbon-soft border border-carbon-line text-on-accent label-tracked text-xs uppercase tracking-widest font-bold hover:bg-surface-container transition-colors"
                >
                    <span className="material-symbols-outlined text-accent-bright">chat</span>
                    WhatsApp {company.mobile}
                </a>
            </div>
        </div>
    );
}