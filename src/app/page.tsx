import Glow from "./components/glow";

export default function Home() {
  return (
    <main className="h-[calc(100vh-13rem)] relative flex flex-col items-center justify-center overflow-hidden w-full">
      <Glow color="#6ee7b7" position="right-96 top-0" />
      <Glow color="#172D57" position="left-96 bottom-20" animate={true} />

      <div className="max-w-7xl w-full px-4 flex flex-col gap-32 overflow-y-auto py-4">
        <div className="z-10 text-white flex flex-col gap-6">
          <p>Hi all. I am</p>
          <h1 className="sm:text-6xl text-4xl font-bold ">Antoni Theodorou</h1>
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
    </main>
  );
}
