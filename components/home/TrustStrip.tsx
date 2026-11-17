import { StarRating } from "@/components/ui/StarRating";
import { trustPoints } from "@/lib/site";

export function TrustStrip() {
    return (
        <section className="w-full bg-carbon text-on-accent py-12 shadow-sm">
            <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-6 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                    {/* Star reputation heading */}
                    <div className="md:col-span-4 flex items-center gap-4">
                        <div className="flex flex-col">
                            <div className="flex items-center gap-2 text-accent-bright">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <span
                                        key={i}
                                        className="material-symbols-outlined text-xl"
                                        style={{ fontVariationSettings: "'FILL' 1" as React.CSSProperties["fontVariationSettings"] }}
                                    >
                                        star
                                    </span>
                                ))}
                            </div>
                            <div className="font-display font-bold text-xl uppercase text-on-accent tracking-wide mt-1">
                                5-Star Trade Reputation
                            </div>
                            <div className="text-sm text-on-accent/50 mt-1">
                                Trusted by West Midlands contractors, roofers, dryliners & regional property developers.
                            </div>
                        </div>
                    </div>

                    {/* 4 key fast specs */}
                    <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
                        {trustPoints.map((point, index) => (
                            <div key={index} className="bg-carbon-soft p-4 flex flex-col justify-between">
                                <span className="font-display font-bold text-2xl text-accent-bright font-bold">
                                    {point.value}
                                </span>
                                <span className="label-tracked text-xs text-on-accent/70 uppercase tracking-wider mt-1">
                                    {point.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}