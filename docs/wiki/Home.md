# Escape The Odds — Project Wiki

## Overview
Escape The Odds is a for-profit web platform built with Next.js 15 and Payload CMS 3 for Aaron Smith's reentry transformation ecosystem. The site centers around the documentary film, institutional curriculum (Bounce Forward Plan), and vocational programs designed for economic mobility.

## Quick Links
- [Architecture](./Architecture.md)
- [Payload CMS](./Payload-CMS.md)
- [Blog](./Blog.md)
- [Homepage](./Homepage.md)
- [About Page](./About.md)
- [Programs](./Programs.md)
- [Film](./Film.md)
- [Organizations](./Organizations.md)
- [Contact](./Contact.md)
- [Development Setup](./Development-Setup.md)

## Client Handoff
- [Handoff README](../handoff/README.md)
- [Infrastructure & Deployment](../handoff/INFRASTRUCTURE.md)
- [Media & Assets](../handoff/MEDIA_STORAGE.md)
- [Managing Blog Posts](../handoff/managing-blog-posts.md)

## Tech Stack
| Layer | Technology |
|-------|-----------|
| Framework | Next.js 15.4.11 |
| CMS | Payload CMS 3.77.0 |
| Database | PostgreSQL 15 (Docker local, Cloud SQL production) |
| Styling | Tailwind CSS v4 + shadcn/ui |
| Hosting | Firebase Hosting / Cloud Run |
| Rich Text | Lexical Editor |
| Animation | Framer Motion |
| Fonts | Anton (headings), Inter (body) |

## Design System
- **Theme:** Black/gold/cream cinematic aesthetic
- **Colors:** Gold (#DFB05A), Cream (#F1ECE6), Charcoal (#323131), Black (#000000)
- **Headings:** Anton font, uppercase, tracking-tighter
- **Body:** Inter font, font-light
- **Icons:** Lucide React
- **Eyebrows:** Gold spans — `text-2xl md:text-3xl tracking-widest uppercase`
- **Images:** Full color with scale-on-hover zoom (`group-hover:scale-105`)
- **Hero backgrounds:** Faded at `opacity-30` with gradient overlays
- **Card borders:** `border-white/10`
- **CTAs:** Gold buttons (`bg-gold text-black`) or outlined (`border-gold text-gold`)
- **Active nav:** Current page highlighted in gold via `usePathname()`

## External Integrations
| Service | Purpose |
|---------|---------|
| GoHighLevel (GHL) | Contact form (embedded iframe widget) |
| GHL Courses | Self-paced learning platform (`courses.escapetheodds.com`) |
| Amazon | Book purchase links (3 books) |
| Firebase Storage | Media uploads via Payload CMS |

## Last Updated
April 1, 2026 — Content overhaul complete, GHL form integrated, domain cutover complete, Node.js 22 upgraded, handoff docs finalized
