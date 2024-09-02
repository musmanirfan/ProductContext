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
      <div>
        {
          products.map((product)=>(
            <div key={product?.id}>
              <Image alt="h" width={100} height={50} src={product?.image} />
              <h1>{product?.name}</h1>
              <h1>{product?.category}</h1>
              <h1>{product?.price}</h1>
            </div>
          ))
        }
      </div>
    </>
  );
}
