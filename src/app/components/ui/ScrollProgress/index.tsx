"use client";

import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import classNames from "classnames";

export default function ScrollProgress() {
  const [progressHeight, setProgressHeight] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;

      setProgressHeight(scrollPercent);
      setVisible(scrollTop > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={classNames(
        styles["scroll-progress__bar"],
        styles["scroll-progress__bar--left"],
        {
          [styles["scroll-progress__bar--visible"]]: visible,
        },
      )}
      style={{ height: `${progressHeight}vh` }}
    />
  );
}
