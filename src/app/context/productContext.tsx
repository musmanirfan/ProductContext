"use client"


import React, { Children, createContext, useContext, useState } from 'react'


type productType = {
    id: string,
    image: string,
    name: string,
    category: string,
    price: number
}

type productContextType = {
    products: productType[];
    fetchProducts : (products: productType[]) => void;
}


let productsData = [
    {
        id: '1',
        image: "https://media.wired.com/photos/593275642a990b06268aac7a/master/pass/04_apple.jpg",
        name: 'Macbook',
        category: 'Laptop',
        price: 3000
    },
    {
        id: '2',
        image: "https://www.talkandroid.com/wp-content/uploads/2024/01/Samsung_Galaxy-S24-Ultra-PH-TA-7-847x520.jpg",
        name: 'Samsung',
        category: 'Mobile',
        price: 2000
    },
    {
        id: '3',
        image:"https://www.ubuy.com.tr/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNzF6N3p0eUgxTEwuX0FDX1NMMTUwMF8uanBn.jpg",
        name: 'Core I3',
        category: 'Computer',
        price: 5000
    }
]

const ProductContext = createContext<null | productContextType>(null)

export default function ProductContextProvider({ children }: { children: React.ReactNode }) {
    const [products, setProducts] = useState<productType[]>(productsData)

    const fetchProducts = (newProduct: productType[]) => {
        setProducts([...products, ...newProduct])
    }

    return (
        <ProductContext.Provider value={{ products, fetchProducts }}>
            {children}
        </ProductContext.Provider>
    )
}

export const useProductContext = () => useContext(ProductContext);
