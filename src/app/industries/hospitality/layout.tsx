import type { Metadata } from "next";
const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.puresoftcarpet.com';
const url = BASE_URL + '/industries/hospitality';
export const metadata: Metadata = {
  title: "Hospitality Carpet Cleaning | PureSoft Carpet Care",
  description: "Guest-ready carpet and soft-surface cleaning for hotels, short-term rentals, and hospitality properties across Central Texas.",
  alternates: { canonical: url },
};
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
