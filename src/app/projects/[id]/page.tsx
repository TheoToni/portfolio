import { notFound } from "next/navigation";
import { projects } from "../projectsData";
import Image from "next/image";

export default function ProjectDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    notFound(); // Show 404 if project not found
  }

  return (
    <div className="container flex justify-center items-center mx-auto p-4 min-h-[calc(100vh-13rem)]">
      <div className="flex flex-col md:flex-row md:gap-8">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden border-2 border-green-400 shadow-lg shadow-green-400/50">
            <Image
              src={project.imageUrl}
              alt={`${project.title} screenshot`}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold text-white mb-4">
            {project.title}
          </h1>
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
      </div>
    </div>
  );
}
