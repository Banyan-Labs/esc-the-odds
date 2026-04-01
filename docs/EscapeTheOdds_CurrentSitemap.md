# Escape The Odds — Current Sitemap (As Built)

**Last Updated:** March 5, 2026
**Framework:** Next.js 15 (App Router)
**Route Group:** `(website)` for public pages, `(payload)` for CMS admin

---

## Public Pages (10 total)

### Top-Level Pages

| # | Route | Page | Status |
|---|---|---|---|
| 1 | `/` | **Homepage** | Active |
| 2 | `/about` | **About** | Active |
| 3 | `/film` | **The Film** | Active |
| 4 | `/contact` | **Contact** | Active |
| 5 | `/organizations` | **For Organizations** | Active |

### Programs (Parent + 2 Subpages)

| # | Route | Page | Status |
|---|---|---|---|
| 6 | `/programs` | **Programs Overview** | Active |
| 7 | `/programs/live-cohort` | **Live Cohort Program** (subpage) | Active |
| 8 | `/programs/self-paced` | **Self-Paced Program** (subpage) | Active |

### Blog (Parent + Dynamic)

| # | Route | Page | Status |
|---|---|---|---|
| 9 | `/blog` | **Blog Listing** | Active |
| 10 | `/blog/[slug]` | **Individual Blog Post** (dynamic) | Active |

---

## Admin / CMS

| Route | Page | Status |
|---|---|---|
| `/admin/*` | **Payload CMS Admin Panel** | Active (internal only) |

---

## Site Tree

```
escapetheodds.com
├── / .......................... Homepage
├── /about .................... About
├── /film ..................... The Film
├── /contact .................. Contact
├── /organizations ............ For Organizations
├── /programs ................. Programs Overview
│   ├── /programs/live-cohort . Live Cohort Program
│   └── /programs/self-paced .. Self-Paced Program
├── /blog ..................... Blog Listing
│   └── /blog/[slug] ......... Individual Blog Post
└── /admin/* .................. Payload CMS (internal)
```

---

## Summary

- **5** top-level pages
- **2** subpages under `/programs`
- **1** dynamic route under `/blog`
- **1** CMS admin panel
- **10 public pages total** (not counting individual blog posts)
