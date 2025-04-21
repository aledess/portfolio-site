import { createClient as createSanityClient } from "next-sanity";

const config = {
  projectId: "w4peuxk7",
  dataset: "db",
  apiVersion: "2023-01-01",
};

export const sanityClient = createSanityClient({
  ...config,
  useCdn: true,
});

export const previewClient = createSanityClient({
  ...config,
  useCdn: false,
  token: process.env.SANITY_API_READ_TOKEN,
});

export const getClient = (preview = false) =>
  preview ? previewClient : sanityClient;
