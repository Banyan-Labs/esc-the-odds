"use client";

import { motion } from "framer-motion";

export function AwarenessToImplementation() {
  return (
    <section className="bg-charcoal border-y border-white/5 py-12 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl space-y-6 text-center"
        >
          <h2 className="font-heading text-4xl leading-tight text-white md:text-6xl">
            FROM AWARENESS TO <span className="text-gold">IMPLEMENTATION</span>
          </h2>
          <p className="text-cream/90 font-sans text-xl leading-relaxed font-light">
            Most reentry conversations stop at inspiration. Escape The Odds bridges narrative and
            execution. We move from reflection &rarr; to structured action.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
