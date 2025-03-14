import Link from "next/link";
import BurgerNav from "./burgerNav";

export default function Header() {
  return (
    <header className="bg-[#011627] text-white/70 border border-[#1e2d3d] rounded-t-lg">
      <nav>
        <ul className="flex justify-between items-center flex-wrap pr-5 lg:pr-0">
          <div className="flex flex-wrap">
            <span className="w-[17rem] p-5">
              <Link
                className="hover:text-white transition-all duration-300"
                href={"/"}
              >
                Antoni - Theodorou
              </Link>
            </span>
            <div className="hidden lg:flex">
              <Link
                className="lg:border-l border-[#1e2d3d] p-5 hover:bg-[#263b50] hover:text-white transition-all duration-300"
                href={"/"}
              >
                _hello
              </Link>
              <Link
                className="lg:border-l border-[#1e2d3d] p-5 hover:bg-[#263b50] hover:text-white transition-all duration-300"
                href={"/about"}
              >
                _about-me
              </Link>
              <Link
                className="lg:border-l lg:border-r border-[#1e2d3d] p-5 hover:bg-[#263b50] hover:text-white transition-all duration-300"
                href={"/projects"}
              >
                _projects
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <div className="hidden lg:block">
              <Link
                className="lg:border-l border-[#1e2d3d] p-5 hover:bg-[#263b50] hover:text-white rounded-tr-lg transition-all duration-300"
                href={"/contact"}
              >
                _contact-me
              </Link>
            </div>
            <BurgerNav />
          </div>
        </ul>
      </nav>
    </header>
  );
}
