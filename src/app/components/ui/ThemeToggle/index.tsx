"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styles from "./styles.module.scss";
import Icon from "@components/ui/Icon";

type Theme = "light" | "dark";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme | null>(null); // inizialmente null per evitare mismatch SSR/CSR

  useEffect(() => {
    const saved = localStorage.getItem("theme") as Theme | null;
    const systemPref = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
    const initial = saved || systemPref;

    setTheme(initial);
    document.documentElement.setAttribute("data-theme", initial);
  }, []);

  const toggleTheme = () => {
    if (!theme) return; // sicurezza

    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className={styles["theme-toggle"]}
      aria-label="Toggle theme"
      disabled={!theme} // blocca temporaneamente finché non è pronto
    >
      <div className={styles["theme-toggle__track"]}>
        <motion.div
          className={styles["theme-toggle__thumb"]}
          animate={{ x: theme === "dark" ? 40 : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
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
