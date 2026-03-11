import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

type ButtonSize = "sm" | "md" | "lg";
type ButtonVariant = "primary" | "outline";

interface CTAButtonProps {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: LucideIcon;
  showArrow?: boolean;
  fullWidth?: boolean;
  className?: string;
  onClick?: () => void;
}

const SIZE_CLASSES: Record<ButtonSize, string> = {
  sm: "px-6 py-3 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-10 py-5 text-2xl",
};

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary: "bg-gold text-black hover:bg-white",
  outline: "border-2 border-white text-white hover:bg-white hover:text-black",
};

export function CTAButton({
  href,
  children,
  variant = "primary",
  size = "lg",
  icon: Icon,
  showArrow = false,
  fullWidth = false,
  className = "",
  onClick,
}: CTAButtonProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`font-heading group inline-flex items-center justify-center tracking-widest uppercase transition-all duration-300 ${SIZE_CLASSES[size]} ${VARIANT_CLASSES[variant]} ${fullWidth ? "w-full sm:w-auto" : ""} ${className}`}
    >
      {Icon && <Icon className="mr-3 h-5 w-5" />}
      {children}
      {showArrow && (
        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
      )}
    </Link>
  );
}
