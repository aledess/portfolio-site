"use client";

import { useEffect } from "react";
import Image from "next/image";

import Section from "@components/layout/Section";
import TypewriterText from "@components/ui/TypewriterText";
import styles from "./styles.module.scss";

type HeroData = {
  title: string;
  subtitle?: string;
  description?: string;
  image?: {
    asset?: {
      url: string;
    };
    alt?: string;
  };
};

type Props = {
  data: HeroData;
};

export default function Hero({ data }: Props) {
  const ENABLE_HOVER = false;

  useEffect(() => {
    console.log("🔥 Hero data:", data);
  }, [data]);

  return (
    <section className={styles.hero}>
      <Section id="home" compact>
        <div className={styles.hero__container}>
          <div
            className={`${styles.hero__image} ${
              !ENABLE_HOVER ? styles.hero__imageNoHover : ""
            }`}
          >
            <Image
              src="/assets/images/photo5.png"
              alt="Foto 1"
              width={800}
              height={800}
              className={`${styles.hero__photo}`}
            />
            <Image
              src="/assets/images/photo1.png"
              alt="Foto alternativa"
              width={500}
              height={500}
              className={`${styles.hero__photo} ${styles.hero__photoHover}`}
            />
          </div>

          <div className={styles.hero__content}>
            <TypewriterText
              words={["FRONTEND WEB DEVELOPER"]}
              variant="labelS"
              color="accent"
              align="left"
              loop={false}
              typingSpeed={70}
              pause={0}
              className={styles.hero__badge}
              as="span"
              delay={1400}
            />

            <TypewriterText
              words={["Alessandro Dessì"]}
              variant="headingL"
              align="left"
              loop={false}
              typingSpeed={80}
              className={styles.hero__title}
              as="h1"
            />

            <div className={styles.hero__descriptionWrapper}>
              <TypewriterText
                words={[
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
                ]}
                variant="body"
                color="secondary"
                align="left"
                loop={false}
                typingSpeed={25}
                className={styles.hero__description}
                as="p"
                delay={3100}
              />
            </div>
          </div>
        </div>
      </Section>
    </section>
  );
}
