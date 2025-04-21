import { HeroData } from "@schemas/hero";
import heroImage from "@/assets/images/photo.png";

export const mockHeroIT: HeroData = {
  _id: "mock-hero-it",
  title: "Alessandro Dessì",
  subtitle: "Frontend Web Developer",
  description: "Descrizione IT Mocked",
  image: {
    asset: {
      url: heroImage.src,
    },
    alt: "Foto Hero",
  },
  _translations: [],
};

export const mockHeroEN: HeroData = {
  _id: "mock-hero-en",
  title: "Alessandro Dessì",
  subtitle: "Frontend Web Developer",
  description: "Descrizione EN Mocked",
  image: {
    asset: {
      url: heroImage.src,
    },
    alt: "Hero Image",
  },
  _translations: [],
};
