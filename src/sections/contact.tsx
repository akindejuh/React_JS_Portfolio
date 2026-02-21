'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TextReveal from '@/components/text-reveal';
import { socials } from '@/data/socials';

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
      className="py-32 md:py-40 px-6 md:px-12 max-w-[1400px] mx-auto"
    >
      <TextReveal element="h2" className="font-space-grotesk-700 text-section text-white mb-4">
        Let&apos;s Build Together
      </TextReveal>

      <div className="w-16 h-[2px] bg-accent mb-8" />

      <p className="font-space-grotesk text-body-lg text-[#737373] max-w-xl mb-16">
        I&apos;m always open to discussing new opportunities, interesting projects,
        or ways to contribute to open-source. Let&apos;s connect.
      </p>

      <div ref={linksRef} className="space-y-0">
        {socials.map((social) => (
          <a
            key={social.social}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link group flex items-center justify-between py-6 border-b border-[#1a1a1a] hover:border-accent/40 transition-all duration-500"
            data-cursor-hover
          >
            <div className="flex items-center gap-6">
              <span className="font-space-grotesk-700 text-2xl md:text-4xl text-white group-hover:text-accent transition-colors duration-300">
                {social.social}
              </span>
            </div>
            <div className="flex items-center gap-4">
              <span className="font-space-grotesk text-sm text-[#737373] hidden md:inline group-hover:text-white transition-colors duration-300">
                {social.display}
              </span>
              <svg className="w-5 h-5 text-[#737373] group-hover:text-accent transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </div>
          </a>
        ))}
      </div>

      <div className="mt-24 pt-8 border-t border-[#1a1a1a] flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-space-grotesk text-sm text-[#737373]">
          Built with React, GSAP &amp; Tailwind
        </p>
        <p className="font-space-grotesk text-sm text-[#737373]">
          &copy; {new Date().getFullYear()} Akindeju Oluwagbemiga
        </p>
      </div>
    </section>
  );
};

export default Contact;
