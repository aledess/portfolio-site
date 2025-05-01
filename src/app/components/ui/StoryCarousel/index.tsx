"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Text from "@components/ui/Text";
import styles from "./styles.module.scss";
import { AboutStep } from "@/app/types/about";

const MOBILE_MAX_WIDTH = 1024; // lg breakpoint

const slideVariants = {
  enter: (direction: "next" | "prev") => ({
    x: direction === "next" ? "100vw" : "-100vw",
    opacity: 0,
    position: "absolute" as const,
  }),
  center: {
    x: 0,
    opacity: 1,
    position: "relative" as const,
    transition: {
      x: { duration: 0.6, ease: "easeInOut" },
      opacity: { duration: 0.6 },
    },
  },
  exit: (direction: "next" | "prev") => ({
    x: direction === "next" ? "-100vw" : "100vw",
    opacity: 0,
    position: "relative" as const,
    transition: {
      x: { duration: 0.6, ease: "easeInOut" },
      opacity: { duration: 0.6 },
    },
  }),
};

const rowVariants = {
  enter: (direction: "next" | "prev") => ({
    x: direction === "next" ? "-50vw" : "50vw",
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: { x: { duration: 0.4 }, opacity: { duration: 0.4 } },
  },
  exit: (direction: "next" | "prev") => ({
    x: direction === "next" ? "50vw" : "-50vw",
    opacity: 0,
    transition: { x: { duration: 0.4 }, opacity: { duration: 0.4 } },
  }),
};

type Props = {
  steps: AboutStep[];
};

export default function StoryCarousel({ steps }: Props) {
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [direction, setDirection] = useState<"next" | "prev">("next");

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < MOBILE_MAX_WIDTH);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const isFirst = index === 0;
  const isLast = index === steps.length - 1;

  const handleChange = (dir: "next" | "prev") => {
    if ((dir === "next" && isLast) || (dir === "prev" && isFirst)) return;
    setDirection(dir);
    setIndex((prev) => (dir === "next" ? prev + 1 : prev - 1));
  };

  const handleSwipe = (_: unknown, info: { offset: { x: number } }) => {
    const threshold = 80;
    if (!isMobile) return;
    if (info.offset.x < -threshold && !isLast) handleChange("next");
    if (info.offset.x > threshold && !isFirst) handleChange("prev");
  };

  const current = steps[index];

  return (
    <div className={styles["story-carousel"]}>
      {/* Scroll Next */}
      <AnimatePresence mode="wait" custom={direction}>
        {!isLast && (
          <motion.div
            key={`next-${index}`}
            className={`${styles["story-carousel__scroll-row"]} ${styles["story-carousel__scroll-row--next"]}`}
            onClick={() => handleChange("next")}
            variants={rowVariants}
            initial="enter"
            animate="center"
            exit="exit"
            custom={direction}
          >
            <motion.div
              className={styles["story-carousel__line"]}
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              exit={{ scaleX: 0, opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            />
            <motion.span
              className={`${styles["story-carousel__label"]} ${styles["story-carousel__label--after"]}`}
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Text variant="caption" color="accent" as="span">
                PROSEGUI
              </Text>
            </motion.span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Content */}
      <div className={styles["story-carousel__content"]}>
        <motion.div
          drag={isMobile ? "x" : false}
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={handleSwipe}
          className={styles["story-carousel__image-wrapper"]}
        >
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={index}
              className={styles["story-carousel__image"]}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              custom={direction}
            >
              <Image
                src={current.image.asset.url}
                alt={current.image.alt}
                fill
                className={styles["story-carousel__img"]}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
          </AnimatePresence>
        </motion.div>

        <div className={styles["story-carousel__text"]}>
          {/* title commented */}
        </div>
      </div>

      {/* Scroll Prev */}
      <AnimatePresence mode="wait" custom={direction}>
        {!isFirst && (
          <motion.div
            key={`prev-${index}`}
            className={`${styles["story-carousel__scroll-row"]} ${styles["story-carousel__scroll-row--prev"]}`}
            onClick={() => handleChange("prev")}
            variants={rowVariants}
            initial="enter"
            animate="center"
            exit="exit"
            custom={direction}
          >
            <motion.span
              className={`${styles["story-carousel__label"]} ${styles["story-carousel__label--before"]}`}
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Text variant="caption" color="accent" as="span">
                INDIETRO
              </Text>
            </motion.span>
            <motion.div
              className={styles["story-carousel__line"]}
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              exit={{ scaleX: 0, opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
