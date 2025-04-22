import ProjectCard from "../components/ProjectCard";

export default function ProjectsPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-white mb-8">My Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProjectCard
          title="Project Title"
          description="Project description goes here. This is a brief overview of what the project does."
          technologies={["React", "Next.js", "Tailwind"]}
        />

        <ProjectCard
          title="Another Project"
          description="This is another project with its own description and details."
          technologies={["TypeScript", "React"]}
        />

        <ProjectCard
          title="Third Project"
          description="A third example project to demonstrate the grid layout."
          technologies={["Node.js", "Express", "MongoDB"]}
        />
      </div>
    </div>
  );
}
