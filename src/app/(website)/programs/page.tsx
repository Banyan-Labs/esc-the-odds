"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Users, Clock, Briefcase, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const programCards = [
  {
    title: "LIVE COHORT PROGRAM",
    subtitle: "FACILITATED INSTITUTIONAL EXPERIENCE",
    description:
      "A structured, in-person facilitated program designed for institutions. Includes the film experience, guided discussion, the Bounce Forward Plan workbook, and accountability.",
    icon: Users,
    image: "/assets/Image_9.jpeg",
    href: "/programs/live-cohort",
    cta: "REQUEST INFO",
  },
  {
    title: "SELF-PACED PROGRAM",
    subtitle: "FLEXIBLE DIGITAL LEARNING",
    description:
      "Flexible digital learning for individuals seeking structured resources and on-demand access. Begin your transformation journey on your own schedule.",
    icon: Clock,
    image: "/assets/Image_13.jpeg",
    href: "/programs/self-paced",
    cta: "EXPLORE SELF-PACED",
  },
  {
    title: "VOCATIONAL PATHWAYS",
    subtitle: "CAREER & ENTREPRENEURSHIP",
    description:
      "Economic mobility programs aligned with reentry preparation: Non-CDL Box Truck Entrepreneurship, Commercial Cleaning Business Development, House Hacking & Real Estate Fundamentals.",
    icon: Briefcase,
    image: "/assets/Image_8.jpeg",
    href: "/contact",
    cta: "EXPLORE VOCATIONAL PATHWAYS",
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
            src="/assets/Image_16.jpeg"
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
                PROGRAMS
              </span>
              <h1 className="text-5xl md:text-8xl font-heading text-white leading-[0.9] tracking-tighter">
                <span className="text-gold">PROGRAMS</span>
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-cream/70 font-sans font-light max-w-2xl mx-auto leading-relaxed">
              Clear Pathways to Engage with Escape The Odds
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 bg-charcoal border-b border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl text-cream/70 font-sans font-light leading-relaxed max-w-4xl mx-auto text-center"
          >
            Escape The Odds delivers documentary-based engagement, institutional
            curriculum implementation, and industry-aligned entrepreneurship
            education designed to expand stability and income pathways.
          </motion.p>
        </div>
      </section>

      {/* Program Cards */}
      <section className="py-32 bg-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/10">
            {programCards.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                className={`flex flex-col group hover:bg-charcoal/50 transition-colors duration-500 ${
                  index !== programCards.length - 1
                    ? "md:border-r border-white/10 border-b md:border-b-0"
                    : ""
                }`}
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-60" />
                </div>

                <div className="p-10 flex flex-col flex-1 space-y-6">
                  <div className="w-14 h-14 bg-gold/10 flex items-center justify-center text-gold border border-gold/20 group-hover:bg-gold group-hover:text-black transition-all">
                    <program.icon className="w-6 h-6" />
                  </div>

                  <div className="space-y-2">
                    <p className="text-gold text-xs font-heading tracking-widest uppercase">
                      {program.subtitle}
                    </p>
                    <h3 className="text-2xl font-heading text-white tracking-tight leading-none group-hover:text-gold transition-colors">
                      {program.title}
                    </h3>
                  </div>

                  <p className="text-cream/60 font-sans font-light leading-relaxed text-sm flex-1">
                    {program.description}
                  </p>

                  <div className="pt-4 mt-auto">
                    <Link
                      href={program.href}
                      className="inline-flex items-center text-gold font-heading text-sm tracking-widest uppercase border-b border-gold pb-1 hover:text-white hover:border-white transition-all group/link"
                    >
                      {program.cta}
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
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
