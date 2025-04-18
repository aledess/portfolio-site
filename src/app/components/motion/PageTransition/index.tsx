import { motion } from "framer-motion";
import styles from "./styles.module.scss";

type Props = {
  onComplete?: () => void;
};

export default function PageTransition({ onComplete }: Props) {
  return (
    <motion.div
      className={styles.reveal}
      initial={{ y: "-100%" }} // ⬆️ parte da sopra
      animate={{ y: 0 }} // ⬇️ entra scorrendo verso il basso
      exit={{ y: "-100%" }} // ⬆️ esce di nuovo verso l’alto
      transition={{ duration: 0.6, ease: "circOut" }}
      onAnimationComplete={onComplete}
    />
  );
}
