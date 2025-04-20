import { createClient as createSanityClient } from "next-sanity";

export const sanityClient = createSanityClient({
  projectId: "w4peuxk7",
  dataset: "db",
  apiVersion: "2023-01-01",
  useCdn: true,
});
