import { HeroData } from "./hero";
import { SkillsData } from "./skills";
import { ExperienceData } from "./experience";
import { WorksData } from "./works";
import { AboutData } from "./about";
import { ContactData } from "./contact";
import { SocialData } from "./social";
import { SettingsData } from "./settings";

export type SectionsData = {
  hero: HeroData;
  skills: SkillsData;
  experience: ExperienceData;
  works: WorksData;
  about: AboutData;
  contact: ContactData;
  social: SocialData;
  settings: SettingsData;
};
