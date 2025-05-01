"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Text from "@components/ui/Text";
import styles from "./styles.module.scss";
import { AboutStep } from "@/app/types/about";

type Props = {
  steps: AboutStep[];
};

export default function StoryCarousel({ steps }: Props) {
  const [index, setIndex] = useState(0);
  const current = steps[index];

  const next = () => {
    setIndex((prev) => (prev + 1) % steps.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + steps.length) % steps.length);
  };

  return (
    <div className={styles["story-carousel"]}>
      <div className={styles["story-carousel__header"]}>
        <Text
          variant="caption"
          color="accent"
          as="span"
          className={styles["story-carousel__caption"]}
        >
          {current.title}
        </Text>
      </div>

      <div className={styles["story-carousel__content"]}>
        <div className={styles["story-carousel__image-wrapper"]}>
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              className={styles["story-carousel__image"]}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
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
        </div>

        <div className={styles["story-carousel__text"]}>
          {current.title && (
            <Text variant="headingS" color="contrast">
              {current.title}
            </Text>
          )}

          <div className={styles["story-carousel__buttons"]}>
            <button
              onClick={prev}
              className={styles["story-carousel__btn"]}
              aria-label="Indietro"
            >
              ← Indietro
            </button>
            <button
              onClick={next}
              className={styles["story-carousel__btn"]}
              aria-label="Avanti"
            >
              Avanti →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
