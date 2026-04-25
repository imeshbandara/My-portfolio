import { useEffect, useState } from 'react';
import axios from 'axios';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        // This calls your Node.js API
        const res = await axios.get('http://localhost:5001/api/projects');
        setProjects(res.data);
      } catch (err) {
        console.error("Error fetching projects:", err);
      }
    };
    fetchProjects();
  }, []);

  const individualProjects = projects.filter(
    (p) => (p?.category || 'Individual') === 'Individual'
  );
  const groupProjects = projects.filter((p) => p?.category === 'Group');

  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-12">
        <h2 className="text-4xl font-bold text-white mb-12 flex items-center">
          <span className="text-cyan-400 font-mono text-xl mr-2">03.</span> Some Things I’ve Built
        </h2>

        {individualProjects.length > 0 ? (
          <div className="mb-14">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Individual Projects
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {individualProjects.map((project) => (
                <ProjectCard key={project._id} project={project} />
              ))}
            </div>
          </div>
        ) : (
          <div className="mb-14 text-slate-400 text-lg leading-relaxed">
            No individual projects to show right now.
          </div>
        )}

        {groupProjects.length > 0 ? (
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Group Projects
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {groupProjects.map((project) => (
                <ProjectCard key={project._id} project={project} />
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default Projects;