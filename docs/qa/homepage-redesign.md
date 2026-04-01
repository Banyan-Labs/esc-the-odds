# QA: Homepage Redesign

**Branch:** `feat/homepage-redesign`
**Date:** 2026-02-20

---

## Acceptance Criteria

### Messaging Updates
- [ ] No occurrences of "3-hour intensive" or "3-Hour Intensive"
- [ ] No occurrences of "systems designed to keep you down"
- [ ] No occurrences of "mentorship" on homepage
- [ ] No occurrences of "GET THE CURRICULUM" (replaced with "INQUIRE ABOUT THE CURRICULUM")
- [ ] No occurrences of "lifetime debt" in visible text or meta description
- [ ] "Bounce Forward" language present in Hero, TheExperience, ContactSection
- [ ] "Financial Empowerment" replaces "Financial Literacy" in Ecosystem section
- [ ] Curriculum CTA links to `/contact`

### Navigation
- [ ] Nav links: THE FILM EXPERIENCE, PROGRAMS, FINANCIAL EMPOWERMENT, FOR ORGANIZATIONS, ABOUT, TESTIMONIALS, BLOG, CONTACT
- [ ] Nav hidden below `lg` breakpoint (not `md`)
- [ ] "BOOK A SCREENING" CTA button still present
- [ ] Logo links to `/`

### Footer
- [ ] "PARTNER" → "FOR ORGANIZATIONS"
- [ ] "SUPPORT" → "SUPPORT OUR WORK"

### Testimonials Section
- [ ] New section visible between Curriculum and ProgramDelivery
- [ ] 3-column grid with placeholder cards
- [ ] Section header: "VOICES OF TRANSFORMATION"
- [ ] Framer Motion animations work

### SEO
- [ ] Meta description updated (no "lifetime debt", includes "workforce development" and "financial empowerment")

---

## Pre-Requisites

1. `npm run dev` running at `http://localhost:3000`

---

## Test Cases

### TC-1: Navigation structure
**Steps:**
1. Open `http://localhost:3000`
2. Check the top navigation bar

**Expected:**
- Links read: THE FILM EXPERIENCE | PROGRAMS | FINANCIAL EMPOWERMENT | FOR ORGANIZATIONS | ABOUT | TESTIMONIALS | BLOG | CONTACT
- BOOK A SCREENING button on right
- Nav collapses to hamburger below `lg` breakpoint (~1024px)

---

### TC-2: Hero messaging
**Steps:**
1. View the hero section on homepage

**Expected:**
- Headline: "REWRITE THE NARRATIVE. MASTER THE TRANSITION."
- Subheadline mentions "Bounce Forward", "workforce development", "financial empowerment"
- No "lifetime debt" text visible

---

### TC-3: TheFilm section — no problematic language
**Steps:**
1. Scroll to "THE FILM" section

**Expected:**
- No "systems designed to keep you down" text
- Text mentions "bounce forward"

---

### TC-4: TheExperience section — no time-specific framing
**Steps:**
1. Scroll to "THE EXPERIENCE" section

**Expected:**
- Section label says "THE EXPERIENCE" (not "THE INTENSIVE")
- Description says "facilitated transformation experience" (not "3-Hour Intensive")
- Step 2 says "Bounce Forward" (not "Bounce Back")

---

### TC-5: Curriculum CTA updated
**Steps:**
1. Scroll to "BOUNCE FORWARD PLAN" section
2. Check the CTA button

**Expected:**
- Button text: "INQUIRE ABOUT THE CURRICULUM"
- Button links to `/contact`
- Course points include "Financial Empowerment & Legacy Planning"

---

### TC-6: Ecosystem — financial empowerment
**Steps:**
1. Scroll to "THE ETO ECOSYSTEM" section
2. Check the 4th pillar

**Expected:**
- Subtitle: "FINANCIAL EMPOWERMENT" (not "FINANCIAL LITERACY")
- Description includes "wealth-building strategies"

---

### TC-7: ContactSection — no mentorship
**Steps:**
1. Scroll to "READY TO TAKE ACTION?" section

**Expected:**
- Text says "partnership, program information, or have a question"
- Text says "bounce forward" (not "move forward")
- No mention of "mentorship"

---

### TC-8: Testimonials section
**Steps:**
1. Scroll between Curriculum and ProgramDelivery sections

**Expected:**
- "IMPACT STORIES" label visible
- "VOICES OF TRANSFORMATION" heading
- 3 placeholder testimonial cards
- Cards have Quote icon, placeholder text, name, and role

---

### TC-9: Footer labels
**Steps:**
1. Scroll to footer

**Expected:**
- "FOR ORGANIZATIONS" link (not "PARTNER")
- "SUPPORT OUR WORK" link in gold (not "SUPPORT")

---

### TC-10: SEO metadata
**Steps:**
1. View page source at `http://localhost:3000`

**Expected:**
- Meta description includes "workforce development" and "financial empowerment"
- No "lifetime debt" in meta description
