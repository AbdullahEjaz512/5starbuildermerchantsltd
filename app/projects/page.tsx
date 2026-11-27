import type { Metadata } from "next";
import { ProjectsContent } from "@/components/projects/ProjectsContent";

export const metadata: Metadata = {
    title: "Projects",
    description:
        "Explore major developments powered by 5 Star Builders Merchants Ltd — supporting residential, commercial and industrial projects across the West Midlands.",
    alternates: { canonical: "/projects" },
    openGraph: {
        title: "Building Supply Projects | Birmingham & West Midlands",
        description:
            "Explore residential, commercial and industrial projects supported by 5 Star Builders Merchants.",
        url: "/projects",
        type: "website",
        images: ["/images/about-yard.jpg"],
    },
};

export default function ProjectsPage() {
    return <ProjectsContent />;
}
