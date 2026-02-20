"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu } from "lucide-react";

const navLinks = [
  { name: "HOME", href: "/" },
  { name: "THE FILM EXPERIENCE", href: "/film" },
  {
    name: "PROGRAMS",
    href: "/programs",
    children: [
      { name: "LIVE COHORT", href: "/programs/live-cohort" },
      { name: "SELF-PACED (COMING SOON)", href: "#" },
    ],
  },
  { name: "FINANCIAL EMPOWERMENT", href: "/financial-empowerment" },
  { name: "FOR ORGANIZATIONS", href: "/organizations" },
  { name: "ABOUT", href: "/about" },
  { name: "TESTIMONIALS", href: "/testimonials" },
  { name: "BLOG", href: "/blog" },
  { name: "CONTACT", href: "/contact" },
];

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

        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((item) =>
            item.children ? (
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className="text-[9px] font-heading tracking-[0.15em] text-cream/70 hover:text-gold transition-colors flex items-center gap-1"
                >
                  {item.name}
                  <ChevronDown className="w-2.5 h-2.5 group-hover:rotate-180 transition-transform duration-200" />
                </Link>

                {/* Dropdown */}
                <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="bg-black/95 border border-white/10 backdrop-blur-md min-w-[180px]">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        className="block px-5 py-3 text-[9px] font-heading tracking-[0.15em] text-cream/70 hover:text-gold hover:bg-white/5 transition-colors"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                className="text-[9px] font-heading tracking-[0.15em] text-cream/70 hover:text-gold transition-colors"
              >
                {item.name}
              </Link>
            ),
          )}
          <Link
            href="/film#booking"
            className="px-6 py-3 text-xs font-heading tracking-widest text-black bg-gold hover:bg-white transition-all duration-300"
          >
            BOOK A SCREENING
          </Link>
        </div>

        <button className="lg:hidden p-2 text-cream hover:text-gold transition-colors">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </nav>
  );
}
