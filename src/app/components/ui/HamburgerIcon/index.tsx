"use client";

import { motion } from "framer-motion";
import styles from "./styles.module.scss";

type Props = {
  isOpen: boolean;
};

export default function HamburgerIcon({ isOpen }: Props) {
  return (
    <div className={styles.hamburger}>
      <motion.span
        className={styles.hamburger__line}
        animate={{
          rotate: isOpen ? 45 : 0,
          translateY: isOpen ? 5 : 0,
        }}
        transition={{ duration: 0.3 }}
      />
      <motion.span
        className={styles.hamburger__line}
        animate={{
          opacity: isOpen ? 0 : 1,
        }}
        transition={{ duration: 0.2 }}
      />
      <motion.span
        className={styles.hamburger__line}
        animate={{
          rotate: isOpen ? -45 : 0,
          translateY: isOpen ? -5 : 0,
        }}
        transition={{ duration: 0.3 }}
      />
    </div>
  );
}
