"use client";

import { useTheme } from "@/app/context/ThemeProvider";
import styles from "./styles.module.scss";
import { motion } from "framer-motion";
import Icon from "@components/ui/Icon";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={styles["theme-toggle"]}
      aria-label="Toggle theme"
    >
      <div className={styles["theme-toggle__track"]}>
        <motion.div
          className={styles["theme-toggle__thumb"]}
          animate={{ x: theme === "dark" ? 40 : 0 }}
          transition={{ type: "spring", stiffness: 180, damping: 12 }}
        />
        <div
          className={`${styles["theme-toggle__icon"]} ${
            theme === "light" ? styles["theme-toggle__icon--active"] : ""
          }`}
        >
          <Icon name="sun" size={16} />
        </div>
        <div
          className={`${styles["theme-toggle__icon"]} ${
            theme === "dark" ? styles["theme-toggle__icon--active"] : ""
          }`}
        >
          <Icon name="moon" size={16} />
        </div>
      </div>
    </button>
  );
}
