'use client';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useLenis } from '@/hooks/useLenis';
import Header from '@/components/header';
import CustomCursor from '@/components/cursor';
import ScrollProgress from '@/components/scroll-progress';
import Hero from '@/sections/hero';
import About from '@/sections/about';
import Experience from '@/sections/experience';
import Projects from '@/sections/projects';
import Skills from '@/sections/skills';
import Contact from '@/sections/contact';

export default function Home() {
  useLenis();

  return (
    <>
      <CustomCursor />
      <ScrollProgress />
      <div className="grain-overlay" />
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <ToastContainer
        position="bottom-right"
        theme="dark"
        toastStyle={{ backgroundColor: '#111111', color: '#e5e5e5' }}
      />
    </>
  );
}
