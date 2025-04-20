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
          animate={{ x: theme === "dark" ? 42 : -2 }} // overshoot
          transition={{ type: "spring", stiffness: 180, damping: 12 }}
        />
        <div className={styles["theme-toggle__icon"]}>
          <Icon
            name="sun"
            size={16}
            color={theme === "light" ? "contrast" : "black"}
          />
        </div>
        <div className={styles["theme-toggle__icon"]}>
          <Icon
            name="moon"
            size={16}
            color={theme === "dark" ? "contrast" : "black"}
          />
        </div>
      </div>
    </button>
  );
}
