"use client";

import { motion } from "framer-motion";
import { Users, Monitor, ShieldCheck, Zap } from "lucide-react";
import Link from "next/link";

export function ProgramDelivery() {
  return (
    <section className="py-24 bg-charcoal">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Headline Content */}
          <div className="lg:w-1/3 space-y-6">
            <span className="text-gold font-heading tracking-widest text-sm uppercase">
              DELIVERY FORMATS
            </span>
            <h2 className="text-4xl md:text-5xl font-heading text-white leading-tight uppercase">
              Institutional <br />
              <span className="text-gold">Ready.</span>
            </h2>
            <p className="text-cream/60 font-sans leading-relaxed">
              Designed for scalability and institutional integration, we offer
              structured pathways for organizations to implement transformation
              at the cohort or individual level.
            </p>
            <div className="pt-4 flex flex-col gap-4">
              <div className="flex items-center gap-3 text-cream/80 text-sm italic">
                <ShieldCheck className="w-5 h-5 text-gold" />
                <span>Evidence-Based Framework</span>
              </div>
              <div className="flex items-center gap-3 text-cream/80 text-sm italic">
                <Zap className="w-5 h-5 text-gold" />
                <span>Rapid Implementation</span>
              </div>
            </div>
          </div>

          {/* Delivery Cards */}
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            {/* Format 1: Live Cohort */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-black p-10 border border-white/5 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <Users className="w-32 h-32" />
              </div>

              <div className="relative space-y-6">
                <div className="w-12 h-12 bg-gold/10 flex items-center justify-center border border-gold/30">
                  <Users className="w-6 h-6 text-gold" />
                </div>
                <h3 className="text-2xl font-heading text-white uppercase tracking-tight">
                  Live Cohort <br />
                  Program
                </h3>
                <p className="text-sm text-gold font-heading tracking-widest uppercase">
                  5-Week Intensive
                </p>
                <p className="text-cream/60 text-sm leading-relaxed">
                  A structured virtual environment (Zoom) featuring facilitated
                  discussions designed for maximum accountability and
                  peer-to-peer transformation.
                </p>
                <div className="pt-4">
                  <Link href="/contact" className="text-gold font-heading text-sm border-b border-gold pb-1 hover:text-white hover:border-white transition-all uppercase tracking-widest">
                    Inquire for Access
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Format 2: Digital License */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-black p-10 border border-white/5 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <Monitor className="w-32 h-32" />
              </div>

              <div className="relative space-y-6">
                <div className="w-12 h-12 bg-white/5 flex items-center justify-center border border-white/10">
                  <Monitor className="w-6 h-6 text-cream" />
                </div>
                <h3 className="text-2xl font-heading text-white uppercase tracking-tight">
                  Self-Paced <br />
                  Digital License
                </h3>
                <p className="text-sm text-cream font-heading tracking-widest uppercase opacity-40">
                  Scalable Solution
                </p>
                <p className="text-cream/60 text-sm leading-relaxed">
                  Independent learning modules ideal for institutional purchase.
                  Designed for individual enrollment or large-scale
                  organizational rollouts.
                </p>
                <div className="pt-4">
                  <Link href="/contact" className="text-cream font-heading text-sm border-b border-cream/50 pb-1 hover:text-gold hover:border-gold transition-all uppercase tracking-widest">
                    View Licensing
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
