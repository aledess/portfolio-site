export type SkillItem = {
  label: string;
  light: {
    asset: { url: string };
    alt: string;
  };
  dark: {
    asset: { url: string };
    alt: string;
  };
};

export type SkillsData = {
  sectionTitle: string[];
  items: SkillItem[];
  _id: string;
  _translations: unknown[];
};
