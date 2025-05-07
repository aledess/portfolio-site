import Section from "@components/layout/Section";
import WorkCard from "@/app/components/ui/WorkCard";
import styles from "./styles.module.scss";
import { WorksData } from "@schemas/works";

type Props = {
  data: WorksData;
};

export default function Works({ data }: Props) {
  return (
    <Section id="works" titleLoop={data.sectionTitle}>
      <div className={styles.works}>
        {data.items.map((work, i) => (
          <WorkCard
            key={i}
            images={work.images.map((img) => ({
              url: img.asset.url,
              alt: img.alt,
            }))}
            title={work.title}
            description={work.description}
            tech={work.tech}
            link={work.link}
          />
        ))}
      </div>
    </Section>
  );
}
