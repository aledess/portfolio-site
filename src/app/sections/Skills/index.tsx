import Section from '@components/Section';
import Skill from '@components/Skill';
import styles from './styles.module.scss';

const skills = [
  { name: 'JavaScript', level: 90 },
  { name: 'React', level: 85 },
  { name: 'CSS / Sass', level: 80 },
  { name: 'TypeScript', level: 80 },
  { name: 'Next.js', level: 75 },
];

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className={styles.skills}>
        {skills.map((skill) => (
          <Skill key={skill.name} name={skill.name} level={skill.level} />
        ))}
      </div>
    </Section>
  );
}
