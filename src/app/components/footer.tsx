import { SiNextdotjs, SiTailwindcss, SiPrisma } from "react-icons/si";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#011627] p-5 text-white/70 border border-[#1e2d3d] rounded-b-lg">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-4">
          <p>Built with:</p>
          <div className="flex gap-3">
            <SiNextdotjs size={20} title="Next.js" />
            <SiTailwindcss
              size={20}
              title="Tailwind CSS"
              className="text-cyan-400"
            />
            <SiPrisma size={20} title="Prisma" className="text-white" />
          </div>
        </div>
        <div className="flex gap-3">
          <p>Antoni-Theodorou</p>
          <a
            href="https://github.com/TheoToni"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-300"
          >
            <FaGithub size={24} title="GitHub" />
          </a>
        </div>
      </div>
    </footer>
  );
}
