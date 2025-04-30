"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import Image from "@components/ui/Image";
import styles from "./styles.module.scss";
import Text from "../Text";

type MasonryItemProps = {
  src: string;
  alt: string;
  caption: string;
  height: number;
  heightMobile?: number;
  index: number;
};

export default function MasonryItem({
  src,
  alt,
  caption,
  height,
  heightMobile,
  index,
}: MasonryItemProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -20% 0px" });
  console.log("item", caption);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 600);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const finalHeight = isMobile ? (heightMobile ?? 250) : height;

  return (
    <div
      className={styles["masonry-item"]}
      style={{ height: `${finalHeight}px` }}
      ref={ref}
    >
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
          sizes="(max-width: 768px) 50vw, 33vw"
        />
        {caption && (
          <Text
            as={motion.span}
            variant="caption"
            className={styles["masonry-item__badge"]}
            animate={{
              scale: [1, 1.04, 1],
              opacity: [0.95, 1, 0.95],
            }}
            transition={{
              duration: 3,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          >
            {caption}
          </Text>
        )}
      </div>
    </div>
  );
}
