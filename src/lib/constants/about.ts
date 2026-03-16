import type { LucideIcon } from "lucide-react";
import { Home, Heart, Briefcase } from "lucide-react";

interface Pillar {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const PILLARS: Pillar[] = [
  {
    icon: Home,
    title: "HOUSING",
    description:
      "Empowering individuals to understand housing stability, financial planning, and creative pathways to secure safe and sustainable living situations.",
  },
  {
    icon: Heart,
    title: "HEALTH",
    description:
      "Supporting wellness, personal discipline, and the faith mindset required to rebuild life after incarceration.",
  },
  {
    icon: Briefcase,
    title: "HUSTLE",
    description:
      "Creating pathways to employment, entrepreneurship, and ownership through practical workforce and business education.",
  },
];
