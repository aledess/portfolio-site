"use client";

import { useEffect, useState } from "react";
import styles from "./styles.module.scss";

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

      if (scrollTop > 20) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={`${styles["scroll-progress__bar"]} ${
          visible ? styles["scroll-progress__bar--visible"] : ""
        } ${styles["scroll-progress__bar--left"]}`}
        style={{ height: `${progressHeight}vh` }}
      />
      {/* <div
        className={`${styles["scroll-progress__bar"]} ${
          visible ? styles["scroll-progress__bar--visible"] : ""
        } ${styles["scroll-progress__bar--right"]}`}
        style={{ height: `${progressHeight}vh` }}
      /> */}
    </>
  );
}
