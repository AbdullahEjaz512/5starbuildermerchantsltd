export type GalleryCategory = {
    id: string;
    label: string;
};

export type GalleryImage = {
    id: string;
    src: string;
    alt: string;
    caption: string;
    category: string;
};

export const galleryCategories: GalleryCategory[] = [
    { id: "all", label: "All" },
    { id: "yard", label: "Our Yard" },
    { id: "timber", label: "Structural Timber" },
    { id: "plumbing", label: "Plumbing & Copper" },
    { id: "plasterboard", label: "Plasterboard & Drylining" },
    { id: "counter", label: "Trade Counter" },
    { id: "delivery", label: "Delivery & Dispatch" },
];

export const CLONES_COUNT = 3; // Number of images to clone from each end for infinite loop

export const galleryImages: GalleryImage[] = [

    {
        id: "gallery-01",
        src: "/images/gallery/WhatsApp Image 2026-11-18 at 12.06.41 PM.jpeg",
        alt: "5 Star Builders Merchants Birmingham depot yard",
        caption: "Birmingham depot yard at 30 Tame Road, B6 7DS.",
        category: "yard",
    },
    {
        id: "gallery-02",
        src: "/images/gallery/WhatsApp Image 2026-11-18 at 12.06.42 PM (1).jpeg",
        alt: "Structural timber stock at 5 Star Builders Merchants",
        caption: "Structural timber and building materials held at the trade counter.",
        category: "timber",
    },
    {
        id: "gallery-03",
        src: "/images/gallery/WhatsApp Image 2026-11-18 at 12.06.42 PM.jpeg",
        alt: "Plumbing and copper fittings at 5 Star Builders Merchants",
        caption: "Plumbing and copper supplies available from the yard.",
        category: "plumbing",
    },
    {
        id: "gallery-04",
        src: "/images/gallery/WhatsApp Image 2026-11-18 at 12.06.43 PM (1).jpeg",
        alt: "Plasterboard and drylining materials at 5 Star Builders Merchants",
        caption: "Plasterboard and drylining stock for trade collection or delivery.",
        category: "plasterboard",
    },
    {
        id: "gallery-05",
        src: "/images/gallery/WhatsApp Image 2026-11-18 at 12.06.43 PM (2).jpeg",
        alt: "Trade counter at 5 Star Builders Merchants Birmingham",
        caption: "Trade counter serving contractors and self-builders.",
        category: "counter",
    },
    {
        id: "gallery-06",
        src: "/images/gallery/WhatsApp Image 2026-11-18 at 12.06.43 PM.jpeg",
        alt: "Delivery and dispatch operations at 5 Star Builders Merchants",
        caption: "Delivery fleet and dispatch operations for West Midlands sites.",
        category: "delivery",
    },
    {
        id: "gallery-07",
        src: "/images/gallery/WhatsApp Image 2026-11-18 at 12.06.44 PM (1).jpeg",
        alt: "Building materials stock at 5 Star Builders Merchants",
        caption: "Trade materials held at the Aston depot for rapid collection.",
        category: "yard",
    },
    {
        id: "gallery-08",
        src: "/images/gallery/WhatsApp Image 2026-11-18 at 12.06.44 PM.jpeg",
        alt: "Trade operations at 5 Star Builders Merchants Birmingham",
        caption: "Day-to-day trade operations at the B6 7DS depot.",
        category: "delivery",
    },
];

// Create a looped array for the carousel to enable infinite scrolling
export const loopedGalleryImages: GalleryImage[] = [
    ...galleryImages.slice(-CLONES_COUNT).map((img) => ({ ...img, id: `clone-prev-${img.id}` })),
    ...galleryImages,
    ...galleryImages.slice(0, CLONES_COUNT).map((img) => ({ ...img, id: `clone-next-${img.id}` })),
];

// Keep track of the actual number of real images (excluding clones)
export const realImageCount = galleryImages.length;
