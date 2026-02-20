"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/80 border-b border-white/5">
      <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/assets/logo-notxt.png"
            alt="Escape the Odds"
            width={60}
            height={60}
            className="h-14 w-auto object-contain"
            priority
          />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {[
            { name: "THE FILM", href: "/documentary" },
            { name: "CURRICULUM", href: "/courses" },
            { name: "PARTNER WITH US", href: "/partner" },
            { name: "BLOG", href: "/blog" },
            { name: "ABOUT", href: "/about" },
            { name: "CONTACT", href: "/contact" },
          ].map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-[10px] font-heading tracking-[0.2em] text-cream/70 hover:text-gold transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/documentary#booking"
            className="px-6 py-3 text-xs font-heading tracking-widest text-black bg-gold hover:bg-white transition-all duration-300"
          >
            BOOK A SCREENING
          </Link>
        </div>

        <button className="md:hidden p-2 text-cream hover:text-gold transition-colors">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </nav>
  );
}
