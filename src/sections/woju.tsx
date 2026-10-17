'use client';

import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { woju, wojuDays } from '@/data/woju';
import s from './woju.module.scss';

gsap.registerPlugin(ScrollTrigger);

function Shot({ name, alt }: { name: string; alt: string }) {
  return (
    <>
      <img className="shot-light" src={`/images/woju/${name}-light.jpg`} alt={alt} loading="lazy" />
      <img className="shot-dark" src={`/images/woju/${name}-dark.jpg`} alt={alt} loading="lazy" />
    </>
  );
}

export default function Woju() {
  const root = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        // The launch: name in a coral glow as the stage scrolls in...
        gsap
          .timeline({
            defaults: { ease: 'none' },
            scrollTrigger: { trigger: '[data-launch]', start: 'top 80%', end: 'top top', scrub: 0.8 },
          })
          .fromTo('[data-glow]', { opacity: 0, scale: 0.6 }, { opacity: 1, scale: 1 }, 0)
          .fromTo('[data-title] > *', { opacity: 0, y: 60, filter: 'blur(16px)' }, { opacity: 1, y: 0, filter: 'blur(0px)', stagger: 0.12 }, 0.1);

        // ...then, pinned, the product rises into frame.
        gsap
          .timeline({
            defaults: { ease: 'none' },
            scrollTrigger: { trigger: '[data-launch]', start: 'top top', end: 'bottom bottom', scrub: 0.8 },
          })
          .to('[data-title]', { yPercent: -95, scale: 0.6, duration: 0.6 }, 0.1)
          .to('[data-title] p', { opacity: 0, duration: 0.2 }, 0.1)
          .fromTo('[data-devices]', { yPercent: 70, rotateX: 28, opacity: 0 }, { yPercent: 0, rotateX: 0, opacity: 1, duration: 0.6 }, 0.1)
          .fromTo('[data-phone]', { xPercent: 40, yPercent: 30 }, { xPercent: 0, yPercent: 0, duration: 0.5 }, 0.25)
          .to({}, { duration: 0.25 });
      });

      // The 13 days, as a film strip driven by vertical scroll.
      mm.add('(min-width: 900px) and (prefers-reduced-motion: no-preference)', () => {
        const strip = document.querySelector<HTMLElement>('[data-strip]')!;
        const track = document.querySelector<HTMLElement>('[data-track]')!;
        const distance = () => track.scrollWidth - window.innerWidth;
        strip.classList.add(s.pinned);
        strip.style.height = `${distance() + window.innerHeight}px`;
        const tween = gsap.to(track, {
          x: () => -distance(),
          ease: 'none',
          scrollTrigger: {
            trigger: strip,
            start: 'top top',
            end: 'bottom bottom',
            scrub: 0.6,
            invalidateOnRefresh: true,
            onRefreshInit: () => {
              strip.style.height = `${distance() + window.innerHeight}px`;
            },
          },
        });
        gsap.fromTo('[data-bar]', { scaleX: 0 }, { scaleX: 1, ease: 'none', scrollTrigger: tween.scrollTrigger!.vars });
        return () => {
          strip.classList.remove(s.pinned);
          strip.style.height = '';
        };
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section id="woju" ref={root} className={s.woju}>
      <div data-launch className={s.launch}>
        <div className={s.sticky}>
          <div data-glow className={s.glow} aria-hidden="true" />
          <div data-title className={s.title}>
            <img src="/images/woju/icon.png" alt="" width={96} height={96} className={s.icon} />
            <h2 className={s.name}>Wòjú</h2>
            <p className={s.tagline}>Chat, calls and vibez. Built by one engineer, first version in two days.</p>
          </div>
          <div data-devices className={s.devices}>
            <figure className={s.browser}>
              <div className={s.chrome} aria-hidden="true">
                <i />
                <i />
                <i />
                <span>agmawoju.netlify.app</span>
              </div>
              <Shot name="web" alt="Wòjú on the web" />
            </figure>
            <figure data-phone className={s.phone}>
              <Shot name="phone" alt="Wòjú on a phone" />
            </figure>
          </div>
        </div>
      </div>

      <div className="wrap">
        <dl className={s.facts}>
          {woju.facts.map((f) => (
            <div key={f.label}>
              <dt>{f.value}</dt>
              <dd>{f.label}</dd>
            </div>
          ))}
        </dl>

        <div className={s.detail}>
          <div>
            <h3 className={s.h3}>What it does</h3>
            <ul className={s.features}>
              {woju.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className={s.h3}>How it was built</h3>
            <p className={s.how}>
              A Go and PostgreSQL backend, a Next.js web app and a React Native app for iOS and Android, all from one repo. I
              wrote each feature as a spec, AI agents wrote the code, and every diff was reviewed by me before it shipped.
            </p>
            <p className={s.stack}>{woju.stack.join(', ')}</p>
            <a href={woju.url} target="_blank" rel="noreferrer" className={`btn ${s.open}`}>
              Open Wòjú
            </a>
          </div>
        </div>
      </div>

      <div data-strip className={s.strip}>
        <div className={s.stripSticky}>
          <div className={`wrap ${s.stripHead}`}>
            <h3 className="h2">Thirteen days, 89 releases.</h3>
            <p className="lead">Every release shipped with a changelog entry. Here is how the product grew.</p>
          </div>
          <div className={s.bar} aria-hidden="true">
            <span data-bar />
          </div>
          <ol data-track className={s.track}>
            {wojuDays.map((d) => (
              <li key={d.day} className={s.day}>
                <p className={s.dayNo}>Day {d.day}</p>
                <p className={s.dayMeta}>
                  {d.date}, v{d.versions}
                </p>
                <p className={s.dayTitle}>{d.title}</p>
                <p className={s.dayText}>{d.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
