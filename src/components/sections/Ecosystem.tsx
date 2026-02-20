"use client";

import { motion } from "framer-motion";
import { Film, BookOpen, Truck, Landmark } from "lucide-react";

const pillars = [
  {
    icon: Film,
    title: "NARRATIVE",
    subtitle: "THE FILM",
    description:
      "A cinematic blueprint for shifting mindsets and exposing the architecture of recidivism.",
    path: "/film",
  },
  {
    icon: BookOpen,
    title: "MASTERY",
    subtitle: "THE CURRICULUM",
    description:
      "The 'Bounce Forward Plan'—a 15-session evidence-based framework for reentry excellence.",
    path: "/courses",
  },
  {
    icon: Truck,
    title: "WORKFORCE",
    subtitle: "TRUCKING PROGRAM",
    description:
      "Accelerated pathways into the industry through our Non-CDL Box Truck mastery program.",
    path: "/pathways",
  },
  {
    icon: Landmark,
    title: "EMPOWERMENT",
    subtitle: "FINANCIAL LITERACY",
    description:
      "Building generational stability through structured financial education and legacy planning.",
    path: "/pathways",
  },
];

export function Ecosystem() {
  return (
    <section className="py-24 bg-black relative">
      {/* Section Header */}
      <div className="container mx-auto px-4 md:px-6 mb-16">
        <div className="max-w-3xl">
          <span className="text-gold font-heading tracking-widest text-sm uppercase mb-4 block">
            THE ETO ECOSYSTEM
          </span>
          <h2 className="text-4xl md:text-6xl font-heading text-white leading-tight">
            A STRUCTURED <br />
            <span className="text-gold">TRANSFORMATION.</span>
          </h2>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-black p-10 space-y-6 group hover:bg-gold transition-colors duration-500 cursor-default"
            >
              <pillar.icon className="w-12 h-12 text-gold group-hover:text-black transition-colors duration-500" />

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
          ))}
        </div>
      </div>
    </section>
  );
}
