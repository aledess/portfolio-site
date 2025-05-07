import { SocialData } from "@schemas/social";

export const mockSocialIT: SocialData = {
  _id: "mock-socials-it",
  items: [
    {
      label: "linkedin",
      light: {
        asset: {
          url: "icons/social/linkedin-light.svg",
        },
        alt: "Linkedin icon",
      },
      dark: {
        asset: {
          url: "icons/social/linkedin-dark.svg",
        },
        alt: "Linkedin icon",
      },
      url: "https://www.linkedin.com/in/alessandrodess/",
      file: undefined,
    },
    {
      label: "Github",
      light: {
        asset: {
          url: "icons/social/github-light.svg",
        },
        alt: "Github icon",
      },
      dark: {
        asset: {
          url: "icons/social/github-dark.svg",
        },
        alt: "Github icon",
      },
      url: "https://github.com/aledess",
      file: undefined,
    },
    {
      label: "cv",
      light: {
        asset: {
          url: "icons/social/cv-light.svg",
        },
        alt: "CV Icon",
      },
      dark: {
        asset: {
          url: "icons/social/cv-dark.svg",
        },
        alt: "CV Icon",
      },
      file: {
        asset: {
          url: "files/cv.pdf",
        },
      },
    },
  ],
  _translations: [],
};

export const mockSocialEN: SocialData = {
  _id: "mock-socials-en",
  items: [
    {
      label: "linkedin",
      light: {
        asset: {
          url: "icons/social/linkedin-light.svg",
        },
        alt: "Linkedin icon",
      },
      dark: {
        asset: {
          url: "icons/social/linkedin-dark.svg",
        },
        alt: "Linkedin icon",
      },
      url: "https://www.linkedin.com/in/alessandrodess/",
      file: undefined,
    },
    {
      label: "Github",
      light: {
        asset: {
          url: "icons/social/github-light.svg",
        },
        alt: "Github icon",
      },
      dark: {
        asset: {
          url: "icons/social/github-dark.svg",
        },
        alt: "Github icon",
      },
      url: "https://github.com/aledess",
      file: undefined,
    },
    {
      label: "cv",
      light: {
        asset: {
          url: "icons/social/cv-light.svg",
        },
        alt: "CV Icon",
      },
      dark: {
        asset: {
          url: "icons/social/cv-dark.svg",
        },
        alt: "CV Icon",
      },
      url: undefined,
      file: {
        asset: {
          url: "files/cv.pdf",
        },
      },
    },
  ],
  _translations: [],
};
