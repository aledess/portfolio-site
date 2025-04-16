import { ReactNode } from "react";
import styles from "./styles.module.scss";
import Text from "@components/ui/Text";

type SectionProps = {
  id?: string;
  title?: string;
  children: ReactNode;
};

export default function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className={styles.section}>
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
