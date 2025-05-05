import type { ImageAsset } from "./shared";

export type SocialItem = {
  label: string;
  light: ImageAsset;
  dark: ImageAsset;
  url?: string;
  file?: {
    asset: { url: string };
  };
};

export type SocialData = {
  _id: string;
  items: SocialItem[];
  _translations?: Array<{
    _id: string;
    items: SocialItem[];
    language: string;
  }>;
};
