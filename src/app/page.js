import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <div className="w-full h-screen ">
        <section className="px-6 mt-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to Panda~Shopping</h1>
          <p className="text-lg text-gray-600 mb-6">
            This is a Website for change your style.
          </p>
        </section>

        <div className="flex justify-center h-60">
          <img
            src="https://cdn.britannica.com/80/150980-050-84B9202C/Giant-panda-cub-branch.jpg"
            className="rounded-full"
          />
        </div>
      </div>
    </>
  );
}
