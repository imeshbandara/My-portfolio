import Projects from '../components/Projects';

const Home = () => {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="h-[90vh] flex flex-col justify-center items-center text-center px-4">
        <h2 className="text-cyan-400 font-mono mb-4 text-lg">Hi, my name is</h2>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Imesh Bandara.
        </h1>
        <h3 className="text-3xl md:text-5xl font-semibold text-slate-400 mb-8">
          I build full-stack web applications.
        </h3>
        <p className="max-w-xl text-slate-400 text-lg mb-10">
          I'm a Software Engineering student at the University of Kelaniya, 
          specializing in the MERN stack and Spring Boot.
        </p>
        <div className="flex gap-4">
          <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-md hover:bg-cyan-400/10 transition">
            Check out my work!
          </button>
        </div>
      </section>

      <Projects />

    </main>
  );
};

export default Home;