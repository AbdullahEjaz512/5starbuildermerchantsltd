"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { galleryImages } from "@/lib/gallery";

type PerspectiveCarouselProps = {
    onOpenLightbox: (index: number) => void;
};

type Metrics = {
    cardWidth: number;
    spacing: number;
    stageHeight: number;
};

export function PerspectiveCarousel({ onOpenLightbox }: PerspectiveCarouselProps) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [dragOffset, setDragOffset] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [metrics, setMetrics] = useState<Metrics>({
        cardWidth: 280,
        spacing: 215,
        stageHeight: 560,
    });

    const stageRef = useRef<HTMLDivElement>(null);
    const dragState = useRef({
        pointerId: -1,
        startX: 0,
        startOffset: 0,
        moved: false,
    });
    const wheelAccum = useRef(0);
    const wheelLock = useRef(false);

    const total = galleryImages.length;

    // Responsive metrics
    useEffect(() => {
        const update = () => {
            const w = window.innerWidth;
            if (w < 640) {
                setMetrics({ cardWidth: 190, spacing: 150, stageHeight: 400 });
            } else if (w < 1024) {
                setMetrics({ cardWidth: 230, spacing: 180, stageHeight: 470 });
            } else {
                setMetrics({ cardWidth: 290, spacing: 225, stageHeight: 580 });
            }
        };
        update();
        window.addEventListener("resize", update);
        return () => window.removeEventListener("resize", update);
    }, []);

    const clampIndex = useCallback(
        (i: number) => Math.max(0, Math.min(total - 1, i)),
        [total]
    );

    const goTo = useCallback(
        (i: number) => {
            setActiveIndex(clampIndex(i));
            setDragOffset(0);
        },
        [clampIndex]
    );

    const goNext = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo]);
    const goPrev = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo]);

    // Pointer drag (mouse + touch unified)
    const onPointerDown = (e: React.PointerEvent) => {
        if (e.button !== undefined && e.button !== 0) return;
        dragState.current = {
            pointerId: e.pointerId,
            startX: e.clientX,
            startOffset: dragOffset,
            moved: false,
        };
        setIsDragging(true);
        (e.currentTarget as HTMLElement).setPointerCapture?.(e.pointerId);
    };

    const onPointerMove = (e: React.PointerEvent) => {
        if (!isDragging || dragState.current.pointerId !== e.pointerId) return;
        const delta = e.clientX - dragState.current.startX;
        if (Math.abs(delta) > 6) dragState.current.moved = true;
        setDragOffset(dragState.current.startOffset + delta);
    };

    const endDrag = (e: React.PointerEvent) => {
        if (!isDragging) return;
        const delta = dragOffset;
        const movedCards = -delta / metrics.spacing;
        const target = clampIndex(Math.round(activeIndex + movedCards));
        setActiveIndex(target);
        setDragOffset(0);
        setIsDragging(false);
        dragState.current.pointerId = -1;
        (e.currentTarget as HTMLElement).releasePointerCapture?.(e.pointerId);
    };

    // Horizontal wheel / trackpad navigation (does not hijack vertical scroll)
    useEffect(() => {
        const el = stageRef.current;
        if (!el) return;

        const onWheel = (e: WheelEvent) => {
            const horizontal = Math.abs(e.deltaX) > Math.abs(e.deltaY) * 1.2;
            if (!horizontal) return;
            e.preventDefault();
            if (wheelLock.current) return;
            wheelAccum.current += e.deltaX;
            if (Math.abs(wheelAccum.current) > 40) {
                const dir = wheelAccum.current > 0 ? 1 : -1;
                setActiveIndex((prev) => clampIndex(prev + dir));
                wheelAccum.current = 0;
                wheelLock.current = true;
                window.setTimeout(() => {
                    wheelLock.current = false;
                }, 320);
            }
        };

        el.addEventListener("wheel", onWheel, { passive: false });
        return () => el.removeEventListener("wheel", onWheel);
    }, [clampIndex]);

    // Keyboard navigation
    const onKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "ArrowRight") {
            e.preventDefault();
            goNext();
        } else if (e.key === "ArrowLeft") {
            e.preventDefault();
            goPrev();
        } else if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onOpenLightbox(activeIndex);
        }
    };

    const displayIndex = activeIndex - dragOffset / metrics.spacing;
    const cardHeight = Math.round(metrics.cardWidth * 1.34);

    return (
        <div className="w-full">
            <div
                ref={stageRef}
                role="region"
                aria-roledescription="carousel"
                aria-label="Depot photo gallery"
                tabIndex={0}
                onKeyDown={onKeyDown}
                onPointerDown={onPointerDown}
                onPointerMove={onPointerMove}
                onPointerUp={endDrag}
                onPointerCancel={endDrag}
                className="relative w-full select-none outline-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                style={{
                    height: `${metrics.stageHeight}px`,
                    perspective: "1800px",
                    perspectiveOrigin: "50% 45%",
                    touchAction: "pan-y",
                    cursor: isDragging ? "grabbing" : "grab",
                }}
            >
                {galleryImages.map((image, i) => {
                    const offset = i - displayIndex;
                    const abs = Math.abs(offset);
                    const translateX = offset * metrics.spacing;
                    const rotateY = offset * 20;
                    const scale = Math.max(0.55, 1 - abs * 0.1);
                    const translateZ = -abs * 90;
                    const opacity = abs > 3.2 ? 0 : Math.max(0.2, 1 - abs * 0.16);
                    const zIndex = Math.round(100 - abs * 10);
                    const isActive = Math.round(displayIndex) === i;

                    return (
                        <button
                            key={image.id}
                            type="button"
                            onClick={() => {
                                if (dragState.current.moved) return;
                                if (isActive) {
                                    onOpenLightbox(i);
                                } else {
                                    goTo(i);
                                }
                            }}
                            aria-label={
                                isActive
                                    ? `Open ${image.caption} in full view`
                                    : `Focus image: ${image.caption}`
                            }
                            aria-current={isActive ? "true" : undefined}
                            className="absolute top-1/2 left-1/2 block overflow-hidden rounded-xl bg-surface-container shadow-2xl will-change-transform"
                            style={{
                                width: `${metrics.cardWidth}px`,
                                height: `${cardHeight}px`,
                                zIndex,
                                opacity,
                                transform: `translate(-50%, -50%) translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                                transition: isDragging
                                    ? "none"
                                    : "transform 0.55s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.55s ease",
                                pointerEvents: abs > 3.2 ? "none" : "auto",
                            }}
                        >
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                sizes="(max-width: 640px) 190px, (max-width: 1024px) 230px, 290px"
                                className="object-cover"
                                draggable={false}
                                priority={i < 3}
                            />
                            <span className="absolute inset-0 bg-gradient-to-t from-carbon/70 via-transparent to-transparent" />
                            <span className="absolute bottom-0 left-0 right-0 p-3 text-left">
                                <span className="label-tracked block text-[10px] uppercase tracking-widest text-accent-bright">
                                    {image.category}
                                </span>
                                <span className="mt-0.5 block text-xs font-medium leading-snug text-white/90 line-clamp-2">
                                    {image.caption}
                                </span>
                            </span>
                        </button>
                    );
                })}
            </div>

            {/* Controls */}
            <div className="mt-6 flex items-center justify-center gap-4">
                <button
                    type="button"
                    onClick={goPrev}
                    disabled={activeIndex === 0}
                    className="inline-flex h-11 w-11 items-center justify-center border border-stone-line bg-surface-lowest text-carbon transition-colors hover:bg-carbon hover:text-on-accent disabled:cursor-not-allowed disabled:opacity-30"
                    aria-label="Previous image"
                >
                    <span className="material-symbols-outlined">chevron_left</span>
                </button>

                <div className="flex items-center gap-2" role="tablist" aria-label="Gallery position">
                    {galleryImages.map((image, i) => (
                        <button
                            key={image.id}
                            type="button"
                            role="tab"
                            aria-selected={i === activeIndex}
                            aria-label={`Go to image ${i + 1}: ${image.caption}`}
                            onClick={() => goTo(i)}
                            className={`h-1.5 transition-all ${i === activeIndex
                                    ? "w-8 bg-accent"
                                    : "w-3 bg-stone-line hover:bg-stone"
                                }`}
                        />
                    ))}
                </div>

                <button
                    type="button"
                    onClick={goNext}
                    disabled={activeIndex === total - 1}
                    className="inline-flex h-11 w-11 items-center justify-center border border-stone-line bg-surface-lowest text-carbon transition-colors hover:bg-carbon hover:text-on-accent disabled:cursor-not-allowed disabled:opacity-30"
                    aria-label="Next image"
                >
                    <span className="material-symbols-outlined">chevron_right</span>
                </button>
            </div>

            <p className="mt-3 text-center text-xs text-ink-muted">
                Drag, scroll horizontally, or use the arrow keys to explore. Click the centre image to enlarge.
            </p>
        </div>
    );
}
