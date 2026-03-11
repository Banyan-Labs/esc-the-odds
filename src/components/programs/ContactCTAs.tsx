"use client";

import { FadeInView, CTAButton } from "@/components/shared";

interface ContactCTAsProps {
  label: string;
  href?: string;
}

export function ContactCTAs({ label, href = "/contact" }: ContactCTAsProps) {
  return (
    <FadeInView className="pt-4">
      <CTAButton href={href} showArrow>
        {label}
      </CTAButton>
    </FadeInView>
  );
}
