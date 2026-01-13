"use client";

import { motion } from "framer-motion";
import { Mail, MessageSquare, ArrowRight } from "lucide-react";
import Link from "next/link";

export function ContactSection() {
  return (
    <section className="py-24 bg-secondary relative overflow-hidden">
      {/* Decorative gradient blob */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary blur-[150px] opacity-10 rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
            Ready to Take <span className="text-primary">Action</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed max-w-2xl mx-auto">
            Whether you're looking for mentorship, partnership, or just have a
            question, we're here to help you move forward.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href="/contact"
              className="group w-full sm:w-auto flex items-center justify-center px-8 py-4 bg-primary text-white text-lg font-bold rounded-full hover:bg-white hover:text-primary transition-all duration-300 shadow-xl shadow-primary/25"
            >
              <MessageSquare className="w-5 h-5 mr-3" />
              Get in Touch
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Link>

            <a
              href="mailto:contact@escapetheodds.com"
              className="w-full sm:w-auto flex items-center justify-center px-8 py-4 bg-white/10 text-white text-lg font-medium rounded-full border border-white/10 hover:bg-white/20 transition-all backdrop-blur-sm"
            >
              <Mail className="w-5 h-5 mr-3" />
              Email Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
