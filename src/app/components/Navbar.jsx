import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <nav className="fixed top-2 w-full h-16 shadow-xl bg-amber-50">
      <div>
        <ul className=" flex justify-center gap-3 mt-4">
          <Link href="/">
            <li className="text-cyan-700 cursor-pointer">Home</li>
          </Link>
          <Link href="/product">
            <li className="text-cyan-700 cursor-pointer">Product</li>
          </Link>
          <Link href="/Contact">
            <li className="text-cyan-700 cursor-pointer">Contact-us</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
