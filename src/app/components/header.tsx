import Link from "next/link";
import BurgerNav from "./burgerNav";

export default function Header() {
  return (
    <header className="bg-[#011627] text-white/70 border-l border-t border-r border-[#1e2d3d] rounded-t-lg">
      <nav>
        <ul className="flex justify-between items-center flex-wrap">
          <div className="flex flex-wrap">
            <span className="inline-block min-w-[17rem] p-5">
              <Link href={"/"}>Antoni - Theodorou</Link>
            </span>
            <div className="hidden lg:flex">
              <Link
                className="lg:border-l border-[#1e2d3d] p-5 hover:bg-[#263b50]"
                href={"/"}
              >
                _hello
              </Link>
              <Link
                className="lg:border-l border-[#1e2d3d] p-5 hover:bg-[#263b50]"
                href={"/about"}
              >
                _about-me
              </Link>
              <Link
                className="lg:border-l lg:border-r border-[#1e2d3d] p-5 hover:bg-[#263b50]"
                href={"/projects"}
              >
                _projects
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <div className="hidden lg:block">
              <Link
                className="lg:border-l border-[#1e2d3d] p-5 hover:bg-[#263b50] rounded-tr-lg"
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
