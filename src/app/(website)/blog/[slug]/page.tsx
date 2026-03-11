import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPayload } from "payload";
import config from "@payload-config";
import { RichText } from "@payloadcms/richtext-lexical/react";
import type { SerializedEditorState } from "lexical";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, User } from "lucide-react";
import { formatDate, getCategoryLabel, getAuthorName } from "@/lib/blog";

type Props = {
  params: Promise<{ slug: string }>;
};

/** Payload returns related docs as objects when depth > 0 */
interface PayloadImage {
  url: string;
  alt: string;
}

interface PayloadSeo {
  metaTitle?: string | null;
  metaDescription?: string | null;
  ogImage?: { url?: string } | null;
}

async function getPost(slug: string) {
  try {
    const payload = await getPayload({ config });
    const result = await payload.find({
      collection: "posts",
      where: {
        slug: { equals: slug },
        _status: { equals: "published" },
      },
      depth: 1,
      limit: 1,
    });
    return result.docs[0] ?? null;
  } catch (error) {
    console.error("[blog] Failed to fetch post:", error);
    return null;
  }
}

function extractImage(image: unknown): PayloadImage | null {
  if (image && typeof image === "object" && "url" in image && "alt" in image) {
    return image as PayloadImage;
  }
  return null;
}

function extractSeo(seo: unknown): PayloadSeo | null {
  if (seo && typeof seo === "object") {
    return seo as PayloadSeo;
  }
  return null;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return { title: "Post Not Found | Escape The Odds" };
  }

  const seo = extractSeo(post.seo);
  const featuredImage = extractImage(post.featuredImage);

  const title = seo?.metaTitle || post.title;
  const description = seo?.metaDescription || post.excerpt;
  const ogImageUrl = seo?.ogImage?.url || featuredImage?.url;

  return {
    title: `${title} | Escape The Odds`,
    description,
    openGraph: {
      title,
      description,
      ...(ogImageUrl && { images: [{ url: ogImageUrl }] }),
    },
    twitter: {
      card: "summary_large_image" as const,
      title,
      description,
      ...(ogImageUrl && { images: [ogImageUrl] }),
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  const featuredImage = extractImage(post.featuredImage);
  const authorName = getAuthorName(
    post.author && typeof post.author === "object" && "email" in post.author
      ? (post.author as { email: string })
      : null
  );

  return (
    <>
      {/* Hero Image */}
      {featuredImage && (
        <section className="relative pt-32 pb-0">
          <div className="relative aspect-[21/9] max-h-[500px] w-full overflow-hidden">
            <Image
              src={featuredImage.url}
              alt={featuredImage.alt}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-linear-to-t from-black via-black/30 to-transparent" />
          </div>
        </section>
      )}

      {/* Article Content */}
      <article className="container mx-auto max-w-3xl px-4 py-16 md:px-6">
        {/* Back Link */}
        <Link
          href="/blog"
          className="font-heading text-gold mb-12 inline-flex items-center gap-2 text-sm tracking-widest uppercase transition-colors hover:text-white"
        >
          <ArrowLeft className="h-3 w-3" /> Back to The Dispatch
        </Link>

        {/* Category Badge */}
        <div className="mb-6">
          <span className="bg-gold font-heading px-3 py-1 text-sm tracking-widest text-black uppercase">
            {getCategoryLabel(post.category)}
          </span>
        </div>

        {/* Title */}
        <h1 className="font-heading mb-8 text-4xl leading-[0.95] tracking-tighter text-white md:text-6xl">
          {post.title}
        </h1>

        {/* Meta */}
        <div className="font-heading text-cream/80 mb-16 flex items-center gap-6 border-b border-white/10 pb-8 text-sm tracking-widest uppercase">
          <span className="flex items-center gap-2">
            <User className="text-gold h-3.5 w-3.5" /> {authorName}
          </span>
          <span className="flex items-center gap-2">
            <Clock className="text-gold h-3.5 w-3.5" />{" "}
            {formatDate(post.publishedAt as string | null)}
          </span>
        </div>

        {/* Rich Text Body */}
        <div className="prose prose-invert prose-lg prose-p:text-cream/80 prose-p:font-sans prose-p:font-light prose-p:leading-relaxed prose-headings:font-heading prose-headings:text-white prose-a:text-gold prose-a:no-underline hover:prose-a:underline prose-strong:text-white max-w-none">
          <RichText data={post.content as unknown as SerializedEditorState} />
        </div>

        {/* Back Link (bottom) */}
        <div className="mt-16 border-t border-white/10 pt-8">
          <Link
            href="/blog"
            className="font-heading text-gold inline-flex items-center gap-2 text-sm tracking-widest uppercase transition-colors hover:text-white"
          >
            <ArrowLeft className="h-3 w-3" /> Back to The Dispatch
          </Link>
        </div>
      </article>
    </>
  );
}
