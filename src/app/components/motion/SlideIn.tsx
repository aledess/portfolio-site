"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import type { TargetAndTransition } from "framer-motion";

type Direction = "fade" | "up" | "down" | "left" | "right" | "zoom";

const variantsMap: Record<
  Direction,
  { initial: TargetAndTransition; animate: TargetAndTransition }
> = {
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  },
  up: {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
  },
  down: {
    initial: { opacity: 0, y: -60 },
    animate: { opacity: 1, y: 0 },
  },
  left: {
    initial: { opacity: 0, x: 60 },
    animate: { opacity: 1, x: 0 },
  },
  right: {
    initial: { opacity: 0, x: -60 },
    animate: { opacity: 1, x: 0 },
  },
  zoom: {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
  },
};

type Props = {
  children: React.ReactNode;
  direction?: Direction;
  duration?: number;
  delay?: number;
  force?: boolean;
};

export default function SlideIn({
  children,
  direction = "up",
  duration = 0.6, // più veloce
  delay = 0,
  force,
}: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "0px 0px -20% 0px",
    amount: 0.1,
  });
  const { initial, animate } = variantsMap[direction];

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={force || isInView ? animate : undefined}
      transition={{ duration, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
