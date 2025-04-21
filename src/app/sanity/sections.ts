import { HeroData } from "@schemas/hero";
import { SkillsData } from "@schemas/skills";
import { ExperienceData } from "@schemas/experience";
import { WorksData } from "@schemas/works";
import { AboutData } from "@schemas/about";
import { ContactData } from "@schemas/contact";

import { fetchWithLocalizedMock } from "@utils/fetchWithLocalizedMock";
import { sanityClient } from "./client";
import {
  heroQuery,
  skillsQuery,
  experienceQuery,
  worksQuery,
  aboutQuery,
  contactQuery,
} from "./queries";

export async function getSections(lang: string): Promise<{
  hero: HeroData;
  skills: SkillsData;
  experience: ExperienceData;
  works: WorksData;
  about: AboutData;
  contact: ContactData;
}> {
  const hero = await fetchWithLocalizedMock<HeroData>(
    "hero",
    () => sanityClient.fetch(heroQuery, { lang }),
    lang,
  );

  const skills = await fetchWithLocalizedMock<SkillsData>(
    "skills",
    () => sanityClient.fetch(skillsQuery, { lang }),
    lang,
  );

  const experience = await fetchWithLocalizedMock<ExperienceData>(
    "experience",
    () => sanityClient.fetch(experienceQuery, { lang }),
    lang,
  );

  const works = await fetchWithLocalizedMock<WorksData>(
    "works",
    () => sanityClient.fetch(worksQuery, { lang }),
    lang,
  );

  const about = await fetchWithLocalizedMock<AboutData>(
    "about",
    () => sanityClient.fetch(aboutQuery, { lang }),
    lang,
  );

  const contact = await fetchWithLocalizedMock<ContactData>(
    "contact",
    () => sanityClient.fetch(contactQuery, { lang }),
    lang,
  );

  return {
    hero,
    skills,
    experience,
    works,
    about,
    contact,
  };
}
