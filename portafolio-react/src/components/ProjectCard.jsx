export default function ProjectCard({ project }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
      <h3 className="text-xl font-semibold mb-2">
        {project.title}
      </h3>

      <p className="text-gray-600 mb-4">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech, index) => (
          <span
            key={index}
            className="bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-4">
        <a
          href={project.link}
          className="text-blue-600 font-medium hover:underline"
        >
          Ver proyecto
        </a>

        <a
          href={project.github}
          className="text-gray-600 font-medium hover:underline"
        >
          GitHub
        </a>
      </div>
    </div>
  );
}
