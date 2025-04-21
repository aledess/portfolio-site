// src/app/types/sections.ts
import { HeroData } from "./hero";
import { SkillsData } from "./skills";
import { ExperienceData } from "./experience";
import { WorksData } from "./works";
import { AboutData } from "./about";
import { ContactData } from "./contact";

export type SectionsData = {
  hero: HeroData;
  skills: SkillsData;
  experience: ExperienceData;
  works: WorksData;
  about: AboutData;
  contact: ContactData;
};
