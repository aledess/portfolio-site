"use client";

import { motion } from "framer-motion";
import LangSwitcher from "@components/ui/LangSwitcher";
import ThemeToggle from "@components/ui/ThemeToggle";
import Text from "@components/ui/Text";
import { useNavigationLinks } from "@/app/hooks/useNavigationLinks";
import { smoothScrollToId } from "@utils/scrollTo";
import styles from "./styles.module.scss";
import classNames from "classnames";

const MENU_EXIT_DURATION_MS = 400;

type Props = {
  lang: "it" | "en";
  toggleMenu: () => void;
  isClosing: boolean;
};

const menuVariants = {
  initial: { y: "100%" },
  animate: { y: 0, opacity: 1 },
  exit: { y: "100%", opacity: 0.8, scale: 0.98 },
};

const containerVariants = {
  animate: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export default function MobileMenu({ lang, toggleMenu, isClosing }: Props) {
  const links = useNavigationLinks(lang);

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const id = href.replace("#", "");

    toggleMenu(); // chiudi subito il menu

    setTimeout(() => {
      if (id === "home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        smoothScrollToId(id, 1400, 0);
      }
    }, 400); // aspetta la chiusura
  };

  return (
    <>
      <div className={styles.scrollLockOverlay} />

      <motion.div
        key="mobile-menu"
        className={classNames(styles.mobileMenu, {
          [styles["mobileMenu--closing"]]: isClosing,
        })}
        variants={menuVariants}
        initial="initial"
        animate={isClosing ? "exit" : "animate"} // 👈 cambia qui
        exit="exit"
        transition={{
          duration: MENU_EXIT_DURATION_MS / 1000,
          ease: "easeInOut",
        }}
      >
        <motion.ul
          className={styles.mobileMenu__links}
          variants={containerVariants}
          initial="initial"
          animate="animate"
        >
          {links.map((link) => (
            <motion.li
              key={link.href}
              className={styles.mobileMenu__item}
              variants={itemVariants}
            >
              <a
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
              >
                <Text variant="headingM" color="accent">
                  {link.label}
                </Text>
              </a>
            </motion.li>
          ))}
        </motion.ul>

        <div className={styles.mobileMenu__switches}>
          <LangSwitcher lang={lang} />
          <ThemeToggle />
        </div>
      </motion.div>
    </>
  );
}
