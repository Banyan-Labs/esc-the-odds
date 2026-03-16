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
  contactUrl?: string;
  external?: boolean;
  bookUrl?: string;
  bookLabel?: string;
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
    subtitle: "DOCUMENTARY BASED ENGAGEMENT",
    description:
      "A structured documentary based engagement experience designed to activate reflection, dialogue, and forward planning.",
    icon: Film,
    image: "/assets/Image_7.jpeg",
    anchor: "#film-impact",
    contactLabel: "ENROLL YOUR ORGANIZATION",
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
    title: "SELF PACED LEARNING",
    subtitle: "DIGITAL COURSE",
    description:
      "Our Non-CDL Box Truck self paced course is our only self paced digital course, available through our learning platform.",
    icon: GraduationCap,
    image: "/assets/IMG_1828.JPG",
    anchor: "#self-paced",
    contactLabel: "EXPLORE THE COURSE",
    contactUrl: "https://courses.escapetheodds.com/home",
    external: true,
  },
  {
    title: "BOUNCE FORWARD CURRICULUM",
    subtitle: "15-SESSION INSTITUTIONAL FRAMEWORK",
    description:
      "A structured, institutional ready reentry education framework designed for repeatable implementation.",
    icon: BookOpen,
    image: "/assets/Escape-The-Odds-Mockups-IG-Post45/1.png",
    anchor: "#bounce-forward",
    contactLabel: "INQUIRE ABOUT CURRICULUM",
    bookUrl: "https://www.amazon.com/dp/B0GMP7Z9P9",
    bookLabel: "ORDER THE WORKBOOK",
  },
  {
    title: "BOX TRUCK ENTREPRENEURSHIP",
    subtitle: "VOCATIONAL PATHWAY",
    description:
      "A structured entrepreneurship program designed to prepare participants to launch and operate a NON CDL needed box truck/cargo van.",
    icon: Truck,
    image: "/assets/Image_12.jpeg",
    imagePosition: "center 20%",
    anchor: "#box-truck",
    contactLabel: "ENROLL IN BOX TRUCK",
    bookUrl: "https://a.co/d/09Ajq8UA",
    bookLabel: "ORDER THE BOOK",
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
    bookUrl: "https://a.co/d/0g3BeD8W",
    bookLabel: "ORDER THE BOOK",
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
