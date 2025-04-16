import Section from "@components/layout/Section";
import WorkCard from "@/app/components/ui/WorkCard";
import Text from "@components/ui/Text";
import styles from "./styles.module.scss";

const works = new Array(6).fill(null).map((_, i) => ({
  title: `Project ${i + 1}`,
  description: "Short description of the project goes here.",
  image: `https://placehold.co/600x338.png?text=Project+${i + 1}&font=roboto`, // 🔧 SVG → PNG
}));

export default function Works() {
  return (
    <Section id="works" title="Selected Works">
      <div className={styles.works}>
        {works.map((work, i) => (
          <WorkCard
            key={i}
            image={work.image}
            title={work.title}
            description={work.description}
          />
        ))}
      </div>
      <div className={styles["works__cta"]}>
        <a href="/projects" className={styles["works__link"]}>
          <Text as="span" variant="label" color="inherit">
            View all projects
          </Text>
        </a>
      </div>
    </Section>
  );
}
