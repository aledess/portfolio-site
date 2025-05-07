import Section from "@/app/components/layout/Section";
import LoopingCarousel from "@/app/components/ui/LoopingCarousel";
import { SkillsData } from "@schemas/skills";

type Props = {
  data: SkillsData;
};

export default function Skills({ data }: Props) {
  const { sectionTitle, items } = data;
  return (
    <Section id="skills" titleLoop={sectionTitle} full contrastBg>
      <LoopingCarousel skills={items} />
    </Section>
  );
}
