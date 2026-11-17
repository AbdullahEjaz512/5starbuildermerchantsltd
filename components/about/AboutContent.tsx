import { company } from "@/lib/site";

export function AboutContent() {
    return (
        <>
            {/* Monolithic architectural title section */}
            <section className="w-full bg-surface-low px-5 sm:px-6 lg:px-12 py-16 lg:py-24">
                <div className="mx-auto w-full max-w-[1280px] flex flex-col gap-8">
                    {/* Architectural overline & badges */}
                    <div className="flex flex-wrap items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                            <span className="inline-block w-2.5 h-2.5 bg-accent-bright"></span>
                            <span className="label-tracked text-xs text-accent font-bold uppercase tracking-widest">
                                Birmingham's Independent Trade Ally
                            </span>
                            <span className="hidden sm:inline text-ink-muted text-xs">/</span>
                            <span className="hidden sm:inline label-tracked text-xs text-ink-variant tracking-wider">
                                Depot: 30 Tame Road, B6 7DS
                            </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="px-3 py-1 bg-carbon text-on-accent label-tracked text-xs uppercase tracking-wider">
                                Est. West Midlands
                            </span>
                            <span className="px-3 py-1 bg-surface-highest text-ink label-tracked text-xs uppercase tracking-wider">
                                BS EN 1996 Certified
                            </span>
                        </div>
                    </div>

                    {/* Hero headline & subtext */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
                        <div className="lg:col-span-8">
                            <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-carbon tracking-tight font-bold uppercase leading-none">
                                Built on honest advice, uncompromised stock, & merchant trade prices.
                            </h1>
                        </div>
                        <div className="lg:col-span-4 flex flex-col justify-between h-full space-y-4">
                            <p className="text-lg text-ink-variant leading-relaxed">
                                From our strategic depot on Tame Road in Aston, 5 Star Builders Merchants equips
                                residential contractors, commercial specifiers, and self-builders across the West
                                Midlands with direct structural stock and rapid delivery.
                            </p>
                            <div className="flex items-center gap-6 pt-2 label-tracked text-xs text-carbon uppercase font-bold tracking-wider">
                                <span className="flex items-center gap-1.5">
                                    <span className="material-symbols-outlined text-accent text-base">bolt</span>
                                    Fast-Track Yard Turnaround
                                </span>
                                <span className="flex items-center gap-1.5">
                                    <span className="material-symbols-outlined text-accent text-base">verified</span>
                                    Zero Red Tape
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Editorial split: The Merchant Creed vs Material Craft photo */}
            <section className="w-full bg-surface px-5 sm:px-6 lg:px-12 py-16 lg:py-24">
                <div className="mx-auto w-full max-w-[1280px] grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    {/* Left column: The 5 Star Merchant Creed */}
                    <div className="lg:col-span-5 flex flex-col space-y-8">
                        <div className="space-y-3">
                            <div className="flex items-center gap-2 text-accent label-tracked text-xs uppercase tracking-widest font-bold">
                                <span className="text-accent-bright">01</span>
                                <span>// The Merchant Creed</span>
                            </div>
                            <h2 className="font-display font-bold text-2xl md:text-3xl text-carbon uppercase font-bold tracking-tight">
                                Trade First. No Nonsense. Always Reliable.
                            </h2>
                        </div>
                        <p className="text-sm text-ink-variant leading-relaxed">
                            National corporate chains treat tradespeople like order numbers—slapping heavy markups
                            on ad-hoc orders, bouncing delivery times, and pushing under-spec timber that twists
                            before you can fix a joist.
                        </p>
                        <p className="text-sm text-ink-variant leading-relaxed">
                            At 5 Star Builders Merchants, our yard masters possess genuine trade backgrounds. We
                            speak your language, understand load schedules, and know that 30 minutes delayed on
                            site cuts right into your project margins. Every palette of British Gypsum, bag of
                            cement, and length of Scandinavian timber is stored dry and handled with pride.
                        </p>

                        {/* Quote callout card with structural contact shadow */}
                        <div className="p-6 bg-surface-container shadow-sm space-y-3 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-1.5 h-full bg-accent-bright"></div>
                            <p className="font-display font-bold text-lg uppercase text-carbon font-bold">
                                &ldquo;We provide all building stuff – Repair, Renovation, Any Building Work.&rdquo;
                            </p>
                            <div className="flex items-center justify-between pt-2">
                                <span className="label-tracked text-xs uppercase tracking-wider text-ink-variant">
                                    The Trade Counter Guarantee
                                </span>
                                <span className="label-tracked text-xs text-accent font-bold tracking-wider">
                                    Aston Yard • B6 7DS
                                </span>
                            </div>
                        </div>

                        {/* Metric bars */}
                        <div className="grid grid-cols-3 gap-4 pt-2">
                            <div className="bg-surface-high p-4 flex flex-col">
                                <span className="font-display font-bold text-xl text-carbon font-bold">
                                    15<span className="text-accent text-base">m</span>
                                </span>
                                <span className="label-tracked text-xs uppercase text-ink-variant mt-1">
                                    Avg Yard Load Time
                                </span>
                            </div>
                            <div className="bg-surface-high p-4 flex flex-col">
                                <span className="font-display font-bold text-xl text-carbon font-bold">
                                    100<span className="text-accent text-base">%</span>
                                </span>
                                <span className="label-tracked text-xs uppercase text-ink-variant mt-1">
                                    BS EN Compliant
                                </span>
                            </div>
                            <div className="bg-surface-high p-4 flex flex-col">
                                <span className="font-display font-bold text-xl text-carbon font-bold">B1-B99</span>
                                <span className="label-tracked text-xs uppercase text-ink-variant mt-1">
                                    Direct Delivery
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Right column: Visual showcase */}
                    <div className="lg:col-span-7 flex flex-col space-y-4">
                        <div className="relative w-full aspect-[4/3] bg-surface-high overflow-hidden shadow-xl">
                            <div className="w-full h-full bg-blueprint flex items-center justify-center">
                                <div className="text-center px-6">
                                    <span className="material-symbols-outlined text-6xl text-accent/40">
                                        handyman
                                    </span>
                                    <p className="mt-3 label-tracked text-xs uppercase tracking-widest text-ink-muted">
                                        Tame Road Depot Dispatch
                                    </p>
                                </div>
                            </div>
                            <div className="absolute bottom-4 right-4 bg-carbon/95 backdrop-blur-md px-4 py-2.5 text-on-accent">
                                <span className="label-tracked text-xs uppercase tracking-widest text-on-accent/50 block">
                                    Tame Road Depot Dispatch
                                </span>
                                <span className="label-tracked text-xs uppercase font-bold text-on-accent">
                                    Verified Dry-Stored Materials
                                </span>
                            </div>
                        </div>

                        {/* Material specification strip */}
                        <div className="bg-surface-low p-4 flex flex-wrap items-center justify-between gap-4 label-tracked text-xs uppercase tracking-wider text-ink-variant">
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-accent-bright"></span>
                                <span className="font-bold text-carbon">British Gypsum Plasters</span>
                            </div>
                            <span>•</span>
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-accent-bright"></span>
                                <span className="font-bold text-carbon">BS EN 1057 Copper Piping</span>
                            </div>
                            <span>•</span>
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-accent-bright"></span>
                                <span className="font-bold text-carbon">De-Aired Heavy Brick & Block</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Architectural data grid: Three pillar capabilities */}
            <section className="w-full bg-surface-container px-5 sm:px-6 lg:px-12 py-16 lg:py-24">
                <div className="mx-auto w-full max-w-[1280px] space-y-12">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div className="space-y-2">
                            <span className="label-tracked text-xs text-accent font-bold uppercase tracking-widest">
                                Operational Architecture
                            </span>
                            <h2 className="font-display font-bold text-2xl md:text-3xl text-carbon uppercase font-bold tracking-tight">
                                Engineered for trade contractor velocity
                            </h2>
                        </div>
                        <p className="text-sm text-ink-variant max-w-md">
                            Every yard protocol and logistics dispatch schedule is fine-tuned to eradicate site
                            downtime and eliminate costly delays.
                        </p>
                    </div>

                    {/* 3 pillar bento grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Pillar 1 */}
                        <div className="bg-surface-lowest p-8 flex flex-col justify-between shadow-md hover:-translate-y-1 transition-transform duration-200">
                            <div className="space-y-6">
                                <div className="flex items-center justify-between">
                                    <span className="w-12 h-12 bg-surface-container flex items-center justify-center text-carbon">
                                        <span className="material-symbols-outlined text-2xl">warehouse</span>
                                    </span>
                                    <span className="label-tracked text-xs text-accent font-bold">01 // Yard Ready</span>
                                </div>
                                <div className="space-y-2">
                                    <h3 className="font-display font-bold text-lg uppercase text-carbon font-bold">
                                        Immediate Yard Fulfillment
                                    </h3>
                                    <p className="text-sm text-ink-variant leading-relaxed">
                                        Drive-in loading lanes engineered specifically for flatbeds, vans, and pickups at
                                        our Tame Road site. Forklift loading operators on stand-by from 07:00 daily
                                        ensure your van is strapped and back en route to site in under 15 minutes.
                                    </p>
                                </div>
                            </div>
                            <div className="pt-6 mt-6 bg-surface-low p-3 flex items-center justify-between text-ink label-tracked text-xs uppercase">
                                <span>Direct Counter Loading:</span>
                                <span className="font-bold text-accent">No Queues</span>
                            </div>
                        </div>

                        {/* Pillar 2 */}
                        <div className="bg-surface-lowest p-8 flex flex-col justify-between shadow-md hover:-translate-y-1 transition-transform duration-200">
                            <div className="space-y-6">
                                <div className="flex items-center justify-between">
                                    <span className="w-12 h-12 bg-surface-container flex items-center justify-center text-carbon">
                                        <span className="material-symbols-outlined text-2xl">local_shipping</span>
                                    </span>
                                    <span className="label-tracked text-xs text-accent font-bold">02 // Heavy Haulage</span>
                                </div>
                                <div className="space-y-2">
                                    <h3 className="font-display font-bold text-lg uppercase text-carbon font-bold">
                                        Heavy-Duty Dedicated Fleet
                                    </h3>
                                    <p className="text-sm text-ink-variant leading-relaxed">
                                        Our owned multi-ton commercial fleet covers Birmingham, Solihull, Sutton
                                        Coldfield, and the wider Black Country. Equipped with precision Hiab crane
                                        offload systems to place bulk aggregates and pallets exactly where your
                                        groundwork crew needs them.
                                    </p>
                                </div>
                            </div>
                            <div className="pt-6 mt-6 bg-surface-low p-3 flex items-center justify-between text-ink label-tracked text-xs uppercase">
                                <span>HIAB Crane Offload:</span>
                                <span className="font-bold text-accent">Same-Day Active</span>
                            </div>
                        </div>

                        {/* Pillar 3 */}
                        <div className="bg-surface-lowest p-8 flex flex-col justify-between shadow-md hover:-translate-y-1 transition-transform duration-200">
                            <div className="space-y-6">
                                <div className="flex items-center justify-between">
                                    <span className="w-12 h-12 bg-surface-container flex items-center justify-center text-carbon">
                                        <span className="material-symbols-outlined text-2xl">construction</span>
                                    </span>
                                    <span className="label-tracked text-xs text-accent font-bold">03 // Sourcing Matrix</span>
                                </div>
                                <div className="space-y-2">
                                    <h3 className="font-display font-bold text-lg uppercase text-carbon font-bold">
                                        Comprehensive Trade Depth
                                    </h3>
                                    <p className="text-sm text-ink-variant leading-relaxed">
                                        If your project demands rare structural sizes, specialized acoustic drywall
                                        profiles, copper press fittings, or bespoke thermal insulation, our veteran
                                        procurement desk taps directly into primary mills and foundries without
                                        distributor delays.
                                    </p>
                                </div>
                            </div>
                            <div className="pt-6 mt-6 bg-surface-low p-3 flex items-center justify-between text-ink label-tracked text-xs uppercase">
                                <span>Direct Mill Networks:</span>
                                <span className="font-bold text-accent">Guaranteed Spec</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Technical spec & facility register */}
            <section className="w-full bg-surface-high px-5 sm:px-6 lg:px-12 py-16 lg:py-20">
                <div className="mx-auto w-full max-w-[1280px]">
                    <div className="bg-carbon text-on-accent p-8 sm:p-12 shadow-2xl">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                            <div className="lg:col-span-5 space-y-6">
                                <div className="space-y-2">
                                    <span className="label-tracked text-xs text-accent-bright uppercase tracking-widest font-bold">
                                        Operational Data Register
                                    </span>
                                    <h3 className="font-display font-bold text-2xl uppercase font-bold text-on-accent tracking-tight">
                                        Depot & Compliance Specifications
                                    </h3>
                                </div>
                                <p className="text-sm text-on-accent/70 leading-relaxed">
                                    We operate strictly under British Standard safety and handling codes. All softwood
                                    timber holds FSC Chain of Custody accreditation, graded C16/C24 for load-bearing
                                    roof trusses, floor joists, and stud wall frameworks.
                                </p>
                                <div className="pt-4 flex flex-col space-y-3 label-tracked text-xs uppercase tracking-wider text-on-accent/70">
                                    <div className="flex items-center gap-3">
                                        <span className="material-symbols-outlined text-accent-bright">shield</span>
                                        <span>Fully Insured Commercial HIAB Site Delivery</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className="material-symbols-outlined text-accent-bright">eco</span>
                                        <span>100% Certified Sustainable FSC Scandinavian Timber</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className="material-symbols-outlined text-accent-bright">account_balance</span>
                                        <span>30-Day B2B Trade Accounts for Verified Contractors</span>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="bg-carbon-soft p-6 space-y-3">
                                    <span className="label-tracked text-xs text-accent-bright uppercase tracking-widest block">
                                        Location Spec
                                    </span>
                                    <p className="font-display font-bold text-lg uppercase text-on-accent font-bold">
                                        30 Tame Road, Aston
                                    </p>
                                    <p className="text-xs text-on-accent/70">
                                        Birmingham, B6 7DS. Immediate connection to A38(M) Aston Expressway and M6
                                        Junction 6 for swift regional reach.
                                    </p>
                                    <div className="pt-2 text-accent-bright label-tracked text-xs uppercase font-bold">
                                        Drive-in Turning Radius: 18m Artic Friendly
                                    </div>
                                </div>
                                <div className="bg-carbon-soft p-6 space-y-3">
                                    <span className="label-tracked text-xs text-accent-bright uppercase tracking-widest block">
                                        Trade Counter Hours
                                    </span>
                                    <p className="font-display font-bold text-lg uppercase text-on-accent font-bold">
                                        Mon – Sat: 07:00 - 17:30
                                    </p>
                                    <p className="text-xs text-on-accent/70">
                                        Early bird counter dispatch ready from 7am sharp. Yard staging open for rapid
                                        morning site preparation.
                                    </p>
                                    <div className="pt-2 text-accent-bright label-tracked text-xs uppercase font-bold">
                                        Sunday: Closed for Fleet Maintenance
                                    </div>
                                </div>
                                <div className="bg-carbon-soft p-6 space-y-3">
                                    <span className="label-tracked text-xs text-accent-bright uppercase tracking-widest block">
                                        Fleet Dispatch Capability
                                    </span>
                                    <p className="font-display font-bold text-lg uppercase text-on-accent font-bold">
                                        Hiab Cranes & Transit Drop
                                    </p>
                                    <p className="text-xs text-on-accent/70">
                                        Equipped for curbside, driveway, and direct-to-scaffold lifting across
                                        high-density residential streets.
                                    </p>
                                    <div className="pt-2 text-accent-bright label-tracked text-xs uppercase font-bold">
                                        Payload Rating: Up to 26 Tonnes
                                    </div>
                                </div>
                                <div className="bg-carbon-soft p-6 space-y-3">
                                    <span className="label-tracked text-xs text-accent-bright uppercase tracking-widest block">
                                        Contractor Credit Facility
                                    </span>
                                    <p className="font-display font-bold text-lg uppercase text-on-accent font-bold">
                                        Direct Merchant Terms
                                    </p>
                                    <p className="text-xs text-on-accent/70">
                                        Simplified monthly billing, fixed project quotes, and priority dispatch
                                        allocations for registered site managers.
                                    </p>
                                    <div className="pt-2 text-accent-bright label-tracked text-xs uppercase font-bold">
                                        Application: Counter or Phone Review
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="w-full bg-surface px-5 sm:px-6 lg:px-12 py-16 lg:py-24">
                <div className="mx-auto w-full max-w-[1280px] grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <div className="lg:col-span-5 space-y-6">
                        <div className="space-y-2">
                            <span className="label-tracked text-xs text-accent font-bold uppercase tracking-widest">
                                Direct Specification Desk
                            </span>
                            <h2 className="font-display font-bold text-2xl md:text-3xl uppercase font-bold text-carbon tracking-tight">
                                Reserve Materials Before You Travel
                            </h2>
                        </div>
                        <p className="text-ink-variant leading-relaxed">
                            Call ahead and we will stage your order at the counter, ready for rapid pickup. Or
                            book a delivery slot and we will drop it direct to site.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 pt-2">
                            <a
                                href={`tel:${company.phone.replace(/\s/g, "")}`}
                                className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-accent-bright hover:bg-accent text-on-accent label-tracked text-xs uppercase tracking-widest font-bold transition-colors shadow-hard-accent"
                            >
                                <span className="material-symbols-outlined">call</span>
                                <span>Call {company.phone}</span>
                            </a>
                            <a
                                href="/contact"
                                className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-carbon text-on-accent hover:bg-accent label-tracked text-xs uppercase tracking-widest font-bold transition-colors shadow-hard"
                            >
                                <span>Contact Us</span>
                            </a>
                        </div>
                    </div>
                    <div className="lg:col-span-7 bg-surface-container p-8 space-y-4">
                        <div className="label-tracked text-xs text-accent font-bold uppercase tracking-widest">
                            Registered Address
                        </div>
                        <p className="font-display font-bold text-xl uppercase text-carbon font-bold">
                            {company.address}
                        </p>
                        <p className="text-sm text-ink-variant">
                            {company.hours}
                        </p>
                        <div className="pt-4 border-t border-stone-line flex flex-wrap gap-4 text-sm">
                            <a
                                href={`tel:${company.phone.replace(/\s/g, "")}`}
                                className="text-accent font-bold hover:underline"
                            >
                                {company.phone}
                            </a>
                            <a
                                href={`tel:${company.mobile.replace(/\s/g, "")}`}
                                className="text-accent font-bold hover:underline"
                            >
                                {company.mobile}
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}