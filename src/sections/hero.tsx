'use client';

import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { profile } from '@/data/profile';
import s from './hero.module.scss';

gsap.registerPlugin(ScrollTrigger);

const lines = ['Michael', 'Akindeju.'];

export default function Hero() {
  const root = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        // the one orchestrated moment: the name builds itself
        gsap.from('[data-char]', {
          yPercent: 115,
          opacity: 0,
          filter: 'blur(14px)',
          duration: 1.3,
          ease: 'expo.out',
          stagger: 0.035,
          delay: 0.1,
        });
        gsap.from('[data-rise]', { y: 28, opacity: 0, duration: 1.1, ease: 'expo.out', stagger: 0.09, delay: 0.75 });

        // the portrait opens from a card to the full frame
        const stage = { trigger: '[data-stage]', start: 'top top', end: 'bottom bottom', scrub: true };
        gsap.fromTo(
          '[data-portrait]',
          { clipPath: 'inset(16% 24% 16% 24% round 36px)' },
          { clipPath: 'inset(0% 0% 0% 0% round 0px)', ease: 'none', scrollTrigger: stage },
        );
        gsap.fromTo('[data-portrait] img', { scale: 1.25 }, { scale: 1, ease: 'none', scrollTrigger: stage });
        gsap.fromTo(
          '[data-caption]',
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, ease: 'none', scrollTrigger: { trigger: '[data-stage]', start: '45% top', end: '80% top', scrub: true } },
        );
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={root}>
      <section id="top" className={s.hero}>
        <div className="wrap">
          <p data-rise className={s.kicker}>
            {profile.role} at{' '}
            <a href={profile.companyUrl} target="_blank" rel="noreferrer">
              {profile.company}
            </a>
          </p>
          <h1 className={s.name} aria-label={profile.name}>
            {lines.map((line) => (
              <span key={line} className={s.line} aria-hidden="true">
                {Array.from(line).map((ch, i) => (
                  <span key={i} data-char className={s.char}>
                    {ch}
                  </span>
                ))}
              </span>
            ))}
          </h1>
          <div className={s.foot}>
            <p data-rise className="lead">
              {profile.intro}
            </p>
            <div data-rise className={s.actions}>
              <a href="#woju" className="btn btn-solid">
                See what I shipped
              </a>
              <a href={profile.cv} className="btn btn-ghost" download>
                Download CV
              </a>
            </div>
          </div>
        </div>
      </section>

      <section data-stage className={s.stage} aria-label="Portrait">
        <div className={s.sticky}>
          <div data-portrait className={s.frame}>
            <img src="/images/portrait.jpg" alt="Michael Akindeju" width={1800} height={1908} />
          </div>
          <p data-caption className={s.caption}>
            Based in {profile.location}, building with teams across the US and Africa.
          </p>
        </div>
      </section>
    </div>
  );
}
