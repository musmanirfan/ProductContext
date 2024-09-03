"use client"


import React, { Children, createContext, useContext, useState } from 'react'
import swal from 'sweetalert'
import Swal from 'sweetalert2'
import SideBar from '../sidebar'


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
    removeFromCart: (productId: string) => void;
    cartCount: number;
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
    },
    {
        id: '4',
        image: "https://i.ebayimg.com/images/g/kPAAAOSwu4ZlHba4/s-l1200.webp",
        name: 'Core I4',
        category: 'Computer',
        price: 8000,
        quantity: 1,
        totalPrice: 8000
    },
    {
        id: '5',
        image: "https://www.talkandroid.com/wp-content/uploads/2024/01/Samsung_Galaxy-S24-Ultra-PH-TA-7-847x520.jpg",
        name: 'Samsung',
        category: 'Mobile',
        price: 2000,
        quantity: 1,
        totalPrice: 2000
    },
    {
        id: '6',
        image: "https://media.wired.com/photos/593275642a990b06268aac7a/master/pass/04_apple.jpg",
        name: 'Macbook',
        category: 'Laptop',
        price: 3000,
        quantity: 1,
        totalPrice: 3000
    },
    {
        id: '7',
        image: "https://i.ebayimg.com/images/g/kPAAAOSwu4ZlHba4/s-l1200.webp",
        name: 'Core I4',
        category: 'Computer',
        price: 8000,
        quantity: 1,
        totalPrice: 8000
    },
    {
        id: '8',
        image: "https://www.ubuy.com.tr/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNzF6N3p0eUgxTEwuX0FDX1NMMTUwMF8uanBn.jpg",
        name: 'Core I3',
        category: 'Computer',
        price: 5000,
        quantity: 1,
        totalPrice: 5000
    },
    {
        id: '9',
        image: "https://i.ebayimg.com/images/g/kPAAAOSwu4ZlHba4/s-l1200.webp",
        name: 'Core I4',
        category: 'Computer',
        price: 8000,
        quantity: 1,
        totalPrice: 8000
    },
    {
        id: '10',
        image: "https://www.talkandroid.com/wp-content/uploads/2024/01/Samsung_Galaxy-S24-Ultra-PH-TA-7-847x520.jpg",
        name: 'Samsung',
        category: 'Mobile',
        price: 2000,
        quantity: 1,
        totalPrice: 2000
    },
    {
        id: '11',
        image: "https://www.ubuy.com.tr/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNzF6N3p0eUgxTEwuX0FDX1NMMTUwMF8uanBn.jpg",
        name: 'Core I3',
        category: 'Computer',
        price: 5000,
        quantity: 1,
        totalPrice: 5000
    },
    {
        id: '12',
        image: "https://media.wired.com/photos/593275642a990b06268aac7a/master/pass/04_apple.jpg",
        name: 'Macbook',
        category: 'Laptop',
        price: 3000,
        quantity: 1,
        totalPrice: 3000
    },
]

const ProductContext = createContext<null | productContextType>(null)

export default function ProductContextProvider({ children }: { children: React.ReactNode }) {
    const [products, setProducts] = useState<productType[]>(productsData)
    const [cart, setCart] = useState<productType[]>([])
    const [showSideBar, setShowSideBar] = useState(false);
    const [cartCount, setCartCount] = useState(0);

    const fetchProducts = (newProduct: productType[]) => {
        setProducts([...products, ...newProduct])
    }


    const addToCart = (product: productType) => {
        const existingProductIndex = cart.findIndex(item => item.id === product.id);

        if (existingProductIndex !== -1) {
            const updatedCart = cart.map(item => {
                if (item.id === product.id) {
                    return {
                        ...item,
                        quantity: item.quantity + 1,
                        totalPrice: (item.quantity + 1) * item.price,
                    };
                }
                return item;
            });
            setCart(updatedCart);
        } else {
            setCart([...cart, { ...product }]);
            setCartCount(cartCount + 1);
        }

        Swal.fire({
            position: "top-end",
            icon: "success",
            title: existingProductIndex !== -1 ? "Quantity Updated Successfully" : "Product Added Successfully",
            showConfirmButton: false,
            timer: 1500,
        });
    };

    const removeFromCart = (productId: string) => {
        const updatedCart = cart.filter(product => product.id !== productId);
        setCart(updatedCart);
        setCartCount(cartCount - 1)
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Product Removed Successfully",
            showConfirmButton: false,
            timer: 1500
        });
    }

    return (
        <ProductContext.Provider value={{ products, cart, fetchProducts, addToCart, removeFromCart, cartCount }}>
            {children}
            <SideBar showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
        </ProductContext.Provider>
    )
}

export const useProductContext = () => useContext(ProductContext);
