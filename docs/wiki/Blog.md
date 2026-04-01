# Blog (The Blueprint)

## Overview
The blog (branded as **"The Blueprint"** with tagline **"Rebuilding a New Narrative"**) displays posts from Payload CMS. It consists of a landing page at `/blog` and detail pages at `/blog/[slug]`.

## Architecture

### Landing Page (`/blog`)
- **File:** `src/app/(website)/blog/page.tsx`
- **Type:** Server component
- **Data:** Fetches published posts via `getPayload().find()` with `_status: published`, sorted by `-publishedAt`
- **Components:**
  - `BlogHero` — animated hero section (client component, Framer Motion)
  - `BlogGrid` — animated card grid (client component, Framer Motion)
- **Error handling:** try/catch returns empty array on failure, grid shows empty state
- **Metadata:** description references "movement" (changed from "mission")

### Detail Page (`/blog/[slug]`)
- **File:** `src/app/(website)/blog/[slug]/page.tsx`
- **Type:** Server component
- **Data:** Fetches single post by slug via `getPayload().find()` with `_status: published`
- **Rich text:** Uses `RichText` component from `@payloadcms/richtext-lexical/react`
- **404:** Returns `notFound()` if post doesn't exist or is a draft
- **SEO:** `generateMetadata` uses `seo.metaTitle` / `seo.metaDescription` / `seo.ogImage` with fallbacks

### Client Components
- **`src/components/blog/BlogHero.tsx`** — Hero with `IMG_1829.JPG` background
  - Eyebrow: "THE DISPATCH" (gold uppercase tracking-widest)
  - H1: "THE BLUEPRINT." (gold accent on "BLUEPRINT.")
  - Bold gold heading: "Rebuilding a New Narrative"
  - Previous italic journal quote removed
- **`src/components/blog/BlogGrid.tsx`** — 3-column card grid, staggered animations, empty state

## Data Flow

```
Payload CMS (PostgreSQL)
    ↓ getPayload().find()
Server Component (page.tsx)
    ↓ props
Client Component (BlogHero / BlogGrid)
    ↓ renders with Framer Motion
Browser
```

## Content Model
Posts managed at `/admin` → Posts. See [Payload CMS](./Payload-CMS.md) for collection details.

## Styling
- Brand colors: black bg, cream text, gold accents
- Fonts: Anton (headings, uppercase), Inter (body)
- Tailwind prose classes for rich text content
- Grayscale-to-color image hover effect on cards

## Changes (Content Overhaul - March 2026)
- Blog H1 renamed from "The Dispatch" → **"The Blueprint"**
- Tagline added: **"Rebuilding a New Narrative"** in bold gold text
- Italic journal quote removed from BlogHero
- "mission" → "movement" in blog page metadata description

> **Note:** The eyebrow, H1, and page metadata all read "The Blueprint" now. The blog detail page back-links still read "Back to The Dispatch" in the code (`blog/[slug]/page.tsx`).

## Last Updated
April 1, 2026
