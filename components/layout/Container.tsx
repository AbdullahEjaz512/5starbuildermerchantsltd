import { cn } from "@/lib/utils";

type ContainerProps = {
    children: React.ReactNode;
    className?: string;
    as?: "div" | "section" | "header" | "footer" | "main" | "article";
};

/**
 * Consistent max-width container with responsive horizontal padding.
 * Mirrors the Stitch 12-column grid: 1.25rem mobile margins, 3rem desktop margins.
 */
export function Container({ children, className, as: Tag = "div" }: ContainerProps) {
    return (
        <Tag className={cn("mx-auto w-full max-w-[1280px] px-5 sm:px-6 lg:px-12", className)}>
            {children}
        </Tag>
    );
}