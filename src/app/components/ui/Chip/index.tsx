"use client";

import classNames from "classnames";
import styles from "./styles.module.scss";
import Text from "@components/ui/Text";

type ChipProps = {
  label: string;
  className?: string;
};

export default function Chip({ label, className }: ChipProps) {
  return (
    <span className={classNames(styles.chip, className)}>
      <Text as="span" variant="labelS" color="contrast">
        {label}
      </Text>
    </span>
  );
}
