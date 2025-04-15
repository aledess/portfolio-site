import { ReactNode } from 'react';
import styles from './styles.module.scss';

type SectionProps = {
  id?: string;
  title?: string;
  children: ReactNode;
};

export default function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className={styles.section}>
      {title && <h2 className={styles.section__title}>{title}</h2>}
      <div className={styles.section__content}>{children}</div>
    </section>
  );
}
