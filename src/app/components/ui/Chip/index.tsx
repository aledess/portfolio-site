import classNames from "classnames";
import { motion } from "framer-motion";
import Text from "@components/ui/Text";
import styles from "./styles.module.scss";

type ChipProps = {
  label: string;
  className?: string;
  small?: boolean;
  animated?: boolean;
};

export default function Chip({
  label,
  className,
  small = false,
  animated = true,
}: ChipProps) {
  const classes = classNames(
    styles.chip,
    small && styles["chip--small"],
    className,
  );

  return (
    <motion.span
      className={classes}
      animate={
        animated
          ? {
              scale: [1, 1.04, 1],
              opacity: [0.95, 1, 0.95],
            }
          : undefined
      }
      transition={
        animated
          ? {
              duration: 3,
              ease: "easeInOut",
              repeat: Infinity,
            }
          : undefined
      }
    >
      <Text as="span" variant="caption" color="contrast">
        {label}
      </Text>
    </motion.span>
  );
}
