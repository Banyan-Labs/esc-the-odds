"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { BOOKS } from "@/lib/constants/programs";

export function BooksGrid() {
  return (
    <>
      <div className="mx-auto mb-12 max-w-3xl text-center">
        <h3 className="font-heading text-3xl text-white">
          WORKBOOKS & <span className="text-gold">BOOKS</span>
        </h3>
        <p className="text-cream/90 mt-4 font-sans leading-relaxed font-light">
          Printed learning resources available for individual purchase.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-0 border border-white/10 md:grid-cols-3">
        {BOOKS.map((book, index) => (
          <motion.div
            key={book.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className={`group flex flex-col space-y-6 p-10 transition-colors duration-500 hover:bg-black/30 ${
              index !== BOOKS.length - 1 ? "border-b border-white/10 md:border-r md:border-b-0" : ""
            }`}
          >
            <div className="bg-gold/10 text-gold border-gold/20 group-hover:bg-gold flex h-14 w-14 items-center justify-center border transition-all group-hover:text-black">
              <book.icon className="h-6 w-6" />
            </div>

            <h3 className="font-heading group-hover:text-gold text-xl leading-snug tracking-tight text-white transition-colors">
              {book.title}
            </h3>

            <p className="text-cream/80 flex-1 font-sans text-base leading-relaxed font-light">
              {book.description}
            </p>

            <div className="mt-auto pt-4">
              <a
                href={book.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gold font-heading group/link inline-flex items-center justify-center px-6 py-3 text-base tracking-widest text-black uppercase transition-all duration-300 hover:bg-white"
              >
                {book.cta}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
}
