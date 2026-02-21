'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import SplitType from 'split-type';
import { useMagnetic } from '@/hooks/useMagnetic';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const ctaRef = useMagnetic(0.35);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const nameSplit = new SplitType(nameRef.current!, { types: 'chars' });
      const subtitleSplit = new SplitType(subtitleRef.current!, { types: 'words' });

      const tl = gsap.timeline({ delay: 0.5 });

      tl.from(nameSplit.chars, {
        y: 120,
        opacity: 0,
        rotateX: -90,
        stagger: 0.04,
        duration: 1,
        ease: 'power4.out',
      });

      tl.from(lineRef.current, {
        scaleX: 0,
        duration: 0.8,
        ease: 'power3.inOut',
      }, '-=0.4');

      tl.from(subtitleSplit.words, {
        y: 40,
        opacity: 0,
        stagger: 0.06,
        duration: 0.6,
        ease: 'power3.out',
      }, '-=0.3');

      tl.from(ctaRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: 'power3.out',
      }, '-=0.2');

      tl.from(scrollIndicatorRef.current, {
        opacity: 0,
        duration: 0.5,
      }, '-=0.1');

      return () => {
        nameSplit.revert();
        subtitleSplit.revert();
      };
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const scrollToAbout = () => {
    const el = document.getElementById('about');
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 max-w-[1400px] mx-auto"
    >
      <div className="mt-20">
        <h1
          ref={nameRef}
          className="font-space-grotesk-700 text-hero text-white leading-[0.95] tracking-tight"
          style={{ perspective: '500px' }}
        >
          @akindejuh
        </h1>

        <div
          ref={lineRef}
          className="w-full h-[2px] bg-accent my-6 md:my-8 origin-left"
        />

        <p
          ref={subtitleRef}
          className="font-space-grotesk-500 text-body-lg text-[#737373] max-w-2xl"
        >
          Software Engineer crafting high-performance mobile &amp; web applications
          that scale. Building at Benmore Technologies.
        </p>

        <button
          ref={ctaRef as React.RefObject<HTMLButtonElement>}
          onClick={scrollToAbout}
          className="magnetic-btn mt-10 md:mt-14 px-10 py-5 border border-accent text-accent font-space-grotesk-700 text-sm uppercase tracking-widest rounded-full hover:bg-accent hover:text-white transition-all duration-500"
          data-cursor-hover
        >
          Explore My Work
        </button>
      </div>

      <div
        ref={scrollIndicatorRef}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-space-grotesk text-xs text-[#737373] uppercase tracking-widest">
          Scroll
        </span>
        <div className="w-[1px] h-12 bg-[#737373]/30 relative overflow-hidden">
          <div className="w-full h-4 bg-accent animate-bounce absolute top-0" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
