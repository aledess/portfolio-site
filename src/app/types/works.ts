import type { ImageAsset } from "./shared";

export type WorkItem = {
  title: string;
  description: string;
  images: ImageAsset[];
  tech: string[];
  link?: string;
};

export type TranslationEntry = {
  _id: string;
  sectionTitle: string[];
  language: string;
};

export type WorksData = {
  sectionTitle: string[];
  items: WorkItem[];
  _id: string;
  _translations: TranslationEntry[];
};
