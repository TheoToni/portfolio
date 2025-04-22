import Image from "next/image";

type ProjectCardProps = {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
};

export default function ProjectCard({
  title,
  description,
  technologies,
  imageUrl,
}: ProjectCardProps) {
  return (
    <div className="bg-[#011627] border border-[#1e2d3d] rounded-lg overflow-hidden hover:border-[#4d5cce] transition-colors duration-300">
      <div className="h-48 bg-[#1e2d3d] relative">
        <Image src={imageUrl} alt={title} fill className="object-cover" />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold text-white mb-2">{title}</h2>
        <p className="text-white/70 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-[#1e2d3d] text-[#43d9ad] text-xs rounded"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
