"use client";

import { motion } from "framer-motion";
import { BulletList } from "./BulletList";
import { TagList } from "./TagList";
import { ContactCTAs } from "./ContactCTAs";

export function CommercialCleaningSection() {
  return (
    <section
      id="commercial-cleaning"
      className="bg-charcoal border-b border-white/5 py-16 md:py-24 lg:py-32"
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
              PROGRAM 4
            </span>
            <h2 className="font-heading text-4xl text-white md:text-6xl">
              COMMERCIAL CLEANING <span className="text-gold">BUSINESS DEVELOPMENT</span>
            </h2>
            <p className="text-cream/90 font-sans text-xl leading-relaxed font-light">
              A scalable service business training program designed to introduce participants to a
              lower barrier business model with recurring revenue potential.
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
                  "Industry fundamentals",
                  "Business setup and legal structure",
                  "Operations and service delivery",
                  "Financial management",
                  "Capital and resource navigation",
                ]}
              />
            </div>

            <div className="space-y-4">
              <h3 className="font-heading text-gold text-xl tracking-widest uppercase">
                WHAT&apos;S INCLUDED
              </h3>
              <BulletList
                items={[
                  "7-week program — 120 minutes per session",
                  "Up to 20 participants per cohort",
                  "Available in correctional facilities, community based settings, in person, or virtual via Zoom",
                  "Certification from an internationally recognized industry association",
                ]}
              />
            </div>

            <div className="space-y-4">
              <h3 className="font-heading text-gold text-xl tracking-widest uppercase">COVERS</h3>
              <TagList
                items={[
                  "Commercial vs. Residential Markets",
                  "Demand Drivers",
                  "Client Acquisition",
                  "Entity Formation",
                  "Licensing",
                  "Insurance",
                  "Franchise vs. Independent",
                  "Cleaning Techniques",
                  "PPE",
                  "Chemical Handling",
                  "Operational Workflow",
                  "Pricing Models",
                  "Invoicing",
                  "Contract Management",
                  "Growth Planning",
                  "SBDCs & CDFIs",
                ]}
              />
            </div>
          </motion.div>

          <ContactCTAs label="ENROLL YOUR ORGANIZATION" />
        </div>
      </div>
    </section>
  );
}
