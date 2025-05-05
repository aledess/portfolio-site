"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./styles.module.scss";
import Text from "@components/ui/Text";

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
    <motion.div
      key="toast"
      className={`${styles.toast} ${styles[`toast--${type}`]}`}
      style={{ left: "50%", position: "fixed" }}
      initial={{ x: "-150%", opacity: 0 }}
      animate={{ x: "-50%", opacity: 1 }}
      exit={{ x: "150%", opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Text className={styles.toast__message} variant="body">
        {message}
      </Text>

      {type === "loading" && <div className={styles.toast__progress} />}
    </motion.div>
  );
}
