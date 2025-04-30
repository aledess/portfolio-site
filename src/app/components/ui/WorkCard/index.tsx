"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Text from "@components/ui/Text";
import Chip from "@components/ui/Chip";
import ImageCarousel from "@components/ui/ImageCarousel";
import Icon from "@components/ui/Icon";

import styles from "./styles.module.scss";

type WorkCardProps = {
  images: {
    url: string;
    alt: string;
  }[];
  title: string;
  description: string;
  tech?: string[];
  link?: string;
};

export default function WorkCard({
  images,
  title,
  description,
  tech = [],
  link,
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
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles["work-card__link-icon"]}
                aria-label={`Open ${title}`}
              >
                <Icon name="link" size={20} />
              </a>
            )}
          </Text>
          <Text as="p" variant="body" color="secondary">
            {description}
          </Text>

          {tech.length > 0 && (
            <ul className={styles["work-card__tech-list"]}>
              {tech.map((item, i) => (
                <li key={`tech-${item}-${i}`}>
                  <Chip label={item} animated={false} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
