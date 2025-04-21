import type { SkillsData } from "@schemas/skills";

export const mockSkillsIT: SkillsData = {
  sectionTitle: ["Tecnologie principali", "Stack", "Competenze tecniche"],
  items: [
    { label: "React", icon: "devicon-react-original" },
    { label: "Next.js", icon: "devicon-nextjs-original" },
    { label: "TypeScript", icon: "devicon-typescript-plain" },
    { label: "Sass", icon: "devicon-sass-original" },
    { label: "Git", icon: "devicon-git-plain" },
  ],
  _id: "mock-skills-it",
  _translations: [],
};

export const mockSkillsEN: SkillsData = {
  sectionTitle: ["Main Technologies", "Stack", "Technical Skills"],
  items: [
    { label: "React", icon: "devicon-react-original" },
    { label: "Next.js", icon: "devicon-nextjs-original" },
    { label: "TypeScript", icon: "devicon-typescript-plain" },
    { label: "Sass", icon: "devicon-sass-original" },
    { label: "Git", icon: "devicon-git-plain" },
  ],
  _id: "mock-skills-en",
  _translations: [],
};
