"use client";

import { motion } from "framer-motion";
import {
  Film,
  BookOpen,
  Truck,
  Sparkles,
  Home,
  GraduationCap,
  ArrowRight,
  MessageSquare,
  Mail,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const programCards = [
  {
    title: "FILM IMPACT SERIES",
    subtitle: "DOCUMENTARY-BASED ENGAGEMENT",
    description:
      "A structured documentary-based engagement experience designed to activate reflection, dialogue, and forward planning.",
    icon: Film,
    image: "/assets/Image_7.jpeg",
    anchor: "#film-impact",
  },
  {
    title: "BOUNCE FORWARD CURRICULUM",
    subtitle: "15-SESSION INSTITUTIONAL FRAMEWORK",
    description:
      "A structured, institutional-ready reentry education framework designed for repeatable implementation.",
    icon: BookOpen,
    image: "/assets/Image_27.jpeg",
    anchor: "#bounce-forward",
  },
  {
    title: "BOX TRUCK ENTREPRENEURSHIP",
    subtitle: "VOCATIONAL PATHWAY",
    description:
      "A structured entrepreneurship program designed to prepare participants to launch and operate a transportation business.",
    icon: Truck,
    image: "/assets/Image_12.jpeg",
    anchor: "#box-truck",
  },
  {
    title: "COMMERCIAL CLEANING",
    subtitle: "VOCATIONAL PATHWAY",
    description:
      "A structured entrepreneurship program focused on launching and growing a commercial cleaning business.",
    icon: Sparkles,
    image: "/assets/Image_5.jpeg",
    anchor: "#commercial-cleaning",
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
  },
  {
    title: "SELF-PACED LEARNING",
    subtitle: "BOOKS & DIGITAL COURSES",
    description:
      "Workbooks and reference guides available for independent study — learn at your own pace from anywhere.",
    icon: GraduationCap,
    image: "/assets/Image_1.jpeg",
    anchor: "#self-paced",
  },
];

const books = [
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

function ContactCTAs() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-col items-center gap-6 pt-4 sm:flex-row"
    >
      <Link
        href="/contact"
        className="group bg-gold font-heading flex w-full items-center justify-center px-10 py-5 text-2xl text-black transition-all duration-300 hover:bg-white sm:w-auto"
      >
        <MessageSquare className="mr-3 h-5 w-5" />
        CONTACT US
        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
      </Link>
      <Link
        href="/contact"
        className="font-heading flex w-full items-center justify-center border-2 border-white px-10 py-5 text-2xl text-white transition-all duration-300 hover:bg-white hover:text-black sm:w-auto"
      >
        <Mail className="mr-3 h-5 w-5" />
        CONTACT OUR TEAM
      </Link>
    </motion.div>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item, i) => (
        <li key={i} className="text-cream/90 flex items-start gap-3 font-sans text-base">
          <div className="bg-gold mt-2 h-1.5 w-1.5 shrink-0 rounded-full" />
          {item}
        </li>
      ))}
    </ul>
  );
}

function TagList({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-3">
      {items.map((item, i) => (
        <span
          key={i}
          className="border-gold/30 font-heading text-gold hover:border-gold border px-5 py-3 text-sm tracking-[0.15em] uppercase transition-all duration-300 hover:text-white"
        >
          {item}
        </span>
      ))}
    </div>
  );
}

export default function ProgramsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/5 bg-black pt-28 pb-16 md:pt-40 md:pb-32">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/assets/Image_15.jpeg"
            alt="Aaron presenting certificate to program graduate"
            fill
            className="object-cover object-[center_35%]"
          />
        </div>
        <div className="absolute inset-0 bg-linear-to-b from-black via-black/40 to-black" />

        <div className="relative z-10 container mx-auto px-4 text-center md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-4xl space-y-8"
          >
            <div className="space-y-4">
              <span className="text-gold font-heading text-2xl tracking-widest uppercase md:text-3xl">
                PROGRAMS
              </span>
              <h1 className="font-heading text-5xl leading-[0.9] tracking-tighter text-white md:text-8xl">
                CLEAR PATHWAYS <span className="text-gold">FORWARD</span>
              </h1>
            </div>
            <p className="text-cream/90 mx-auto max-w-2xl font-sans text-xl leading-relaxed font-light md:text-2xl">
              Documentary Engagement, Curriculum, and Vocational Education
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-charcoal border-b border-white/5 py-12 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-cream/90 mx-auto max-w-4xl text-center font-sans text-xl leading-relaxed font-light md:text-2xl"
          >
            Escape The Odds delivers documentary-based engagement, institutional curriculum
            implementation, and industry-aligned entrepreneurship education designed to expand
            stability and income pathways.
          </motion.p>
        </div>
      </section>

      {/* Program Overview Cards */}
      <section className="bg-black py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="sr-only">Program Overview</h2>
          <div className="grid grid-cols-1 gap-0 border border-white/10 md:grid-cols-2 lg:grid-cols-3">
            {programCards.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`group hover:bg-charcoal/50 flex flex-col border-white/10 transition-colors duration-500 ${
                  index < 3 ? "border-b" : ""
                } ${index % 3 !== 2 ? "lg:border-r" : ""} ${index % 2 === 0 ? "md:border-r lg:border-r-0" : ""}`}
              >
                <div className="relative aspect-[2/1] overflow-hidden">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover transition-all duration-700 group-hover:scale-105"
                    style={
                      program.imagePosition ? { objectPosition: program.imagePosition } : undefined
                    }
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-60" />
                </div>

                <div className="flex flex-1 flex-col space-y-3 p-6">
                  <div className="bg-gold/10 text-gold border-gold/20 group-hover:bg-gold flex h-10 w-10 items-center justify-center border transition-all group-hover:text-black">
                    <program.icon className="h-5 w-5" />
                  </div>

                  <p className="text-gold font-heading text-sm tracking-widest uppercase md:text-base">
                    {program.subtitle}
                  </p>
                  <h3 className="font-heading group-hover:text-gold text-lg leading-tight tracking-tight text-white transition-colors">
                    {program.title}
                  </h3>

                  <p className="text-cream/80 flex-1 font-sans text-sm leading-relaxed font-light">
                    {program.description}
                  </p>

                  <div className="flex flex-col gap-2">
                    <Link
                      href={program.anchor}
                      className="bg-gold font-heading inline-flex items-center justify-center px-5 py-2.5 text-sm tracking-widest text-black uppercase transition-all duration-300 hover:bg-white"
                    >
                      LEARN MORE
                      <ArrowRight className="ml-2 h-3.5 w-3.5 transition-transform hover:translate-x-1" />
                    </Link>
                    <Link
                      href="/contact"
                      className="font-heading inline-flex items-center justify-center border border-white px-5 py-2.5 text-sm tracking-widest text-white uppercase transition-all duration-300 hover:bg-white hover:text-black"
                    >
                      <MessageSquare className="mr-2 h-3.5 w-3.5" />
                      CONTACT US
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FILM IMPACT SERIES ===== */}
      <section
        id="film-impact"
        className="bg-charcoal border-y border-white/5 py-16 md:py-24 lg:py-32"
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-4xl space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <span className="text-gold font-heading text-2xl tracking-widest uppercase md:text-3xl">
                PROGRAM 1
              </span>
              <h2 className="font-heading text-4xl text-white md:text-6xl">
                ESCAPING THE ODDS OF RECIDIVISM FILM –{" "}
                <span className="text-gold">IMPACT SERIES</span>
              </h2>
              <p className="text-cream/90 font-sans text-xl leading-relaxed font-light">
                A structured documentary-based engagement experience designed to activate
                reflection, dialogue, and forward planning.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <h3 className="font-heading text-gold text-xl tracking-widest uppercase">
                  WHAT IT IS
                </h3>
                <p className="text-cream/90 font-sans text-lg leading-relaxed">
                  An up to 3.5-hour hosted experience built around the Escaping The Odds of
                  Recidivism documentary, facilitated discussion, and workbook activation.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="font-heading text-gold text-xl tracking-widest uppercase">
                  WHAT&apos;S INCLUDED
                </h3>
                <BulletList
                  items={[
                    "Full 85-minute documentary screening",
                    "Moderated dialogue session",
                    "Q&A / panel-style discussion with Aaron Smith and other successful justice-impacted individuals",
                    "50 Bounce Forward Plan: Mastering Your Reentry workbooks provided for participant activation",
                  ]}
                />
              </div>

              <div className="space-y-4">
                <h3 className="font-heading text-gold text-xl tracking-widest uppercase">
                  DESIGNED FOR
                </h3>
                <TagList
                  items={[
                    "Correctional Facilities",
                    "Government Reentry Agencies",
                    "Workforce Boards",
                    "Community Reentry Organizations",
                    "Libraries",
                    "Educational Institutions",
                    "Employers",
                    "CDFIs",
                  ]}
                />
              </div>
            </motion.div>

            <ContactCTAs />
          </div>
        </div>
      </section>

      {/* ===== BOUNCE FORWARD CURRICULUM ===== */}
      <section id="bounce-forward" className="bg-black py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-4xl space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <span className="text-gold font-heading text-2xl tracking-widest uppercase md:text-3xl">
                PROGRAM 2
              </span>
              <h2 className="font-heading text-4xl text-white md:text-6xl">
                BOUNCE FORWARD PLAN: <span className="text-gold">MASTERING YOUR REENTRY</span>
              </h2>
              <p className="text-cream/90 font-sans text-xl leading-relaxed font-light">
                A structured, institutional-ready reentry education framework designed for
                repeatable implementation.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <h3 className="font-heading text-gold text-xl tracking-widest uppercase">
                  WHAT IT IS
                </h3>
                <p className="text-cream/90 font-sans text-lg leading-relaxed">
                  A 15-session curriculum license created for correctional and reentry-focused
                  organizations that want structured delivery beyond a one-time film experience.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="font-heading text-gold text-xl tracking-widest uppercase">
                  12-MONTH LICENSE INCLUDES
                </h3>
                <BulletList
                  items={[
                    "Documentary integration",
                    "Participant workbooks",
                    "Facilitation guides",
                    "SME toolkit (Subject Matter Expert toolkit)",
                    "Evaluation framework",
                    "Reporting / implementation support framework",
                  ]}
                />
              </div>

              <div className="space-y-4">
                <h3 className="font-heading text-gold text-xl tracking-widest uppercase">
                  FOCUS AREAS COVERED
                </h3>
                <BulletList
                  items={[
                    "Housing stability planning",
                    "Career development / workforce readiness",
                    "Entrepreneurship awareness",
                    "Financial literacy exercises",
                    "Individualized reentry plan development",
                    "Substance use and mental health",
                    "Rebuilding healthy relationships",
                  ]}
                />
              </div>

              <div className="space-y-4">
                <h3 className="font-heading text-gold text-xl tracking-widest uppercase">
                  DESIGNED FOR
                </h3>
                <TagList
                  items={[
                    "Departments of Corrections",
                    "County Jails",
                    "Community Corrections",
                    "Reentry-Focused Organizations",
                  ]}
                />
              </div>
            </motion.div>

            <ContactCTAs />
          </div>
        </div>
      </section>

      {/* ===== VOCATIONAL PATHWAYS HEADER ===== */}
      <section className="bg-charcoal border-y border-white/5 py-16">
        <div className="container mx-auto px-4 text-center md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <span className="text-gold font-heading text-2xl tracking-widest uppercase md:text-3xl">
              VOCATIONAL PATHWAYS
            </span>
            <h2 className="font-heading text-4xl text-white md:text-6xl">
              CAREER & <span className="text-gold">ENTREPRENEURSHIP</span>
            </h2>
            <p className="text-cream/90 mx-auto max-w-3xl font-sans text-xl leading-relaxed font-light">
              Targeted career development and entrepreneurship pathways aligned with reentry
              preparation and economic mobility.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ===== BOX TRUCK ===== */}
      <section id="box-truck" className="border-b border-white/5 bg-black py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-4xl space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <span className="text-gold font-heading text-2xl tracking-widest uppercase md:text-3xl">
                PROGRAM 3
              </span>
              <h2 className="font-heading text-4xl text-white md:text-6xl">
                NON-CDL BOX TRUCK <span className="text-gold">ENTREPRENEURSHIP</span>
              </h2>
              <p className="text-cream/90 font-sans text-xl leading-relaxed font-light">
                A practical business development program focused on one of the most accessible entry
                points into entrepreneurship and income generation after incarceration.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <h3 className="font-heading text-gold text-xl tracking-widest uppercase">
                  WHAT PARTICIPANTS LEARN
                </h3>
                <BulletList
                  items={[
                    "Industry and market overview",
                    "Business formation and compliance",
                    "Financial planning and capital strategy",
                    "Truck operations and business systems",
                    "Mock lender interviews",
                  ]}
                />
              </div>

              <div className="space-y-4">
                <h3 className="font-heading text-gold text-xl tracking-widest uppercase">
                  WHAT&apos;S INCLUDED
                </h3>
                <BulletList
                  items={[
                    "5-week program — 90 minutes per session",
                    "Cohort-based delivery (up to 20 participants)",
                    "Available in correctional facilities, community-based settings, virtual via Zoom, or in person",
                    "Non-CDL Box Truck Reference Guide included in cohort",
                  ]}
                />
              </div>

              <div className="space-y-4">
                <h3 className="font-heading text-gold text-xl tracking-widest uppercase">COVERS</h3>
                <TagList
                  items={[
                    "Entity Setup",
                    "Tax Election",
                    "Insurance",
                    "DOT Requirements",
                    "Motor Carrier Fundamentals",
                    "Startup Cost Modeling",
                    "Revenue Assumptions",
                    "Cost-Per-Mile Analysis",
                    "Lender Preparation",
                    "CDFI Engagement",
                    "Dispatching",
                    "Maintenance Planning",
                    "Safety",
                    "Invoicing",
                    "Contract Management",
                  ]}
                />
              </div>
            </motion.div>

            <ContactCTAs />
          </div>
        </div>
      </section>

      {/* ===== COMMERCIAL CLEANING ===== */}
      <section
        id="commercial-cleaning"
        className="bg-charcoal border-b border-white/5 py-16 md:py-24 lg:py-32"
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-4xl space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <span className="text-gold font-heading text-2xl tracking-widest uppercase md:text-3xl">
                PROGRAM 4
              </span>
              <h2 className="font-heading text-4xl text-white md:text-6xl">
                COMMERCIAL CLEANING <span className="text-gold">BUSINESS DEVELOPMENT</span>
              </h2>
              <p className="text-cream/90 font-sans text-xl leading-relaxed font-light">
                A scalable service-business training program designed to introduce participants to a
                lower-barrier business model with recurring revenue potential.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <h3 className="font-heading text-gold text-xl tracking-widest uppercase">
                  WHAT PARTICIPANTS LEARN
                </h3>
                <BulletList
                  items={[
                    "Industry fundamentals",
                    "Business setup and legal structure",
                    "Operations and service delivery",
                    "Financial management",
                    "Capital and resource navigation",
                  ]}
                />
              </div>

              <div className="space-y-4">
                <h3 className="font-heading text-gold text-xl tracking-widest uppercase">
                  WHAT&apos;S INCLUDED
                </h3>
                <BulletList
                  items={[
                    "6-week program — 120 minutes per session",
                    "Up to 20 participants per cohort",
                    "Available in correctional facilities, community-based settings, in-person, or virtual via Zoom",
                    "Certification from an internationally recognized industry association",
                  ]}
                />
              </div>

              <div className="space-y-4">
                <h3 className="font-heading text-gold text-xl tracking-widest uppercase">COVERS</h3>
                <TagList
                  items={[
                    "Commercial vs. Residential Markets",
                    "Demand Drivers",
                    "Client Acquisition",
                    "Entity Formation",
                    "Licensing",
                    "Insurance",
                    "Franchise vs. Independent",
                    "Cleaning Techniques",
                    "PPE",
                    "Chemical Handling",
                    "Operational Workflow",
                    "Pricing Models",
                    "Invoicing",
                    "Contract Management",
                    "Growth Planning",
                    "SBDCs & CDFIs",
                  ]}
                />
              </div>
            </motion.div>

            <ContactCTAs />
          </div>
        </div>
      </section>

      {/* ===== HOUSE HACKING ===== */}
      <section
        id="house-hacking"
        className="border-b border-white/5 bg-black py-16 md:py-24 lg:py-32"
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-4xl space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <span className="text-gold font-heading text-2xl tracking-widest uppercase md:text-3xl">
                PROGRAM 5
              </span>
              <h2 className="font-heading text-4xl text-white md:text-6xl">
                HOUSE HACKING & <span className="text-gold">REAL ESTATE FUNDAMENTALS</span>
              </h2>
              <p className="text-cream/90 font-sans text-xl leading-relaxed font-light">
                A 6-week course introducing homeownership fundamentals, rental income strategy, and
                accessible real estate concepts through house hacking.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <h3 className="font-heading text-gold text-xl tracking-widest uppercase">
                  WHAT PARTICIPANTS LEARN
                </h3>
                <BulletList
                  items={[
                    "What house hacking is and how it works",
                    "Credit and financial readiness",
                    "Mortgage processes and loan types",
                    "Rental income potential",
                    "Real estate deal analysis",
                    "Down payment assistance and funding pathways",
                  ]}
                />
              </div>

              <div className="space-y-4">
                <h3 className="font-heading text-gold text-xl tracking-widest uppercase">
                  WHAT&apos;S INCLUDED
                </h3>
                <BulletList
                  items={[
                    "6-week program — 90 minutes per session",
                    "Instructor-led classroom model",
                    "Worksheets and guided exercises",
                    "Available in correctional facilities, community-based settings, in person, or virtual via Zoom",
                    "House Hacking Your Way to Financial Freedom workbook included in cohort",
                  ]}
                />
              </div>

              <div className="space-y-4">
                <h3 className="font-heading text-gold text-xl tracking-widest uppercase">
                  CORE MODULES
                </h3>
                <BulletList
                  items={[
                    "Week 1: Introduction to House Hacking & Real Estate Basics",
                    "Week 2: Credit & Financial Foundation",
                    "Week 3: Property Types & Essential Contracts",
                    "Week 4: Deal Analysis & Property Research",
                    "Week 5: Funding Strategy",
                    "Week 6: Practical Session & Guest Speaker",
                  ]}
                />
              </div>
            </motion.div>

            <ContactCTAs />
          </div>
        </div>
      </section>

      {/* ===== SELF-PACED & BOOKS ===== */}
      <section
        id="self-paced"
        className="bg-charcoal border-b border-white/5 py-16 md:py-24 lg:py-32"
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto mb-20 max-w-4xl space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <span className="text-gold font-heading text-2xl tracking-widest uppercase md:text-3xl">
                SELF-PACED
              </span>
              <h2 className="font-heading text-4xl text-white md:text-6xl">
                FLEXIBLE DIGITAL <span className="text-gold">LEARNING</span>
              </h2>
              <p className="text-cream/90 font-sans text-xl leading-relaxed font-light">
                A digital learning option for individuals accessing Escape The Odds content outside
                of institutional programming.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <h3 className="font-heading text-gold text-xl tracking-widest uppercase">
                  WHAT&apos;S INCLUDED
                </h3>
                <BulletList
                  items={[
                    "Structured curriculum access",
                    "Self-paced modules",
                    "Optional live virtual guidance sessions",
                  ]}
                />
              </div>

              <div className="space-y-4">
                <h3 className="font-heading text-gold text-xl tracking-widest uppercase">
                  BEST FOR
                </h3>
                <TagList
                  items={["Individual Learners", "Book Buyers", "Flexible Digital Access"]}
                />
              </div>
            </motion.div>
          </div>

          {/* Books */}
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h3 className="font-heading text-3xl text-white">
              WORKBOOKS & <span className="text-gold">BOOKS</span>
            </h3>
            <p className="text-cream/90 mt-4 font-sans leading-relaxed font-light">
              Printed learning resources available for individual purchase.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-0 border border-white/10 md:grid-cols-3">
            {books.map((book, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`group flex flex-col space-y-6 p-10 transition-colors duration-500 hover:bg-black/30 ${
                  index !== books.length - 1
                    ? "border-b border-white/10 md:border-r md:border-b-0"
                    : ""
                }`}
              >
                <div className="bg-gold/10 text-gold border-gold/20 group-hover:bg-gold flex h-14 w-14 items-center justify-center border transition-all group-hover:text-black">
                  <book.icon className="h-6 w-6" />
                </div>

                <h3 className="font-heading group-hover:text-gold text-xl leading-snug tracking-tight text-white transition-colors">
                  {book.title}
                </h3>

                <p className="text-cream/80 flex-1 font-sans text-base leading-relaxed font-light">
                  {book.description}
                </p>

                <div className="mt-auto pt-4">
                  <a
                    href={book.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gold font-heading group/link inline-flex items-center justify-center px-6 py-3 text-base tracking-widest text-black uppercase transition-all duration-300 hover:bg-white"
                  >
                    {book.cta}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center pt-16">
            <ContactCTAs />
          </div>
        </div>
      </section>
    </>
  );
}
