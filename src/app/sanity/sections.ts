import { HeroData } from "../types/hero";
import { SkillsData } from "../types/skills";
import { sanityClient } from "./client";
import { heroQuery, skillsQuery } from "./queries";
import { mockHero } from "@mock/hero.mock";
import { mockSkills } from "@mock/skills.mock";

export async function getSections(lang: string): Promise<{
  hero: HeroData;
  skills: SkillsData;
}> {
  const results: {
    hero: HeroData;
    skills: SkillsData;
  } = {
    hero: mockHero, // default fallback, verrà sovrascritto se va bene
    skills: mockSkills,
  };

  try {
    results.hero = await sanityClient.fetch(heroQuery, { lang });
  } catch (err) {
    console.warn("⚠️ Hero fetch failed, using mock", err);
  }

  try {
    results.skills = await sanityClient.fetch(skillsQuery, { lang });
  } catch (err) {
    console.warn("⚠️ Skills fetch failed, using mock", err);
  }

  return results;
}
