import Section from "@/app/components/layout/Section";
import SkillsCarousel from "@/app/components/ui/SkillsCarousel";
import { SkillsData } from "@schemas/skills";

type Props = {
  data: SkillsData;
};

export default function Skills({ data }: Props) {
  console.log("Skills Section Data", data);
  const { sectionTitle, items } = data;
  return (
    <Section id="skills" titleLoop={sectionTitle} full>
      <SkillsCarousel skills={items} />
    </Section>
  );
}
