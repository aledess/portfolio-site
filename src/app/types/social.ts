import type { ImageAsset } from "./shared";

export type SocialItem = {
  label: string;
  light?: ImageAsset;
  dark?: ImageAsset;
  url?: string | null;
  file?: {
    asset: { url: string } | null;
  } | null;
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
