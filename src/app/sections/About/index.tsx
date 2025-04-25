import Section from "@components/layout/Section";
import Text from "@components/ui/Text";
import styles from "./styles.module.scss";
import MasonryItem from "@/app/components/ui/MasonryItem";
import { AboutData } from "@schemas/about";

type Props = {
  data: AboutData;
};

export default function About({ data }: Props) {
  console.log("About Section Data", data);
  return (
    <Section
      contrastBg
      id="about"
      title={data.sectionTitle[0]}
      titleLoop={data.sectionTitle.slice(1)}
    >
      <Text
        variant="body"
        color="contrast"
        className={styles["about__description"]}
      >
        {data.description}
      </Text>

      <div className={styles["about__masonry"]}>
        {data.items.map((item, i) => (
          <MasonryItem
            key={i}
            src={item.image.asset.url}
            alt={item.image.alt || item.title}
            caption={item.title}
            height={item.height}
            index={i}
          />
        ))}
      </div>
    </Section>
  );
}
