import { useEffect, useState } from 'react';
import axios from 'axios';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        // Updated to use your correct port
        const res = await axios.get('http://localhost:5001/api/projects');
        setProjects(res.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching projects:", err);
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  // Logical separation based on the category field in your Schema
  const individualProjects = projects.filter(
    (p) => (p?.category || 'Individual') === 'Individual'
  );
  const groupProjects = projects.filter((p) => p?.category === 'Group');

  if (loading) {
    return (
      <div className="py-24 text-center text-slate-400 font-mono">
        Loading projects...
      </div>
    );
  }

  return (
    <section id="projects" className="py-24 bg-[#0f172a]">
      <div className="max-w-6xl mx-auto px-4 md:px-12">
        {/* Main Header */}
        <h2 className="text-4xl font-bold text-white mb-16 flex items-center">
          <span className="text-cyan-400 font-mono text-xl mr-2">03.</span> Some Things I’ve Built
        </h2>

        {/* --- INDIVIDUAL PROJECTS SECTION --- */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white">Individual Projects</h3>
            <div className="h-[1px] bg-slate-800 flex-grow max-w-xs"></div>
          </div>
          
          {individualProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {individualProjects.map((project) => (
                <ProjectCard key={project._id} project={project} />
              ))}
            </div>
          ) : (
            <p className="text-slate-500 italic">No individual projects uploaded yet.</p>
          )}
        </div>

        {/* --- GROUP PROJECTS SECTION --- */}
        <div className="mb-10">
          <div className="flex items-center gap-4 mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white">Group Collaborations</h3>
            <div className="h-[1px] bg-slate-800 flex-grow max-w-xs"></div>
          </div>

          {groupProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {groupProjects.map((project) => (
                <ProjectCard key={project._id} project={project} />
              ))}
            </div>
          ) : (
            <div className="bg-[#1e293b]/30 border border-slate-800 p-8 rounded-xl text-center">
              <p className="text-slate-400">
                Team projects from University of Kelaniya modules will appear here.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;