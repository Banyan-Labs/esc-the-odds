import type { LucideIcon } from "lucide-react";
import { Film, MessageSquare, GraduationCap } from "lucide-react";

interface ExperienceStep {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  image: string;
  imagePosition?: string;
  description: string;
}

export const EXPERIENCE_STEPS: ExperienceStep[] = [
  {
    icon: Film,
    title: "The Mirror",
    subtitle: "The Film",
    image: "/assets/Image_6.jpeg",
    description:
      "An immersive documentary experience revealing the architecture of reintegration and introducing a mindset shift toward economic readiness and personal responsibility.",
  },
  {
    icon: MessageSquare,
    title: "The Inquiry",
    subtitle: "The Dialogue",
    image: "/assets/Image_11.jpeg",
    imagePosition: "center 20%",
    description:
      "A structured conversation designed to transform insight into clarity — reflecting on opportunity, environment, work, economic access, and practical next steps forward.",
  },
  {
    icon: GraduationCap,
    title: "The Map",
    subtitle: "The Activation",
    image: "/assets/Image_1.jpeg",
    description:
      "Activation of the Bounce Forward Plan: Mastering Your Reentry — a structured, institutional-ready reentry curriculum covering housing, career readiness, entrepreneurship, financial literacy, and more.",
  },
];

export const FILM_IN_ACTION_ITEMS = [
  "Correctional facilities",
  "Career development boards",
  "Employers",
  "Reentry organizations",
  "Libraries",
  "Community convenings",
  "Civic forums",
];
