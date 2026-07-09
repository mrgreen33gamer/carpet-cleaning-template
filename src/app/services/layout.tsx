import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.puresoftcarpet.com';

export const metadata: Metadata = {
  title: "Carpet Cleaning Services Waco TX | PureSoft Carpet Care",
  description: "Deep carpet cleaning, upholstery, tile & grout, area rugs, pet odor treatment, and commercial carpet care in Waco and Central Texas. IICRC-certified, Spot-Free Satisfaction Guarantee.",
  alternates: { canonical: BASE_URL + '/services' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
