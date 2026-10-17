'use client';

import { useEffect, useState } from 'react';
import { profile } from '@/data/profile';
import ThemeToggle from './theme-toggle';
import styles from './header.module.scss';

const links = [
  { href: '#woju', label: 'Wòjú' },
  { href: '#method', label: 'How I build' },
  { href: '#experience', label: 'Experience' },
  { href: '#work', label: 'Work' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);

  return (
    <header className={`${styles.bar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`wrap ${styles.inner}`}>
        <a href="#top" className={styles.mark}>
          {profile.name}
        </a>
        <nav className={styles.nav} aria-label="Sections">
          {links.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>
        <div className={styles.end}>
          <ThemeToggle />
          <a href="#contact" className={styles.cta}>
            Contact
          </a>
        </div>
      </div>
    </header>
  );
}
