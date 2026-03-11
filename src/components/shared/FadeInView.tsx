"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

interface FadeInViewProps extends Omit<
  HTMLMotionProps<"div">,
  "initial" | "whileInView" | "viewport"
> {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "left" | "right" | "scale";
  className?: string;
}

const ANIMATION_DURATION = 0.8;

const DIRECTION_MAP = {
  up: { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } },
  left: { initial: { opacity: 0, x: -50 }, animate: { opacity: 1, x: 0 } },
  right: { initial: { opacity: 0, x: 50 }, animate: { opacity: 1, x: 0 } },
  scale: { initial: { opacity: 0, scale: 0.98 }, animate: { opacity: 1, scale: 1 } },
};

export function FadeInView({
  children,
  delay = 0,
  direction = "up",
  className,
  ...rest
}: FadeInViewProps) {
  const { initial, animate } = DIRECTION_MAP[direction];

  return (
    <motion.div
      initial={initial}
      whileInView={animate}
      viewport={{ once: true }}
      transition={{ duration: ANIMATION_DURATION, delay }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
