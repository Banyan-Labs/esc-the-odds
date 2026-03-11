"use client";

import { motion } from "framer-motion";
import { BulletList } from "./BulletList";
import { TagList } from "./TagList";
import { ContactCTAs } from "./ContactCTAs";
import { BooksGrid } from "./BooksGrid";

export function SelfPacedSection() {
  return (
    <section
      id="self-paced"
      className="bg-charcoal border-b border-white/5 py-16 md:py-24 lg:py-32"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto mb-20 max-w-4xl space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <span className="text-gold font-heading text-2xl tracking-widest uppercase md:text-3xl">
              SELF-PACED
            </span>
            <h2 className="font-heading text-4xl text-white md:text-6xl">
              FLEXIBLE DIGITAL <span className="text-gold">LEARNING</span>
            </h2>
            <p className="text-cream/90 font-sans text-xl leading-relaxed font-light">
              A digital learning option for individuals accessing Escape The Odds content outside of
              institutional programming.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h3 className="font-heading text-gold text-xl tracking-widest uppercase">
                WHAT&apos;S INCLUDED
              </h3>
              <BulletList
                items={[
                  "Structured curriculum access",
                  "Self-paced modules",
                  "Optional live virtual guidance sessions",
                ]}
              />
            </div>

            <div className="space-y-4">
              <h3 className="font-heading text-gold text-xl tracking-widest uppercase">BEST FOR</h3>
              <TagList items={["Individual Learners", "Book Buyers", "Flexible Digital Access"]} />
            </div>
          </motion.div>
        </div>

        <BooksGrid />

        <div className="flex justify-center pt-16">
          <ContactCTAs label="CONTACT US" />
        </div>
      </div>
    </section>
  );
}
