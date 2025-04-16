import Section from "@components/layout/Section";
import Text from "@components/ui/Text";
import styles from "./styles.module.scss";

export default function Contact() {
  return (
    <Section id="contact" title="Let’s work together">
      <Text
        as="p"
        variant="body"
        color="secondary"
        className={styles.contact__intro}
      >
        Want to collaborate or just say hi? Fill out the form below and I’ll get
        back to you soon.
      </Text>

      <form className={styles.contact__form}>
        <div className={styles.contact__field}>
          <Text as="label" variant="label" htmlFor="name">
            Name
          </Text>
          <input id="name" name="name" type="text" required />
        </div>

        <div className={styles.contact__field}>
          <Text as="label" variant="label" htmlFor="email">
            Email
          </Text>
          <input id="email" name="email" type="email" required />
        </div>

        <div className={styles.contact__field}>
          <Text as="label" variant="label" htmlFor="message">
            Message
          </Text>
          <textarea id="message" name="message" rows={5} required />
        </div>

        <button type="submit" className={styles.contact__button}>
          <Text as="span" variant="label" color="inherit">
            Send Message
          </Text>
        </button>
      </form>
    </Section>
  );
}
