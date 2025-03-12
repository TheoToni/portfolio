export default function Home() {
  return (
    <main className="h-[calc(100vh-13rem)] relative flex flex-col items-center justify-center overflow-hidden w-full">
      <div
        className="absolute "
        style={{
          boxShadow:
            "60px 60px 150px 100px rgba(110, 231, 183, 0.15), 0 0 200px 120px rgba(110, 231, 183, 0.15), 0 0 250px 150px rgba(110, 231, 183, 0.15)",
        }}
      ></div>

      <div className="max-w-4xl w-full px-4">
        <div className="z-10 text-white">test</div>
      </div>
    </main>
  );
}
