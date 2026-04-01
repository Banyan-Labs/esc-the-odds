# Media & Assets: Firebase Storage (GCS)

## Overview

Media uploads (images, videos) from Payload CMS are stored in **Firebase Storage** (backed by Google Cloud Storage). The Payload CMS `@payloadcms/storage-gcs` adapter handles all uploads.

## Storage Details

| Property | Value |
|----------|-------|
| Bucket | `escape-the-odds.firebasestorage.app` |
| Region | `us-central1` |
| Adapter | `@payloadcms/storage-gcs` |
| Collection | `media` |

## Configuration

The `@payloadcms/storage-gcs` adapter package is installed but **not yet configured** in `payload.config.ts`. Currently, Payload uses its default local file storage for media uploads. To enable GCS storage in the future, add the following to the Payload config's `plugins` array:

```ts
// Planned — not yet wired up in payload.config.ts
import { gcsStorage } from '@payloadcms/storage-gcs';

plugins: [
  gcsStorage({
    collections: { media: true },
    bucket: process.env.GCS_BUCKET,
    options: {
      projectId: process.env.GCS_PROJECT_ID,
    },
  }),
]
```

## Environment Variables

```bash
GCS_BUCKET=escape-the-odds.firebasestorage.app
GCS_PROJECT_ID=escape-the-odds
```

These are set in `.env` (local) and included in Firebase deploys via the `"!.env"` exception in `firebase.json`.

## Authentication

### Local Development
Use Application Default Credentials (ADC):

```bash
gcloud auth application-default login
gcloud auth application-default set-quota-project escape-the-odds
```

### Production (Cloud Functions / Cloud Run)
Authentication uses the default compute service account automatically — no service account key file needed.

## Static Assets

24 photos are stored in `public/assets/` (Image_1.jpeg through Image_24.jpeg) plus supporting assets (logo, trailer video, screenshots). These are served directly by Firebase Hosting CDN, not through GCS.

Key static assets:
- `public/assets/logo-notxt.png` — Logo (used in OG image, hero, CTAs)
- `public/assets/ETO Doc Trailer_FINAL_Cta End Card.mp4` — Documentary trailer (local backup copy; the site streams from Firebase Storage via `TRAILER_VIDEO_URL` — see below)
- `public/assets/ScreenGrab-Trailer.png` — Trailer screenshot (film page hero)
- `public/assets/carousel/COOKCOUNTY-SHERIFF-PIC.png` — Hero carousel image

## CORS (Optional)

If cross-origin image loading issues occur, configure CORS on the GCS bucket:

```bash
# Create cors.json
cat > cors.json << 'EOF'
[
  {
    "origin": ["https://escape-the-odds.web.app", "https://escapetheodds.com", "https://www.escapetheodds.com"],
    "method": ["GET"],
    "maxAgeSeconds": 3600
  }
]
EOF

gsutil cors set cors.json gs://escape-the-odds.firebasestorage.app
```

## Trailer Video

The documentary trailer is served from Firebase Storage, **not** the local `public/assets/` copy. The URL is defined in `src/lib/constants/film.ts`:

```ts
export const TRAILER_VIDEO_URL =
  process.env.NEXT_PUBLIC_TRAILER_VIDEO_URL ||
  "https://firebasestorage.googleapis.com/v0/b/escape-the-odds.firebasestorage.app/o/media%2FETO%20Doc%20Trailer_FINAL_Cta%20End%20Card.mp4?alt=media";
```

The local file at `public/assets/ETO Doc Trailer_FINAL_Cta End Card.mp4` is kept as a backup copy only.

## Next.js Image Configuration

`next.config.ts` includes:
- `images.unoptimized: true` — Firebase Hosting compatibility
- `remotePatterns` for `escape-the-odds.web.app`, `escapetheodds.com`, `www.escapetheodds.com`

---

**Last Updated:** March 17, 2026
