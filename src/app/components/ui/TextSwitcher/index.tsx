"use client";
import { useEffect, useState } from "react";

import { motion, AnimatePresence } from "framer-motion";
import styles from "./styles.module.scss";

type Props = {
  labels: string[];
  duration?: number;
};

export default function TextSwitcher({ labels, duration = 2200 }: Props) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % labels.length);
    }, duration);
    return () => clearInterval(interval);
  }, [labels.length, duration]);

  return (
    <span className={styles.wrapper}>
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ rotateX: -90, opacity: 0 }}
          animate={{ rotateX: 0, opacity: 1 }}
          exit={{ rotateX: 90, opacity: 0 }}
          transition={{ duration: 0.4 }}
          className={styles.text}
        >
          {labels[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
