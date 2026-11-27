export const company = {
    name: "5 Star Builders Merchants Ltd",
    tagline: "We provide all building stuff. We deliver as well.",
    address: "30 Tame Road, Birmingham, England, B6 7DS",
    phone: "0121 7291749",
    mobile: "07397 573929",
    whatsapp: "447397573929",
    email: "info@5starbuildersmerchants.co.uk",
    hours: "Mon – Sat: 07:00 – 17:30",
    sunday: "Closed",
    description:
        "Local Birmingham builders merchant supplying building materials for repair, renovation, and any building work. Trade counter pickup and same-day delivery across the West Midlands.",
};

export const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/projects", label: "Projects" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact" },
];

export type Service = {
    id: string;
    name: string;
    icon: string;
    badge: string;
    image: string;
    description: string;
    stock: string;
    pageTitle: string;
    metaDescription: string;
    intro: string;
    range: string[];
    applications: string[];
    benefits: string[];
};

export const services: Service[] = [
    {
        id: "plumbing",
        name: "Plumbing & Copper",
        icon: "water_damage",
        badge: "BS EN 1057",
        image: "/images/services/plumbing.jpg",
        description:
            "Full range of end feed, compression, and modern press fittings. 15mm, 22mm, 28mm copper coils and rigid straight lengths.",
        stock: "Yard Ready • Instant Cut",
        pageTitle: "Plumbing Supplies & Copper Pipe in Birmingham",
        metaDescription:
            "Buy BS EN 1057 copper pipe, fittings, valves and plumbing supplies from 5 Star Builders Merchants in Birmingham. Trade counter collection and local delivery.",
        intro:
            "Reliable copper and plumbing materials for domestic repairs, commercial plant rooms and full installations. Our Birmingham trade counter can help you match pipe sizes, fittings and isolation requirements.",
        range: [
            "15mm, 22mm and 28mm copper tube",
            "End-feed, compression and press fittings",
            "Valves, taps and waste fittings",
            "Pipe clips, elbows, tees and couplings",
            "Plastic pipe systems and accessories",
        ],
        applications: [
            "Hot and cold water systems",
            "Heating upgrades and repairs",
            "Bathrooms and kitchens",
            "Commercial and industrial pipework",
        ],
        benefits: [
            "Trade-grade BS EN 1057 copper",
            "Known stock sizes ready for collection",
            "Material lists checked at the counter",
            "Local delivery across Birmingham and the West Midlands",
        ],
    },
    {
        id: "wood",
        name: "Structural Timber",
        icon: "carpenter",
        badge: "C24 SCANDINAVIAN",
        image: "/images/services/wood.jpg",
        description:
            "C16 and C24 kilned & treated carcassing, roof joists, CLS studwork, roofing battens, marine and OSB3 structural sheeting.",
        stock: "Custom Pack Cuts",
        pageTitle: "Structural Timber, C24 Joists & Sheet Materials",
        metaDescription:
            "Order C16 and C24 timber, roof joists, CLS, battens and OSB structural boards in Birmingham from 5 Star Builders Merchants.",
        intro:
            "From framing and flooring to roofing and extensions, source straight, dependable structural timber and sheet materials for the full build envelope. Tell us the finished size or material schedule and we will help you calculate the packs.",
        range: [
            "C16 and C24 carcassing",
            "Roof and floor joists",
            "CLS studwork and framing",
            "Roofing battens",
            "Marine ply, OSB2 and OSB3 boards",
        ],
        applications: [
            "Roof construction and refurbishment",
            "Floor and joist systems",
            "Wall framing and partitions",
            "Extensions, lofts and general renovations",
        ],
        benefits: [
            "Strength-marked structural grades",
            "Consistent, trade-quality stock",
            "Pack and cut quantities supplied",
            "Delivery coordinated to the site schedule",
        ],
    },
    {
        id: "electric",
        name: "Electrical Infrastructure",
        icon: "bolt",
        badge: "18TH EDITION",
        image: "/images/services/electric.jpg",
        description:
            "Twin & earth twin cabling drums, metal clad consumer units, galvanised containment, conduit, isolators & switchgear.",
        stock: "100m Drums & Bundles",
        pageTitle: "Electrical Supplies & Cable in Birmingham",
        metaDescription:
            "Buy 18th Edition cable, consumer units, conduit, containment and electrical accessories at 5 Star Builders Merchants in Birmingham.",
        intro:
            "A practical electrical supply range for rewires, extensions and commercial fit-outs. We stock the core cables, containment and accessories needed to keep work moving, with full reels and trade quantities available.",
        range: [
            "Twin and earth cable",
            "Metal-clad consumer units",
            "Conduit and galvanised containment",
            "Isolators and switchgear",
            "Cable accessories and fixings",
        ],
        applications: [
            "Domestic rewires",
            "New-build and extension circuits",
            "Commercial fit-outs",
            "Sheds, garages and outdoor installations",
        ],
        benefits: [
            "Trade quantities and full drum lengths",
            "Core 18th Edition components",
            "Counter support for schedule lists",
            "Birmingham yard collection and delivery",
        ],
    },
    {
        id: "fascia",
        name: "Fascia & Soffit",
        icon: "roofing",
        badge: "HEAVY DUTY UPVC",
        image: "/images/services/fascia.jpg",
        description:
            "Solid full-replacement fascia boards, capping boards, vented and hollow soffits in white, anthracite grey, and black ash.",
        stock: "5-Metre Lengths",
        pageTitle: "UPVC Fascia Boards & Soffit Supplies Birmingham",
        metaDescription:
            "Shop UPVC fascia boards, soffits, ventilation and replacement roofline components in Birmingham with local trade counter pickup.",
        intro:
            "Complete roofline materials for new fascia and soffit installations, repairs and full replacements. Choose matching boards, trims and ventilation components to deliver a consistent weatherproof finish.",
        range: [
            "Solid replacement fascia boards",
            "Fascia capping boards",
            "Vented and hollow soffits",
            "Joint trims and corners",
            "Roofline vents and fixings",
        ],
        applications: [
            "Roofline replacement",
            "New extensions and garages",
            "Property refurbishments",
            "Commercial roof edging",
        ],
        benefits: [
            "Matching colour and profile options",
            "Trade-length boards",
            "Complete fitting components",
            "Advice on ventilation and coverage",
        ],
    },
    {
        id: "guttering",
        name: "Deepflow Guttering",
        icon: "shower",
        badge: "HIGH CAPACITY",
        image: "/images/services/guttering.jpg",
        description:
            "High flow rainwater systems, squareline, roundline and industrial commercial deep gutter with matching downpipes & offsets.",
        stock: "Full Fitting Packs",
        pageTitle: "Guttering, Downpipes & Rainwater Systems Birmingham",
        metaDescription:
            "Buy deepflow, squareline and roundline guttering, downpipes and fittings for Birmingham homes and commercial buildings.",
        intro:
            "Rainwater systems supplied as complete, matched components for reliable drainage and easier installation. We can help with gutter profiles, downpipe sizes, outlets and brackets.",
        range: [
            "Deepflow and industrial gutters",
            "Squareline and roundline systems",
            "Downpipes and offset bends",
            "Outlets, unions and stop ends",
            "Brackets and fixing accessories",
        ],
        applications: [
            "Domestic roof drainage",
            "Large and high-pitch roofs",
            "Extensions and garages",
            "Commercial rainwater systems",
        ],
        benefits: [
            "High-capacity drainage profiles",
            "Matched fittings and components",
            "Common colours in stock",
            "Collection or local delivery",
        ],
    },
    {
        id: "drainage",
        name: "Underground Drainage",
        icon: "hardware",
        badge: "110MM / 160MM",
        image: "/images/services/drainage.jpg",
        description:
            "Terracotta sewer pipes, inspection chambers, bottle gullies, non-return valves, land drainage coils and soakaway crates.",
        stock: "Heavy Groundwork Grade",
        pageTitle: "Underground Drainage & Sewer Pipe Birmingham",
        metaDescription:
            "Source 110mm and 160mm drainage pipe, chambers, gullies and soakaway materials for Birmingham groundwork projects.",
        intro:
            "Groundwork and drainage products for foul water, surface water and landscaping applications. Bring your pipe run, outlet type and project details and our team can help organise the required fittings.",
        range: [
            "110mm and 160mm drainage pipes",
            "Inspection chambers and covers",
            "Bottle and yard gullies",
            "Non-return valves and adaptors",
            "Land drainage coils and soakaway crates",
        ],
        applications: [
            "Domestic foul drainage",
            "Surface water systems",
            "Groundworks and foundations",
            "Land drainage and soakaways",
        ],
        benefits: [
            "Groundwork-grade components",
            "Common pipe sizes kept in stock",
            "Compatible fitting ranges",
            "Heavy-load collection and delivery options",
        ],
    },
    {
        id: "plasterboard",
        name: "Plasterboard & Drylining",
        icon: "layers",
        badge: "FIRE & ACOUSTIC",
        image: "/images/services/plasterboard.jpg",
        description:
            "Soundshield blue acoustic boards, pink fireline, moisture board, standard square & tapered edge 12.5mm / 15mm sheets.",
        stock: "Bulk Pallets or Loose",
        pageTitle: "Plasterboard, Fireline & Acoustic Drylining",
        metaDescription:
            "Buy standard, moisture, fireline and acoustic plasterboard plus drylining materials from a Birmingham builders merchant.",
        intro:
            "Drylining boards and fixing materials for walls, ceilings and specialist partitions. We supply standard, moisture-resistant, fire-rated and acoustic options in loose sheets or bulk quantities.",
        range: [
            "Standard tapered-edge plasterboard",
            "Pink fireline board",
            "Blue acoustic Soundshield board",
            "Moisture-resistant board",
            "Metal framing, screws and insulation",
        ],
        applications: [
            "Wall linings and partitions",
            "Ceilings and loft conversions",
            "Bathrooms and wet areas",
            "Fire and acoustic-rated build-ups",
        ],
        benefits: [
            "Specialist board grades available",
            "Bulk pallet or loose-sheet supply",
            "Compatible drylining fixings",
            "Safe local transport and delivery",
        ],
    },
    {
        id: "scheme-bonding",
        name: "Bonding & Plasters",
        icon: "architecture",
        badge: "FRESH ROTATION",
        image: "/images/services/bonding.jpg",
        description:
            "Thistle Multi-Finish, British Gypsum Scheme Bonding Coat, Hardwall, Dri-Wall adhesive, corner beads, scrim tape & pre-grit.",
        stock: "Dry Warehoused",
        pageTitle: "Plaster, Bonding Coat & Drylining Supplies",
        metaDescription:
            "Shop bonding coat, Thistle plaster, Hardwall, Dri-Wall adhesive and finishing accessories in Birmingham.",
        intro:
            "Plasters, bonding compounds and finishing accessories for new substrates and refurbishment work. Core products are dry warehoused and available for counter collection or delivery.",
        range: [
            "Thistle Multi-Finish and Basecoat",
            "British Gypsum bonding coat",
            "Hardwall and browning plaster",
            "Dri-Wall bonding adhesive",
            "Corner beads, scrim and pre-grit",
        ],
        applications: [
            "Plasterboarding and dot-and-dab",
            "Brick and block wall preparation",
            "Skimming and final finishes",
            "Repair and renovation work",
        ],
        benefits: [
            "Fresh stock rotation",
            "Common trade bags in bulk",
            "Complete accessory ranges",
            "Collection and bulk delivery",
        ],
    },
];

export const deliveryAreas = [
    "Central Birmingham",
    "Aston (B6)",
    "Erdington",
    "Sutton Coldfield",
    "Solihull",
    "Walsall & Dudley",
];

export const trustPoints = [
    {
        label: "Trade Counter Hours",
        value: "07:00–17:30",
    },
    {
        label: "Open Days",
        value: "Mon–Sat",
    },
    {
        label: "Depot Postcode",
        value: "B6 7DS",
    },
    {
        label: "Delivery Area",
        value: "West Midlands",
    },
];

export const meta = {
    siteName: "5 Star Builders Merchants Ltd",
    defaultDescription:
        "Local Birmingham builders merchant supplying building materials for repair, renovation, and any building work. Trade counter pickup and same-day delivery across the West Midlands.",
    openGraph: {
        type: "website",
        locale: "en_GB",
        siteName: "5 Star Builders Merchants Ltd",
    },
};