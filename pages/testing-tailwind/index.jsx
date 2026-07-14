export default function TestingTailwind() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-5xl font-bold text-blue-600 mb-6">
        Tailwind is Working! 🎉
      </h1>
      <p className="text-lg text-gray-700 mb-6 text-center max-w-md">
        This is a test page to confirm Tailwind CSS is correctly installed in
        your Next.js project.
      </p>
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300">
        Click Me
      </button>
    </div>
  );
}
