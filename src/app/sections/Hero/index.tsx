"use client";
import { motion } from "framer-motion";

import Section from "@components/layout/Section";
import TypewriterText from "@components/ui/TypewriterText";
import styles from "./styles.module.scss";
import type { HeroData } from "@schemas/hero";
import { SocialData } from "@/app/types/social";
import SocialBar from "@/app/components/ui/Socialbar";
import Image from "@/app/components/ui/Image";

type Props = {
  data: HeroData;
  social: SocialData;
};

export default function Hero({ data, social }: Props) {
  const { title, subtitle, image } = data;

  return (
    <section className={styles.hero}>
      <Section id="home" compact>
        <div className={styles.hero__container}>
          {image?.asset?.url && (
            <motion.div
              className={styles.hero__image}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
            >
              <Image
                src={image.asset.url}
                alt={image.alt || "Hero"}
                width={800}
                height={800}
                className={styles.hero__photo}
              />
            </motion.div>
          )}

          <div className={styles.hero__content}>
            {subtitle && (
              <TypewriterText
                words={[subtitle]}
                variant="label"
                color="accent"
                align="left"
                loop={false}
                typingSpeed={70}
                pause={0}
                className={styles.hero__badge}
                as="span"
                delay={1400}
              />
            )}

            {title && (
              <TypewriterText
                words={[title]}
                variant="heading"
                align="left"
                loop={false}
                typingSpeed={80}
                className={styles.hero__title}
                as="h1"
              />
            )}

            <SocialBar data={social} />
          </div>
        </div>
      </Section>
    </section>
  );
}
