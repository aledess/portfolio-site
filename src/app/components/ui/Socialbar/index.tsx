"use client";

import Image from "next/image";
import styles from "./styles.module.scss";
import { SocialItem } from "@/app/types/social";

type Props = {
  items: SocialItem[];
  layout?: "contact" | "sidebar"; // 👈 poi lo useremo per i layout diversi
};

export default function Socialbar({ items, layout = "contact" }: Props) {
  return (
    <div
      className={`${styles.socialLinks} ${styles[`socialLinks--${layout}`]}`}
    >
      {items.map((item) => (
        <a
          key={item.label}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialLinks__item}
          aria-label={item.label}
        >
          <Image
            src={item.icon.asset.url}
            alt={item.icon.alt || item.label}
            width={40}
            height={40}
          />
        </a>
      ))}
    </div>
  );
}
