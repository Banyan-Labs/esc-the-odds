# QA Document: Content & UI/UX Overhaul (March 2026)

## Overview
Comprehensive content and UI/UX update applied across all site pages. This QA document covers global changes and page-specific verification.

## Source Documents
- `docs/BreakdownContentChanges.md` — Original content overhaul
- `docs/UI-UX-Overhaul-Final.md` — UI/UX improvements
- `docs/ClientsComments.md` — Aaron's site review feedback
- `docs/Programs.md` — Vocational pathway content
- `docs/ABOUT-PAGE.md` — About page rewrite
- `docs/Surveys.pdf` — Testimonial survey data

## Pre-Requisites
- `npm run dev` running at http://localhost:3000
- Browser with dev tools for responsive testing

---

## Global Changes

### TC-G1: Navigation Updates
**Steps:**
1. Open any page, inspect Navbar
2. Verify flat nav: HOME, THE FILM EXPERIENCE, PROGRAMS, FOR ORGANIZATIONS, ABOUT, TESTIMONIALS, BLOG, CONTACT
3. Verify NO dropdown menus (Programs is a flat link)
4. Verify desktop CTA button says "HOST THE FILM" → `/contact`

**Expected:** Flat nav, no dropdowns, correct CTA.

### TC-G2: Active Nav Highlighting
**Steps:**
1. Visit `/film` — verify "THE FILM EXPERIENCE" is gold
2. Visit `/programs` — verify "PROGRAMS" is gold
3. Visit `/` — verify "HOME" is gold, TESTIMONIALS is NOT gold
4. Visit `/about` — verify "ABOUT" is gold

**Expected:** Current page highlighted in gold, hash links never highlighted.

### TC-G3: Footer Updates
**Steps:**
1. Scroll to footer on any page
2. Verify "SUPPORT OUR WORK" link is removed
3. Verify links: INSTITUTIONAL PARTNERS, BLOG, CONTACT
4. Verify social links: INSTAGRAM, LINKEDIN

**Expected:** Footer shows only 3 nav links + 2 social links.

### TC-G4: Image Quality
**Steps:**
1. Browse all pages
2. Verify all images display in FULL COLOR (no grayscale filters)
3. Verify image hover shows zoom effect (scale-105)
4. Verify hero backgrounds are faded at ~30% opacity with gradient overlay

**Expected:** Color images throughout, zoom on hover, no grayscale.

### TC-G5: Heading Hierarchy
**Steps:**
1. Use browser dev tools or accessibility checker on each page
2. Verify exactly ONE H1 per page
3. Verify H2s follow H1, H3s nest under H2s
4. Verify no skipped heading levels

**Expected:** Proper heading hierarchy on all pages.

### TC-G6: Eyebrow Consistency
**Steps:**
1. Check all section eyebrow spans across pages
2. Verify all use consistent sizing: `text-2xl md:text-3xl`
3. Verify no eyebrow text duplicates the H1/H2 below it

**Expected:** Uniform eyebrow styling, no text repetition.

### TC-G7: SEO Metadata
**Steps:**
1. View page source for each route
2. Verify unique `<title>` with ` | Escape The Odds` suffix
3. Verify unique `<meta name="description">` on each page
4. Verify Open Graph tags (og:title, og:description, og:image)
5. Verify Twitter card tags

**Expected:** Complete SEO metadata on all pages.

---

## Homepage (`/`)

### TC-H1: Section Order
**Steps:**
1. Visit `/`
2. Verify section order: Hero → TheFilm → AwarenessToImplementation → TheExperience → Ecosystem → Testimonials → TargetAudience → ContactSection → Footer

**Expected:** All sections render in order.

### TC-H2: Hero Carousel
**Steps:**
1. Verify 6 images cycle automatically
2. Verify images are in full color
3. Verify H1: "ESCAPING THE ODDS OF RECIDIVISM"

**Expected:** Working carousel with color images.

### TC-H3: TheExperience
**Steps:**
1. Scroll to section with eyebrow "HOW IT WORKS" and H2 "THE EXPERIENCE"
2. Verify 3 cards: The Mirror, The Inquiry, The Map
3. Verify each card has unique image

**Expected:** 3-card grid with proper eyebrow + heading.

### TC-H4: Ecosystem
**Steps:**
1. Scroll to section with eyebrow "OUR OFFERINGS" and H2 "ENGAGE WITH US"
2. Verify 3 cards: Impact Series (→ /film), Curriculum (→ /contact), Vocational (→ /programs)
3. Verify vocational card shows classroom image (Image_20)

**Expected:** 3-card grid with correct images and links.

### TC-H5: Testimonials
**Steps:**
1. Scroll to "VOICES OF TRANSFORMATION"
2. Verify 6 testimonial quotes in grid
3. Verify names: Carl Christenberry (3), Jondell Hayden Jr. (2), Crossroads Correctional (1)

**Expected:** Real testimonials from survey data.

### TC-H6: No Same-Page Image Reuse
**Steps:**
1. Scroll through entire homepage
2. Verify no image appears in more than one section

**Expected:** All 14 homepage images are unique on the page.

---

## Film Page (`/film`)

### TC-F1: Hero Image
**Steps:**
1. Visit `/film`
2. Verify hero background is Image_17 (certificate handshake), NOT Image_6

**Expected:** Different image from "The Mirror" card below.

### TC-F2: Video Player
**Steps:**
1. Scroll to "The Mirror" section
2. Click play button
3. Verify trailer plays from local video file

**Expected:** Video plays with working controls.

### TC-F3: Experience Cards
**Steps:**
1. Verify 3 cards with unique images (Image_6, Image_11, Image_1)
2. Verify "The Inquiry" card image shows Aaron's face (object-position: center 20%)

**Expected:** All 3 cards visible with properly framed images.

---

## Contact Page (`/contact`)

### TC-C1: Hero
**Steps:**
1. Visit `/contact`
2. Verify eyebrow: "CONTACT", H1: "GET IN TOUCH" (not "CONTACT ESCAPE THE ODDS")

**Expected:** No repeated words between eyebrow and heading.

### TC-C2: Form Fields (11 total)
**Steps:**
1. Count all form fields
2. Verify "Estimated Audience Size" field is present (between Program of Interest and Timeline)
3. Verify all 11 fields: Full Name, Email, Phone, Organization, Title/Role, City/State, Program of Interest, Audience Size, Timeline, Decision-Making Role, Notes

**Expected:** 11 fields including audience size.

### TC-C3: Individual Learners Link
**Steps:**
1. Find Individual Learners block in left column
2. Click "EXPLORE INDIVIDUAL LEARNING"
3. Verify navigates to `/programs#self-paced`

**Expected:** Links to programs page self-paced section (not deleted subpage).

---

## Organizations Page (`/organizations`)

### TC-O1: Hero
**Steps:**
1. Visit `/organizations`
2. Verify eyebrow: "FOR ORGANIZATIONS", H1: "PARTNER WITH US." (not "FOR ORGANIZATIONS")
3. Verify background: Image_24

**Expected:** Deduplicated heading, updated hero image.

### TC-O2: Engagement Model CTAs
**Steps:**
1. Verify each engagement model card has a gold button CTA (not text link)
2. Verify CTAs: "Request Impact Series Consultation", "Inquire About Curriculum Licensing", "Explore Vocational Pathways"

**Expected:** Clear gold button CTAs on all 3 cards.

### TC-O3: Card Images
**Steps:**
1. Verify card images: Image_7 (Film), Image_13 (Curriculum), Image_20 (Vocational)
2. Verify no card image matches the hero background image

**Expected:** Unique images per card, no same-page duplicates.

---

## Programs Page (`/programs`)

### TC-P1: Consolidated Page
**Steps:**
1. Visit `/programs`
2. Verify single page with all content (no subpage links to live-cohort or self-paced)
3. Verify eyebrow: "PROGRAMS", H1: "CLEAR PATHWAYS FORWARD" (not "PROGRAMS")

**Expected:** One consolidated page, deduplicated heading.

### TC-P2: Overview Cards (5)
**Steps:**
1. Verify 5 overview cards: Film Impact, Bounce Forward, Box Truck, Commercial Cleaning, House Hacking
2. Click each card — verify it scrolls to the correct anchor section
3. Verify Box Truck card shows Image_12 (man next to truck)
4. Verify House Hacking image shows full heads (object-position adjusted)

**Expected:** 5 cards with anchor scroll and contextual images.

### TC-P3: Program Detail Sections
**Steps:**
1. Scroll through all 5 program sections
2. Verify each has: eyebrow, H2 title, description, bullet lists, ContactCTAs
3. Verify ContactCTAs appear after every section

**Expected:** Consistent section structure throughout.

### TC-P4: Self-Paced & Books
**Steps:**
1. Scroll to #self-paced section
2. Verify H2: "FLEXIBLE DIGITAL LEARNING"
3. Verify H3: "WORKBOOKS & BOOKS" (not H2)
4. Verify 3 book cards with Amazon links
5. Click each Amazon link — verify correct product page

**Expected:** Books section with working Amazon links, proper heading hierarchy.

### TC-P5: Redirects
**Steps:**
1. Visit `/programs/live-cohort` — verify 301 redirect to `/programs#live-cohort`
2. Visit `/programs/self-paced` — verify 301 redirect to `/programs#self-paced`
3. Visit `/courses` — verify redirect to `/programs`

**Expected:** All legacy URLs redirect properly.

---

## About Page (`/about`)

### TC-A1: Section Order
**Steps:**
1. Visit `/about`
2. Verify sections: Hero → Founder → Movement → MediaPress → Belief/Mission/Vision → Housing/Health/Hustle → Impact → Closing CTA

**Expected:** 8-section page per client's ABOUT-PAGE.md.

### TC-A2: Founder Bio
**Steps:**
1. Verify Founder section has expanded multi-paragraph bio
2. Verify AaronSpeaking.png photo
3. Verify "Explore Our Programs" CTA → `/programs`

**Expected:** Full founder story with CTA.

### TC-A3: Media Mentions
**Steps:**
1. Verify 7 media mentions in grid
2. Click Fox 32 link — verify goes to fox32chicago.com (not wciu.com)
3. Verify new mentions: CoreCivic, WGN News, Chicago Reader

**Expected:** 7 working media links.

### TC-A4: Impact Stat
**Steps:**
1. Scroll to impact section
2. Verify "OVER 600+ JUSTICE-INVOLVED STUDENTS" stat

**Expected:** Updated impact number (not 300+).

---

## Blog Page (`/blog`)

### TC-B1: Blog Grid
**Steps:**
1. Visit `/blog`
2. Verify sr-only H2 "Blog Posts" exists (inspect element)
3. Verify blog cards show full-color images (no grayscale)

**Expected:** Proper heading hierarchy, color images.

---

## Image Audit

### TC-I1: No Same-Page Reuse
**Steps:**
1. Browse each page
2. Verify no image appears twice on the same page

**Expected:** Zero same-page image duplicates.

### TC-I2: Cross-Page Reuse (Intentional)
**Acceptable reuses (same content on different pages):**
- Image_6, Image_11, Image_1: Home TheExperience ↔ Film cards (same documentary episodes)
- Image_7: Home Hero ↔ Organizations card
- Image_13: Programs card ↔ Organizations card
- Image_20: Home Ecosystem ↔ Organizations card
- Image_16: Home Ecosystem ↔ Contact hero
- Image_3: About MediaPress ↔ Blog hero

### Full Image Map

| Image | Location(s) |
|-------|-------------|
| Image_1 | Home TheExperience, Film card |
| Image_2 | Unused (stats infographic) |
| Image_3 | About MediaPress, Blog hero |
| Image_4 | Home Hero carousel |
| Image_5 | Home Hero carousel |
| Image_6 | Home TheExperience, Film card |
| Image_7 | Home Hero carousel, Organizations Film card |
| Image_8 | About hero |
| Image_9 | Home Ecosystem Curriculum card |
| Image_10 | Home Hero carousel |
| Image_11 | Home TheExperience, Film card |
| Image_12 | Programs Box Truck card |
| Image_13 | Programs Film Impact card, Organizations Curriculum card |
| Image_14 | Home TargetAudience |
| Image_15 | Programs hero |
| Image_16 | Home Ecosystem Film card, Contact hero |
| Image_17 | Film hero |
| Image_18 | Programs House Hacking card |
| Image_19 | Home Hero carousel |
| Image_20 | Home Ecosystem Vocational card, Organizations Vocational card |
| Image_21 | Programs Commercial Cleaning card |
| Image_22 | Programs Bounce Forward card |
| Image_23 | Home Testimonials |
| Image_24 | Organizations hero |

---

## Last Updated
March 9, 2026
