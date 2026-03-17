import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "For Organizations — Institutional Reentry Programs & Partnerships",
  description:
    "Partner with Escape The Odds for structured reentry education. Film Impact Series hosting, Bounce Forward curriculum licensing, and vocational programs for correctional facilities, workforce boards, and reentry organizations.",
  openGraph: {
    title: "For Organizations — Institutional Reentry Programs & Partnerships | Escape The Odds",
    description:
      "Partner with Escape The Odds for structured reentry education. Film hosting, curriculum licensing, and vocational programs.",
  },
  twitter: {
    card: "summary_large_image",
    title: "For Organizations | Escape The Odds",
    description:
      "Partner with Escape The Odds for structured reentry education, curriculum licensing, and vocational programs.",
  },
};

export default function OrganizationsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
