import type { ImageAsset } from "./shared";

export type AboutItem = {
  title: string;
  image: ImageAsset;
  height: number;
};

export type AboutData = {
  sectionTitle: string[];
  description: string;
  items: AboutItem[];
};
