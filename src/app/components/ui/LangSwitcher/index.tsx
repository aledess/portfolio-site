import { useRouter, usePathname, useSearchParams } from "next/navigation";
import styles from "./styles.module.scss";
import classNames from "classnames";
import Image from "next/image";
import { motion } from "framer-motion";

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
      {LANGUAGES.map(({ id, icon, label }) => {
        const isActive = lang === id;

        return (
          <button
            key={id}
            onClick={() => handleChange(id as "it" | "en")}
            className={classNames(styles.langSwitcher__button, {
              [styles["langSwitcher__button--active"]]: isActive,
            })}
            aria-label={`Cambia lingua in ${label}`}
          >
            <motion.div
              animate={
                isActive ? { rotate: [0, 20, -10, 5, 0] } : { rotate: 0 }
              }
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <Image
                src={icon}
                alt={label}
                width={20}
                height={20}
                className={styles.langSwitcher__flag}
              />
            </motion.div>
          </button>
        );
      })}
    </div>
  );
}
