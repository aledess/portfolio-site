'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import type { TargetAndTransition } from 'framer-motion';

type VariantType = 'fade' | 'slideUp' | 'slideLeft' | 'zoom';


const variantsMap: Record<VariantType, { initial: TargetAndTransition; animate: TargetAndTransition }> = {
    fade: { initial: { opacity: 0 }, animate: { opacity: 1 } },
    slideUp: { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 } },
    slideLeft: { initial: { opacity: 0, x: 30 }, animate: { opacity: 1, x: 0 } },
    zoom: { initial: { opacity: 0, scale: 0.95 }, animate: { opacity: 1, scale: 1 } },
  };
  

type Props = {
  children: React.ReactNode;
  variant?: VariantType;
  duration?: number;
  delay?: number;
};

export default function FadeIn({
  children,
  variant = 'fade',
  duration = 0.6,
  delay = 0,
}: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const { initial, animate } = variantsMap[variant];

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={isInView ? animate : undefined}
      transition={{ duration, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}
