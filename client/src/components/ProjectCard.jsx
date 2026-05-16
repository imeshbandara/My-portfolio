const ProjectCard = ({ project }) => {
  return (
    <div className="glass-card rounded-2xl overflow-hidden transition-all duration-500 group hover:-translate-y-2 hover:border-purple-500/50 hover:shadow-[0_20px_50px_rgba(168,85,247,0.15)]">
      <div className="h-56 overflow-hidden relative">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent opacity-60" />
      </div>
      <div className="p-6 relative">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">{project.title}</h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-3">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.map((tech, index) => (
            <span key={index} className="text-[10px] font-mono uppercase tracking-wider bg-white/5 border border-white/10 text-slate-300 px-2 py-1 rounded-md group-hover:border-cyan-400/30 group-hover:text-cyan-400 transition-all">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-6 items-center">
          <a href={project.githubLink} className="text-slate-400 text-sm font-medium hover:text-white transition-all flex items-center gap-1 group/link">
            <span>GitHub</span>
            <span className="block w-0 h-px bg-cyan-400 group-hover/link:w-full transition-all duration-300"></span>
          </a>
          <a href={project.liveLink} className="text-slate-400 text-sm font-medium hover:text-white transition-all flex items-center gap-1 group/link">
            <span>Live Demo</span>
            <span className="block w-0 h-px bg-purple-500 group-hover/link:w-full transition-all duration-300"></span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;