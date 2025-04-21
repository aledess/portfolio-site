export default function resolveProductionUrl(): string {
  // TODO: fixare lettura corretta di process.env in Sanity Studio (env letti = hardcoded fallback)
  console.log("🟡 [Preview] BASE_URL:", process.env.NEXT_PUBLIC_BASE_URL);
  console.log("🟡 [Preview] SECRET:", process.env.SANITY_PREVIEW_SECRET);

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  const secret =
    process.env.SANITY_PREVIEW_SECRET || "sk_93as0d2a0sd0adkk021jk9q8w";

  return `${baseUrl}/api/preview?secret=${secret}&slug=/`;
}
