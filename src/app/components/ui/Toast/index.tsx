"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./styles.module.scss";

type ToastProps = {
  message: string;
  type?: "success" | "error" | "loading";
  duration?: number;
  onClose: () => void;
};

export default function Toast({
  message,
  type = "success",
  duration = 4000,
  onClose,
}: ToastProps) {
  useEffect(() => {
    const timeout = setTimeout(onClose, duration);
    return () => clearTimeout(timeout);
  }, [duration, onClose]);

  return (
    <AnimatePresence>
      <motion.div
        className={`${styles.toast} ${styles[`toast--${type}`]}`}
        style={{ left: "50%", position: "fixed" }} // Centrato
        initial={{ x: "-150%", opacity: 0 }}
        animate={{ x: "-50%", opacity: 1 }}
        exit={{ x: "150%", opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className={styles.toast__message}>{message}</div>
        {type === "loading" && <div className={styles.toast__progress} />}
      </motion.div>
    </AnimatePresence>
  );
}
