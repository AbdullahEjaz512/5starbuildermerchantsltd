import type { Metadata } from "next";
import { GalleryContent } from "@/components/gallery/GalleryContent";

export const metadata: Metadata = {
    title: "Gallery",
    description:
        "Take a look inside 5 Star Builders Merchants Ltd — our Birmingham depot, trade stock and delivery operations at 30 Tame Road, B6 7DS.",
    alternates: { canonical: "/gallery" },
    openGraph: {
        title: "Builders Merchant Yard & Materials Gallery | Birmingham",
        description:
            "See the Birmingham depot, trade stock and delivery operations at 5 Star Builders Merchants.",
        url: "/gallery",
        type: "website",
        images: ["/images/hero-yard.jpg"],
    },
};

export default function GalleryPage() {
    return <GalleryContent />;
}