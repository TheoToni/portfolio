import Sidebar from "../components/sidebar";

export default function Page() {
  return (
    <div className="flex flex-col lg:flex-row min-h-[calc(100vh-13rem)]">
      <Sidebar currentPage="bio" />

      <main className="flex-1 p-6">
        <h1 className="text-2xl font-bold text-white mb-4">Bio</h1>
        <div className="text-white/70">
          <p>Your bio content goes here...</p>
        </div>
      </main>
    </div>
  );
}
