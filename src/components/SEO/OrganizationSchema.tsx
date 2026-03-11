const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Escape The Odds Media & Education",
  url: "https://escapetheodds.com",
  logo: "https://escapetheodds.com/assets/COOKCOUNTY-SHERIFF-PIC.png",
  description:
    "Escape The Odds empowers justice-impacted individuals through documentary storytelling, structured reentry education, and vocational entrepreneurship programs.",
  founder: {
    "@type": "Person",
    name: "Aaron Smith",
    jobTitle: "Founder & CEO",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Chicago",
    addressRegion: "IL",
    addressCountry: "US",
  },
  email: "info@escapetheodds.com",
  sameAs: [
    "https://www.instagram.com/escapetheoddsmedia",
    "https://www.linkedin.com/company/escaping-the-odds-media/",
  ],
  knowsAbout: [
    "reentry education",
    "recidivism reduction",
    "justice-impacted individuals",
    "workforce development",
    "entrepreneurship training",
    "documentary film",
  ],
};

export function OrganizationSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
    />
  );
}
