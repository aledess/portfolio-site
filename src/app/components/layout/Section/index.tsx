import { ReactNode } from "react";
import styles from "./styles.module.scss";
import classNames from "classnames";
import Text from "@components/ui/Text";
import TypewriterText from "@components/ui/TypewriterText";

type SectionProps = {
  children: ReactNode;
  id?: string;
  title?: string;
  titleLoop?: string[];
  tight?: boolean;
  full?: boolean;
};

export default function Section({
  id,
  title,
  titleLoop,
  children,
  tight,
  full,
}: SectionProps) {
  return (
    <section
      id={id}
      className={classNames(styles.section, {
        [styles["section--tight"]]: tight,
        [styles["section--full"]]: full, // 👈 new
      })}
    >
      {title && !titleLoop && (
        <Text as="h2" variant="headingL" className={styles.section__title}>
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
