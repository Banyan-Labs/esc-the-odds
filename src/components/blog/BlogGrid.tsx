"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export type BlogPost = {
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  author: { email: string } | string;
  publishedAt: string | null;
  featuredImage: { url: string; alt: string } | string;
};

function formatDate(dateStr: string | null): string {
  if (!dateStr) return "";
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });
}

function getAuthorName(author: BlogPost["author"]): string {
  if (typeof author === "string") return "Unknown";
  return author.email.split("@")[0];
}

function getImageUrl(image: BlogPost["featuredImage"]): string {
  if (typeof image === "string") return "";
  return image.url;
}

function getImageAlt(image: BlogPost["featuredImage"]): string {
  if (typeof image === "string") return "";
  return image.alt;
}

function getCategoryLabel(value: string): string {
  const labels: Record<string, string> = {
    mindset: "Mindset",
    business: "Business",
    courses: "Courses",
    lifestyle: "Lifestyle",
  };
  return labels[value] || value;
}

export function BlogGrid({ posts }: { posts: BlogPost[] }) {
  if (posts.length === 0) {
    return (
      <section className="py-32 container mx-auto px-4 md:px-6">
        <div className="text-center text-cream/70 font-sans text-xl">
          No posts published yet. Check back soon.
        </div>
      </section>
    );
  }

  return (
    <section className="py-32 container mx-auto px-4 md:px-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border border-white/10">
        {posts.map((post, i) => (
          <motion.div
            key={post.slug}
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
            <Link href={`/blog/${post.slug}`} className="flex flex-col flex-1">
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={getImageUrl(post.featuredImage)}
                  alt={getImageAlt(post.featuredImage)}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-6 left-6">
                  <span className="px-3 py-1 bg-gold text-black text-[10px] font-heading tracking-widest uppercase">
                    {getCategoryLabel(post.category)}
                  </span>
                </div>
              </div>

              <div className="p-10 flex flex-col flex-1 space-y-6">
                <div className="flex items-center gap-6 text-[10px] font-heading tracking-widest text-cream/60 uppercase">
                  <span className="flex items-center gap-2">
                    <User className="w-3.5 h-3.5 text-gold" />{" "}
                    {getAuthorName(post.author)}
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-gold" />{" "}
                    {formatDate(post.publishedAt)}
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
                  <span className="flex items-center gap-2 text-[10px] font-heading tracking-widest text-gold group-hover:text-white transition-all">
                    READ ARTICLE{" "}
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-2 transition-transform" />
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
