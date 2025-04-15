import Section from '@components/layout/Section';
import styles from './styles.module.scss';

export default function Contact() {
  return (
    <Section id="contact" title="Let’s work together">
      <p className={styles.contact__intro}>
        Want to collaborate or just say hi? Fill out the form below and I’ll get back to you soon.
      </p>

      <form className={styles.contact__form}>
        <div className={styles.contact__field}>
          <label htmlFor="name">Name</label>
          <input id="name" name="name" type="text" required />
        </div>

        <div className={styles.contact__field}>
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" required />
        </div>

        <div className={styles.contact__field}>
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows={5} required />
        </div>

        <button type="submit" className={styles.contact__button}>
          Send Message
        </button>
      </form>
    </Section>
  );
}
