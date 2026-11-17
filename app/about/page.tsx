import type { Metadata } from "next";
import { AboutContent } from "@/components/about/AboutContent";
import { meta } from "@/lib/site";

export const metadata: Metadata = {
    title: "About Us",
    description:
        "5 Star Builders Merchants Ltd is a local Birmingham builders merchant supplying building materials for repair, renovation, and any building work. Visit our Tame Road depot or call today.",
};

export default function AboutPage() {
    return <AboutContent />;
}