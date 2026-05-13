import { projectData } from '@/data/portfolioData';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const individual = projectData.filter((p) => p.category === 'Individual');
  const group = projectData.filter((p) => p.category === 'Group');

  return (
    <section id="projects" className="py-24 bg-[#0f172a]">
      <div className="max-w-6xl mx-auto px-4 md:px-12">
        {/* Main Header */}
        <h2 className="text-4xl font-bold text-white mb-16 flex items-center">
          <span className="text-cyan-400 font-mono text-xl mr-2">03.</span> Some Things I've Built
        </h2>

        {/* --- INDIVIDUAL PROJECTS SECTION --- */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white">Individual Projects</h3>
            <div className="h-[1px] bg-slate-800 flex-grow max-w-xs"></div>
          </div>
          
          {individual.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {individual.map((project) => (
                <ProjectCard key={project.id} project={project} />
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

          {group.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {group.map((project) => (
                <ProjectCard key={project.id} project={project} />
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