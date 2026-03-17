import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const runtime = "nodejs";
export const alt = "Escape The Odds — Reentry Education, Documentary & Economic Empowerment";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  const logoPath = join(process.cwd(), "public", "assets", "logo-notxt.png");
  const logoData = await readFile(logoPath);
  const logoBase64 = `data:image/png;base64,${logoData.toString("base64")}`;

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#000000",
        padding: "60px",
      }}
    >
      {/* Gold accent line at top */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "4px",
          backgroundColor: "#DFB05A",
        }}
      />

      {/* Logo */}
      <img src={logoBase64} width={120} height={120} style={{ marginBottom: "32px" }} />

      {/* Brand Name */}
      <div
        style={{
          fontSize: "64px",
          fontWeight: 700,
          color: "#FFFFFF",
          letterSpacing: "4px",
          textAlign: "center",
          lineHeight: 1.1,
        }}
      >
        ESCAPE THE ODDS
      </div>

      {/* Divider */}
      <div
        style={{
          width: "80px",
          height: "3px",
          backgroundColor: "#DFB05A",
          margin: "28px 0",
        }}
      />

      {/* Tagline */}
      <div
        style={{
          fontSize: "24px",
          color: "#DFB05A",
          letterSpacing: "6px",
          textAlign: "center",
          textTransform: "uppercase",
        }}
      >
        Reentry Education & Economic Empowerment
      </div>

      {/* Subtitle */}
      <div
        style={{
          fontSize: "18px",
          color: "#F1ECE6",
          opacity: 0.7,
          marginTop: "20px",
          letterSpacing: "2px",
          textAlign: "center",
        }}
      >
        Documentary &bull; Curriculum &bull; Vocational Programs
      </div>

      {/* Gold accent line at bottom */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "4px",
          backgroundColor: "#DFB05A",
        }}
      />
    </div>,
    { ...size }
  );
}
