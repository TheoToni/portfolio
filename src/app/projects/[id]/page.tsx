import { notFound } from "next/navigation";
import { projects } from "../projectsData";

export default function ProjectDetailPage({
  params,
}: {
  params: { id: string };
}) {
  // Find the project from the imported array using the id from params
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    notFound(); // Show 404 if project not found
  }

  return (
    <div className="container mx-auto p-4 min-h-[calc(100vh-13rem)]">
      <h1 className="text-3xl font-bold text-white mb-4">{project.title}</h1>
      <p className="text-white/80 mb-6">{project.description}</p>
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-white mb-2">
          Technologies Used:
        </h2>
        <ul className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <li
              key={tech}
              className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
