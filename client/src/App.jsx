import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar"; 
import Home from "./pages/Home";

function App(){
  return(
    <Router>
      <div className="bg-[#0f172a] min-h-screen text-slate-200">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}
export  default App;