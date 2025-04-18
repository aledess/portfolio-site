"use client";

import styles from "./styles.module.scss";
import LangSwitcher from "@/app/components/ui/LangSwitcher";
import ThemeToggle from "@/app/components/ui/ThemeToggle";
import Icon from "@/app/components/ui/Icon";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header__content}>
        <div className={styles.header__logo}>
          <Icon name="logo" size={60} color="accent" />
        </div>

        <div className={styles.header__actions}>
          <LangSwitcher />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
