"use client";

import { useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PerspectiveCarousel } from "@/components/gallery/PerspectiveCarousel";
import { Lightbox } from "@/components/gallery/Lightbox";
import { galleryCategories, galleryImages } from "@/lib/gallery";

export function GalleryContent() {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredImages = galleryCategories
        .find((c) => c.id === activeCategory)?.id === "all"
        ? galleryImages
        : galleryImages.filter((img) => img.category === activeCategory);

    return (
        <>
            {/* Introduction */}
            <section className="w-full bg-canvas py-16 lg:py-24">
                <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-6 lg:px-12">
                    <SectionHeading
                        label="INSIDE 5 STAR"
                        title="A CLOSER LOOK AT OUR YARD."
                        description="From everyday building essentials to specialist trade materials, explore our Birmingham depot, product ranges and trade operations."
                        align="left"
                    />
                </div>
            </section>

            {/* Category filter chips */}
            <section className="w-full bg-surface-low py-10">
                <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-6 lg:px-12">
                    <div className="flex flex-wrap gap-2">
                        {galleryCategories.map((cat) => (
                            <button
                                key={cat.id}
                                type="button"
                                onClick={() => setActiveCategory(cat.id)}
                                className={`px-4 py-2 rounded-none border text-xs font-display font-bold uppercase tracking-widest transition-colors ${activeCategory === cat.id
                                    ? "border-accent bg-accent text-on-accent"
                                    : "border-stone-line text-ink-variant bg-surface-lowest hover:border-stone hover:text-carbon"
                                    }`}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Carousel */}
            <section className="w-full bg-canvas py-16 lg:py-24">
                <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-6 lg:px-12">
                    <PerspectiveCarousel onOpenLightbox={(i) => { setLightboxIndex(i); setLightboxOpen(true); }} />
                </div>
            </section>

            {lightboxOpen && (
                <Lightbox
                    isOpen={lightboxOpen}
                    onClose={() => setLightboxOpen(false)}
                    initialIndex={lightboxIndex}
                />
            )}
        </>
    );
}
