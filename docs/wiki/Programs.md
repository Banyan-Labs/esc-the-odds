# Programs Page

## Overview
The programs page (`/programs`) is a single consolidated page presenting all 6 ETO programs with anchor-scroll navigation, plus a self-paced section.

## Routes

| Route | Status |
|-------|--------|
| `/programs` | Active — consolidated programs page |
| `/programs/live-cohort` | 301 redirect → `/programs#live-cohort` (via firebase.json) |
| `/programs/self-paced` | 301 redirect → `/programs#self-paced` (via firebase.json) |
| `/courses` | 301 redirect → `/programs` (Firebase Hosting, via `firebase.json`) |

## Key Files
- `src/app/(website)/programs/page.tsx` — Full programs page (client component)
- `src/app/(website)/programs/layout.tsx` — SEO metadata
- `src/lib/constants/programs.ts` — Program cards and book data
- `src/components/programs/` — Section components

## Page Structure
```
Hero (eyebrow "PROGRAMS", H1 "CLEAR PATHWAYS FORWARD")
Intro paragraph
Program Overview Cards (6 cards in 2 rows of 3)
Film Impact Series section (#film-impact)
Bounce Forward Curriculum section (#bounce-forward)
Vocational Pathways header
Box Truck Entrepreneurship section (#box-truck)
Commercial Cleaning section (#commercial-cleaning)
House Hacking & Real Estate section (#house-hacking)
Self-Paced section (#self-paced) — Non-CDL Box Truck only
```

## Program Overview Cards (6)

### Row 1
| Card | Image | Anchor | CTA |
|------|-------|--------|-----|
| Film Impact Series | Image_7 | #film-impact | ENROLL YOUR ORGANIZATION |
| Commercial Cleaning | Image_5 | #commercial-cleaning | ENROLL YOUR ORGANIZATION |
| Self Paced Learning | IMG_1828 | #self-paced | EXPLORE THE COURSE (external → GHL) |

### Row 2 (all have "ORDER THE BOOK" buttons)
| Card | Image | Anchor | CTA | Book URL |
|------|-------|--------|-----|----------|
| Bounce Forward Curriculum | Mockup | #bounce-forward | INQUIRE ABOUT CURRICULUM | amazon.com/dp/B0GMP7Z9P9 |
| Box Truck Entrepreneurship | Image_12 | #box-truck | ENROLL YOUR ORGANIZATION | a.co/d/09Ajq8UA |
| House Hacking & Real Estate | Image_18 | #house-hacking | ENROLL YOUR ORGANIZATION | a.co/d/0g3BeD8W |

Cards with `bookUrl` show a third gold-outlined "ORDER THE BOOK" button with ShoppingCart icon.

The Self Paced card links externally to `https://courses.escapetheodds.com/home` instead of `/contact`.

## Program Detail Sections

Each program section follows a consistent pattern:
- Eyebrow span + H2 title
- Description paragraph
- H3 subsections: "WHAT IT IS", "WHAT'S INCLUDED", "DESIGNED FOR" (or equivalent)
- `BulletList` and `TagList` helper components
- `ContactCTAs` component after each section

### 1. Film Impact Series
- CTA: "ENROLL YOUR ORGANIZATION" → /contact
- Up to 3.5-hour structured documentary + dialogue experience
- Includes 50 Bounce Forward workbooks
- Designed for: correctional facilities, government agencies, career development boards, etc.

### 2. Bounce Forward Plan Curriculum
- CTA: "INQUIRE ABOUT THE CURRICULUM" → /contact
- Book: "ORDER THE WORKBOOK" → Amazon
- 15-session institutional-ready reentry education framework

### 3. Box Truck Entrepreneurship
- CTA: "ENROLL IN BOX TRUCK PROGRAM" → /contact
- Book: "ORDER THE BOOK" → Amazon
- Non-CDL transportation business program

### 4. Commercial Cleaning
- CTA: "ENROLL IN COMMERCIAL CLEANING" → /contact
- Commercial cleaning business development program

### 5. House Hacking & Real Estate
- CTA: "ENROLL IN HOUSE HACKING" → /contact
- Book: "ORDER THE BOOK" → Amazon
- Housing stability and real estate fundamentals

## Self-Paced Section
- H2: "DIGITAL LEARNING"
- Only references the **Non-CDL Box Truck self-paced course**
- Single CTA: "EXPLORE THE SELF PACED COURSE" → `https://courses.escapetheodds.com/home` (external)
- No books grid — simplified to just the one digital course

## Helper Components
- `BulletList` — Renders bullet items with gold dots
- `TagList` — Renders inline tag chips with gold borders
- `ContactCTAs` — CTA button (gold primary with arrow)
- `ProgramOverview` — 6-card grid with conditional book/external buttons

## Last Updated
March 16, 2026
