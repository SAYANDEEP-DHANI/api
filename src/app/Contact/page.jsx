import React from "react";

export default function page() {
  return (
    <div className="w-full h-screen">
      <section className="px-6 py-28 ">
        <div className="max-w-md mx-auto p-8 rounded-lg shadow-md border-2">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Contact Us
            <br />
            <p className="text-gray-500 text-sm">get a call from us</p>
          </h2>
          <form className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-left mb-1 font-medium"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-left mb-1 font-medium"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your phone number"
              />
            </div>
            {/* <div>
              <label
                htmlFor="Qurey"
                className="block text-left mb-1 font-medium"
              >
                Write your Qurey
              </label>
              <input
                type="text"
                id="Qurey"
                name="doubd"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Write your Query"
              ></input>
            </div> */}
            <div>
              <label className="peer">
                <input type="checkbox" name="todo" className="cursor-pointer" />
                Damage/Wrong product recived
              </label>
              <br />
              <label className="peer">
                <input type="checkbox" name="todo" className="cursor-pointer" />
                Qulity is not satisfying
              </label>
              <br />
              <label className="peer">
                <input type="checkbox" name="todo" className="cursor-pointer" />
                Other
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
