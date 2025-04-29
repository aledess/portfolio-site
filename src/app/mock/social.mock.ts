import type { SocialData } from "@/app/types/social";

export const mockSocialIT: SocialData = {
  _id: "mock-socials-it",
  items: [
    {
      label: "LinkedIn",
      light: {
        asset: { url: "/icons/socials/linkedin-light.svg" },
        alt: "LinkedIn chiaro",
      },
      dark: {
        asset: { url: "/icons/socials/linkedin-dark.svg" },
        alt: "LinkedIn scuro",
      },
      url: "https://www.linkedin.com/in/tuo-profilo",
    },
    {
      label: "Curriculum",
      light: {
        asset: { url: "/icons/socials/cv-light.svg" },
        alt: "CV chiaro",
      },
      dark: {
        asset: { url: "/icons/socials/cv-dark.svg" },
        alt: "CV scuro",
      },
      file: {
        asset: { url: "/files/curriculum.pdf" },
      },
    },
    {
      label: "GitHub",
      light: {
        asset: { url: "/icons/socials/github-light.svg" },
        alt: "GitHub chiaro",
      },
      dark: {
        asset: { url: "/icons/socials/github-dark.svg" },
        alt: "GitHub scuro",
      },
      url: "https://github.com/tuo-username",
    },
  ],
  _translations: [],
};

export const mockSocialEN: SocialData = {
  _id: "mock-socials-en",
  items: [
    {
      label: "LinkedIn",
      light: {
        asset: { url: "/icons/socials/linkedin-light.svg" },
        alt: "LinkedIn light",
      },
      dark: {
        asset: { url: "/icons/socials/linkedin-dark.svg" },
        alt: "LinkedIn dark",
      },
      url: "https://www.linkedin.com/in/your-profile",
    },
    {
      label: "Resume",
      light: {
        asset: { url: "/icons/socials/cv-light.svg" },
        alt: "Resume light",
      },
      dark: {
        asset: { url: "/icons/socials/cv-dark.svg" },
        alt: "Resume dark",
      },
      file: {
        asset: { url: "/files/resume.pdf" },
      },
    },
    {
      label: "GitHub",
      light: {
        asset: { url: "/icons/socials/github-light.svg" },
        alt: "GitHub light",
      },
      dark: {
        asset: { url: "/icons/socials/github-dark.svg" },
        alt: "GitHub dark",
      },
      url: "https://github.com/your-username",
    },
  ],
  _translations: [],
};
