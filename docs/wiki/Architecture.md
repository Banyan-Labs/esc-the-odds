# Architecture

## Route Groups
The app uses Next.js route groups to separate the public website from the Payload admin panel:

```
src/app/
├── (website)/          # Public-facing site
│   ├── layout.tsx      # Root layout with fonts (Anton, Inter), global metadata
│   ├── globals.css     # Tailwind v4 with @theme inline block
│   ├── opengraph-image.tsx  # Universal OG image (dynamic, logo-based)
│   ├── sitemap.ts      # Dynamic sitemap generation
│   ├── robots.ts       # Robots.txt configuration
│   ├── page.tsx        # Homepage
│   ├── about/
│   │   ├── layout.tsx  # SEO metadata
│   │   └── page.tsx    # About page (client component)
│   ├── blog/
│   │   ├── page.tsx    # Blog listing (server component)
│   │   └── [slug]/
│   │       └── page.tsx # Blog detail (server component)
│   ├── contact/
│   │   ├── layout.tsx  # SEO metadata
│   │   └── page.tsx    # Contact page with embedded GHL iframe (client component)
│   ├── film/
│   │   ├── layout.tsx  # SEO metadata
│   │   └── page.tsx    # Film page (client component)
│   ├── organizations/
│   │   ├── layout.tsx  # SEO metadata
│   │   └── page.tsx    # Organizations page (client component)
│   └── programs/
│       ├── layout.tsx  # SEO metadata
│       └── page.tsx    # Consolidated programs page (client component)
├── (payload)/          # Payload CMS admin
│   ├── layout.tsx      # Payload root layout
│   ├── custom.scss     # Admin style overrides
│   └── admin/
│       ├── [[...segments]]/page.tsx  # Catch-all admin route
│       ├── importMap.ts
│       └── importMap.js              # Auto-generated (gitignored)
└── api/
    └── [[...slug]]/route.ts          # Payload REST API (catch-all — no custom API routes under /api)
```

### Metadata Pattern
Public pages use a `layout.tsx` + `page.tsx` pair because `"use client"` pages cannot export `Metadata`. The layout (server component) exports the metadata, and the page (client component) renders the UI with Framer Motion.

### Universal Open Graph Image
`opengraph-image.tsx` in the `(website)` route group generates a dynamic OG image for all public pages using Next.js `ImageResponse`. It reads the logo from `public/assets/logo-notxt.png`, converts to base64, and renders a branded 1200×630 PNG with gold accent lines. Per-page layouts do not define `images` in their openGraph/twitter metadata — Next.js uses `opengraph-image.tsx` automatically.

### Contact Page Architecture
The contact page embeds a GoHighLevel (GHL) form widget via iframe. There is no custom `/api/contact` route — the Payload `api/[[...slug]]` catch-all handles all `/api/*` requests. The GHL form handles captcha, validation, and submission entirely client-side within the iframe.

## Shared Components

```
src/components/
├── Navbar.tsx              # Fixed nav with active page highlighting (usePathname)
├── Footer.tsx              # Site footer
├── Hero.tsx                # Homepage hero with image carousel
├── SEO/
│   └── OrganizationSchema.tsx  # JSON-LD structured data
├── ui/                     # shadcn/ui primitives (Button, Input, Label, Textarea)
├── blog/
│   ├── BlogHero.tsx        # Blog listing hero ("The Blueprint" branding)
│   └── BlogGrid.tsx        # Blog post card grid
├── shared/
│   ├── CTAButton.tsx          # Reusable CTA button component
│   ├── FadeInView.tsx         # Framer Motion fade-in wrapper
│   ├── SectionHeader.tsx      # Consistent section heading styling
│   └── index.ts               # Barrel exports
├── programs/
│   ├── BooksGrid.tsx           # Grid of 3 book cards with Amazon links
│   ├── BounceForwardSection.tsx # Bounce Forward program details
│   ├── BoxTruckSection.tsx     # Box Truck Business program details
│   ├── BulletList.tsx          # Reusable bullet list for program features
│   ├── CommercialCleaningSection.tsx # Commercial Cleaning program details
│   ├── ContactCTAs.tsx         # Program-specific contact CTAs
│   ├── FilmImpactSection.tsx   # Film impact details with "ENROLL YOUR ORGANIZATION" CTA
│   ├── HouseHackingSection.tsx # House Hacking program details
│   ├── ProgramOverview.tsx     # Program overview/intro section
│   ├── SelfPacedSection.tsx    # Self-paced courses section (links to GHL)
│   ├── TagList.tsx             # Tag/label list for program features
│   └── index.ts                # Barrel exports
└── sections/
    ├── Founder.tsx          # Aaron Smith bio (used on /about)
    ├── MediaPress.tsx       # Media mentions grid (used on /about)
    ├── TheExperience.tsx    # 3-card experience component (used on / and /film)
    ├── TheFilm.tsx          # Film preview section with share button (used on /)
    ├── Ecosystem.tsx        # 3 engagement cards with mobile image positioning (used on /)
    ├── Testimonials.tsx     # Featured testimonial + quotes grid (used on /)
    ├── TargetAudience.tsx   # Audience categories (used on /)
    └── ContactCTA.tsx       # Reusable contact CTA block
```

> **Note:** `TheExperience.tsx` accepts a `steps` prop and is used on both the homepage and film page with **different data**. The homepage passes `HOME_EXPERIENCE_STEPS` (from `src/lib/constants/home.ts`) while the film page passes `EXPERIENCE_STEPS` (from `src/lib/constants/film.ts`). The two datasets have different step content tailored to each page's context.

## Payload Collections
Defined in `src/payload/collections/`:

| Collection | Slug | Purpose |
|-----------|------|---------|
| Users | `users` | Auth-enabled user accounts with admin/editor roles |
| Posts | `posts` | Blog posts with rich text, categories, featured images |
| Media | `media` | Uploaded files with required alt text |

## Access Control
Shared helpers in `src/payload/access/index.ts`:

| Helper | Description |
|--------|------------|
| `publicAccess` | Anyone (read-only endpoints) |
| `isAuthenticated` | Any logged-in user |
| `isAdminAccess` | Admin role only |
| `adminFieldAccess` | Field-level admin restriction |
| `isAdmin(user)` | Role check utility |
| `isEditor(user)` | Role check utility |

### Permission Matrix

| Action | Admin | Editor | Public |
|--------|-------|--------|--------|
| Read posts | Yes | Yes | Yes |
| Create/edit posts | Yes | Yes | No |
| Delete posts | Yes | No | No |
| Read media | Yes | Yes | Yes |
| Create/edit media | Yes | Yes | No |
| Delete media | Yes | No | No |
| Manage users | Yes | No | No |
| View own profile | Yes | Yes | No |

## CORS Configuration
`payload.config.ts` includes a `cors` array allowing API access from:
- `https://escape-the-odds.web.app`
- `https://escapetheodds.com`
- `https://www.escapetheodds.com`
- `NEXT_PUBLIC_APP_URL` (falls back to `http://localhost:3000`)

## Remote Image Patterns
`next.config.ts` includes `remotePatterns` for:
- `escape-the-odds.web.app`
- `escapetheodds.com`
- `www.escapetheodds.com`

Images are set to `unoptimized: true` for Firebase Hosting compatibility.

## Config Files
- `payload.config.ts` — Payload CMS configuration (root level, includes CORS)
- `next.config.ts` — Next.js config wrapped with `withPayload()`, remote image patterns
- `tsconfig.json` — includes `@payload-config` path alias
- `docker-compose.yml` — PostgreSQL 15 container for local dev
- `firebase.json` — Firebase Hosting config with 301 redirects, `"!.env"` exception for deploy
- `.firebaserc` — Firebase project link (`escape-the-odds`)

### Firebase Hosting Config
`firebase.json` uses `"source": "."` for web framework auto-detection. The ignore array includes `"!.env"` to ensure the `.env` file (with `DATABASE_URI`, `PAYLOAD_SECRET`, etc.) is included in the deploy bundle, since `**/.*` would otherwise exclude all dotfiles.

## External Integrations

| Service | Integration Method | Notes |
|---------|-------------------|-------|
| GoHighLevel (GHL) | Embedded iframe form widget | No server-side API needed |
| GHL Courses | External link | `https://courses.escapetheodds.com/home` |
| Amazon | Direct links | 3 book purchase links in program cards |
| Firebase Storage | GCS adapter installed (not yet configured in `payload.config.ts`) | Trailer video via hardcoded URL; media uploads use local disk |

## Last Updated
March 19, 2026
