// app/page.js
export default function Home() {
  return (
    <section className="px-6 py-12 text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to My Website</h1>
      <p className="text-lg text-gray-600 mb-6">
        This is a simple home page built with Next.js and the App Router.
      </p>
      <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
        Get Started
      </button>
    </section>
  );
}
