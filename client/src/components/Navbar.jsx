import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = ()=>{
    const navigate = useNavigate();
    const location = useLocation();

    const handleScroll = (id) => (e) => {
      e.preventDefault();

      const doScroll = () => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      };

      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(doScroll, 0);
        return;
      }

      doScroll();
    };

    return (
    <nav className="fixed w-full z-50 top-0 px-6 py-4 bg-[#0f172a]/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
         Imesh Bandara|Portfolio.
        </Link>
        
        <div className="space-x-8 hidden md:flex text-lg">
          <a href="#home" onClick={handleScroll('home')} className="text-slate-300 hover:text-cyan-400 transition">Home</a>
          <a href="#about" onClick={handleScroll('about')} className="text-slate-300 hover:text-cyan-400 transition">About</a>
          <a href="#experience" onClick={handleScroll('experience')} className="text-slate-300 hover:text-cyan-400 transition">Experience</a>
          <a href="#projects" onClick={handleScroll('projects')} className="text-slate-300 hover:text-cyan-400 transition">Projects</a>
          <a href="#blog" onClick={handleScroll('blog')} className="text-slate-300 hover:text-cyan-400 transition">Blog</a>
          <a href="#contact" onClick={handleScroll('contact')} className="text-slate-300 hover:text-cyan-400 transition">Contact</a>
        </div>
        
       <a 
         href="/Imesh_Bandara_CV.pdf" 
         target="_blank" 
         rel="noopener noreferrer"
         download="Imesh_Bandara_CV.pdf"
         className="bg-cyan-600 hover:bg-cyan-500 text-white px-6 py-3 rounded-full font-medium text-lg transition inline-block text-center"
>
  Resume
</a>
      </div>
    </nav>
  );
};

export default Navbar;