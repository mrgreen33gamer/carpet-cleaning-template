import type { Metadata } from "next";
const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.puresoftcarpet.com';
const url = BASE_URL + '/blogs/pet-stain-removal-that-works';
export const metadata: Metadata = {
  title: "Pet Stain Removal That Actually Works | PureSoft Carpet Care",
  description: "Enzyme treatments, proper extraction, and what DIY products get wrong — a practical guide for carpet and upholstery.",
  alternates: { canonical: url },
  openGraph: {
    title: "Pet Stain Removal That Actually Works",
    description: "Enzyme treatments, proper extraction, and what DIY products get wrong — a practical guide for carpet and upholstery.",
    url,
    siteName: "PureSoft Carpet Care",
    type: "article",
  },
};
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
