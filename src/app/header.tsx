"use client"

import { ShoppingCart } from '@mui/icons-material'
import React, { useState } from 'react'
import { useProductContext } from './context/productContext'
import SideBar from './sidebar'

export default function Header() {

    const [showSideBar, setShowSideBar] = useState(false)
    const { cartCount } = useProductContext()!;


    const toggleSidebar = () => {
        setShowSideBar(true)
    }

    return (
        <div className='bg-[#322869] w-full px-10 flex justify-between items-center fixed'>
            <div>
                <h1 className='text-2xl text-white py-4'>Usman</h1>
            </div>
            <div onClick={toggleSidebar} className='cursor-pointer'>
                <ShoppingCart className='text-white' />
                <p className='absolute top-2 right-[35px] text-black px-[6px] font-semibold rounded-full bg-green-400'>{cartCount}</p>
            </div>
            <SideBar showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
        </div>
    )
}
