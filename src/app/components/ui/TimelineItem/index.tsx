import styles from "./styles.module.scss";
import Text from "@components/ui/Text";

type TimelineItemProps = {
  index: number;
  content: string;
};

export default function TimelineItem({ index, content }: TimelineItemProps) {
  return (
    <div className={styles["timeline-item"]}>
      <Text
        as="span"
        variant="label"
        color="accent"
        className={styles["timeline-item__index"]}
      >
        {index}
      </Text>
      <Text as="p" variant="body" className={styles["timeline-item__content"]}>
        {content}
      </Text>
    </div>
  );
}
