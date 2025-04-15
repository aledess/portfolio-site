import styles from './styles.module.scss';

type SkillCardProps = {
  label: string;
  iconClass: string;
};

export default function SkillCard({ label, iconClass }: SkillCardProps) {
  return (
    <div className={styles.card}>
      <i className={`${iconClass} ${styles.icon}`} />
      <span>{label}</span>
    </div>
  );
}
