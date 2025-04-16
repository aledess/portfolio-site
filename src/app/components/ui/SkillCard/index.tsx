import styles from "./styles.module.scss";
import Text from "@components/ui/Text";

type SkillCardProps = {
  label: string;
  iconClass: string;
};

export default function SkillCard({ label, iconClass }: SkillCardProps) {
  return (
    <div className={styles["skill-card"]}>
      <i className={`${iconClass} ${styles["skill-card__icon"]}`} />
      <Text variant="label" className={styles["skill-card__label"]}>
        {label}
      </Text>
    </div>
  );
}
