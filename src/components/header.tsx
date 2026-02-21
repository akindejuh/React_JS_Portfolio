'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { loadingToast, updateLoadingToastToSuccess } from '@/handlers/toast';
import { Images } from '@/assets/images/_images';
const CV_PATH = '/pdfs/Akindeju_CV.pdf';

const navLinks = [
  { name: 'About', id: 'about' },
  { name: 'Experience', id: 'experience' },
  { name: 'Projects', id: 'projects' },
  { name: 'Skills', id: 'skills' },
  { name: 'Contact', id: 'contact' },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const y = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const downloadCV = () => {
    loadingToast({ message: 'Downloading...' });
    const link = document.createElement('a');
    link.href = CV_PATH;
    link.download = 'Akindeju_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => {
      updateLoadingToastToSuccess({ message: 'File Downloaded!' });
    }, 1000);
  };

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#0a0a0a]/80 backdrop-blur-md border-b border-[#1a1a1a]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1400px] mx-auto flex justify-between items-center px-6 md:px-12 h-20">
          <a
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-3 cursor-pointer"
            data-cursor-hover
          >
            <div className="w-10 h-10 rounded-full border-2 border-accent p-[3px]">
              <img
                src={Images.dp}
                alt="Akindeju Oluwagbemiga"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <span className="font-space-grotesk-700 text-lg text-white">
              AGMA<span className="text-accent">.</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="font-space-grotesk-500 text-sm text-[#737373] hover:text-white transition-colors duration-300 cursor-pointer uppercase tracking-wider"
                data-cursor-hover
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={downloadCV}
              className="font-space-grotesk-700 text-sm px-6 py-3 border border-accent text-accent rounded-full hover:bg-accent hover:text-white transition-all duration-300 uppercase tracking-wider"
              data-cursor-hover
            >
              Resume
            </button>
          </nav>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative z-50 w-8 h-8 flex flex-col justify-center items-center gap-1.5"
            data-cursor-hover
          >
            <span className={`w-6 h-[2px] bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-[5px]' : ''}`} />
            <span className={`w-6 h-[2px] bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`w-6 h-[2px] bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-[5px]' : ''}`} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-[#0a0a0a] flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                onClick={() => scrollTo(link.id)}
                className="font-space-grotesk-700 text-4xl text-white cursor-pointer hover:text-accent transition-colors duration-300"
              >
                {link.name}
              </motion.a>
            ))}
            <motion.button
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ delay: navLinks.length * 0.08, duration: 0.4 }}
              onClick={() => {
                setIsOpen(false);
                downloadCV();
              }}
              className="font-space-grotesk-700 text-lg px-8 py-4 border border-accent text-accent rounded-full hover:bg-accent hover:text-white transition-all duration-300 mt-4"
            >
              Download Resume
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
