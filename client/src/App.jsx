import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar"; 
import Home from "./pages/Home";
import Blog from './pages/Blog';
import Starfield from './components/Starfield';

function App(){
  return(
    <Router>
      <div className="bg-[#030712] min-h-screen text-slate-200 relative overflow-x-hidden">
        <Starfield />
        <div className="relative z-10">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
export  default App;