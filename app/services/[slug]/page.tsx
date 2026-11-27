import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { company, services, siteUrl } from "@/lib/site";

export function generateStaticParams() {
    return services.map((service) => ({ slug: service.id }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const service = services.find((item) => item.id === slug);

    if (!service) return {};

    return {
        title: service.pageTitle,
        description: service.metaDescription,
        alternates: { canonical: `/services/${service.id}` },
        openGraph: {
            title: service.pageTitle,
            description: service.metaDescription,
            url: `/services/${service.id}`,
            type: "website",
            images: [
                {
                    url: service.image,
                    alt: `${service.name} supplied by 5 Star Builders Merchants in Birmingham`,
                },
            ],
        },
    };
}

export default async function ServicePage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const service = services.find((item) => item.id === slug);

    if (!service) notFound();

    const currentIndex = services.findIndex((item) => item.id === service.id);
    const previousService = services[(currentIndex - 1 + services.length) % services.length];
    const nextService = services[(currentIndex + 1) % services.length];

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        name: service.name,
        description: service.metaDescription,
        provider: {
            "@type": "HomeAndConstructionBusiness",
            name: company.name,
            telephone: `+44${company.phone.replace(/^0/, "")}`,
            address: {
                "@type": "PostalAddress",
                streetAddress: "30 Tame Road",
                addressLocality: "Birmingham",
                postalCode: "B6 7DS",
                addressCountry: "GB",
            },
        },
        areaServed: "West Midlands",
        url: `${siteUrl}/services/${service.id}`,
        image: `${siteUrl}${service.image}`,
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
            />

            <section className="w-full bg-surface-low px-5 sm:px-6 lg:px-12 py-16 lg:py-24">
                <div className="mx-auto w-full max-w-[1280px]">
                    <nav aria-label="Breadcrumb" className="mb-8 text-xs uppercase tracking-widest text-ink-variant">
                        <ol className="flex flex-wrap items-center gap-2">
                            <li><Link href="/" className="hover:text-accent">Home</Link></li>
                            <li aria-hidden="true">/</li>
                            <li><Link href="/services" className="hover:text-accent">Services</Link></li>
                            <li aria-hidden="true">/</li>
                            <li className="text-carbon font-bold" aria-current="page">{service.name}</li>
                        </ol>
                    </nav>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                        <div className="lg:col-span-7 space-y-6">
                            <div className="flex items-center gap-3">
                                <span className="w-9 h-9 bg-accent-bright text-on-accent flex items-center justify-center">
                                    <span className="material-symbols-outlined">{service.icon}</span>
                                </span>
                                <span className="label-tracked text-xs text-accent font-bold uppercase tracking-widest">
                                    {service.badge}
                                </span>
                            </div>
                            <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-carbon tracking-tight uppercase leading-tight">
                                {service.pageTitle}
                            </h1>
                            <p className="text-base sm:text-lg text-ink-variant leading-relaxed max-w-3xl">
                                {service.intro}
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3 pt-2">
                                <a
                                    href={`tel:${company.phone.replace(/\s/g, "")}`}
                                    className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-accent-bright text-on-accent label-tracked text-xs uppercase tracking-wider font-bold hover:bg-accent transition-colors"
                                >
                                    <span className="material-symbols-outlined">call</span>
                                    Call {company.phone}
                                </a>
                                <a
                                    href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent(`Hi, I need information or a quote for ${service.name}`)}`}
                                    className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-carbon text-on-accent label-tracked text-xs uppercase tracking-wider font-bold hover:bg-accent transition-colors"
                                >
                                    <span className="material-symbols-outlined">chat</span>
                                    Ask for a quote
                                </a>
                            </div>
                        </div>
                        <div className="lg:col-span-5 relative h-[280px] sm:h-[360px] lg:h-[420px] overflow-hidden border border-stone-line shadow-sm">
                            <Image
                                src={service.image}
                                alt={`${service.name} materials at 5 Star Builders Merchants in Birmingham`}
                                fill
                                priority
                                sizes="(max-width: 1024px) 100vw, 42vw"
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-carbon/30 to-transparent" />
                            <div className="absolute bottom-4 left-4 bg-carbon px-4 py-2 text-on-accent label-tracked text-[10px] uppercase tracking-widest">
                                {service.stock}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full bg-surface py-16 lg:py-20">
                <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-6 lg:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                        <div className="lg:col-span-7">
                            <span className="label-tracked text-xs text-accent font-bold uppercase tracking-widest">Available range</span>
                            <h2 className="mt-2 mb-6 font-display font-bold text-2xl sm:text-3xl text-carbon uppercase tracking-tight">
                                {service.name} for trade and DIY projects
                            </h2>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {service.range.map((item) => (
                                    <li key={item} className="flex items-start gap-3 bg-surface-lowest border border-stone-line p-4 text-sm text-carbon">
                                        <span className="material-symbols-outlined text-accent text-lg shrink-0">check_circle</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <aside className="lg:col-span-5 bg-carbon text-on-accent p-6 sm:p-8">
                            <span className="label-tracked text-xs text-accent-bright font-bold uppercase tracking-widest">Why buy from us</span>
                            <h2 className="mt-2 mb-5 font-display font-bold text-2xl uppercase">Straight answers. Ready stock.</h2>
                            <ul className="space-y-4">
                                {service.benefits.map((benefit) => (
                                    <li key={benefit} className="flex items-start gap-3 border-b border-carbon-line pb-4 text-sm text-on-accent/80">
                                        <span className="material-symbols-outlined text-accent-bright text-lg shrink-0">verified</span>
                                        <span>{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </aside>
                    </div>

                    <div className="mt-10 border-t border-stone-line pt-10">
                        <span className="label-tracked text-xs text-accent font-bold uppercase tracking-widest">Typical applications</span>
                        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                            {service.applications.map((application) => (
                                <div key={application} className="bg-surface-low p-5 text-sm font-semibold text-carbon border-l-2 border-accent-bright">
                                    {application}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full bg-surface-low border-t border-stone-line">
                <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-6 lg:px-12 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 py-6">
                    <Link href={`/services/${previousService.id}`} className="group flex items-center gap-3 text-sm font-bold uppercase text-carbon hover:text-accent">
                        <span className="material-symbols-outlined">arrow_back</span>
                        <span><span className="block text-[10px] text-ink-variant tracking-widest">Previous</span>{previousService.name}</span>
                    </Link>
                    <Link href="/services" className="label-tracked text-xs font-bold uppercase tracking-widest text-ink-variant hover:text-accent text-center">
                        All Services
                    </Link>
                    <Link href={`/services/${nextService.id}`} className="group flex items-center justify-end gap-3 text-sm font-bold uppercase text-carbon hover:text-accent text-right">
                        <span><span className="block text-[10px] text-ink-variant tracking-widest">Next</span>{nextService.name}</span>
                        <span className="material-symbols-outlined">arrow_forward</span>
                    </Link>
                </div>
            </section>
        </>
    );
}
