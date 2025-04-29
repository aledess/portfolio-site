import { useRouter, usePathname, useSearchParams } from "next/navigation";
import styles from "./styles.module.scss";
import classNames from "classnames";
import Image from "next/image";

const LANGUAGES = [
  { id: "it", label: "Italiano", icon: "/images/it.png" },
  { id: "en", label: "English", icon: "/images/en.png" },
];

type Props = {
  lang: "it" | "en";
};

export default function LangSwitcher({ lang }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleChange = (newLang: "it" | "en") => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("lang", newLang);
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className={styles.langSwitcher}>
      {LANGUAGES.map(({ id, icon, label }) => (
        <button
          key={id}
          onClick={() => handleChange(id as "it" | "en")}
          className={classNames(styles.langSwitcher__button, {
            [styles["langSwitcher__button--active"]]: lang === id,
          })}
          aria-label={`Cambia lingua in ${label}`}
        >
          <Image
            src={icon}
            alt={label}
            width={20}
            height={20}
            className={styles.langSwitcher__flag}
          />
        </button>
      ))}
    </div>
  );
}
