"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  subtitle: string;
  heading: string;
  accentText?: string;
  description?: string;
}

export function SectionHeader({ subtitle, heading, accentText, description }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="mx-auto mb-20 max-w-3xl space-y-4 text-center"
    >
      <span className="text-gold font-heading text-2xl tracking-widest uppercase md:text-3xl">
        {subtitle}
      </span>
      <h2 className="font-heading text-4xl leading-tight text-white md:text-6xl">
        {heading} {accentText && <span className="text-gold">{accentText}</span>}
      </h2>
      {description && <p className="text-cream/90 font-sans text-lg font-light">{description}</p>}
    </motion.div>
  );
}
