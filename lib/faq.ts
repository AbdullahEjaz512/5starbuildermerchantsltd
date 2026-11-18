export type FaqItem = {
    id: string;
    question: string;
    answer: string;
};

/**
 * FAQ content — all answers use only verified business information.
 * Where a fact cannot be verified (delivery charges, coverage, minimum orders,
 * payment terms, stock guarantees, returns), the answer directs the customer
 * to contact the business directly rather than inventing a policy.
 */
export const faqs: FaqItem[] = [
    {
        id: "location",
        question: "Where is 5 Star Builders Merchants located?",
        answer:
            "We are based at 30 Tame Road, Birmingham, B6 7DS, United Kingdom. Our depot is just off the A38(M) Aston Expressway, minutes from M6 Junction 6.",
    },
    {
        id: "opening-hours",
        question: "What are your opening hours?",
        answer:
            "Our trade counter is open Monday to Saturday, 07:00–17:30. We are closed on Sundays.",
    },
    {
        id: "materials",
        question: "What building materials do you supply?",
        answer:
            "We supply structural timber, plumbing and copper fittings, electrical supplies, fascia and soffit, guttering, underground drainage, plasterboard and drylining, and bonding and plasters. If you need something specific, call us on 0121 7291749 to check.",
    },
    {
        id: "trade-and-public",
        question: "Do you supply both trade customers and the general public?",
        answer:
            "Yes. We serve trade contractors, developers, and self-builders as well as members of the public. Call the trade counter on 0121 7291749 to discuss your requirements.",
    },
    {
        id: "stock-check",
        question: "Can I check stock availability before visiting?",
        answer:
            "For current stock availability, please call our team on 0121 7291749 or message us on WhatsApp at 07397 573929 before you travel.",
    },
    {
        id: "delivery",
        question: "Do you offer delivery services?",
        answer:
            "Yes, we offer delivery across the West Midlands. For delivery availability, charges, and scheduling for your postcode, please call 0121 7291749 or WhatsApp 07397 573929.",
    },
    {
        id: "quotation",
        question: "Can I request a quotation?",
        answer:
            "Yes. Send us your material list by phone on 0121 7291749, by WhatsApp on 07397 573929, or through the contact form on this page and we will come back with prices.",
    },
    {
        id: "whatsapp",
        question: "Can I send my material requirements through WhatsApp?",
        answer:
            "Yes. You can send your material list directly to our WhatsApp number, 07397 573929, and our team will respond.",
    },
    {
        id: "trade-accounts",
        question: "Do you offer trade accounts?",
        answer:
            "Trade account options are available. Please call the trade counter on 0121 7291749 to discuss account setup and terms.",
    },
    {
        id: "contact",
        question: "How can I contact 5 Star Builders Merchants?",
        answer:
            "Call the trade counter on 0121 7291749, message us on WhatsApp at 07397 573929, or use the contact form on this page. You can also visit us at 30 Tame Road, Birmingham, B6 7DS.",
    },
];

/** Compact subset shown on the homepage. */
export const homepageFaqIds = ["materials", "delivery", "stock-check", "quotation"];

export const homepageFaqs: FaqItem[] = homepageFaqIds
    .map((id) => faqs.find((f) => f.id === id))
    .filter((f): f is FaqItem => Boolean(f));
