"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  ProgramOverview,
  FilmImpactSection,
  BounceForwardSection,
  BoxTruckSection,
  CommercialCleaningSection,
  HouseHackingSection,
  SelfPacedSection,
} from "@/components/programs";

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

      <ProgramOverview />
      <FilmImpactSection />
      <BounceForwardSection />

      {/* Vocational Pathways Header */}
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

      <BoxTruckSection />
      <CommercialCleaningSection />
      <HouseHackingSection />
      <SelfPacedSection />
    </>
  );
}
