"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import Image from "next/image";
import { galleryImages } from "@/lib/gallery";

type LightboxProps = {
    isOpen: boolean;
    onClose: () => void;
    initialIndex: number;
};

export function Lightbox({ isOpen, onClose, initialIndex }: LightboxProps) {
    const [currentIndex, setCurrentIndex] = useState(initialIndex);
    const containerRef = useRef<HTMLDivElement>(null);

    const image = galleryImages[currentIndex];

    const goTo = useCallback(
        (index: number) => {
            if (index >= 0 && index < galleryImages.length) {
                setCurrentIndex(index);
            }
        },
        []
    );

    const goNext = useCallback(() => {
        goTo((currentIndex + 1) % galleryImages.length);
    }, [currentIndex, goTo]);

    const goPrev = useCallback(() => {
        goTo((currentIndex - 1 + galleryImages.length) % galleryImages.length);
    }, [currentIndex, goTo]);

    // Close on Escape
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (!isOpen) return;
            if (e.key === "Escape") onClose();
            if (e.key === "ArrowRight") goNext();
            if (e.key === "ArrowLeft") goPrev();
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [isOpen, onClose, goNext, goPrev]);

    // Trap focus and prevent body scroll
    useEffect(() => {
        if (!isOpen) return;
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div
            ref={containerRef}
            role="dialog"
            aria-modal="true"
            aria-label="Image lightbox"
            className="fixed inset-0 z-[100] bg-carbon/95 flex items-center justify-center p-4 sm:p-6 outline-none"
            tabIndex={-1}
        >
            {/* Click outside to close */}
            <button
                onClick={onClose}
                className="absolute inset-0 z-0 bg-transparent"
                aria-label="Close lightbox"
            />

            <div className="relative z-10 flex flex-col items-center gap-4 max-w-full max-h-full">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-20 w-10 h-10 rounded-none border border-carbon-line bg-carbon/80 text-on-accent flex items-center justify-center hover:bg-carbon transition-colors"
                    aria-label="Close"
                >
                    <span className="material-symbols-outlined text-lg">close</span>
                </button>

                <div className="relative w-full max-w-[900px] max-h-[70vh] flex items-center justify-center">
                    <button
                        onClick={goPrev}
                        disabled={galleryImages.length <= 1}
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-none border border-carbon-line bg-carbon/80 text-on-accent flex items-center justify-center hover:bg-carbon transition-colors opacity-0 group-hover:opacity-100 disabled:opacity-0 disabled:pointer-events-none"
                        aria-label="Previous image"
                    >
                        <span className="material-symbols-outlined text-lg">chevron_left</span>
                    </button>

                    <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        sizes="(max-width: 768px) 90vw, 80vw"
                        className="object-contain object-center rounded-none border border-carbon-line bg-carbon"
                        style={{ maxWidth: "100%", maxHeight: "70vh" }}
                    />

                    <button
                        onClick={goNext}
                        disabled={galleryImages.length <= 1}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-none border border-carbon-line bg-carbon/80 text-on-accent flex items-center justify-center hover:bg-carbon transition-colors opacity-0 group-hover:opacity-100 disabled:opacity-0 disabled:pointer-events-none"
                        aria-label="Next image"
                    >
                        <span className="material-symbols-outlined text-lg">chevron_right</span>
                    </button>
                </div>

                <div className="flex flex-col items-center gap-2 text-on-accent/70">
                    <p className="label-tracked text-xs text-accent-bright uppercase tracking-widest">
                        {image.category.charAt(0).toUpperCase() + image.category.slice(1)}
                    </p>
                    <p className="text-sm text-on-accent/90 font-medium">{image.caption}</p>
                    <p className="text-xs text-on-accent/50">
                        {currentIndex + 1} of {galleryImages.length}
                    </p>
                </div>

                <div className="flex gap-2 mt-2">
                    {galleryImages.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => goTo(i)}
                            className={`w-2 h-2 rounded-full transition-all ${i === currentIndex
                                    ? "bg-accent-bright"
                                    : "bg-carbon-line hover:bg-carbon"
                                }`}
                            aria-label={`Go to image ${i + 1}`}
                            aria-current={i === currentIndex ? "true" : undefined}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
