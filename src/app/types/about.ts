import type { ImageAsset } from "./shared";

export type AboutItem = {
  caption: string;
  image: ImageAsset;
  height: number;
  heightMobile?: number;
  fullSpan?: boolean;
};

export type AboutData = {
  sectionTitle: string[];
  description?: string;
  images: AboutItem[];
};
