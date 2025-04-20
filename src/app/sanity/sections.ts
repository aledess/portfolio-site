import { sanityClient } from "./client";
import { heroQuery, skillsQuery } from "./queries";

export const getSections = async (lang: string) => {
  console.log("🧪 Fetching sections for lang:", lang);

  const [hero, skills] = await Promise.all([
    sanityClient.fetch(heroQuery, { lang }),
    sanityClient.fetch(skillsQuery, { lang }),
  ]);

  console.log("🪄 Hero result:", hero);
  console.log("🛠 Skills result:", skills);

  return {
    hero,
    skills,
  };
};
