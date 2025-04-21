import { HeroData } from "@schemas/hero";
import { SkillsData } from "@schemas/skills";
import { ExperienceData } from "@schemas/experience";
import { WorksData } from "@schemas/works";
import { AboutData } from "@schemas/about";
import { ContactData } from "@schemas/contact";

import { sanityClient } from "./client";
import {
  heroQuery,
  skillsQuery,
  experienceQuery,
  worksQuery,
  aboutQuery,
  contactQuery,
} from "./queries";

import {
  mockHero,
  mockSkills,
  mockExperience,
  mockWorks,
  mockAbout,
  mockContact,
} from "@mock";

export async function getSections(lang: string): Promise<{
  hero: HeroData;
  skills: SkillsData;
  experience: ExperienceData;
  works: WorksData;
  about: AboutData;
  contact: ContactData;
}> {
  const results = {
    hero: mockHero,
    skills: mockSkills,
    experience: mockExperience,
    works: mockWorks,
    about: mockAbout,
    contact: mockContact,
  };

  try {
    const data = await sanityClient.fetch(heroQuery, { lang });
    if (data) results.hero = data;
  } catch (err) {
    console.warn("⚠️ Hero fetch failed, using mock", err);
  }

  try {
    const data = await sanityClient.fetch(skillsQuery, { lang });
    if (data) results.skills = data;
  } catch (err) {
    console.warn("⚠️ Skills fetch failed, using mock", err);
  }

  try {
    const data = await sanityClient.fetch(experienceQuery, { lang });
    if (data) results.experience = data;
  } catch (err) {
    console.warn("⚠️ Experience fetch failed, using mock", err);
  }

  try {
    const data = await sanityClient.fetch(worksQuery, { lang });
    if (data) results.works = data;
  } catch (err) {
    console.warn("⚠️ Works fetch failed, using mock", err);
  }

  try {
    const data = await sanityClient.fetch(aboutQuery, { lang });
    if (data) results.about = data;
  } catch (err) {
    console.warn("⚠️ About fetch failed, using mock", err);
  }

  try {
    const data = await sanityClient.fetch(contactQuery, { lang });
    if (data) results.contact = data;
  } catch (err) {
    console.warn("⚠️ Contact fetch failed, using mock", err);
  }

  return results;
}
