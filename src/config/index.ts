export const USE_MOCKS = String(process.env.NEXT_PUBLIC_USE_MOCKS) === "true";
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "";
export const SANITY_PROJECT_ID =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";
export const SANITY_DATASET = process.env.NEXT_PUBLIC_SANITY_DATASET || "";
export const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
export const SANITY_PREVIEW_SECRET =
  process.env.SANITY_PREVIEW_SECRET || "sk_93as0d2a0sd0adkk021jk9q8w";
