const About = () => {
  const skills = {
    frontend: ["React", "Next.js", "Tailwind CSS", "JavaScript (ES6+)"],
    backend: ["Node.js", "Express", "Spring Boot", "Java"],
    database: ["MongoDB", "MySQL", "PostgreSQL"],
    tools: ["Git", "Docker", "Postman", "Vite"]
  };

  return (
    <section id="about" className="py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-12">
        <h2 className="text-3xl font-bold text-white mb-12 flex items-center">
          <span className="text-cyan-400 font-mono mr-2">01.</span> About Me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="text-slate-400 space-y-4 text-lg">
            <p>
              Hello! I'm <span className="text-cyan-400">Imesh Bandara</span>, a passionate Software Engineering student at the 
              <span className="text-white"> University of Kelaniya</span>. I enjoy creating things that live on the internet.
            </p>
            <p>
              My journey in web development started with simple HTML/CSS projects, and has since evolved into 
              building complex full-stack applications like <span className="text-white">VisitCeylonX</span> and 
              enterprise-level reservation systems.
            </p>
            <p>
              I specialize in the <span className="text-white">MERN stack</span> but I am also highly comfortable 
              with <span className="text-white">Spring Boot</span> for robust backend architectures.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#1e293b] p-4 rounded-lg border border-slate-800">
              <h3 className="text-cyan-400 font-bold mb-3 uppercase text-xs tracking-widest">Frontend</h3>
              <ul className="text-slate-300 text-sm space-y-1">
                {skills.frontend.map(skill => <li key={skill}>▹ {skill}</li>)}
              </ul>
            </div>
            <div className="bg-[#1e293b] p-4 rounded-lg border border-slate-800">
              <h3 className="text-cyan-400 font-bold mb-3 uppercase text-xs tracking-widest">Backend</h3>
              <ul className="text-slate-300 text-sm space-y-1">
                {skills.backend.map(skill => <li key={skill}>▹ {skill}</li>)}
              </ul>
            </div>
            <div className="bg-[#1e293b] p-4 rounded-lg border border-slate-800">
              <h3 className="text-cyan-400 font-bold mb-3 uppercase text-xs tracking-widest">Database</h3>
              <ul className="text-slate-300 text-sm space-y-1">
                {skills.database.map(skill => <li key={skill}>▹ {skill}</li>)}
              </ul>
            </div>
            <div className="bg-[#1e293b] p-4 rounded-lg border border-slate-800">
              <h3 className="text-cyan-400 font-bold mb-3 uppercase text-xs tracking-widest">Tools</h3>
              <ul className="text-slate-300 text-sm space-y-1">
                {skills.tools.map(skill => <li key={skill}>▹ {skill}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;