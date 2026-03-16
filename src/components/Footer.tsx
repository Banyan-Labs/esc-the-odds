"use client";

import Image from "next/image";
import Link from "next/link";
import { FOOTER_LINKS, SOCIAL_LINKS } from "@/lib/constants/navigation";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-black py-20 text-sm">
      <div className="container mx-auto flex flex-col items-center justify-between gap-12 px-4 md:flex-row md:px-6">
        <div className="flex flex-col items-center gap-4 md:items-start">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/assets/logo-notxt.png"
              alt="Escape The Odds logo"
              width={40}
              height={40}
              className="h-10 w-10"
            />
            <span className="font-heading text-3xl tracking-tighter text-white">
              ESCAPE THE <span className="text-gold">ODDS.</span>
            </span>
          </Link>
          <p className="text-cream/90 font-sans tracking-widest uppercase">
            © {new Date().getFullYear()} ALL RIGHTS RESERVED.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-4 md:gap-x-8">
          {FOOTER_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-heading text-cream/90 tracking-[0.2em] transition-colors hover:text-white"
            >
              {link.name}
            </Link>
          ))}

          <div className="flex items-center gap-6">
            <span className="font-heading text-cream/60 tracking-[0.2em]">|</span>
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Follow Escape The Odds on ${social.name}`}
                className="font-heading text-cream/90 hover:text-gold tracking-[0.2em] transition-colors"
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
