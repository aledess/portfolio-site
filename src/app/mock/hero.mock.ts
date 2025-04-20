import { HeroData } from "../types/hero";

export const mockHero: HeroData = {
  title: "Mocked Title",
  subtitle: "Mocked Subtitle",
  description: "This is fallback content for Hero",
  image: {
    asset: { url: "/assets/images/placeholder.jpg" },
    alt: "Mock image alt",
  },
  _id: "mock-hero",
  _translations: [],
};
