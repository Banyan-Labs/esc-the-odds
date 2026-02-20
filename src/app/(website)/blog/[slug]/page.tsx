import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPayload } from "payload";
import config from "@payload-config";
import { RichText } from "@payloadcms/richtext-lexical/react";
import type { SerializedEditorState } from "lexical";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, User } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

type Props = {
  params: Promise<{ slug: string }>;
};

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

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return { title: "Post Not Found | Escape The Odds" };
  }

  const seo = post.seo as
    | {
        metaTitle?: string | null;
        metaDescription?: string | null;
        ogImage?: { url?: string } | null;
      }
    | undefined;

  const featuredImage = post.featuredImage as { url?: string } | undefined;

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
  };
}

function formatDate(dateStr: string | null | undefined): string {
  if (!dateStr) return "";
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
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

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  const featuredImage = post.featuredImage as {
    url: string;
    alt: string;
  };
  const author = post.author as { email: string };

  return (
    <main className="min-h-screen bg-black text-cream selection:bg-gold selection:text-black">
      <Navbar />

      {/* Hero Image */}
      <section className="relative pt-32 pb-0">
        <div className="relative w-full aspect-[21/9] max-h-[500px] overflow-hidden">
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

      {/* Article Content */}
      <article className="container mx-auto px-4 md:px-6 max-w-3xl py-16">
        {/* Back Link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-[10px] font-heading tracking-widest text-gold hover:text-white transition-colors uppercase mb-12"
        >
          <ArrowLeft className="w-3 h-3" /> Back to The Dispatch
        </Link>

        {/* Category Badge */}
        <div className="mb-6">
          <span className="px-3 py-1 bg-gold text-black text-[10px] font-heading tracking-widest uppercase">
            {getCategoryLabel(post.category)}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-heading text-white leading-[0.95] tracking-tighter mb-8">
          {post.title}
        </h1>

        {/* Meta */}
        <div className="flex items-center gap-6 text-[10px] font-heading tracking-widest text-cream/40 uppercase mb-16 pb-8 border-b border-white/10">
          <span className="flex items-center gap-2">
            <User className="w-3.5 h-3.5 text-gold" />{" "}
            {author.email.split("@")[0]}
          </span>
          <span className="flex items-center gap-2">
            <Clock className="w-3.5 h-3.5 text-gold" />{" "}
            {formatDate(post.publishedAt as string | null)}
          </span>
        </div>

        {/* Rich Text Body */}
        <div className="prose prose-invert prose-lg max-w-none prose-p:text-cream/80 prose-p:font-sans prose-p:font-light prose-p:leading-relaxed prose-headings:font-heading prose-headings:text-white prose-a:text-gold prose-a:no-underline hover:prose-a:underline prose-strong:text-white">
          <RichText data={post.content as unknown as SerializedEditorState} />
        </div>

        {/* Back Link (bottom) */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[10px] font-heading tracking-widest text-gold hover:text-white transition-colors uppercase"
          >
            <ArrowLeft className="w-3 h-3" /> Back to The Dispatch
          </Link>
        </div>
      </article>

      <Footer />
    </main>
  );
}
