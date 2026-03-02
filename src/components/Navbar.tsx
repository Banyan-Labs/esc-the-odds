"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";

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
  { name: "FINANCIAL EMPOWERMENT", href: "/#financial-empowerment" },
  { name: "FOR ORGANIZATIONS", href: "/organizations" },
  { name: "ABOUT", href: "/about" },
  { name: "TESTIMONIALS", href: "/#testimonials" },
  { name: "BLOG", href: "/blog" },
  { name: "CONTACT", href: "/contact" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);

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

        {/* Desktop Nav */}
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

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 text-cream hover:text-gold transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-black/95 border-t border-white/5 max-h-[calc(100vh-5rem)] overflow-y-auto">
          <div className="container mx-auto px-4 py-6 flex flex-col gap-1">
            {navLinks.map((item) =>
              item.children ? (
                <div key={item.name}>
                  <button
                    onClick={() => setProgramsOpen(!programsOpen)}
                    className="w-full flex items-center justify-between py-3 text-sm font-heading tracking-[0.15em] text-cream/70 hover:text-gold transition-colors"
                  >
                    {item.name}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${programsOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {programsOpen && (
                    <div className="pl-4 border-l border-white/10 ml-2 flex flex-col gap-1">
                      <Link
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="py-2 text-sm font-heading tracking-[0.15em] text-cream/50 hover:text-gold transition-colors"
                      >
                        ALL PROGRAMS
                      </Link>
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          onClick={() => setMobileOpen(false)}
                          className="py-2 text-sm font-heading tracking-[0.15em] text-cream/50 hover:text-gold transition-colors"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="py-3 text-sm font-heading tracking-[0.15em] text-cream/70 hover:text-gold transition-colors"
                >
                  {item.name}
                </Link>
              ),
            )}
            <Link
              href="/film#booking"
              onClick={() => setMobileOpen(false)}
              className="mt-4 px-6 py-4 text-sm font-heading tracking-widest text-black bg-gold hover:bg-white transition-all duration-300 text-center"
            >
              BOOK A SCREENING
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
