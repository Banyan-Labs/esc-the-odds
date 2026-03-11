"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    quote:
      "This course has left me highly impacted and determined to be my own boss and start my own hot-shot business.",
    name: "CARL CHRISTENBERRY",
    role: "Box Truck Program Graduate",
  },
  {
    quote:
      "I have found a new positive mentor and guide and teacher who knows his stuff — a brother who made it out the struggle who's helping others do the same!",
    name: "JONDELL HAYDEN JR.",
    role: "Box Truck Program Graduate",
  },
  {
    quote:
      "Now I have the ability to financially be prepared not to make mistakes in the future that may lead to recidivism.",
    name: "CARL CHRISTENBERRY",
    role: "Financial Empowerment Graduate",
  },
  {
    quote:
      "It has prepared me to start my journey and also changed my perceptions of thinking small. Dream big and go hard. Grind strong!",
    name: "JONDELL HAYDEN JR.",
    role: "Box Truck Program Graduate",
  },
  {
    quote:
      "Extremely satisfied. This course has given me the mental constraint to be ready when I do re-enter society — I will be ready to launch my own hot-shot business.",
    name: "CARL CHRISTENBERRY",
    role: "Box Truck Program Graduate",
  },
  {
    quote: "Information on how to get started was inspirational for me to proceed into business.",
    name: "CROSSROADS CORRECTIONAL",
    role: "Participant",
  },
];

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden border-y border-white/5 bg-black py-12 md:py-20 lg:py-24"
    >
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <Image
          src="/assets/Image_23.jpeg"
          alt="Voices of Transformation"
          fill
          className="object-cover"
        />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-black via-black/80 to-black" />

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="mx-auto mb-20 max-w-3xl space-y-4 text-center">
          <span className="text-gold font-heading text-2xl tracking-widest uppercase md:text-3xl">
            IMPACT STORIES
          </span>
          <h2 className="font-heading text-4xl text-white md:text-6xl">
            VOICES OF <span className="text-gold">TRANSFORMATION</span>
          </h2>
          <p className="text-cream/90 font-sans text-lg font-light">
            Real stories from those who chose to bounce forward.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group hover:border-gold/30 relative border border-white/5 bg-black/40 p-10 transition-all duration-500"
            >
              <Quote className="text-gold/20 mb-6 h-8 w-8" />
              <p className="text-cream/90 mb-8 font-sans text-lg leading-relaxed italic">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="border-t border-white/10 pt-6">
                <p className="font-heading text-lg tracking-tight text-white">{testimonial.name}</p>
                <p className="text-gold font-heading mt-1 text-sm tracking-widest uppercase">
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
