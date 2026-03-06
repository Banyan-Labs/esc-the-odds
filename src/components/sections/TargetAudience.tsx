"use client";

import { motion } from "framer-motion";
import { Building2, Briefcase, Heart } from "lucide-react";
import Image from "next/image";

const audiences = [
  {
    icon: Building2,
    title: "CORRECTIONAL SYSTEMS",
    list: [
      "Departments of Corrections",
      "County Jails",
      "Juvenile Facilities",
      "Community Corrections",
    ],
  },
  {
    icon: Briefcase,
    title: "WORKFORCE & EMPLOYERS",
    list: [
      "Workforce Boards",
      "Second-Chance Employers",
      "Economic Development Offices",
    ],
  },
  {
    icon: Heart,
    title: "COMMUNITY & REENTRY PARTNERS",
    list: [
      "Reentry Organizations",
      "Foundations",
      "Educational Institutions",
      "Libraries",
    ],
  },
];

export function TargetAudience() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 grayscale pointer-events-none">
        <Image
          src="/assets/Image_7.jpeg"
          alt="Reentry Ecosystem Background"
          fill
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-linear-to-b from-black via-black/80 to-black pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 text-center md:text-left">
          <div className="max-w-2xl space-y-4">
            <span className="text-gold font-heading tracking-widest text-sm uppercase">
              WHO WE WORK WITH
            </span>
            <h2 className="text-4xl md:text-6xl font-heading text-white">
              BUILT FOR THE REENTRY <span className="text-gold">ECOSYSTEM</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {audiences.map((audience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-black/40 p-10 border border-white/5 group hover:border-gold/30 transition-all duration-500 hover:shadow-2xl shadow-gold/5"
            >
              <div className="w-16 h-16 mb-8 text-gold group-hover:scale-110 transition-transform">
                <audience.icon className="w-full h-full stroke-1" />
              </div>

              <h3 className="text-3xl font-heading text-white mb-8 tracking-tight">
                {audience.title}
              </h3>

              <ul className="space-y-4">
                {audience.list.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center space-x-3 text-cream/70"
                  >
                    <div className="w-1.5 h-1.5 bg-gold/50 rounded-full" />
                    <span className="text-sm font-sans uppercase tracking-widest font-medium opacity-80">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
