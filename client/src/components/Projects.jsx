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

  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-12">
        <h2 className="text-4xl font-bold text-white mb-12 flex items-center">
          <span className="text-cyan-400 font-mono text-xl mr-2">02.</span> Some Things I’ve Built
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project._id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;