import Link from "next/link";

export default function ProjectsPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-white mb-8">My Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Project Card 1 */}
        <div className="bg-[#011627] border border-[#1e2d3d] rounded-lg overflow-hidden hover:border-[#4d5cce] transition-colors duration-300">
          <div className="h-48 bg-[#1e2d3d] relative">
            <div className="absolute inset-0 flex items-center justify-center text-xl text-white">
              Project Title
            </div>
          </div>
          <div className="p-4">
            <h2 className="text-xl font-semibold text-white mb-2">
              Project Title
            </h2>
            <p className="text-white/70 mb-4">
              Project description goes here. This is a brief overview of what
              the project does.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-2 py-1 bg-[#1e2d3d] text-[#43d9ad] text-xs rounded">
                React
              </span>
              <span className="px-2 py-1 bg-[#1e2d3d] text-[#43d9ad] text-xs rounded">
                Next.js
              </span>
              <span className="px-2 py-1 bg-[#1e2d3d] text-[#43d9ad] text-xs rounded">
                Tailwind
              </span>
            </div>
          </div>
        </div>

        {/* Project Card 2 */}
        <div className="bg-[#011627] border border-[#1e2d3d] rounded-lg overflow-hidden hover:border-[#4d5cce] transition-colors duration-300">
          <div className="h-48 bg-[#1e2d3d] relative">
            <div className="absolute inset-0 flex items-center justify-center text-xl text-white">
              Another Project
            </div>
          </div>
          <div className="p-4">
            <h2 className="text-xl font-semibold text-white mb-2">
              Another Project
            </h2>
            <p className="text-white/70 mb-4">
              This is another project with its own description and details.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-2 py-1 bg-[#1e2d3d] text-[#43d9ad] text-xs rounded">
                TypeScript
              </span>
              <span className="px-2 py-1 bg-[#1e2d3d] text-[#43d9ad] text-xs rounded">
                React
              </span>
            </div>
          </div>
        </div>

        {/* Project Card 3 */}
        <div className="bg-[#011627] border border-[#1e2d3d] rounded-lg overflow-hidden hover:border-[#4d5cce] transition-colors duration-300">
          <div className="h-48 bg-[#1e2d3d] relative">
            <div className="absolute inset-0 flex items-center justify-center text-xl text-white">
              Third Project
            </div>
          </div>
          <div className="p-4">
            <h2 className="text-xl font-semibold text-white mb-2">
              Third Project
            </h2>
            <p className="text-white/70 mb-4">
              A third example project to demonstrate the grid layout.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-2 py-1 bg-[#1e2d3d] text-[#43d9ad] text-xs rounded">
                Node.js
              </span>
              <span className="px-2 py-1 bg-[#1e2d3d] text-[#43d9ad] text-xs rounded">
                Express
              </span>
              <span className="px-2 py-1 bg-[#1e2d3d] text-[#43d9ad] text-xs rounded">
                MongoDB
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
