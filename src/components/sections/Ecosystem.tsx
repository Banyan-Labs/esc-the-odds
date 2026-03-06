"use client";

import { motion } from "framer-motion";
import { Film, BookOpen, Briefcase, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const cards = [
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
    image: "/assets/Image_8.jpeg",
    imageAlt: "Vocational entrepreneurship program",
  },
];

export function Ecosystem() {
  return (
    <section className="py-24 bg-black relative">
      {/* Section Header */}
      <div className="container mx-auto px-4 md:px-6 mb-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-gold font-heading tracking-widest text-sm uppercase">
            ENGAGE WITH US
          </span>
          <h2 className="text-4xl md:text-6xl font-heading text-white leading-tight">
            ENGAGE WITH <span className="text-gold">US</span>
          </h2>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/10">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-black group hover:bg-charcoal/50 transition-colors duration-500 flex flex-col ${
                index !== 2 ? "md:border-r border-white/10" : ""
              }`}
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.imageAlt}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-70" />
              </div>

              <div className="p-10 space-y-6 flex flex-col flex-1">
                <card.icon className="w-12 h-12 text-gold" />

                <h3 className="text-xl font-heading text-white uppercase tracking-tight leading-snug">
                  {card.title}
                </h3>

                <p className="text-cream/60 font-sans leading-relaxed text-sm flex-1">
                  {card.body}
                </p>

                <Link
                  href={card.href}
                  className="inline-flex items-center text-gold font-heading text-sm tracking-widest uppercase border-b border-gold pb-1 hover:text-white hover:border-white transition-all group/link"
                >
                  {card.cta}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
