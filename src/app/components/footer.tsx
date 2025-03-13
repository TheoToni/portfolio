import { SiNextdotjs, SiTailwindcss, SiPrisma } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bg-[#011627] p-5 text-white/70 border border-[#1e2d3d] rounded-b-lg">
      <div className="flex items-center justify-center gap-4">
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
    </footer>
  );
}
