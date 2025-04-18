import { motion } from "framer-motion";
import styles from "./styles.module.scss";

type Props = {
  onComplete?: () => void;
};

export default function PageTransition({ onComplete }: Props) {
  return (
    <motion.div
      className={styles.reveal}
      initial={{ y: "100%" }} // ⬇️ parte da sotto
      animate={{ y: 0 }} // ⬆️ entra verso l'alto
      exit={{ y: "100%" }} // ⬇️ esce di nuovo verso il basso
      transition={{ duration: 1.1, ease: "easeInOut" }}
      onAnimationComplete={onComplete}
    />
  );
}
