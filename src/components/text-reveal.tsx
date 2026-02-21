'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

interface TextRevealProps {
  children: string;
  element?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  className?: string;
  delay?: number;
  scrub?: boolean;
}

const TextReveal: React.FC<TextRevealProps> = ({
  children,
  element: Element = 'h2',
  className = '',
  delay = 0,
  scrub = true,
}) => {
  const textRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;

    const split = new SplitType(el, { types: 'chars,words' });

    gsap.set(split.chars, { y: 100, opacity: 0 });

    if (scrub) {
      gsap.to(split.chars, {
        y: 0,
        opacity: 1,
        stagger: 0.02,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          end: 'top 20%',
          toggleActions: 'play none none reverse',
        },
        delay,
      });
    } else {
      gsap.to(split.chars, {
        y: 0,
        opacity: 1,
        stagger: 0.03,
        duration: 0.6,
        ease: 'power3.out',
        delay,
      });
    }

    return () => {
      split.revert();
    };
  }, [children, delay, scrub]);

  return (
    <Element
      ref={textRef as any}
      className={`overflow-hidden ${className}`}
    >
      {children}
    </Element>
  );
};

export default TextReveal;
