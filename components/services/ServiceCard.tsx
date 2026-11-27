import Image from "next/image";
import Link from "next/link";
import { company } from "@/lib/site";

export type ServiceCardProps = {
    id: string;
    name: string;
    icon: string;
    badge: string;
    image?: string;
    description: string;
    stock: string;
};

export function ServiceCard({ id, name, icon, badge, image, description, stock }: ServiceCardProps) {
    return (
        <article
            id={id}
            className="group bg-surface-lowest p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between scroll-mt-24 overflow-hidden"
        >
            <div>
                {image && (
                    <div className="relative w-full h-44 -mx-6 -mt-6 mb-5 overflow-hidden bg-surface-container">
                        <Image
                            src={image}
                            alt={name}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                            className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-carbon/80 via-carbon/20 to-transparent"></div>
                        <div className="absolute top-3 right-3">
                            <span className="label-tracked text-[10px] uppercase px-2.5 py-1 bg-carbon/90 text-on-accent font-semibold backdrop-blur-sm border border-white/10">
                                {badge}
                            </span>
                        </div>
                        <div className="absolute bottom-3 left-3 w-9 h-9 bg-accent-bright text-on-accent flex items-center justify-center shadow-md">
                            <span className="material-symbols-outlined text-xl">{icon}</span>
                        </div>
                    </div>
                )}
                <h3 className="font-display font-bold text-base uppercase text-carbon font-bold group-hover:text-accent transition-colors">
                    {name}
                </h3>
                <p className="text-xs text-ink-variant mt-2 leading-relaxed">{description}</p>
            </div>
            <div className="mt-6 pt-4 bg-surface-low -mx-6 -mb-6 p-4 flex items-center justify-between label-tracked text-[10px] uppercase">
                <span className="text-ink-variant font-bold">{stock}</span>
                <Link
                    href={`/services/${id}`}
                    className="text-accent font-bold hover:underline inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                >
                    Learn More <span>→</span>
                </Link>
            </div>
        </article>
    );
}