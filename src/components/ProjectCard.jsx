import { ArrowRight, Code, ExternalLink } from "lucide-react";

export default function ProjectCard({ project, index }) {
  const gradients = [
    "from-orange-400 to-pink-600",
    "from-teal-400 to-blue-600",
    "from-green-400 to-emerald-600",
    "from-purple-400 to-indigo-600",
    "from-red-500 to-blue-500",
    "from-yellow-400 to-orange-600",
    "from-emerald-400 to-cyan-600",
    "from-pink-400 to-rose-600",
    "from-lime-400 to-green-600",
    "from-violet-500 to-purple-800",
  ];

  return (
    <div className="group relative overflow-hidden rounded-2xl bg-gray-900/30 backdrop-blur-sm border border-gray-700/30 hover:border-gray-600/50 transition-all duration-500 hover:scale-[1.02]">
      <div
        className={`absolute inset-0 bg-gradient-to-br ${
          gradients[Math.floor(Math.random() * gradients.length)]
        } opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
      ></div>
      <div className="relative p-8">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            {/* <Code className="w-6 h-6 text-blue-400" /> */}
            <h4 className="text-xl font-bold text-white">{project.title}</h4>
          </div>
          <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
        </div>
        <p className="text-gray-300 mb-6 leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-gray-800/50 text-blue-300 rounded-full text-sm font-medium border border-gray-700/50"
            >
              {tech}
            </span>
          ))}
        </div>
        {project.isProjectActive && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex justify-center items-center bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold px-6 py-2 rounded-lg group-hover:shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300"
          >
            View Project
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        )}
      </div>
    </div>
  );
}
