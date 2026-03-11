import type { Metadata } from "next";
import { getPayload } from "payload";
import config from "@payload-config";
import { BlogHero } from "@/components/blog/BlogHero";
import { BlogGrid, type BlogPost } from "@/components/blog/BlogGrid";

export const metadata: Metadata = {
  title: "The Dispatch — Journal & Blueprints",
  description:
    "Documentation of the transition, the scaling of the movement, and the frameworks for the future.",
  openGraph: {
    title: "The Dispatch — Journal & Blueprints | Escape The Odds",
    description:
      "Documentation of the transition, the scaling of the movement, and the frameworks for the future.",
    images: [
      {
        url: "/assets/Image_3.jpeg",
        width: 1200,
        height: 630,
        alt: "Chicago Sun-Times front page featuring Aaron Smith",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Dispatch | Escape The Odds",
    description:
      "Documentation of the transition, the scaling of the movement, and the frameworks for the future.",
    images: ["/assets/Image_3.jpeg"],
  },
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
    <>
      <BlogHero />
      <BlogGrid posts={posts} />
    </>
  );
}
