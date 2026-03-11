import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Our Mission, Vision & Story",
  description:
    "Founded by Aaron Smith after 12 years of incarceration, Escape The Odds empowers justice-impacted individuals through education, career pathways, and entrepreneurship. Over 600 students served across 10+ states.",
  openGraph: {
    title: "About — Our Mission, Vision & Story | Escape The Odds",
    description:
      "Founded by Aaron Smith after 12 years of incarceration, Escape The Odds empowers justice-impacted individuals through education, career pathways, and entrepreneurship.",
    images: [
      {
        url: "/assets/Image_8.jpeg",
        width: 1200,
        height: 630,
        alt: "Escape The Odds classroom education session",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About | Escape The Odds",
    description:
      "Founded by Aaron Smith, Escape The Odds empowers justice-impacted individuals through education, career pathways, and entrepreneurship.",
    images: ["/assets/Image_8.jpeg"],
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
