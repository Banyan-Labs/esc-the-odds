"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, ArrowRight, BookOpen } from "lucide-react";
import Image from "next/image";

const GHL_FORM_URL = "https://api.leadconnectorhq.com/widget/form/x1ZdvqzrJf7kyUROy2Es";

export default function ContactPage() {
  return (
    <>
      {/* Page Header */}
      <section className="relative overflow-hidden border-b border-white/5 bg-black pt-28 pb-16 md:pt-40 md:pb-32">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/assets/Image_26.jpeg"
            alt="Aaron connecting with individuals at a correctional facility"
            fill
            className="object-cover object-[center_15%]"
          />
        </div>
        <div className="absolute inset-0 bg-linear-to-b from-black via-black/40 to-black" />

        <div className="relative z-10 container mx-auto px-4 text-center md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-4xl space-y-8"
          >
            <div className="space-y-4">
              <span className="text-gold font-heading text-2xl tracking-widest uppercase md:text-3xl">
                CONTACT
              </span>
              <h1 className="font-heading text-5xl leading-[0.9] tracking-tighter text-white md:text-8xl">
                GET IN <span className="text-gold">TOUCH</span>
              </h1>
            </div>
            <p className="text-cream/90 mx-auto max-w-2xl font-sans text-xl leading-relaxed font-light md:text-2xl">
              Structured Engagement Begins with Clear Alignment
            </p>
          </motion.div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 md:px-6 md:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-20">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-16 lg:col-span-5"
            >
              <div className="space-y-8">
                <p className="text-cream/80 font-sans text-xl leading-relaxed font-light">
                  Escape The Odds partners with correctional facilities, organizations, and leaders
                  committed to structured reentry education and economic empowerment. Select the
                  option below so we can route your inquiry appropriately.
                </p>
              </div>

              <div className="space-y-10">
                <div className="group flex gap-8">
                  <div className="bg-gold/10 border-gold/20 group-hover:bg-gold flex h-16 w-16 items-center justify-center border transition-all duration-500 group-hover:text-black">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-heading text-cream/80 text-sm tracking-widest uppercase">
                      MEDIA / PRESS
                    </h3>
                    <p className="text-cream/90 font-sans text-sm">
                      For interviews, speaking, and press:
                    </p>
                    <a
                      href="mailto:info@escapetheodds.com"
                      className="font-heading hover:text-gold block text-2xl text-white transition-colors"
                    >
                      info@escapetheodds.com
                    </a>
                  </div>
                </div>

                <div className="group flex gap-8">
                  <div className="bg-charcoal/50 flex h-16 w-16 items-center justify-center border border-white/10 transition-all duration-500 group-hover:bg-white group-hover:text-black">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-heading text-cream/80 text-sm tracking-widest uppercase">
                      HEADQUARTERS
                    </h3>
                    <p className="font-heading text-xl text-white">CHICAGO, ILLINOIS &bull; USA</p>
                  </div>
                </div>
              </div>

              {/* Individual Learners Block */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="border-gold/20 bg-gold/5 space-y-4 border p-8"
              >
                <div className="flex items-center gap-3">
                  <BookOpen className="text-gold h-6 w-6" />
                  <h3 className="font-heading text-gold text-sm tracking-widest uppercase">
                    INDIVIDUAL LEARNERS
                  </h3>
                </div>
                <p className="text-cream/80 font-sans leading-relaxed">
                  For books and self paced courses, please visit our learning platform.
                </p>
                <a
                  href="https://courses.escapetheodds.com/home"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gold font-heading group inline-flex items-center justify-center px-8 py-4 text-base tracking-widest text-black uppercase transition-all duration-300 hover:bg-white"
                >
                  EXPLORE INDIVIDUAL LEARNING
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </motion.div>
            </motion.div>

            {/* GHL Embedded Form */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-charcoal border border-white/5 shadow-2xl lg:col-span-7"
            >
              <div className="p-12 pb-0 lg:p-16 lg:pb-0">
                <h2 className="font-heading decoration-gold/30 mb-4 text-3xl tracking-tight text-white underline underline-offset-8">
                  INQUIRY FORM
                </h2>
              </div>
              <iframe
                src={GHL_FORM_URL}
                className="h-[1400px] w-full border-0"
                title="Escape The Odds Inquiry Form"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
