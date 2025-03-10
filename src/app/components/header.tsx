import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-[#011627] p-5 text-white/70 border-l border-t border-r  border-[#1e2d3d] rounded-t-lg ">
      <nav>
        <ul className="flex justify-between items-center flex-wrap ">
          <div className="flex gap-5 flex-wrap">
            <span className="inline-block min-w-[17rem]">
              <Link href={"/"}>Antoni - Theodorou</Link>
            </span>
            <Link href={"/"}>_hello</Link>
            <Link href={"/about"}>_about</Link>
            <Link href={"/projects"}>_projects</Link>
          </div>
          <div>
            <Link href={"/"}>_contact</Link>
          </div>
        </ul>
      </nav>
    </header>
  );
}
