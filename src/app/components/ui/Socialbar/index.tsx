/* eslint-disable @next/next/no-img-element */
import { useTheme } from "@/app/context/ThemeProvider";
import type { SocialData } from "@/app/types/social";
import styles from "./styles.module.scss"; // Stile da creare

type SocialBarProps = {
  social: SocialData;
};

export default function SocialBar({ social }: SocialBarProps) {
  const { theme } = useTheme();

  if (!social?.items?.length) return null;

  return (
    <div className={styles.socialBar}>
      {social.items.map((item) => {
        const icon = theme === "light" ? item.light : item.dark;

        if (!icon?.asset?.url) return null;

        const isDownload = !!item.file;

        const href = item.url || item.file?.asset.url || "#";

        return (
          <a
            key={item.label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            download={isDownload}
            aria-label={item.label}
            className={styles.socialBar__link}
          >
            <img
              src={icon.asset.url}
              alt={icon.alt || item.label}
              width={32}
              height={32}
              className={styles.socialBar__icon}
            />
          </a>
        );
      })}
    </div>
  );
}
