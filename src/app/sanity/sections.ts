import { HeroData } from "@schemas/hero";
import { SkillsData } from "@schemas/skills";
import { ExperienceData } from "@schemas/experience";
import { WorksData } from "@schemas/works";
import { AboutData } from "@schemas/about";
import { ContactData } from "@schemas/contact";
import { SocialData } from "@schemas/social";
import { SettingsData } from "@schemas/settings";

import { fetchWithLocalizedMock } from "@utils/fetchWithLocalizedMock";
import { getClient } from "./client";

import {
  heroQuery,
  skillsQuery,
  experienceQuery,
  worksQuery,
  aboutQuery,
  contactQuery,
  socialQuery,
  settingsQuery,
} from "./queries";

export async function getSections(
  lang: string,
  preview: boolean = false,
): Promise<{
  hero: HeroData;
  skills: SkillsData;
  experience: ExperienceData;
  works: WorksData;
  about: AboutData;
  contact: ContactData;
  social: SocialData;
  settings: SettingsData;
}> {
  const client = getClient(preview);

  const hero = await fetchWithLocalizedMock<HeroData>(
    "hero",
    () => client.fetch(heroQuery, { lang }),
    lang,
  );

  const skills = await fetchWithLocalizedMock<SkillsData>(
    "skills",
    () => client.fetch(skillsQuery, { lang }),
    lang,
  );

  const experience = await fetchWithLocalizedMock<ExperienceData>(
    "experience",
    () => client.fetch(experienceQuery, { lang }),
    lang,
  );

  const works = await fetchWithLocalizedMock<WorksData>(
    "works",
    () => client.fetch(worksQuery, { lang }),
    lang,
  );

  const about = await fetchWithLocalizedMock<AboutData>(
    "about",
    () => client.fetch(aboutQuery, { lang }),
    lang,
  );

  const contact = await fetchWithLocalizedMock<ContactData>(
    "contact",
    () => client.fetch(contactQuery, { lang }),
    lang,
  );

  const social = await fetchWithLocalizedMock<SocialData>(
    "social",
    () => client.fetch(socialQuery, { lang }),
    lang,
  );

  const settings = await fetchWithLocalizedMock<SettingsData>(
    "settings",
    () => client.fetch(settingsQuery),
    lang,
  );

  return {
    hero,
    skills,
    experience,
    works,
    about,
    contact,
    social,
    settings,
  };
}
