import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Our Mission, Vision & Story",
  description:
    "Founded by Aaron Smith after 12 years of incarceration, Escape The Odds empowers justice impacted individuals through education, career pathways, and entrepreneurship. Over 600 students served across 10+ states.",
  openGraph: {
    title: "About — Our Mission, Vision & Story | Escape The Odds",
    description:
      "Founded by Aaron Smith after 12 years of incarceration, Escape The Odds empowers justice impacted individuals through education, career pathways, and entrepreneurship.",
  },
  twitter: {
    card: "summary_large_image",
    title: "About | Escape The Odds",
    description:
      "Founded by Aaron Smith, Escape The Odds empowers justice impacted individuals through education, career pathways, and entrepreneurship.",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
