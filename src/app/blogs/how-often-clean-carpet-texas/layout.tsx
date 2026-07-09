import type { Metadata } from "next";
const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.puresoftcarpet.com';
const url = BASE_URL + '/blogs/how-often-clean-carpet-texas';
export const metadata: Metadata = {
  title: "How Often Should You Clean Carpet in Central Texas? | PureSoft Carpet Care",
  description: "Dust, pollen, kids, and pets put Texas carpets through a lot. Learn how often to schedule professional cleaning in Waco-area homes.",
  alternates: { canonical: url },
  openGraph: {
    title: "How Often Should You Clean Carpet in Central Texas?",
    description: "Dust, pollen, kids, and pets put Texas carpets through a lot. Learn how often to schedule professional cleaning in Waco-area homes.",
    url,
    siteName: "PureSoft Carpet Care",
    type: "article",
  },
};
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
