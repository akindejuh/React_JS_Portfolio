'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TextReveal from '@/components/text-reveal';
import { skills, skillCategories, marqueeSkills } from '@/data/skills';

gsap.registerPlugin(ScrollTrigger);

const Skills: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gridRef.current?.querySelectorAll('.skill-pill');
      items?.forEach((item, i) => {
        gsap.from(item, {
          scale: 0,
          opacity: 0,
          duration: 0.4,
          delay: i * 0.03,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: gridRef.current,
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
      id="skills"
      className="py-32 md:py-40"
    >
      <div className="px-6 md:px-12 max-w-[1400px] mx-auto">
        <TextReveal element="h2" className="font-space-grotesk-700 text-section text-white mb-4">
          Skills & Tools
        </TextReveal>

        <div className="w-16 h-[2px] bg-accent mb-16" />

        <div ref={gridRef} className="space-y-10">
          {skillCategories.map((cat) => (
            <div key={cat.key}>
              <h3 className="font-space-grotesk-500 text-sm text-[#737373] uppercase tracking-widest mb-4">
                {cat.label}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills
                  .filter((s) => s.category === cat.key)
                  .map((skill) => (
                    <span
                      key={skill.name}
                      className="skill-pill font-space-grotesk-500 text-sm px-5 py-2.5 rounded-full border border-[#1a1a1a] text-[#a3a3a3] hover:border-accent hover:text-accent transition-all duration-300 cursor-default"
                      data-cursor-hover
                    >
                      {skill.name}
                    </span>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20 overflow-hidden border-y border-[#1a1a1a] py-6">
        <div className="marquee-track flex whitespace-nowrap">
          {[...marqueeSkills, ...marqueeSkills].map((skill, i) => (
            <span
              key={`${skill}-${i}`}
              className="font-space-grotesk-700 text-3xl md:text-5xl text-[#1a1a1a] mx-6 md:mx-10 select-none hover:text-accent transition-colors duration-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
