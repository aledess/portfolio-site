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
  const [shouldPulse, setShouldPulse] = useState(true);
  const [shouldExpand, setShouldExpand] = useState(false);

  useEffect(() => {
    const start = performance.now();

    function update(now: number) {
      const elapsed = now - start;
      const percentage = Math.min((elapsed / duration) * 100, 100);
      setProgress(percentage);

      if (percentage < 100) {
        requestAnimationFrame(update);
      } else {
        setShouldPulse(false);
        setShouldExpand(true);

        // Rimani visibile ancora un po’ dopo espansione
        setTimeout(() => {
          onComplete?.();
        }, 2000);
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
          {/* Logo che appare gradualmente e pulsa solo dopo il 60% */}
          <motion.div
            className={styles.loader__logo}
            style={{
              opacity: Math.max(0, (progress - 10) / 90),
            }}
            animate={
              shouldExpand
                ? { scale: 1.6, opacity: 1 } // espansione finale
                : shouldPulse
                  ? { scale: [1, 1.18, 1] } // pulsazione
                  : { scale: 1, opacity: 1 }
            }
            transition={{
              scale: {
                duration: shouldExpand ? 1.2 : 1.4,
                repeat: shouldPulse ? Infinity : 0,
                ease: "easeInOut",
              },
              opacity: { duration: 0.6 },
            }}
          >
            <Icon name="logo" size={60} color="accent" />
          </motion.div>

          {/* Barre animate con opacità decrescente */}
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
