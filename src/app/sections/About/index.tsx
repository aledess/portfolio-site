import Section from "@components/layout/Section";
import Text from "@components/ui/Text";
import styles from "./styles.module.scss";
import Image from "next/image";

const items = [
  { title: "Scandinavia", image: "/assets/images/about1.png" },
  { title: "Design", image: "/assets/images/about2.png" },
  { title: "SerieTv", image: "/assets/images/about3.png" },
  { title: "Caffè ☕", image: "/assets/images/about4.png" },
  { title: "Pixel Art", image: "/assets/images/about1.png" },
  { title: "Sketching", image: "/assets/images/about2.png" },
];

export default function About() {
  return (
    <Section
      id="about"
      title="About Me"
      titleLoop={["Hobbies", "Passions", "Random Facts"]}
    >
      <Text variant="body" color="secondary" className={styles.description}>
        Oltre al codice, adoro perdermi tra natura nordica, buon design e
        maratone di serie TV.
      </Text>

      <div className={styles.masonry}>
        {items.map((item, i) => (
          <div key={i} className={styles.item}>
            <div className={styles.imageWrapper}>
              <Image
                src={item.image}
                alt={item.title}
                width={400} // 👈 dimensioni esplicite per rendere masonry compatibile
                height={Math.floor(250 + Math.random() * 150)} // 👈 altezza variabile
                className={styles.image}
              />
              <Text as="span" variant="labelL" className={styles.caption}>
                {item.title}
              </Text>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
