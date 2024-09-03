"use client"
import { useEffect } from "react";
import { useProductContext } from "./context/productContext";
import Image from "next/image";
import Header from "./header";
import Footer from "./footer";



export default function Home() {
  const { products, fetchProducts, addToCart, removeFromCart } = useProductContext()!;
  return (
    <>
      <Header />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 px-10 py-24">
        {
          products.map((product) => (
            <div key={product?.id} className="shadow-xl rounded-lg overflow-hidden p-5 flex flex-col items-center gap-2">
              <Image className="!object-contain !w-full h-44" alt="h" width={100} height={50} src={product?.image} />
              <h1 className="text-2xl font-semibold pt-2">{product?.name}</h1>
              <h1 className="text-xl pb-2">${product?.price}</h1>
              <h1 className="text-md">Catogery: {product?.category}</h1>
              <button className="w-full border border-black rounded-full hover:bg-black hover:text-white transition-all py-2 duration-300" onClick={() => addToCart(product)}>Add to Cart</button>
              
            </div>
          ))
        }
      </div>
      <Footer />
    </>
  );
}
