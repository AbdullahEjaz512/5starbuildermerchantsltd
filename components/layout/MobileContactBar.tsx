import { company } from "@/lib/site";

export function MobileContactBar() {
    const whatsappHref = `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(
        "Hi, I need a trade quote for building supplies",
    )}`;

    return (
        <div
            className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-carbon border-t border-carbon-line shadow-lg"
            role="region"
            aria-label="Quick contact"
        >
            <div className="flex items-stretch">
                <a
                    href={`tel:${company.phone.replace(/\s/g, "")}`}
                    className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-accent-bright text-on-accent font-display font-bold text-xs uppercase tracking-widest active:bg-accent transition-colors"
                >
                    <span className="material-symbols-outlined text-lg">call</span>
                    <span>Call {company.phone}</span>
                </a>
                <div className="w-px bg-carbon-line" />
                <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-carbon text-on-accent font-display font-bold text-xs uppercase tracking-widest active:bg-carbon-soft transition-colors"
                >
                    <span className="material-symbols-outlined text-lg">chat</span>
                    <span>WhatsApp</span>
                </a>
            </div>
        </div>
    );
}