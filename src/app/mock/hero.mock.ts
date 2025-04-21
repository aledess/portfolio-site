import type { HeroData } from "@schemas/hero";

export const mockHero: HeroData = {
  _id: "mock-hero",
  title: "Mocked Title",
  subtitle: "Mocked Subtitle",
  description: "This is fallback content for Hero.",
  image: {
    asset: { url: "/assets/images/photo.png" },
    alt: "Mock image",
  },
  _translations: [],
};
