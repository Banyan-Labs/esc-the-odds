"use client";

import { motion } from "framer-motion";
import { Newspaper } from "lucide-react";

const placeholders = [
  {
    publication: "Publication Name",
    headline: "Featured coverage coming soon.",
  },
  {
    publication: "Publication Name",
    headline: "Featured coverage coming soon.",
  },
  {
    publication: "Publication Name",
    headline: "Featured coverage coming soon.",
  },
];

export function MediaPress() {
  return (
    <section className="py-24 bg-black border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="text-gold font-heading tracking-widest text-sm uppercase">
            IN THE MEDIA
          </span>
          <h2 className="text-4xl md:text-6xl font-heading text-white">
            PRESS & <span className="text-gold">COVERAGE</span>
          </h2>
          <p className="text-lg text-cream opacity-70 font-sans font-light">
            Stories highlighting the impact of the Escape The Odds mission.
          </p>
        </div>

        {/* Placeholder Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {placeholders.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-charcoal/50 p-10 border border-white/5 group hover:border-gold/30 transition-all duration-500"
            >
              <Newspaper className="w-10 h-10 text-gold/20 mb-6" />
              <p className="font-heading text-white text-lg tracking-tight mb-2">
                {item.publication}
              </p>
              <p className="text-cream/50 font-sans text-sm leading-relaxed">
                {item.headline}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
