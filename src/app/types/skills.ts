export type SkillItem = {
  label: string;
  icon?: {
    asset?: { url: string };
    alt?: string;
  } | null;
  light?: {
    asset?: { url: string };
    alt?: string;
  };
  dark?: {
    asset?: { url: string };
    alt?: string;
  };
  iconClass?: string | null;
};

export type SkillsData = {
  sectionTitle: string[];
  items: SkillItem[];
  _id: string;
  _translations: [];
};
