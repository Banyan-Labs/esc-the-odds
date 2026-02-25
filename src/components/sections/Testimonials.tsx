"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Information on how to get started was inspirational for me to proceed into business.",
    name: "CROSSROADS CORRECTIONAL",
    role: "Participant",
  },
  {
    quote: "Very satisfied, I hope this class happens again.",
    name: "CROSSROADS CORRECTIONAL",
    role: "Participant",
  },
  {
    quote: "Testimonial placeholder — awaiting client content.",
    name: "Name",
    role: "Program Graduate",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-charcoal border-y border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="text-gold font-heading tracking-widest text-sm uppercase">
            IMPACT STORIES
          </span>
          <h2 className="text-4xl md:text-6xl font-heading text-white">
            VOICES OF <span className="text-gold">TRANSFORMATION</span>
          </h2>
          <p className="text-lg text-cream opacity-70 font-sans font-light">
            Real stories from those who chose to bounce forward.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-black/40 p-10 border border-white/5 relative group hover:border-gold/30 transition-all duration-500"
            >
              <Quote className="w-8 h-8 text-gold/20 mb-6" />
              <p className="text-cream/70 font-sans italic text-lg leading-relaxed mb-8">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="border-t border-white/10 pt-6">
                <p className="font-heading text-white text-lg tracking-tight">
                  {testimonial.name}
                </p>
                <p className="text-gold text-xs font-heading tracking-widest uppercase mt-1">
                  {testimonial.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
