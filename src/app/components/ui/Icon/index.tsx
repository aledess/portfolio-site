import icons, { IconName } from "@/assets/icons";
import styles from "./styles.module.scss";

type IconProps = {
  name: IconName;
  size?: number;
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

  return (
    <Component
      width={size}
      height={size}
      className={`${styles.icon} ${colorClass} ${className}`}
      aria-hidden="true"
    />
  );
}
