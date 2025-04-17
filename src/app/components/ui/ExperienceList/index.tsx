"use client";
import styles from "./styles.module.scss";
import Text from "@components/ui/Text";

type Experience = {
  date: string;
  company: string;
  description: string;
};

export default function ExperienceList({
  experiences,
}: {
  experiences: Experience[];
}) {
  return (
    <div className={styles["experience-list"]}>
      <div className={styles["experience-list__timeline"]}>
        <div className={styles["experience-list__line"]} />
      </div>
      <div className={styles["experience-list__content"]}>
        {experiences.map((exp, index) => (
          <div key={index} className={styles["experience-list__item"]}>
            <Text as="span" variant="label" color="secondary">
              {exp.date}
            </Text>
            <Text
              as="h3"
              variant="headingM"
              className={styles["experience-list__company"]}
            >
              {exp.company}
            </Text>
            <Text
              as="p"
              variant="body"
              className={styles["experience-list__description"]}
              c
            >
              {exp.description}
            </Text>
          </div>
        ))}
      </div>
    </div>
  );
}
