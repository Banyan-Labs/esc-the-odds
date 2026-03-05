"use client";

import { motion } from "framer-motion";
import { Film, BookOpen, Truck, Landmark } from "lucide-react";
import type { ElementType } from "react";

const iconMap: Record<string, ElementType> = { Film, BookOpen, Truck, Landmark };

interface EcosystemCard {
  title: string;
  subtitle: string;
  description: string;
  link?: string;
  icon?: string;
}

interface EcosystemData {
  sectionLabel?: string;
  headingLine1?: string;
  headingAccent?: string;
  cards?: EcosystemCard[];
}

const defaultCards: EcosystemCard[] = [
  { icon: "Film", title: "NARRATIVE", subtitle: "THE FILM", description: "A cinematic blueprint for shifting mindsets and exposing the architecture of recidivism.", link: "/film" },
  { icon: "BookOpen", title: "DEVELOPMENT", subtitle: "THE CURRICULUM", description: "The 'Bounce Forward Plan'—a 15-session evidence-based framework for reentry excellence.", link: "/programs" },
  { icon: "Truck", title: "WORKFORCE", subtitle: "TRUCKING PROGRAM", description: "Accelerated pathways into the industry through our Non-CDL Box Truck mastery program.", link: "/programs" },
  { icon: "Landmark", title: "EMPOWERMENT", subtitle: "FINANCIAL EMPOWERMENT", description: "Building generational stability through structured financial education, wealth-building strategies, and legacy planning.", link: "/programs" },
];

export function Ecosystem({ data }: { data?: EcosystemData }) {
  const cards = data?.cards && data.cards.length > 0 ? data.cards : defaultCards;

  return (
    <section id="financial-empowerment" className="py-24 bg-black relative">
      {/* Section Header */}
      <div className="container mx-auto px-4 md:px-6 mb-16">
        <div className="max-w-3xl">
          <span className="text-gold font-heading tracking-widest text-sm uppercase mb-4 block">
            {data?.sectionLabel || "THE ETO ECOSYSTEM"}
          </span>
          <h2 className="text-4xl md:text-6xl font-heading text-white leading-tight">
            {data?.headingLine1 || "A STRUCTURED"} <br />
            <span className="text-gold">{data?.headingAccent || "TRANSFORMATION."}</span>
          </h2>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
          {cards.map((pillar, index) => {
            const Icon = iconMap[pillar.icon || "Film"] || Film;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-black p-10 space-y-6 group hover:bg-gold transition-colors duration-500 cursor-default"
              >
                <Icon className="w-12 h-12 text-gold group-hover:text-black transition-colors duration-500" />

                <div className="space-y-1">
                  <p className="text-gold group-hover:text-black/60 text-xs font-heading tracking-widest uppercase transition-colors duration-500">
                    {pillar.title}
                  </p>
                  <h3 className="text-2xl font-heading text-white group-hover:text-black transition-colors duration-500 uppercase">
                    {pillar.subtitle}
                  </h3>
                </div>

                <p className="text-cream/60 group-hover:text-black/80 font-sans leading-relaxed text-sm transition-colors duration-500">
                  {pillar.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
