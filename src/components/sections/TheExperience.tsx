"use client";

import { motion } from "framer-motion";
import { Film, MessageSquare, GraduationCap } from "lucide-react";
import Image from "next/image";

const steps = [
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

export function TheExperience() {
  return (
    <section className="py-24 bg-charcoal border-y border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="text-gold font-heading tracking-widest text-sm uppercase">
            THE EXPERIENCE
          </span>
          <h2 className="text-4xl md:text-6xl font-heading text-white">
            THE EXPERIENCE
          </h2>
          <p className="text-lg text-cream opacity-70 font-sans font-light">
            A facilitated engagement model built on three components:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/10">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`flex flex-col group hover:bg-black/40 transition-colors duration-500 ${
                index !== 2
                  ? "md:border-r border-white/10 border-b md:border-b-0"
                  : ""
              }`}
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={step.image}
                  alt={step.imageAlt}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-charcoal via-transparent to-transparent opacity-70" />
              </div>

              <div className="p-10 flex flex-col items-center text-center space-y-6 flex-1">
                <div className="w-16 h-16 bg-gold/10 flex items-center justify-center rounded-none border border-gold/30 group-hover:bg-gold group-hover:border-gold transition-all duration-300">
                  <step.icon className="w-8 h-8 text-gold group-hover:text-black transition-colors" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-3xl font-heading text-white tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-gold text-sm font-heading tracking-widest uppercase">
                    {step.subtitle}
                  </p>
                </div>

                <p className="text-cream/60 leading-relaxed font-sans text-base">
                  {step.description}
                </p>

                {step.bullets && (
                  <ul className="text-left space-y-2 w-full">
                    {step.bullets.map((bullet, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-cream/60 text-sm font-sans"
                      >
                        <span className="w-1.5 h-1.5 bg-gold/50 rounded-full mt-1.5 shrink-0" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
