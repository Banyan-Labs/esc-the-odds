# Escape The Odds — Platform Cheat Sheet

*Quick reference for site owners and non-technical team members.*

---

## Your Website at a Glance

| What | Where |
|------|-------|
| Live Website | https://escapetheodds.com |
| Admin Panel (CMS) | https://escapetheodds.com/admin |
| Admin Login | admin@escapetheodds.com *(password provided separately)* |
| Courses Platform | Managed in GoHighLevel (courses.escapetheodds.com) |

---

## Site Pages

| Page | URL | What It Is |
|------|-----|------------|
| Home | `/` | Hero, film preview, experience cards, ecosystem, testimonials, audience info, contact CTA |
| The Film | `/film` | Documentary trailer, experience cards, "Host the Film" CTA |
| Programs | `/programs` | 6 program cards (Film Impact, Bounce Forward, Box Truck, Commercial Cleaning, House Hacking, Self-Paced Digital Course). 3 cards link to Amazon books. |
| For Organizations | `/organizations` | Engagement models, who you work with, consultation CTA |
| About | `/about` | Movement story, founder bio, media mentions, Housing/Health/Hustle pillars |
| Testimonials | `/#testimonials` | Scrolls to testimonials section on homepage |
| The Blueprint (Blog) | `/blog` | Blog posts managed through the admin panel |
| Contact | `/contact` | Embedded GoHighLevel inquiry form |

---

## Managing Blog Posts (The Blueprint)

1. **Log in** at `escapetheodds.com/admin`
2. Click **Posts** in the sidebar
3. Click **Create New**
4. Fill in:
   - **Title** — your headline
   - **Featured Image** — upload a landscape (wide) image for best results
   - **Excerpt** — short summary shown on the blog landing page
   - **Content** — write using the rich text editor (bold, italic, headings, links, lists)
   - **Category** — Mindset, Business, Courses, or Lifestyle
   - **Author** — select from dropdown
5. Click **Publish** to go live, or **Save Draft** to save without publishing

**Your changes go live immediately when you hit Publish. No developer needed.**

To edit an existing post: click on it from the Posts list, make changes, and save.

---

## External Services

| Service | What It Does | Who Manages It |
|---------|-------------|----------------|
| **GoHighLevel (GHL)** | Powers the contact form on the website, the courses platform, and CRM | GHL developer / admin |
| **Amazon** | 3 book purchase links on the Programs page | Links go directly to Amazon product pages |
| **Firebase / Google Cloud** | Hosts the website, database, and video files | Developer |

### GoHighLevel Details
- **Contact form:** Embedded on the `/contact` page — submissions go to your GHL account
- **Courses:** Self-paced learning at `courses.escapetheodds.com` — managed entirely in GHL
- Button text and consent language have been updated

---

## What You Can Do Without a Developer

| Task | How |
|------|-----|
| Create / edit / delete blog posts | Admin panel (`/admin` > Posts) |
| Upload images for blog posts | Admin panel (upload during post creation) |
| Publish or unpublish posts | Change status in admin panel |
| View contact form submissions | GoHighLevel dashboard |
| Manage courses | GoHighLevel (courses.escapetheodds.com) |
| Update book links | Requires a developer (links are in code) |

---

## What Requires a Developer

| Task | Why |
|------|-----|
| Change page text or layout | Content is in code, not the CMS (except blog posts) |
| Add new pages | Requires code changes and deployment |
| Update program cards or book links | These are coded, not CMS-managed |
| Domain cutover (`escapetheodds.com`) | DNS changes + config update + redeploy |
| Update the contact form appearance | Form is managed in GoHighLevel |
| Deploy code changes | Uses Firebase CLI |

---

## Design & Brand

| Element | Value |
|---------|-------|
| Gold | `#DFB05A` |
| Cream | `#F1ECE6` |
| Charcoal | `#323131` |
| Black | `#000000` |
| Heading Font | Anton (bold, uppercase) |
| Body Font | Inter (clean, light) |
| Icons | Lucide (open source icon set) |

---

## Pending Action Items

- [x] **Domain cutover** — `escapetheodds.com` is live
- [x] **GHL form updates** — Button text and consent language updated
- [ ] **Wix email export** — Export contact list from Wix admin before shutting it down
- [ ] **Database security** — Developer needs to restrict database access for production
- [x] **Node.js upgrade** — Upgraded to Node.js 22 (deployed March 23, 2026)

---

## Key Contacts & Access

| System | How to Access |
|--------|---------------|
| Website Admin Panel | `escapetheodds.com/admin` — email + password login |
| GoHighLevel (CRM, Forms, Courses) | Log in through your GHL account |
| Firebase Console | https://console.firebase.google.com/project/escape-the-odds |
| Google Cloud Console | https://console.cloud.google.com/project/escape-the-odds |

---

## Quick Answers

**Q: How do I add a new blog post?**
Log into `/admin`, click Posts, click Create New, fill in the fields, and hit Publish. It's live instantly.

**Q: Can I change the text on a page (not the blog)?**
Not directly — page content is built into the code. Contact your developer to make text changes.

**Q: Where do contact form submissions go?**
They go to your GoHighLevel account. Check your GHL dashboard for new inquiries.

**Q: What happens if the site goes down?**
The site is hosted on Google/Firebase infrastructure, which is very reliable. If there's an issue, contact your developer. They can check logs in the Firebase Console.

**Q: Can someone else manage the blog?**
Yes — create a new user in the admin panel. Editors can create and edit posts. Only admins can delete posts.

---

*Last Updated: March 23, 2026*
