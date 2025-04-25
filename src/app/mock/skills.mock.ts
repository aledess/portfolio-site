import type { SkillsData } from "@schemas/skills";

// TODO: Riportare SVG una volta risolta la gestione delle immagini statiche
const items = [
  { label: "Angular", iconClass: "devicon-angularjs-plain" },
  { label: "Ant Design", iconClass: "devicon-antdesign-plain" },
  { label: "Bitbucket", iconClass: "devicon-bitbucket-original" },
  { label: "Bitrise", iconClass: "devicon-bitrise-plain" },
  { label: "Bulma", iconClass: "devicon-bulma-plain" },
  { label: "CSS3", iconClass: "devicon-css3-plain" },
  { label: "Git", iconClass: "devicon-git-plain" },
  { label: "GitHub", iconClass: "devicon-github-original" },
  { label: "HTML5", iconClass: "devicon-html5-plain" },
  { label: "Ionic", iconClass: "devicon-ionic-original" },
  { label: "JavaScript", iconClass: "devicon-javascript-plain" },
  { label: "Jenkins", iconClass: "devicon-jenkins-plain" },
  { label: "Jira", iconClass: "devicon-jira-plain" },
  { label: "Material UI", iconClass: "devicon-materialui-plain" },
  { label: "Next.js", iconClass: "devicon-nextjs-original" },
  { label: "NPM", iconClass: "devicon-npm-original-wordmark" },
  { label: "Postman", iconClass: "devicon-postman-plain" },
  { label: "React", iconClass: "devicon-react-original" },
  { label: "React Native", iconClass: "devicon-react-original" },
  { label: "Redux", iconClass: "devicon-redux-original" },
  { label: "Sanity", iconClass: "devicon-sanity-plain" },
  { label: "Sass", iconClass: "devicon-sass-original" },
  { label: "Strapi", iconClass: "devicon-strapi-plain" },
  { label: "Styled Components", iconClass: "devicon-styledcomponents-plain" },
  { label: "TypeScript", iconClass: "devicon-typescript-plain" },
  { label: "Webpack", iconClass: "devicon-webpack-plain" },
  { label: "Xcode", iconClass: "devicon-xcode-plain" },
  { label: "Yarn", iconClass: "devicon-yarn-plain" },
];

export const mockSkillsIT: SkillsData = {
  sectionTitle: [
    "Skills",
    "Tecnologie che uso",
    "Stack Frontend",
    "Competenze tecniche",
  ],
  _id: "mock-skills-it",
  _translations: [],
  items,
};

export const mockSkillsEN: SkillsData = {
  sectionTitle: [
    "Skills",
    "Technologies I Use",
    "Frameworks & Tools",
    "Frontend Stack",
  ],
  _id: "mock-skills-en",
  _translations: [],
  items,
};
