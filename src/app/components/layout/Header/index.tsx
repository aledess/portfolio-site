"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

import styles from "./styles.module.scss";
import MobileMenu from "@components/layout/MobileMenu";
import HamburgerIcon from "@components/ui/HamburgerIcon";
import Icon from "@components/ui/Icon";
import LangSwitcher from "@components/ui/LangSwitcher";
import ThemeToggle from "@components/ui/ThemeToggle";
import classNames from "classnames";
import { AnimatePresence } from "framer-motion";

const MENU_EXIT_DURATION_MS = 400;

type Props = {
  isPreview?: boolean;
  lang: "it" | "en";
};

export default function Header({ isPreview = false, lang }: Props) {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const router = useRouter();

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // reset super-safe
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const handleLogoClick = () => {
    if (isPreview) {
      window.location.href = "/api/exit-preview";
    } else {
      router.refresh();
    }
  };

  const handleToggleMobileMenu = () => {
    if (isMobileMenuOpen) {
      setMobileMenuOpen(false); // 👈 subito, per aggiornare l’icona!
      setIsClosing(true);
      setTimeout(() => {
        setIsClosing(false);
      }, MENU_EXIT_DURATION_MS);
    } else {
      setMobileMenuOpen(true);
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.header__content}>
        <div
          className={classNames(styles.header__logo, {
            [styles["header__logo--preview"]]: isPreview,
          })}
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
          <div
            className={styles.header__hamburger}
            onClick={handleToggleMobileMenu}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                handleToggleMobileMenu();
              }
            }}
          >
            <HamburgerIcon isOpen={isMobileMenuOpen} />
          </div>

          <div className={styles["header__desktop-actions"]}>
            <LangSwitcher lang={lang} />
            <ThemeToggle />
          </div>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {(isMobileMenuOpen || isClosing) && (
          <MobileMenu
            key="mobile-menu"
            lang={lang}
            toggleMenu={handleToggleMobileMenu}
            isClosing={isClosing}
          />
        )}
      </AnimatePresence>
    </header>
  );
}
