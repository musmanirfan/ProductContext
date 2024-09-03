"use client";

import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Close, Delete } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useProductContext } from "./context/productContext";

type SideBarProps = {
    showSideBar: boolean;
    setShowSideBar: (value: boolean) => void;
};

export default function SideBar({ showSideBar, setShowSideBar }: SideBarProps) {
    const { cart, removeFromCart } = useProductContext()!; // Get cart items from context

    const handleClose = () => {
        setShowSideBar(false);
    };

    return (
        <Transition.Root show={showSideBar} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={handleClose}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                            <Transition.Child
                                as={Fragment}
                                enter="transform transition ease-in-out duration-500 sm:duration-700"
                                enterFrom="translate-x-full"
                                enterTo="translate-x-0"
                                leave="transform transition ease-in-out duration-500 sm:duration-700"
                                leaveFrom="translate-x-0"
                                leaveTo="translate-x-full"
                            >
                                <Dialog.Panel className="pointer-events-auto w-[100%] max-w-full">
                                    <div className="flex h-full flex-col bg-white shadow-xl">
                                        <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                                            <div className="flex items-start justify-between">
                                                <Dialog.Title className="text-lg font-medium text-gray-900">
                                                    Shopping Cart
                                                </Dialog.Title>
                                                <div className="ml-3 flex h-7 items-center">
                                                    <button
                                                        type="button"
                                                        className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                                                        onClick={handleClose}
                                                    >
                                                        <span className="sr-only">Close panel</span>
                                                        <IconButton>
                                                            <Close className="h-6 w-6" aria-hidden="true" />
                                                        </IconButton>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="mt-4">
                                                {cart.length === 0 ? (
                                                    <p>Your cart is empty</p>
                                                ) : (
                                                    cart.map((item) => (
                                                        <div key={item.id} className="mb-4">
                                                            <img
                                                                src={item.image}
                                                                alt={item.name}
                                                                className="h-24 w-24 object-cover rounded-md"
                                                            />
                                                            <div className="flex flex-col">
                                                                <h3 className="text-lg font-semibold">{item.name}</h3>
                                                                <p>Quantity: {item.quantity}</p>
                                                                <p>Total: ${item.totalPrice.toFixed(2)}</p>
                                                                <Delete onClick={() => removeFromCart(item.id)} className="cursor-pointer" />
                                                            </div>
                                                        </div>
                                                    ))
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    );
}
