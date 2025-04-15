import styles from './styles.module.scss';

type SkillProps = {
  name: string;
  level: number;
};

export default function Skill({ name, level }: SkillProps) {
  return (
    <div className={styles.skill}>
      <div className={styles['skill__info']}>
        <span className={styles['skill__name']}>{name}</span>
        <span className={styles['skill__level']}>{level}%</span>
      </div>
      <div className={styles['skill__bar']}>
        <div
          className={styles['skill__barFill']}
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}
