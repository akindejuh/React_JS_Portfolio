'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { experiences } from '@/data/experience';
import s from './experience.module.scss';

export default function Experience() {
  const [open, setOpen] = useState(0);

  return (
    <section id="experience" className={s.experience}>
      <div className="wrap">
        <h2 className="h2">Where I have shipped.</h2>
        <ul className={s.list}>
          {experiences.map((e, i) => {
            const isOpen = open === i;
            return (
              <li key={e.company} className={s.item}>
                <button
                  type="button"
                  className={s.row}
                  aria-expanded={isOpen}
                  aria-controls={`xp-${i}`}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                >
                  <span className={s.period}>{e.period}</span>
                  <span className={s.who}>
                    <span className={s.company}>{e.company}</span>
                    <span className={s.role}>{e.role}</span>
                  </span>
                  <span className={`${s.plus} ${isOpen ? s.plusOpen : ''}`} aria-hidden="true" />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`xp-${i}`}
                      key="body"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                      className={s.bodyWrap}
                    >
                      <div className={s.body}>
                        <p className={s.desc}>{e.description}</p>
                        <ul className={s.highlights}>
                          {e.highlights.map((h) => (
                            <li key={h}>{h}</li>
                          ))}
                        </ul>
                        {e.website && (
                          <a href={e.website} target="_blank" rel="noreferrer" className={s.site}>
                            Visit {e.company}
                          </a>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
