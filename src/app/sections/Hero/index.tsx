import Image from "next/image";
import Section from "@components/layout/Section";
import TypewriterText from "@components/ui/TypewriterText";
import styles from "./styles.module.scss";
import type { HeroData } from "@schemas/hero";
import { SocialData } from "@/app/types/social";
import SocialBar from "@/app/components/ui/Socialbar";

type Props = {
  data: HeroData;
  social: SocialData;
};

export default function Hero({ data, social }: Props) {
  const { title, subtitle, image } = data;
  console.log("🚀 HERO DATA:", data, social);

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

            <TypewriterText
              words={[title]}
              variant="heading"
              align="left"
              loop={false}
              typingSpeed={80}
              className={styles.hero__title}
              as="h1"
            />

            <SocialBar data={social} />
          </div>
        </div>
      </Section>
    </section>
  );
}
