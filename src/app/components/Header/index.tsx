'use client';

import styles from './styles.module.scss';
import LangSwitcher from '@components/LangSwitcher';
import ThemeToggle from '@components/ThemeToggle';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header__content}>
        <div className={styles.header__logo}>MyLogo</div>

        <div className={styles.header__actions}>
          <LangSwitcher />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
