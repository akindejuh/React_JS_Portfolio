'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TextReveal from '@/components/text-reveal';
import { featuredProjects, projectCategories } from '@/data/projects';
import { allProjects } from '@/data/all-projects';

gsap.registerPlugin(ScrollTrigger);

interface ProjectCardProps {
  project: typeof featuredProjects[number];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const card = cardRef.current;
    if (!card) return;
    const { left, top, width, height } = card.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;

    gsap.to(card, {
      rotateY: x * 10,
      rotateX: -y * 10,
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  const handleMouseLeave = () => {
    gsap.to(cardRef.current, {
      rotateY: 0,
      rotateX: 0,
      duration: 0.5,
      ease: 'elastic.out(1, 0.5)',
    });
  };

  const categoryColors: Record<string, string> = {
    mobile: '#455CE9',
    web: '#38CB89',
    opensource: '#FA5D29',
  };

  const hasLink = project.link !== '#';
  const Wrapper = hasLink ? 'a' : 'div';
  const wrapperProps = hasLink
    ? { href: project.link, target: '_blank', rel: 'noopener noreferrer', 'data-cursor-hover': true }
    : {};

  return (
    <div
      ref={cardRef}
      className="project-card group"
      style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <Wrapper
        {...wrapperProps as any}
        className="block border border-[#1a1a1a] rounded-2xl p-8 bg-[#111111]/50 hover:border-accent/40 transition-all duration-500 h-full"
      >
        <div className="flex items-center justify-between mb-6">
          <span
            className="text-xs font-space-grotesk-700 uppercase tracking-wider px-3 py-1 rounded-full"
            style={{
              color: categoryColors[project.category],
              border: `1px solid ${categoryColors[project.category]}30`,
            }}
          >
            {project.category}
          </span>
          {hasLink && (
            <svg className="w-5 h-5 text-[#737373] group-hover:text-accent transition-colors duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          )}
        </div>

        <h3 className="font-space-grotesk-700 text-xl text-white mb-3 group-hover:text-accent transition-colors duration-300">
          {project.name}
        </h3>

        <p className="font-space-grotesk text-sm text-[#737373] leading-relaxed mb-6">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="font-space-grotesk text-xs text-[#a3a3a3] px-3 py-1 rounded-full bg-[#1a1a1a]/50"
            >
              {tech}
            </span>
          ))}
        </div>
      </Wrapper>
    </div>
  );
};

const Projects: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const allProjectsRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [showAll, setShowAll] = useState(false);

  const filteredProjects = activeCategory === 'All'
    ? featuredProjects
    : featuredProjects.filter(
        (p) => {
          const catMap: Record<string, string> = {
            'Mobile': 'mobile',
            'Web': 'web',
            'Open Source': 'opensource',
          };
          return p.category === catMap[activeCategory];
        }
      );

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gridRef.current?.querySelectorAll('.project-card');
      cards?.forEach((card, i) => {
        gsap.from(card, {
          y: 80,
          opacity: 0,
          duration: 0.8,
          delay: i * 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [activeCategory]);

  useEffect(() => {
    if (showAll && allProjectsRef.current) {
      const ctx = gsap.context(() => {
        const groups = allProjectsRef.current?.querySelectorAll('.all-project-group');
        groups?.forEach((group, i) => {
          gsap.from(group, {
            y: 40,
            opacity: 0,
            duration: 0.6,
            delay: i * 0.1,
            ease: 'power3.out',
          });
        });
      }, allProjectsRef);

      return () => ctx.revert();
    }
  }, [showAll]);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="py-32 md:py-40 px-6 md:px-12 max-w-[1400px] mx-auto"
    >
      <TextReveal element="h2" className="font-space-grotesk-700 text-section text-white mb-4">
        Featured Projects
      </TextReveal>

      <div className="w-16 h-[2px] bg-accent mb-12" />

      <div className="flex flex-wrap gap-3 mb-12">
        {projectCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`font-space-grotesk-500 text-sm px-5 py-2.5 rounded-full border transition-all duration-300 uppercase tracking-wider ${
              activeCategory === cat
                ? 'bg-accent text-white border-accent'
                : 'border-[#1a1a1a] text-[#737373] hover:border-accent/50 hover:text-white'
            }`}
            data-cursor-hover
          >
            {cat}
          </button>
        ))}
      </div>

      <div
        ref={gridRef}
        className="grid md:grid-cols-2 gap-6"
      >
        {filteredProjects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>

      {/* View All Projects Toggle */}
      <div className="mt-16 text-center">
        <button
          onClick={() => setShowAll(!showAll)}
          className="font-space-grotesk-700 text-sm px-8 py-4 border border-accent text-accent rounded-full hover:bg-accent hover:text-white transition-all duration-300 uppercase tracking-wider inline-flex items-center gap-3"
          data-cursor-hover
        >
          {showAll ? 'Show Less' : 'View All Projects'}
          <svg
            className={`w-4 h-4 transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </button>
      </div>

      {/* All Projects Expandable Section */}
      {showAll && (
        <div ref={allProjectsRef} className="mt-16 space-y-12">
          <div className="w-full h-[1px] bg-[#1a1a1a]" />

          <h3 className="font-space-grotesk-700 text-2xl text-white">
            All Projects
          </h3>

          {allProjects.map((group) => (
            <div key={group.category} className="all-project-group">
              <h4 className="font-space-grotesk-500 text-sm text-accent uppercase tracking-widest mb-6">
                {group.category}
                <span className="text-[#737373] ml-2">({group.projects.length})</span>
              </h4>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {group.projects.map((project) => {
                  const hasLink = project.link !== '#';
                  const Tag = hasLink ? 'a' : 'div';
                  const tagProps = hasLink
                    ? { href: project.link, target: '_blank', rel: 'noopener noreferrer', 'data-cursor-hover': true }
                    : {};
                  return (
                    <Tag
                      key={project.name}
                      {...tagProps as any}
                      className="group block border border-[#1a1a1a] rounded-xl p-5 bg-[#111111]/30 hover:border-accent/30 transition-all duration-300"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h5 className="font-space-grotesk-700 text-sm text-white group-hover:text-accent transition-colors duration-300">
                            {project.name}
                          </h5>
                          <p className="font-space-grotesk text-xs text-[#737373] mt-1 leading-relaxed">
                            {project.description}
                          </p>
                        </div>
                        {hasLink && (
                          <svg className="w-4 h-4 text-[#737373] group-hover:text-accent transition-all duration-300 flex-shrink-0 mt-0.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M7 17L17 7M17 7H7M17 7V17" />
                          </svg>
                        )}
                      </div>
                    </Tag>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Projects;
