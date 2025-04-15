'use client';
import { motion } from 'framer-motion';
import SkillCard from '@components/SkillCard';
import styles from './styles.module.scss';

const skills = [
  { label: 'HTML', icon: 'devicon-html5-plain' },
  { label: 'CSS', icon: 'devicon-css3-plain' },
  { label: 'JavaScript', icon: 'devicon-javascript-plain' },
  { label: 'TypeScript', icon: 'devicon-typescript-plain' },
  { label: 'React', icon: 'devicon-react-original' },
  { label: 'Next.js', icon: 'devicon-nextjs-original' },
  { label: 'Sass', icon: 'devicon-sass-original' },
  { label: 'Git', icon: 'devicon-git-plain' },
  { label: 'Node.js', icon: 'devicon-nodejs-plain' },
];


export default function SkillsCarousel() {
  return (
    <div className={styles.carousel}>
      <motion.div
        className={styles.track}
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: 'linear'
        }}
      >
        {[...skills, ...skills].map((skill, idx) => (
          <SkillCard key={idx} label={skill.label} iconClass={skill.icon} />

        ))}
      </motion.div>
    </div>
  );
}
