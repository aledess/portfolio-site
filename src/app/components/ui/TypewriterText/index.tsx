"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Text from "@components/ui/Text";
import styles from "./styles.module.scss";
import classNames from "classnames";
import type {
  Variant as TextVariant,
  Color as TextColor,
} from "@components/ui/Text";

type Props = {
  words: string[];
  typingSpeed?: number;
  pause?: number;
  className?: string;
  align?: "left" | "center" | "right";
  loop?: boolean;
  variant?: TextVariant;
  color?: TextColor;
  as?: React.ElementType;
  delay?: number; // 👈 nuova prop per orchestrare la partenza
};

export default function TypewriterText({
  words,
  typingSpeed = 80,
  pause = 1500,
  className,
  align = "center",
  loop = true,
  variant = "headingL",
  color = "primary",
  as,
  delay = 0, // default a 0 se non specificato
}: Props) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [startTyping, setStartTyping] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStartTyping(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!startTyping) return;

    const currentWord = words[currentWordIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting) {
      if (displayedText.length < currentWord.length) {
        timeout = setTimeout(() => {
          setDisplayedText(currentWord.slice(0, displayedText.length + 1));
        }, typingSpeed);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), pause);
      }
    } else {
      if (!loop) return;

      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(currentWord.slice(0, displayedText.length - 1));
        }, typingSpeed / 2);
      } else {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [
    displayedText,
    isDeleting,
    currentWordIndex,
    words,
    typingSpeed,
    pause,
    loop,
    startTyping,
  ]);

  return (
    <Text
      as={as || "span"}
      variant={variant}
      color={color}
      className={classNames(styles.typewriter, className, {
        [styles["typewriter--left"]]: align === "left",
        [styles["typewriter--center"]]: align === "center",
        [styles["typewriter--right"]]: align === "right",
      })}
    >
      {displayedText}
      <motion.span
        className={styles.caret}
        animate={{ opacity: [1, 0.2, 1] }}
        transition={{ repeat: Infinity, duration: 1 }}
      >
        |
      </motion.span>
    </Text>
  );
}
