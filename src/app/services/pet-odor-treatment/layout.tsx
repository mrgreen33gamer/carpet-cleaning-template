import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.puresoftcarpet.com';
const url = BASE_URL + '/services/pet-odor-treatment';

export const metadata: Metadata = {
  title: "Pet Odor Treatment Waco TX | PureSoft Carpet Care",
  description: "Pet odor and stain treatment in Waco and Central Texas. Enzyme chemistry and extraction for urine odor that surface cleaners miss. Flat-rate pricing.",
  keywords: ["pet odor carpet cleaning Waco","pet urine carpet treatment Waco TX","dog cat stain removal Central Texas","PureSoft Carpet Care"],
  alternates: { canonical: url },
  openGraph: {
    title: "Pet Odor Treatment Waco TX | PureSoft Carpet Care",
    description: "Pet odor and stain treatment in Waco and Central Texas. Enzyme chemistry and extraction for urine odor that surface cleaners miss. Flat-rate pricing.",
    url,
    siteName: "PureSoft Carpet Care",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pet Odor Treatment Waco TX | PureSoft Carpet Care",
    description: "Pet odor and stain treatment in Waco and Central Texas. Enzyme chemistry and extraction for urine odor that surface cleaners miss. Flat-rate pricing.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Pet Odor Treatment",
  description: "Pet odor and stain treatment in Waco and Central Texas. Enzyme chemistry and extraction for urine odor that surface cleaners miss. Flat-rate pricing.",
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
  serviceType: "Pet Odor Treatment",
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
