"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="py-20 bg-black border-t border-white/5 text-xs">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="flex flex-col items-center md:items-start gap-4">
          <span className="text-3xl font-heading text-white tracking-tighter">
            ESCAPE THE <span className="text-gold">ODDS.</span>
          </span>
          <p className="text-cream/50 font-sans tracking-widest uppercase">
            © {new Date().getFullYear()} ALL RIGHTS RESERVED.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          {[
            { name: "INSTITUTIONAL PARTNERS", href: "/organizations" },
            { name: "SUPPORT OUR WORK", href: "/support", color: "text-gold" },
            { name: "BLOG", href: "/blog" },
            { name: "PRIVACY", href: "/privacy" },
            { name: "TERMS", href: "/terms" },
            { name: "SOCIALS", href: "/social" },
          ].map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`font-heading tracking-[0.2em] transition-colors hover:text-white ${
                link.color || "text-cream/70"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
