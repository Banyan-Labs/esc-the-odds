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
      "An immersive documentary experience revealing the concepts of reintegration and introducing a mindset shift toward economic readiness and personal responsibility.",
  },
  {
    icon: MessageSquare,
    title: "The Inquiry",
    subtitle: "The Dialogue",
    image: "/assets/AaronSpeaking.png",
    imagePosition: "center 15%",
    description:
      "A structured conversation designed to transform insight into clarity — reflecting on opportunity, access, work, economic empowerment, and practical next steps forward.",
  },
  {
    icon: GraduationCap,
    title: "The Map",
    subtitle: "The Activation",
    image: "/assets/IMG_1830.JPG",
    imagePosition: "40% 20%",
    description:
      "Activation of the Bounce Forward Plan: Mastering Your Reentry — a structured, institutional ready reentry curriculum covering housing, career readiness, entrepreneurship, financial literacy, and more.",
  },
];

export const TRAILER_VIDEO_URL =
  process.env.NEXT_PUBLIC_TRAILER_VIDEO_URL ||
  "https://firebasestorage.googleapis.com/v0/b/escape-the-odds.firebasestorage.app/o/media%2FETO%20Doc%20Trailer_FINAL_Cta%20End%20Card.mp4?alt=media";

export const FILM_IN_ACTION_ITEMS = [
  "Correctional facilities",
  "Career development boards",
  "Employers",
  "Reentry organizations",
  "Libraries",
  "Community convenings",
  "Civic forums",
];
