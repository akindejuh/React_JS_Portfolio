'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TextReveal from '@/components/text-reveal';
import { experiences } from '@/data/experience';

gsap.registerPlugin(ScrollTrigger);

const Experience: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
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
      className="py-32 md:py-40 px-6 md:px-12 max-w-[1400px] mx-auto"
    >
      <TextReveal element="h2" className="font-space-grotesk-700 text-section text-white mb-4">
        Experience
      </TextReveal>

      <div className="w-16 h-[2px] bg-accent mb-16" />

      <div ref={timelineRef} className="relative">
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
              }`}
            >
              <div
                className="hidden md:block absolute top-2 w-3 h-3 rounded-full border-2 border-accent bg-[#0a0a0a]"
                style={{
                  [i % 2 === 0 ? 'right' : 'left']: '-1.85rem',
                }}
              />

              <div className="border border-[#1a1a1a] rounded-2xl p-8 bg-[#111111]/50 hover:border-accent/30 transition-colors duration-500">
                <div className="flex items-center gap-4 mb-5">
                  {/* Company logo badge */}
                  <a
                    href={exp.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl flex items-center justify-center font-space-grotesk-700 text-sm text-white flex-shrink-0 transition-transform duration-300 hover:scale-110"
                    style={{ backgroundColor: exp.companyColor }}
                    data-cursor-hover
                  >
                    {exp.initials}
                  </a>
                  <div>
                    <h3 className="font-space-grotesk-700 text-xl text-white leading-tight">
                      {exp.company}
                    </h3>
                    <span className="font-space-grotesk-500 text-xs text-[#737373] uppercase tracking-wider">
                      {exp.period}
                    </span>
                  </div>
                </div>
                <p className="font-space-grotesk-500 text-accent text-sm mb-4">
                  {exp.role}
                </p>
                <p className="font-space-grotesk text-[#737373] text-sm mb-6 leading-relaxed">
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
