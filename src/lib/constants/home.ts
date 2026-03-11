import type { LucideIcon } from "lucide-react";
import {
  Film,
  BookOpen,
  Briefcase,
  Building2,
  Heart,
  MessageSquare,
  GraduationCap,
} from "lucide-react";

export const CAROUSEL_INTERVAL_MS = 6000;

export const CAROUSEL_IMAGES = [
  "/assets/carousel/COOKCOUNTY-SHERIFF-PIC.png",
  "/assets/Image_4.jpeg",
  "/assets/Image_10.jpeg",
  "/assets/Image_19.jpeg",
  "/assets/Image_5.jpeg",
  "/assets/Image_7.jpeg",
];

export interface EcosystemCard {
  icon: LucideIcon;
  title: string;
  body: string;
  cta: string;
  href: string;
  image: string;
  imageAlt: string;
}

export const ECOSYSTEM_CARDS: EcosystemCard[] = [
  {
    icon: Film,
    title: "Escaping The Odds of Recidivism Film – Impact Series",
    body: "An up to 3.5-hour structured documentary + dialogue experience, including 50 Bounce Forward workbooks provided to local facilities where the film is hosted. Designed for: Correctional facilities, government reentry agencies, career development boards, community reentry organizations, libraries, educational institutions, employers, and CDFIs.",
    cta: "Host the Film",
    href: "/film",
    image: "/assets/Image_16.jpeg",
    imageAlt: "Documentary screening setup",
  },
  {
    icon: BookOpen,
    title: "Bounce Forward Plan: Mastering Your Reentry – Curriculum",
    body: "A 15-session institutional-ready reentry education framework designed for structured implementation. 12-month license includes: Documentary integration, workbooks, facilitation guides, SME toolkit, evaluation framework.",
    cta: "Inquire About the Curriculum",
    href: "/contact",
    image: "/assets/Image_9.jpeg",
    imageAlt: "Participants with workbooks and certificates",
  },
  {
    icon: Briefcase,
    title: "Vocational Pathways Programs",
    body: "Economic mobility programs aligned with reentry preparation: Non-CDL Box Truck Entrepreneurship, Commercial Cleaning Business Development, House Hacking & Real Estate Fundamentals.",
    cta: "Explore Vocational Pathways",
    href: "/programs",
    image: "/assets/Image_20.jpeg",
    imageAlt: "Vocational program classroom instruction",
  },
];

export interface AudienceGroup {
  icon: LucideIcon;
  title: string;
  items: string[];
}

export const AUDIENCE_GROUPS: AudienceGroup[] = [
  {
    icon: Building2,
    title: "CORRECTIONAL SYSTEMS",
    items: [
      "Departments of Corrections",
      "County Jails",
      "Juvenile Facilities",
      "Community Corrections",
    ],
  },
  {
    icon: Briefcase,
    title: "WORKFORCE & EMPLOYERS",
    items: ["Workforce Boards", "Second-Chance Employers", "Economic Development Offices"],
  },
  {
    icon: Heart,
    title: "COMMUNITY & REENTRY PARTNERS",
    items: ["Reentry Organizations", "Foundations", "Educational Institutions", "Libraries"],
  },
];

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "This course has left me highly impacted and determined to be my own boss and start my own hot-shot business.",
    name: "CARL CHRISTENBERRY",
    role: "Box Truck Program Graduate",
  },
  {
    quote:
      "I have found a new positive mentor and guide and teacher who knows his stuff — a brother who made it out the struggle who's helping others do the same!",
    name: "JONDELL HAYDEN JR.",
    role: "Box Truck Program Graduate",
  },
  {
    quote:
      "Now I have the ability to financially be prepared not to make mistakes in the future that may lead to recidivism.",
    name: "CARL CHRISTENBERRY",
    role: "Financial Empowerment Graduate",
  },
  {
    quote:
      "It has prepared me to start my journey and also changed my perceptions of thinking small. Dream big and go hard. Grind strong!",
    name: "JONDELL HAYDEN JR.",
    role: "Box Truck Program Graduate",
  },
  {
    quote:
      "Extremely satisfied. This course has given me the mental constraint to be ready when I do re-enter society — I will be ready to launch my own hot-shot business.",
    name: "CARL CHRISTENBERRY",
    role: "Box Truck Program Graduate",
  },
  {
    quote: "Information on how to get started was inspirational for me to proceed into business.",
    name: "CROSSROADS CORRECTIONAL",
    role: "Participant",
  },
];

export interface HomeExperienceStep {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  image: string;
  imageAlt: string;
  imagePosition?: string;
  description: string;
  bullets: string[] | null;
}

export const HOME_EXPERIENCE_STEPS: HomeExperienceStep[] = [
  {
    icon: Film,
    title: "The Mirror",
    subtitle: "The Film",
    image: "/assets/Image_6.jpeg",
    imageAlt: "Documentary screening audience",
    description:
      "An immersive documentary experience revealing the architecture of reintegration and introducing a mindset shift toward economic readiness and personal responsibility.",
    bullets: null,
  },
  {
    icon: MessageSquare,
    title: "The Inquiry",
    subtitle: "Guided Dialogue",
    image: "/assets/Image_11.jpeg",
    imageAlt: "Facilitated panel dialogue",
    imagePosition: "center 20%",
    description:
      "A structured conversation designed to transform insight into clarity. Audience engages in:",
    bullets: [
      "Reflection on opportunity and environment",
      "Dialogue around work and economic access",
      "Examination of reintegration realities",
      "Practical next steps forward",
    ],
  },
  {
    icon: GraduationCap,
    title: "The Map",
    subtitle: "Curriculum Activation",
    image: "/assets/Image_1.jpeg",
    imageAlt: "Workbook and curriculum session",
    description:
      "Activation of the Bounce Forward Plan: Mastering Your Reentry, a structured, institutional-ready reentry curriculum. Includes:",
    bullets: [
      "Housing stability planning",
      "Career readiness development",
      "Entrepreneurship awareness",
      "Financial literacy exercises",
      "Individualized reentry plan development",
      "Substance use and mental health",
      "Rebuilding healthy relationships",
    ],
  },
];

export interface MediaMention {
  publication: string;
  headline: string;
  url: string;
}

export const MEDIA_MENTIONS: MediaMention[] = [
  {
    publication: "Good Morning America",
    headline: "Ex-con spends his days empowering the incarcerated",
    url: "https://www.goodmorningamerica.com/GMA3/video/con-spends-days-empowering-incarcerated-88100579",
  },
  {
    publication: "Chicago Sun-Times",
    headline: "Making the most of his — and others' second chance",
    url: "https://chicago.suntimes.com/2022/4/17/23027343/aaron-smith-south-side-second-chances-escaping-the-odds-podcast",
  },
  {
    publication: "ABC 7 Chicago",
    headline:
      "Escaping the Odds podcast tells triumphant stories of entrepreneurs after life in prison",
    url: "https://abc7chicago.com/escaping-the-odds-podcast-aaron-smith-life-in-prison-triumphant-stories/11493238/",
  },
  {
    publication: "Fox 32 Chicago",
    headline: "Escape The Odds — featured on Fox 32 Chicago",
    url: "https://www.fox32chicago.com/video/1440959",
  },
  {
    publication: "Crain's Chicago Business",
    headline: "Ex-offenders in Chicago owning their own companies",
    url: "https://www.chicagobusiness.com/private-intelligence/ex-offenders-chicago-owning-their-own-companies",
  },
  {
    publication: "AfroTech",
    headline: "Aaron Smith escaped the odds through podcasting and trucking",
    url: "https://afrotech.com/aaron-smith-escaped-the-odds-podcasting-trucking",
  },
  {
    publication: "CoreCivic",
    headline: "Escape The Odds box truck program equips returning citizens with career path",
    url: "https://www.corecivic.com/news/escape-the-odds-box-truck-program-equips-returning-citizens-with-career-path",
  },
  {
    publication: "Chicago Reader",
    headline: "Interview with podcaster Aaron Smith: 'Get to the root of the person'",
    url: "https://chicagoreader.com/news-politics/interview-with-podcaster-aaron-smith-get-to-the-root-of-the-person-%EF%BF%BC/",
  },
];

export const TRAILER_VIDEO_URL =
  process.env.NEXT_PUBLIC_TRAILER_VIDEO_URL ||
  "https://firebasestorage.googleapis.com/v0/b/escape-the-odds.firebasestorage.app/o/media%2FETO%20Doc%20Trailer_FINAL_Cta%20End%20Card.mp4?alt=media";
