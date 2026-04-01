# QA — Combine Documentary & Film Screening Pages (Ticket #6)

| Field | Value |
|-------|-------|
| Ticket | #6 — Combine Documentary & Film Screening Pages |
| Branch | `feat/combine-film-pages` |
| Date | March 2026 |

## Test Cases

### Unified Film Page (`/film`)
- [ ] Full-screen cinematic hero renders with "ESCAPE THE ODDS" heading
- [ ] Tagline reads "incarceration, reentry, and the individuals who found the courage to bounce forward" (no "systems designed to keep you down")
- [ ] "WATCH TRAILER" and "BOOK A SCREENING" CTAs render
- [ ] "BOOK A SCREENING" scrolls to `#booking` anchor
- [ ] Scroll indicator animates at bottom of hero
- [ ] Narrative & Impact section shows stats: 94% engagement, 60+ hours footage
- [ ] Video preview with play button renders and hover effects work

### The Experience Section (Curriculum Integration)
- [ ] Heading reads "MORE THAN A SCREENING"
- [ ] Key message: "The film is not a standalone screening — it is part of a structured, facilitated transformation experience"
- [ ] Three pillars render: THE FILM (The Mirror), DISCUSSION (The Inquiry), IMPLEMENTATION (The Map)
- [ ] "EXPLORE OUR PROGRAMS" CTA links to `/programs`
- [ ] Hover effects on pillar cards work (gold icon fill)

### Screening Schedule
- [ ] Three screenings render: Chicago, LA, NY
- [ ] Hover effects on screening rows work
- [ ] MapPin and Ticket icons render

### Institutional Booking (`#booking`)
- [ ] Heading reads "BRING THE EXPERIENCE" (not "BRING THE INTENSIVE")
- [ ] Description says "facilitated film experience" (no "3-hour intensive")
- [ ] Bullet reads "On-site facilitated screening" (not "facilitate")
- [ ] Form fields render: First Name, Last Name, Facility Name, Work Email, Screening Details
- [ ] Submit button reads "RESERVE DATE"

### Redirect
- [ ] `/documentary` redirects to `/film` (server-side)

### Navigation
- [ ] "THE FILM EXPERIENCE" nav link points to `/film`
- [ ] "BOOK A SCREENING" button points to `/film#booking` (not `/documentary#booking`)

### Cleanup
- [ ] `DocumentarySection.tsx` has been removed
- [ ] No imports of `DocumentarySection` remain in codebase

### Responsive
- [ ] Hero stacks vertically on mobile
- [ ] Narrative section stacks on mobile
- [ ] Experience pillars stack on mobile
- [ ] Screening rows stack on mobile
- [ ] Booking form stacks on mobile
