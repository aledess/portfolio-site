"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Text from "@components/ui/Text";
import Chip from "@components/ui/Chip";
import styles from "./styles.module.scss";

type WorkCardProps = {
  image: string;
  title: string;
  description: string;
  tech?: string[];
};

export default function WorkCard({
  image,
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
          <Image
            src={image}
            alt={title}
            fill
            className={styles["work-card__image"]}
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>

        <div className={styles["work-card__content"]}>
          <Text as="h3" variant="headingM">
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
