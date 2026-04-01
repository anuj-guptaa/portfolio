import { ExternalLink, Github } from 'lucide-react'

export default function ProjectCard({ project }) {
  return (
    <div className="group border border-slate-800 rounded-lg overflow-hidden hover:border-blue-500/50 transition bg-slate-900/50 hover:bg-slate-900 duration-300 flex flex-col h-full">
      {/* Category Badge */}
      <div className="px-4 pt-4">
        <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30">
          {project.category}
        </span>
      </div>

      {/* Project Image */}
      <div className="relative h-48 bg-gradient-to-br from-slate-800 to-slate-900 overflow-hidden mx-4 mt-2 rounded-lg">
        <div className="absolute inset-0 bg-blue-500/10 group-hover:bg-blue-500/20 transition" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-5xl group-hover:scale-110 transition-transform">{project.emoji}</span>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-bold mb-2 group-hover:text-blue-400 transition">
          {project.title}
        </h3>
        <p className="text-slate-400 text-sm mb-4">{project.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-2 py-1 text-xs rounded bg-slate-700/50 text-slate-300 border border-slate-600"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3 mt-auto">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-slate-400 hover:text-blue-400 transition text-sm font-medium"
            >
              <Github size={16} />
              Code
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-slate-400 hover:text-blue-400 transition text-sm font-medium"
            >
              <ExternalLink size={16} />
              Live
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
