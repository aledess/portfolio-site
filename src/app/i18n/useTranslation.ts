import { dictionaries, Language } from "./dictionaries";

export function useTranslation(lang: Language) {
  return (key: string): string => {
    const [sectionKey, fieldKey] = key.split(".");

    const section =
      dictionaries[lang]?.[
        sectionKey as keyof (typeof dictionaries)[typeof lang]
      ];
    if (section && typeof section === "object") {
      return (section as Record<string, string>)[fieldKey] || key;
    }

    return key;
  };
}
