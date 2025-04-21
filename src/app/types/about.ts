export type AboutItem = {
  title: string;
  image: string;
  height: number;
};

export type AboutData = {
  sectionTitle: string[];
  description: string;
  items: AboutItem[];
};
