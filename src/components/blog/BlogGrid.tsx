"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { formatDate, getCategoryLabel, getAuthorName } from "@/lib/blog";

export type BlogPost = {
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  author: { email: string } | string;
  publishedAt: string | null;
  featuredImage: { url: string; alt: string } | string;
};

function getImageUrl(image: BlogPost["featuredImage"]): string {
  if (typeof image === "string") return "";
  return image.url;
}

function getImageAlt(image: BlogPost["featuredImage"]): string {
  if (typeof image === "string") return "";
  return image.alt;
}

export function BlogGrid({ posts }: { posts: BlogPost[] }) {
  if (posts.length === 0) {
    return (
      <section className="container mx-auto px-4 py-16 md:px-6 md:py-24 lg:py-32">
        <div className="text-cream/90 text-center font-sans text-xl">
          No posts published yet. Check back soon.
        </div>
      </section>
    );
  }

  return (
    <section className="container mx-auto px-4 py-16 md:px-6 md:py-24 lg:py-32">
      <h2 className="sr-only">Blog Posts</h2>
      <div className="grid grid-cols-1 gap-0 border border-white/10 lg:grid-cols-3">
        {posts.map((post, i) => (
          <motion.div
            key={post.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`group hover:bg-charcoal flex flex-col border-white/10 transition-colors duration-500 ${
              i !== posts.length - 1
                ? "border-b lg:border-r lg:border-b-0"
                : "border-b lg:border-b-0"
            }`}
          >
            <Link href={`/blog/${post.slug}`} className="flex flex-1 flex-col">
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={getImageUrl(post.featuredImage)}
                  alt={getImageAlt(post.featuredImage)}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-6 left-6">
                  <span className="bg-gold font-heading px-3 py-1 text-sm tracking-widest text-black uppercase">
                    {getCategoryLabel(post.category)}
                  </span>
                </div>
              </div>

              <div className="flex flex-1 flex-col space-y-6 p-10">
                <div className="font-heading text-cream/80 flex items-center gap-6 text-sm tracking-widest uppercase">
                  <span className="flex items-center gap-2">
                    <User className="text-gold h-3.5 w-3.5" /> {getAuthorName(post.author)}
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock className="text-gold h-3.5 w-3.5" />{" "}
                    {formatDate(post.publishedAt, "short")}
                  </span>
                </div>

                <div className="space-y-4">
                  <h3 className="font-heading group-hover:text-gold text-2xl leading-none tracking-tight text-white transition-colors md:text-3xl">
                    {post.title}
                  </h3>
                  <p className="text-cream/80 line-clamp-3 font-sans leading-relaxed font-light">
                    {post.excerpt}
                  </p>
                </div>

                <div className="mt-auto pt-4">
                  <span className="font-heading text-gold flex items-center gap-2 text-sm tracking-widest transition-all group-hover:text-white">
                    READ ARTICLE{" "}
                    <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-2" />
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
