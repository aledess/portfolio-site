"use client";

import { useTheme } from "@/app/context/ThemeProvider";
import styles from "./styles.module.scss";
import Image from "@components/ui/Image"; // 👈 nostro componente custom
import type { SocialData } from "@/app/types/social";

type Props = {
  data: SocialData;
};

export default function SocialBar({ data }: Props) {
  const { theme } = useTheme();

  if (!data?.items?.length) return null;
  console.log("dasasasaaas", data);
  return (
    <div className={styles.socialBar}>
      {data.items.map((item, index) => {
        const icon = theme === "dark" ? item.dark : item.light;

        const href = item.url || item.file?.asset.url;
        const isDownload = !!item.file;

        if (!href || !icon) return null;

        return (
          <a
            key={index}
            href={href}
            target={isDownload ? "_self" : "_blank"}
            rel={isDownload ? undefined : "noopener noreferrer"}
            download={isDownload ? true : undefined}
            aria-label={item.label}
            className={styles.socialBar__link}
          >
            <Image
              src={icon.asset.url}
              alt={icon.alt || item.label}
              width={24}
              height={24}
              className={styles.socialBar__icon}
            />
          </a>
        );
      })}
    </div>
  );
}
