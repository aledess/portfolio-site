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
    iconClass: null,
    label: "HTML",
    icon: null,
  },
  {
    label: "CSS",
    icon: null,
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
    iconClass: null,
  },
  {
    dark: {
      asset: {
        url: "/icons/skills/javascript-dark.svg",
      },
      alt: "Javascript",
    },
    iconClass: null,
    label: "Javascript",
    icon: null,
    light: {
      asset: {
        url: "/icons/skills/javascript-light.svg",
      },
      alt: "Javascript",
    },
  },
  {
    iconClass: null,
    label: "Typescript",
    icon: null,
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
    icon: null,
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
    iconClass: null,
  },
  {
    label: "NextJS",
    icon: null,
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
    iconClass: null,
  },
  {
    label: "Angular",
    icon: null,
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
    iconClass: null,
  },
  {
    dark: {
      asset: {
        url: "/icons/skills/ionic-dark.svg",
      },
      alt: "Ionic",
    },
    iconClass: null,
    label: "Ionic",
    icon: null,
    light: {
      asset: {
        url: "/icons/skills/ionic-light.svg",
      },
      alt: "Ionic",
    },
  },
  {
    label: "React Native",
    icon: null,
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
    iconClass: null,
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
    iconClass: null,
    label: "Sass",
    icon: null,
  },
  {
    icon: null,
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
    iconClass: null,
    label: "Styled Components",
  },
  {
    label: "Antd",
    icon: null,
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
    iconClass: null,
  },
  {
    dark: {
      asset: {
        url: "/icons/skills/materialui-dark.svg",
      },
      alt: "MaterialUI",
    },
    iconClass: null,
    label: "MaterialUI",
    icon: null,
    light: {
      asset: {
        url: "/icons/skills/materialui-light.svg",
      },
      alt: "MaterialUI",
    },
  },
  {
    label: "Bulma",
    icon: null,
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
    iconClass: null,
  },
  {
    dark: {
      asset: {
        url: "/icons/skills/npm-dark.svg",
      },
      alt: "Npm",
    },
    iconClass: null,
    label: "Npm",
    icon: null,
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
    iconClass: null,
    label: "Yarn",
    icon: null,
    light: {
      asset: {
        url: "/icons/skills/yarn-light.svg",
      },
      alt: "Yarn",
    },
  },
  {
    label: "Webpack",
    icon: null,
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
    iconClass: null,
  },
  {
    label: "Sanity",
    icon: null,
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
    iconClass: null,
  },
  {
    label: "Strapi",
    icon: null,
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
    iconClass: null,
  },
  {
    label: "Git",
    icon: null,
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
    iconClass: null,
  },
  {
    label: "Bitbucket",
    icon: null,
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
    iconClass: null,
  },
  {
    label: "Jira",
    icon: null,
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
    iconClass: null,
  },
  {
    label: "Github",
    icon: null,
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
    iconClass: null,
  },
  {
    iconClass: null,
    label: "Jenkins",
    icon: null,
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
    icon: null,
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
    iconClass: null,
  },
  {
    label: "Postman",
    icon: null,
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
    iconClass: null,
  },
  {
    iconClass: null,
    label: "Xcode",
    icon: null,
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
  sectionTitle: ["Skills", "Strumenti che uso", "Tecnologie che conosco"],
  _id: "mock-skills-it",
  _translations: [],
  items,
};

export const mockSkillsEN: SkillsData = {
  sectionTitle: ["Skills", "Tools I Use", "Technologies I Know"],
  _id: "mock-skills-en",
  _translations: [],
  items,
};
