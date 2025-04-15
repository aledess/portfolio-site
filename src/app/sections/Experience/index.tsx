import Section from '@components/layout/Section';
import TimelineItem from '@/app/components/ui/TimelineItem';
import styles from './styles.module.scss';

const items = [
  'A decade of experience working as a freelance designer and developer...',
  'Worked with companies like Dropbox, GitHub, Banco do Brasil...',
];

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className={styles.experience}>
        {items.map((content, i) => (
          <TimelineItem key={i} index={i + 1} content={content} />
        ))}
      </div>
    </Section>
  );
}
