import Image from 'next/image';

import Section from '@components/layout/Section';
import Text from '@/app/components/ui/Text';
import styles from './styles.module.scss';

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <Section id="home">
        <div className={styles.hero__container}>
         
          <div className={styles.hero__content}>
            <Text variant="label" color="accent" as="span" className={styles.hero__badge}>
              DESIGNER & DEVELOPER
            </Text>

            <Text variant="headingL" as="h1" className={styles.hero__title}>
              Lorem ipsum<br />
              dolor sit amet<br />
              consectetur elit
            </Text>

            <Text variant="body" color="tertiary" className={styles.hero__description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
            </Text>

            <a href="#" className={styles.hero__cta}>
              Happy to chat on Whatsapp
            </a>
          </div>
          <div className={styles.hero__image}>
          <Image
            src="/assets/images/photo1.png"
            alt="Foto 1"
            width={500}
            height={500}
            className={`${styles.hero__photo}`}
          />
          <Image
            src="/assets/images/photo2.png"
            alt="Foto alternativa"
            width={500}
            height={500}
            className={`${styles.hero__photo} ${styles.hero__photoHover}`}
          />
          </div>
        </div>
      </Section>
    </section>
  );
}
