'use client';

import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { stats } from '@/data/profile';
import s from './numbers.module.scss';

gsap.registerPlugin(ScrollTrigger);

// One number per screen, like keynote slides, scrubbed by scroll.
export default function Numbers() {
  const root = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const el = root.current!;
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        el.classList.add(s.live);
        const items = gsap.utils.toArray<HTMLElement>('[data-stat]');
        const tl = gsap.timeline({
          defaults: { ease: 'none' },
          scrollTrigger: { trigger: el, start: 'top top', end: 'bottom bottom', scrub: 0.6 },
        });
        // the first number arrives while the section scrolls in, so there is no empty screen
        gsap.fromTo(
          items[0].firstElementChild,
          { opacity: 0, yPercent: 30, filter: 'blur(12px)' },
          { opacity: 1, yPercent: 0, filter: 'blur(0px)', ease: 'none', scrollTrigger: { trigger: el, start: 'top 85%', end: 'top 10%', scrub: 0.6 } },
        );
        gsap.set(items[0], { opacity: 1 });
        items.forEach((item, i) => {
          if (i > 0) {
            tl.fromTo(
              item,
              { opacity: 0, yPercent: 18, scale: 0.92, filter: 'blur(12px)' },
              { opacity: 1, yPercent: 0, scale: 1, filter: 'blur(0px)', duration: 0.45 },
              i - 0.1,
            );
          }
          tl.fromTo('[data-step]', { textContent: i }, { textContent: i + 1, snap: { textContent: 1 }, duration: 0.01 }, i);
          if (i < items.length - 1) {
            tl.to(item, { opacity: 0, yPercent: -14, filter: 'blur(12px)', duration: 0.35 }, i + 0.65);
          }
        });
        return () => el.classList.remove(s.live);
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className={s.numbers} style={{ ['--n' as string]: stats.length }} aria-label="By the numbers">
      <div className={s.sticky}>
        <div className={`wrap ${s.stack}`}>
          {stats.map((st) => (
            <div key={st.unit} data-stat className={s.stat}>
              <div>
                <p className={s.value}>{st.value}</p>
                <p className={s.line}>
                  <strong>{st.unit}</strong> {st.line}
                </p>
              </div>
            </div>
          ))}
        </div>
        <p className={`wrap ${s.progress}`} aria-hidden="true">
          <span data-step>1</span> of {stats.length}
        </p>
      </div>
    </section>
  );
}
