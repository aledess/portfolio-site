'use client';
import styles from './styles.module.scss';
import classNames from 'classnames';
import { smoothScrollToId } from '@/utils/scrollTo';
import useScrollSpy from '@/hooks/useScrollSpy';

type NavLink = {
  label: string;
  href: string;
  external?: boolean;
};

export const links: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Works', href: '#works' },
  { label: 'Contact', href: '#contact' },
];


export default function Navigation() {
  const sectionIds = links
    .filter((link) => link.href.startsWith('#'))
    .map((link) => link.href.replace('#', ''));

  const activeId = useScrollSpy(sectionIds, 80); // offset header

  return (
    <nav className={styles.nav__wrapper}>
      <ul className={styles.nav__menu}>
        {links.map((link) => {
          const id = link.href.replace('#', '');
          const isActive = activeId === id;

          return (
            <li key={link.href} className={styles.nav__item}>
              <a
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  smoothScrollToId(id);
                }}
                className={classNames(styles.nav__link, {
                  [styles['nav__link--active']]: isActive,
                })}
              >
                {link.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}