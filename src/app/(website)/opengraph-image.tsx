import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const runtime = "nodejs";
export const alt = "Escape The Odds — Reentry Education, Documentary & Economic Empowerment";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  const imgPath = join(process.cwd(), "public", "assets", "ScreenGrab-Trailer.png");
  const imgData = await readFile(imgPath);
  const imgBase64 = `data:image/png;base64,${imgData.toString("base64")}`;

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        position: "relative",
      }}
    >
      <img
        src={imgBase64}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    </div>,
    { ...size }
  );
}
