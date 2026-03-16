import type { Metadata } from "next";
import { Anton, Inter } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { OrganizationSchema } from "@/components/SEO/OrganizationSchema";
import "./globals.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Escape The Odds | Reentry Education, Documentary & Economic Empowerment",
    template: "%s | Escape The Odds",
  },
  description:
    "Escape The Odds empowers justice impacted individuals through documentary storytelling, the Bounce Forward reentry curriculum, and vocational entrepreneurship programs. Over 600 students served across 10+ states.",
  keywords: [
    "reentry education",
    "recidivism reduction",
    "Bounce Forward Plan",
    "reentry curriculum",
    "Aaron Smith",
    "Escape The Odds",
    "justice impacted",
    "box truck entrepreneurship",
    "reentry documentary",
    "workforce development",
    "second chance employers",
  ],
  metadataBase: new URL("https://escapetheodds.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Escape The Odds",
    title: "Escape The Odds | Reentry Education, Documentary & Economic Empowerment",
    description:
      "Empowering justice impacted individuals through documentary storytelling, structured reentry curriculum, and vocational entrepreneurship programs.",
    url: "https://escapetheodds.com",
    images: [
      {
        url: "/assets/COOKCOUNTY-SHERIFF-PIC.png",
        width: 1200,
        height: 630,
        alt: "Escape The Odds",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Escape The Odds | Reentry Education & Economic Empowerment",
    description:
      "Empowering justice impacted individuals through documentary storytelling, reentry curriculum, and vocational programs.",
    images: ["/assets/COOKCOUNTY-SHERIFF-PIC.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${anton.variable} ${inter.variable} antialiased`}>
        <OrganizationSchema />
        <main className="text-cream selection:bg-gold min-h-screen bg-black selection:text-black">
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
