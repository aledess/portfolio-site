import Section from "@/app/components/layout/Section";
import ExperienceList from "@/app/components/ui/ExperienceList";

const experiences = [
  {
    date: "2022 - Present",
    company: "Tech Solutions",
    description:
      "Frontend Developer – React, Next.js, e sviluppo UI component-driven.",
  },
  {
    date: "2020 - 2022",
    company: "Innovatech",
    description:
      "Junior Developer – Progetti Angular/Ionic, supporto al team UX.",
  },
  {
    date: "2018 - 2020",
    company: "DevStart",
    description: "Stage e primo impiego in HTML/CSS, JS Vanilla, Sass, Git.",
  },
];

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ExperienceList experiences={experiences} />
    </Section>
  );
}
