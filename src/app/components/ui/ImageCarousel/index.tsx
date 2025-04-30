"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import styles from "./styles.module.scss";

type Props = {
  images: string[];
  alt: string;
  interval?: number;
};

export default function ImageCarousel({ images, alt, interval = 4000 }: Props) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(id);
  }, [images, interval]);

  return (
    <div className={styles["image-carousel"]}>
      {images.length > 1 && (
        <motion.div
          key={index}
          className={styles["image-carousel__progress-bar"]}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: interval / 1000, ease: "linear" }}
        />
      )}

      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          className={styles["image-carousel__image"]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <Image
            src={images[index]}
            alt={alt}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className={styles["image-carousel__img"]}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
