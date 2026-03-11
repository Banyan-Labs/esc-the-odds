# Escape The Odds

A Next.js 15 web platform for Aaron Smith's reentry transformation ecosystem — combining a cinematic public website with Payload CMS for blog management.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 15.4.11 (App Router, React 19) |
| CMS | Payload CMS 3.77.0 (embedded) |
| Database | PostgreSQL 15 (Docker local, Cloud SQL production) |
| Hosting | Firebase Hosting + Cloud Functions (2nd Gen) |
| Styling | Tailwind CSS v4 + shadcn/ui |
| Animation | Framer Motion |
| Fonts | Anton (headings), Inter (body) |

## Site Structure

| Route | Description |
|-------|------------|
| `/` | Homepage — Hero carousel, Film preview, Experience, Ecosystem, Testimonials, Target Audience |
| `/film` | Documentary page — video player, experience cards, host CTA |
| `/programs` | Consolidated programs — 5 overview cards, detailed sections, self-paced books |
| `/organizations` | Institutional engagement — 3 models, partner audience, consultation CTA |
| `/about` | Movement story — founder bio, media press, belief/mission/vision, impact stats |
| `/contact` | Multi-field inquiry form — 11 fields, 6 inquiry categories |
| `/blog` | Blog listing + detail — posts from Payload CMS |
| `/admin` | Payload CMS admin panel |

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start local PostgreSQL
docker compose up -d

# 3. Create .env with required variables (see docs/handoff/INFRASTRUCTURE.md)
cp .env.example .env  # or create manually

# 4. Start dev server
npm run dev

# 5. Visit http://localhost:3000 (site) or /admin (CMS)
```

## Architecture

```
src/app/
  (website)/    Public site (/, /about, /blog, /film, /programs, /organizations, /contact)
  (payload)/    Payload CMS admin panel (/admin)
  api/          Payload REST API (/api/*)
```

Payload CMS is embedded inside the Next.js app — not a separate backend. Each public route has a `layout.tsx` for SEO metadata and a `page.tsx` client component for UI/animations.

## Documentation

All detailed documentation lives in `docs/` (gitignored, local only):

- **[Handoff Guide](docs/handoff/README.md)** — Full technical overview for new developers
- **[Infrastructure](docs/handoff/INFRASTRUCTURE.md)** — Firebase, Cloud SQL, deployment
- **[Managing Blog Posts](docs/handoff/managing-blog-posts.md)** — Client-facing CMS guide
- **[Wiki](docs/wiki/)** — Page-by-page documentation and architecture details

## Design System

- **Theme:** Black/gold/cream cinematic aesthetic
- **Colors:** Gold `#DFB05A`, Cream `#F1ECE6`, Charcoal `#323131`, Black `#000`
- **Headings:** Anton font, uppercase, tracking-tighter
- **Body:** Inter font, font-light
- **Images:** Color with scale-on-hover, faded backgrounds at 30% opacity
- **Eyebrows:** Gold spans with `text-2xl md:text-3xl tracking-widest uppercase`

## Deployment

```bash
firebase deploy --only hosting --force
```

See [Infrastructure docs](docs/handoff/INFRASTRUCTURE.md) for full deployment details.
