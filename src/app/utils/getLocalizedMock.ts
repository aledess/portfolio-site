export function getLocalizedMock<T>(
  lang: string,
  mocks: Record<string, T>,
  fallbackLang = "it",
): T {
  return mocks[lang] ?? mocks[fallbackLang];
}
