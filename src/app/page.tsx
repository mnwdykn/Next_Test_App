export default function Page() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 text-white">
      <div className="text-center px-6">
        <h1 className="text-5xl font-extrabold tracking-tight">
          Welcome to My Stylish Page
        </h1>
        <p className="mt-4 text-lg text-white/90">
          This is a beautifully designed page using Tailwind CSS.
        </p>
        <button className="mt-6 px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-gray-200 transition">
          Get Started
        </button>
      </div>
    </main>
  );
}
