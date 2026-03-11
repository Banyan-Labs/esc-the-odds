import type { LucideIcon } from "lucide-react";
import { Film, BookOpen, Truck, Sparkles, Home, GraduationCap } from "lucide-react";

interface ProgramCard {
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  image: string;
  imagePosition?: string;
  anchor: string;
  contactLabel: string;
}

interface Book {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  cta: string;
}

export const PROGRAM_CARDS: ProgramCard[] = [
  {
    title: "FILM IMPACT SERIES",
    subtitle: "DOCUMENTARY-BASED ENGAGEMENT",
    description:
      "A structured documentary-based engagement experience designed to activate reflection, dialogue, and forward planning.",
    icon: Film,
    image: "/assets/Image_7.jpeg",
    anchor: "#film-impact",
    contactLabel: "HOST THE FILM",
  },
  {
    title: "BOUNCE FORWARD CURRICULUM",
    subtitle: "15-SESSION INSTITUTIONAL FRAMEWORK",
    description:
      "A structured, institutional-ready reentry education framework designed for repeatable implementation.",
    icon: BookOpen,
    image: "/assets/Image_27.jpeg",
    anchor: "#bounce-forward",
    contactLabel: "INQUIRE ABOUT CURRICULUM",
  },
  {
    title: "BOX TRUCK ENTREPRENEURSHIP",
    subtitle: "VOCATIONAL PATHWAY",
    description:
      "A structured entrepreneurship program designed to prepare participants to launch and operate a transportation business.",
    icon: Truck,
    image: "/assets/Image_12.jpeg",
    anchor: "#box-truck",
    contactLabel: "ENROLL IN BOX TRUCK",
  },
  {
    title: "COMMERCIAL CLEANING",
    subtitle: "VOCATIONAL PATHWAY",
    description:
      "A structured entrepreneurship program focused on launching and growing a commercial cleaning business.",
    icon: Sparkles,
    image: "/assets/Image_5.jpeg",
    anchor: "#commercial-cleaning",
    contactLabel: "ENROLL IN CLEANING",
  },
  {
    title: "HOUSE HACKING & REAL ESTATE",
    subtitle: "VOCATIONAL PATHWAY",
    description:
      "A structured real estate education program focused on housing stability, real estate readiness, and long-term asset building.",
    icon: Home,
    image: "/assets/Image_18.jpeg",
    imagePosition: "center 35%",
    anchor: "#house-hacking",
    contactLabel: "ENROLL IN HOUSE HACKING",
  },
  {
    title: "SELF-PACED LEARNING",
    subtitle: "BOOKS & DIGITAL COURSES",
    description:
      "Workbooks and reference guides available for independent study — learn at your own pace from anywhere.",
    icon: GraduationCap,
    image: "/assets/Image_1.jpeg",
    anchor: "#self-paced",
    contactLabel: "START LEARNING",
  },
];

export const BOOKS: Book[] = [
  {
    icon: BookOpen,
    title: "BOUNCE FORWARD PLAN: MASTERING YOUR REENTRY WORKBOOK",
    description:
      "The companion workbook for the Bounce Forward Plan: Mastering Your Reentry curriculum.",
    href: "https://www.amazon.com/dp/B0GMP7Z9P9",
    cta: "GET THE WORKBOOK",
  },
  {
    icon: Truck,
    title: "NON-CDL BOX TRUCK BUSINESS REFERENCE GUIDE",
    description:
      "A complete blueprint from licensing to fleet management through the Non-CDL Box Truck program.",
    href: "https://a.co/d/09Ajq8UA",
    cta: "GET THE BOOK",
  },
  {
    icon: Home,
    title: "HOUSE HACKING GUIDE",
    description:
      "Building generational wealth through strategic property acquisition and management.",
    href: "https://a.co/d/0g3BeD8W",
    cta: "GET THE BOOK",
  },
];
