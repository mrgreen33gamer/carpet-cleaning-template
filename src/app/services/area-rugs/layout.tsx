import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.puresoftcarpet.com';
const url = BASE_URL + '/services/area-rugs';

export const metadata: Metadata = {
  title: "Area Rug Cleaning Waco TX | PureSoft Carpet Care",
  description: "Area rug cleaning in Waco and Central Texas. Wool, synthetic, and specialty rugs cleaned carefully with proper dry and fiber care. Flat-rate pricing.",
  keywords: ["area rug cleaning Waco TX","wool rug cleaning Waco","oriental rug cleaning Central Texas","PureSoft Carpet Care"],
  alternates: { canonical: url },
  openGraph: {
    title: "Area Rug Cleaning Waco TX | PureSoft Carpet Care",
    description: "Area rug cleaning in Waco and Central Texas. Wool, synthetic, and specialty rugs cleaned carefully with proper dry and fiber care. Flat-rate pricing.",
    url,
    siteName: "PureSoft Carpet Care",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Area Rug Cleaning Waco TX | PureSoft Carpet Care",
    description: "Area rug cleaning in Waco and Central Texas. Wool, synthetic, and specialty rugs cleaned carefully with proper dry and fiber care. Flat-rate pricing.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Area Rug Cleaning",
  description: "Area rug cleaning in Waco and Central Texas. Wool, synthetic, and specialty rugs cleaned carefully with proper dry and fiber care. Flat-rate pricing.",
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
  serviceType: "Area Rug Cleaning",
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
