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
  imagePosition?: string;
  mobileImagePosition?: string;
}

export const ECOSYSTEM_CARDS: EcosystemCard[] = [
  {
    icon: Film,
    title: "Escaping The Odds of Recidivism Film – Impact Series",
    body: "A 2.5-hour structured documentary + dialogue experience, including 50 Bounce Forward workbooks provided to local facilities where the film is hosted. Designed for: Correctional facilities, government reentry agencies, career development boards, community reentry organizations, libraries, educational institutions, employers, and CDFIs.",
    cta: "Host the Film",
    href: "/film",
    image: "/assets/IMG_1826.JPG",
    imageAlt: "Behind the scenes documentary filming through camera lens",
    imagePosition: "center 25%",
    mobileImagePosition: "center 35%",
  },
  {
    icon: BookOpen,
    title: "Bounce Forward Plan: Mastering Your Reentry – Curriculum",
    body: "A 15-session institutional ready reentry education framework designed for structured implementation. 12-month license includes: Documentary integration, workbooks, facilitation guides, Subject Matter Expert toolkit, evaluation framework.",
    cta: "Inquire About the Curriculum",
    href: "/contact",
    image: "/assets/Image_9.jpeg",
    imageAlt: "Participants with workbooks and certificates",
  },
  {
    icon: Briefcase,
    title: "Vocational Pathways Programs",
    body: "Economic empowerment programs aligned with reentry preparation: Non-CDL Box Truck Entrepreneurship, Commercial Cleaning Business Development, House Hacking & Real Estate Fundamentals, Financial Empowerment.",
    cta: "Explore Vocational Pathways",
    href: "/programs",
    image: "/assets/IMG_1825.JPG",
    imageAlt: "Students in blue writing during vocational program session",
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
  featured?: boolean;
  image?: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "After spending 15 years incarcerated, I returned home determined to rebuild my life. With guidance from mentors like Aaron Smith and support from Escaping the Odds, I learned how to structure and build my own trucking business. Today, I operate one truck and two trailers and am working toward purchasing a second truck. I'm grateful for the second chance God gave me to come home, rebuild, and make a positive impact in society.",
    name: "KWANTE W.",
    role: "Program Graduate, California",
    featured: true,
    image: "/assets/Image_12.jpeg",
  },
  {
    quote:
      "This course has left me highly impacted and determined to be my own boss and start my own hot-shot business.",
    name: "CARL C.",
    role: "Box Truck Program Graduate",
  },
  {
    quote:
      "They take all the guess work and make it a checklist to start a business. Very well done.",
    name: "An Arizona Correctional Facility Participant",
    role: "Box Truck Program Graduate",
  },
  {
    quote: "It helped me realize that anyone can do it, you don't need to be rich to buy a house.",
    name: "CHARLES S.",
    role: "House Hacking Program Graduate",
  },
  {
    quote:
      "It has prepared me to start my journey and also changed my perception of thinking small. Dream big and go hard. Grind strong!",
    name: "LONDELL H.",
    role: "Financial Empowerment Program Graduate",
  },
  {
    quote:
      "This course has made it very easy. With the information I can actually begin the process while incarcerated.",
    name: "A Mississippi Correctional Facility Participant",
    role: "Box Truck Program Graduate",
  },
  {
    quote:
      "This has been the best experience of classes and programs in prison. This course gives the first steps needed to get started.",
    name: "A Tennessee Correctional Facility Participant",
    role: "Box Truck Program Graduate",
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
    image: "/assets/Image_26.jpeg",
    imageAlt: "Aaron connecting with individuals at a correctional facility",
    description:
      "An immersive documentary experience revealing the concepts of reintegration and introducing a mindset shift toward economic readiness and personal responsibility.",
    bullets: null,
  },
  {
    icon: MessageSquare,
    title: "The Inquiry",
    subtitle: "Guided Dialogue",
    image: "/assets/AaronSpeaking.png",
    imageAlt: "Aaron Smith speaking at podium",
    imagePosition: "center 15%",
    description:
      "A structured Panel/fireside chat style conversation designed to transform insight into clarity. Audience engages in:",
    bullets: [
      "Reflection on opportunity and access",
      "Dialogue around work and economic empowerment",
      "Examination of reintegration realities",
      "Practical next steps forward",
    ],
  },
  {
    icon: GraduationCap,
    title: "The Map",
    subtitle: "Curriculum Activation",
    image: "/assets/Escape-The-Odds-Mockups-IG-Post45/1.png",
    imageAlt: "Bounce Forward Plan workbook and digital materials",
    imagePosition: "center 40%",
    description:
      "Activation of the Bounce Forward Plan: Mastering Your Reentry, a structured, institutional ready reentry curriculum. Each event provides 50 workbooks to local incarcerated individuals. Includes:",
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
