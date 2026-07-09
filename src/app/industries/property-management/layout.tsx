import type { Metadata } from "next";
const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.puresoftcarpet.com';
const url = BASE_URL + '/industries/property-management';
export const metadata: Metadata = {
  title: "Property Management Carpet Cleaning | PureSoft Carpet Care",
  description: "Make-ready carpet cleaning, common-area care, and multi-unit schedules that keep turnovers on track across Central Texas portfolios.",
  alternates: { canonical: url },
};
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
