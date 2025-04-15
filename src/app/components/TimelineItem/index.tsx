import styles from './styles.module.scss';

type TimelineItemProps = {
  index: number;
  content: string;
};

export default function TimelineItem({ index, content }: TimelineItemProps) {
  return (
    <div className={styles['timeline-item']}>
      <div className={styles['timeline-item__index']}>{index}</div>
      <div className={styles['timeline-item__content']}>{content}</div>
    </div>
  );
}
