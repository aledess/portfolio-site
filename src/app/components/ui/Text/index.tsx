import { ReactNode } from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames';

type Variant = 'headingL' | 'headingM' | 'body' | 'label';
type Color = 'primary' | 'secondary' | 'tertiary' | 'accent' | 'inherit';

type TextProps = {
  children: ReactNode;
  variant?: Variant;
  color?: Color;
  as?: React.ElementType;
  className?: string;
};

export default function Text({
  children,
  variant = 'body',
  color = 'inherit',
  as: Tag = 'p',
  className,
}: TextProps) {
  return (
    <Tag
      className={classNames(
        styles.text,
        styles[`text--${variant}`],
        styles[`text--${color}`],
        className
      )}
    >
      {children}
    </Tag>
  );
}
