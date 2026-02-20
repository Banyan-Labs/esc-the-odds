"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowUpRight, BookOpen, Truck, Landmark } from "lucide-react";
import Image from "next/image";

const courses = [
  {
    title: "THE BOUNCE FORWARD PLAN",
    description:
      "A 15-session evidence-based reentry framework designed for institutional implementation. Moving beyond survival to architectural life planning.",
    icon: BookOpen,
    link: "/documentary#booking",
    image: "/assets/Curriculum-Display.png",
    type: "Institutional Curriculum",
    platforms: ["Physical Workbook", "Facilitator Guide"],
  },
  {
    title: "TRUCKING ENTREPRENEURSHIP",
    description:
      "Master the logistics and business of the trucking industry. A complete blueprint from licensing to fleet management hosted on GoHighLevel.",
    icon: Truck,
    link: "https://link.gohighlevel.com/widget/form/YOUR_COURSE_WIDGET_ID",
    image: "/assets/carousel/SPEAKING-A-COMPARISON.png",
    type: "Digital Masterclass",
    platforms: ["Go High Level"],
  },
  {
    title: "REAL ESTATE TRANSFORMATION",
    description:
      "Building generational wealth through strategic property acquisition and management. Architectural freedom through brick and mortar.",
    icon: Landmark,
    link: "https://amazon.com/YOUR_BOOK_LINK",
    image: "/assets/carousel/PINK-SUIT-PODCAST-SHOOT.png",
    type: "Strategic Guide",
    platforms: ["Amazon", "Kindle"],
  },
];

export default function CoursesPage() {
  return (
    <main className="min-h-screen bg-black text-cream selection:bg-gold selection:text-black">
      <Navbar />

      {/* Page Header */}
      <section className="relative pt-40 pb-32 bg-black overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 opacity-20 grayscale">
          <Image
            src="/assets/carousel/COOKCOUNTY-SHERIFF-PIC.png"
            alt="Academy Background"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-linear-to-b from-black via-black/40 to-black" />

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto space-y-8"
          >
            <div className="space-y-4">
              <span className="text-gold font-heading tracking-widest text-sm uppercase">
                THE ACADEMY
              </span>
              <h1 className="text-5xl md:text-8xl font-heading text-white leading-[0.9] tracking-tighter">
                THE TOOLS OF <br />
                <span className="text-gold">TRANSITION.</span>
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-cream/70 font-sans font-light max-w-2xl mx-auto leading-relaxed">
              Practical, actionable education designed to help you build a new
              life and architect your own success story through high-impact
              industries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Curriculum Grid */}
      <section className="py-32 bg-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-white/10">
            {courses.map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`flex flex-col group hover:bg-charcoal transition-colors duration-500 border-white/10 ${
                  index !== courses.length - 1
                    ? "lg:border-r border-b lg:border-b-0"
                    : "border-b lg:border-b-0"
                } ${index === 0 ? "lg:col-span-1" : ""}`}
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-60" />
                  <div className="absolute bottom-6 left-6">
                    <span className="px-3 py-1 bg-gold text-black text-[10px] font-heading tracking-widest uppercase">
                      {course.type}
                    </span>
                  </div>
                </div>

                <div className="p-10 flex flex-col flex-1 space-y-8">
                  <div className="w-14 h-14 bg-gold/10 flex items-center justify-center text-gold border border-gold/20 group-hover:bg-gold group-hover:text-black transition-all">
                    <course.icon className="w-6 h-6" />
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-3xl font-heading text-white tracking-tight leading-none group-hover:text-gold transition-colors">
                      {course.title}
                    </h3>
                    <p className="text-cream/60 font-sans font-light leading-relaxed">
                      {course.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-auto">
                    <a
                      href={course.link}
                      target={
                        course.link.startsWith("http") ? "_blank" : "_self"
                      }
                      rel={
                        course.link.startsWith("http")
                          ? "noopener noreferrer"
                          : ""
                      }
                      className="inline-flex items-center text-xs font-heading tracking-[0.2em] text-gold hover:text-white transition-colors group/link"
                    >
                      ACCESS CURRICULUM
                      <ArrowUpRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Optional: Add a "Coming Soon" card for Commercial Cleaning */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col group p-10 bg-charcoal/30 justify-center items-center text-center space-y-4 opacity-50"
            >
              <span className="text-gold font-heading tracking-widest text-xs uppercase italic">
                COMING SOON
              </span>
              <h3 className="text-2xl font-heading text-white tracking-widest uppercase">
                COMMERCIAL CLEANING MASTERCLASS
              </h3>
              <p className="text-cream/40 font-sans text-sm">
                Industrial-grade business training for scalable service
                enterprises.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
