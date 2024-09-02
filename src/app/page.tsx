"use client"
import { useEffect } from "react";
import { useProductContext } from "./context/productContext";
import Image from "next/image";



export default function Home() {
  const { products, fetchProducts } = useProductContext()!;
  // useEffect(() => console.log(products),
  //   [])
  return (
    <>
      <div className="grid grid-cols-3 gap-6 px-10 pt-5">
        {
          products.map((product) => (
            <div key={product?.id} className=" border border-black rounded-lg">
              <Image className="!object-contain !w-full h-44 border-b-[1px] border-black" alt="h" width={100} height={50} src={product?.image} />
              <h1 className="text-2xl font-semibold pl-5 pt-2">{product?.name}</h1>
              <h1 className="text-xl pl-5"> {product?.category}</h1>
              <h1 className="text-xl pl-5 pb-2">{product?.price}</h1>
            </div>
          ))
        }
      </div>
    </>
  );
}
