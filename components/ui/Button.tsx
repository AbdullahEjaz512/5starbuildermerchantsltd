import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
    children: React.ReactNode;
    variant?: "primary" | "secondary" | "outline" | "phone";
    size?: "sm" | "md" | "lg";
    className?: string;
    disabled?: boolean;
    asChild?: boolean;
    href?: string;
    type?: "button" | "submit" | "reset";
};

const variants = {
    primary:
        "bg-accent text-on-accent font-display font-bold text-xs uppercase tracking-widest hover:bg-accent-deep transition-colors shadow-hard-accent",
    secondary:
        "bg-carbon text-on-accent font-display font-bold text-xs uppercase tracking-widest hover:bg-accent transition-colors shadow-hard",
    outline:
        "border border-carbon text-carbon font-display font-bold text-xs uppercase tracking-widest hover:bg-carbon hover:text-on-accent transition-colors",
    phone:
        "bg-accent-bright text-on-accent font-display font-bold text-xs uppercase tracking-widest hover:bg-accent transition-colors shadow-hard-accent",
};

const sizes = {
    sm: "px-3 py-1.5 text-xs",
    md: "px-5 py-2.5 text-sm",
    lg: "px-8 py-4 text-base",
};

export function Button({
    children,
    variant = "primary",
    size = "md",
    className,
    disabled,
    asChild = false,
    href,
    type = "button",
}: ButtonProps) {
    const isLink = asChild || !!href;

    if (isLink) {
        return (
            <Link
                href={href || "#"}
                className={cn(
                    "inline-flex items-center justify-center gap-2 rounded-none border-none",
                    variants[variant],
                    sizes[size],
                    disabled && "opacity-50 cursor-not-allowed pointer-events-none",
                    className,
                )}
            >
                {children}
            </Link>
        );
    }

    return (
        <button
            type={type}
            disabled={disabled}
            className={cn(
                "inline-flex items-center justify-center gap-2 rounded-none border-none",
                variants[variant],
                sizes[size],
                disabled && "opacity-50 cursor-not-allowed",
                className,
            )}
        >
            {children}
        </button>
    );
}