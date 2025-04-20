export type SkillItem = {
  label: string;
  icon?: string;
  image?: {
    asset?: {
      url: string;
    };
    alt?: string;
  };
};

export type SkillsData = {
  sectionTitle: string[];
  items: SkillItem[];
  _id: string;
  _translations: [];
};
