import React from 'react';
import { skillsData } from '../data/portfolioData';

const SkillPill = ({ icon: Icon, name }) => (
  <div className="flex items-center gap-3 px-6 py-3 md:px-8 md:py-4 bg-[#1e293b] border border-cyan-900/30 rounded-xl hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(34,211,238,0.15)] transition-all duration-300 group cursor-default">
    <Icon className="text-xl md:text-2xl text-cyan-400" />
    <span className="text-slate-300 text-sm md:text-base font-medium whitespace-nowrap">{name}</span>
  </div>
);

const About = () => {
  return (
    <section id="about" className="py-24 bg-[#0f172a] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-12 text-center">
        {/* Centered Heading */}
        <h2 className="text-4xl font-bold text-white mb-16 flex items-center justify-center">
          <span className="text-cyan-400 font-mono text-xl mr-2">01.</span> About Me
        </h2>

        {/* Profile Image Container */}
        <div className="mx-auto mb-10 flex justify-center">
          <div className="relative group">
            {/* Decorative border behind the image */}
            <div className="absolute -inset-4 border-2 border-cyan-400/60 rounded-2xl translate-x-3 translate-y-3 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500"></div>
            
            <img 
              src="/images/profile.jpg" 
              alt="Imesh Bandara" 
              className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-500 border-2 border-slate-800 bg-[#1e293b]"
            />
          </div>
        </div>

        {/* Centered Storytelling Description */}
        <div className="max-w-3xl mx-auto text-slate-400 space-y-6 text-lg md:text-xl leading-relaxed mb-24">
          <p>
            Hello! I'm <span className="text-cyan-400">Imesh Bandara</span>, a dedicated Software Engineering student at the 
            <span className="text-white"> University of Kelaniya</span>. My passion lies in crafting high-performance digital experiences that merge clean code with intuitive design.
          </p>
          <p>
            My journey began with a curiosity for how the web works, which quickly evolved into a rigorous academic and professional pursuit. From building AI-powered tourism platforms like 
            <span className="text-white"> VisitCeylonX</span> to architecting robust enterprise systems, I thrive on solving complex problems with elegant solutions.
          </p>
          <p>
            I specialize in the <span className="text-white">MERN stack</span> for dynamic interfaces and <span className="text-white">Spring Boot</span> for scalable backends, always pushing the boundaries of what's possible in modern software engineering.
          </p>
        </div>

        {/* Labeled Tech Rows */}
        <div className="space-y-16">
          {/* Frontend Row */}
          <div className="space-y-4">
            <h3 className="text-xs md:text-sm text-cyan-400 tracking-[0.4em] font-bold uppercase">Frontend</h3>
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
            <h3 className="text-xs md:text-sm text-cyan-400 tracking-[0.4em] font-bold uppercase">Backend</h3>
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
            <h3 className="text-xs md:text-sm text-cyan-400 tracking-[0.4em] font-bold uppercase">Database & Tools</h3>
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