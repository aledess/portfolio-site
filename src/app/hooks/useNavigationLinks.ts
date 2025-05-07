import { useTranslation } from "@/app/i18n/useTranslation";

export const useNavigationLinks = (lang: "it" | "en", hideContact = false) => {
  const t = useTranslation(lang);

  const links = [
    { label: t("navigation.home"), href: "#home" },
    { label: t("navigation.about"), href: "#about" },
    { label: t("navigation.skills"), href: "#skills" },
    { label: t("navigation.experience"), href: "#experience" },
    { label: t("navigation.works"), href: "#works" },
  ];

  if (!hideContact) {
    links.push({ label: t("navigation.contact"), href: "#contact" });
  }

  return links;
};
