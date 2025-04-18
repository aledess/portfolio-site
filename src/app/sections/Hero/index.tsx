import Image from "next/image";

import Section from "@components/layout/Section";
// import Text from "@/app/components/ui/Text";
import styles from "./styles.module.scss";
import TypewriterText from "@/app/components/ui/TypewriterText";

export default function HeroSection() {
  const ENABLE_HOVER = false;

  return (
    <section className={styles.hero}>
      <Section id="home" compact>
        <div className={styles.hero__container}>
          <div
            className={`${styles.hero__image} ${!ENABLE_HOVER ? styles.hero__imageNoHover : ""}`}
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
              // Parte dopo che l’h1 è finito (1.4s)
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
              // Parte dopo che badge è finito (1.7s) + delay iniziale (1.4s) = 3.1s
              delay={3100}
            />

            {/* <Text
              variant="body"
              color="tertiary"
              className={styles.hero__description}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis.
            </Text> */}

            {/* <a href="#" className={styles.hero__cta}>
              Happy to chat on Whatsapp
            </a> */}
          </div>
        </div>
      </Section>
    </section>
  );
}
