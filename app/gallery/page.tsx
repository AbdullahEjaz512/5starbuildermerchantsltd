import type { Metadata } from "next";
import { GalleryContent } from "@/components/gallery/GalleryContent";

export const metadata: Metadata = {
    title: "Gallery",
    description:
        "Take a look inside 5 Star Builders Merchants Ltd — our Birmingham depot, trade stock and delivery operations at 30 Tame Road, B6 7DS.",
};

export default function GalleryPage() {
    return <GalleryContent />;
}