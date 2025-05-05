import type { ImageAsset } from "./shared";
export type AboutData = {
  sectionTitle: string[];
  steps: AboutStep[];
};

export type AboutStep = {
  title?: string;
  image: ImageAsset;
};
