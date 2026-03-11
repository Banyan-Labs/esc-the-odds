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

export function TheExperience() {
  return (
    <section className="bg-charcoal border-y border-white/5 py-12 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto mb-20 max-w-3xl space-y-4 text-center">
          <span className="text-gold font-heading text-2xl tracking-widest uppercase md:text-3xl">
            HOW IT WORKS
          </span>
          <h2 className="font-heading text-4xl text-white md:text-6xl">THE EXPERIENCE</h2>
          <p className="text-cream font-sans text-lg font-light opacity-90">
            A facilitated engagement model built on three components:
          </p>
        </div>

        <div className="grid grid-cols-1 gap-0 border border-white/10 md:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`group flex flex-col transition-colors duration-500 hover:bg-black/40 ${
                index !== 2 ? "border-b border-white/10 md:border-r md:border-b-0" : ""
              }`}
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={step.image}
                  alt={step.imageAlt ?? step.title}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-105"
                  style={step.imagePosition ? { objectPosition: step.imagePosition } : undefined}
                />
                <div className="from-charcoal absolute inset-0 bg-linear-to-t via-transparent to-transparent opacity-70" />
              </div>

              <div className="flex flex-1 flex-col items-center space-y-6 p-10 text-center">
                <div className="bg-gold/10 border-gold/30 group-hover:bg-gold group-hover:border-gold flex h-16 w-16 items-center justify-center rounded-none border transition-all duration-300">
                  <step.icon className="text-gold h-8 w-8 transition-colors group-hover:text-black" />
                </div>

                <div className="space-y-2">
                  <h3 className="font-heading text-3xl tracking-tight text-white">{step.title}</h3>
                  <p className="text-gold font-heading text-sm tracking-widest uppercase md:text-base">
                    {step.subtitle}
                  </p>
                </div>

                <p className="text-cream/80 font-sans text-base leading-relaxed">
                  {step.description}
                </p>

                {step.bullets && (
                  <ul className="w-full space-y-2 text-left">
                    {step.bullets.map((bullet, i) => (
                      <li
                        key={i}
                        className="text-cream/80 flex items-start gap-2 font-sans text-sm"
                      >
                        <span className="bg-gold/50 mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" />
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
