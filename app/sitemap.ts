import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://5starbuildersmerchants.co.uk";
  const now = new Date();

  return [
    {
      url: `${baseUrl}`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1.0,
      images: [`${baseUrl}/images/hero-yard.jpg`],
    },
    {
      url: `${baseUrl}/services`,
      lastModified: now,
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
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
      images: [`${baseUrl}/images/about-yard.jpg`],
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
      images: [`${baseUrl}/images/contact-yard.jpg`],
    },
  ];
}
