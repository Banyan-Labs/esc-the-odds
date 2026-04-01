# About Page

## Overview
The About page (`/about`) presents the ETO movement, founder story, media coverage, organizational beliefs, and impact metrics.

## Key Files
- `src/app/(website)/about/page.tsx` — Main page (client component)
- `src/app/(website)/about/layout.tsx` — SEO metadata
- `src/components/sections/Founder.tsx` — Aaron Smith bio component
- `src/components/sections/MediaPress.tsx` — Media mentions component

## Section Order
1. **Hero** — Image_8 background (classroom), eyebrow "ABOUT", H1 "CHANGE THE NARRATIVE..."
2. **Founder** — `Founder.tsx` component (AaronSpeaking.png, expanded bio, quote, CTA)
3. **The Movement** — "EMPOWERING MEN AND WOMEN TO ESCAPE THE ODDS"
4. **MediaPress** — `MediaPress.tsx` component (8 media mentions grid, data from `MEDIA_MENTIONS` in `home.ts`)
5. **Belief + Mission + Vision** — H2 belief statement, spans for Mission and Vision
6. **How We Do The Work** — 3 pillars: Housing, Health, Hustle (icon cards)
7. **Impact Stat** — "OVER 600+ JUSTICE-INVOLVED STUDENTS..."
8. **Closing CTA** — "BUILD THE FUTURE WITH US" with triple CTA buttons (Host Film, Explore Programs, Contact)

## Hero
- Background: Image_8 (classroom wide shot) at opacity-30
- Eyebrow: "ABOUT"
- H1: "CHANGE THE NARRATIVE. <span class='text-gold'>ECONOMIC EMPOWERMENT.</span>" (gold-styled accent)
- No subtitle — hero contains only the eyebrow and H1

## Founder Component
- Photo: `AaronSpeaking.png` (square aspect ratio)
- Expanded multi-paragraph bio from client document
- Quote: "I didn't just study reentry. I lived it..."
- CTA: "Explore Our Programs" → `/programs`

## Media Mentions (8 total)
1. Good Morning America — "Ex-con spends his days empowering the incarcerated"
2. Chicago Sun-Times — "Making the most of his — and others' second chance"
3. ABC 7 Chicago — "Escaping the Odds podcast tells triumphant stories of entrepreneurs after life in prison"
4. Fox 32 Chicago — "Escape The Odds — featured on Fox 32 Chicago"
5. Crain's Chicago Business — "Ex-offenders in Chicago owning their own companies"
6. AfroTech — "Aaron Smith escaped the odds through podcasting and trucking"
7. CoreCivic — "Escape The Odds box truck program equips returning citizens with career path"
8. Chicago Reader — "Interview with podcaster Aaron Smith: 'Get to the root of the person'"

## Belief / Mission / Vision
- Belief (H2): "OUR WORK IS DRIVEN BY A SIMPLE BELIEF."
- Mission (span, not heading): "OUR MISSION" — empowering justice-impacted individuals
- Vision (span, not heading): "OUR VISION" — national platform for reentry education

## Housing / Health / Hustle Pillars
| Pillar | Icon | Focus |
|--------|------|-------|
| Housing | Home | Housing stability, financial planning, pathways to living situations |
| Health | Heart | Financial wellness, personal discipline, mindset rebuilding |
| Hustle | Briefcase | Employment, entrepreneurship, ownership through education |

## Changes (UI/UX Overhaul - March 2026)
- Complete page rewrite from client's ABOUT-PAGE.md
- Hero image changed from Image_4 → Image_8
- Old sections removed: Impact Image, Stats Grid (300+/15+/200+/8+), MissionSection (3 feature cards), The Story, In The Community
- New sections added: Movement, Belief/Mission/Vision, Housing/Health/Hustle pillars, 600+ impact stat, triple-CTA closing
- Founder component expanded with full backstory
- MediaPress expanded from 4 to 8 mentions (added Fox 32, Crain's Chicago Business, AfroTech, CoreCivic, Chicago Reader; removed WGN and others)
- Fox 32 link corrected from wciu.com to fox32chicago.com

## Last Updated
March 19, 2026
