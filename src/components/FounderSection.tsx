"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export function FounderSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 relative w-full max-w-lg lg:max-w-none"
          >
            <div className="relative aspect-[3/4] md:aspect-square w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/assets/AaronSpeaking.png"
                alt="Aaron helping others"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <p className="font-bold text-lg">Aaron</p>
                <p className="text-white/80 text-sm">Founder & CEO</p>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-10 -left-10 w-full h-full border-2 border-primary/20 rounded-2xl -z-10 hidden md:block" />
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 space-y-8"
          >
            <div className="inline-block p-3 rounded-full bg-primary/10 text-primary mb-2">
              <Quote className="w-8 h-8 fill-current" />
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-secondary leading-tight">
              Turn Your <span className="text-primary">Struggle</span> Into Your{" "}
              <span className="text-primary">Strength</span>
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              "I know what it means to need a second chance. I built Escape the
              Odds because I believe that your past does not define your future.
              We are here to help you architect a new life, build real skills,
              and create your own success story."
            </p>

            <div className="space-y-4 border-l-4 border-primary pl-6">
              <p className="text-gray-700 italic text-lg">
                "Our mission is simple: To provide the education and opportunity
                that was missing for so many of us."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
