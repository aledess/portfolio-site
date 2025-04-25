"use client";

import { useRef, useState, useEffect } from "react";
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

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 600);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div
      className={styles["masonry-item"]}
      style={{ height: isMobile ? "250px" : `${height}px` }} // 👈 qui gestiamo
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
      </div>

      {/* Caption disabilitata */}
      {/* <Text as="span" variant="labelL" className={styles["masonry-item__caption"]}>
        {caption}
      </Text> */}
    </div>
  );
}
