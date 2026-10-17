'use client';

import { useEffect, useState } from 'react';
import styles from './header.module.scss';

type Theme = 'light' | 'dark';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    setTheme(document.documentElement.dataset.theme === 'light' ? 'light' : 'dark');
  }, []);

  const flip = () => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem('theme', next);
    } catch {
      // private mode: the choice lasts for this visit
    }
    setTheme(next);
  };

  const dark = theme === 'dark';
  return (
    <button
      type="button"
      className={styles.toggle}
      onClick={flip}
      aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
      aria-pressed={dark}
    >
      <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
        <mask id="moon-cut">
          <rect width="24" height="24" fill="#fff" />
          <circle className={styles.cut} cx={dark ? 17 : 30} cy={dark ? 7 : -6} r="7" fill="#000" />
        </mask>
        <circle cx="12" cy="12" r={dark ? 8.5 : 5} fill="currentColor" mask="url(#moon-cut)" className={styles.core} />
        <g className={styles.rays} style={{ opacity: dark ? 0 : 1, transform: dark ? 'rotate(-45deg) scale(.6)' : 'none' }}>
          {Array.from({ length: 8 }, (_, i) => (
            <line
              key={i}
              x1="12" y1="1.5" x2="12" y2="4"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round"
              transform={`rotate(${i * 45} 12 12)`}
            />
          ))}
        </g>
      </svg>
    </button>
  );
}
