import type { MetadataRoute } from "next";
import { services, siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteUrl;

  return [
    {
      url: `${baseUrl}`,
      changeFrequency: "daily",
      priority: 1.0,
      images: [`${baseUrl}/images/hero-yard.jpg`],
    },
    {
      url: `${baseUrl}/services`,
      changeFrequency: "weekly",
      priority: 0.9,
      images: [
        `${baseUrl}/images/services/plumbing.jpg`,
        `${baseUrl}/images/services/wood.jpg`,
        `${baseUrl}/images/services/electric.jpg`,
        `${baseUrl}/images/services/fascia.jpg`,
        `${baseUrl}/images/services/guttering.jpg`,
        `${baseUrl}/images/services/drainage.jpg`,
        `${baseUrl}/images/services/plasterboard.jpg`,
        `${baseUrl}/images/services/bonding.jpg`,
      ],
    },
    {
      url: `${baseUrl}/about`,
      changeFrequency: "monthly",
      priority: 0.8,
      images: [`${baseUrl}/images/about-yard.jpg`],
    },
    {
      url: `${baseUrl}/contact`,
      changeFrequency: "monthly",
      priority: 0.8,
      images: [`${baseUrl}/images/contact-yard.jpg`],
    },
    {
      url: `${baseUrl}/gallery`,
      changeFrequency: "weekly",
      priority: 0.8,
      images: [
        `${baseUrl}/images/gallery/WhatsApp Image 2026-11-18 at 12.06.41 PM.jpeg`,
        `${baseUrl}/images/gallery/WhatsApp Image 2026-11-18 at 12.06.42 PM.jpeg`,
        `${baseUrl}/images/gallery/WhatsApp Image 2026-11-18 at 12.06.43 PM.jpeg`,
      ],
    },
    {
      url: `${baseUrl}/projects`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...services.map((service) => ({
      url: `${baseUrl}/services/${service.id}`,
      changeFrequency: "weekly" as const,
      priority: 0.7,
      images: [`${baseUrl}${service.image}`],
    })),
  ];
}
