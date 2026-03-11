"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "HOME", href: "/" },
  { name: "THE FILM EXPERIENCE", href: "/film" },
  { name: "PROGRAMS", href: "/programs" },
  { name: "FOR ORGANIZATIONS", href: "/organizations" },
  { name: "ABOUT", href: "/about" },
  { name: "TESTIMONIALS", href: "/#testimonials" },
  { name: "BLOG", href: "/blog" },
  { name: "CONTACT", href: "/contact" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    if (href.startsWith("/#")) return false;
    return pathname.startsWith(href);
  }

  return (
    <nav className="fixed top-0 right-0 left-0 z-50 border-b border-white/5 bg-black/80 backdrop-blur-md">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
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

        {/* Desktop Nav */}
        <div className="hidden items-center gap-6 lg:flex">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`font-heading text-xs tracking-[0.15em] transition-colors ${
                isActive(item.href) ? "text-gold" : "text-cream/90 hover:text-gold"
              }`}
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="font-heading bg-gold px-6 py-3 text-sm tracking-widest text-black transition-all duration-300 hover:bg-white"
          >
            HOST THE FILM
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="text-cream hover:text-gold p-3 transition-colors lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="max-h-[calc(100vh-5rem)] overflow-y-auto border-t border-white/5 bg-black/95 lg:hidden">
          <div className="container mx-auto flex flex-col gap-1 px-4 py-6">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`font-heading py-3 text-sm tracking-[0.15em] transition-colors ${
                  isActive(item.href) ? "text-gold" : "text-cream/90 hover:text-gold"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="font-heading bg-gold mt-4 px-6 py-4 text-center text-sm tracking-widest text-black transition-all duration-300 hover:bg-white"
            >
              HOST THE FILM
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
