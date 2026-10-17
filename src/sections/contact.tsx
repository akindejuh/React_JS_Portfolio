'use client';

import { useState } from 'react';
import { profile } from '@/data/profile';
import { socials } from '@/data/socials';
import s from './contact.module.scss';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <section id="contact" className={s.contact}>
      <div className="wrap">
        <h2 className={s.title}>Hiring? Let’s talk.</h2>
        <p className={`lead ${s.lead}`}>
          Mobile, web or backend, I can own it end to end and ship it fast. Send
          a note and I will reply within a day.
        </p>

        <div className={s.mailRow}>
          <a href={`mailto:${profile.email}`} className={s.mail}>
            {profile.email}
          </a>
          <button
            type="button"
            onClick={copy}
            className="btn btn-ghost"
            aria-live="polite">
            {copied ? 'Copied' : 'Copy email'}
          </button>
        </div>

        <div className={s.actions}>
          <a href={profile.cv} download className="btn btn-solid">
            Download CV
          </a>
          {socials
            .filter(x => x.social !== 'Mail')
            .map(x => (
              <a
                key={x.social}
                href={x.link}
                target="_blank"
                rel="noreferrer"
                className="btn btn-ghost">
                {x.social}
              </a>
            ))}
        </div>
      </div>

      <footer className={`wrap ${s.footer}`}>
        <p>
          © {new Date().getFullYear()} {profile.fullName}
        </p>
        <p>
          Designed and built by me, with AI agents and a lot of reviewed diffs.
        </p>
      </footer>
    </section>
  );
}
