"use client";

import {Menu} from "lucide-react";
import Link from "next/link"
import React from 'react'

const Navbar = () => {
    return (
        <div className='flex justify-between items-center w-full top-0 mb-1 bg-black text-white'>

            <button className="px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100"
                onClick={() => {}}>
                <Menu className="w-4 h-4 text-black"/>
            </button>
            {/*LEFT SIDE*/}
            <div className='flex items-center gap-5'>
                <div className = "flex">
                    <div>
                        image placeholder
                    </div>
                </div>
                <div>
                    <span className="font-semibold">
                        Profile
                    </span>
                </div>
            </div>

            {/*MIDDLE}*/}
            <div className="justify-between items-center gap-5">
                LOGO
            </div>

            {/*RIGHT SIDE*/}
            <div className="flex justify-between items-center gap-5">
                <div className="relative">
                        <button className="text-black px-3 py-3 gap-3 bg-gray-100 rounded-full hover:bg-blue-100"
                        onClick={() => {}}>
                        DROPDOWN
                        </button>
                    <input 
                        type="search" placeholder="Start type to search" 
                        className="text-black pl-10 pr-4 px-2 py-2 w-50 md:w-80 border-gray-300 bg-white rounded-lg focus:outline-none focus:border-blue-500" 
                    />
                    <button className="text-black bg-white outline-1 rounded font-semibold px-6 py-2" 
                        onClick={() => {}}>
                              Search
                    </button>
                </div>
           </div>
        </div>
    )
}

export default Navbar