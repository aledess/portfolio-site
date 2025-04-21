import Image from "next/image";
import Section from "@components/layout/Section";
import TypewriterText from "@components/ui/TypewriterText";
import styles from "./styles.module.scss";
import type { HeroData } from "@schemas/hero";

type Props = {
  data: HeroData;
};

export default function Hero({ data }: Props) {
  const { title, subtitle, description, image } = data;

  return (
    <section className={styles.hero}>
      <Section id="home" compact>
        <div className={styles.hero__container}>
          <div className={styles.hero__image}>
            <Image
              src={image.asset.url}
              alt={image.alt}
              width={800}
              height={800}
              className={styles.hero__photo}
            />
          </div>

          <div className={styles.hero__content}>
            <TypewriterText
              words={[subtitle]}
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
              words={[title]}
              variant="headingL"
              align="left"
              loop={false}
              typingSpeed={80}
              className={styles.hero__title}
              as="h1"
            />

            {description && (
              <div className={styles.hero__descriptionWrapper}>
                <TypewriterText
                  words={[description]}
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
            )}
          </div>
        </div>
      </Section>
    </section>
  );
}
