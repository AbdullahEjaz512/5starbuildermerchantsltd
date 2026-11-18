import Link from "next/link";
import Image from "next/image";
import { galleryImages } from "@/lib/gallery";

export function GalleryPreview() {
    const previewImages = galleryImages.slice(0, 6);

    return (
        <section className="w-full bg-surface-low px-5 sm:px-6 lg:px-12 py-16 lg:py-24">
            <div className="mx-auto w-full max-w-[1280px]">
                {/* Section header */}
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
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

                {/* Photo grid — 6 images in a 2x3 or 3x2 layout */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
                    {previewImages.map((image, index) => (
                        <Link
                            key={image.id}
                            href="/gallery"
                            className="group relative block overflow-hidden bg-surface-container"
                            aria-label={`View gallery: ${image.alt}`}
                        >
                            <div
                                className={`relative w-full overflow-hidden ${index % 3 === 0
                                        ? "aspect-[4/3]"
                                        : index % 3 === 1
                                            ? "aspect-square"
                                            : "aspect-[3/4]"
                                    }`}
                            >
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    fill
                                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 16vw"
                                    className="object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-carbon/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                    <p className="text-[10px] text-on-accent/80 line-clamp-2 leading-tight">
                                        {image.caption}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}