"use client";

import { motion } from "framer-motion";
import { Users, Monitor, ShieldCheck, Zap } from "lucide-react";
import Link from "next/link";
import type { ElementType } from "react";

const featureIconMap: Record<string, ElementType> = { ShieldCheck, Zap };
const cardIconMap: Record<string, ElementType> = { Users, Monitor };

interface FeatureItem {
  label: string;
  icon?: string;
}

interface DeliveryCard {
  title: string;
  subtitle: string;
  description: string;
  ctaLabel: string;
  ctaLink?: string;
  icon?: string;
}

interface ProgramDeliveryData {
  sectionLabel?: string;
  headingLine1?: string;
  headingAccent?: string;
  body?: string;
  features?: FeatureItem[];
  cards?: DeliveryCard[];
}

const defaultFeatures: FeatureItem[] = [
  { label: "Evidence-Based Framework", icon: "ShieldCheck" },
  { label: "Rapid Implementation", icon: "Zap" },
];

const defaultCards: DeliveryCard[] = [
  { title: "Live Cohort Program", subtitle: "5-Week Intensive", description: "A structured virtual environment (Zoom) featuring facilitated discussions designed for maximum accountability and peer-to-peer transformation.", ctaLabel: "Inquire for Access", ctaLink: "/contact", icon: "Users" },
  { title: "Self-Paced Digital License", subtitle: "Scalable Solution", description: "Independent learning modules ideal for institutional purchase. Designed for individual enrollment or large-scale organizational rollouts.", ctaLabel: "View Licensing", ctaLink: "/contact", icon: "Monitor" },
];

export function ProgramDelivery({ data }: { data?: ProgramDeliveryData }) {
  const features = data?.features && data.features.length > 0 ? data.features : defaultFeatures;
  const cards = data?.cards && data.cards.length > 0 ? data.cards : defaultCards;

  return (
    <section className="py-24 bg-charcoal">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Headline Content */}
          <div className="lg:w-1/3 space-y-6">
            <span className="text-gold font-heading tracking-widest text-sm uppercase">
              {data?.sectionLabel || "DELIVERY FORMATS"}
            </span>
            <h2 className="text-4xl md:text-5xl font-heading text-white leading-tight uppercase">
              {data?.headingLine1 || "Institutional"} <br />
              <span className="text-gold">{data?.headingAccent || "Ready."}</span>
            </h2>
            <p className="text-cream/60 font-sans leading-relaxed">
              {data?.body || "Designed for scalability and institutional integration, we offer structured pathways for organizations to implement transformation at the cohort or individual level."}
            </p>
            <div className="pt-4 flex flex-col gap-4">
              {features.map((feature, i) => {
                const Icon = featureIconMap[feature.icon || "ShieldCheck"] || ShieldCheck;
                return (
                  <div key={i} className="flex items-center gap-3 text-cream/80 text-sm italic">
                    <Icon className="w-5 h-5 text-gold" />
                    <span>{feature.label}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Delivery Cards */}
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            {cards.map((card, index) => {
              const Icon = cardIconMap[card.icon || "Users"] || Users;
              const isFirst = index === 0;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={isFirst ? undefined : { delay: 0.1 }}
                  className="bg-black p-10 border border-white/5 relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                    <Icon className="w-32 h-32" />
                  </div>

                  <div className="relative space-y-6">
                    <div className={`w-12 h-12 flex items-center justify-center border ${isFirst ? "bg-gold/10 border-gold/30" : "bg-white/5 border-white/10"}`}>
                      <Icon className={`w-6 h-6 ${isFirst ? "text-gold" : "text-cream"}`} />
                    </div>
                    <h3 className="text-2xl font-heading text-white uppercase tracking-tight">
                      {card.title}
                    </h3>
                    <p className={`text-sm font-heading tracking-widest uppercase ${isFirst ? "text-gold" : "text-cream opacity-40"}`}>
                      {card.subtitle}
                    </p>
                    <p className="text-cream/60 text-sm leading-relaxed">
                      {card.description}
                    </p>
                    <div className="pt-4">
                      <Link
                        href={card.ctaLink || "/contact"}
                        className={`font-heading text-sm border-b pb-1 transition-all uppercase tracking-widest ${
                          isFirst
                            ? "text-gold border-gold hover:text-white hover:border-white"
                            : "text-cream border-cream/50 hover:text-gold hover:border-gold"
                        }`}
                      >
                        {card.ctaLabel}
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
