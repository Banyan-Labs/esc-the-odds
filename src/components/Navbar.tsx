"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/20 border-b border-white/5">
      <div className="container px-4 md:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/assets/logo-notxt.png"
            alt="Escape the Odds"
            width={50}
            height={50}
            className="h-12 w-auto object-contain"
            priority
          />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/about"
            className="text-sm font-medium text-gray-300 hover:text-primary transition-colors"
          >
            Mission
          </Link>
          <Link
            href="https://link.gohighlevel.com/widget/form/YOUR_COURSE_WIDGET_ID"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-gray-300 hover:text-primary transition-colors"
          >
            Courses
          </Link>
          <Link
            href="/documentary"
            className="text-sm font-medium text-gray-300 hover:text-primary transition-colors"
          >
            Documentary
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium text-gray-300 hover:text-primary transition-colors"
          >
            Contact
          </Link>
          <Link
            href="/donate"
            className="px-4 py-2 text-sm font-bold text-white bg-primary rounded-full hover:bg-primary/90 transition-colors"
          >
            Donate
          </Link>
        </div>

        <button className="md:hidden p-2 text-gray-600 hover:text-primary">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </nav>
  );
}
