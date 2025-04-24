"use client";

import { useRef, useLayoutEffect, useState, useEffect } from "react";
import { motion } from "framer-motion";

import styles from "./styles.module.scss";
import classNames from "classnames";
import { smoothScrollToId } from "@utils/scrollTo";
import Text from "@components/ui/Text";
import { useTranslation } from "@/app/i18n/useTranslation";

export default function Navigation({ lang }: { lang: "it" | "en" }) {
  const t = useTranslation(lang);

  const links = [
    { label: t("navigation.home"), href: "#home" },
    { label: t("navigation.skills"), href: "#skills" },
    { label: t("navigation.experience"), href: "#experience" },
    { label: t("navigation.works"), href: "#works" },
    { label: t("navigation.about"), href: "#about" },
    { label: t("navigation.contact"), href: "#contact" },
  ];

  const navRef = useRef<HTMLElement>(null);
  const [navHeight, setNavHeight] = useState(0);
  const [activeSection, setActiveSection] = useState<string>("home");

  useLayoutEffect(() => {
    if (navRef.current) {
      setNavHeight(navRef.current.offsetHeight);
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleEntries.length > 0) {
          setActiveSection(visibleEntries[0].target.id);
        }
      },
      {
        rootMargin: `-${navHeight + 1}px 0px 0px 0px`,
        threshold: 0.6, // più stabile
      },
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [navHeight]);

  return (
    <nav className={styles.nav__wrapper} ref={navRef}>
      <motion.ul
        layout
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className={styles.nav__menu}
      >
        {links.map((link) => {
          const id = link.href.replace("#", "");
          const isActive = activeSection === id;

          return (
            <li key={link.href} className={styles.nav__item}>
              <a
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  if (id === "home") {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  } else {
                    smoothScrollToId(id, 1400, navHeight);
                  }
                }}
                className={classNames(styles.nav__link, {
                  [styles["nav__link--active"]]: isActive,
                })}
              >
                <Text
                  variant="labelL"
                  className={styles.nav__text}
                  color="contrast"
                >
                  {link.label}
                </Text>
              </a>
            </li>
          );
        })}
      </motion.ul>
    </nav>
  );
}
