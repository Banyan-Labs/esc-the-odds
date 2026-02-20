"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BookOpen,
  Truck,
  Landmark,
  Clock,
  Users,
  Film,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const primaryPrograms = [
  {
    title: "LIVE COHORT PROGRAM",
    subtitle: "5-WEEK FACILITATED TRANSFORMATION",
    description:
      "A structured, facilitated program that includes the film experience, guided discussion, the Bounce Forward Plan workbook, and accountability. Delivered via Zoom or in-person for institutions and organizations.",
    icon: Users,
    image: "/assets/Curriculum-Display.png",
    href: "/programs/live-cohort",
    cta: "LEARN MORE",
    highlights: [
      "Film Experience Included",
      "Facilitated Discussion",
      "Bounce Forward Plan",
      "Institutional Ready",
    ],
    active: true,
  },
  {
    title: "SELF-PACED DIGITAL PROGRAM",
    subtitle: "COMING SOON",
    description:
      "Independent learning modules designed for individuals ready to begin their transformation journey on their own schedule. Institutional licensing available.",
    icon: Clock,
    image: "/assets/carousel/COOKCOUNTY-SHERIFF-PIC.png",
    href: "/programs/self-paced",
    cta: "COMING SOON",
    highlights: [
      "Independent Learning",
      "Institutional License Option",
      "Curriculum Included",
      "Scalable",
    ],
    active: false,
  },
];

const additionalOfferings = [
  {
    title: "TRUCKING ENTREPRENEURSHIP",
    type: "Digital Masterclass",
    description:
      "Master the logistics and business of the trucking industry. A complete blueprint from licensing to fleet management through our Non-CDL Box Truck program.",
    icon: Truck,
    image: "/assets/carousel/SPEAKING-A-COMPARISON.png",
    href: "https://link.gohighlevel.com/widget/form/YOUR_COURSE_WIDGET_ID",
    cta: "ACCESS COURSE",
    external: true,
  },
  {
    title: "REAL ESTATE TRANSFORMATION",
    type: "Strategic Guide",
    description:
      "Building generational wealth through strategic property acquisition and management. Architectural freedom through brick and mortar.",
    icon: Landmark,
    image: "/assets/carousel/PINK-SUIT-PODCAST-SHOOT.png",
    href: "https://amazon.com/YOUR_BOOK_LINK",
    cta: "GET THE BOOK",
    external: true,
  },
  {
    title: "COMMERCIAL CLEANING MASTERCLASS",
    type: "Coming Soon",
    description:
      "Industrial-grade business training for scalable service enterprises. Building economic independence through proven service models.",
    icon: Sparkles,
    image: null,
    href: "#",
    cta: "COMING SOON",
    external: false,
  },
];

export default function ProgramsPage() {
  return (
    <main className="min-h-screen bg-black text-cream selection:bg-gold selection:text-black">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-40 pb-32 bg-black overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 opacity-20 grayscale">
          <Image
            src="/assets/carousel/COOKCOUNTY-SHERIFF-PIC.png"
            alt="Programs Background"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-linear-to-b from-black via-black/40 to-black" />

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto space-y-8"
          >
            <div className="space-y-4">
              <span className="text-gold font-heading tracking-widest text-sm uppercase">
                OUR PROGRAMS
              </span>
              <h1 className="text-5xl md:text-8xl font-heading text-white leading-[0.9] tracking-tighter">
                STRUCTURED PATHWAYS TO{" "}
                <span className="text-gold">TRANSFORMATION.</span>
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-cream/70 font-sans font-light max-w-2xl mx-auto leading-relaxed">
              Practical, actionable education designed to help you build a new
              life and architect your own success story.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Message */}
      <section className="py-16 bg-charcoal border-b border-white/5">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto space-y-6"
          >
            <Film className="w-10 h-10 text-gold mx-auto" />
            <p className="text-xl md:text-2xl text-cream/80 font-sans font-light leading-relaxed italic">
              &ldquo;The curriculum is not a downloadable product&mdash;it is an
              institutional, facilitated experience that includes the
              film.&rdquo;
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center text-xs font-heading tracking-[0.2em] text-gold hover:text-white transition-colors"
            >
              INQUIRE ABOUT THE CURRICULUM
              <ArrowUpRight className="w-4 h-4 ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Primary Programs */}
      <section className="py-32 bg-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-16">
            <span className="text-gold font-heading tracking-widest text-sm uppercase mb-4 block">
              ENGAGEMENT MODELS
            </span>
            <h2 className="text-4xl md:text-6xl font-heading text-white leading-tight">
              TWO PATHWAYS. <br />
              <span className="text-gold">ONE MISSION.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-white/10">
            {primaryPrograms.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`flex flex-col group hover:bg-charcoal/50 transition-colors duration-500 ${
                  index === 0 ? "lg:border-r border-white/10" : ""
                }`}
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className={`object-cover transition-all duration-700 ${
                      program.active
                        ? "grayscale group-hover:grayscale-0 group-hover:scale-105"
                        : "grayscale opacity-50"
                    }`}
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-60" />
                  <div className="absolute bottom-6 left-6">
                    <span
                      className={`px-3 py-1 text-[10px] font-heading tracking-widest uppercase ${
                        program.active
                          ? "bg-gold text-black"
                          : "bg-white/20 text-white"
                      }`}
                    >
                      {program.active
                        ? "Featured Program"
                        : "In Development"}
                    </span>
                  </div>
                </div>

                <div className="p-10 flex flex-col flex-1 space-y-6">
                  <div className="w-14 h-14 bg-gold/10 flex items-center justify-center text-gold border border-gold/20 group-hover:bg-gold group-hover:text-black transition-all">
                    <program.icon className="w-6 h-6" />
                  </div>

                  <div className="space-y-2">
                    <p className="text-gold text-xs font-heading tracking-widest uppercase">
                      {program.subtitle}
                    </p>
                    <h3 className="text-3xl font-heading text-white tracking-tight leading-none group-hover:text-gold transition-colors">
                      {program.title}
                    </h3>
                  </div>

                  <p className="text-cream/60 font-sans font-light leading-relaxed">
                    {program.description}
                  </p>

                  <div className="grid grid-cols-2 gap-3 pt-2">
                    {program.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-gold rounded-full" />
                        <span className="text-cream/50 text-xs font-sans">
                          {highlight}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 mt-auto">
                    {program.active ? (
                      <Link
                        href={program.href}
                        className="inline-flex items-center text-xs font-heading tracking-[0.2em] text-gold hover:text-white transition-colors group/link"
                      >
                        {program.cta}
                        <ArrowUpRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                      </Link>
                    ) : (
                      <span className="inline-flex items-center text-xs font-heading tracking-[0.2em] text-cream/30">
                        {program.cta}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Offerings */}
      <section className="py-32 bg-charcoal border-t border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-16">
            <span className="text-gold font-heading tracking-widest text-sm uppercase mb-4 block">
              ADDITIONAL OFFERINGS
            </span>
            <h2 className="text-4xl md:text-6xl font-heading text-white leading-tight">
              INDUSTRY <span className="text-gold">PATHWAYS.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/10">
            {additionalOfferings.map((offering, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`flex flex-col group hover:bg-black/40 transition-colors duration-500 ${
                  index !== additionalOfferings.length - 1
                    ? "md:border-r border-white/10 border-b md:border-b-0"
                    : "border-b md:border-b-0"
                }`}
              >
                {offering.image ? (
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={offering.image}
                      alt={offering.title}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-charcoal via-transparent to-transparent opacity-60" />
                    <div className="absolute bottom-6 left-6">
                      <span className="px-3 py-1 bg-gold text-black text-[10px] font-heading tracking-widest uppercase">
                        {offering.type}
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="aspect-video bg-black/40 flex items-center justify-center">
                    <span className="text-gold font-heading tracking-widest text-xs uppercase italic">
                      {offering.type}
                    </span>
                  </div>
                )}

                <div className="p-10 flex flex-col flex-1 space-y-6">
                  <div className="w-14 h-14 bg-gold/10 flex items-center justify-center text-gold border border-gold/20 group-hover:bg-gold group-hover:text-black transition-all">
                    <offering.icon className="w-6 h-6" />
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-2xl font-heading text-white tracking-tight leading-none group-hover:text-gold transition-colors">
                      {offering.title}
                    </h3>
                    <p className="text-cream/60 font-sans font-light leading-relaxed text-sm">
                      {offering.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-auto">
                    {offering.cta !== "COMING SOON" ? (
                      <a
                        href={offering.href}
                        target={offering.external ? "_blank" : "_self"}
                        rel={
                          offering.external ? "noopener noreferrer" : undefined
                        }
                        className="inline-flex items-center text-xs font-heading tracking-[0.2em] text-gold hover:text-white transition-colors group/link"
                      >
                        {offering.cta}
                        <ArrowUpRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                      </a>
                    ) : (
                      <span className="inline-flex items-center text-xs font-heading tracking-[0.2em] text-cream/30">
                        COMING SOON
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
