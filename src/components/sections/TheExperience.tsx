"use client";

import { motion } from "framer-motion";
import { Film, MessageSquare, GraduationCap } from "lucide-react";
import type { ElementType } from "react";

const iconMap: Record<string, ElementType> = { Film, MessageSquare, GraduationCap };

interface PillarItem {
  title: string;
  subtitle: string;
  description: string;
  icon?: string;
}

interface TheExperienceData {
  sectionLabel?: string;
  heading?: string;
  body?: string;
  pillars?: PillarItem[];
}

const defaultPillars: PillarItem[] = [
  { title: "THE FILM", subtitle: "The Mirror", description: "A raw, cinematic immersion that reveals the hidden architecture of recidivism and the mindset required to break the cycle.", icon: "Film" },
  { title: "DISCUSSION", subtitle: "The Inquiry", description: "A guided session dismantling the 'Get Back' mentality—simply returning—to initiate a true 'Bounce Forward' transformation.", icon: "MessageSquare" },
  { title: "IMPLEMENTATION", subtitle: "The Map", description: "Activating the 'Bounce Forward Plan'—a structured curriculum for practical accountability and institutional-ready reentry.", icon: "GraduationCap" },
];

export function TheExperience({ data }: { data?: TheExperienceData }) {
  const pillars = data?.pillars && data.pillars.length > 0 ? data.pillars : defaultPillars;

  return (
    <section className="py-24 bg-charcoal border-y border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="text-gold font-heading tracking-widest text-sm uppercase">
            {data?.sectionLabel || "THE EXPERIENCE"}
          </span>
          <h2 className="text-4xl md:text-6xl font-heading text-white">
            {data?.heading || "THE EXPERIENCE"}
          </h2>
          <p className="text-lg text-cream opacity-70 font-sans font-light">
            {data?.body || "A structured, facilitated transformation experience designed to present the film, facilitate guided discussion, and activate reflection and accountability."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/10">
          {pillars.map((step, index) => {
            const Icon = iconMap[step.icon || "Film"] || Film;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`p-10 flex flex-col items-center text-center space-y-6 group hover:bg-black/40 transition-colors duration-500 ${
                  index !== 2
                    ? "md:border-r border-white/10 border-b md:border-b-0"
                    : ""
                }`}
              >
                <div className="w-16 h-16 bg-gold/10 flex items-center justify-center rounded-none border border-gold/30 group-hover:bg-gold group-hover:border-gold transition-all duration-300">
                  <Icon className="w-8 h-8 text-gold group-hover:text-black transition-colors" />
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
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
