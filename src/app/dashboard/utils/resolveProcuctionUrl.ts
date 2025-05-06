type Options = {
  slug?: string;
};

export default function resolveProductionUrl({
  slug = "/",
}: Options = {}): string {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  const secret =
    process.env.SANITY_PREVIEW_SECRET || "sk_93as0d2a0sd0adkk021jk9q8w";

  return `${baseUrl}/api/preview?secret=${secret}&slug=${slug}`;
}
