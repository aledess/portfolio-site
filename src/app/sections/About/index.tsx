import Section from "@components/layout/Section";
import Text from "@components/ui/Text";
import styles from "./styles.module.scss";
import MasonryItem from "@/app/components/ui/MasonryItem";

const items = [
  { title: "Scandinavia", image: "/assets/images/about1.png", height: 500 },
  { title: "Design", image: "/assets/images/about2.png", height: 400 },
  { title: "SerieTv", image: "/assets/images/about3.png", height: 240 },
  { title: "Caffè ☕", image: "/assets/images/about4.png", height: 600 },
  { title: "Pixel Art", image: "/assets/images/about1.png", height: 240 },
  { title: "Sketching", image: "/assets/images/about2.png", height: 500 },
];

export default function About() {
  return (
    <Section
      contrastBg
      id="about"
      title="About Me"
      titleLoop={["Hobbies", "Passions", "Random Facts"]}
    >
      <Text
        variant="body"
        color="contrast"
        className={styles["about__description"]}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
        libero et velit interdum, ac aliquet odio mattis.
      </Text>

      <div className={styles["about__masonry"]}>
        {items.map((item, i) => (
          <MasonryItem
            key={i}
            src={item.image}
            alt={item.title}
            caption={item.title}
            height={item.height}
          />
        ))}
      </div>
    </Section>
  );
}
