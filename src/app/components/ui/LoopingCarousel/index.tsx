/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import SkillCard from "@components/ui/SkillCard";
import styles from "./styles.module.scss";
import { SkillItem } from "@/app/types/skills";

interface Props {
  skills: SkillItem[];
  speed?: number;
  className?: string;
}

export default function LoopingCarousel({
  skills,
  speed = 30,
  className = "",
}: Props) {
  if (!skills || skills.length === 0) return null;

  const midpoint = Math.ceil(skills.length / 2);
  const topSkills = skills.slice(0, midpoint);
  const bottomSkills = skills.slice(midpoint);

  return (
    <div className={`${styles.carousel} ${className}`}>
      <InfiniteTrack skills={topSkills} direction="left" speed={speed} />
      <InfiniteTrack skills={bottomSkills} direction="right" speed={speed} />
    </div>
  );
}

function InfiniteTrack({
  skills,
  direction,
  speed,
}: {
  skills: SkillItem[];
  direction: "left" | "right";
  speed: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const [singleWidth, setSingleWidth] = useState(0);
  const isDraggingRef = useRef(false);
  const animationRef = useRef<number | null>(null);

  const repeatedSkills = [...skills, ...skills, ...skills];

  useEffect(() => {
    if (trackRef.current) {
      const fullWidth = trackRef.current.scrollWidth;
      const oneLoop = fullWidth / 3;
      setSingleWidth(oneLoop);
      x.set(-oneLoop); // Start at center
    }
  }, [skills]);

  useEffect(() => {
    let lastTime = performance.now();

    const step = (now: number) => {
      if (isDraggingRef.current || singleWidth === 0) {
        animationRef.current = requestAnimationFrame(step);
        lastTime = now;
        return;
      }

      const delta = now - lastTime;
      lastTime = now;

      const distance = (speed / 1000) * delta * (direction === "left" ? -1 : 1);
      let currentX = x.get();
      currentX += distance;

      if (currentX <= -singleWidth * 2) {
        currentX += singleWidth;
      } else if (currentX >= 0) {
        currentX -= singleWidth;
      }

      x.set(currentX);
      animationRef.current = requestAnimationFrame(step);
    };

    animationRef.current = requestAnimationFrame(step);

    // ✅ Cleanup con return valido
    return () => {
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }
    };

    // ✅ x è una motionValue, quindi ok ignorarlo
  }, [direction, speed, singleWidth]);
  const handleDrag = () => {
    const currentX = x.get();
    if (currentX <= -singleWidth * 2) {
      x.set(currentX + singleWidth);
    } else if (currentX >= 0) {
      x.set(currentX - singleWidth);
    }
  };

  const handleDragStart = () => {
    isDraggingRef.current = true;
  };

  const handleDragEnd = () => {
    isDraggingRef.current = false;
  };

  return (
    <motion.div ref={containerRef} className={styles.loopingWrapper}>
      <motion.div
        ref={trackRef}
        className={styles.loopingTrack}
        style={{ x }}
        drag="x"
        dragElastic={0.05}
        dragMomentum={false}
        onDrag={handleDrag}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        {repeatedSkills.map((skill, idx) => (
          <SkillCard key={`${direction}-${idx}`} {...skill} />
        ))}
      </motion.div>
    </motion.div>
  );
}
