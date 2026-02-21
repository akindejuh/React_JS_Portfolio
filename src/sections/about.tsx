'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TextReveal from '@/components/text-reveal';
import { Images } from '@/assets/images/_images';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: '15+', label: 'Apps Shipped' },
  { value: '3M+', label: 'Users Served' },
  { value: '4+', label: 'Years Experience' },
  { value: '60+', label: 'GitHub Repos' },
];

const About: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const bioRef = useRef<HTMLParagraphElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Profile image parallax
      if (imageRef.current) {
        gsap.from(imageRef.current, {
          y: 80,
          opacity: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: imageRef.current,
            start: 'top 85%',
          },
        });

        gsap.to(imageRef.current.querySelector('img'), {
          yPercent: -10,
          ease: 'none',
          scrollTrigger: {
            trigger: imageRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.5,
          },
        });
      }

      gsap.from(bioRef.current, {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: bioRef.current,
          start: 'top 80%',
        },
      });

      const statEls = statsRef.current?.querySelectorAll('.stat-item');
      statEls?.forEach((el, i) => {
        gsap.from(el, {
          y: 50,
          opacity: 0,
          duration: 0.8,
          delay: i * 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: statsRef.current,
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
      id="about"
      className="py-32 md:py-40 px-6 md:px-12 max-w-[1400px] mx-auto"
    >
      <TextReveal element="h2" className="font-space-grotesk-700 text-section text-white mb-4">
        About Me
      </TextReveal>

      <div className="w-16 h-[2px] bg-accent mb-12" />

      <div className="grid md:grid-cols-[1fr_1.2fr] gap-12 md:gap-20">
        {/* Left: Image + Bio */}
        <div>
          <div
            ref={imageRef}
            className="relative w-48 h-48 md:w-56 md:h-56 mb-10 rounded-2xl overflow-hidden border-2 border-[#1a1a1a]"
          >
            <img
              src={Images.dp}
              alt="Akindeju Oluwagbemiga"
              className="w-full h-full object-cover scale-110"
            />
            <div className="absolute inset-0 bg-accent/10 mix-blend-overlay" />
          </div>
          <p
            ref={bioRef}
            className="font-space-grotesk text-body-lg text-[#737373] leading-relaxed"
          >
            I&apos;m a Software Engineer with 4+ years of experience building scalable
            React Native, React.js, and Node.js applications. I&apos;ve led high-impact
            projects that improved deployment accuracy by 62% and enhanced application
            performance by 22% through rigorous code quality and testing practices.
            <br /><br />
            My work across fintech platforms — reducing bugs, strengthening system stability,
            and shipping to millions of users — contributed to a 36% revenue increase and
            93% on-time delivery rate. I publish open-source packages, contribute to community
            projects, and stay focused on solving complex technical problems that create real
            impact at scale.
            <br /><br />
            Currently building at <span className="text-accent font-space-grotesk-700">Benmore Technologies</span>,
            where I help deploy software the right way, the first time.
          </p>
        </div>

        <div ref={statsRef} className="grid grid-cols-2 gap-8 content-start">
          {stats.map((stat) => (
            <div key={stat.label} className="stat-item border-l-2 border-accent pl-6">
              <span className="font-space-grotesk-700 text-5xl md:text-6xl text-white">
                {stat.value}
              </span>
              <p className="font-space-grotesk-500 text-sm text-[#737373] mt-2 uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
