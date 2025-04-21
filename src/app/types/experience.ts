export type ExperienceItem = {
  date: string;
  company: string;
  description: string;
};

export type ExperienceData = {
  sectionTitle: string[];
  items: ExperienceItem[];
};
