'use client';

import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { method } from '@/data/profile';
import s from './method.module.scss';

gsap.registerPlugin(ScrollTrigger);

export default function Method() {
  const root = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        // the statement lights up word by word as it is read
        gsap.fromTo(
          '[data-word]',
          { opacity: 0.16 },
          {
            opacity: 1,
            ease: 'none',
            stagger: 0.05,
            scrollTrigger: { trigger: '[data-statement]', start: 'top 78%', end: 'bottom 45%', scrub: true },
          },
        );
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section id="method" ref={root} className={s.method}>
      <div className="wrap">
        <h2 className={s.kicker}>How I build</h2>
        <p data-statement className={s.statement}>
          {method.statement.split(' ').map((w, i) => (
            <span key={i} data-word>
              {w}{' '}
            </span>
          ))}
        </p>

        <dl className={s.principles}>
          {method.principles.map((p) => (
            <div key={p.title}>
              <dt>{p.title}</dt>
              <dd>{p.text}</dd>
            </div>
          ))}
        </dl>

        <div className={s.toolbox}>
          <h3>Toolbox</h3>
          <ul>
            {method.toolbox.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
