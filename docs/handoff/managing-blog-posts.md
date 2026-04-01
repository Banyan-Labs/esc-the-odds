# Managing Blog Posts — Client Guide

## Logging In

1. Go to `escapetheodds.com/admin`
2. Enter your email and password
3. Click **Login**

> First time? Ask a developer to create your account or visit `/admin` when the database is fresh to create the first admin user.

- Admin User: admin@escapetheodds.com
- Password: *(provided separately — do not store credentials in documentation)*

---

## Creating a New Post

1. In the admin sidebar, click **Posts**
2. Click **Create New**
3. Fill in the required fields:
   - **Title** — the headline of your post
   - **Slug** — auto-generates from the title if left blank (you can edit it)
   - **Featured Image** — click "Upload" to add a hero image (required)
   - **Excerpt** — a short summary shown on the blog landing page
   - **Content** — write your post using the rich text editor (supports bold, italic, headings, links, lists)
   - **Category** — choose one: Mindset, Business, Courses, or Lifestyle
   - **Author** — select the author from the dropdown

---

## Saving as Draft vs. Publishing

- **Save Draft** — saves the post without making it public. Only visible in the admin panel.
- **Publish** — makes the post live on the website at `/blog`. The published date is set automatically.

To unpublish a post, change its status back to **Draft** and save. The published date will be cleared.

---

## Uploading a Featured Image

1. In the **Featured Image** field, click the upload area
2. Select an image from your computer
3. Enter **Alt Text** — a short description of the image (required, used for accessibility and SEO)
4. The image will appear as the hero on the blog detail page and as the card image on the blog landing page

**Tip:** Use landscape images (16:9 ratio works best) for the best appearance.

---

## SEO Fields (Optional)

Scroll down to the **SEO** section on any post. These fields are optional — if left blank, the post title, excerpt, and featured image are used automatically.

- **Meta Title** — overrides the post title in search engine results and browser tabs
- **Meta Description** — overrides the excerpt in search result snippets
- **OG Image** — overrides the featured image when the post is shared on social media

---

## Editing an Existing Post

1. Go to **Posts** in the sidebar
2. Click on the post you want to edit
3. Make your changes
4. Click **Save Draft** or **Publish**

---

## Deleting a Post

Only admin users can delete posts. Editors can create and edit but not delete.

1. Open the post
2. Click the **Delete** option (available to admins only)

---

## How Deployment Works (High Level)

The website runs on two services:

- **Firebase Hosting** — serves the public website (the pages visitors see)
- **Cloud Functions (2nd Gen)** — runs the CMS admin panel and API

When a developer deploys a new version, both services are updated. Blog posts you create or edit in the admin panel are stored in the database and appear on the live site immediately — no redeployment needed.

**Your content changes are live as soon as you hit Publish.**
