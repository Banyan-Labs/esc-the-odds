"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const mediaMentions = [
  {
    publication: "Good Morning America",
    headline:
      "Ex-con spends his days empowering the incarcerated",
    url: "https://www.goodmorningamerica.com/GMA3/video/con-spends-days-empowering-incarcerated-88100579",
  },
  {
    publication: "Chicago Sun-Times",
    headline:
      "Making the most of his — and others' second chance",
    url: "https://chicago.suntimes.com/2022/4/17/23027343/aaron-smith-south-side-second-chances-escaping-the-odds-podcast",
  },
  {
    publication: "ABC 7 Chicago",
    headline:
      "Escaping the Odds podcast tells triumphant stories of entrepreneurs after life in prison",
    url: "https://abc7chicago.com/escaping-the-odds-podcast-aaron-smith-life-in-prison-triumphant-stories/11493238/",
  },
  {
    publication: "Fox 32 Chicago",
    headline:
      "Meet the man helping former inmates become entrepreneurs",
    url: "https://www.wciu.com/videos/wciu-other/meet-the-man-helping-former-inmates-become-entrepreneurs",
  },
  {
    publication: "Crain's Chicago Business",
    headline:
      "Ex-offenders in Chicago owning their own companies",
    url: "https://www.chicagobusiness.com/private-intelligence/ex-offenders-chicago-owning-their-own-companies",
  },
  {
    publication: "AfroTech",
    headline:
      "Aaron Smith escaped the odds through podcasting and trucking",
    url: "https://afrotech.com/aaron-smith-escaped-the-odds-podcasting-trucking",
  },
];

export function MediaPress() {
  return (
    <section className="py-24 bg-black border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="text-gold font-heading tracking-widest text-sm uppercase">
            IN THE MEDIA
          </span>
          <h2 className="text-4xl md:text-6xl font-heading text-white">
            PRESS & <span className="text-gold">COVERAGE</span>
          </h2>
          <p className="text-lg text-cream opacity-70 font-sans font-light">
            National and local coverage highlighting the impact of the Escape
            The Odds movement.
          </p>
        </div>

        {/* Featured Image — Sun-Times Front Page */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto mb-16"
        >
          <div className="relative aspect-square overflow-hidden border border-white/10 shadow-2xl group">
            <Image
              src="/assets/Image_3.jpeg"
              alt="Chicago Sun-Times front page featuring Aaron Smith — Second Chance"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
          <p className="text-center text-cream/50 text-sm font-sans mt-4 italic">
            Chicago Sun-Times front page — April 18, 2022
          </p>
        </motion.div>

        {/* Media Mention Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-white/10">
          {mediaMentions.map((item, index) => (
            <motion.a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`p-10 group hover:bg-charcoal/50 transition-all duration-500 flex flex-col justify-between ${
                index < 3 ? "border-b border-white/10" : ""
              } ${index % 3 !== 2 ? "lg:border-r border-white/10" : ""}`}
            >
              <div>
                <p className="font-heading text-gold text-xs tracking-widest uppercase mb-4">
                  {item.publication}
                </p>
                <p className="text-white font-heading text-lg tracking-tight mb-6 group-hover:text-gold transition-colors leading-snug">
                  {item.headline}
                </p>
              </div>
              <div className="flex items-center text-xs font-heading tracking-[0.2em] text-cream/40 group-hover:text-gold transition-colors">
                READ ARTICLE
                <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
