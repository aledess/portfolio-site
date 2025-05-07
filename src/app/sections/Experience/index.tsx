import Section from "@/app/components/layout/Section";
import ExperienceList from "@/app/components/ui/ExperienceList";
import { ExperienceData } from "@schemas/experience";

type Props = {
  data: ExperienceData;
};

export default function Experience({ data }: Props) {
  const { items, sectionTitle } = data;
  return (
    <Section id="experience" titleLoop={sectionTitle} tight>
      <ExperienceList experiences={items} />
    </Section>
  );
}
