import Image from "next/image";
import Text from "@components/ui/Text";
import styles from "./styles.module.scss";

type WorkCardProps = {
  image: string;
  title: string;
  description: string;
};

export default function WorkCard({ image, title, description }: WorkCardProps) {
  return (
    <div className={styles["work-card"]}>
      <div className={styles["work-card__imageWrapper"]}>
        <Image
          src={image}
          alt={title}
          fill
          className={styles["work-card__image"]}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div className={styles["work-card__content"]}>
        <Text as="h3" variant="headingM" className={styles["work-card__title"]}>
          {title}
        </Text>
        <Text
          as="p"
          variant="body"
          color="secondary"
          className={styles["work-card__description"]}
        >
          {description}
        </Text>
      </div>
    </div>
  );
}
