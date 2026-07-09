import type { Metadata } from "next";
const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.puresoftcarpet.com';
const url = BASE_URL + '/blogs/steam-vs-dry-carpet-cleaning';
export const metadata: Metadata = {
  title: "Steam vs. Dry Carpet Cleaning: Which Is Right for Your Home? | PureSoft Carpet Care",
  description: "Hot-water extraction vs. low-moisture methods — drying times, soil types, and when each method fits Central Texas homes.",
  alternates: { canonical: url },
  openGraph: {
    title: "Steam vs. Dry Carpet Cleaning: Which Is Right for Your Home?",
    description: "Hot-water extraction vs. low-moisture methods — drying times, soil types, and when each method fits Central Texas homes.",
    url,
    siteName: "PureSoft Carpet Care",
    type: "article",
  },
};
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
