"use client";

import { useRouter } from "next/navigation";
import styles from "./styles.module.scss";
import LangSwitcher from "@components/ui/LangSwitcher";
import ThemeToggle from "@components/ui/ThemeToggle";
import Icon from "@components/ui/Icon";

type Props = {
  isPreview?: boolean;
  lang: "it" | "en";
};

export default function Header({ isPreview = false, lang }: Props) {
  const router = useRouter();

  const handleLogoClick = () => {
    if (isPreview) {
      window.location.href = "/api/exit-preview";
    } else {
      router.refresh();
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.header__content}>
        <div
          className={`${styles.header__logo} ${
            isPreview ? styles["header__logo--preview"] : ""
          }`}
          onClick={handleLogoClick}
        >
          {isPreview && (
            <span className={styles["header__logo--preview-badge"]}>
              Preview
            </span>
          )}
          <Icon name="logo" size={60} color="accent" />
        </div>

        <div className={styles.header__actions}>
          <LangSwitcher lang={lang} />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
