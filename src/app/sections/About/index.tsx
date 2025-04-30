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
  const { sectionTitle, description, images } = data;
  return (
    <Section
      contrastBg
      id="about"
      title={sectionTitle[0]}
      titleLoop={data.sectionTitle.slice(1)}
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

      <div className={styles["about__masonry"]}>
        {images.map((item, i) => (
          <MasonryItem
            key={i}
            src={item.image.asset.url}
            alt={item.image.alt || item.caption}
            caption={item.caption}
            height={item.height}
            heightMobile={item.heightMobile}
            index={i}
            fullSpan={item.fullSpan}
          />
        ))}
      </div>
    </Section>
  );
}
