import Image from "next/image";

type ProjectCardProps = {
  title: string;
  description: string;
  technologies: string[];
  image: string;
};

export default function ProjectCard({
  title,
  description,
  technologies,
  image,
}: ProjectCardProps) {
  return (
    // Set a fixed height instead of max-height
    <div className="bg-[#011627] border border-[#1e2d3d] rounded-lg overflow-hidden hover:border-[#4d5cce] transition-colors duration-300 h-[450px] flex flex-col">
      <div className="h-48 bg-[#1e2d3d] relative">
        <Image src={image} alt={title} fill className="object-cover" /> //
        Changed imageUrl to image
      </div>
      <div className="p-4 overflow-y-auto flex-1">
        {/* Add truncate class to the title */}
        <h2 className="text-xl font-semibold text-white mb-2 truncate">
          {title}
        </h2>
        {/* Add line-clamp class to the description */}
        <p className="text-white/70 mb-4 line-clamp-3">{description}</p>
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
