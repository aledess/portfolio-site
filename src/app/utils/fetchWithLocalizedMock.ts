import { getLocalizedMock } from "./getLocalizedMock";
import { localizedMocks } from "@mock";
import { USE_MOCKS } from "@config";

export async function fetchWithLocalizedMock<T>(
  sectionName: keyof typeof localizedMocks,
  fetcher: (lang: string) => Promise<T | null | undefined>,
  lang: string,
  fallbackLang: string = "it",
): Promise<T> {
  if (USE_MOCKS) {
    const sectionMocks = localizedMocks[sectionName] as unknown as Record<
      string,
      T
    >;
    const mock = getLocalizedMock(lang, sectionMocks, fallbackLang);
    return mock;
  }

  try {
    const data = await fetcher(lang);
    if (data) {
      return data;
    }

    if (lang !== fallbackLang) {
      const fallbackData = await fetcher(fallbackLang);
      if (fallbackData) {
        return fallbackData;
      }
    }
  } catch (err) {
    console.error(`💥 Errore fetch per "${sectionName}" [lang: ${lang}]`, err);
  }

  const sectionMocks = localizedMocks[sectionName] as unknown as Record<
    string,
    T
  >;
  const mock = getLocalizedMock(lang, sectionMocks, fallbackLang);
  console.warn(`🛟 Uso mock di fallback per "${sectionName}"`, mock);
  return mock;
}
