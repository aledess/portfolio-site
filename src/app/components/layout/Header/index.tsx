"use client";

import styles from "./styles.module.scss";
import LangSwitcher from "@/app/components/ui/LangSwitcher";
import ThemeToggle from "@/app/components/ui/ThemeToggle";
import Icon from "@/app/components/ui/Icon";
import Text from "@/app/components/ui/Text"; // 👈 importa Text
import { useRouter } from "next/navigation";

type Props = {
  isPreview?: boolean;
};

export default function Header({ isPreview = false }: Props) {
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
            <Text
              as="span"
              variant="labelS"
              color="contrast"
              className={styles["header__logo--preview-badge"]}
            >
              Preview
            </Text>
          )}
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
