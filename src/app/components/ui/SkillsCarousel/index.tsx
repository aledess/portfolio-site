"use client";
import { motion } from "framer-motion";
import SkillCard from "@components/ui/SkillCard";
import styles from "./styles.module.scss";

type Skill = {
  label: string;
  icon: string;
};

export default function SkillsCarousel({ skills }: { skills: Skill[] }) {
  const midpoint = Math.ceil(skills.length / 2);
  const topSkills = skills.slice(0, midpoint);
  const bottomSkills = skills.slice(midpoint);

  return (
    <div className={styles.carousel}>
      {/* Riga 1 → scorre verso sinistra */}
      <motion.div
        className={`${styles.carousel__track} ${styles["carousel__track--top"]}`}
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
      >
        {[...topSkills, ...topSkills].map((skill, idx) => (
          <SkillCard
            key={`top-${idx}`}
            label={skill.label}
            iconClass={skill.icon}
          />
        ))}
      </motion.div>

      {/* Riga 2 → scorre verso destra */}
      <motion.div
        className={`${styles.carousel__track} ${styles["carousel__track--bottom"]}`}
        animate={{ x: ["-50%", "0%"] }} // ✅ verso opposto
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
      >
        {[...bottomSkills, ...bottomSkills].map((skill, idx) => (
          <SkillCard
            key={`bottom-${idx}`}
            label={skill.label}
            iconClass={skill.icon}
          />
        ))}
      </motion.div>
    </div>
  );
}
