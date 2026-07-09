import type { Metadata } from "next";
const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.puresoftcarpet.com';
export const metadata: Metadata = {
  title: "About PureSoft Carpet Care | Waco TX Carpet Cleaners Since 2011",
  description: "Meet PureSoft Carpet Care — founded in Waco in 2011 by Mia Chen. IICRC-certified carpet, upholstery, and tile cleaning for Central Texas. Spot-Free Satisfaction Guarantee.",
  keywords: ["PureSoft Carpet Care about","IICRC carpet cleaner Waco Texas","Mia Chen carpet cleaning Waco"],
  alternates: { canonical: BASE_URL + '/about' },
};
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
