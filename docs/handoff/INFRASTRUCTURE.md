# Infrastructure & Deployment

## Overview

The Escape The Odds platform is deployed on Google Cloud / Firebase:

| Service | Purpose | Region |
|---------|---------|--------|
| Firebase Hosting | CDN + static asset serving | Global |
| Cloud Functions (2nd Gen) | Next.js SSR handler | us-central1 |
| Cloud SQL | PostgreSQL 15 database | us-central1 |
| Firebase Storage | Media uploads (GCS bucket) — adapter installed but not yet configured | us-central1 |

## Prerequisites

1. **Google Cloud Account** with billing enabled (Blaze plan)
2. **Firebase Project:** `escape-the-odds` (Project ID = GCP Project ID)
3. **gcloud CLI** installed ([Install Guide](https://cloud.google.com/sdk/docs/install))
4. **Firebase CLI** installed: `npm install -g firebase-tools`
5. **Docker** installed (for local PostgreSQL)
6. **Node.js** 22+

## GCP Project Details

| Property | Value |
|----------|-------|
| Project ID | `escape-the-odds` |
| Project Number | `510095706046` |
| Region | `us-central1` |
| Firebase Hosting URL | https://escapetheodds.com |

## Enabled GCP APIs

The following APIs must be enabled (all are currently active):

- Cloud SQL Admin API
- Cloud Functions API
- Cloud Build API
- Cloud Run API
- Artifact Registry API
- Eventarc API
- Pub/Sub API
- Firebase Extensions API
- Cloud Storage API

## Cloud SQL Setup

### Instance Details

| Property | Value |
|----------|-------|
| Instance Name | `esc-the-odds-db` |
| Version | PostgreSQL 15 |
| Tier | `db-f1-micro` |
| Region | `us-central1` |
| Public IP | `34.132.5.5` |
| Database | `esc_the_odds` |
| App User | `eto_app` |

### Create Instance (if starting fresh)

```bash
gcloud services enable sqladmin.googleapis.com

gcloud sql instances create esc-the-odds-db \
  --database-version=POSTGRES_15 \
  --tier=db-f1-micro \
  --region=us-central1 \
  --root-password=<ROOT_PASSWORD>

gcloud sql databases create esc_the_odds --instance=esc-the-odds-db

gcloud sql users create eto_app \
  --instance=esc-the-odds-db \
  --password=<APP_PASSWORD>
```

### Connection String Format

```
postgresql://eto_app:<PASSWORD>@34.132.5.5:5432/esc_the_odds
```

### Network Access

Currently, Cloud SQL allows connections from all IPs (`0.0.0.0/0`) for development convenience. **For production, lock this down:**

```bash
# Remove open access
gcloud sql instances patch esc-the-odds-db --clear-authorized-networks

# Add specific IPs only
gcloud sql instances patch esc-the-odds-db \
  --authorized-networks=<YOUR_IP>/32
```

Consider using Cloud SQL Auth Proxy or Private IP for production.

## Firebase Hosting Setup

### Configuration Files

**`.firebaserc`** — links the project:
```json
{
  "projects": {
    "default": "escape-the-odds"
  }
}
```

**`firebase.json`** — hosting config with web framework support:
```json
{
  "hosting": {
    "source": ".",
    "ignore": [
      "firebase.json",
      "**/.*",
      "!.env",
      "**/node_modules/**"
    ],
    "headers": [ ... ],
    "redirects": [ ... ]
  },
  "storage": {
    "rules": "storage.rules"
  }
}
```

The full file also includes `headers` (cache control for static assets and HTML), `redirects` (six 301 redirects for removed/renamed routes), and a `storage` section referencing `storage.rules`.

The `"source": "."` tells Firebase to detect and build the Next.js framework automatically. The `"!.env"` exception ensures the `.env` file (with server-side secrets like `DATABASE_URI` and `PAYLOAD_SECRET`) is included in the deploy bundle, since `**/.*` would otherwise ignore all dotfiles.

Firebase Web Frameworks must be enabled:

```bash
firebase experiments:enable webframeworks
```

### How Deployment Works

When you run `firebase deploy --only hosting`:

1. Firebase detects Next.js in the project root
2. Runs `next build` locally (requires database access for Payload CMS)
3. Uploads static assets to Firebase Hosting CDN
4. Packages the SSR handler as a Cloud Function (2nd Gen)
5. Deploys the Cloud Function to `us-central1`
6. Configures Firebase Hosting to route dynamic requests to the function

### Deploy Command

```bash
firebase deploy --only hosting --force
```

The `--force` flag auto-configures cleanup policies for container images.

### IAM Permissions

The default compute service account (`510095706046-compute@developer.gserviceaccount.com`) needs these roles:

| Role | Purpose |
|------|---------|
| `roles/cloudbuild.builds.builder` | Build Cloud Functions |
| `roles/artifactregistry.writer` | Push container images |
| `roles/cloudsql.client` | Connect to Cloud SQL at runtime |

Grant them:
```bash
gcloud projects add-iam-policy-binding escape-the-odds \
  --member="serviceAccount:510095706046-compute@developer.gserviceaccount.com" \
  --role="roles/cloudbuild.builds.builder"

gcloud projects add-iam-policy-binding escape-the-odds \
  --member="serviceAccount:510095706046-compute@developer.gserviceaccount.com" \
  --role="roles/artifactregistry.writer"

gcloud projects add-iam-policy-binding escape-the-odds \
  --member="serviceAccount:510095706046-compute@developer.gserviceaccount.com" \
  --role="roles/cloudsql.client"
```

## Environment Variables

### Local Development (`.env`)

```bash
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyAK4Q9nPN3nKMuLYOrOLMe_SYCZjvX91bo
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=escape-the-odds.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=escape-the-odds
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=escape-the-odds.firebasestorage.app
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=510095706046
NEXT_PUBLIC_FIREBASE_APP_ID=1:510095706046:web:9ed93fc331087000335bef
NEXT_PUBLIC_MEASUREMENT_ID=G-M30DCX43YG

NEXT_PUBLIC_APP_URL=http://localhost:3000

DATABASE_URI=postgresql://postgres:postgres@localhost:5432/esc_the_odds
PAYLOAD_SECRET=<your-secret>
GCS_BUCKET=escape-the-odds.firebasestorage.app
GCS_PROJECT_ID=escape-the-odds

# Media (optional — falls back to hardcoded Firebase Storage URL)
NEXT_PUBLIC_TRAILER_VIDEO_URL=
```

A `.env.local.example` file is also provided with sample values pre-filled for local development.

### Production (`.env.production`)

Same Firebase public vars, but with production database and URL:

```bash
NEXT_PUBLIC_APP_URL=https://escapetheodds.com
DATABASE_URI=postgresql://eto_app:<PASSWORD>@34.132.5.5:5432/esc_the_odds
PAYLOAD_SECRET=<production-secret>
GCS_BUCKET=escape-the-odds.firebasestorage.app
GCS_PROJECT_ID=escape-the-odds
```

**Important:** `.env` files are gitignored. New developers must create `.env` locally (see `.env.example` and `.env.local.example` for templates). The `.env` file is required for `firebase deploy` to build correctly — Firebase picks it up via the `"!.env"` exception in `firebase.json`.

**Note:** The contact form uses an embedded GHL (GoHighLevel) form widget via iframe — no `GHL_WEBHOOK_URL` or API key is needed as an environment variable.

**Note:** `NEXT_PUBLIC_TRAILER_VIDEO_URL` is optional. If not set, the app falls back to a hardcoded Firebase Storage URL defined in `src/lib/constants/film.ts`.

### GCS Storage Adapter Status

The `@payloadcms/storage-gcs` package is installed in `package.json`, but it is **not yet configured** in `payload.config.ts` — there is no `plugins` array or `gcsStorage()` call. Currently, the trailer video uses a hardcoded Firebase Storage URL (in `src/lib/constants/film.ts`), and all static images are served from `public/assets/`.

When the adapter is wired up, local development will need GCS authentication:

```bash
gcloud auth application-default login
gcloud auth application-default set-quota-project escape-the-odds
```

On Cloud Functions (2nd Gen), authentication uses the default service account automatically.

## Local Development Setup

1. **Clone and install:**
   ```bash
   git clone <repo-url>
   cd esc-the-odds
   npm install
   ```

2. **Start PostgreSQL:**
   ```bash
   docker compose up -d
   ```

3. **Create `.env`** with the local development values above.

4. **Start dev server:**
   ```bash
   npm run dev
   ```

5. **Seed the database (optional — LOCAL DEVELOPMENT ONLY):**
   ```bash
   npm run seed
   ```
   Creates a local dev admin user and 2 demo blog posts. This is strictly for local development convenience. **Production** uses `admin@escapetheodds.com` with a separately configured password — do not use seed credentials in production.

6. **Or create admin user manually:**
   Visit http://localhost:3000/admin — first user gets admin role.

## Next.js Configuration

Key settings in `next.config.ts`:

```ts
const nextConfig: NextConfig = {
  output: 'standalone',       // Required for Firebase Hosting
  images: {
    unoptimized: true,        // Serves images directly (Firebase compatibility)
    remotePatterns: [          // Allow Next.js Image from these domains
      { protocol: 'https', hostname: 'escape-the-odds.web.app' },
      { protocol: 'https', hostname: 'escapetheodds.com' },
      { protocol: 'https', hostname: 'www.escapetheodds.com' },
    ],
  },
};
```

### CORS (Payload CMS)

`payload.config.ts` includes a `cors` array allowing API access from:
- `https://escape-the-odds.web.app`
- `https://escapetheodds.com`
- `https://www.escapetheodds.com`
- `NEXT_PUBLIC_APP_URL` (falls back to `http://localhost:3000`)

## Payload CMS Configuration

The Payload config is at `payload.config.ts` (project root):

- **Database:** PostgreSQL via `@payloadcms/db-postgres`
- **Storage:** `@payloadcms/storage-gcs` is installed but **not yet configured** — no `plugins` array or `gcsStorage()` call exists in `payload.config.ts`. Media uploads will use Payload's default local storage until the adapter is wired up.
- **Editor:** Lexical rich text editor
- **Collections:** Users, Posts, Media
- **Seed:** Runs on `SEED_DB=true` via `onInit` hook (local development only)

## Monitoring & Logs

```bash
# View Cloud Function logs (SSR handler)
gcloud functions logs read ssrescapetheodds --region=us-central1 --project=escape-the-odds

# View in Firebase Console
# Go to: Firebase Console > Functions > ssrescapetheodds > Logs

# View Cloud SQL logs
gcloud sql instances describe esc-the-odds-db --format="value(state)"
```

## Quick Reference Commands

```bash
# Deploy to Firebase Hosting
firebase deploy --only hosting --force

# Check Cloud SQL status
gcloud sql instances describe esc-the-odds-db --project=escape-the-odds

# Connect to Cloud SQL (if psql installed)
PGPASSWORD='<password>' psql -h 34.132.5.5 -U eto_app -d esc_the_odds

# Firebase project info
firebase projects:list
firebase use

# View deployed site
open https://escapetheodds.com
```

## DNS Cutover Process

After pointing DNS for `escapetheodds.com` to Firebase Hosting:

1. **Update `NEXT_PUBLIC_APP_URL`** to `https://escapetheodds.com` in the production `.env` file.
2. **Redeploy** with `firebase deploy --only hosting --force`.
3. This ensures:
   - `metadataBase` resolves to the production domain (SEO, Open Graph URLs)
   - CORS origins include the production domain (Payload CMS API access)
   - Remote image patterns work with the production domain
4. Verify the admin panel, API routes, and public site all load correctly on the new domain.

## Known Issues / Notes

- **Image Optimization:** Set to `unoptimized: true` in Next.js config because Firebase Hosting's experimental web framework support doesn't reliably handle the `/_next/image` optimization endpoint.
- **Blog build warning:** During `next build`, the blog page logs a "relation posts does not exist" error if the database has no tables yet. This is harmless — Payload creates tables on first `/admin` visit and the blog page has graceful error handling.
- **Node.js 22:** Upgraded from Node.js 20 (which was deprecated 2026-04-30).
- **Cloud SQL open access:** Currently `0.0.0.0/0` is authorized. Lock down for production.

---

**Last Updated:** April 1, 2026
**Status:** Deployed to Firebase Hosting, domain cutover complete, Node.js 22 upgraded
