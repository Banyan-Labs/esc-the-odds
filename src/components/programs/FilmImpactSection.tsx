"use client";

import { motion } from "framer-motion";
import { BulletList } from "./BulletList";
import { TagList } from "./TagList";
import { ContactCTAs } from "./ContactCTAs";

export function FilmImpactSection() {
  return (
    <section
      id="film-impact"
      className="bg-charcoal border-y border-white/5 py-16 md:py-24 lg:py-32"
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
              PROGRAM 1
            </span>
            <h2 className="font-heading text-4xl text-white md:text-6xl">
              ESCAPING THE ODDS OF RECIDIVISM FILM –{" "}
              <span className="text-gold">IMPACT SERIES</span>
            </h2>
            <p className="text-cream/90 font-sans text-xl leading-relaxed font-light">
              A structured documentary based engagement experience designed to activate reflection,
              dialogue, and forward planning.
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
                A 2.5-hour hosted experience built around the Escaping The Odds of Recidivism
                documentary, facilitated discussion, and workbook activation.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-heading text-gold text-xl tracking-widest uppercase">
                WHAT&apos;S INCLUDED
              </h3>
              <BulletList
                items={[
                  "Full 85-minute documentary screening",
                  "Moderated dialogue session",
                  "Q&A / panel style discussion with Aaron Smith and other successful justice impacted individuals",
                  "50 Bounce Forward Plan: Mastering Your Reentry workbooks provided to local correctional facilities in the host community",
                ]}
              />
            </div>

            <div className="space-y-4">
              <h3 className="font-heading text-gold text-xl tracking-widest uppercase">
                DESIGNED FOR
              </h3>
              <TagList
                items={[
                  "Correctional Facilities",
                  "Government Reentry Agencies",
                  "Workforce Boards",
                  "Community Reentry Organizations",
                  "Libraries",
                  "Educational Institutions",
                  "Employers",
                  "CDFIs",
                ]}
              />
            </div>
          </motion.div>

          <ContactCTAs label="LET'S DISCUSS" />
        </div>
      </div>
    </section>
  );
}
