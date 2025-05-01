import type { ImageAsset } from "./shared";
export type AboutData = {
  sectionTitle: string[];
  description?: string;
  steps: AboutStep[];
};

export type AboutStep = {
  title?: string; // titolo visivo del blocco
  image: ImageAsset;
  box1?: string; // voce principale (es. in alto a sinistra)
  box2?: string; // voce secondaria (es. in basso a destra)
};
