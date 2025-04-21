import { getLocalizedMock } from "./getLocalizedMock";
import { localizedMocks } from "@mock";
import { USE_MOCKS } from "@config";

export async function fetchWithLocalizedMock<T>(
  sectionName: keyof typeof localizedMocks,
  fetcher: () => Promise<T | null | undefined>,
  lang: string,
  fallbackLang: string = "it",
): Promise<T> {
  if (USE_MOCKS) {
    console.warn(`🧪 USE_MOCKS attivo → mock per "${sectionName}"`);
    const sectionMocks = localizedMocks[sectionName] as unknown as Record<
      string,
      T
    >;
    return getLocalizedMock(lang, sectionMocks, fallbackLang);
  }

  try {
    const data = await fetcher();
    if (data) return data;
  } catch (err) {
    console.warn(
      `⚠️ Fetch failed for "${sectionName}" in lang "${lang}", uso mock`,
      err,
    );
  }

  const sectionMocks = localizedMocks[sectionName] as unknown as Record<
    string,
    T
  >;
  return getLocalizedMock(lang, sectionMocks, fallbackLang);
}
