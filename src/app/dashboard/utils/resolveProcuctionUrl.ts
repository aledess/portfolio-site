import { BASE_URL, SANITY_PREVIEW_SECRET } from "@config";

type Options = {
  slug?: string;
};

export function resolveProductionUrl({ slug = "/" }: Options = {}): string {
  return `${BASE_URL}/api/preview?secret=${SANITY_PREVIEW_SECRET}&slug=${slug}`;
}
