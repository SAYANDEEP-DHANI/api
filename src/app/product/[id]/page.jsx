import React from "react";

export default async function page({ params }) {
  const { id } = await params;

  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  const data = await response.json();
  console.log("id:", data);

  return (
    <div className="flex  mt-20 w-full h-screen ">
      <div className="w-96  border-2 bg-white fixed  p-4">
        <img
          src={data.image}
          alt={data.title}
          className="h-96 object-contain"
        />
      </div>
      <div className="ml-96 flex-1 border-2 p-10 overflow-y-auto h-full">
        <div className="text-center text-sm pb-2 ">{data.title}</div>
        <div className="text-xl pb-5">{data.description}</div>
        <div className="text-green-500">Special price</div>
        <div className="text-lg">₹{data.price}</div>
        <div className="flex flex-wrap w-80 ">
          <div className="text-lg pr-40">Rating:{data.rating.rate}</div>
          <div className="text-lg ">Left:{data.rating.count}</div>
        </div>
        <div className="text-sm pt-3">
          <p className="text-gray-400 pr-2">Important Note</p>
          For multicolor products, please check the image for colour details
          before purchasing.
        </div>
        <div className="text-sm pt-3 flex">
          <div className="pr-10">seller</div>
          <div>EASTCOASTRETAIL</div>
        </div>
        <div className="pl-20 mt-2">7 Days Replacement Policy</div>
      </div>
    </div>
  );
}
