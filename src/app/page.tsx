export default function Home() {
  return (
    <main className="h-[calc(100vh-13rem)] relative flex flex-col items-center justify-center overflow-hidden w-full">
      <div
        className="absolute right-96 "
        style={{
          boxShadow:
            "60px 60px 150px 100px rgba(110, 231, 183, 0.15), 0 0 200px 120px rgba(110, 231, 183, 0.15), 0 0 250px 150px rgba(110, 231, 183, 0.15)",
        }}
      ></div>

      <div className="max-w-7xl w-full px-4">
        <div className="z-10 text-white flex flex-col gap-6">
          <p>Hi all. I am</p>
          <h1 className="text-6xl font-bold ">Antoni Theodorou</h1>
          <p className="text-3xl text-[#4d5cce]">&gt; Full-Stack Developer</p>
        </div>
      </div>
    </main>
  );
}
