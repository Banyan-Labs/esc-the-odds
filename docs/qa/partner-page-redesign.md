# QA — Partner With Us Page Redesign (Ticket #7)

| Field | Value |
|-------|-------|
| Ticket | #7 — Partner With Us Page Redesign |
| Branch | `feat/partner-page-redesign` |
| Date | March 2026 |

## Test Cases

### Organizations Page (`/organizations`)
- [ ] Hero renders with "PARTNER WITH US" label and "SCALE THE IMPACT" heading
- [ ] Subline addresses both organizations and individuals
- [ ] "GET INVOLVED" CTA scrolls to `#pathways`

### Partner Logos (Moved Up)
- [ ] "TRUSTED BY" section appears directly after hero (before pathways)
- [ ] `CommunityPartners.png` image renders full width

### Partnership Pathways (`#pathways`)
- [ ] Two-column layout: Organizations (left, wider) and Individuals (right)
- [ ] Three org pathway cards: Correctional Facilities, Corporate Partners, Government & Public Institutions
- [ ] No references to "Digital Literacy" or "mentorship"
- [ ] Features use updated language: Workforce Development, Entrepreneurship, Financial Empowerment
- [ ] "INQUIRE ABOUT PARTNERSHIP" CTA links to `#inquiry`

### Individual Support (`#individual`)
- [ ] "SUPPORT THE MISSION" section renders on right side
- [ ] Lists what support funds: curriculum, instructor training, media, operations
- [ ] "SUPPORT OUR WORK" CTA links to external Upcurve (opens new tab)
- [ ] Heart icon renders

### For-Profit Transparency
- [ ] "INVESTING IN THE MISSION" section renders
- [ ] States contributions are NOT tax-deductible
- [ ] States ETO is a for-profit social impact organization
- [ ] No duplicate Upcurve CTA in this section

### Inquiry Form (`#inquiry`)
- [ ] Form fields render: First Name, Last Name, Organization Name (Optional), Email, How Would You Like to Get Involved?
- [ ] Organization Name labeled as "(Optional)" for individual inquiries
- [ ] Submit button renders
- [ ] Description mentions both orgs and individuals

### Redirects
- [ ] `/partner` redirects to `/organizations` (server-side)
- [ ] `/support` redirects to `/organizations#individual` (server-side)

### Navigation
- [ ] Navbar "FOR ORGANIZATIONS" links to `/organizations`
- [ ] Footer "INSTITUTIONAL PARTNERS" links to `/organizations`
- [ ] Footer "SUPPORT OUR WORK" links to `/support` (which redirects to `/organizations#individual`)

### Responsive
- [ ] Pathways section stacks on mobile (orgs on top, individuals below)
- [ ] Org pathway cards stack on mobile
- [ ] Inquiry form stacks on mobile
