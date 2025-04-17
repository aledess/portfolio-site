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
  contrastBg?: boolean;
  accentBg?: boolean;
};

export default function Section({
  id,
  title,
  titleLoop,
  children,
  tight,
  full,
  contrastBg,
  accentBg,
}: SectionProps) {
  return (
    <section
      id={id}
      className={classNames(styles.section, {
        [styles["section--tight"]]: tight,
        [styles["section--full"]]: full,
        [styles["section--contrast"]]: contrastBg,
        [styles["section--accent"]]: accentBg,
      })}
    >
      {title && !titleLoop && (
        <Text
          as="h2"
          variant="headingL"
          className={classNames(styles.section__title, {
            [styles["section__title--contrast"]]: contrastBg,
            [styles["section__title--accent"]]: accentBg,
          })}
        >
          {title}
        </Text>
      )}

      {titleLoop && (
        <TypewriterText
          as="h2"
          words={titleLoop}
          className={classNames(styles.section__title, {
            [styles["section__title--contrast"]]: contrastBg,
            [styles["section__title--accent"]]: accentBg,
          })}
        />
      )}

      <div className={styles.section__content}>{children}</div>
    </section>
  );
}
