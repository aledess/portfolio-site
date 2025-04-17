"use client";
import { useRef, useLayoutEffect, useState } from "react";
import styles from "./styles.module.scss";
import classNames from "classnames";
import { smoothScrollToId } from "@utils/scrollTo";
import Text from "@components/ui/Text";

type NavLink = {
  label: string;
  href: string;
  external?: boolean;
};

export const links: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Works", href: "#works" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const navRef = useRef<HTMLElement>(null);
  const [navHeight, setNavHeight] = useState(0);

  useLayoutEffect(() => {
    if (navRef.current) {
      setNavHeight(navRef.current.offsetHeight);
    }
  }, []);

  return (
    <nav className={styles.nav__wrapper} ref={navRef}>
      <ul className={styles.nav__menu}>
        {links.map((link) => {
          const id = link.href.replace("#", "");

          return (
            <li key={link.href} className={styles.nav__item}>
              <a
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  smoothScrollToId(id, 1400, navHeight);
                }}
                className={classNames(styles.nav__link)}
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
      </ul>
    </nav>
  );
}
