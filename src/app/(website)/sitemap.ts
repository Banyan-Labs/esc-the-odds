import type { MetadataRoute } from "next";
import { getPayload } from "payload";
import config from "@payload-config";

const BASE_URL = "https://escapetheodds.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: new Date(), priority: 1.0 },
    { url: `${BASE_URL}/film`, lastModified: new Date(), priority: 0.9 },
    { url: `${BASE_URL}/programs`, lastModified: new Date(), priority: 0.8 },
    { url: `${BASE_URL}/organizations`, lastModified: new Date(), priority: 0.8 },
    { url: `${BASE_URL}/about`, lastModified: new Date(), priority: 0.7 },
    { url: `${BASE_URL}/blog`, lastModified: new Date(), priority: 0.6 },
    { url: `${BASE_URL}/contact`, lastModified: new Date(), priority: 0.6 },
  ];

  let blogPages: MetadataRoute.Sitemap = [];

  try {
    const payload = await getPayload({ config });
    const posts = await payload.find({
      collection: "posts",
      where: { _status: { equals: "published" } },
      limit: 100,
    });

    blogPages = posts.docs.map((post) => ({
      url: `${BASE_URL}/blog/${post.slug}`,
      lastModified: new Date(post.updatedAt),
      priority: 0.5,
    }));
  } catch (error) {
    // Sitemap still works without blog posts if DB is unavailable
    console.error("[sitemap] Failed to fetch blog posts:", error);
  }

  return [...staticPages, ...blogPages];
}
