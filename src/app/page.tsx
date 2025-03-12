export default function Home() {
  return (
    <main className="h-[calc(100vh-13rem)] relative flex flex-col items-center justify-center overflow-hidden w-full">
      {/* Glowing ball */}
      <div
        className="absolute w-64 h-64 right-[-10rem] rounded-full bg-emerald-300 animate-pulse"
        style={{
          boxShadow:
            "0 0 60px 30px rgba(110, 231, 183, 0.3), 0 0 100px 60px rgba(110, 231, 183, 0.3), 0 0 140px 90px rgba(110, 231, 183, 0.3)",
        }}
      ></div>
      <div className="absolute right-48 w-3 h-3  rounded-full bg-emerald-300 animate-pulse"></div>
      <div className="absolute right-95 top-80 w-2 h-2  rounded-full bg-emerald-300 animate-pulse"></div>
      <div className="absolute right-60 top-48 w-2 h-2  rounded-full bg-emerald-300 animate-pulse"></div>

      {/* Content can go here */}
      <div className="max-w-4xl w-full px-4">
        <div className="z-10 text-white">test</div>
      </div>
    </main>
  );
}
