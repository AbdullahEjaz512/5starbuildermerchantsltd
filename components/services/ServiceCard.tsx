import Link from "next/link";
import { company } from "@/lib/site";

export type ServiceCardProps = {
    id: string;
    name: string;
    icon: string;
    badge: string;
    description: string;
    stock: string;
};

export function ServiceCard({ id, name, icon, badge, description, stock }: ServiceCardProps) {
    return (
        <article
            id={id}
            className="group bg-surface-lowest p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between scroll-mt-24"
        >
            <div>
                <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-surface-container flex items-center justify-center text-carbon group-hover:bg-accent-bright group-hover:text-on-accent transition-colors">
                        <span className="material-symbols-outlined text-2xl">{icon}</span>
                    </div>
                    <span className="label-tracked text-[10px] uppercase px-2 py-1 bg-surface-container text-ink font-semibold">
                        {badge}
                    </span>
                </div>
                <h3 className="font-display font-bold text-base uppercase text-carbon font-bold">
                    {name}
                </h3>
                <p className="text-xs text-ink-variant mt-2 leading-relaxed">{description}</p>
            </div>
            <div className="mt-6 pt-4 bg-surface-low -mx-6 -mb-6 p-4 flex items-center justify-between label-tracked text-[10px] uppercase">
                <span className="text-ink-variant font-bold">{stock}</span>
                <a
                    href={`tel:${company.phone.replace(/\s/g, "")}`}
                    className="text-accent font-bold hover:underline"
                >
                    Call Now →
                </a>
            </div>
        </article>
    );
}