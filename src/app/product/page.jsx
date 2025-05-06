"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
  const [product, setProduct] = useState([]);
  const router = useRouter();
  useEffect(() => {
    async function product() {
      let data = await fetch("https://fakestoreapi.com/products");
      data = await data.json();
      // console.log("data", data);
      setProduct(data);
    }

    product();
  }, []);

  return (
    <ul className="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {product.map((post) => (
        <li
          key={post.id}
          onClick={() => router.push(`/product/${post.id}`)}
          className="cursor-pointer"
        >
          <div className="h-full border rounded-xl hover:shadow-lg transition duration-200 flex flex-col">
            <div className="p-4 flex justify-center items-center h-48">
              <img
                src={post.image}
                alt={post.title}
                className="h-full max-h-40 object-contain"
              />
            </div>
            <div className="px-4 pb-4 flex flex-col flex-grow">
              <span className="text-sm text-gray-500 mb-1">
                {post.category}
              </span>
              <strong className="text-base font-medium mb-2">
                {post.title}
              </strong>
              <span className="text-green-700 font-semibold">
                ₹{post.price}
              </span>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
