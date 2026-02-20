"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowRight, Clock, User } from "lucide-react";
import Image from "next/image";

const posts = [
  {
    title: "How to Build Resilience After a Life Transition",
    excerpt:
      "Life transitions can be overwhelming. Learn the key psychological shifts needed to turn obstacles into opportunities.",
    author: "Aaron",
    date: "May 12, 2024",
    image: "/assets/carousel/COOKCOUNTY-SHERIFF-PIC.png",
    category: "Mindset",
  },
  {
    title: "Digital Entrepreneurship: The New Second Chance",
    excerpt:
      "The digital economy doesn't care about your past—it cares about your skills. Discover why technology is the ultimate equalizer.",
    author: "Aaron",
    date: "May 10, 2024",
    image: "/assets/carousel/SPEAKING-A-COMPARISON.png",
    category: "Business",
  },
  {
    title: "Mastering the Logistics of Trucking",
    excerpt:
      "Our deep dive into the trucking industry and how you can get started today with minimal capital.",
    author: "Aaron",
    date: "May 08, 2024",
    image: "/assets/carousel/PINK-SUIT-PODCAST-SHOOT.png",
    category: "Courses",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-black text-cream selection:bg-gold selection:text-black">
      <Navbar />

      {/* Page Header */}
      <section className="relative pt-40 pb-32 bg-black overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 opacity-10 grayscale">
          <Image
            src="/assets/carousel/COOKCOUNTY-SHERIFF-PIC.png"
            alt="Blog Background"
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
                THE DISPATCH
              </span>
              <h1 className="text-5xl md:text-8xl font-heading text-white leading-[0.9] tracking-tighter">
                JOURNAL & <br />
                <span className="text-gold">BLUEPRINTS.</span>
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-cream/70 font-sans font-light max-w-2xl mx-auto leading-relaxed italic">
              "Documentation of the transition, the scaling of the mission, and
              the frameworks for the future."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-32 container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border border-white/10">
          {posts.map((post, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`flex flex-col group hover:bg-charcoal transition-colors duration-500 border-white/10 ${
                i !== posts.length - 1
                  ? "lg:border-r border-b lg:border-b-0"
                  : "border-b lg:border-b-0"
              }`}
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-6 left-6">
                  <span className="px-3 py-1 bg-gold text-black text-[10px] font-heading tracking-widest uppercase">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-10 flex flex-col flex-1 space-y-6">
                <div className="flex items-center gap-6 text-[10px] font-heading tracking-widest text-cream/40 uppercase">
                  <span className="flex items-center gap-2">
                    <User className="w-3.5 h-3.5 text-gold" /> {post.author}
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-gold" /> {post.date}
                  </span>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl md:text-3xl font-heading text-white tracking-tight leading-none group-hover:text-gold transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-cream/60 font-sans font-light leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 mt-auto">
                  <button className="flex items-center gap-2 text-[10px] font-heading tracking-widest text-gold hover:text-white transition-all group/btn">
                    READ ARTICLE{" "}
                    <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-2 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-24 flex justify-center gap-4">
          <button className="w-14 h-14 border border-gold bg-gold text-black font-heading text-xl flex items-center justify-center transition-colors">
            01
          </button>
          <button className="w-14 h-14 border border-white/10 text-white font-heading text-xl flex items-center justify-center hover:bg-white hover:text-black transition-all">
            02
          </button>
          <button className="w-14 h-14 border border-white/10 text-white font-heading text-xl flex items-center justify-center hover:bg-white hover:text-black transition-all">
            03
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
