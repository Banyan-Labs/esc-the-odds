# Film Page

## Overview
The film page (`/film`) is the anchor of the ETO ecosystem, presenting the documentary as a facilitated transformation experience. It includes a working video player for the trailer and a "Share the Trailer" button.

## Routes

| Route | Purpose |
|-------|---------|
| `/film` | Film experience page |
| `/documentary` | Redirects to `/film` |

## Key Files
- `src/app/(website)/film/page.tsx` — Film page (client component)
- `src/app/(website)/film/layout.tsx` — SEO metadata
- `src/lib/constants/film.ts` — Experience steps, trailer URL, and Film In Action items

## Page Sections
```
Hero (ScreenGrab-Trailer.png background)
The Film — The Mirror (video player with trailer + Share the Trailer button)
The Experience (TheExperience component — 3 cards)
Film In Action (tag chips showing screening contexts)
Host the Film CTA (single button + logo)
```

### Hero
- Background: ScreenGrab-Trailer.png at opacity-50
- H1: "ESCAPING THE ODDS OF RECIDIVISM" with gold accent on "OF RECIDIVISM"
- Subtitle: "A documentary that moves beyond awareness into transformation."
- Two CTAs: "HOST THE FILM" (gold, links to `/contact`) + "LEARN HOW IT WORKS" (outline, links to `#experience`)
- No logo in the hero section (logo appears in the CTA section at page bottom)

### The Film — The Mirror
- Working video player using `useRef<HTMLVideoElement>` and `useState` for play/pause
- Video source: `TRAILER_VIDEO_URL` from `src/lib/constants/film.ts`, which defaults to a Firebase Storage URL (`firebasestorage.googleapis.com/...`). Can be overridden via `NEXT_PUBLIC_TRAILER_VIDEO_URL` env var.
- Poster image: `/assets/ETO-LandscapePoster.png`
- Play/pause overlay button with Framer Motion animation
- **"Share the Trailer" button** — gold/bold styling (`border-2 border-gold bg-gold/10 text-gold font-bold hover:bg-gold hover:text-black`)
- Uses `navigator.share` API with clipboard fallback
- Share URL points to `/#the-film` (homepage film section, not `/film#trailer`)

### The Experience
- 3-card grid sourced from `EXPERIENCE_STEPS` in `src/lib/constants/film.ts`:
  - The Mirror — `Image_6.jpeg` (no custom position)
  - The Inquiry — `AaronSpeaking.png` (position: center 15%)
  - The Map — `IMG_1830.JPG` (position: 40% 20%)
- **Not identical to homepage.** The homepage uses `HOME_EXPERIENCE_STEPS` from `src/lib/constants/home.ts`, which has a different first image (`Image_26.jpeg` vs `Image_6.jpeg`). The other two images (`AaronSpeaking.png`, `IMG_1830.JPG`) overlap between both pages. The homepage steps also include bullet lists and different descriptions.

### Film In Action
Tag chips: Correctional Facilities, Career Development Boards, Employers, Reentry Organizations, Libraries, Community Convenings, Civic Forums

### Host the Film CTA
- Logo (`logo-notxt.png`) displayed above the heading
- Single CTA button: "HOST THE FILM" (gold, with arrow) → `/contact`

## Removed (Content Overhaul - March 2026)
- Photo gallery (8 images)
- Booking form (useState, form fields)
- Narrative stats section (94% engagement, 60+ hours footage)
- Screening schedule (Chicago, LA, NY)

## Changes (UI/UX Overhaul - March 2026)
- Hero image changed from Image_6 → Image_17 → ScreenGrab-Trailer.png
- Grayscale overlay removed from hero
- "Share the Trailer" button added — gold/bold, links to `/#the-film`
- Logo added to CTA section at page bottom
- Film Impact Section CTA changed to "ENROLL YOUR ORGANIZATION"

## Key Messaging
- Film is positioned as a "facilitated transformation experience"
- "Host the film" language replaces "book a screening"

## Last Updated
March 17, 2026
