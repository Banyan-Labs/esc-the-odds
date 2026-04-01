# QA: About Page Redesign

**Ticket:** #4 — About Page Redesign
**Branch:** `feat/about-page-redesign`
**Date:** 2026-02-20

---

## Acceptance Criteria

### Messaging Updates
- [ ] No occurrences of "systemic cycle" or "systemic barriers"
- [ ] No occurrences of "digital literacy" or "digital mastery"
- [ ] No occurrences of "mentorship" on About page
- [ ] No occurrences of "written off"
- [ ] No occurrences of "The debt ends here"
- [ ] "Bounce Forward" language present in hero and MissionSection
- [ ] "Workforce Development" replaces "Digital Literacy" in story section
- [ ] "Financial Empowerment" replaces "Financial Wealth" in story section

### Page Structure
- [ ] Hero → Stats → MissionSection → Story → FounderSection → MediaPress → Footer
- [ ] MissionSection renders with 3 feature cards
- [ ] MediaPress placeholder section visible

### Components
- [ ] FounderSection pull quote updated to "The blueprint starts here."
- [ ] MissionSection cards updated (no digital mastery, no mentorship)

---

## Pre-Requisites

1. `npm run dev` running at `http://localhost:3000`

---

## Test Cases

### TC-1: About page hero
**Steps:**
1. Navigate to `http://localhost:3000/about`

**Expected:**
- Headline: "ARCHITECTING THE BOUNCE FORWARD."
- Quote mentions "incarceration to independence" (not "written off")

---

### TC-2: Stats section
**Steps:**
1. Scroll to stats section

**Expected:**
- 4 stats: Lives Impacted (1,000+), Facilities Partnered (15+), Course Graduates (450+), Programs Delivered (20+)

---

### TC-3: MissionSection renders
**Steps:**
1. Scroll past stats section

**Expected:**
- "OUR MISSION" label, "Rewrite the Narrative" heading
- Subheadline says "bounce forward" (not "systemic barriers")
- Card 2 mentions "financial empowerment" and "workforce development" (not "digital mastery")
- Card 3 mentions "peer support and accountability" (not "mentorship")

---

### TC-4: Story section — no problematic language
**Steps:**
1. Scroll to "THE ORIGIN" section

**Expected:**
- Headline: "BUILDING THE BLUEPRINT." (not "BREAKING THE SYSTEMIC CYCLE.")
- Body mentions "surface-level support" (not "bandage")
- Left callout: "WORKFORCE DEVELOPMENT" (not "DIGITAL LITERACY")
- Right callout: "FINANCIAL EMPOWERMENT" (not "FINANCIAL WEALTH")

---

### TC-5: FounderSection pull quote
**Steps:**
1. Scroll to Aaron Smith / Founder section

**Expected:**
- Pull quote ends with "The blueprint starts here." (not "The debt ends here.")

---

### TC-6: MediaPress placeholder
**Steps:**
1. Scroll below FounderSection

**Expected:**
- "IN THE MEDIA" label
- "PRESS & COVERAGE" heading
- 3 placeholder cards with "Featured coverage coming soon."

---

### TC-7: No removed terms anywhere on page
**Steps:**
1. Use browser Find (Ctrl+F) on `/about` page
2. Search for: "systemic", "digital literacy", "digital mastery", "mentorship", "written off", "debt ends"

**Expected:**
- Zero results for all searches
