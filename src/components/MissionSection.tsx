"use client";

import { motion } from "framer-motion";
import { Target, Users, Lightbulb } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: Target,
    title: "Define Your Future",
    description:
      "Break free from limiting narratives. We provide the strategic frameworks to help you architect a life of independence and purpose.",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: Lightbulb,
    title: "Practical Wisdom",
    description:
      "No fluff. Just actionable, real-world skills—financial literacy, entrepreneurship, and digital mastery—for the modern economy.",
    color: "bg-orange-50 text-orange-600",
  },
  {
    icon: Users,
    title: "Community of Doers",
    description:
      "Join a powerful network of individuals who are not just dreaming of change, but actively building it. Access mentorship and peer support.",
    color: "bg-purple-50 text-purple-600",
  },
];

export function MissionSection() {
  return (
    <section className="py-24 bg-gray-50/50 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-block px-3 py-1 mb-6 text-sm font-semibold tracking-wider text-primary uppercase bg-primary/10 rounded-full">
            Our Mission
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-secondary tracking-tight">
            Rewrite the <span className="text-primary">Narrative</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Escape the Odds is more than a platform; it's a movement. We believe
            that with the right knowledge and community, anyone can overcome
            systemic barriers.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div
                className={cn(
                  "w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110",
                  feature.color
                )}
              >
                <feature.icon className="w-7 h-7" />
              </div>

              <h3 className="text-2xl font-bold text-secondary mb-4 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
