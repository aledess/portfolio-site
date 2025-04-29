import type { SkillsData } from "@schemas/skills";

const items = [
  {
    label: "Angular",
    light: {
      asset: { url: "/icons/skills/angular-light.svg" },
      alt: "Angular icon light",
    },
    dark: {
      asset: { url: "/icons/skills/angular-dark.svg" },
      alt: "Angular icon dark",
    },
  },
  {
    label: "Ant Design",
    light: {
      asset: { url: "/icons/skills/antd-light.svg" },
      alt: "Ant Design icon light",
    },
    dark: {
      asset: { url: "/icons/skills/antd-dark.svg" },
      alt: "Ant Design icon dark",
    },
  },
  {
    label: "Bitbucket",
    light: {
      asset: { url: "/icons/skills/bitbucket-light.svg" },
      alt: "Bitbucket icon light",
    },
    dark: {
      asset: { url: "/icons/skills/bitbucket-dark.svg" },
      alt: "Bitbucket icon dark",
    },
  },
  {
    label: "Bitrise",
    light: {
      asset: { url: "/icons/skills/bitrise-light.svg" },
      alt: "Bitrise icon light",
    },
    dark: {
      asset: { url: "/icons/skills/bitrise-dark.svg" },
      alt: "Bitrise icon dark",
    },
  },
  {
    label: "Bulma",
    light: {
      asset: { url: "/icons/skills/bulma-light.svg" },
      alt: "Bulma icon light",
    },
    dark: {
      asset: { url: "/icons/skills/bulma-dark.svg" },
      alt: "Bulma icon dark",
    },
  },
  {
    label: "CSS3",
    light: {
      asset: { url: "/icons/skills/css-light.svg" },
      alt: "CSS3 icon light",
    },
    dark: {
      asset: { url: "/icons/skills/css-dark.svg" },
      alt: "CSS3 icon dark",
    },
  },
  {
    label: "Git",
    light: {
      asset: { url: "/icons/skills/git-light.svg" },
      alt: "Git icon light",
    },
    dark: {
      asset: { url: "/icons/skills/git-dark.svg" },
      alt: "Git icon dark",
    },
  },
  {
    label: "GitHub",
    light: {
      asset: { url: "/icons/skills/github-light.svg" },
      alt: "GitHub icon light",
    },
    dark: {
      asset: { url: "/icons/skills/github-dark.svg" },
      alt: "GitHub icon dark",
    },
  },
  {
    label: "HTML5",
    light: {
      asset: { url: "/icons/skills/html-light.svg" },
      alt: "HTML5 icon light",
    },
    dark: {
      asset: { url: "/icons/skills/html-dark.svg" },
      alt: "HTML5 icon dark",
    },
  },
  {
    label: "Ionic",
    light: {
      asset: { url: "/icons/skills/ionic-light.svg" },
      alt: "Ionic icon light",
    },
    dark: {
      asset: { url: "/icons/skills/ionic-dark.svg" },
      alt: "Ionic icon dark",
    },
  },
  {
    label: "JavaScript",
    light: {
      asset: { url: "/icons/skills/javascript-light.svg" },
      alt: "JavaScript icon light",
    },
    dark: {
      asset: { url: "/icons/skills/javascript-dark.svg" },
      alt: "JavaScript icon dark",
    },
  },
  {
    label: "Jenkins",
    light: {
      asset: { url: "/icons/skills/jenkins-light.svg" },
      alt: "Jenkins icon light",
    },
    dark: {
      asset: { url: "/icons/skills/jenkins-dark.svg" },
      alt: "Jenkins icon dark",
    },
  },
  {
    label: "Jira",
    light: {
      asset: { url: "/icons/skills/jira-light.svg" },
      alt: "Jira icon light",
    },
    dark: {
      asset: { url: "/icons/skills/jira-dark.svg" },
      alt: "Jira icon dark",
    },
  },
  {
    label: "Material UI",
    light: {
      asset: { url: "/icons/skills/materialui-light.svg" },
      alt: "Material UI icon light",
    },
    dark: {
      asset: { url: "/icons/skills/materialui-dark.svg" },
      alt: "Material UI icon dark",
    },
  },
  {
    label: "Next.js",
    light: {
      asset: { url: "/icons/skills/nextjs-light.svg" },
      alt: "Next.js icon light",
    },
    dark: {
      asset: { url: "/icons/skills/nextjs-dark.svg" },
      alt: "Next.js icon dark",
    },
  },
  {
    label: "NPM",
    light: {
      asset: { url: "/icons/skills/npm-light.svg" },
      alt: "NPM icon light",
    },
    dark: {
      asset: { url: "/icons/skills/npm-dark.svg" },
      alt: "NPM icon dark",
    },
  },
  {
    label: "Postman",
    light: {
      asset: { url: "/icons/skills/postman-light.svg" },
      alt: "Postman icon light",
    },
    dark: {
      asset: { url: "/icons/skills/postman-dark.svg" },
      alt: "Postman icon dark",
    },
  },
  {
    label: "React",
    light: {
      asset: { url: "/icons/skills/react-light.svg" },
      alt: "React icon light",
    },
    dark: {
      asset: { url: "/icons/skills/react-dark.svg" },
      alt: "React icon dark",
    },
  },
  {
    label: "React Native",
    light: {
      asset: { url: "/icons/skills/react-native-light.svg" },
      alt: "React Native icon light",
    },
    dark: {
      asset: { url: "/icons/skills/react-native-dark.svg" },
      alt: "React Native icon dark",
    },
  },
  {
    label: "Redux",
    light: {
      asset: { url: "/icons/skills/redux-light.svg" },
      alt: "Redux icon light",
    },
    dark: {
      asset: { url: "/icons/skills/redux-dark.svg" },
      alt: "Redux icon dark",
    },
  },
  {
    label: "Sanity",
    light: {
      asset: { url: "/icons/skills/sanity-light.svg" },
      alt: "Sanity icon light",
    },
    dark: {
      asset: { url: "/icons/skills/sanity-dark.svg" },
      alt: "Sanity icon dark",
    },
  },
  {
    label: "Sass",
    light: {
      asset: { url: "/icons/skills/sass-light.svg" },
      alt: "Sass icon light",
    },
    dark: {
      asset: { url: "/icons/skills/sass-dark.svg" },
      alt: "Sass icon dark",
    },
  },
  {
    label: "Strapi",
    light: {
      asset: { url: "/icons/skills/strapi-light.svg" },
      alt: "Strapi icon light",
    },
    dark: {
      asset: { url: "/icons/skills/strapi-dark.svg" },
      alt: "Strapi icon dark",
    },
  },
  {
    label: "Styled Components",
    light: {
      asset: { url: "/icons/skills/styled-components-light.svg" },
      alt: "Styled Components icon light",
    },
    dark: {
      asset: { url: "/icons/skills/styled-components-dark.svg" },
      alt: "Styled Components icon dark",
    },
  },
  {
    label: "TypeScript",
    light: {
      asset: { url: "/icons/skills/typescript-light.svg" },
      alt: "TypeScript icon light",
    },
    dark: {
      asset: { url: "/icons/skills/typescript-dark.svg" },
      alt: "TypeScript icon dark",
    },
  },
  {
    label: "Webpack",
    light: {
      asset: { url: "/icons/skills/webpack-light.svg" },
      alt: "Webpack icon light",
    },
    dark: {
      asset: { url: "/icons/skills/webpack-dark.svg" },
      alt: "Webpack icon dark",
    },
  },
  {
    label: "Xcode",
    light: {
      asset: { url: "/icons/skills/xcode-light.svg" },
      alt: "Xcode icon light",
    },
    dark: {
      asset: { url: "/icons/skills/xcode-dark.svg" },
      alt: "Xcode icon dark",
    },
  },
  {
    label: "Yarn",
    light: {
      asset: { url: "/icons/skills/yarn-light.svg" },
      alt: "Yarn icon light",
    },
    dark: {
      asset: { url: "/icons/skills/yarn-dark.svg" },
      alt: "Yarn icon dark",
    },
  },
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
