import type { Metadata } from "next";
import { Anton, Inter } from "next/font/google";
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
  title: "The Film & The Framework | Escape The Odds",
  description:
    "Evidence-based reentry and recidivism reduction through the Bounce Forward Plan. Empowering transformation through lived experience, workforce development, and financial empowerment.",
  keywords: [
    "Evidence-based reentry",
    "recidivism reduction",
    "Bounce Forward Plan",
    "Aaron Smith",
    "Escape The Odds",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${anton.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
