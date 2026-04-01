# QA — Contact Page Redesign (Ticket #8)

| Field | Value |
|-------|-------|
| Ticket | #8 — Contact Page Redesign |
| Branch | `feat/contact-page-redesign` |
| Date | March 2026 |

## Test Cases

### Contact Page (`/contact`)
- [ ] Hero renders with "THE COLLABORATION DESK" / "START THE CONVERSATION"
- [ ] Contact info sidebar: email `admin@escapetheodds.com`, Facilitation Support, Headquarters Chicago

### Form — Base Fields
- [ ] Full Name field renders with placeholder
- [ ] Email Address field renders with placeholder
- [ ] Organization Name (Optional) field renders — NEW
- [ ] Subject dropdown has 6 options: General Inquiry, Curriculum Licensing, Film Screening Request, Partnership Inquiry, Press & Media, Other
- [ ] Message textarea renders
- [ ] "SEND MESSAGE" button renders

### Form — Conditional Institutional Fields
- [ ] Selecting "CURRICULUM LICENSING" reveals institutional fields block
- [ ] Selecting "FILM SCREENING REQUEST" reveals institutional fields block
- [ ] Selecting "GENERAL INQUIRY" hides institutional fields
- [ ] Selecting "PARTNERSHIP INQUIRY" hides institutional fields
- [ ] Selecting "PRESS & MEDIA" hides institutional fields
- [ ] Selecting "OTHER" hides institutional fields
- [ ] Institutional block has gold border and "INSTITUTIONAL DETAILS" label

### Institutional Fields Content
- [ ] Audience Size dropdown: Under 25, 25–50, 50–100, 100–250, 250+
- [ ] Population Served dropdown: Incarcerated Individuals, Reentry / Post-Release, Workforce Development, Youth / Juvenile, Other
- [ ] Enrollment Model dropdown: Live Cohort (Facilitated), Self-Paced (When Available), Not Sure
- [ ] Budget Range dropdown: Under $5,000, $5,000–$10,000, $10,000–$25,000, $25,000+, Discuss on Call

### ContactSection Component
- [ ] Email link uses `admin@escapetheodds.com` (not `contact@`)

### Responsive
- [ ] Form and sidebar stack on mobile
- [ ] Institutional fields grid stacks on mobile
- [ ] All dropdowns are usable on mobile
