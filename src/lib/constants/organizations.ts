import type { LucideIcon } from "lucide-react";
import { Film, BookOpen, Briefcase } from "lucide-react";

interface CommunityPartner {
  name: string;
  url: string;
}

interface EngagementModel {
  icon: LucideIcon;
  title: string;
  description: string;
  label?: string;
  includes: string[];
  note?: string;
  cta: string;
  href: string;
  image: string;
  imageAlt: string;
}

export const COMMUNITY_PARTNERS: CommunityPartner[] = [
  { name: "WGN9", url: "https://wgntv.com" },
  { name: "Good Morning America", url: "https://www.goodmorningamerica.com" },
  { name: "CBS Chicago", url: "https://www.cbsnews.com/chicago/" },
  { name: "FOX 32 Chicago", url: "https://www.fox32chicago.com" },
  { name: "ABC 7 Chicago", url: "https://abc7chicago.com" },
  { name: "Crain's Chicago Business", url: "https://www.chicagobusiness.com" },
  { name: "Wall Street Journal", url: "https://www.wsj.com" },
  { name: "Switch Hustles University", url: "https://www.switchhustles.com" },
  { name: "Chicago Beyond", url: "https://chicagobeyond.org" },
  { name: "Chicago Urban League", url: "https://chiul.org" },
  { name: "Hyde Park Bank", url: "https://www.hydeparkbank.com" },
  { name: "Peer Plus", url: "https://peerplus.org" },
  { name: "CoreCivic", url: "https://www.corecivic.com" },
  { name: "Cook County Sheriff's Office", url: "https://www.cookcountysheriffil.gov" },
  { name: "Phalanx Family Services", url: "https://www.phalanxfamilyservices.org" },
  { name: "CityPoint Community Church", url: "https://www.citypointcc.org" },
  { name: "Hire360", url: "https://www.hire360chicago.com" },
  { name: "Legal Aid Chicago", url: "https://www.legalaidchicago.org" },
  { name: "Advocate Health Care", url: "https://www.advocatehealth.com" },
  { name: "Working Credit", url: "https://www.workingcredit.org" },
  { name: "Buddy Bear Car Wash", url: "https://buddybearcarwash.com" },
  { name: "CTA", url: "https://www.transitchicago.com" },
  { name: "Oak Park Public Library", url: "https://www.oppl.org" },
  { name: "DuPage County Sheriff's Office", url: "https://www.dupagesheriff.org" },
  { name: "GEO Group", url: "https://www.geogroup.com" },
  { name: "Greenwood Archer Capital", url: "https://greenwoodarcher.com" },
];

export const ENGAGEMENT_MODELS: EngagementModel[] = [
  {
    icon: Film,
    title: "Escape The Odds of Recidivism Film – Impact Series",
    description:
      "A documentary-based hosting engagement designed to activate reflection, dialogue, and forward planning.",
    includes: [
      "Full 85-minute documentary screening",
      "Moderated dialogue + audience Q&A (panel style with Producer Aaron Smith and justice-impacted leaders as scheduled)",
      "50 Bounce Forward workbooks distributed locally for participant activation",
    ],
    cta: "Request Impact Series Consultation",
    href: "/contact",
    image: "/assets/Image_7.jpeg",
    imageAlt: "Large group at Cook County facility screening event",
  },
  {
    icon: BookOpen,
    title: "Bounce Forward Plan: Mastering Your Reentry – Curriculum License",
    description:
      "A 15-session institutional-ready reentry education framework designed for structured implementation.",
    label: "License includes:",
    includes: [
      "Documentary integration",
      "Participant workbooks",
      "Facilitation guides",
      "Community Engagement SME toolkit",
      "Evaluation & reporting framework",
    ],
    note: "Designed for: Departments of Corrections, county jails, community corrections, reentry-focused organizations.",
    cta: "Inquire About Curriculum Licensing",
    href: "/contact",
    image: "/assets/Image_13.jpeg",
    imageAlt: "Program participants with certificates",
  },
  {
    icon: Briefcase,
    title: "Vocational & Economic Empowerment Programs",
    description:
      "Targeted career development and entrepreneurship pathways aligned with reentry preparation.",
    label: "Programs include:",
    includes: [
      "Non-CDL Box Truck Entrepreneurship",
      "Commercial Cleaning Business Program",
      "House Hacking & Real Estate Fundamentals",
    ],
    note: "Available for in-facility or community-based implementation (virtual/live/tablet options as applicable).",
    cta: "Explore Vocational Pathways",
    href: "/programs",
    image: "/assets/Image_20.jpeg",
    imageAlt: "Vocational program classroom instruction",
  },
];

export const WHO_WE_WORK_WITH = [
  "Correctional Systems",
  "Workforce Development Boards",
  "Employers & HR Teams",
  "Reentry Organizations",
  "Foundations",
  "Libraries & Educational Institutions",
];
