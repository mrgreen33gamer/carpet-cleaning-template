import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy – PureSoft Carpet Care",
  description: "How we collect, use, and protect your information at PureSoft Carpet Care in Waco, TX.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function PolicyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}