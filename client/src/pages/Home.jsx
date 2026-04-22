import profileImg from '../assets/profile.jpeg'; 
import About from '../components/About';
import Projects from '../components/Projects';
import BlogSection from '../components/BlogSection';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <main className="bg-[#0f172a]">
      {/* HERO SECTION */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-cyan-400 font-mono mb-4 text-xl">Hi, my name is</h2>
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6">
              Imesh Bandara.
            </h1>
            <h3 className="text-4xl md:text-6xl font-semibold text-slate-400 mb-6 leading-tight">
              I build high-performance full-stack applications.
            </h3>
            
            {/* Added your specific paragraph here */}
            <p className="max-w-xl text-slate-400 text-xl leading-relaxed mb-10 mx-auto md:mx-0">
              I'm a Software Engineering student at the University of Kelaniya, 
              specializing in the MERN stack and Spring Boot.
            </p>

            <div className="flex justify-center md:justify-start gap-4">
              <a 
                href="#projects" 
                className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-md hover:bg-cyan-400/10 transition font-mono"
              >
                See my work
              </a>
            </div>
          </div>

          {/* Image Content */}
          <div className="flex-1 flex justify-center">
            <div className="relative group">
              {/* Decorative border behind the image */}
              <div className="absolute -inset-4 border-2 border-cyan-400 rounded-xl translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300"></div>
              
              <img 
                src={profileImg} 
                alt="Imesh Bandara" 
                className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-xl grayscale hover:grayscale-0 transition-all duration-300 border-2 border-slate-800 bg-[#1e293b]"
              />
            </div>
          </div>

        </div>
      </section>

      <About />
      <Projects />
      <BlogSection />
      <Contact />
      
      <footer className="py-10 text-center text-slate-500 text-base font-mono">
        Built with MERN Stack © 2026 Imesh Bandara
      </footer>
    </main>
  );
};

export default Home;