const ProjectCard = ({ project }) => {
  return (
    <div className="bg-[#1e293b] rounded-xl overflow-hidden border border-slate-800 hover:border-cyan-400/50 transition-all group">
      <div className="h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-slate-400 text-base leading-relaxed mb-4 line-clamp-3">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.map((tech, index) => (
            <span key={index} className="text-xs bg-cyan-400/10 text-cyan-400 px-2 py-1 rounded">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          <a href={project.githubLink} className="text-slate-400 text-base hover:text-white transition">GitHub</a>
          <a href={project.liveLink} className="text-slate-400 text-base hover:text-white transition">Live Demo</a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;