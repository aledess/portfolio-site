import type { HeroData } from "@schemas/hero";

export const mockHeroIT: HeroData = {
  _id: "mock-hero-it",
  title: "Alessandro Dessì",
  subtitle: "Frontend Web Developer",
  image: {
    asset: {
      url: "/images/photo.png",
    },
    alt: "Foto Hero",
  },
  _translations: [],
};

export const mockHeroEN: HeroData = {
  _id: "mock-hero-en",
  title: "Alessandro Dessì",
  subtitle: "Frontend Web Developer",
  image: {
    asset: {
      url: "/images/photo.png",
    },
    alt: "Hero Image",
  },
  _translations: [],
};
