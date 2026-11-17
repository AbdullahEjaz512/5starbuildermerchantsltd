import Link from "next/link";
import { company } from "@/lib/site";

export default function NotFound() {
    return (
        <section className="w-full bg-surface py-24 lg:py-32">
            <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-6 lg:px-12 text-center space-y-8">
                <div className="space-y-4">
                    <span className="label-tracked text-xs text-accent font-bold uppercase tracking-widest">
                        404 // Off the blueprint
                    </span>
                    <h1 className="font-display font-bold text-5xl sm:text-7xl lg:text-8xl text-carbon tracking-tight uppercase leading-none">
                        Page not found
                    </h1>
                    <p className="text-lg text-ink-variant max-w-xl mx-auto leading-relaxed">
                        This page has been knocked down. Head back to the yard or call the trade counter and
                        we'll point you to the right stock.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        href="/"
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-carbon text-on-accent label-tracked text-xs uppercase tracking-widest font-bold hover:bg-accent transition-colors shadow-hard"
                    >
                        <span className="material-symbols-outlined">home</span>
                        Back to Home
                    </Link>
                    <a
                        href={`tel:${company.phone.replace(/\s/g, "")}`}
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent-bright text-on-accent label-tracked text-xs uppercase tracking-widest font-bold hover:bg-accent transition-colors shadow-hard-accent"
                    >
                        <span className="material-symbols-outlined">call</span>
                        Call {company.phone}
                    </a>
                </div>

                <div className="pt-8 border-t border-stone-line max-w-md mx-auto">
                    <p className="label-tracked text-xs text-ink-variant uppercase tracking-widest">
                        {company.address}
                    </p>
                </div>
            </div>
        </section>
    );
}