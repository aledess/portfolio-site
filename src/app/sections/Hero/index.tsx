import Section from '@components/Section';
import Text from '@components/Text';
import styles from './styles.module.scss';

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <Section id="home">
        <div className={styles.hero__container}>
          <div className={styles.hero__image}>
            <div className={styles.hero__placeholder} />
          </div>
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
        </div>
      </Section>
    </section>
  );
}
