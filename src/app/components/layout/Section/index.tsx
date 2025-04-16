import { ReactNode } from "react";
import styles from "./styles.module.scss";
import classNames from "classnames";
import Text from "@components/ui/Text";
import TypewriterText from "@components/ui/TypewriterText";

type SectionProps = {
  id?: string;
  title?: string;
  titleLoop?: string[]; // 👈 aggiunto
  children: ReactNode;
  tight?: boolean;
};

export default function Section({
  id,
  title,
  titleLoop,
  children,
  tight,
}: SectionProps) {
  return (
    <section
      id={id}
      className={classNames(styles.section, {
        [styles["section--tight"]]: tight,
      })}
    >
      {title && !titleLoop && (
        <Text
          as="h2"
          variant="headingL" // 👈 cambia da headingM a headingL
          className={styles.section__title}
        >
          {title}
        </Text>
      )}

      {titleLoop && (
        <TypewriterText words={titleLoop} className={styles.section__title} />
      )}

      <div className={styles.section__content}>{children}</div>
    </section>
  );
}
