import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-center mb-4">
        Proyectos
      </h1>

      <p className="text-center text-gray-600 mb-12">
        Algunos de los proyectos que he desarrollado aplicando
        buenas prácticas y tecnologías modernas.
      </p>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
