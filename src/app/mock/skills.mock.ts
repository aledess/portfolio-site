import { SkillItem, SkillsData } from "@schemas/skills";

const items: SkillItem[] = [
  {
    light: {
      asset: {
        url: "/icons/skills/html-light.svg",
      },
      alt: "HTML",
    },
    dark: {
      asset: {
        url: "/icons/skills/html-dark.svg",
      },
      alt: "HTML",
    },
    label: "HTML",
  },
  {
    label: "CSS",
    light: {
      asset: {
        url: "/icons/skills/css-light.svg",
      },
      alt: "CSS",
    },
    dark: {
      asset: {
        url: "/icons/skills/css-dark.svg",
      },
      alt: "CSS",
    },
  },
  {
    dark: {
      asset: {
        url: "/icons/skills/javascript-dark.svg",
      },
      alt: "Javascript",
    },
    label: "Javascript",
    light: {
      asset: {
        url: "/icons/skills/javascript-light.svg",
      },
      alt: "Javascript",
    },
  },
  {
    label: "Typescript",
    light: {
      asset: {
        url: "/icons/skills/typescript-light.svg",
      },
      alt: "Typescript",
    },
    dark: {
      asset: {
        url: "/icons/skills/typescript-dark.svg",
      },
      alt: "Typescript",
    },
  },
  {
    label: "React",
    light: {
      asset: {
        url: "/icons/skills/react-light.svg",
      },
      alt: "React",
    },
    dark: {
      asset: {
        url: "/icons/skills/react-dark.svg",
      },
      alt: "React",
    },
  },
  {
    label: "NextJS",
    light: {
      asset: {
        url: "/icons/skills/nextjs-light.svg",
      },
      alt: "NextJS",
    },
    dark: {
      asset: {
        url: "/icons/skills/nextjs-dark.svg",
      },
      alt: "NextJS",
    },
  },
  {
    label: "Angular",
    light: {
      asset: {
        url: "/icons/skills/angular-light.svg",
      },
      alt: "Angular",
    },
    dark: {
      asset: {
        url: "/icons/skills/angular-dark.svg",
      },
      alt: "Angular",
    },
  },
  {
    dark: {
      asset: {
        url: "/icons/skills/ionic-dark.svg",
      },
      alt: "Ionic",
    },
    label: "Ionic",
    light: {
      asset: {
        url: "/icons/skills/ionic-light.svg",
      },
      alt: "Ionic",
    },
  },
  {
    label: "React Native",
    light: {
      asset: {
        url: "/icons/skills/react-native-light.svg",
      },
      alt: "React Native",
    },
    dark: {
      asset: {
        url: "/icons/skills/react-native-dark.svg",
      },
      alt: "React Native",
    },
  },
  {
    light: {
      asset: {
        url: "/icons/skills/sass-light.svg",
      },
      alt: "Sass",
    },
    dark: {
      asset: {
        url: "/icons/skills/sass-dark.svg",
      },
      alt: "Sass",
    },
    label: "Sass",
  },
  {
    light: {
      asset: {
        url: "/icons/skills/styled-components-light.svg",
      },
      alt: "Styled Components",
    },
    dark: {
      asset: {
        url: "/icons/skills/styled-components-dark.svg",
      },
      alt: "Styled Components",
    },
    label: "Styled Components",
  },
  {
    label: "Antd",
    light: {
      asset: {
        url: "/icons/skills/antd-light.svg",
      },
      alt: "Antd",
    },
    dark: {
      asset: {
        url: "/icons/skills/antd-dark.svg",
      },
      alt: "Antd",
    },
  },
  {
    dark: {
      asset: {
        url: "/icons/skills/materialui-dark.svg",
      },
      alt: "MaterialUI",
    },
    label: "MaterialUI",
    light: {
      asset: {
        url: "/icons/skills/materialui-light.svg",
      },
      alt: "MaterialUI",
    },
  },
  {
    label: "Bulma",
    light: {
      asset: {
        url: "/icons/skills/bulma-light.svg",
      },
      alt: "Bulma",
    },
    dark: {
      asset: {
        url: "/icons/skills/bulma-dark.svg",
      },
      alt: "Bulma",
    },
  },
  {
    dark: {
      asset: {
        url: "/icons/skills/npm-dark.svg",
      },
      alt: "Npm",
    },
    label: "Npm",
    light: {
      asset: {
        url: "/icons/skills/npm-light.svg",
      },
      alt: "Npm",
    },
  },
  {
    dark: {
      asset: {
        url: "/icons/skills/yarn-dark.svg",
      },
      alt: "Yarn",
    },
    label: "Yarn",
    light: {
      asset: {
        url: "/icons/skills/yarn-light.svg",
      },
      alt: "Yarn",
    },
  },
  {
    label: "Webpack",
    light: {
      asset: {
        url: "/icons/skills/webpack-light.svg",
      },
      alt: "Webpack",
    },
    dark: {
      asset: {
        url: "/icons/skills/webpack-dark.svg",
      },
      alt: "Webpack",
    },
  },
  {
    label: "Sanity",
    light: {
      asset: {
        url: "/icons/skills/sanity-light.svg",
      },
      alt: "Sanity",
    },
    dark: {
      asset: {
        url: "/icons/skills/sanity-dark.svg",
      },
      alt: "Sanity",
    },
  },
  {
    label: "Strapi",
    light: {
      asset: {
        url: "/icons/skills/strapi-light.svg",
      },
      alt: "Strapi",
    },
    dark: {
      asset: {
        url: "/icons/skills/strapi-dark.svg",
      },
      alt: "Strapi",
    },
  },
  {
    label: "Git",
    light: {
      asset: {
        url: "/icons/skills/git-light.svg",
      },
      alt: "Git",
    },
    dark: {
      asset: {
        url: "/icons/skills/git-dark.svg",
      },
      alt: "Git",
    },
  },
  {
    label: "Bitbucket",
    light: {
      asset: {
        url: "/icons/skills/bitbucket-light.svg",
      },
      alt: "Bitbucket",
    },
    dark: {
      asset: {
        url: "/icons/skills/bitbucket-dark.svg",
      },
      alt: "Bitbucket",
    },
  },
  {
    label: "Jira",
    light: {
      asset: {
        url: "/icons/skills/jira-light.svg",
      },
      alt: "Jira",
    },
    dark: {
      asset: {
        url: "/icons/skills/jira-dark.svg",
      },
      alt: "Jira",
    },
  },
  {
    label: "Github",
    light: {
      asset: {
        url: "/icons/skills/github-light.svg",
      },
      alt: "Github",
    },
    dark: {
      asset: {
        url: "/icons/skills/github-dark.svg",
      },
      alt: "Github",
    },
  },
  {
    label: "Jenkins",
    light: {
      asset: {
        url: "/icons/skills/jenkins-light.svg",
      },
      alt: "Jenkins",
    },
    dark: {
      asset: {
        url: "/icons/skills/jenkins-dark.svg",
      },
      alt: "Jenkins",
    },
  },
  {
    label: "Bitrise",
    light: {
      asset: {
        url: "/icons/skills/bitrise-light.svg",
      },
      alt: "Bitrise",
    },
    dark: {
      asset: {
        url: "/icons/skills/bitrise-dark.svg",
      },
      alt: "Bitrise",
    },
  },
  {
    label: "Postman",
    light: {
      asset: {
        url: "/icons/skills/postman-light.svg",
      },
      alt: "Postman",
    },
    dark: {
      asset: {
        url: "/icons/skills/postman-dark.svg",
      },
      alt: "Postman",
    },
  },
  {
    label: "Xcode",
    light: {
      asset: {
        url: "/icons/skills/xcode-light.svg",
      },
      alt: "Xcode",
    },
    dark: {
      asset: {
        url: "/icons/skills/xcode-dark.svg",
      },
      alt: "Xcode",
    },
  },
];

export const mockSkillsIT: SkillsData = {
  sectionTitle: ["Competenze", "Le mie skill", "Stack Tecnologico"],
  _id: "mock-skills-it",
  _translations: [],
  items,
};

export const mockSkillsEN: SkillsData = {
  sectionTitle: ["Skills", "What I Use", "Tech Stack"],
  _id: "mock-skills-en",
  _translations: [],
  items,
};
