import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { TheFilm } from "@/components/sections/TheFilm";

export const metadata: Metadata = {
  title: "Reentry Education, Documentary & Economic Empowerment",
  description:
    "Escape The Odds empowers justice impacted individuals through documentary storytelling, the Bounce Forward reentry curriculum, and vocational entrepreneurship programs. Over 600 students served across 10+ states.",
  openGraph: {
    title: "Escape The Odds | Reentry Education, Documentary & Economic Empowerment",
    description:
      "Empowering justice impacted individuals through documentary storytelling, structured reentry curriculum, and vocational entrepreneurship programs.",
    images: [
      {
        url: "/assets/ET0-Landscape-Poster-Fixed.png",
        width: 1200,
        height: 630,
        alt: "Escape The Odds Recidivism Film Poster",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Escape The Odds | Reentry Education & Economic Empowerment",
    description:
      "Empowering justice impacted individuals through documentary storytelling, reentry curriculum, and vocational programs.",
    images: ["/assets/ET0-Landscape-Poster-Fixed.png"],
  },
};
import { AwarenessToImplementation } from "@/components/sections/AwarenessToImplementation";
import { TheExperience } from "@/components/sections/TheExperience";
import { Ecosystem } from "@/components/sections/Ecosystem";
import { Testimonials } from "@/components/sections/Testimonials";
import { TargetAudience } from "@/components/sections/TargetAudience";
import { ContactCTA } from "@/components/sections/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <TheFilm />
      <AwarenessToImplementation />
      <TheExperience />
      <Ecosystem />
      <Testimonials />
      <TargetAudience />
      <ContactCTA />
    </>
  );
}
