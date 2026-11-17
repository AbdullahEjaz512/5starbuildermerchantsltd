import { company } from "@/lib/site";

export function MapEmbed() {
    const query = encodeURIComponent(company.address);
    const embedUrl = `https://www.google.com/maps?q=${query}&output=embed`;

    return (
        <div className="w-full">
            <div className="bg-surface-lowest border border-stone-line shadow-sm">
                <div className="p-4 border-b border-stone-line flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-accent-bright text-lg">map</span>
                        <span className="label-tracked text-xs text-carbon font-bold uppercase tracking-widest">
                            Yard Location
                        </span>
                    </div>
                    <span className="label-tracked text-[10px] text-ink-variant uppercase tracking-wider">
                        B6 7DS · Birmingham
                    </span>
                </div>
                <div className="relative w-full h-[360px] lg:h-[440px]">
                    <iframe
                        src={embedUrl}
                        title="5 Star Builders Merchants — 30 Tame Road, Birmingham B6 7DS"
                        className="absolute inset-0 w-full h-full border-0"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        allowFullScreen
                    />
                </div>
                <div className="p-4 bg-surface-low flex flex-wrap items-center justify-between gap-3">
                    <p className="text-sm text-ink-variant">
                        <span className="font-bold text-carbon">30 Tame Road</span>, Birmingham, B6 7DS
                    </p>
                    <a
                        href={`https://www.google.com/maps/search/?api=1&query=${query}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="label-tracked text-xs text-accent font-bold uppercase tracking-widest hover:underline"
                    >
                        Open in Google Maps →
                    </a>
                </div>
            </div>
        </div>
    );
}