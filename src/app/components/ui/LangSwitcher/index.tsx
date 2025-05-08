"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import styles from "./styles.module.scss";
import classNames from "classnames";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState, useTransition } from "react";

const LANGUAGES = [
  { id: "it", label: "Italiano", icon: "/images/it.png" },
  { id: "en", label: "English", icon: "/images/en.png" },
];

export default function LangSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentLang = (searchParams.get("lang") as "it" | "en") ?? "it";

  const [loadingLang, setLoadingLang] = useState<"it" | "en" | null>(null);
  const [isPending, startTransition] = useTransition();

  const handleChange = (newLang: "it" | "en") => {
    if (newLang === currentLang) return;

    setLoadingLang(newLang);
    const params = new URLSearchParams(searchParams.toString());
    params.set("lang", newLang);
    const targetUrl = `${pathname}?${params.toString()}`;

    startTransition(() => {
      router.push(targetUrl);
      router.refresh();
    });
  };

  // 🔁 Reset del loader solo quando l'effettivo lang nei parametri cambia
  useEffect(() => {
    if (loadingLang && searchParams.get("lang") === loadingLang) {
      const timeout = setTimeout(() => {
        setLoadingLang(null);
      }, 300); // breve ritardo per evitare flicker visivo

      return () => clearTimeout(timeout);
    }
  }, [searchParams, loadingLang]);

  return (
    <div className={styles.langSwitcher}>
      {LANGUAGES.map(({ id, icon, label }) => {
        const isActive = currentLang === id;
        const isLoading = loadingLang === id;

        return (
          <button
            key={id}
            onClick={() => handleChange(id as "it" | "en")}
            className={classNames(styles.langSwitcher__button, {
              [styles["langSwitcher__button--active"]]: isActive,
            })}
            aria-label={`Cambia lingua in ${label}`}
            disabled={isPending}
          >
            <div className={styles.langSwitcher__iconWrapper}>
              {isLoading && (
                <motion.div
                  className={styles.langSwitcher__circleLoader}
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.2,
                    ease: "linear",
                  }}
                />
              )}
              <motion.div
                animate={
                  isActive ? { rotate: [0, 20, -10, 5, 0] } : { rotate: 0 }
                }
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <Image
                  src={icon}
                  alt={label}
                  width={24}
                  height={24}
                  className={styles.langSwitcher__flag}
                />
              </motion.div>
            </div>
          </button>
        );
      })}
    </div>
  );
}
