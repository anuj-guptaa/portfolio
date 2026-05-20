import { ExternalLink, Github, Youtube } from 'lucide-react'

export default function ProjectCard({ project }) {
  return (
    <div className="group border border-gray-200 rounded-lg overflow-hidden hover:border-black transition bg-white hover:shadow-lg duration-300 flex flex-col h-full">
      {/* Category Badge */}
      <div className="px-4 pt-4">
        <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-black text-white">
          {project.category}
        </span>
      </div>

      {/* Project Image */}
      <div className="relative h-48 bg-gray-100 overflow-hidden mx-4 mt-2 rounded-lg">
        <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition" />
        <div className="absolute inset-0 flex items-center justify-center">
          {project.media ? (
            project.media.type === 'video' ? (
              <video
                src={project.media.src}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                muted
                loop
                playsInline
                onMouseEnter={(e) => e.target.play()}
                onMouseLeave={(e) => e.target.pause()}
              />
            ) : (
              <img
                src={project.media.src}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            )
          ) : (
            <span className="text-5xl group-hover:scale-110 transition-transform">{project.emoji}</span>
          )}
        </div>
      </div>

      {/* Project Content */}
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-bold mb-2 group-hover:text-gray-700 transition text-black\">
          {project.title}
        </h3>
        <p className="text-gray-600 text-sm mb-4\">{project.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-2 py-1 text-xs rounded bg-gray-100 text-gray-700 border border-gray-200\"
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
              className="inline-flex items-center gap-2 text-gray-700 hover:text-black transition text-sm font-medium\"
            >
              <Github size={16} />
              {/* Code */}
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-700 hover:text-black transition text-sm font-medium"
            >
              <ExternalLink size={16} />
              {/* Live */}
            </a>
          )}
          {project.video && (
            <a
              href={project.video}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-700 hover:text-black transition text-sm font-medium\"
            >
              <Youtube size={16} />
              
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
