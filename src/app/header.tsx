"use client"

import { ShoppingCart } from '@mui/icons-material'
import React from 'react'
import { useProductContext } from './context/productContext'

export default function Header() {

    const {cart} = useProductContext()!;
    const totalQuantity = cart.reduce((acc, product) => acc + product.quantity, 0)

    return (
        <div className='relative bg-[#322869] w-full px-10 flex justify-between items-center'>
            <h1 className='text-2xl text-white py-4'>Usman</h1>
            <ShoppingCart className='text-white' />
            <p className='absolute top-2 right-[35px] text-black px-[6px] font-semibold rounded-full bg-green-400'>{totalQuantity}</p>
        </div>
    )
}
