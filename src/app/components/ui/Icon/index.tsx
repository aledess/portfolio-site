import SunIcon from "@/assets/icons/sun.svg";
import MoonIcon from "@/assets/icons/moon.svg";
import ArrowUpIcon from "@/assets/icons/arrow-up.svg"; // importa anche questa

import styles from "./styles.module.scss";

type IconName = "sun" | "moon" | "arrowUp";

type IconProps = {
  name: IconName;
  size?: number;
  color?: "white" | "black" | "accent" | "contrast";
  className?: string;
};

const iconsMap: Record<
  IconName,
  React.FunctionComponent<React.SVGProps<SVGSVGElement>>
> = {
  sun: SunIcon,
  moon: MoonIcon,
  arrowUp: ArrowUpIcon,
};

export default function Icon({ name, size = 24, color, className }: IconProps) {
  const Component = iconsMap[name];
  const colorClass = color ? styles[`icon--${color}`] : "";

  return (
    <Component
      width={size}
      height={size}
      className={`${styles.icon} ${colorClass} ${className || ""}`}
      aria-hidden="true"
    />
  );
}
