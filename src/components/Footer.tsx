"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="py-12 bg-black border-t border-white/10 text-sm text-gray-500">
      <div className="container px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="text-lg font-bold text-white tracking-tight">
            ETO
          </span>
          <p>
            © {new Date().getFullYear()} Escape the Odds. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-8">
          <Link
            href="https://upcurve.life/YOUR_CAMPAIGN_ID"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-bold hover:text-primary/80 transition-colors"
          >
            Donate
          </Link>
          <Link
            href="/privacy"
            className="hover:text-foreground transition-colors"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className="hover:text-foreground transition-colors"
          >
            Terms of Service
          </Link>
          <Link
            href="/social"
            className="hover:text-foreground transition-colors"
          >
            Socials
          </Link>
        </div>
      </div>
    </footer>
  );
}
