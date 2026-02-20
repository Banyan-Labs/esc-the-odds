"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Building2,
  ArrowRight,
  ShieldCheck,
  Handshake,
  Landmark,
  Users,
  Target,
  BookOpen,
  GraduationCap,
  Heart,
  ShieldAlert,
} from "lucide-react";
import Image from "next/image";

const pathways = [
  {
    title: "Correctional Facilities",
    description:
      "Implement our accredited curriculum within your facility to reduce recidivism and provide tangible job skills.",
    icon: Building2,
    features: [
      "Digital Literacy",
      "Entrepreneurship",
      "Financial Independence",
    ],
  },
  {
    title: "Corporate Partnership",
    description:
      "Align your organization with our mission through strategic funding, mentorship, or employment opportunities.",
    icon: Handshake,
    features: [
      "Brand Alignment",
      "CSR Impact Tracking",
      "Direct Hiring Pipelines",
    ],
  },
  {
    title: "Public Institutions",
    description:
      "Work with us at a state or local level to scale the impact of second-chance initiatives across your jurisdiction.",
    icon: Landmark,
    features: [
      "Scalable Infrastructure",
      "Policy Advocacy",
      "Data-Driven Outcomes",
    ],
  },
];

export default function PartnerPage() {
  return (
    <main className="min-h-screen bg-black text-cream selection:bg-gold selection:text-black">
      <Navbar />

      {/* Strategic Hero */}
      <section className="relative pt-40 pb-32 bg-black overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 opacity-20 grayscale">
          <Image
            src="/assets/carousel/SPEAKING-A-COMPARISON.png"
            alt="Strategic Partnership"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-linear-to-b from-black via-black/60 to-black" />

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto space-y-8"
          >
            <div className="space-y-4">
              <span className="text-gold font-heading tracking-widest text-sm uppercase">
                THE COLLABORATION
              </span>
              <h1 className="text-5xl md:text-8xl font-heading text-white leading-tight tracking-tighter">
                SCALE THE <br />
                <span className="text-gold">IMPACT.</span>
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-cream/70 font-sans font-light max-w-2xl mx-auto leading-relaxed">
              We separate "charity" from **Strategic Partnership.** We work with
              world-class institutions to blueprint the transition from
              incarceration to innovation.
            </p>
            <div className="pt-8">
              <Link
                href="#inquiry"
                className="inline-block px-10 py-5 bg-gold text-black font-heading text-xl hover:bg-white transition-all duration-300"
              >
                COLLABORATE WITH US
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Partnership Channels */}
      <section className="py-32 bg-charcoal">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/10">
            {pathways.map((path, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`p-10 flex flex-col items-start space-y-8 group hover:bg-black/40 transition-colors duration-500 ${
                  i !== pathways.length - 1
                    ? "md:border-r border-white/10 border-b md:border-b-0"
                    : ""
                }`}
              >
                <div className="w-16 h-16 bg-gold/10 flex items-center justify-center rounded-none border border-gold/30 group-hover:bg-gold transition-all duration-300">
                  <path.icon className="w-8 h-8 text-gold group-hover:text-black transition-colors" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-3xl font-heading text-white tracking-tight">
                    {path.title.toUpperCase()}
                  </h3>
                  <p className="text-cream/60 leading-relaxed font-sans text-base">
                    {path.description}
                  </p>
                </div>
                <ul className="space-y-4 pt-4 w-full">
                  {path.features.map((feat, j) => (
                    <li
                      key={j}
                      className="flex items-center gap-3 text-xs font-heading tracking-widest text-gold opacity-80 uppercase"
                    >
                      <div className="w-1.5 h-1.5 bg-gold rounded-full" />{" "}
                      {feat}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* For-Profit Transparency & Support */}
      <section className="py-24 bg-black border-y border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto space-y-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-12 bg-charcoal border border-white/10 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <ShieldAlert className="w-12 h-12 text-gold" />
              </div>
              <div className="space-y-8">
                <div className="space-y-4">
                  <span className="text-gold font-heading tracking-widest text-sm uppercase">
                    LEGAL POSITIONING
                  </span>
                  <h3 className="text-3xl font-heading text-white tracking-tight">
                    INVESTING IN THE MISSION
                  </h3>
                </div>
                <div className="space-y-6 text-cream/70 font-sans leading-relaxed text-lg">
                  <p>
                    Escape The Odds is a **for-profit social impact
                    organization.** This model allows us to scale rapidly,
                    attract institutional-grade talent, and build sustainable
                    pathways without relying on fluctuating donor cycles.
                  </p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <li className="flex items-start gap-3">
                      <div className="w-1 h-1 bg-gold rounded-full mt-2" />
                      <span>
                        Contributions are **not** tax-deductible charitable
                        donations.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1 h-1 bg-gold rounded-full mt-2" />
                      <span>
                        All funds are deployed directly into curriculum scaling
                        and media production.
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="pt-6">
                  <a
                    href="https://upcurve.life/YOUR_CAMPAIGN_ID"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-10 py-5 bg-gold text-black font-heading text-xl hover:bg-white transition-all duration-300"
                  >
                    INVEST IN THE TRANSITION
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partnership Inquiry Form */}
      <section id="inquiry" className="py-32 bg-black relative">
        <div className="absolute right-0 bottom-0 w-[600px] h-[600px] bg-gold/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-20">
            <div className="flex-1 space-y-12">
              <div className="space-y-4">
                <span className="text-gold font-heading tracking-widest text-sm uppercase">
                  STRATEGIC INQUIRY
                </span>
                <h2 className="text-5xl md:text-7xl font-heading text-white leading-[0.9] tracking-tighter">
                  JOIN THE <br />
                  <span className="text-gold">ROADMAP.</span>
                </h2>
              </div>
              <p className="text-xl text-cream/60 font-sans font-light leading-relaxed">
                Whether you represent a DOC facility, a corporate board, or a
                strategic venture partner, let's discuss how we can engineer the
                next phase of reentry outcomes together.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6">
                <div className="space-y-2">
                  <h4 className="text-gold font-heading tracking-widest text-xs uppercase">
                    EXPANSION ROADMAP
                  </h4>
                  <p className="text-sm text-cream/40 font-sans italic">
                    Scaling to 50+ facilities in 2026. Join the cohort.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-gold font-heading tracking-widest text-xs uppercase">
                    RESOURCE PORTAL
                  </h4>
                  <p className="text-sm text-cream/40 font-sans italic">
                    Exclusive metrics and facilitation data for registered
                    partners.
                  </p>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1 w-full bg-charcoal p-12 border border-white/5 shadow-2xl"
            >
              <h3 className="text-3xl font-heading text-white mb-10 tracking-tight underline decoration-gold/30 underline-offset-8">
                COLLABORATION DESK
              </h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <Label
                      htmlFor="firstName"
                      className="font-heading tracking-widest text-[10px] text-cream/50 uppercase"
                    >
                      First Name
                    </Label>
                    <Input
                      id="firstName"
                      className="bg-black/50 border-white/10 rounded-none h-14 text-cream focus:border-gold transition-colors"
                    />
                  </div>
                  <div className="space-y-3">
                    <Label
                      htmlFor="lastName"
                      className="font-heading tracking-widest text-[10px] text-cream/50 uppercase"
                    >
                      Last Name
                    </Label>
                    <Input
                      id="lastName"
                      className="bg-black/50 border-white/10 rounded-none h-14 text-cream focus:border-gold transition-colors"
                    />
                  </div>
                </div>
                <div className="space-y-3">
                  <Label
                    htmlFor="orgName"
                    className="font-heading tracking-widest text-[10px] text-cream/50 uppercase"
                  >
                    Organization Name
                  </Label>
                  <Input
                    id="orgName"
                    className="bg-black/50 border-white/10 rounded-none h-14 text-cream focus:border-gold transition-colors"
                  />
                </div>
                <div className="space-y-3">
                  <Label
                    htmlFor="email"
                    className="font-heading tracking-widest text-[10px] text-cream/50 uppercase"
                  >
                    Work Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    className="bg-black/50 border-white/10 rounded-none h-14 text-cream focus:border-gold transition-colors"
                  />
                </div>
                <div className="space-y-3">
                  <Label
                    htmlFor="message"
                    className="font-heading tracking-widest text-[10px] text-cream/50 uppercase"
                  >
                    Strategic Interest
                  </Label>
                  <Textarea
                    id="message"
                    className="bg-black/50 border-white/10 rounded-none min-h-[150px] text-cream focus:border-gold transition-colors"
                  />
                </div>
                <Button className="w-full py-8 bg-gold text-black font-heading text-xl rounded-none hover:bg-white transition-all shadow-xl group">
                  SUBMIT PROPOSAL{" "}
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Authority / Media Banner */}
      <section className="py-24 bg-charcoal border-t border-white/5">
        <div className="container mx-auto px-4 md:px-6 text-center space-y-12">
          <span className="text-gold font-heading tracking-widest text-xs uppercase">
            AUTHORITY & MEDIA
          </span>
          <div className="max-w-5xl mx-auto transition-all duration-700">
            <Image
              src="/assets/CommunityPartners.png"
              alt="Media Features"
              width={1200}
              height={400}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
