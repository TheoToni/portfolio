import Sidebar from "../../components/sidebar";
import ConsoleBox from "../../components/ConsoleBox";

export default function Page() {
  return (
    <div className="flex flex-col lg:flex-row min-h-[calc(100vh-13rem)]">
      <Sidebar currentPage="/about/indiegame" />

      <main className="flex-1 p-6">
        <h1 className="text-2xl font-bold text-white mb-4">Indie Game Dev</h1>

        <ConsoleBox command="cat gamedev_log.txt" promptPath="~/indiegame">
          Venturing into the world of indie game development! Currently
          experimenting with [mention game engine, e.g., Godot, Unity] and
          exploring pixel art.
          <br />
          My first project is a [mention genre, e.g., simple platformer, puzzle
          game] focusing on [mention core mechanic or theme].
          <br />
          Learning curve is steep, but the process of bringing ideas to life
          interactively is incredibly rewarding. Follow my progress (or lack
          thereof!) here.
        </ConsoleBox>
      </main>
    </div>
  );
}
