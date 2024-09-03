"use client"
import { useEffect } from "react";
import { useProductContext } from "./context/productContext";
import Image from "next/image";
import Header from "./header";
import Footer from "./footer";



export default function Home() {
  const { products, addToCart } = useProductContext()!;
  return (
    <>
      <Header />
      <div className="text-center mb-8 pt-32 px-10">
        <h1 className="lg:text-6xl text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#4ADE80] via-[#8e8ce5] to-[#1a291f]">Our Exclusive Product Collection</h1>
        <p className="lg:text-xl text-gray-600 lg:mt-8 mt-2 mb-16 mx-auto lg:w-[80%]">
          {`Discover our wide range of high-quality products carefully curated to meet your needs. Whether you're looking for the latest technology or everyday essentials, we have something for everyone.`}
        </p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 lg:gap-6 lg:px-10 pb-16">
        {
          products.map((product) => (
            <div key={product?.id} className="shadow-xl rounded-lg overflow-hidden p-5 flex flex-col items-center gap-2">
              <Image className="!object-contain !w-full h-44" alt="h" width={100} height={50} src={product?.image} />
              <h1 className="text-2xl font-semibold lg:pt-2">{product?.name}</h1>
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
