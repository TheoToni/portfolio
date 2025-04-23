import Link from "next/link";
import ProjectCard from "../components/ProjectCard";
import { projects } from "./projectsData";

export default function ProjectsPage() {
  return (
    <div className="container mx-auto p-4 flex flex-col min-h-[calc(100vh-13rem)]">
      <h1 className="text-3xl font-bold text-white mb-8">My Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 flex-1">
        {projects.map((project) => (
          <Link key={project.id} href={`/projects/${project.id}`}>
            <ProjectCard
              imageUrl={project.image}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
