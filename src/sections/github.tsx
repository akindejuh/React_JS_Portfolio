'use client';

import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import github from '@/data/github.json';
import s from './github.module.scss';

gsap.registerPlugin(ScrollTrigger);

const fmt = (n: number) => n.toLocaleString('en-US');
const peak = Math.max(...github.years.map(y => y.total));
const updated = new Date(`${github.updated}T12:00:00Z`).toLocaleDateString(
  'en-US',
  {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  },
);

// The public record: contributions per year, then the last 12 months day by day.
export default function GitHub() {
  const root = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.fromTo(
          '[data-bar]',
          { scaleX: 0 },
          {
            scaleX: 1,
            ease: 'none',
            stagger: 0.12,
            scrollTrigger: {
              trigger: '[data-years]',
              start: 'top 85%',
              end: 'bottom 55%',
              scrub: 0.6,
            },
          },
        );
        // the year lights up in a wave, left to right
        gsap.fromTo(
          '[data-cell]',
          { opacity: 0, scale: 0.3 },
          {
            opacity: 1,
            scale: 1,
            ease: 'none',
            stagger: {
              each: 0.002,
              grid: [7, github.weeks.length],
              axis: 'x',
              from: 'start',
            },
            scrollTrigger: {
              trigger: '[data-grid]',
              start: 'top 90%',
              end: 'bottom 60%',
              scrub: 0.6,
            },
          },
        );
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section id="record" ref={root} className={s.github}>
      <div className="wrap">
        <h2 className="h2">The commit record.</h2>
        <p className={`lead ${s.lead}`}>
          {fmt(github.total)} contributions since 2022, most of them in private
          client repos. GitHub counts them all.
        </p>

        <ol data-years className={s.years}>
          {github.years.map(y => (
            <li key={y.year}>
              <span className={s.year}>{y.year}</span>
              <span className={s.track}>
                <span
                  data-bar
                  className={s.bar}
                  style={{ width: `${(y.total / peak) * 100}%` }}
                />
              </span>
              <span className={s.count}>{fmt(y.total)}</span>
            </li>
          ))}
        </ol>

        <div className={s.calendar}>
          <p className={s.calHead}>
            <strong>{fmt(github.lastYear)}</strong> in the last 12 months
          </p>
          <div
            data-grid
            className={s.grid}
            style={{ ['--weeks' as string]: github.weeks.length }}
            role="img"
            aria-label={`${fmt(github.lastYear)} contributions in the last 12 months`}>
            {github.weeks.map((week, w) =>
              week.map((level, d) => (
                <i
                  key={`${w}-${d}`}
                  data-cell
                  className={s.cell}
                  data-level={level}
                  data-old={w < github.weeks.length - 26 || undefined}
                />
              )),
            )}
          </div>
          <p className={s.note}>
            Snapshot from GitHub on {updated}, across {github.repos}{' '}
            repositories.{' '}
            <a
              href="https://github.com/akindejuh"
              target="_blank"
              rel="noreferrer">
              See the profile
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
