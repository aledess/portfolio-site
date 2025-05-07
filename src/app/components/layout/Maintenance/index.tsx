"use client";

import Text from "@components/ui/Text";
import styles from "./styles.module.scss";
import { useTranslation } from "@/app/i18n/useTranslation";

type MaintenanceProps = {
  lang?: "it" | "en";
};

export default function Maintenance({ lang = "it" }: MaintenanceProps) {
  const t = useTranslation(lang);

  return (
    <div className={styles.wrapper}>
      <div className={styles.box}>
        <Text as="h1" variant="heading" color="accent">
          {t("maintenance.title")}
        </Text>
        <Text as="p" variant="body" color="secondary">
          {t("maintenance.subtitle")}
        </Text>
      </div>
    </div>
  );
}
