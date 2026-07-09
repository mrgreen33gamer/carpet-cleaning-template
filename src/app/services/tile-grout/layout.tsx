import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.puresoftcarpet.com';
const url = BASE_URL + '/services/tile-grout';

export const metadata: Metadata = {
  title: "Tile & Grout Cleaning Waco TX | PureSoft Carpet Care",
  description: "Tile and grout cleaning in Waco and Central Texas. Kitchens, baths, entries — restore color and remove ground-in soil. Flat-rate pricing, IICRC-certified.",
  keywords: ["tile and grout cleaning Waco TX","grout cleaning Waco","tile floor cleaning Central Texas","PureSoft Carpet Care"],
  alternates: { canonical: url },
  openGraph: {
    title: "Tile & Grout Cleaning Waco TX | PureSoft Carpet Care",
    description: "Tile and grout cleaning in Waco and Central Texas. Kitchens, baths, entries — restore color and remove ground-in soil. Flat-rate pricing, IICRC-certified.",
    url,
    siteName: "PureSoft Carpet Care",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tile & Grout Cleaning Waco TX | PureSoft Carpet Care",
    description: "Tile and grout cleaning in Waco and Central Texas. Kitchens, baths, entries — restore color and remove ground-in soil. Flat-rate pricing, IICRC-certified.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Tile & Grout Cleaning",
  description: "Tile and grout cleaning in Waco and Central Texas. Kitchens, baths, entries — restore color and remove ground-in soil. Flat-rate pricing, IICRC-certified.",
  provider: {
    "@type": "LocalBusiness",
    name: "PureSoft Carpet Care",
    url: BASE_URL,
    telephone: "+12548303030",
    address: {
      "@type": "PostalAddress",
      streetAddress: "2800 W Waco Dr",
      addressLocality: "Waco",
      addressRegion: "TX",
      postalCode: "76707",
      addressCountry: "US",
    },
  },
  areaServed: [
    { "@type": "City", name: "Waco", containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Hewitt", containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Woodway", containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Bellmead", containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "China Spring", containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "McGregor", containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Temple", containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Killeen", containedInPlace: { "@type": "State", name: "Texas" } },
  ],
  serviceType: "Tile & Grout Cleaning",
  url,
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {children}
    </>
  );
}
