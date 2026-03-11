"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const mediaMentions = [
  {
    publication: "Good Morning America",
    headline: "Ex-con spends his days empowering the incarcerated",
    url: "https://www.goodmorningamerica.com/GMA3/video/con-spends-days-empowering-incarcerated-88100579",
  },
  {
    publication: "Chicago Sun-Times",
    headline: "Making the most of his — and others' second chance",
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
    headline: "Escape The Odds — featured on Fox 32 Chicago",
    url: "https://www.fox32chicago.com/video/1440959",
  },
  {
    publication: "Crain's Chicago Business",
    headline: "Ex-offenders in Chicago owning their own companies",
    url: "https://www.chicagobusiness.com/private-intelligence/ex-offenders-chicago-owning-their-own-companies",
  },
  {
    publication: "AfroTech",
    headline: "Aaron Smith escaped the odds through podcasting and trucking",
    url: "https://afrotech.com/aaron-smith-escaped-the-odds-podcasting-trucking",
  },
  {
    publication: "CoreCivic",
    headline: "Escape The Odds box truck program equips returning citizens with career path",
    url: "https://www.corecivic.com/news/escape-the-odds-box-truck-program-equips-returning-citizens-with-career-path",
  },
  {
    publication: "Chicago Reader",
    headline: "Interview with podcaster Aaron Smith: 'Get to the root of the person'",
    url: "https://chicagoreader.com/news-politics/interview-with-podcaster-aaron-smith-get-to-the-root-of-the-person-%EF%BF%BC/",
  },
];

export function MediaPress() {
  return (
    <section className="border-t border-white/5 bg-black py-12 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="mx-auto mb-20 max-w-3xl space-y-4 text-center">
          <span className="text-gold font-heading text-2xl tracking-widest uppercase md:text-3xl">
            IN THE MEDIA
          </span>
          <h2 className="font-heading text-4xl text-white md:text-6xl">
            PRESS & <span className="text-gold">COVERAGE</span>
          </h2>
          <p className="text-cream/90 font-sans text-lg font-light">
            National and local coverage highlighting the impact of the Escape The Odds movement.
          </p>
        </div>

        {/* Featured Image — Sun-Times Front Page */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto mb-16 max-w-2xl"
        >
          <div className="group relative aspect-square overflow-hidden border border-white/10 shadow-2xl">
            <Image
              src="/assets/Image_3.jpeg"
              alt="Chicago Sun-Times front page featuring Aaron Smith — Second Chance"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <p className="text-cream/80 mt-4 text-center font-sans text-sm italic">
            Chicago Sun-Times front page — April 18, 2022
          </p>
        </motion.div>

        {/* Media Mention Cards */}
        <div className="grid grid-cols-1 gap-0 border border-white/10 md:grid-cols-2 lg:grid-cols-3">
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
              className={`group hover:bg-charcoal/50 flex flex-col justify-between p-10 transition-all duration-500 ${
                index < mediaMentions.length - 3 ? "border-b border-white/10" : ""
              } ${index % 3 !== 2 ? "border-white/10 lg:border-r" : ""}`}
            >
              <div>
                <p className="font-heading text-gold mb-4 text-sm tracking-widest uppercase">
                  {item.publication}
                </p>
                <p className="font-heading group-hover:text-gold mb-6 text-lg leading-snug tracking-tight text-white transition-colors">
                  {item.headline}
                </p>
              </div>
              <div className="font-heading text-cream/80 group-hover:text-gold flex items-center text-sm tracking-[0.2em] transition-colors">
                READ ARTICLE
                <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
