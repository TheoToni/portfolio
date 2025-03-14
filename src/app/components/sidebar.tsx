import Link from "next/link";
import { FaFolder, FaFolderOpen } from "react-icons/fa";

type SidebarProps = {
  currentPage: string;
};

export default function Sidebar({ currentPage }: SidebarProps) {
  return (
    <aside className="lg:w-[273px] w-full bg-[#011627] border-r border-[#1e2d3d] text-white/70">
      <div className="p-4 border-b border-[#1e2d3d]">
        <h2 className="text-sm font-medium">EXPLORER</h2>
      </div>
      <nav className="p-2">
        <ul>
          <li className="mb-1">
            <Link
              href="/about/"
              className={
                currentPage === "/about" ? "text-white" : "hover:text-white"
              }
            >
              <div className="flex items-center p-2 hover:bg-[#1e2d3d] rounded transition-all duration-300">
                {currentPage === "/about" ? (
                  <FaFolderOpen className="mr-2 text-[#64D2FF]" />
                ) : (
                  <FaFolder className="mr-2 text-[#64D2FF]" />
                )}
                <span>bio</span>
              </div>
            </Link>
          </li>
          <li className="mb-1">
            <Link
              href="/about/indiegame"
              className={
                currentPage === "indiegame" ? "text-white" : "hover:text-white"
              }
            >
              <div className="flex items-center p-2 hover:bg-[#1e2d3d] rounded transition-all duration-300">
                {currentPage === "indiegamedev" ? (
                  <FaFolderOpen className="mr-2 text-[#E99287]" />
                ) : (
                  <FaFolder className="mr-2 text-[#E99287]" />
                )}
                <span>indiegamedev</span>
              </div>
            </Link>
          </li>
          <li className="mb-1">
            <Link
              href="/about/education"
              className={
                currentPage === "education" ? "text-white" : "hover:text-white"
              }
            >
              <div className="flex items-center p-2 hover:bg-[#1e2d3d] rounded transition-all duration-300">
                {currentPage === "education" ? (
                  <FaFolderOpen className="mr-2 text-[#43D9AD]" />
                ) : (
                  <FaFolder className="mr-2 text-[#43D9AD]" />
                )}
                <span>education</span>
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
