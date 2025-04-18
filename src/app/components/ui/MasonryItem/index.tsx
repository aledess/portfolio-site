"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import styles from "./styles.module.scss";

type MasonryItemProps = {
  src: string;
  alt: string;
  caption: string;
  height: number;
  index: number;
};

export default function MasonryItem({
  src,
  alt,
  // caption,
  height,
  index,
}: MasonryItemProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -20% 0px" });

  return (
    <div className={styles["masonry-item"]} style={{ height }} ref={ref}>
      <div className={styles["masonry-item__image-wrapper"]}>
        <motion.div
          className={styles["masonry-item__reveal-mask"]}
          initial={{ y: 0 }}
          animate={isInView ? { y: "-100%" } : {}}
          transition={{
            duration: 0.8,
            delay: index * 0.1,
            ease: "easeInOut",
          }}
        />

        <Image
          src={src}
          alt={alt}
          fill
          className={styles["masonry-item__image"]}
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      {/* <Text as="span" variant="labelL" className={styles["masonry-item__caption"]}>
        {caption}
      </Text> */}
    </div>
  );
}
