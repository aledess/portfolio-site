import Section from "@components/layout/Section";
import Text from "@components/ui/Text";
import StoryCarousel from "@components/ui/StoryCarousel";
import styles from "./styles.module.scss";
import { AboutData } from "@schemas/about";

type Props = {
  data: AboutData;
};

export default function About({ data }: Props) {
  const { sectionTitle, description, steps } = data;

  return (
    <Section
      id="about"
      title={sectionTitle[0]}
      titleLoop={sectionTitle.slice(1)}
    >
      {description && (
        <Text
          variant="body"
          color="contrast"
          className={styles["about__description"]}
        >
          {description}
        </Text>
      )}

      <div className={styles["about__carousel"]}>
        <StoryCarousel steps={steps} />
      </div>
    </Section>
  );
}
