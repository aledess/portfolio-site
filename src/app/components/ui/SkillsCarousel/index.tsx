"use client";

import { motion } from "framer-motion";
import SkillCard from "@components/ui/SkillCard";
import styles from "./styles.module.scss";
import { SkillItem } from "@/app/types/skills";

export default function SkillsCarousel({ skills }: { skills: SkillItem[] }) {
  if (!skills || skills.length === 0) return null;

  const midpoint = Math.ceil(skills.length / 2);
  const topSkills = skills.slice(0, midpoint);
  const bottomSkills = skills.slice(midpoint);

  return (
    <div className={styles.carousel}>
      <motion.div
        className={`${styles.carousel__track} ${styles["carousel__track--top"]}`}
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 100, ease: "linear" }}
      >
        {[...topSkills, ...topSkills].map((skill, idx) => (
          <SkillCard key={`top-${idx}`} {...skill} />
        ))}
      </motion.div>

      <motion.div
        className={`${styles.carousel__track} ${styles["carousel__track--bottom"]}`}
        animate={{ x: ["-50%", "0%"] }}
        transition={{ repeat: Infinity, duration: 100, ease: "linear" }}
      >
        {[...bottomSkills, ...bottomSkills].map((skill, idx) => (
          <SkillCard key={`bottom-${idx}`} {...skill} />
        ))}
      </motion.div>
    </div>
  );
}
