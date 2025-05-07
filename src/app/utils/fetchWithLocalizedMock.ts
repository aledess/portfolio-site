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
    console.warn(`🧪 USE_MOCKS attivo → mock per "${sectionName}"`);
    const sectionMocks = localizedMocks[sectionName] as unknown as Record<
      string,
      T
    >;
    const mock = getLocalizedMock(lang, sectionMocks, fallbackLang);
    console.log(`🧪 [MOCK DATA] ${sectionName}`, mock);
    return mock;
  }

  try {
    console.log(`🌍 Fetching "${sectionName}" [lang: ${lang}]`);
    const data = await fetcher(lang);
    if (data) {
      console.log(`✅ Dati ricevuti per "${sectionName}" [lang: ${lang}]`);
      return data;
    }

    if (lang !== fallbackLang) {
      console.warn(
        `🌐 Nessun dato per "${sectionName}" in "${lang}", fallback a "${fallbackLang}"`,
      );
      const fallbackData = await fetcher(fallbackLang);
      if (fallbackData) {
        console.log(
          `✅ Fallback ricevuto per "${sectionName}" [lang: ${fallbackLang}]`,
        );
        return fallbackData;
      }
    }

    console.warn(`❌ Nessun dato per "${sectionName}" anche in fallback`);
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
