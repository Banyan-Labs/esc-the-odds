import type { Metadata } from "next";
import { getPayload } from "payload";
import config from "@payload-config";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BlogHero } from "@/components/blog/BlogHero";
import { BlogGrid, type BlogPost } from "@/components/blog/BlogGrid";

export const metadata: Metadata = {
  title: "The Dispatch | Escape The Odds",
  description:
    "Documentation of the transition, the scaling of the movement, and the frameworks for the future.",
};

export default async function BlogPage() {
  let posts: BlogPost[] = [];

  try {
    const payload = await getPayload({ config });
    const result = await payload.find({
      collection: "posts",
      where: { _status: { equals: "published" } },
      sort: "-publishedAt",
      depth: 1,
      limit: 20,
    });

    posts = result.docs.map((doc) => ({
      title: doc.title,
      slug: doc.slug,
      excerpt: doc.excerpt,
      category: doc.category,
      author: doc.author as { email: string },
      publishedAt: (doc.publishedAt as string) ?? null,
      featuredImage: doc.featuredImage as { url: string; alt: string },
    }));
  } catch (error) {
    console.error("[blog] Failed to fetch posts:", error);
  }

  return (
    <main className="min-h-screen bg-black text-cream selection:bg-gold selection:text-black">
      <Navbar />
      <BlogHero />
      <BlogGrid posts={posts} />
      <Footer />
    </main>
  );
}
