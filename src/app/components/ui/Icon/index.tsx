import icons, { IconName } from "@/assets/icons";
import styles from "./styles.module.scss";

type IconProps = {
  name: IconName;
  size?: number; // continua a supportare il size classico
  color?: "white" | "black" | "accent" | "contrast";
  className?: string;
};

export default function Icon({
  name,
  size = 24,
  color,
  className = "",
}: IconProps) {
  const Component = icons[name];
  const colorClass = color ? styles[`icon--${color}`] : "";

  const sizeProps = size ? { width: size, height: size } : {}; // 👈 Se size undefined non passi niente!

  return (
    <Component
      {...sizeProps} // 👈 solo se serve
      className={`${styles.icon} ${colorClass} ${className}`}
      aria-hidden="true"
    />
  );
}
