import { useTheme } from "@/app/context/ThemeProvider";
import type { SkillItem } from "@/app/types/skills";
import Text from "@components/ui/Text";
import Image from "@components/ui/Image";
import styles from "./styles.module.scss";

export default function SkillCard({ label, light, dark }: SkillItem) {
  const { theme } = useTheme();

  const selectedIcon =
    theme === "light"
      ? light?.asset?.url
        ? { url: light.asset.url, alt: light.alt || label }
        : null
      : dark?.asset?.url
        ? { url: dark.asset.url, alt: dark.alt || label }
        : null;

  return (
    <div className={styles["skill-card"]}>
      <div className={styles["skill-card__icon-wrapper"]}>
        {selectedIcon && (
          <Image
            src={selectedIcon.url}
            alt={selectedIcon.alt}
            width={40}
            height={40}
            className={styles["skill-card__icon-image"]}
          />
        )}
      </div>

      <Text variant="caption" className={styles["skill-card__label"]}>
        {label}
      </Text>
    </div>
  );
}
