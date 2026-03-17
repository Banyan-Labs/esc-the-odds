import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Programs — Film Impact Series, Reentry Curriculum & Vocational Pathways",
  description:
    "Explore Escape The Odds programs: the documentary Impact Series, Bounce Forward 15-session reentry curriculum, Non-CDL Box Truck Entrepreneurship, Commercial Cleaning Business Development, and House Hacking & Real Estate Fundamentals.",
  openGraph: {
    title: "Programs — Film Impact Series, Curriculum & Vocational Pathways | Escape The Odds",
    description:
      "Explore Escape The Odds programs: documentary Impact Series, Bounce Forward reentry curriculum, and vocational entrepreneurship pathways.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Programs | Escape The Odds",
    description:
      "Documentary Impact Series, Bounce Forward reentry curriculum, and vocational entrepreneurship pathways.",
  },
};

export default function ProgramsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
