# QA — Course Page Redesign (Ticket #5)

| Field | Value |
|-------|-------|
| Ticket | #5 — Course Page Redesign |
| Branch | `feat/course-page-redesign` |
| Date | March 2026 |

## Test Cases

### Programs Landing Page (`/programs`)
- [ ] Hero renders with "OUR PROGRAMS" label and "STRUCTURED PATHWAYS TO TRANSFORMATION" heading
- [ ] Key message section displays film/curriculum quote with "INQUIRE ABOUT THE CURRICULUM" CTA → `/contact`
- [ ] Two primary programs render: Live Cohort (active) and Self-Paced (coming soon)
- [ ] Live Cohort card has "LEARN MORE" link → `/programs/live-cohort`
- [ ] Self-Paced card shows "COMING SOON" as muted text (not a link)
- [ ] Self-Paced card image is grayscale with reduced opacity
- [ ] Three additional offerings render: Trucking, Real Estate, Commercial Cleaning
- [ ] Trucking "ACCESS COURSE" → external GoHighLevel link (opens in new tab)
- [ ] Real Estate "GET THE BOOK" → external Amazon link (opens in new tab)
- [ ] Commercial Cleaning shows "COMING SOON" as muted text
- [ ] All Framer Motion animations trigger on scroll
- [ ] Navbar and Footer render correctly

### Live Cohort Detail Page (`/programs/live-cohort`)
- [ ] Hero renders with "LIVE COHORT PROGRAM" label and "5-WEEK FACILITATED TRANSFORMATION" heading
- [ ] "What's Included" section shows 4 items: Film Experience, Discussion, Workbook, Accountability
- [ ] "How It Works" section shows Delivery, Institutional Ready, Film Included details
- [ ] "Who It's For" grid shows 6 audience types including Government Reentry Departments
- [ ] CTA button "INQUIRE ABOUT THIS PROGRAM" → `/contact`

### Self-Paced Page (`/programs/self-paced`)
- [ ] Hero shows "SELF-PACED DIGITAL PROGRAM" label and "COMING SOON" heading
- [ ] 4 feature cards render: Independent Learning, Institutional License, Curriculum Included, Scalable
- [ ] CTA "CONTACT US FOR UPDATES" → `/contact`

### Redirect
- [ ] `/courses` redirects to `/programs` (server-side redirect)

### Ecosystem Component
- [ ] Curriculum pillar links to `/programs` (not `/courses`)
- [ ] Curriculum pillar title reads "DEVELOPMENT" (not "MASTERY")

### Navigation
- [ ] Programs dropdown links to `/programs`
- [ ] "LIVE COHORT" dropdown link → `/programs/live-cohort`
- [ ] "SELF-PACED (COMING SOON)" dropdown item → `#` (no navigation)

### Responsive
- [ ] Programs landing page: cards stack on mobile, side-by-side on desktop
- [ ] Live Cohort: "What's Included" grid stacks on mobile
- [ ] Live Cohort: "How It Works" layout stacks on mobile
- [ ] Self-Paced: feature grid stacks on mobile
