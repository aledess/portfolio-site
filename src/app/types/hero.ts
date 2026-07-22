import type { ImageAsset } from "./shared";

export type HeroData = {
  title: string;
  subtitle: string;
  subtitle2?: string;
  image: ImageAsset;
  _id: string;
  _translations: {
    _id: string;
    title: string;
    subtitle: string;
    subtitle2?: string;
    description?: string;
    language: string;
  }[];
};
