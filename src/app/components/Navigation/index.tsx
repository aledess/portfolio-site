'use client';
import styles from './styles.module.scss';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import classNames from 'classnames';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Skills', href: '#skills' },
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'Webflow Expert ↗︎', href: 'https://external.com', external: true },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className={styles['nav__wrapper']}>
      <ul className={styles['nav__menu']}>
        {links.map((link, index) => (
          <li key={link.href} className={styles['nav__item']}>
            <Link
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
              className={classNames(
                styles['nav__link'],
                pathname === link.href && styles['nav__link--active']
              )}
            >
              {link.label}
            </Link>
            {index < links.length - 1 && <span className={styles['nav__separator']}>|</span>}
          </li>
        ))}
      </ul>
    </nav>
  );
}
