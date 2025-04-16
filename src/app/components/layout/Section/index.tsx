import { ReactNode } from "react";
import styles from "./styles.module.scss";
import classNames from "classnames";
import Text from "@components/ui/Text";

type SectionProps = {
  id?: string;
  title?: string;
  children: ReactNode;
  tight?: boolean;
};

export default function Section({ id, title, children, tight }: SectionProps) {
  return (
    <section
      id={id}
      className={classNames(styles.section, {
        [styles["section--tight"]]: tight,
      })}
    >
      {title && (
        <Text
          as="h2"
          variant="headingM"
          color="accent"
          className={styles.section__title}
        >
          {title}
        </Text>
      )}
      <div className={styles.section__content}>{children}</div>
    </section>
  );
}
