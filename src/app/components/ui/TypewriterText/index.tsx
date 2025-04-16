"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Text from "@components/ui/Text";
import styles from "./styles.module.scss";

type Props = {
  words: string[];
  typingSpeed?: number;
  pause?: number;
  className?: string;
};

export default function TypewriterText({
  words,
  typingSpeed = 80,
  pause = 1500,
  className,
}: Props) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
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
  }, [displayedText, isDeleting, currentWordIndex, words, typingSpeed, pause]);

  return (
    <Text
      as="h2"
      variant="headingL"
      className={`${styles.typewriter} ${className || ""}`}
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
