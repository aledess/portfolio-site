import Section from "@components/layout/Section";
import StoryCarousel from "@components/ui/StoryCarousel";
import styles from "./styles.module.scss";
import { AboutData } from "@schemas/about";

type Props = {
  data: AboutData;
  lang: "it" | "en";
};

export default function About({ data, lang }: Props) {
  const { sectionTitle, steps } = data;

  return (
    <Section
      id="about"
      title={sectionTitle[0]}
      titleLoop={sectionTitle.slice(1)}
    >
      <div className={styles["about__carousel"]}>
        <StoryCarousel steps={steps} lang={lang} />
      </div>
    </Section>
  );
}
