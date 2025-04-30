"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Text from "@components/ui/Text";
import Chip from "@components/ui/Chip";
import ImageCarousel from "@components/ui/ImageCarousel";

import styles from "./styles.module.scss";

type WorkCardProps = {
  images: {
    url: string;
    alt: string;
  }[];
  title: string;
  description: string;
  tech?: string[];
};

export default function WorkCard({
  images,
  title,
  description,
  tech = [],
}: WorkCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -20% 0px" });

  return (
    <div className={styles["work-card__wrapper"]} ref={ref}>
      {/* Reveal Mask */}
      <motion.div
        className={styles["work-card__reveal-mask"]}
        initial={{ y: 0, opacity: 1 }}
        animate={isInView ? { y: "-100%" } : {}}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />

      <div className={styles["work-card"]}>
        <div className={styles["work-card__image-wrapper"]}>
          <ImageCarousel
            images={images.map((img) => img.url)}
            alt={images[0]?.alt || title}
          />
        </div>

        <div className={styles["work-card__content"]}>
          <Text
            as="h3"
            variant="body"
            className={styles["work-card__content__title"]}
          >
            {title}
          </Text>
          <Text as="p" variant="body" color="secondary">
            {description}
          </Text>

          {tech.length > 0 && (
            <ul className={styles["work-card__tech-list"]}>
              {tech.map((item, i) => (
                <li key={`tech-${item}-${i}`}>
                  <Chip label={item} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
