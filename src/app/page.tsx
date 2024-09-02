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
      <div className="grid grid-cols-3">
        {
          products.map((product) => (
            <div key={product?.id}>
              <Image className="!object-contain !w-full h-44" alt="h" width={100} height={50} src={product?.image} />
              <h1 className="text-2xl font-semibold">{product?.name}</h1>
              <h1> {product?.category}</h1>
              <h1>{product?.price}</h1>
            </div>
          ))
        }
      </div>
    </>
  );
}
