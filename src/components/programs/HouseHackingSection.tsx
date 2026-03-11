"use client";

import { motion } from "framer-motion";
import { BulletList } from "./BulletList";
import { ContactCTAs } from "./ContactCTAs";

export function HouseHackingSection() {
  return (
    <section
      id="house-hacking"
      className="border-b border-white/5 bg-black py-16 md:py-24 lg:py-32"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <span className="text-gold font-heading text-2xl tracking-widest uppercase md:text-3xl">
              PROGRAM 5
            </span>
            <h2 className="font-heading text-4xl text-white md:text-6xl">
              HOUSE HACKING & <span className="text-gold">REAL ESTATE FUNDAMENTALS</span>
            </h2>
            <p className="text-cream/90 font-sans text-xl leading-relaxed font-light">
              A 6-week course introducing homeownership fundamentals, rental income strategy, and
              accessible real estate concepts through house hacking.
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
                WHAT PARTICIPANTS LEARN
              </h3>
              <BulletList
                items={[
                  "What house hacking is and how it works",
                  "Credit and financial readiness",
                  "Mortgage processes and loan types",
                  "Rental income potential",
                  "Real estate deal analysis",
                  "Down payment assistance and funding pathways",
                ]}
              />
            </div>

            <div className="space-y-4">
              <h3 className="font-heading text-gold text-xl tracking-widest uppercase">
                WHAT&apos;S INCLUDED
              </h3>
              <BulletList
                items={[
                  "6-week program — 90 minutes per session",
                  "Instructor-led classroom model",
                  "Worksheets and guided exercises",
                  "Available in correctional facilities, community-based settings, in person, or virtual via Zoom",
                  "House Hacking Your Way to Financial Freedom workbook included in cohort",
                ]}
              />
            </div>

            <div className="space-y-4">
              <h3 className="font-heading text-gold text-xl tracking-widest uppercase">
                CORE MODULES
              </h3>
              <BulletList
                items={[
                  "Week 1: Introduction to House Hacking & Real Estate Basics",
                  "Week 2: Credit & Financial Foundation",
                  "Week 3: Property Types & Essential Contracts",
                  "Week 4: Deal Analysis & Property Research",
                  "Week 5: Funding Strategy",
                  "Week 6: Practical Session & Guest Speaker",
                ]}
              />
            </div>
          </motion.div>

          <ContactCTAs label="ENROLL IN HOUSE HACKING" />
        </div>
      </div>
    </section>
  );
}
