# 5 Star Builders Merchants Ltd

Production-ready marketing website for **5 Star Builders Merchants Ltd**, a local Birmingham builders merchant supplying building materials for repair, renovation, and any building work.

Built with **Next.js (App Router) + TypeScript + Tailwind CSS v4**, following the Google Stitch design export for layout, spacing, and visual direction and for email used resend api.

## Business details

- **Name:** 5 Star Builders Merchants Ltd
- **Address:** 30 Tame Road, Birmingham, England, B6 7DS
- **Phone:** 0121 7291749
- **Mobile / WhatsApp:** 07397 573929
- **Hours:** Mon – Sat: 07:00 – 17:30
- **Services:** Plumbing, Wood, Electric, Fascia, Guttering, Drainage, Plasterboard, Scheme Bonding

## Getting started

```bash
# Install dependencies
npm install

# Run the development server
npm run dev

# Build for production
npm run build

# Start the production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project structure

```
app/
  layout.tsx          # Root layout: fonts, metadata, JSON-LD, Header, Footer, FloatingWhatsApp
  page.tsx            # Home page
  about/page.tsx      # About page
  services/page.tsx   # Services page
  contact/page.tsx    # Contact page
  not-found.tsx       # 404 page
  robots.ts           # robots.txt generator (allows AI crawlers)
  sitemap.ts          # sitemap.xml generator
  manifest.ts         # PWA web app manifest
  globals.css         # Design tokens + global styles
components/
  layout/             # Header, Footer, MobileNav, Container, FloatingWhatsApp
  home/               # Hero, TrustStrip, ServicesPreview, DeliveryBanner, CTASection
  about/              # AboutContent
  services/           # ServiceCard, ServicesGrid
  contact/            # ContactForm, ContactDetails, MapEmbed
  ui/                 # Button, SectionHeading, StarRating
lib/
  site.ts             # Centralised business data (phones, address, services, nav)
  utils.ts            # cn() class merge helper
public/
  images/             # Photographic assets (hero, about, contact, delivery, services/*)
  llms.txt            # LLM context file (concise business summary)
  llms-full.txt       # LLM context file (full specifications & product matrices)
```

## Design system

The visual language follows the Stitch "Architectural Craft" / "Foundry & Aggregate" design systems:

- **Canvas:** warm off-white `#FBF9F6` with soft concrete surfaces
- **Ink:** deep charcoal `#1B1C1A` for high-contrast typography
- **Accent:** burnt orange / deep amber `#A63B00` / `#FC763B` for CTAs and status indicators
- **Typography:** Space Grotesk (display) + Hanken Grotesk (body)
- **Shape language:** sharp 0px corners, hairline 1px stone borders, hard offset shadows
- **Dark blocks:** carbon `#1C1C1C` used only for contrast sections (trust strip, footer, CTA monoliths)

## SEO & AI discoverability

The site is engineered for both traditional search engines and LLM crawlers:

- **Metadata:** every page exports unique `metadata` (title + description). `app/layout.tsx` sets `metadataBase`, canonical alternates, Open Graph, Twitter summary_large_image, extended `googleBot` directives, and 15 local keywords.
- **JSON-LD structured data:** a schema.org `@graph` in the document head containing a `HardwareStore` / `HomeAndConstructionBusiness` / `LocalBusiness` entity (name, address, geo coordinates, opening hours, telephone, email, price range, area served, and an `OfferCatalog` of all 8 product lines) plus a `WebSite` entity.
- **robots.txt** (`app/robots.ts`): allows all agents, disallows `/api/`, and explicitly allows AI crawlers (GPTBot, ChatGPT-User, Google-Extended, ClaudeBot, anthropic-ai, PerplexityBot, Applebot-Extended, cohere-ai) so LLMs can index the site.
- **sitemap.xml** (`app/sitemap.ts`): all 4 routes with change frequencies, priorities, and per-page image entries.
- **PWA manifest** (`app/manifest.ts`): installable app metadata with theme/background colours.
- **llms.txt / llms-full.txt** (`public/`): concise and full-context files describing the business, depot, hours, logistics, and complete product matrices so AI assistants can answer questions about the company accurately.
- **Floating WhatsApp CTA:** fixed bottom-right button linking to `wa.me` with a prefilled trade-quote message.

## Notes

- **Contact form:** client-side validation only. On submit it opens the visitor's email client with a pre-filled message (mailto fallback). To wire a real backend, add a route handler at `app/api/contact/route.ts` and swap the `handleSubmit` logic in `components/contact/ContactForm.tsx`.
- **Images:** high-resolution trade imagery is stored locally in `public/images/` and `public/images/services/`, rendered with `next/image` (`fill` + responsive `sizes`) across Hero, Services, About, Delivery, CTA, and Contact sections for automatic optimisation. Replace with licensed photography of the actual depot when available.
- **Phone numbers** are centralised in `lib/site.ts` — update once and every page, button, and footer link stays in sync.

## License

© 2026 5 Star Builders Merchants Ltd. All rights reserved.
