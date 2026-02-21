# Portfolio Redesign: Dark Luxurious Edition — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Complete UI overhaul of AGMA's React portfolio into a dark, luxurious, animation-rich single-page site inspired by Awwwards-winning portfolios.

**Architecture:** Keep existing React + TypeScript + Tailwind stack. Add GSAP (ScrollTrigger), Lenis (smooth scroll), and SplitType (text animations). Replace all section components and the header. Reuse existing data files (projects.ts, socials.ts) with new data structures. Single-page scroll with section IDs.

**Tech Stack:** React 18, TypeScript, Tailwind CSS 3, GSAP + ScrollTrigger, Lenis, SplitType, Framer Motion (keep for mobile menu)

---

### Task 1: Install dependencies and update Tailwind config

**Files:**

- Modify: `package.json`
- Modify: `tailwind.config.js`
- Modify: `src/index.scss`

**Step 1: Install new animation packages**

Run:

```bash
cd /Users/akindeju/Documents/Work/Projects/React_JS_Portfolio
npm install gsap @studio-freight/lenis split-type
```

**Step 2: Update tailwind.config.js with dark theme colors and fluid typography**

Replace `tailwind.config.js` with:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: '#0a0a0a',
          elevated: '#111111',
          border: '#1a1a1a',
        },
        accent: {
          DEFAULT: '#455CE9',
          glow: 'rgba(69, 92, 233, 0.125)',
        },
        muted: '#737373',
      },
      fontFamily: {
        'space-grotesk': ['Space-Grotesk-400', 'sans-serif'],
        'space-grotesk-500': ['Space-Grotesk-500', 'sans-serif'],
        'space-grotesk-700': ['Space-Grotesk-700', 'sans-serif'],
      },
      fontSize: {
        hero: 'clamp(3rem, 8vw, 7.5rem)',
        section: 'clamp(2rem, 5vw, 4rem)',
        'body-lg': 'clamp(1rem, 1.5vw, 1.25rem)',
      },
    },
  },
  variants: {},
  plugins: [],
};
```

**Step 3: Update index.scss — dark background, global styles**

Replace `src/index.scss` with:

```scss
@tailwind base;
@tailwind components;
@tailwind utilities;

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  background-color: #0a0a0a;
  color: #e5e5e5;
}

body {
  margin: 0;
  font-family:
    'Space-Grotesk-400',
    -apple-system,
    BlinkMacSystemFont,
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #0a0a0a;
  color: #e5e5e5;
  overflow-x: hidden;
}

html.lenis,
html.lenis body {
  height: auto;
}

.lenis.lenis-smooth {
  scroll-behavior: auto !important;
}

.lenis.lenis-smooth [data-lenis-prevent] {
  overscroll-behavior: contain;
}

.lenis.lenis-stopped {
  overflow: hidden;
}

::selection {
  background-color: #455ce9;
  color: #fff;
}

/* Grain overlay */
.grain-overlay {
  position: fixed;
  top: -50%;
  left: -50%;
  right: -50%;
  bottom: -50%;
  width: 200%;
  height: 200%;
  background: transparent
    url('https://www.transparenttextures.com/patterns/noise.png') repeat 0 0;
  opacity: 0.03;
  pointer-events: none;
  z-index: 9999;
  animation: grain 8s steps(10) infinite;
}

@keyframes grain {
  0%,
  100% {
    transform: translate(0, 0);
  }
  10% {
    transform: translate(-5%, -10%);
  }
  20% {
    transform: translate(-15%, 5%);
  }
  30% {
    transform: translate(7%, -25%);
  }
  40% {
    transform: translate(-5%, 25%);
  }
  50% {
    transform: translate(-15%, 10%);
  }
  60% {
    transform: translate(15%, 0%);
  }
  70% {
    transform: translate(0%, 15%);
  }
  80% {
    transform: translate(3%, 35%);
  }
  90% {
    transform: translate(-10%, 10%);
  }
}

/* Scroll progress bar */
.scroll-progress {
  position: fixed;
  top: 0;
  left: 0;
  height: 2px;
  background: #455ce9;
  z-index: 100;
  transform-origin: left;
}

/* Custom cursor */
.custom-cursor {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1.5px solid #e5e5e5;
  position: fixed;
  pointer-events: none;
  z-index: 9998;
  transition:
    width 0.3s ease,
    height 0.3s ease,
    border-color 0.3s ease,
    background-color 0.3s ease;
  transform: translate(-50%, -50%);
  mix-blend-mode: difference;
}

.custom-cursor.hover {
  width: 60px;
  height: 60px;
  background-color: #455ce9;
  border-color: #455ce9;
  mix-blend-mode: normal;
  opacity: 0.5;
}

/* Magnetic button */
.magnetic-btn {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

/* Hide default cursor on desktop */
@media (hover: hover) and (pointer: fine) {
  * {
    cursor: none !important;
  }
}

@font-face {
  font-family: 'Space-Grotesk-400';
  src: url('./assets/fonts/SpaceGrotesk-Regular.ttf') format('truetype');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Space-Grotesk-500';
  src: url('./assets/fonts/SpaceGrotesk-Medium.ttf') format('truetype');
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Space-Grotesk-700';
  src: url('./assets/fonts/SpaceGrotesk-Bold.ttf') format('truetype');
  font-weight: bold;
  font-style: normal;
  font-display: swap;
}

/* Infinite marquee */
@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.marquee-track {
  animation: marquee 30s linear infinite;
}

.marquee-track:hover {
  animation-play-state: paused;
}
```

**Step 4: Commit**

```bash
git add package.json package-lock.json tailwind.config.js src/index.scss
git commit -m "feat: install GSAP, Lenis, SplitType and configure dark theme"
```

---

### Task 2: Create shared hooks and utilities (Lenis, GSAP, Cursor, Magnetic)

**Files:**

- Create: `src/hooks/useLenis.ts`
- Create: `src/hooks/useGSAP.ts`
- Create: `src/hooks/useCursor.ts`
- Create: `src/hooks/useMagnetic.ts`
- Create: `src/components/cursor.tsx`
- Create: `src/components/scroll-progress.tsx`
- Create: `src/components/text-reveal.tsx`

**Step 1: Create Lenis smooth scroll hook**

`src/hooks/useLenis.ts`:

```ts
import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useLenis = () => {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    lenisRef.current = lenis;

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add(time => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
    };
  }, []);

  return lenisRef;
};
```

**Step 2: Create custom cursor component**

`src/components/cursor.tsx`:

```tsx
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const isTouch = useRef(false);

  useEffect(() => {
    isTouch.current = 'ontouchstart' in window;
    if (isTouch.current) return;

    const cursor = cursorRef.current;
    if (!cursor) return;

    const moveCursor = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.15,
        ease: 'power2.out',
      });
    };

    const addHover = () => cursor.classList.add('hover');
    const removeHover = () => cursor.classList.remove('hover');

    window.addEventListener('mousemove', moveCursor);

    const interactiveElements = document.querySelectorAll(
      'a, button, [data-cursor-hover]',
    );
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', addHover);
      el.addEventListener('mouseleave', removeHover);
    });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', addHover);
        el.removeEventListener('mouseleave', removeHover);
      });
    };
  }, []);

  if (typeof window !== 'undefined' && 'ontouchstart' in window) return null;

  return <div ref={cursorRef} className="custom-cursor hidden md:block" />;
};

export default CustomCursor;
```

**Step 3: Create scroll progress bar**

`src/components/scroll-progress.tsx`:

```tsx
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollProgress: React.FC = () => {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!barRef.current) return;

    gsap.to(barRef.current, {
      scaleX: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: document.body,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.3,
      },
    });
  }, []);

  return (
    <div
      ref={barRef}
      className="scroll-progress"
      style={{ transform: 'scaleX(0)' }}
    />
  );
};

export default ScrollProgress;
```

**Step 4: Create reusable text reveal component**

`src/components/text-reveal.tsx`:

```tsx
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

interface TextRevealProps {
  children: string;
  element?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  className?: string;
  delay?: number;
  scrub?: boolean;
}

const TextReveal: React.FC<TextRevealProps> = ({
  children,
  element: Element = 'h2',
  className = '',
  delay = 0,
  scrub = true,
}) => {
  const textRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;

    const split = new SplitType(el, { types: 'chars,words' });

    gsap.set(split.chars, { y: 100, opacity: 0 });

    if (scrub) {
      gsap.to(split.chars, {
        y: 0,
        opacity: 1,
        stagger: 0.02,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          end: 'top 20%',
          toggleActions: 'play none none reverse',
        },
        delay,
      });
    } else {
      gsap.to(split.chars, {
        y: 0,
        opacity: 1,
        stagger: 0.03,
        duration: 0.6,
        ease: 'power3.out',
        delay,
      });
    }

    return () => {
      split.revert();
    };
  }, [children, delay, scrub]);

  return (
    <Element ref={textRef as any} className={`overflow-hidden ${className}`}>
      {children}
    </Element>
  );
};

export default TextReveal;
```

**Step 5: Create magnetic button hook**

`src/hooks/useMagnetic.ts`:

```ts
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const useMagnetic = (strength: number = 0.3) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || 'ontouchstart' in window) return;

    const handleMove = (e: MouseEvent) => {
      const { left, top, width, height } = el.getBoundingClientRect();
      const x = (e.clientX - left - width / 2) * strength;
      const y = (e.clientY - top - height / 2) * strength;

      gsap.to(el, { x, y, duration: 0.3, ease: 'power2.out' });
    };

    const handleLeave = () => {
      gsap.to(el, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1, 0.3)' });
    };

    el.addEventListener('mousemove', handleMove);
    el.addEventListener('mouseleave', handleLeave);

    return () => {
      el.removeEventListener('mousemove', handleMove);
      el.removeEventListener('mouseleave', handleLeave);
    };
  }, [strength]);

  return ref;
};
```

**Step 6: Commit**

```bash
git add src/hooks/ src/components/cursor.tsx src/components/scroll-progress.tsx src/components/text-reveal.tsx
git commit -m "feat: add shared hooks and components (Lenis, cursor, scroll progress, text reveal, magnetic)"
```

---

### Task 3: Create new data files (experience, projects, skills)

**Files:**

- Create: `src/data/experience.ts`
- Create: `src/data/skills.ts`
- Modify: `src/data/socials.ts` (keep as-is, already good)
- Create: `src/data/projects.ts` (curated featured projects)

**Step 1: Create experience data with company info**

`src/data/experience.ts`:

```ts
export interface IExperience {
  company: string;
  role: string;
  period: string;
  description: string;
  highlights: string[];
  companyColor: string;
}

export const experiences: IExperience[] = [
  {
    company: 'Benmore Technologies',
    role: 'Software Engineer',
    period: '2025 - Present',
    description:
      'AI-powered custom software development company helping 100+ companies deploy software the right way.',
    highlights: [
      'Building scalable software solutions with AI-powered development workflows',
      'Collaborating with cross-functional teams across the US and Africa',
    ],
    companyColor: '#2563EB',
  },
  {
    company: 'Lendsqr',
    role: 'Software Engineer (Mobile & Frontend)',
    period: 'Aug 2024 - 2025',
    description:
      "Nigeria's leading digital lending platform serving millions of users across the lending ecosystem.",
    highlights: [
      'Managed 15+ fintech mobile apps serving 3M+ active users',
      'Migrated SnapCash from Expo to React Native CLI, reducing deployment time by 30%',
      'Designed configurable form package for customizable loan applications',
      'Maintained lender web platform with 97% uptime, reduced crashes by 40%',
    ],
    companyColor: '#349898',
  },
  {
    company: 'Assurdly',
    role: 'Software Engineer (Mobile)',
    period: 'Dec 2024 - Mar 2025',
    description:
      'Quality-as-a-Service product delivery company helping fintech and healthtech teams launch quality products.',
    highlights: [
      'Built NorthQuest Financial Application, improving UX by 35%',
      'Executed React Native framework downgrade, improving stability by 60%',
      'Redesigned navigation system, reducing user drop-off by 25%',
      'Achieved 98% transaction success rate for financial operations',
    ],
    companyColor: '#38CB89',
  },
  {
    company: 'Provenier Innovation Limited',
    role: 'Full Stack Mobile Software Engineer',
    period: 'Nov 2023 - Jul 2024',
    description:
      'AI and data analytics startup transforming the digital landscape with cutting-edge solutions.',
    highlights: [
      'Enhanced project delivery accuracy by 24% through technical assessments',
      'Engineered DreamVC investor recommendation system, improving matching by 40%',
      'Built Mira restaurant app (acquired by Chowdeck), increasing efficiency by 42%',
      'Drove 15% revenue increase while maintaining 96% client satisfaction',
    ],
    companyColor: '#8B5CF6',
  },
];
```

**Step 2: Create skills data**

`src/data/skills.ts`:

```ts
export interface ISkill {
  name: string;
  category: 'language' | 'framework' | 'tool' | 'backend' | 'design';
}

export const skills: ISkill[] = [
  // Languages
  { name: 'TypeScript', category: 'language' },
  { name: 'JavaScript', category: 'language' },
  { name: 'Swift', category: 'language' },
  { name: 'Kotlin', category: 'language' },
  { name: 'Rust', category: 'language' },
  { name: 'HTML/CSS', category: 'language' },
  { name: 'SQL', category: 'language' },
  // Frameworks
  { name: 'React Native', category: 'framework' },
  { name: 'React.js', category: 'framework' },
  { name: 'Redux', category: 'framework' },
  { name: 'Zustand', category: 'framework' },
  { name: 'Tailwind CSS', category: 'framework' },
  { name: 'React Query', category: 'framework' },
  { name: 'Framer Motion', category: 'framework' },
  // Backend
  { name: 'Node.js', category: 'backend' },
  { name: 'GraphQL', category: 'backend' },
  { name: 'REST APIs', category: 'backend' },
  { name: 'MongoDB', category: 'backend' },
  { name: 'Firebase', category: 'backend' },
  // Tools
  { name: 'Git', category: 'tool' },
  { name: 'App Store Connect', category: 'tool' },
  { name: 'Google Play Console', category: 'tool' },
  { name: 'CodePush (OTA)', category: 'tool' },
  { name: 'Docker', category: 'tool' },
  // Design
  { name: 'Figma', category: 'design' },
  { name: 'Framer', category: 'design' },
];

export const skillCategories = [
  { key: 'language' as const, label: 'Languages' },
  { key: 'framework' as const, label: 'Frameworks' },
  { key: 'backend' as const, label: 'Backend & Data' },
  { key: 'tool' as const, label: 'Tools & Platforms' },
  { key: 'design' as const, label: 'Design' },
];

export const marqueeSkills = [
  'TypeScript',
  'React Native',
  'React.js',
  'Node.js',
  'GraphQL',
  'Swift',
  'Kotlin',
  'Rust',
  'Tailwind',
  'Redux',
  'Firebase',
  'MongoDB',
  'Docker',
  'Git',
  'Figma',
];
```

**Step 3: Create curated featured projects**

`src/data/projects.ts`:

```ts
export interface IFeaturedProject {
  name: string;
  description: string;
  category: 'mobile' | 'web' | 'opensource';
  stack: string[];
  link: string;
  featured: boolean;
}

export const featuredProjects: IFeaturedProject[] = [
  {
    name: 'Lendsqr Ecosystem',
    description:
      "Managed 15+ fintech mobile apps serving 3M+ active users across Nigeria's digital lending ecosystem. Deployed production-grade apps to App Store and Google Play.",
    category: 'mobile',
    stack: ['React Native', 'TypeScript', 'Redux', 'Firebase'],
    link: 'https://lendsqr.com',
    featured: true,
  },
  {
    name: 'Mira',
    description:
      'Restaurant management app featuring pay-outs tracking, order tracking, and inventory management. Now acquired by Chowdeck. Increased restaurant efficiency by 42%.',
    category: 'mobile',
    stack: ['React Native', 'Node.js', 'MongoDB'],
    link: 'https://drive.google.com/drive/folders/1U8b0pgtXhi9pdzRvrks0fLQhZU0mp1XA?usp=share_link',
    featured: true,
  },
  {
    name: 'DreamVC',
    description:
      'Investor Recommendation Model System that enhanced investor matching accuracy by 40% and accelerated funding timelines by 25%.',
    category: 'web',
    stack: ['React.js', 'Node.js', 'AI/ML', 'TypeScript'],
    link: '#',
    featured: true,
  },
  {
    name: 'ByteLock',
    description:
      'Open-source cipher/decipher algorithm for encrypting and decrypting sensitive data. Published npm package used in production apps.',
    category: 'opensource',
    stack: ['TypeScript', 'npm', 'Cryptography'],
    link: 'https://github.com/akindejuh/bytelock',
    featured: true,
  },
  {
    name: 'React Google Cloud Translate',
    description:
      'Open-source React.js wrapper around Google Cloud Translation API. Enables seamless multilingual support in applications.',
    category: 'opensource',
    stack: ['React.js', 'TypeScript', 'Google Cloud'],
    link: 'https://github.com/akindejuh/react-google-cloud-translate',
    featured: true,
  },
  {
    name: 'Whispr',
    description:
      'Secure real-time chat application using ByteLock encryption. Built for speed and scalability with instant messaging.',
    category: 'mobile',
    stack: ['React Native', 'Socket.io', 'Node.js', 'ByteLock'],
    link: 'https://drive.google.com/file/d/17yJEqFRr7CD0utOS4njOkToOi6S8YttJ/view?usp=sharing',
    featured: true,
  },
  {
    name: 'NorthQuest Financial',
    description:
      'Financial application with onboarding and bill payment features. Achieved 98% transaction success rate for financial operations.',
    category: 'mobile',
    stack: ['React Native', 'TypeScript', 'Redux'],
    link: '#',
    featured: true,
  },
  {
    name: 'Invok',
    description:
      'Contributed to a modern, lightweight, self-hosted serverless framework built in Rust. Open-source collaboration.',
    category: 'opensource',
    stack: ['Rust', 'Serverless', 'Cloud'],
    link: 'https://github.com/alob-mtc/invok',
    featured: true,
  },
];

export const projectCategories = [
  'All',
  'Mobile',
  'Web',
  'Open Source',
] as const;
```

**Step 4: Commit**

```bash
git add src/data/experience.ts src/data/skills.ts src/data/projects.ts
git commit -m "feat: add experience, skills, and curated projects data"
```

---

### Task 4: Build the new Header component

**Files:**

- Rewrite: `src/components/header.tsx`

**Step 1: Rewrite header with dark theme, smooth nav, and mobile overlay**

Replace entire `src/components/header.tsx` with:

```tsx
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { loadingToast, updateLoadingToastToSuccess } from 'src/handlers/toast';
// @ts-ignore
import portFolioPDF from '../assets/pdfs/Akindeju_CV.pdf';

const navLinks = [
  { name: 'About', id: 'about' },
  { name: 'Experience', id: 'experience' },
  { name: 'Projects', id: 'projects' },
  { name: 'Skills', id: 'skills' },
  { name: 'Contact', id: 'contact' },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const y = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const downloadCV = () => {
    loadingToast({ message: 'Downloading...' });
    const link = document.createElement('a');
    link.href = portFolioPDF;
    link.download = 'Akindeju_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => {
      updateLoadingToastToSuccess({ message: 'File Downloaded!' });
    }, 1000);
  };

  return (
    <>
      <header
        ref={headerRef}
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-dark/80 backdrop-blur-md border-b border-dark-border'
            : 'bg-transparent'
        }`}>
        <div className="max-w-[1400px] mx-auto flex justify-between items-center px-6 md:px-12 h-20">
          <a
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="font-space-grotesk-700 text-xl text-white cursor-pointer"
            data-cursor-hover>
            AGMA<span className="text-accent">.</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <a
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="font-space-grotesk-500 text-sm text-muted hover:text-white transition-colors duration-300 cursor-pointer uppercase tracking-wider"
                data-cursor-hover>
                {link.name}
              </a>
            ))}
            <button
              onClick={downloadCV}
              className="font-space-grotesk-700 text-sm px-6 py-3 border border-accent text-accent rounded-full hover:bg-accent hover:text-white transition-all duration-300 uppercase tracking-wider"
              data-cursor-hover>
              Resume
            </button>
          </nav>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative z-50 w-8 h-8 flex flex-col justify-center items-center gap-1.5"
            data-cursor-hover>
            <span
              className={`w-6 h-[2px] bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-[5px]' : ''}`}
            />
            <span
              className={`w-6 h-[2px] bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}
            />
            <span
              className={`w-6 h-[2px] bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-[5px]' : ''}`}
            />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-dark flex flex-col items-center justify-center gap-8">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                onClick={() => scrollTo(link.id)}
                className="font-space-grotesk-700 text-4xl text-white cursor-pointer hover:text-accent transition-colors duration-300">
                {link.name}
              </motion.a>
            ))}
            <motion.button
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ delay: navLinks.length * 0.08, duration: 0.4 }}
              onClick={() => {
                setIsOpen(false);
                downloadCV();
              }}
              className="font-space-grotesk-700 text-lg px-8 py-4 border border-accent text-accent rounded-full hover:bg-accent hover:text-white transition-all duration-300 mt-4">
              Download Resume
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
```

**Step 2: Commit**

```bash
git add src/components/header.tsx
git commit -m "feat: redesign header with dark theme, blur nav, and full-screen mobile menu"
```

---

### Task 5: Build Hero section

**Files:**

- Rewrite: `src/sections/about-me.tsx` → rename concept to hero section

**Step 1: Create new Hero section**

Create `src/sections/hero.tsx`:

```tsx
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import SplitType from 'split-type';
import { useMagnetic } from 'src/hooks/useMagnetic';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const ctaRef = useMagnetic(0.35);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const nameSplit = new SplitType(nameRef.current!, { types: 'chars' });
      const subtitleSplit = new SplitType(subtitleRef.current!, {
        types: 'words',
      });

      const tl = gsap.timeline({ delay: 0.5 });

      // Name chars fly in
      tl.from(nameSplit.chars, {
        y: 120,
        opacity: 0,
        rotateX: -90,
        stagger: 0.04,
        duration: 1,
        ease: 'power4.out',
      });

      // Line expands
      tl.from(
        lineRef.current,
        {
          scaleX: 0,
          duration: 0.8,
          ease: 'power3.inOut',
        },
        '-=0.4',
      );

      // Subtitle words fade in
      tl.from(
        subtitleSplit.words,
        {
          y: 40,
          opacity: 0,
          stagger: 0.06,
          duration: 0.6,
          ease: 'power3.out',
        },
        '-=0.3',
      );

      // CTA fades in
      tl.from(
        ctaRef.current,
        {
          y: 30,
          opacity: 0,
          duration: 0.6,
          ease: 'power3.out',
        },
        '-=0.2',
      );

      // Scroll indicator pulses
      tl.from(
        scrollIndicatorRef.current,
        {
          opacity: 0,
          duration: 0.5,
        },
        '-=0.1',
      );

      return () => {
        nameSplit.revert();
        subtitleSplit.revert();
      };
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const scrollToAbout = () => {
    const el = document.getElementById('about');
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 max-w-[1400px] mx-auto">
      <div className="mt-20">
        <h1
          ref={nameRef}
          className="font-space-grotesk-700 text-hero text-white leading-[0.95] tracking-tight"
          style={{ perspective: '500px' }}>
          OLUWAGBEMIGA
        </h1>

        <div
          ref={lineRef}
          className="w-full h-[2px] bg-accent my-6 md:my-8 origin-left"
        />

        <p
          ref={subtitleRef}
          className="font-space-grotesk-500 text-body-lg text-muted max-w-2xl">
          Software Engineer crafting high-performance mobile &amp; web
          applications that scale. Building at Benmore Technologies.
        </p>

        <button
          ref={ctaRef as React.RefObject<HTMLButtonElement>}
          onClick={scrollToAbout}
          className="magnetic-btn mt-10 md:mt-14 px-10 py-5 border border-accent text-accent font-space-grotesk-700 text-sm uppercase tracking-widest rounded-full hover:bg-accent hover:text-white transition-all duration-500"
          data-cursor-hover>
          Explore My Work
        </button>
      </div>

      <div
        ref={scrollIndicatorRef}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="font-space-grotesk text-xs text-muted uppercase tracking-widest">
          Scroll
        </span>
        <div className="w-[1px] h-12 bg-muted/30 relative overflow-hidden">
          <div className="w-full h-4 bg-accent animate-bounce absolute top-0" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
```

**Step 2: Commit**

```bash
git add src/sections/hero.tsx
git commit -m "feat: build hero section with split-char name reveal and magnetic CTA"
```

---

### Task 6: Build About Me section

**Files:**

- Rewrite: `src/sections/about-me.tsx`

**Step 1: Create new About section with animated stats**

Replace `src/sections/about-me.tsx` with a new file `src/sections/about.tsx`:

```tsx
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TextReveal from 'src/components/text-reveal';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: '15+', label: 'Apps Shipped' },
  { value: '3M+', label: 'Users Served' },
  { value: '4+', label: 'Years Experience' },
  { value: '60+', label: 'GitHub Repos' },
];

const About: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const bioRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Bio paragraph fade in
      gsap.from(bioRef.current, {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: bioRef.current,
          start: 'top 80%',
        },
      });

      // Stats counter animation
      const statEls = statsRef.current?.querySelectorAll('.stat-item');
      statEls?.forEach((el, i) => {
        gsap.from(el, {
          y: 50,
          opacity: 0,
          duration: 0.8,
          delay: i * 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: statsRef.current,
            start: 'top 80%',
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-32 md:py-40 px-6 md:px-12 max-w-[1400px] mx-auto">
      <TextReveal
        element="h2"
        className="font-space-grotesk-700 text-section text-white mb-4">
        About Me
      </TextReveal>

      <div className="w-16 h-[2px] bg-accent mb-12" />

      <div className="grid md:grid-cols-2 gap-12 md:gap-20">
        <div>
          <p
            ref={bioRef}
            className="font-space-grotesk text-body-lg text-muted leading-relaxed">
            I'm a Software Engineer with 4+ years of experience building
            scalable React Native, React.js, and Node.js applications. I've led
            high-impact projects that improved deployment accuracy by 62% and
            enhanced application performance by 22% through rigorous code
            quality and testing practices.
            <br />
            <br />
            My work across fintech platforms — reducing bugs, strengthening system
            stability, and shipping to millions of users — contributed to a 36% revenue
            increase and 93% on-time delivery rate. I publish open-source packages,
            contribute to community projects, and stay focused on solving complex
            technical problems that create real impact at scale.
            <br />
            <br />
            Currently building at{' '}
            <span className="text-accent font-space-grotesk-700">
              Benmore Technologies
            </span>
            , where I help deploy software the right way, the first time.
          </p>
        </div>

        <div ref={statsRef} className="grid grid-cols-2 gap-8 content-start">
          {stats.map(stat => (
            <div
              key={stat.label}
              className="stat-item border-l-2 border-accent pl-6">
              <span className="font-space-grotesk-700 text-5xl md:text-6xl text-white">
                {stat.value}
              </span>
              <p className="font-space-grotesk-500 text-sm text-muted mt-2 uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
```

**Step 2: Commit**

```bash
git add src/sections/about.tsx
git commit -m "feat: build about section with bio, stats, and scroll-triggered animations"
```

---

### Task 7: Build Experience Timeline section

**Files:**

- Create: `src/sections/experience.tsx`

**Step 1: Build vertical timeline with alternating slide-ins**

```tsx
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TextReveal from 'src/components/text-reveal';
import { experiences } from 'src/data/experience';

gsap.registerPlugin(ScrollTrigger);

const Experience: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Vertical line grows as you scroll
      gsap.from(lineRef.current, {
        scaleY: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: timelineRef.current,
          start: 'top 60%',
          end: 'bottom 80%',
          scrub: 0.5,
        },
      });

      // Each experience card slides in
      const cards = timelineRef.current?.querySelectorAll('.exp-card');
      cards?.forEach((card, i) => {
        gsap.from(card, {
          x: i % 2 === 0 ? -80 : 80,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="py-32 md:py-40 px-6 md:px-12 max-w-[1400px] mx-auto">
      <TextReveal
        element="h2"
        className="font-space-grotesk-700 text-section text-white mb-4">
        Experience
      </TextReveal>

      <div className="w-16 h-[2px] bg-accent mb-16" />

      <div ref={timelineRef} className="relative">
        {/* Vertical line */}
        <div
          ref={lineRef}
          className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-accent/30 origin-top hidden md:block"
        />

        <div className="space-y-16 md:space-y-24">
          {experiences.map((exp, i) => (
            <div
              key={exp.company}
              className={`exp-card relative md:w-[45%] ${
                i % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'
              }`}>
              {/* Timeline dot */}
              <div
                className="hidden md:block absolute top-2 w-3 h-3 rounded-full border-2 border-accent bg-dark"
                style={{
                  [i % 2 === 0 ? 'right' : 'left']: '-1.85rem',
                }}
              />

              <div className="border border-dark-border rounded-2xl p-8 bg-dark-elevated/50 hover:border-accent/30 transition-colors duration-500">
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: exp.companyColor }}
                  />
                  <span className="font-space-grotesk-500 text-sm text-muted uppercase tracking-wider">
                    {exp.period}
                  </span>
                </div>

                <h3 className="font-space-grotesk-700 text-2xl text-white mb-1">
                  {exp.company}
                </h3>
                <p className="font-space-grotesk-500 text-accent text-sm mb-4">
                  {exp.role}
                </p>
                <p className="font-space-grotesk text-muted text-sm mb-6 leading-relaxed">
                  {exp.description}
                </p>

                <ul className="space-y-2">
                  {exp.highlights.map((h, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <span className="w-1 h-1 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                      <span className="font-space-grotesk text-sm text-[#a3a3a3] leading-relaxed">
                        {h}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
```

**Step 2: Commit**

```bash
git add src/sections/experience.tsx
git commit -m "feat: build experience timeline with alternating slide-in animations"
```

---

### Task 8: Build Featured Projects section

**Files:**

- Create: `src/sections/projects.tsx` (overwrite existing)

**Step 1: Build projects grid with 3D tilt hover and staggered entrance**

Overwrite `src/sections/projects.tsx`:

```tsx
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TextReveal from 'src/components/text-reveal';
import {
  featuredProjects,
  projectCategories,
  IFeaturedProject,
} from 'src/data/projects';

gsap.registerPlugin(ScrollTrigger);

const ProjectCard: React.FC<{ project: IFeaturedProject; index: number }> = ({
  project,
  index,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const card = cardRef.current;
    if (!card) return;
    const { left, top, width, height } = card.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;

    gsap.to(card, {
      rotateY: x * 10,
      rotateX: -y * 10,
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  const handleMouseLeave = () => {
    gsap.to(cardRef.current, {
      rotateY: 0,
      rotateX: 0,
      duration: 0.5,
      ease: 'elastic.out(1, 0.5)',
    });
  };

  const categoryColors: Record<string, string> = {
    mobile: '#455CE9',
    web: '#38CB89',
    opensource: '#FA5D29',
  };

  return (
    <div
      ref={cardRef}
      className="project-card group"
      style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}>
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block border border-dark-border rounded-2xl p-8 bg-dark-elevated/50 hover:border-accent/40 transition-all duration-500 h-full"
        data-cursor-hover>
        <div className="flex items-center justify-between mb-6">
          <span
            className="text-xs font-space-grotesk-700 uppercase tracking-wider px-3 py-1 rounded-full"
            style={{
              color: categoryColors[project.category],
              border: `1px solid ${categoryColors[project.category]}30`,
            }}>
            {project.category}
          </span>
          <svg
            className="w-5 h-5 text-muted group-hover:text-accent transition-colors duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 transform"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2">
            <path d="M7 17L17 7M17 7H7M17 7V17" />
          </svg>
        </div>

        <h3 className="font-space-grotesk-700 text-xl text-white mb-3 group-hover:text-accent transition-colors duration-300">
          {project.name}
        </h3>

        <p className="font-space-grotesk text-sm text-muted leading-relaxed mb-6">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {project.stack.map(tech => (
            <span
              key={tech}
              className="font-space-grotesk text-xs text-[#a3a3a3] px-3 py-1 rounded-full bg-dark-border/50">
              {tech}
            </span>
          ))}
        </div>
      </a>
    </div>
  );
};

const Projects: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const filteredProjects =
    activeCategory === 'All'
      ? featuredProjects
      : featuredProjects.filter(
          p => p.category === activeCategory.toLowerCase().replace(' ', ''),
        );

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gridRef.current?.querySelectorAll('.project-card');
      cards?.forEach((card, i) => {
        gsap.from(card, {
          y: 80,
          opacity: 0,
          duration: 0.8,
          delay: i * 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [activeCategory]);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="py-32 md:py-40 px-6 md:px-12 max-w-[1400px] mx-auto">
      <TextReveal
        element="h2"
        className="font-space-grotesk-700 text-section text-white mb-4">
        Featured Projects
      </TextReveal>

      <div className="w-16 h-[2px] bg-accent mb-12" />

      {/* Category filters */}
      <div className="flex flex-wrap gap-3 mb-12">
        {projectCategories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`font-space-grotesk-500 text-sm px-5 py-2.5 rounded-full border transition-all duration-300 uppercase tracking-wider ${
              activeCategory === cat
                ? 'bg-accent text-white border-accent'
                : 'border-dark-border text-muted hover:border-accent/50 hover:text-white'
            }`}
            data-cursor-hover>
            {cat}
          </button>
        ))}
      </div>

      {/* Projects grid */}
      <div ref={gridRef} className="grid md:grid-cols-2 gap-6">
        {filteredProjects.map((project, i) => (
          <ProjectCard key={project.name} project={project} index={i} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
```

**Step 2: Commit**

```bash
git add src/sections/projects.tsx
git commit -m "feat: build projects section with 3D tilt cards and category filters"
```

---

### Task 9: Build Skills section with marquee

**Files:**

- Create: `src/sections/skills.tsx`

**Step 1: Build skills grid + infinite marquee**

```tsx
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TextReveal from 'src/components/text-reveal';
import { skills, skillCategories, marqueeSkills } from 'src/data/skills';

gsap.registerPlugin(ScrollTrigger);

const Skills: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gridRef.current?.querySelectorAll('.skill-pill');
      items?.forEach((item, i) => {
        gsap.from(item, {
          scale: 0,
          opacity: 0,
          duration: 0.4,
          delay: i * 0.03,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: gridRef.current,
            start: 'top 80%',
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="py-32 md:py-40">
      <div className="px-6 md:px-12 max-w-[1400px] mx-auto">
        <TextReveal
          element="h2"
          className="font-space-grotesk-700 text-section text-white mb-4">
          Skills & Tools
        </TextReveal>

        <div className="w-16 h-[2px] bg-accent mb-16" />

        <div ref={gridRef} className="space-y-10">
          {skillCategories.map(cat => (
            <div key={cat.key}>
              <h3 className="font-space-grotesk-500 text-sm text-muted uppercase tracking-widest mb-4">
                {cat.label}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills
                  .filter(s => s.category === cat.key)
                  .map(skill => (
                    <span
                      key={skill.name}
                      className="skill-pill font-space-grotesk-500 text-sm px-5 py-2.5 rounded-full border border-dark-border text-[#a3a3a3] hover:border-accent hover:text-accent transition-all duration-300 cursor-default"
                      data-cursor-hover>
                      {skill.name}
                    </span>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Infinite marquee */}
      <div className="mt-20 overflow-hidden border-y border-dark-border py-6">
        <div className="marquee-track flex whitespace-nowrap">
          {[...marqueeSkills, ...marqueeSkills].map((skill, i) => (
            <span
              key={`${skill}-${i}`}
              className="font-space-grotesk-700 text-3xl md:text-5xl text-dark-border mx-6 md:mx-10 select-none hover:text-accent transition-colors duration-300">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
```

**Step 2: Commit**

```bash
git add src/sections/skills.tsx
git commit -m "feat: build skills section with animated pills and infinite marquee"
```

---

### Task 10: Build Contact section

**Files:**

- Rewrite: `src/sections/contact-me.tsx` → new `src/sections/contact.tsx`

**Step 1: Build contact section with magnetic links**

```tsx
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TextReveal from 'src/components/text-reveal';
import { socials } from 'src/data/socials';

gsap.registerPlugin(ScrollTrigger);

const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const links = linksRef.current?.querySelectorAll('.contact-link');
      links?.forEach((link, i) => {
        gsap.from(link, {
          x: -60,
          opacity: 0,
          duration: 0.8,
          delay: i * 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: linksRef.current,
            start: 'top 80%',
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-32 md:py-40 px-6 md:px-12 max-w-[1400px] mx-auto">
      <TextReveal
        element="h2"
        className="font-space-grotesk-700 text-section text-white mb-4">
        Let's Build Together
      </TextReveal>

      <div className="w-16 h-[2px] bg-accent mb-8" />

      <p className="font-space-grotesk text-body-lg text-muted max-w-xl mb-16">
        I'm always open to discussing new opportunities, interesting projects,
        or ways to contribute to open-source. Let's connect.
      </p>

      <div ref={linksRef} className="space-y-0">
        {socials.map(social => (
          <a
            key={social.social}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link group flex items-center justify-between py-6 border-b border-dark-border hover:border-accent/40 transition-all duration-500"
            data-cursor-hover>
            <div className="flex items-center gap-6">
              <span className="font-space-grotesk-700 text-2xl md:text-4xl text-white group-hover:text-accent transition-colors duration-300">
                {social.social}
              </span>
            </div>
            <div className="flex items-center gap-4">
              <span className="font-space-grotesk text-sm text-muted hidden md:inline group-hover:text-white transition-colors duration-300">
                {social.display}
              </span>
              <svg
                className="w-5 h-5 text-muted group-hover:text-accent transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 transform"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </div>
          </a>
        ))}
      </div>

      <div className="mt-24 pt-8 border-t border-dark-border flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-space-grotesk text-sm text-muted">
          Built with React, GSAP & Tailwind
        </p>
        <p className="font-space-grotesk text-sm text-muted">
          &copy; {new Date().getFullYear()} Akindeju Oluwagbemiga
        </p>
      </div>
    </section>
  );
};

export default Contact;
```

**Step 2: Commit**

```bash
git add src/sections/contact.tsx
git commit -m "feat: build contact section with magnetic links and footer"
```

---

### Task 11: Wire everything together in App.tsx

**Files:**

- Rewrite: `src/app/app.tsx`

**Step 1: Update App to use all new sections + global effects**

```tsx
import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useLenis } from 'src/hooks/useLenis';
import Header from 'src/components/header';
import CustomCursor from 'src/components/cursor';
import ScrollProgress from 'src/components/scroll-progress';
import Hero from 'src/sections/hero';
import About from 'src/sections/about';
import Experience from 'src/sections/experience';
import Projects from 'src/sections/projects';
import Skills from 'src/sections/skills';
import Contact from 'src/sections/contact';

const App: React.FC = () => {
  useLenis();

  return (
    <>
      <CustomCursor />
      <ScrollProgress />
      <div className="grain-overlay" />
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <ToastContainer
        position="bottom-right"
        theme="dark"
        toastStyle={{ backgroundColor: '#111111', color: '#e5e5e5' }}
      />
    </>
  );
};

export default App;
```

**Step 2: Clean up old section files that are no longer imported**

Delete or leave (they won't be imported):

- `src/sections/workdone.tsx` — replaced by Experience
- Old `src/sections/about-me.tsx` — replaced by About
- `src/sections/my-experience.tsx` — replaced by Experience
- Old `src/sections/contact-me.tsx` — replaced by Contact

**Step 3: Commit**

```bash
git add src/app/app.tsx
git commit -m "feat: wire all new sections into App with Lenis, cursor, and grain overlay"
```

---

### Task 12: Test, fix, and polish

**Step 1: Start dev server**

```bash
cd /Users/akindeju/Documents/Work/Projects/React_JS_Portfolio
npm start
```

**Step 2: Fix any TypeScript or import errors**

Check for:

- Missing type declarations (add `@types/` packages if needed)
- Import path issues (project uses `src/` path aliases via tsconfig)
- SplitType type issues (may need `// @ts-ignore` or type declaration)

**Step 3: Visual QA**

- Verify dark background renders
- Verify hero animation plays on load
- Verify smooth scroll works
- Verify custom cursor appears on desktop
- Verify mobile menu works at small viewport
- Verify all sections scroll-trigger correctly
- Verify project cards have 3D tilt on hover
- Verify marquee scrolls infinitely
- Verify contact links hover states

**Step 4: Final commit**

```bash
git add -A
git commit -m "feat: complete portfolio redesign - dark luxurious edition"
```
