import Image from "next/image";
import { useTheme } from "@/app/context/ThemeProvider";
import styles from "./styles.module.scss";
import Text from "@components/ui/Text";

type SkillCardProps = {
  label: string;
  icon?: {
    asset?: { url: string };
    alt?: string;
  };
  light?: {
    asset?: { url: string };
    alt?: string;
  };
  dark?: {
    asset?: { url: string };
    alt?: string;
  };
  iconClass?: string;
};

export default function SkillCard({
  label,
  icon,
  light,
  dark,
  iconClass,
}: SkillCardProps) {
  const { theme } = useTheme();

  const selectedIcon =
    theme === "light"
      ? light?.asset?.url
        ? { url: light.asset.url, alt: light.alt || label }
        : icon?.asset?.url
          ? { url: icon.asset.url, alt: icon.alt || label }
          : null
      : dark?.asset?.url
        ? { url: dark.asset.url, alt: dark.alt || label }
        : icon?.asset?.url
          ? { url: icon.asset.url, alt: icon.alt || label }
          : null;

  return (
    <div className={styles["skill-card"]}>
      {selectedIcon ? (
        <div className={styles["skill-card__image-wrapper"]}>
          <Image
            src={selectedIcon.url}
            alt={selectedIcon.alt}
            width={40}
            height={40}
          />
        </div>
      ) : iconClass ? (
        <i className={`${iconClass} ${styles["skill-card__icon"]}`} />
      ) : null}

      <Text variant="label" className={styles["skill-card__label"]}>
        {label}
      </Text>
    </div>
  );
}
