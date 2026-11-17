import type { Metadata } from "next";
import { Space_Grotesk, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { meta } from "@/lib/site";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["500", "600", "700"],
});

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken-grotesk",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: `${meta.siteName} | Birmingham Builders Merchant & Building Materials Supplier`,
    template: `%s | ${meta.siteName}`,
  },
  description: meta.defaultDescription,
  keywords: [
    "builders merchant Birmingham",
    "building materials Birmingham",
    "trade counter Birmingham",
    "timber merchant Birmingham",
    "plumbing supplies Birmingham",
    "electrical supplies Birmingham",
    "plasterboard Birmingham",
    "drainage Birmingham",
    "fascia soffit Birmingham",
    "guttering Birmingham",
    "scheme bonding Birmingham",
  ],
  openGraph: {
    title: `${meta.siteName} | Birmingham Builders Merchant`,
    description: meta.defaultDescription,
    url: "https://5starbuildersmerchants.co.uk",
    siteName: meta.siteName,
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${meta.siteName} | Birmingham Builders Merchant`,
    description: meta.defaultDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${hankenGrotesk.variable} h-full antialiased`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>
      <body className="min-h-full flex flex-col bg-canvas text-ink font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
