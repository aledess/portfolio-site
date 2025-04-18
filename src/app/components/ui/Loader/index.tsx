"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import Icon from "@components/ui/Icon";

type LoaderProps = {
  isVisible: boolean;
  duration?: number;
  onComplete?: () => void;
};

export default function Loader({
  isVisible,
  duration = 4000,
  onComplete,
}: LoaderProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const start = performance.now();

    function update(now: number) {
      const elapsed = now - start;
      const percentage = Math.min((elapsed / duration) * 100, 100);
      setProgress(percentage);

      if (percentage < 100) {
        requestAnimationFrame(update);
      } else {
        // Delay finale di 500ms prima di onComplete
        setTimeout(() => {
          onComplete?.();
        }, 1000);
      }
    }

    requestAnimationFrame(update);
  }, [duration, onComplete]);

  return (
    isVisible && (
      <motion.div
        className={styles.loader}
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      >
        <div className={styles.loader__barWrapper}>
          <div className={styles.loader__bars}>
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className={styles.loader__bar}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: [0, 1, 0] }}
                transition={{
                  delay: i * 0.15,
                  duration: 0.6,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
                style={{
                  opacity: 1 - progress / 100,
                }}
              />
            ))}
          </div>

          <motion.div
            className={styles.loader__logo}
            initial={{ opacity: 0 }}
            animate={{ opacity: progress / 100 }}
            transition={{ duration: 0.3 }}
          >
            <Icon name="logo" size={60} color="accent" />
          </motion.div>
        </div>

        <div className={styles.loader__progressContainer}>
          <motion.div
            className={styles.loader__progress}
            style={{ width: `${progress}%` }}
          />
        </div>
      </motion.div>
    )
  );
}
