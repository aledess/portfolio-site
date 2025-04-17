import { ReactNode, ElementType, ComponentPropsWithoutRef } from "react";
import styles from "./styles.module.scss";
import classNames from "classnames";

export type Variant =
  | "headingM"
  | "headingL"
  | "headingXL"
  | "body"
  | "label"
  | "labelS"
  | "labelL";

export type Color =
  | "primary"
  | "secondary"
  | "tertiary"
  | "accent"
  | "contrast"
  | "inherit";

type TextProps<T extends ElementType> = {
  children: ReactNode;
  variant?: Variant;
  color?: Color;
  as?: T;
  className?: string;
} & ComponentPropsWithoutRef<T>;

export default function Text<T extends ElementType = "p">({
  children,
  variant = "body",
  color = "inherit",
  as,
  className,
  ...rest
}: TextProps<T>) {
  const Tag = as || "p";

  return (
    <Tag
      className={classNames(
        styles.text,
        styles[`text--${variant}`],
        styles[`text--${color}`],
        className,
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
}
