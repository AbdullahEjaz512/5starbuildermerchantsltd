# 5 Star Builders Merchants Ltd

Production-ready marketing website for **5 Star Builders Merchants Ltd**, a local Birmingham builders merchant supplying building materials for repair, renovation, and any building work.

Built with **Next.js (App Router) + TypeScript + Tailwind CSS v4**, following the Google Stitch design export for layout, spacing, and visual direction.

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
  layout.tsx          # Root layout with fonts, metadata, Header, Footer
  page.tsx            # Home page
  about/page.tsx      # About page
  services/page.tsx   # Services page
  contact/page.tsx    # Contact page
  not-found.tsx       # 404 page
  globals.css         # Design tokens + global styles
components/
  layout/             # Header, Footer, MobileNav, Container
  home/               # Hero, TrustStrip, ServicesPreview, DeliveryBanner, CTASection
  about/              # AboutContent
  services/           # ServiceCard, ServicesGrid
  contact/            # ContactForm, ContactDetails, MapEmbed
  ui/                 # Button, SectionHeading, StarRating
lib/
  site.ts             # Centralised business data (phones, address, services, nav)
  utils.ts            # cn() class merge helper
public/
  images/             # Image assets
```

## Design system

The visual language follows the Stitch "Architectural Craft" / "Foundry & Aggregate" design systems:

- **Canvas:** warm off-white `#FBF9F6` with soft concrete surfaces
- **Ink:** deep charcoal `#1B1C1A` for high-contrast typography
- **Accent:** burnt orange / deep amber `#A63B00` / `#FC763B` for CTAs and status indicators
- **Typography:** Space Grotesk (display) + Hanken Grotesk (body)
- **Shape language:** sharp 0px corners, hairline 1px stone borders, hard offset shadows
- **Dark blocks:** carbon `#1C1C1C` used only for contrast sections (trust strip, footer, CTA monoliths)

## Notes

- **Contact form:** client-side validation only. On submit it opens the visitor's email client with a pre-filled message (mailto fallback). To wire a real backend, add a route handler at `app/api/contact/route.ts` and swap the `handleSubmit` logic in `components/contact/ContactForm.tsx`.
- **Images:** High-resolution trade imagery is stored in `public/images/` and `public/images/services/`, optimized and rendered using `next/image` with responsive `sizes` across Hero, Services, About, Delivery, and Contact pages.
- **Phone numbers** are centralised in `lib/site.ts` — update once and every page, button, and footer link stays in sync.

## SEO

Each page exports unique `metadata` (title + description). Open Graph and Twitter cards are configured in `app/layout.tsx`.

## License

© 2026 5 Star Builders Merchants Ltd. All rights reserved.
