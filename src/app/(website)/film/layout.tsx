import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Film Experience — Escaping The Odds of Recidivism Documentary",
  description:
    "Host the Escaping The Odds of Recidivism documentary — a structured 2.5-hour film experience with facilitated dialogue and workbook activation designed for correctional facilities, reentry organizations, and community settings.",
  openGraph: {
    title: "The Film Experience — Escaping The Odds of Recidivism Documentary | Escape The Odds",
    description:
      "Host the Escaping The Odds of Recidivism documentary — a structured film experience with facilitated dialogue and workbook activation.",
    images: [
      {
        url: "/assets/ScreenGrab-Trailer.png",
        width: 1200,
        height: 630,
        alt: "Escaping The Odds of Recidivism — Documentary Screengrab",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Film Experience | Escape The Odds",
    description:
      "Host the Escaping The Odds of Recidivism documentary — a structured film experience with facilitated dialogue and workbook activation.",
    images: ["/assets/ScreenGrab-Trailer.png"],
  },
};

export default function FilmLayout({ children }: { children: React.ReactNode }) {
  return children;
}
