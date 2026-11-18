import Link from "next/link";
import Image from "next/image";
import { galleryImages, galleryCategories } from "@/lib/gallery";

export function GalleryPreview() {
    const previewImages = galleryImages.slice(0, 6);

    const categoryLabel = (cat: string) =>
        galleryCategories.find((c) => c.id === cat)?.label ?? cat;

    return (
        <section className="w-full bg-surface-low px-5 sm:px-6 lg:px-12 py-16 lg:py-24">
            <div className="mx-auto w-full max-w-[1280px]">
                {/* Section header */}
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
                    <div className="space-y-3">
                        <span className="label-tracked text-xs text-accent font-bold uppercase tracking-widest">
                            Visual Depot
                        </span>
                        <h2 className="font-display font-bold text-2xl md:text-3xl text-carbon uppercase tracking-tight">
                            A Closer Look at Our Yard
                        </h2>
                        <p className="text-sm text-ink-variant max-w-xl leading-relaxed">
                            Browse our Birmingham depot, trade counter, and materials operations.
                            Browse the full gallery for more.
                        </p>
                    </div>
                    <Link
                        href="/gallery"
                        className="inline-flex items-center gap-2 px-5 py-3 bg-carbon text-on-accent font-display font-bold text-xs uppercase tracking-widest hover:bg-accent transition-colors shadow-hard self-start sm:self-auto"
                    >
                        <span>View Full Gallery</span>
                        <span className="material-symbols-outlined text-base">arrow_forward</span>
                    </Link>
                </div>

                {/* Uniform 6-card grid — consistent 4:3 aspect, no stretch, no gaps in quality */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5">
                    {previewImages.map((image, index) => (
                        <Link
                            key={image.id}
                            href="/gallery"
                            className="group relative block overflow-hidden bg-surface-container shadow-sm hover:shadow-2xl transition-shadow duration-300"
                            aria-label={`View gallery: ${image.alt}`}
                        >
                            <div className="relative w-full aspect-[4/3] overflow-hidden">
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    fill
                                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 16vw"
                                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                                />
                                {/* Top category badge */}
                                <div className="absolute top-3 left-3">
                                    <span className="label-tracked text-[9px] sm:text-[10px] uppercase tracking-widest font-bold px-2.5 py-1 bg-carbon/80 text-on-accent backdrop-blur-sm border border-white/10">
                                        {categoryLabel(image.category)}
                                    </span>
                                </div>
                                {/* Bottom caption overlay — visible on hover */}
                                <div className="absolute inset-0 bg-gradient-to-t from-carbon/80 via-carbon/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-3 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                    <p className="text-[10px] text-on-accent/90 line-clamp-2 leading-tight font-medium">
                                        {image.caption}
                                    </p>
                                </div>
                            </div>
                            {/* Bottom accent bar */}
                            <div className="h-0.5 w-full bg-accent-bright scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}