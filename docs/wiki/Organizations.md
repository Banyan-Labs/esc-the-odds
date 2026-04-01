# Organizations Page

## Overview
The organizations page (`/organizations`) targets institutional and corporate partners with structured engagement models for reentry education.

## Routes

| Route | Purpose |
|-------|---------|
| `/organizations` | Main organizations page |
| `/partner` | Redirects to `/organizations` |
| `/support` | Redirects to `/organizations` |

## Key Files
- `src/app/(website)/organizations/page.tsx` — Organizations page (client component)
- `src/app/(website)/organizations/layout.tsx` — SEO metadata

## Page Sections
```
Hero (eyebrow "FOR ORGANIZATIONS", H1 "PARTNER WITH US." — Image_24 background)
Intro paragraph
Engagement Models (3 horizontal cards with images)
Who We Work With (tag chips + CommunityPartners.png)
Next Step CTA (single button)
```

### Hero
- Background: Image_24 (certificate handshake) at opacity-30
- Eyebrow: "FOR ORGANIZATIONS"
- H1: "PARTNER WITH US." (gold accent on "US.")
- Subtitle: "Structured Reentry Education. Institutional Implementation."

## Engagement Models

### 1. Impact Series (Film icon)
- **Image:** `IMG_1826.JPG` (behind the scenes documentary filming through camera lens)
- Title: Escape The Odds of Recidivism Film - Impact Series
- Includes: Full 85-minute screening, Moderated dialogue + Q&A, 50 Bounce Forward workbooks
- CTA: "Request Impact Series Consultation" → `/contact` (gold button)

### 2. Curriculum License (BookOpen icon)
- **Image:** `IMG_1832.JPG` (men in blue sitting during Bounce Forward curriculum session)
- Title: Bounce Forward Plan: Mastering Your Reentry - Curriculum License
- Label: "License includes:"
- Includes: Documentary integration, Participant workbooks, Facilitation guides, SME toolkit, Evaluation framework
- Note: For DOC, county jails, community corrections, reentry organizations
- CTA: "Inquire About Curriculum Licensing" → `/contact` (gold button)

### 3. Vocational Programs (Briefcase icon)
- **Image:** `IMG_8892.png` (Aaron standing with men in green holding certificates)
- Title: Vocational & Economic Empowerment Programs
- Label: "Programs include:"
- Includes: Non-CDL Box Truck Entrepreneurship, Commercial Cleaning Business Program, House Hacking & Real Estate Fundamentals, **Financial Empowerment** (4 items total)
- Note: Available for in-facility or community-based implementation (virtual/live/tablet options as applicable)
- CTA: "Explore Vocational Pathways" → `/programs` (gold button)

## Who We Work With
Tag chips: Correctional Systems, Workforce Development Boards, Employers & HR Teams, Reentry Organizations, Foundations, Libraries & Educational Institutions

**Community Partners Banner:** "AS SEEN IN" label + `CommunityPartners.png` (full-width)

**Community Partner Links:** Below the banner image, clickable partner name links are rendered from the `COMMUNITY_PARTNERS` array in `src/lib/constants/organizations.ts` (26 partners). Each opens in a new tab.

## Next Step CTA
- Heading: "STRUCTURED ENGAGEMENT BEGINS WITH ALIGNMENT."
- Single button: "PARTNER WITH US" (gold, with arrow) → `/contact`

## Removed (Content Overhaul - March 2026)
- Partner logos section (replaced by CommunityPartners.png under "Who We Work With")
- Individual supporter section with Upcurve CTA
- For-profit transparency/legal disclaimer
- Partnership inquiry form
- Gallery section
- "Support Our Work" removed from footer

## Changes (UI/UX Overhaul - March 2026)
- Hero image: Image_7 → Image_24, H1: "FOR ORGANIZATIONS." → "PARTNER WITH US."
- Card images updated: Image_4 → IMG_1826.JPG, Image_12 → IMG_1832.JPG, Image_20 → IMG_8892.png
- CTAs changed from text links to gold buttons
- Grayscale removed from all images

## Last Updated
March 9, 2026
