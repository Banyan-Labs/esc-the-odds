/** Shared blog helper functions used by BlogGrid and blog/[slug] pages. */

const CATEGORY_LABELS: Record<string, string> = {
  mindset: "Mindset",
  business: "Business",
  courses: "Courses",
  lifestyle: "Lifestyle",
};

export function formatDate(
  dateStr: string | null | undefined,
  style: "short" | "long" = "long"
): string {
  if (!dateStr) return "";
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: style === "short" ? "short" : "long",
    day: style === "short" ? "2-digit" : "numeric",
    year: "numeric",
  });
}

export function getCategoryLabel(value: string): string {
  return CATEGORY_LABELS[value] || value;
}

export function getAuthorName(author: { email: string } | string | null | undefined): string {
  if (!author) return "Unknown";
  if (typeof author === "string") return "Unknown";
  return author.email.split("@")[0];
}
