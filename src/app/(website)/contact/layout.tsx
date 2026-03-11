import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Host the Film, License the Curriculum, or Partner With Us",
  description:
    "Contact Escape The Odds to host the documentary, license the Bounce Forward reentry curriculum, explore vocational pathways, or discuss organizational partnerships. Based in Chicago, Illinois.",
  openGraph: {
    title: "Contact — Host the Film or Partner With Us | Escape The Odds",
    description:
      "Contact Escape The Odds to host the documentary, license the curriculum, or discuss organizational partnerships.",
    images: [
      {
        url: "/assets/Image_26.jpeg",
        width: 1200,
        height: 630,
        alt: "Aaron Smith connecting with individuals at a correctional facility",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Escape The Odds",
    description:
      "Host the documentary, license the curriculum, or discuss organizational partnerships.",
    images: ["/assets/Image_26.jpeg"],
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
