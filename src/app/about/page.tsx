import Sidebar from "../components/sidebar";
import ConsoleBox from "../components/ConsoleBox"; // Import the new component

export default function Page() {
  return (
    <div className="flex flex-col lg:flex-row min-h-[calc(100vh-13rem)]">
      <Sidebar currentPage="/about" /> {/* Ensure currentPage is correct */}
      <main className="flex-1 p-6">
        <h1 className="text-2xl font-bold text-white mb-4">Bio</h1>
        {/* Use the ConsoleBox component */}
        <ConsoleBox command="cat bio.txt" promptPath="~">
          Hello! I'm [Your Name/Nickname], a passionate web developer with a
          knack for creating dynamic and user-friendly applications.
          <br />
          My journey into code started with [mention your origin story - e.g., a
          curiosity for how websites worked, a specific project]. I thrive on
          solving problems and continuously learning new technologies.
          <br />
          Currently focusing on [mention current focus - e.g., Next.js, React,
          backend development], I enjoy building projects from the ground up and
          seeing ideas come to life.
          <br />
          When I'm not coding, you can find me [mention a hobby or two - e.g.,
          exploring the outdoors, playing video games, reading tech blogs].
        </ConsoleBox>
      </main>
    </div>
  );
}
