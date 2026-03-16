"use client";

import { motion } from "framer-motion";
import { FadeInView } from "@/components/shared";
import { BulletList } from "./BulletList";
import { TagList } from "./TagList";
import { ContactCTAs } from "./ContactCTAs";

export function BoxTruckSection() {
  return (
    <section id="box-truck" className="border-b border-white/5 bg-black py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <span className="text-gold font-heading text-2xl tracking-widest uppercase md:text-3xl">
              PROGRAM 3
            </span>
            <h2 className="font-heading text-4xl text-white md:text-6xl">
              NON-CDL BOX TRUCK <span className="text-gold">ENTREPRENEURSHIP</span>
            </h2>
            <p className="text-cream/90 font-sans text-xl leading-relaxed font-light">
              A practical business development program focused on preparing participants to operate
              a NON CDL needed box truck/cargo van after incarceration.
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
                  "Industry and market overview",
                  "Business formation and compliance",
                  "Financial planning and capital strategy",
                  "Truck operations and business systems",
                  "Mock lender interviews",
                ]}
              />
            </div>

            <div className="space-y-4">
              <h3 className="font-heading text-gold text-xl tracking-widest uppercase">
                WHAT&apos;S INCLUDED
              </h3>
              <BulletList
                items={[
                  "5-week program — 90 minutes per session",
                  "Cohort based delivery (up to 20 participants)",
                  "Available in correctional facilities, community based settings, virtual via Zoom, or in person",
                  "Non-CDL Box Truck Reference Guide included in cohort",
                ]}
              />
            </div>

            <div className="space-y-4">
              <h3 className="font-heading text-gold text-xl tracking-widest uppercase">COVERS</h3>
              <TagList
                items={[
                  "Entity Setup",
                  "Tax Election",
                  "Insurance",
                  "DOT Requirements",
                  "Motor Carrier Fundamentals",
                  "Startup Cost Modeling",
                  "Revenue Assumptions",
                  "Cost-Per-Mile Analysis",
                  "Lender Preparation",
                  "CDFI Engagement",
                  "Dispatching",
                  "Maintenance Planning",
                  "Safety",
                  "Invoicing",
                  "Contract Management",
                ]}
              />
            </div>
          </motion.div>

          <ContactCTAs label="ENROLL IN BOX TRUCK PROGRAM" />
          <FadeInView className="pt-2">
            <a
              href="https://a.co/d/09Ajq8UA"
              target="_blank"
              rel="noopener noreferrer"
              className="font-heading inline-flex items-center justify-center border-2 border-white px-8 py-4 text-base tracking-widest text-white uppercase transition-all duration-300 hover:bg-white hover:text-black"
            >
              ORDER THE BOOK
            </a>
          </FadeInView>
        </div>
      </div>
    </section>
  );
}
