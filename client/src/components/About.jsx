import React from 'react';
import { skillsData } from '../data/portfolioData';
import { FiArrowRight } from 'react-icons/fi';

const SkillPill = ({ icon: Icon, name }) => (
  <div className="flex items-center gap-3 px-6 py-3 md:px-8 md:py-4 glass-card rounded-xl hover:border-purple-500/50 hover:shadow-[0_0_25px_rgba(168,85,247,0.2)] transition-all duration-300 group cursor-default">
    <Icon className="text-xl md:text-2xl text-cyan-400 group-hover:text-purple-400 transition-colors" />
    <span className="text-slate-300 text-sm md:text-base font-medium whitespace-nowrap">{name}</span>
  </div>
);

const About = () => {
  return (
     <section id="about" className="py-24 bg-transparent overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Header Section */}
        <header className="mb-20 text-center">
          <h2 className="text-5xl font-bold text-white mb-16 flex items-center justify-center">
           
          <span className="cosmic-text">About Me</span>
        </h2>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            My background, professional philosophy, and Passion for Innovative Solutions.
          </p>
        </header>

        {/* Content Split Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center mb-24">
          {/* Left Column (Image) */}
          <div className="md:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[600px] aspect-[3/4]">
              {/* Gold accent block trailing behind top-left edge */}
              <div className="absolute -top-4 -left-4 w-full h-full bg-[#E5A93B] rounded-lg -z-10 shadow-lg"></div>
              <img 
                src="/images/profile.jpg" 
                alt="Imesh Bandara" 
                className="w-full h-full object-cover rounded-lg border border-neutral-900 shadow-xl"
              />
            </div>
          </div>

          {/* Right Column (Text) */}
          <div className="md:col-span-7 relative">
            <div className="bg-[#1a1a1a]/40 p-8 md:p-10 rounded-2xl border border-neutral-800/50 shadow-2xl relative">
              <h3 className="text-4xl md:text-5xl font-bold text-[#E5A93B] mb-2 tracking-tight">
                Imesh Bandara
              </h3>
              <h4 className="text-xl md:text-2xl font-medium text-white mb-6">
                Softwate Engineeer
              </h4>
              
              <div className="space-y-6 text-slate-300 font-sans text-base md:text-lg leading-relaxed text-left pr-4">
                <p>
                  Hello! I'm Imesh Bandara, a dedicated Software Engineering student at the University of Kelaniya. My passion lies in crafting high-performance digital experiences that merge clean code with intuitive design.
                </p>
                <p>
                  My journey began with a curiosity for how the web works, which quickly evolved into a rigorous academic and professional pursuit. From building AI-powered tourism platforms like VisitCeylonX to architecting robust enterprise systems, I thrive on solving complex problems with elegant solutions.
                </p>
                <p>
                  I specialize in the MERN stack for dynamic interfaces and Spring Boot for scalable backends, always pushing the boundaries of what's possible in modern software engineering.
                </p>
              </div>

              {/* Floating white circular slider/navigation arrow button */}
              
            </div>
          </div>
        </div>

        {/* Labeled Tech Rows */}
        <div className="space-y-16">
          {/* Frontend Row */}
          <div className="space-y-4">
            <h3 className="text-xs md:text-sm text-cyan-400/80 tracking-[0.4em] font-bold uppercase drop-shadow-[0_0_8px_rgba(34,211,238,0.3)]">Frontend</h3>
            <div className="relative group mask-marquee">
              <div className="flex gap-6 animate-marquee-reverse group-hover:[animation-play-state:paused] py-2">
                {[...skillsData.frontend, ...skillsData.frontend, ...skillsData.frontend, ...skillsData.frontend].map((skill, idx) => (
                  <SkillPill key={idx} icon={skill.icon} name={skill.name} />
                ))}
              </div>
            </div>
          </div>

          {/* Backend Row */}
          <div className="space-y-4">
            <h3 className="text-xs md:text-sm text-indigo-400/80 tracking-[0.4em] font-bold uppercase drop-shadow-[0_0_8px_rgba(99,102,241,0.3)]">Backend</h3>
            <div className="relative group mask-marquee">
              <div className="flex gap-6 animate-marquee group-hover:[animation-play-state:paused] py-2">
                {[...skillsData.backend, ...skillsData.backend, ...skillsData.backend, ...skillsData.backend].map((skill, idx) => (
                  <SkillPill key={idx} icon={skill.icon} name={skill.name} />
                ))}
              </div>
            </div>
          </div>

          {/* Database & Tools Row */}
          <div className="space-y-4">
            <h3 className="text-xs md:text-sm text-purple-400/80 tracking-[0.4em] font-bold uppercase drop-shadow-[0_0_8px_rgba(168,85,247,0.3)]">Database & Tools</h3>
            <div className="relative group mask-marquee">
              <div className="flex gap-6 animate-marquee-reverse group-hover:[animation-play-state:paused] py-2">
                {[...skillsData.databaseTools, ...skillsData.databaseTools, ...skillsData.databaseTools, ...skillsData.databaseTools].map((skill, idx) => (
                  <SkillPill key={idx} icon={skill.icon} name={skill.name} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;