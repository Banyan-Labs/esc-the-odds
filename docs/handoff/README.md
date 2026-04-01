# Handoff Documentation: Escape The Odds (ETO) Platform

## Project Overview

The Escape The Odds (ETO) platform is a for-profit web application for Aaron Smith's reentry transformation ecosystem. It combines a cinematic front-end with a headless CMS for blog management. The site centers around the documentary film, institutional curriculum (Bounce Forward Plan), and vocational programs.

## Technical Stack

| Layer | Technology | Details |
|-------|-----------|---------|
| Framework | Next.js 15.4.11 | App Router, React 19, `output: 'standalone'` |
| CMS | Payload CMS 3.77.0 | Embedded in Next.js via route groups |
| Database | Cloud SQL (PostgreSQL 15) | Instance: `esc-the-odds-db`, Region: `us-central1` |
| Media Storage | Firebase Storage / GCS | The `@payloadcms/storage-gcs` adapter is installed but **not yet configured** in `payload.config.ts`. The trailer video uses a hardcoded Firebase Storage URL (see `src/lib/constants/film.ts`). Static images are served from `public/assets/`. |
| Frontend Hosting | Firebase Hosting | URL: https://escapetheodds.com |
| SSR Runtime | Cloud Functions (2nd Gen) | Auto-deployed by Firebase Hosting |
| Styling | Tailwind CSS v4 + shadcn/ui | Dark cinematic aesthetic, Anton + Inter fonts |
| Animation | Framer Motion | Used in all client components |

## Architecture

The app uses Next.js route groups to separate concerns:

```
src/app/
  (website)/    Public-facing site (/, /about, /blog, /film, /programs, /organizations, /contact)
  (payload)/    Payload CMS admin panel (/admin)
  api/          Payload REST API (/api/*)
```

Payload CMS 3 is **embedded inside** the Next.js app — it is not a separate backend. The admin panel, API routes, and data fetching all run within the same Next.js process.

Each public route has:
- `layout.tsx` — Server component exporting SEO `Metadata` (title, description, Open Graph, Twitter cards). **Note:** The blog route (`/blog`) does not have its own `layout.tsx`; it inherits the `(website)` root layout.
- `page.tsx` — Client component (`"use client"`) with Framer Motion animations

## Site Structure

| Route | Description |
|-------|------------|
| `/` | Homepage — Hero carousel, Film preview, Experience (3 cards), Ecosystem (3 cards), Testimonials, Target Audience, Contact CTA |
| `/film` | Documentary page with video player, experience cards, host CTA |
| `/about` | Movement story, founder bio, media press, belief/mission/vision, Housing/Health/Hustle pillars, 600+ impact stat |
| `/programs` | Consolidated programs page — 6 overview cards (2 rows of 3) with anchor scroll, detailed sections for Film Impact, Bounce Forward, Box Truck, Commercial Cleaning, House Hacking, plus self-paced digital course. 3 cards include "ORDER THE BOOK" Amazon links. |
| `/organizations` | Engagement models (3), who we work with tags, consultation CTA |
| `/contact` | Embedded GHL inquiry form, media/press contact, individual learners block |
| `/blog` | Blog landing — posts from Payload CMS |
| `/blog/[slug]` | Blog detail — rich text from Payload |
| `/admin` | Payload CMS admin panel |

## Navigation

```
HOME → /
THE FILM EXPERIENCE → /film
PROGRAMS → /programs
FOR ORGANIZATIONS → /organizations
ABOUT → /about
TESTIMONIALS → /#testimonials
BLOG → /blog
CONTACT → /contact
CTA Button: HOST THE FILM → /contact
```

- Active page highlighted in gold via `usePathname()`
- Hash links (Testimonials) do not show active state
- Flat nav — no dropdowns

## Redirects (firebase.json)

| From | To | Type |
|------|----|------|
| `/programs/live-cohort` | `/programs#live-cohort` | 301 redirect |
| `/programs/self-paced` | `/programs#self-paced` | 301 redirect |
| `/documentary` | `/film` | 301 redirect |
| `/courses` | `/programs` | 301 redirect |
| `/partner` | `/organizations` | 301 redirect |
| `/support` | `/organizations` | 301 redirect |

## SEO

- Root layout uses `title.template`: `%s | Escape The Odds`
- Each route has a `layout.tsx` with unique `Metadata` export
- Open Graph and Twitter card metadata on all pages
- `sitemap.ts` and `robots.ts` in the `(website)` route group (`src/app/(website)/`)
- `metadataBase` reads from `NEXT_PUBLIC_APP_URL` env var (currently set to `https://escapetheodds.com`)
- Proper heading hierarchy: one H1 per page, H2→H3 nesting verified

## Image Management

Photos in `public/assets/Image_1.jpeg` through `Image_24.jpeg`, plus additional assets (Image_26–28, IMG series, logos, flyers, posters, and other supporting files). Images are assigned to avoid same-page reuse. Cross-page reuse is limited to 8 intentional cases (same content shown on different pages).

Key image conventions:
- Background images use `opacity-30` with gradient overlays
- Card images use `object-cover` with `group-hover:scale-105` zoom effect
- Some images have `imagePosition` (CSS `object-position`) to frame subjects correctly
- No grayscale filters — all images display in full color

## Deployment Architecture

```
[User] --> Firebase Hosting CDN
               |
               |--> Static assets (CSS, JS, images) served from CDN
               |--> Dynamic routes (SSR, /admin, /api) --> Cloud Functions (2nd Gen)
                                                                |
                                                                |--> Cloud SQL (PostgreSQL)
                                                                |--> Firebase Storage (GCS) [not yet wired via Payload adapter]
```

## Documentation Directory

| Document | Description |
|----------|------------|
| [Infrastructure & Deployment](./INFRASTRUCTURE.md) | Firebase Hosting, Cloud SQL, deployment steps |
| [Media & Assets](./MEDIA_STORAGE.md) | Firebase Storage / GCS configuration |
| [Managing Blog Posts](./managing-blog-posts.md) | Client-facing guide for creating/editing posts |

## Live URLs

| Environment | URL |
|------------|-----|
| Production Site | https://escapetheodds.com |
| Admin Panel | https://escapetheodds.com/admin |
| Firebase Console | https://console.firebase.google.com/project/escape-the-odds |
| GCP Console | https://console.cloud.google.com/project/escape-the-odds |

## For New Developers

See [Infrastructure & Deployment](./INFRASTRUCTURE.md) for full setup instructions. Quick start:

1. Clone the repo, run `npm install`
2. Start PostgreSQL: `docker compose up -d`
3. Copy `.env.example` (or create `.env` from the template in INFRASTRUCTURE.md)
4. Run `npm run dev` -- visit http://localhost:3000
5. Visit `/admin` to create your first admin user

## Code Standards

- Files under 500 lines, split early
- Single responsibility per function/component
- TypeScript required, no `any` (except Payload-generated files)
- Separation of concerns: logic and UI separated
- All pages are either server components (data fetching) or client components (animations)

## Design System

- **Colors:** Gold `#DFB05A`, Cream `#F1ECE6`, Charcoal `#323131`, Black `#000`
- **Fonts:** Anton (headings — uppercase, tracking-tighter), Inter (body — font-light)
- **Eyebrow spans:** `text-gold font-heading tracking-widest text-2xl md:text-3xl uppercase`
- **Card borders:** `border-white/10`
- **Image hovers:** `group-hover:scale-105` zoom (no grayscale)
- **Hero backgrounds:** `opacity-30` with `bg-linear-to-b` gradient overlays
- **CTAs:** Gold buttons (`bg-gold text-black`) or outlined (`border-gold text-gold`)
- **Icons:** Lucide React

## Content Overhaul (March 2026)

Major content and UI/UX update applied:
- All page copy rewritten to match client-approved content
- Global terminology: "mission" → "movement", "book a screening" → "host the film"
- Programs consolidated from 3 pages to 1 page with 6 program cards + anchor scroll
- About page completely rewritten with 7 sections (Founder, Movement, MediaPress, Belief/Mission/Vision, Housing/Health/Hustle pillars, 600+ impact stat)
- Contact form replaced with embedded GHL (GoHighLevel) form widget — no server-side API needed
- 7 testimonials including featured testimonial with image (Kwante W.)
- 8 media mentions including Good Morning America, Fox 32, ABC 7, Chicago Reader, CoreCivic
- Active nav highlighting with gold color via `usePathname()`
- Proper heading hierarchy enforced on all pages (one H1, H2→H3 nesting)
- SEO pass: per-page metadata, Open Graph, Twitter cards, sitemap, robots
- 24+ images distributed across site with zero same-page reuse
- Firebase 301 redirects for removed subpages
- Grayscale image filters removed — all images in full color
- Eyebrow + H1 deduplication on all page heroes
- "Share the Trailer" button on homepage and film page (gold, bold) — links to homepage film section
- Logo added to hero, contact CTA, film page, and form success state
- Blog renamed: "The Blueprint" with tagline "Rebuilding a New Narrative"
- 3 program cards include "ORDER THE BOOK" Amazon links
- Self-paced section links to external GHL courses platform
- CORS configured for `escape-the-odds.web.app` and `escapetheodds.com`
- Remote image patterns added for both domains
- Firebase Hosting `.env` un-ignored for deploy

## External Integrations

| Service | Purpose | Config Location |
|---------|---------|-----------------|
| GoHighLevel (GHL) | Contact form (embedded iframe) | Form URL in `contact/page.tsx` |
| GHL Courses Platform | Self-paced learning | `https://courses.escapetheodds.com/home` |
| Amazon | Book purchases (3 books) | Links in `src/lib/constants/programs.ts` |
| Firebase Storage | Trailer video hosting | URL in `src/lib/constants/film.ts` |

## Pending Items

- **GHL form styling:** Button text and consent language need updating by GHL developer
- **Wix email export:** Client needs to export contact list from Wix admin panel
- **Cloud SQL lockdown:** Currently open to all IPs (`0.0.0.0/0`) — restrict for production

---

**Last Updated:** April 1, 2026
**Status:** Client feedback incorporated, GHL form integrated, domain cutover complete, Node.js 22 upgraded, deployed to Firebase Hosting
