import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.puresoftcarpet.com';
const url = BASE_URL + '/services/commercial-carpet';

export const metadata: Metadata = {
  title: "Commercial Carpet Care Waco TX | PureSoft Carpet Care",
  description: "Commercial carpet cleaning in Waco and Central Texas for offices, medical suites, and multi-unit properties. After-hours scheduling available.",
  keywords: ["commercial carpet cleaning Waco","office carpet cleaning Waco TX","medical office carpet cleaning Central Texas","PureSoft Carpet Care"],
  alternates: { canonical: url },
  openGraph: {
    title: "Commercial Carpet Care Waco TX | PureSoft Carpet Care",
    description: "Commercial carpet cleaning in Waco and Central Texas for offices, medical suites, and multi-unit properties. After-hours scheduling available.",
    url,
    siteName: "PureSoft Carpet Care",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Commercial Carpet Care Waco TX | PureSoft Carpet Care",
    description: "Commercial carpet cleaning in Waco and Central Texas for offices, medical suites, and multi-unit properties. After-hours scheduling available.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Commercial Carpet Care",
  description: "Commercial carpet cleaning in Waco and Central Texas for offices, medical suites, and multi-unit properties. After-hours scheduling available.",
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
  serviceType: "Commercial Carpet Care",
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
