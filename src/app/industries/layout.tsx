import type { Metadata } from "next";
const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.puresoftcarpet.com';
export const metadata: Metadata = {
  title: "Industries Served | PureSoft Carpet Care",
  description: "Carpet cleaning for property management, hospitality, and offices & medical suites across Waco and Central Texas.",
  alternates: { canonical: BASE_URL + '/industries' },
};
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
