'use client';

import { useState } from 'react';
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion';
import { featuredProjects } from '@/data/projects';
import { allProjects } from '@/data/all-projects';
import s from './work.module.scss';

const DRIVE =
  'https://drive.google.com/drive/folders/1SD5sdFNxNp5S2xUbo-WELoOTaHUaDt5u?usp=drive_link';

const filters = [
  { key: 'all', label: 'All' },
  { key: 'mobile', label: 'Mobile' },
  { key: 'web', label: 'Web' },
  { key: 'opensource', label: 'Open source' },
] as const;

type FilterKey = (typeof filters)[number]['key'];

const isLink = (href: string) => href && href !== '#';

export default function Work() {
  const [filter, setFilter] = useState<FilterKey>('all');
  const [archive, setArchive] = useState(false);
  const shown = featuredProjects.filter(
    p => filter === 'all' || p.category === filter,
  );

  return (
    <section id="work" className={s.work}>
      <div className="wrap">
        <div className={s.head}>
          <h2 className="h2">Selected work.</h2>
          <LayoutGroup id="filters">
            <div
              className={s.filters}
              role="tablist"
              aria-label="Filter projects">
              {filters.map(f => (
                <button
                  key={f.key}
                  type="button"
                  role="tab"
                  aria-selected={filter === f.key}
                  className={s.filter}
                  onClick={() => setFilter(f.key)}>
                  {filter === f.key && (
                    <motion.span
                      layoutId="pill"
                      className={s.pill}
                      transition={{
                        type: 'spring',
                        stiffness: 420,
                        damping: 36,
                      }}
                    />
                  )}
                  <span className={s.filterLabel}>{f.label}</span>
                </button>
              ))}
            </div>
          </LayoutGroup>
        </div>

        <motion.ul layout className={s.rows}>
          <AnimatePresence mode="popLayout" initial={false}>
            {shown.map(p => {
              const Tag = isLink(p.link) ? motion.a : motion.div;
              return (
                <motion.li
                  key={p.name}
                  layout
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}>
                  <Tag
                    className={s.row}
                    {...(isLink(p.link)
                      ? { href: p.link, target: '_blank', rel: 'noreferrer' }
                      : {})}>
                    <span className={s.name}>{p.name}</span>
                    <span className={s.desc}>{p.description}</span>
                    <span className={s.stack}>{p.stack.join(', ')}</span>
                    {isLink(p.link) && (
                      <span className={s.arrow} aria-hidden="true" />
                    )}
                  </Tag>
                </motion.li>
              );
            })}
          </AnimatePresence>
        </motion.ul>

        <div className={s.archiveHead}>
          <button
            type="button"
            className="btn btn-ghost"
            aria-expanded={archive}
            onClick={() => setArchive(!archive)}>
            {archive ? 'Hide the archive' : 'Show everything else'}
          </button>
          <p className="muted">
            Store apps, side projects and APKs on{' '}
            <a
              href={DRIVE}
              target="_blank"
              rel="noreferrer"
              className={s.inline}>
              Google Drive
            </a>{' '}
            and{' '}
            <a
              href="https://github.com/akindejuh"
              target="_blank"
              rel="noreferrer"
              className={s.inline}>
              GitHub
            </a>
            .
          </p>
        </div>

        <AnimatePresence initial={false}>
          {archive && (
            <motion.div
              key="archive"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className={s.archiveWrap}>
              <div className={s.archive}>
                {allProjects.map(cat => (
                  <div key={cat.category} className={s.cat}>
                    <h3>{cat.category}</h3>
                    <ul>
                      {cat.projects.map(p => (
                        <li key={p.name}>
                          {isLink(p.link) ? (
                            <a href={p.link} target="_blank" rel="noreferrer">
                              {p.name}
                            </a>
                          ) : (
                            <span>{p.name}</span>
                          )}
                          <span className="muted">{p.description}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
