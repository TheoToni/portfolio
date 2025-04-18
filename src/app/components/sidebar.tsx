import Link from "next/link";
import { FaFolder, FaFolderOpen } from "react-icons/fa";
import { cn } from "@/lib/utils";

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
              className={cn(
                "hover:text-white",
                currentPage === "/about" && "text-white"
              )}
            >
              <div
                className={cn(
                  "flex items-center p-2 rounded transition-all duration-300",
                  "hover:bg-[#1e2d3d]",
                  currentPage === "/about" && "bg-[#1e2d3d]"
                )}
              >
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
              className={cn(
                "hover:text-white",
                currentPage === "/about/indiegame" && "text-white"
              )}
            >
              <div
                className={cn(
                  "flex items-center p-2 rounded transition-all duration-300",
                  "hover:bg-[#1e2d3d]",
                  currentPage === "/about/indiegame" && "bg-[#1e2d3d]"
                )}
              >
                {currentPage === "/about/indiegame" ? (
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
              className={cn(
                "hover:text-white",
                currentPage === "/about/education" && "text-white"
              )}
            >
              <div
                className={cn(
                  "flex items-center p-2 rounded transition-all duration-300",
                  "hover:bg-[#1e2d3d]",
                  currentPage === "/about/education" && "bg-[#1e2d3d]"
                )}
              >
                {currentPage === "/about/education" ? (
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
