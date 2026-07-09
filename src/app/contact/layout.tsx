import type { Metadata } from "next";
const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.puresoftcarpet.com';
export const metadata: Metadata = {
  title: "Contact | PureSoft Carpet Care Waco TX",
  description: "Contact PureSoft Carpet Care for carpet, upholstery, and tile cleaning in Waco and Central Texas. Call (254) 830-3030 or request a free quote.",
  alternates: { canonical: BASE_URL + '/contact' },
};
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
