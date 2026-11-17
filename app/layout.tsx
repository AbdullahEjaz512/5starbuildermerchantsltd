import type { Metadata } from "next";
import { Space_Grotesk, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { meta } from "@/lib/site";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["500", "600", "700"],
});

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken-grotesk",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://5starbuildersmerchants.co.uk"),
  title: {
    default: `${meta.siteName} | Birmingham Builders Merchant & Building Materials Supplier`,
    template: `%s | ${meta.siteName}`,
  },
  description: meta.defaultDescription,
  applicationName: meta.siteName,
  authors: [{ name: meta.siteName, url: "https://5starbuildersmerchants.co.uk" }],
  creator: meta.siteName,
  publisher: meta.siteName,
  category: "Building Materials & Construction",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "builders merchant Birmingham",
    "building materials Birmingham",
    "trade counter Birmingham",
    "timber merchant Birmingham",
    "C24 timber Birmingham",
    "plumbing supplies Birmingham",
    "copper pipe Birmingham",
    "electrical supplies Birmingham",
    "plasterboard Birmingham",
    "acoustic drywall Birmingham",
    "underground drainage Birmingham",
    "fascia soffit Birmingham",
    "guttering Birmingham",
    "scheme bonding Birmingham",
    "Thistle multi finish Birmingham",
    "same day building delivery West Midlands",
    "HIAB crane delivery Birmingham",
  ],
  openGraph: {
    title: `${meta.siteName} | Birmingham Builders Merchant`,
    description: meta.defaultDescription,
    url: "https://5starbuildersmerchants.co.uk",
    siteName: meta.siteName,
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/images/hero-yard.jpg",
        width: 1600,
        height: 1067,
        alt: `${meta.siteName} Birmingham Yard & Delivery Depot`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${meta.siteName} | Birmingham Builders Merchant`,
    description: meta.defaultDescription,
    images: ["/images/hero-yard.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["HardwareStore", "HomeAndConstructionBusiness", "LocalBusiness"],
      "@id": "https://5starbuildersmerchants.co.uk/#organization",
      name: "5 Star Builders Merchants Ltd",
      legalName: "5 Star Builders Merchants Ltd",
      description:
        "Local Birmingham builders merchant supplying building materials for repair, renovation, and any building work. Trade counter pickup in minutes and same-day delivery across the West Midlands.",
      url: "https://5starbuildersmerchants.co.uk",
      telephone: "+441217291749",
      email: "info@5starbuildersmerchants.co.uk",
      address: {
        "@type": "PostalAddress",
        streetAddress: "30 Tame Road",
        addressLocality: "Birmingham",
        addressRegion: "West Midlands",
        postalCode: "B6 7DS",
        addressCountry: "GB",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 52.5025,
        longitude: -1.8845,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          opens: "07:00",
          closes: "17:30",
        },
      ],
      priceRange: "££",
      currenciesAccepted: "GBP",
      paymentAccepted: "Cash, Credit Card, Debit Card, B2B Trade Account",
      image: [
        "https://5starbuildersmerchants.co.uk/images/hero-yard.jpg",
        "https://5starbuildersmerchants.co.uk/images/about-yard.jpg",
        "https://5starbuildersmerchants.co.uk/images/delivery-truck.jpg",
        "https://5starbuildersmerchants.co.uk/images/contact-yard.jpg",
      ],
      logo: "https://5starbuildersmerchants.co.uk/images/hero-yard.jpg",
      areaServed: [
        { "@type": "City", name: "Birmingham" },
        { "@type": "AdministrativeArea", name: "West Midlands" },
        { "@type": "Place", name: "Solihull" },
        { "@type": "Place", name: "Sutton Coldfield" },
        { "@type": "Place", name: "Walsall" },
        { "@type": "Place", name: "Dudley" },
        { "@type": "Place", name: "Aston" },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Building Supplies & Trade Materials",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Product",
              name: "Plumbing & Copper Fittings (BS EN 1057)",
              description:
                "15mm, 22mm, 28mm copper coils and rigid straight lengths with compression, press, and end-feed fittings.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Product",
              name: "Structural Scandinavian C24 & C16 Timber",
              description:
                "Kilned & treated carcassing, roof joists, CLS studwork, roofing battens, marine and OSB3 sheeting.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Product",
              name: "Electrical Infrastructure & 18th Edition Cables",
              description:
                "Twin & earth cable drums, metal clad consumer units, conduit, isolators, and switchgear.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Product",
              name: "Heavy Duty UPVC Fascia & Soffit",
              description:
                "Full replacement fascia boards, capping boards, vented and hollow soffits in white, anthracite, and black ash.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Product",
              name: "Deepflow Rainwater Guttering Systems",
              description:
                "High capacity commercial and residential rainwater systems with matching downpipes and fittings.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Product",
              name: "Underground Drainage & Sewer Pipes",
              description:
                "110mm and 160mm terracotta sewer pipes, inspection chambers, gullies, and non-return valves.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Product",
              name: "Plasterboard, Acoustic Drylining & Fireline",
              description:
                "Soundshield acoustic blue boards, pink fireline, moisture board, and standard 12.5mm / 15mm sheets.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Product",
              name: "British Gypsum Scheme Bonding & Plasters",
              description:
                "Thistle Multi-Finish, Scheme Bonding Coat, Hardwall, Dri-Wall adhesive, beads, and scrim tape.",
            },
          },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://5starbuildersmerchants.co.uk/#website",
      url: "https://5starbuildersmerchants.co.uk",
      name: "5 Star Builders Merchants Ltd",
      description: "Birmingham Builders Merchant & Building Materials Supplier",
      publisher: {
        "@id": "https://5starbuildersmerchants.co.uk/#organization",
      },
      inLanguage: "en-GB",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${hankenGrotesk.variable} h-full antialiased`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-canvas text-ink font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
