"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowRight, Truck, Home, BookOpen } from "lucide-react";
import Image from "next/image";

const books = [
  {
    icon: Home,
    title: "HOUSE HACKING & REAL ESTATE FUNDAMENTALS",
    description:
      "Building generational wealth through strategic property acquisition and management.",
    href: "https://a.co/d/0g3BeD8W",
    cta: "GET THE BOOK",
  },
  {
    icon: Truck,
    title: "NON-CDL BOX TRUCK ENTREPRENEURSHIP",
    description:
      "A complete blueprint from licensing to fleet management through the Non-CDL Box Truck program.",
    href: "https://a.co/d/09Ajq8UA",
    cta: "GET THE BOOK",
  },
  {
    icon: BookOpen,
    title: "BOUNCE FORWARD PLAN WORKBOOK",
    description:
      "The companion workbook for the Bounce Forward Plan: Mastering Your Reentry curriculum.",
    href: "https://www.amazon.com/dp/B0GMP7Z9P9",
    cta: "GET THE WORKBOOK",
  },
];

export default function SelfPacedPage() {
  return (
    <main className="min-h-screen bg-black text-cream selection:bg-gold selection:text-black">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-40 pb-32 bg-black overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 opacity-15 grayscale">
          <Image
            src="/assets/Image_13.jpeg"
            alt="Self-Paced Program"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-linear-to-b from-black via-black/40 to-black" />

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto space-y-8"
          >
            <div className="space-y-4">
              <span className="text-gold font-heading tracking-widest text-sm uppercase">
                PROGRAMS
              </span>
              <h1 className="text-5xl md:text-8xl font-heading text-white leading-[0.9] tracking-tighter">
                SELF-PACED <span className="text-gold">PROGRAM</span>
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-cream/70 font-sans font-light max-w-2xl mx-auto leading-relaxed">
              Flexible digital learning for individuals seeking structured
              resources and on-demand access.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Books & Resources */}
      <section className="py-32 bg-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <span className="text-gold font-heading tracking-widest text-sm uppercase">
              AVAILABLE NOW
            </span>
            <h2 className="text-4xl md:text-6xl font-heading text-white">
              BOOKS & <span className="text-gold">RESOURCES</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/10">
            {books.map((book, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`p-10 flex flex-col space-y-6 group hover:bg-charcoal/50 transition-colors duration-500 ${
                  index !== books.length - 1
                    ? "md:border-r border-white/10 border-b md:border-b-0"
                    : ""
                }`}
              >
                <div className="w-14 h-14 bg-gold/10 flex items-center justify-center text-gold border border-gold/20 group-hover:bg-gold group-hover:text-black transition-all">
                  <book.icon className="w-6 h-6" />
                </div>

                <h3 className="text-xl font-heading text-white tracking-tight leading-snug group-hover:text-gold transition-colors">
                  {book.title}
                </h3>

                <p className="text-cream/60 font-sans font-light leading-relaxed text-sm flex-1">
                  {book.description}
                </p>

                <div className="pt-4 mt-auto">
                  <a
                    href={book.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-gold font-heading text-sm tracking-widest uppercase border-b border-gold pb-1 hover:text-white hover:border-white transition-all group/link"
                  >
                    {book.cta}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
