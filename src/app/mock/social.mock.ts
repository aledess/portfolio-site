import { SocialData } from "@app/types/social";
import itImage from "@/assets/images/it.png";

export const mockSocialIT: SocialData = {
  items: [
    {
      label: "LinkedIn",
      url: "https://linkedin.com/in/tuo-profilo",
      icon: {
        asset: { url: itImage.src },
        alt: "LinkedIn",
      },
    },
    {
      label: "GitHub",
      url: "https://github.com/tuo-username",
      icon: {
        asset: { url: itImage.src },
        alt: "GitHub",
      },
    },
    {
      label: "Scarica CV",
      url: "/cv-ita.pdf",
      icon: {
        asset: { url: itImage.src },
        alt: "CV",
      },
    },
  ],
  showSocialInContact: true,
  showSocialSidebar: false,
};

export const mockSocialEN: SocialData = {
  items: [
    {
      label: "LinkedIn",
      url: "https://linkedin.com/in/your-profile",
      icon: {
        asset: { url: itImage.src },
        alt: "LinkedIn",
      },
    },
    {
      label: "GitHub",
      url: "https://github.com/your-username",
      icon: {
        asset: { url: itImage.src },
        alt: "GitHub",
      },
    },
    {
      label: "Download CV",
      url: "/cv-en.pdf",
      icon: {
        asset: { url: itImage.src },
        alt: "CV",
      },
    },
  ],
  showSocialInContact: true,
  showSocialSidebar: false,
};
