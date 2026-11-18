import type { Metadata } from "next";
import { ProjectsContent } from "@/components/projects/ProjectsContent";

export const metadata: Metadata = {
    title: "Projects",
    description:
        "Explore major developments powered by 5 Star Builders Merchants Ltd — supporting residential, commercial and industrial projects across the West Midlands.",
};

export default function ProjectsPage() {
    return <ProjectsContent />;
}
