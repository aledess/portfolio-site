"use client";
import { motion } from "framer-motion";
import styles from "./styles.module.scss";

type Props = {
  onComplete?: () => void;
};

export default function PageTransition({ onComplete }: Props) {
  return (
    <motion.div
      className={styles.reveal}
      initial={{ y: "-100%" }} // ⬆️ entra dall’alto
      animate={{ y: 0 }}
      exit={{ y: "100%" }} // ⬇️ esce verso il basso
      transition={{ duration: 1.1, ease: "easeInOut" }}
      onAnimationComplete={onComplete}
    />
  );
}
