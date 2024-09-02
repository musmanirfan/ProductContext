"use client"


import React, { Children, createContext, useContext, useState } from 'react'
import swal from 'sweetalert'
import Swal from 'sweetalert2'


type productType = {
    id: string,
    image: string,
    name: string,
    category: string,
    price: number,
    quantity: number,
    totalPrice: number
}

type productContextType = {
    products: productType[];
    cart: productType[];
    fetchProducts: (products: productType[]) => void;
    addToCart: (product: productType) => void;
}


let productsData = [
    {
        id: '1',
        image: "https://media.wired.com/photos/593275642a990b06268aac7a/master/pass/04_apple.jpg",
        name: 'Macbook',
        category: 'Laptop',
        price: 3000,
        quantity: 1,
        totalPrice: 3000
    },
    {
        id: '2',
        image: "https://www.talkandroid.com/wp-content/uploads/2024/01/Samsung_Galaxy-S24-Ultra-PH-TA-7-847x520.jpg",
        name: 'Samsung',
        category: 'Mobile',
        price: 2000,
        quantity: 1,
        totalPrice: 2000
    },
    {
        id: '3',
        image: "https://www.ubuy.com.tr/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNzF6N3p0eUgxTEwuX0FDX1NMMTUwMF8uanBn.jpg",
        name: 'Core I3',
        category: 'Computer',
        price: 5000,
        quantity: 1,
        totalPrice: 5000
    }
]

const ProductContext = createContext<null | productContextType>(null)

export default function ProductContextProvider({ children }: { children: React.ReactNode }) {
    const [products, setProducts] = useState<productType[]>(productsData)
    const [cart, setCart] = useState<productType[]>([])

    const fetchProducts = (newProduct: productType[]) => {
        setProducts([...products, ...newProduct])
    }


    const addToCart = (product: productType) => {
        const existingProductIndex = cart.findIndex(item => item.id === product.id);


        if (existingProductIndex !== -1) {
            const updatedCart = cart.map(item => {
                if (item.id === product.id) {
                    const uodatedItem = {
                        ...item,
                        quantity: item.quantity + 1,
                        totalPrice: (item.quantity + 1) * item.price
                    }
                };
                return item;
            });
            setCart(updatedCart);
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Quantity Update Successfully",
                showConfirmButton: false,
                timer: 1500
            });
        } else {
            setCart([...cart, { ...product }])
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Product Add Successfully",
                showConfirmButton: false,
                timer: 1500
            });
        }
    }

    return (
        <ProductContext.Provider value={{ products, cart, fetchProducts, addToCart }}>
            {children}
        </ProductContext.Provider>
    )
}

export const useProductContext = () => useContext(ProductContext);
