"use client";

import { useTheme } from "@/app/context/ThemeProvider";
import styles from "./styles.module.scss";
import { useState } from "react";

type IconProps = {
  name: string; // esempio base: "logo", "react", "linkedin"
  folder?: "icons" | "icons/skills" | "icons/social"; // default = icons
  size?: number;
  className?: string;
  alt?: string;
};

export default function Icon({
  name,
  folder = "icons",
  size = 24,
  className = "",
  alt = "",
}: IconProps) {
  const { theme } = useTheme();
  const [fallback, setFallback] = useState(false);

  const suffix = fallback ? "" : `-${theme}`; // se fallback, rimuove il suffisso
  const src = `/${folder}/${name}${suffix}.svg`;

  const sizeProps = size ? { width: size, height: size } : {};

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt || name}
      {...sizeProps}
      onError={() => setFallback(true)} // 👈 se errore, fallback
      className={`${styles.icon} ${className}`}
      aria-hidden={!alt}
    />
  );
}
