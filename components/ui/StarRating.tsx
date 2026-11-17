import { cn } from "@/lib/utils";

export function StarRating({ count = 5, className }: { count?: number; className?: string }) {
    return (
        <div className={cn("flex items-center gap-1", className)}>
            {Array.from({ length: count }).map((_, i) => (
                <span
                    key={i}
                    className="material-symbols-outlined text-accent-bright"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                >
                    star
                </span>
            ))}
        </div>
    );
}