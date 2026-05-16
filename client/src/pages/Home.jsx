import profileImg from '../assets/profile.jpeg'; 
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import BlogSection from '../components/BlogSection';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <main className="bg-[#0f172a]">
      {/* HERO SECTION */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20 bg-transparent">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20 relative z-10">
          
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-cyan-400 font-mono mb-4 text-xl drop-shadow-[0_0_8px_rgba(34,211,238,0.4)]">Hi, i'm </h2>
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight">
              <span className="cosmic-text">Imesh Bandara.</span>
            </h1>
            <h3 className="text-4xl md:text-6xl font-semibold text-slate-400 mb-6 leading-tight">
              I architect <span className="text-white">stellar</span> digital experiences.
            </h3>
            
            <p className="max-w-xl text-slate-400 text-xl leading-relaxed mb-10 mx-auto md:mx-0">
              I'm a Software Engineering student at the University of Kelaniya, 
              specializing in the <span className="text-cyan-400/80 font-medium">MERN stack</span> and <span className="text-indigo-400/80 font-medium">Spring Boot</span>.
            </p>

            <div className="flex justify-center md:justify-start gap-4">
              <a 
                href="#projects" 
                className="relative group px-8 py-3 rounded-md font-mono text-cyan-400 overflow-hidden border border-cyan-400/50 hover:border-purple-500 transition-all duration-300"
              >
                <span className="relative z-10">See my work</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
            </div>
          </div>

          {/* Image Content */}
          <div className="flex-shrink-0 flex justify-center">
            <div className="relative group">
              {/* Decorative border behind the image */}
              <div className="absolute -inset-5 border-2 border-cyan-400/40 rounded-xl translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500 group-hover:border-purple-500/60 group-hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]"></div>
              
              <img 
                src={profileImg} 
                alt="Imesh Bandara" 
                className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[450px] lg:h-[550px] object-cover rounded-xl grayscale hover:grayscale-0 transition-all duration-500 border-2 border-white/10 bg-slate-950/40 backdrop-blur-sm"
              />
            </div>
          </div>

        </div>
      </section>

      <About />
      <Experience />
      <Projects />
      <BlogSection />
      <Contact />
      
      <footer className="py-12 text-center text-slate-500 text-sm font-mono relative z-10 border-t border-white/5 bg-[#030712]/80 backdrop-blur-md">
        <p className="mb-2">Designed & Built by <span className="cosmic-text font-bold">Imesh Bandara</span></p>
        <p>© 2026 All Rights Reserved</p>
      </footer>
    </main>
  );
};

export default Home;