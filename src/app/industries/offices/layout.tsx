import type { Metadata } from "next";
const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.puresoftcarpet.com';
const url = BASE_URL + '/industries/offices';
export const metadata: Metadata = {
  title: "Offices & Medical Carpet Cleaning | PureSoft Carpet Care",
  description: "Professional carpet and soft-surface cleaning for offices and medical suites — presentation-ready floors with after-hours options.",
  alternates: { canonical: url },
};
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
