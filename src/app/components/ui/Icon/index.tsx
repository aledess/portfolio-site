import SunIcon from "@/assets/icons/sun.svg";
import MoonIcon from "@/assets/icons/moon.svg";
import styles from "./styles.module.scss";

type IconName = "sun" | "moon";

type IconProps = {
  name: IconName;
  size?: number;
  color?: "white" | "black" | "accent" | "contrast";
  className?: string;
};

export default function Icon({ name, size = 24, color, className }: IconProps) {
  const Component = name === "sun" ? SunIcon : MoonIcon;
  const colorClass = color ? styles[`icon--${color}`] : "";

  return (
    <Component
      width={size}
      height={size}
      className={`${styles.icon} ${colorClass} ${className || ""}`}
    />
  );
}
