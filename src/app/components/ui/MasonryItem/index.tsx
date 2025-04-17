import Image from "next/image";
import styles from "./styles.module.scss";
import Text from "@components/ui/Text";

type MasonryItemProps = {
  src: string;
  alt: string;
  caption: string;
  height: number;
};

export default function MasonryItem({
  src,
  alt,
  caption,
  height,
}: MasonryItemProps) {
  return (
    <div className={styles.item} style={{ height }}>
      <div className={styles.imageWrapper}>
        <Image
          src={src}
          alt={alt}
          fill
          className={styles.image}
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <Text as="span" variant="labelL" className={styles.caption}>
        {caption}
      </Text>
    </div>
  );
}
