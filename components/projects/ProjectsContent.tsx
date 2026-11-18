"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects, projectCategories } from "@/lib/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ProjectsContent() {
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredProjects = projects.filter((project) =>
        activeCategory === "all" ? true : project.category === activeCategory
    );

    return (
        <main className="w-full">
            {/* Hero Section */}
            <section className="w-full bg-canvas py-16 lg:py-24 border-b border-stone-line">
                <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-6 lg:px-12">
                    <SectionHeading
                        label="OUR TRACK RECORD"
                        title="PROJECTS WE'VE POWERED."
                        description="From major housing developments to local commercial renovations, see how our materials and logistics support the West Midlands building trade."
                        align="left"
                    />
                </div>
            </section>

            {/* Filter Chips */}
            <section className="w-full bg-surface-low py-8 sticky top-16 md:top-20 z-30 border-b border-stone-line">
                <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-6 lg:px-12">
                    <div className="flex flex-wrap gap-2">
                        {projectCategories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveCategory(cat.id)}
                                className={`px-5 py-2.5 text-[10px] uppercase tracking-widest font-bold transition-all ${activeCategory === cat.id
                                    ? "bg-carbon text-on-accent shadow-hard"
                                    : "bg-surface-lowest border border-stone-line text-ink-variant hover:border-stone hover:text-carbon"
                                    }`}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Project Grid */}
            <section className="w-full bg-canvas py-16 lg:py-24">
                <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-6 lg:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                        {filteredProjects.map((project) => (
                            <article
                                key={project.id}
                                className="group flex flex-col bg-surface-lowest border border-stone-line shadow-sm hover:shadow-hard transition-all duration-500"
                            >
                                <div className="relative w-full aspect-[16/10] overflow-hidden bg-surface-container">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="inline-block px-3 py-1 bg-carbon text-on-accent text-[10px] font-bold uppercase tracking-widest shadow-sm">
                                            {project.category}
                                        </span>
                                    </div>
                                </div>

                                <div className="p-6 sm:p-8 flex flex-col flex-grow">
                                    <div className="flex flex-wrap items-center gap-3 mb-4">
                                        <span className="status-pip bg-accent" />
                                        <h3 className="font-display font-bold text-xl uppercase tracking-tight text-carbon">
                                            {project.title}
                                        </h3>
                                    </div>

                                    <p className="text-sm text-ink-variant leading-relaxed mb-8 flex-grow">
                                        {project.description}
                                    </p>

                                    <div className="grid grid-cols-3 gap-4 pt-6 border-t border-stone-line">
                                        {project.details.map((detail, idx) => (
                                            <div key={idx} className="space-y-1">
                                                <span className="block text-[9px] uppercase tracking-widest text-ink-muted font-bold">
                                                    {detail.label}
                                                </span>
                                                <span className="block text-xs text-carbon font-medium">
                                                    {detail.value}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>

                    {filteredProjects.length === 0 && (
                        <div className="py-20 text-center">
                            <p className="text-ink-muted">No projects found in this category.</p>
                        </div>
                    )}
                </div>
            </section>

            {/* Partner with us CTA */}
            <section className="w-full bg-carbon text-on-accent py-16 lg:py-24 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <Image
                        src="/images/cta-texture.jpg"
                        alt=""
                        fill
                        className="object-cover"
                    />
                </div>

                <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-6 lg:px-12 relative z-10">
                    <div className="max-w-2xl">
                        <span className="label-tracked text-xs uppercase tracking-widest text-accent-bright">
                            Trade Partnership
                        </span>
                        <h2 className="mt-4 font-display font-bold text-3xl sm:text-4xl lg:text-5xl uppercase leading-[1.1]">
                            Powering your next big development.
                        </h2>
                        <p className="mt-6 text-base sm:text-lg text-on-accent/70 leading-relaxed">
                            We don't just supply materials; we solve logistics. Get a partner who delivers on time, every time.
                        </p>
                        <div className="mt-10 flex flex-col sm:flex-row gap-4">
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center px-8 py-4 bg-accent text-on-accent font-display font-bold text-xs uppercase tracking-widest hover:bg-accent-deep transition-colors shadow-hard-accent"
                            >
                                Start a Partnership
                            </Link>
                            <Link
                                href="/services"
                                className="inline-flex items-center justify-center px-8 py-4 border border-on-accent/30 text-on-accent font-display font-bold text-xs uppercase tracking-widest hover:bg-on-accent/10 transition-colors"
                            >
                                View Our Services
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
