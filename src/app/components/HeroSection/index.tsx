import styles from './styles.module.scss';
import Text from '@/components/Text';

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.image}>
          <div className={styles.placeholder} />
        </div>
        <div className={styles.content}>
          <Text variant="label" color="accent" as="span">
            DESIGNER & DEVELOPER
          </Text>

          <Text variant="headingL" as="h1">
            Lorem ipsum<br />
            dolor sit amet<br />
            consectetur elit
          </Text>

          <Text variant="body" color="tertiary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
          </Text>

          <a href="#" className={styles.cta}>
            Happy to chat on Whatsapp
          </a>
        </div>
      </div>
    </section>
  );
}
