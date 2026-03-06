"use client";

import { motion } from "framer-motion";

export function AwarenessToImplementation() {
  return (
    <section className="py-24 bg-charcoal border-y border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto space-y-6"
        >
          <h2 className="text-4xl md:text-6xl font-heading text-white leading-tight">
            FROM AWARENESS TO{" "}
            <span className="text-gold">IMPLEMENTATION</span>
          </h2>
          <p className="text-xl text-cream/70 font-sans font-light leading-relaxed">
            Most reentry conversations stop at inspiration. Escape The Odds
            bridges narrative and execution. We move from reflection &rarr; to
            structured action.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
