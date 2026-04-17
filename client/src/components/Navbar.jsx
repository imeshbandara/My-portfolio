import { Link } from 'react-router-dom';

const Navbar = ()=>{
    return (
    <nav className="fixed w-full z-50 top-0 px-6 py-4 bg-[#0f172a]/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
         Imesh Bandara|Portfolio.
        </Link>
        
        <div className="space-x-8 hidden md:flex">
          <Link to="/" className="hover:text-cyan-400 transition">Home</Link>
          <a href="#projects" className="hover:text-cyan-400 transition">Projects</a>
          <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
        </div>

        <button className="bg-cyan-600 hover:bg-cyan-500 text-white px-5 py-2 rounded-full font-medium transition">
          Resume
        </button>
      </div>
    </nav>
  );
};

export default Navbar;