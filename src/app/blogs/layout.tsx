import type { Metadata } from "next";
const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.puresoftcarpet.com';
export const metadata: Metadata = {
  title: "Blog | PureSoft Carpet Care",
  description: "Carpet cleaning tips, pet stain advice, and method guides for Waco and Central Texas homeowners from PureSoft Carpet Care.",
  alternates: { canonical: BASE_URL + '/blogs' },
};
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
