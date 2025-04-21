import { mockHeroIT, mockHeroEN } from "./hero.mock";
import { mockSkillsIT, mockSkillsEN } from "./skills.mock";
import { mockExperienceIT, mockExperienceEN } from "./experience.mock";
import { mockWorksIT, mockWorksEN } from "./works.mock";
import { mockAboutIT, mockAboutEN } from "./about.mock";
import { mockContactIT, mockContactEN } from "./contact.mock";

export const localizedMocks = {
  hero: { it: mockHeroIT, en: mockHeroEN },
  skills: { it: mockSkillsIT, en: mockSkillsEN },
  experience: { it: mockExperienceIT, en: mockExperienceEN },
  works: { it: mockWorksIT, en: mockWorksEN },
  about: { it: mockAboutIT, en: mockAboutEN },
  contact: { it: mockContactIT, en: mockContactEN },
};
