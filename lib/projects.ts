export type ProjectCategory = {
    id: string;
    label: string;
};

export type ProjectItem = {
    id: string;
    title: string;
    client: string;
    location: string;
    category: string;
    description: string;
    image: string;
    details: {
        label: string;
        value: string;
    }[];
};

export const projectCategories: ProjectCategory[] = [
    { id: "all", label: "All Projects" },
    { id: "residential", label: "Residential" },
    { id: "commercial", label: "Commercial" },
    { id: "industrial", label: "Industrial" },
    { id: "civils", label: "Civils & Infrastructure" },
];

export const projects: ProjectItem[] = [
    {
        id: "proj-01",
        title: "Aston Housing Development",
        client: "West Midlands Homes",
        location: "Aston, Birmingham",
        category: "residential",
        description:
            "Supplied structural C24 timber, premium facing bricks, and underground drainage systems for a 12-unit residential development. Managed phased deliveries to match the site schedule.",
        image: "/images/about-yard.jpg",
        details: [
            { label: "Duration", value: "8 Months" },
            { label: "Scope", value: "Structural & Civils" },
            { label: "Delivery", value: "HIAB Crane Drop" },
        ],
    },
    {
        id: "proj-02",
        title: "Birmingham Retail Park Upgrade",
        client: "City Commercial Ltd",
        location: "Erdington, Birmingham",
        category: "commercial",
        description:
            "Full supply of electrical infrastructure, specialized plumbing fittings, and internal partitioning for a large-scale retail unit renovation. Coordinated multi-vehicle deliveries during tight night-time windows.",
        image: "/images/services/electric.jpg",
        details: [
            { label: "Duration", value: "3 Months" },
            { label: "Scope", value: "Electrical & Internal" },
            { label: "Delivery", value: "Artic Friendly" },
        ],
    },
    {
        id: "proj-03",
        title: "Industrial Yard Extension",
        client: "Tame Road Industrial",
        location: "Witton, Birmingham",
        category: "industrial",
        description:
            "Provision of heavy-duty drainage, steel reinforcement mesh, and bulk aggregates for a 2,000 sq ft yard expansion. Utilized our specialized fleet for rapid site clearance and material drop-off.",
        image: "/images/hero-yard.jpg",
        details: [
            { label: "Duration", value: "5 Weeks" },
            { label: "Scope", value: "Groundworks & Drainage" },
            { label: "Delivery", value: "Bulk Tipper" },
        ],
    },
    {
        id: "proj-04",
        title: "City Center Office Fit-Out",
        client: "Modern Office Solutions",
        location: "Birmingham City Centre",
        category: "commercial",
        description:
            "High-volume supply of moisture-resistant plasterboard, acoustic insulation, and modern electrical containment systems for a 4-story office refurbishment project.",
        image: "/images/services/plasterboard.jpg",
        details: [
            { label: "Duration", value: "6 Months" },
            { label: "Scope", value: "Drylining & Fit-out" },
            { label: "Delivery", value: "Timed Drops" },
        ],
    },
    {
        id: "proj-05",
        title: "Residential Self-Build Project",
        client: "Private Client",
        location: "Sutton Coldfield",
        category: "residential",
        description:
            "End-to-end material partnership for a premium 5-bedroom self-build. Provided everything from initial groundworks materials to final roofing and guttering supplies.",
        image: "/images/services/wood.jpg",
        details: [
            { label: "Duration", value: "14 Months" },
            { label: "Scope", value: "Full Build Supply" },
            { label: "Delivery", value: "Flexible HIAB" },
        ],
    },
    {
        id: "proj-06",
        title: "Local School Infrastructure Repair",
        client: "Education Authority",
        location: "Nechells, Birmingham",
        category: "civils",
        description:
            "Urgent supply of specialized plumbing fittings and underground drainage for a critical infrastructure repair at a local primary school. Delivered within 4 hours of order.",
        image: "/images/services/drainage.jpg",
        details: [
            { label: "Duration", value: "1 Week" },
            { label: "Scope", value: "Emergency Civils" },
            { label: "Delivery", value: "Express Transit" },
        ],
    },
];
