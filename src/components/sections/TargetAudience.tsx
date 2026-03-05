"use client";

import { motion } from "framer-motion";
import { Building2, Briefcase, Heart } from "lucide-react";
import type { ElementType } from "react";

const iconMap: Record<string, ElementType> = { Building2, Briefcase, Heart };

interface AudienceCategory {
  title: string;
  icon?: string;
  items?: Array<{ item: string }>;
}

interface TargetAudienceData {
  sectionLabel?: string;
  heading?: string;
  body?: string;
  categories?: AudienceCategory[];
}

const defaultCategories: AudienceCategory[] = [
  {
    icon: "Building2", title: "INSTITUTIONS",
    items: [
      { item: "Department of Corrections" }, { item: "Government Reentry Departments" },
      { item: "Correctional Facilities" }, { item: "County Jails" },
      { item: "Juvenile Centers" }, { item: "Educational Institutions" },
      { item: "Community Colleges" },
    ],
  },
  {
    icon: "Briefcase", title: "CORPORATE",
    items: [
      { item: "Second-Chance Employers" }, { item: "Workforce Development Boards" },
      { item: "Workforce Development Programs" }, { item: "HR & Talent Acquisition" },
      { item: "Corporate Responsibility" }, { item: "Diversity & Inclusion" },
      { item: "Innovation Teams" },
    ],
  },
  {
    icon: "Heart", title: "COMMUNITY",
    items: [
      { item: "Reentry Organizations" }, { item: "Non-Profit Foundations" },
      { item: "Faith-Based Initiatives" }, { item: "Family Support Groups" },
      { item: "Legislative Advocates" }, { item: "Lived Experience Leaders" },
    ],
  },
];

export function TargetAudience({ data }: { data?: TargetAudienceData }) {
  const categories = data?.categories && data.categories.length > 0 ? data.categories : defaultCategories;

  return (
    <section className="py-24 bg-charcoal">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 text-center md:text-left">
          <div className="max-w-2xl space-y-4">
            <span className="text-gold font-heading tracking-widest text-sm uppercase">
              {data?.sectionLabel || "WHO WE WORK WITH"}
            </span>
            <h2 className="text-4xl md:text-6xl font-heading text-white">
              {data?.heading || "TARGET AUDIENCES"}
            </h2>
          </div>
          <p className="text-cream/60 font-sans max-w-sm md:text-right pb-2">
            {data?.body || "Scaling impact through deep partnerships across the correctional and corporate landscape."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((audience, index) => {
            const Icon = iconMap[audience.icon || "Building2"] || Building2;
            const items = audience.items || [];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-black/40 p-10 border border-white/5 group hover:border-gold/30 transition-all duration-500 hover:shadow-2xl shadow-gold/5"
              >
                <div className="w-16 h-16 mb-8 text-gold group-hover:scale-110 transition-transform">
                  <Icon className="w-full h-full stroke-1" />
                </div>

                <h3 className="text-3xl font-heading text-white mb-8 tracking-tight">
                  {audience.title}
                </h3>

                <ul className="space-y-4">
                  {items.map((listItem, i) => (
                    <li
                      key={i}
                      className="flex items-center space-x-3 text-cream/70"
                    >
                      <div className="w-1.5 h-1.5 bg-gold/50 rounded-full" />
                      <span className="text-sm font-sans uppercase tracking-widest font-medium opacity-80">
                        {listItem.item}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
