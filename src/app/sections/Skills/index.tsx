import Section from "@/app/components/layout/Section";
import SkillsCarousel from "@/app/components/ui/SkillsCarousel";

const skills = [
  { label: "HTML", icon: "devicon-html5-plain" },
  { label: "CSS", icon: "devicon-css3-plain" },
  { label: "JavaScript", icon: "devicon-javascript-plain" },
  { label: "TypeScript", icon: "devicon-typescript-plain" },
  { label: "React", icon: "devicon-react-original" },
  { label: "Next.js", icon: "devicon-nextjs-original" },
  { label: "Angular", icon: "devicon-angularjs-plain" },
  { label: "Redux", icon: "devicon-redux-original" },
  { label: "Ionic", icon: "devicon-ionic-original" },
  { label: "Sass", icon: "devicon-sass-original" },
  { label: "Git", icon: "devicon-git-plain" },
  { label: "Node.js", icon: "devicon-nodejs-plain" },
];

const skillsTitleLoop = [
  "Technologies I Use",
  "Frontend Stack",
  "Frameworks & Tools",
  "Skills",
];

export default function Skills() {
  return (
    <Section id="skills" titleLoop={skillsTitleLoop} full>
      <SkillsCarousel skills={skills} />
    </Section>
  );
}
