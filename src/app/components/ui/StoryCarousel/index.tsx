"use client";

import { useEffect, useState } from "react";
import Image from "@components/ui/Image";
import Text from "@components/ui/Text";
import styles from "./styles.module.scss";
import { AboutStep } from "@/app/types/about";
import { motion, AnimatePresence } from "framer-motion";
import classNames from "classnames";

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
    transition: { duration: 0.6, ease: "easeInOut" },
  },
  exit: (direction: "next" | "prev") => ({
    x: direction === "next" ? "-100vw" : "100vw",
    opacity: 0,
    position: "absolute" as const,
    transition: { duration: 0.6, ease: "easeInOut" },
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
    transition: { duration: 0.4 },
  },
  exit: (direction: "next" | "prev") => ({
    x: direction === "next" ? "50vw" : "-50vw",
    opacity: 0,
    transition: { duration: 0.4 },
  }),
};

type Props = {
  steps: AboutStep[];
};

export default function StoryCarousel({ steps }: Props) {
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [direction, setDirection] = useState<"next" | "prev">("next");

  const isFirst = index === 0;
  const isLast = index === steps.length - 1;
  const current = steps[index];

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    const handleChange = () => setIsMobile(mediaQuery.matches);

    handleChange(); // Set initial value
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

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

  return (
    <div className={styles["story-carousel"]}>
      {/* Next */}
      <AnimatePresence mode="wait" custom={direction}>
        {!isLast && (
          <motion.button
            key={`next-${index}`}
            onClick={() => handleChange("next")}
            className={classNames(
              styles["story-carousel__scroll-row"],
              styles["story-carousel__scroll-row--next"],
            )}
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
              className={styles["story-carousel__label"]}
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Text variant="caption" color="accent" as="span">
                PROSEGUI
              </Text>
            </motion.span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Slide */}
      <div
        className={styles["story-carousel__content"]}
        data-direction={isMobile ? "mobile" : index === 0 ? "left" : "right"}
      >
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
              <div className={styles["story-carousel__image-inner"]}>
                <Image
                  src={current.image.asset.url}
                  alt={current.image.alt}
                  fill
                  className={styles["story-carousel__img"]}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        <div className={styles["story-carousel__pattern"]}>
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={index}
              className={styles["story-carousel__pattern-inner"]}
              initial={{
                opacity: 0,
                x: direction === "next" ? 30 : -30,
              }}
              animate={{ opacity: 1, x: 0 }}
              exit={{
                opacity: 0,
                x: direction === "next" ? -30 : 30,
              }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              custom={direction}
            />
          </AnimatePresence>
        </div>
      </div>

      {/* Prev */}
      <AnimatePresence mode="wait" custom={direction}>
        {!isFirst && (
          <motion.button
            key={`prev-${index}`}
            onClick={() => handleChange("prev")}
            className={classNames(
              styles["story-carousel__scroll-row"],
              styles["story-carousel__scroll-row--prev"],
            )}
            variants={rowVariants}
            initial="enter"
            animate="center"
            exit="exit"
            custom={direction}
          >
            <motion.span
              className={styles["story-carousel__label"]}
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
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
