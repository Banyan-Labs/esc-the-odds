import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Film Experience — Escaping The Odds of Recidivism Documentary",
  description:
    "Host the Escaping The Odds of Recidivism documentary — a structured 3.5-hour film experience with facilitated dialogue and workbook activation designed for correctional facilities, reentry organizations, and community settings.",
  openGraph: {
    title: "The Film Experience — Escaping The Odds of Recidivism Documentary | Escape The Odds",
    description:
      "Host the Escaping The Odds of Recidivism documentary — a structured film experience with facilitated dialogue and workbook activation.",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Film Experience | Escape The Odds",
    description:
      "Host the Escaping The Odds of Recidivism documentary — a structured film experience with facilitated dialogue and workbook activation.",
  },
};

export default function FilmLayout({ children }: { children: React.ReactNode }) {
  return children;
}
