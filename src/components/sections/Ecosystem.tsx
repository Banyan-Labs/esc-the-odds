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
    image: "/assets/Image_20.jpeg",
    imageAlt: "Vocational program classroom instruction",
  },
];

export function Ecosystem() {
  return (
    <section className="relative bg-black py-12 md:py-20 lg:py-24">
      {/* Section Header */}
      <div className="container mx-auto mb-16 px-4 md:px-6">
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          <span className="text-gold font-heading text-2xl tracking-widest uppercase md:text-3xl">
            OUR OFFERINGS
          </span>
          <h2 className="font-heading text-4xl leading-tight text-white md:text-6xl">
            ENGAGE WITH <span className="text-gold">US</span>
          </h2>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 gap-0 border border-white/10 md:grid-cols-3">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group hover:bg-charcoal/50 flex flex-col bg-black transition-colors duration-500 ${
                index !== 2 ? "border-white/10 md:border-r" : ""
              }`}
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.imageAlt}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-70" />
              </div>

              <div className="flex flex-1 flex-col space-y-6 p-10">
                <card.icon className="text-gold h-12 w-12" />

                <h3 className="font-heading text-xl leading-snug tracking-tight text-white uppercase">
                  {card.title}
                </h3>

                <p className="text-cream/80 flex-1 font-sans text-base leading-relaxed">
                  {card.body}
                </p>

                <Link
                  href={card.href}
                  className="bg-gold font-heading group/link inline-flex items-center justify-center px-6 py-3 text-base tracking-widest text-black uppercase transition-all duration-300 hover:bg-white"
                >
                  {card.cta}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
