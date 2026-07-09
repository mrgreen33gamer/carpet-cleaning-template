import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.puresoftcarpet.com';
const url = BASE_URL + '/services/carpet-cleaning';

export const metadata: Metadata = {
  title: "Carpet Cleaning Waco TX | PureSoft Carpet Care",
  description: "Professional deep carpet cleaning in Waco and Central Texas. Hot-water extraction, traffic-lane treatment, flat-rate pricing, IICRC-certified, Spot-Free Satisfaction Guarantee.",
  keywords: ["carpet cleaning Waco TX","steam carpet cleaning Waco","deep carpet clean Central Texas","IICRC carpet cleaner Waco","PureSoft Carpet Care"],
  alternates: { canonical: url },
  openGraph: {
    title: "Carpet Cleaning Waco TX | PureSoft Carpet Care",
    description: "Professional deep carpet cleaning in Waco and Central Texas. Hot-water extraction, traffic-lane treatment, flat-rate pricing, IICRC-certified, Spot-Free Satisfaction Guarantee.",
    url,
    siteName: "PureSoft Carpet Care",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Carpet Cleaning Waco TX | PureSoft Carpet Care",
    description: "Professional deep carpet cleaning in Waco and Central Texas. Hot-water extraction, traffic-lane treatment, flat-rate pricing, IICRC-certified, Spot-Free Satisfaction Guarantee.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Carpet Cleaning",
  description: "Professional deep carpet cleaning in Waco and Central Texas. Hot-water extraction, traffic-lane treatment, flat-rate pricing, IICRC-certified, Spot-Free Satisfaction Guarantee.",
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
  serviceType: "Carpet Cleaning",
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
