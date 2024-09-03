"use client"
import { useEffect } from "react";
import { useProductContext } from "./context/productContext";
import Image from "next/image";
import Header from "./header";
import { Delete } from "@mui/icons-material";



export default function Home() {
  const { products, fetchProducts, addToCart, removeFromCart } = useProductContext()!;
  return (
    <>
      <Header />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 px-10 pt-5">
        {
          products.map((product) => (
            <div key={product?.id} className=" border border-black rounded-lg overflow-hidden">
              <Image className="!object-contain !w-full h-44 border-b-[1px] border-black" alt="h" width={100} height={50} src={product?.image} />
              <h1 className="text-2xl font-semibold pl-5 pt-2">{product?.name}</h1>
              <h1 className="text-xl pl-5"> {product?.category}</h1>
              <h1 className="text-xl pl-5 pb-2">{product?.price}</h1>
              <button className="w-full border border-t-black hover:bg-black hover:text-white transition-all py-2 duration-300" onClick={() => addToCart(product)}>Add to Cart</button>
              
            </div>
          ))
        }
      </div>
    </>
  );
}
