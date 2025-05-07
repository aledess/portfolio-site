"use client";

import Text from "@components/ui/Text";
import Image from "next/image";
import styles from "./styles.module.scss";

export default function Maintenance() {
  return (
    <div className={styles["maintenance__wrapper"]}>
      <div className={styles["maintenance__box"]}>
        <div className={styles["maintenance__language-block"]}>
          <div className={styles["maintenance__language"]}>
            <Image
              src="/images/it.png"
              alt="Italiano"
              width={20}
              height={20}
              className={styles["maintenance__flag"]}
            />
            <Text
              as="h1"
              variant="label"
              color="accent"
              className={styles["maintenance__text"]}
            >
              Il sito è temporaneamente in manutenzione.
            </Text>
          </div>

          <div className={styles["maintenance__language"]}>
            <Image
              src="/images/en.png"
              alt="English"
              width={20}
              height={20}
              className={styles["maintenance__flag"]}
            />
            <Text
              as="h1"
              variant="label"
              color="accent"
              className={styles["maintenance__text"]}
            >
              The site is temporarily under maintenance.
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
}
