"use client";

import { motion } from "framer-motion";
import { Building2, Briefcase, Heart } from "lucide-react";

const audiences = [
  {
    icon: Building2,
    title: "INSTITUTIONS",
    list: [
      "Department of Corrections",
      "Correctional Facilities",
      "County Jails",
      "Juvenile Centers",
      "Educational Institutions",
      "Community Colleges",
    ],
  },
  {
    icon: Briefcase,
    title: "CORPORATE",
    list: [
      "Second-Chance Employers",
      "Workforce Development Boards",
      "HR & Talent Acquisition",
      "Corporate Responsibility",
      "Diversity & Inclusion",
      "Innovation Teams",
    ],
  },
  {
    icon: Heart,
    title: "COMMUNITY",
    list: [
      "Reentry Organizations",
      "Non-Profit Foundations",
      "Faith-Based Initiatives",
      "Family Support Groups",
      "Legislative Advocates",
      "Lived Experience Leaders",
    ],
  },
];

export function TargetAudience() {
  return (
    <section className="py-24 bg-charcoal">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 text-center md:text-left">
          <div className="max-w-2xl space-y-4">
            <span className="text-gold font-heading tracking-widest text-sm uppercase">
              WHO WE WORK WITH
            </span>
            <h2 className="text-4xl md:text-6xl font-heading text-white">
              TARGET AUDIENCES
            </h2>
          </div>
          <p className="text-cream/60 font-sans max-w-sm md:text-right pb-2">
            Scaling impact through deep partnerships across the correctional and
            corporate landscape.
          </p>
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
