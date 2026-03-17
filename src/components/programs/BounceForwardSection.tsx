"use client";

import { motion } from "framer-motion";
import { FadeInView } from "@/components/shared";
import { BulletList } from "./BulletList";
import { TagList } from "./TagList";
import { ContactCTAs } from "./ContactCTAs";

export function BounceForwardSection() {
  return (
    <section id="bounce-forward" className="bg-black py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <span className="text-gold font-heading text-2xl tracking-widest uppercase md:text-3xl">
              PROGRAM 2
            </span>
            <h2 className="font-heading text-4xl text-white md:text-6xl">
              BOUNCE FORWARD PLAN: <span className="text-gold">MASTERING YOUR REENTRY</span>
            </h2>
            <p className="text-cream/90 font-sans text-xl leading-relaxed font-light">
              A structured, institutional ready reentry education framework designed for repeatable
              implementation.
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
                WHAT IT IS
              </h3>
              <p className="text-cream/90 font-sans text-lg leading-relaxed">
                A 15-session curriculum license created for correctional and reentry focused
                organizations that want structured delivery beyond a one time film experience.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-heading text-gold text-xl tracking-widest uppercase">
                12-MONTH LICENSE INCLUDES
              </h3>
              <BulletList
                items={[
                  "Documentary integration",
                  "Participant workbooks",
                  "Facilitation guides",
                  "Subject Matter Expert toolkit",
                  "Evaluation framework",
                  "Reporting / implementation support framework",
                ]}
              />
            </div>

            <div className="space-y-4">
              <h3 className="font-heading text-gold text-xl tracking-widest uppercase">
                FOCUS AREAS COVERED
              </h3>
              <BulletList
                items={[
                  "Housing stability planning",
                  "Career development / workforce readiness",
                  "Entrepreneurship awareness",
                  "Financial literacy exercises",
                  "Individualized reentry plan development",
                  "Substance use and mental health",
                  "Rebuilding healthy relationships",
                ]}
              />
            </div>

            <div className="space-y-4">
              <h3 className="font-heading text-gold text-xl tracking-widest uppercase">
                DESIGNED FOR
              </h3>
              <TagList
                items={[
                  "Departments of Corrections",
                  "County Jails",
                  "Community Corrections",
                  "Reentry Focused Organizations",
                ]}
              />
            </div>
          </motion.div>

          <ContactCTAs label="ENROLL YOUR ORGANIZATION" />
          <FadeInView className="pt-2">
            <a
              href="https://www.amazon.com/dp/B0GMP7Z9P9"
              target="_blank"
              rel="noopener noreferrer"
              className="font-heading inline-flex items-center justify-center border-2 border-white px-8 py-4 text-base tracking-widest text-white uppercase transition-all duration-300 hover:bg-white hover:text-black"
            >
              ORDER THE WORKBOOK
            </a>
          </FadeInView>
        </div>
      </div>
    </section>
  );
}
