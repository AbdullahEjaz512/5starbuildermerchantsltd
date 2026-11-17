import { cn } from "@/lib/utils";

type SectionHeadingProps = {
    label?: string;
    title: string;
    description?: string;
    className?: string;
    align?: "left" | "center";
};

export function SectionHeading({
    label,
    title,
    description,
    className,
    align = "left",
}: SectionHeadingProps) {
    return (
        <div className={cn("space-y-2", className)}>
            {label && (
                <span className="label-tracked text-xs text-accent font-bold uppercase tracking-widest">
                    {label}
                </span>
            )}
            <h2 className="font-display font-bold text-2xl md:text-3xl text-carbon tracking-tight uppercase">
                {title}
            </h2>
            {description && (
                <p className="text-ink-variant max-w-2xl leading-relaxed">{description}</p>
            )}
        </div>
    );
}