import Sidebar from "@/app/components/sidebar";

export default function Page() {
  return (
    <div className="flex flex-col lg:flex-row min-h-[calc(100vh-13rem)]">
      <Sidebar currentPage="education" />

      <main className="flex-1 p-6">
        <h1 className="text-2xl font-bold text-white mb-4">Education</h1>
        <div className="text-white/70">
          <p>Your education content goes here...</p>
        </div>
      </main>
    </div>
  );
}
