import Glow from "./components/glow";
import MemoryGame from "./components/MemoryGame";

export default function Home() {
  return (
    <main className="lg:flex relative justify-center items-center max-w-7xl mx-auto">
      <div className="h-[calc(100vh-13rem)] flex flex-col items-center justify-center overflow-hidden flex-1">
        <Glow color="#172D57" position="left-96 bottom-20" animate={true} />
        <Glow color="#172D57" position="right-0 top-20" animate={true} />
        <div className="max-w-7xl w-full px-4 flex flex-col gap-32 overflow-y-auto py-4">
          <div className="z-10 text-white flex flex-col gap-6">
            <p>Hi all. I am</p>
            <h1 className="sm:text-6xl text-4xl font-bold ">
              Antoni Theodorou
            </h1>
            <p className="sm:text-3xl text-2xl text-[#4d5cce]">
              &gt; Full-Stack Developer
            </p>
          </div>
          <div className="flex flex-col gap-4 text-lg text-white">
            <p>//React Dev</p>
            <p>//Indiegame Dev</p>
            <p>
              <span className="text-[#4d5cce]">const</span>{" "}
              <span className="text-[#43d9ad]">githubLink</span> ={" "}
              <a
                href="https://github.com/TheoToni"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#fea55f] "
              >
                "github.com/TheoToni"
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="text-white bg-[#011627]/50 backdrop-blur-sm p-4 overflow-y-auto flex-1">
        <MemoryGame />
      </div>
    </main>
  );
}
