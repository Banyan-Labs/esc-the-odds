export interface NavLink {
  name: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { name: "HOME", href: "/" },
  { name: "THE FILM EXPERIENCE", href: "/film" },
  { name: "PROGRAMS", href: "/programs" },
  { name: "FOR ORGANIZATIONS", href: "/organizations" },
  { name: "ABOUT", href: "/about" },
  { name: "TESTIMONIALS", href: "/#testimonials" },
  { name: "BLOG", href: "/blog" },
  { name: "CONTACT", href: "/contact" },
];

export interface FooterLink {
  name: string;
  href: string;
}

export const FOOTER_LINKS: FooterLink[] = [
  { name: "INSTITUTIONAL PARTNERS", href: "/organizations" },
  { name: "BLOG", href: "/blog" },
  { name: "CONTACT", href: "/contact" },
];

export interface SocialLink {
  name: string;
  href: string;
}

export const SOCIAL_LINKS: SocialLink[] = [
  { name: "INSTAGRAM", href: "https://www.instagram.com/escapetheoddsmedia" },
  {
    name: "LINKEDIN",
    href: "https://www.linkedin.com/company/escaping-the-odds-media/",
  },
];
