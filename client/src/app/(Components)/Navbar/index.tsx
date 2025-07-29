"use client";

import { useAppDispatch, useAppSelector } from '@/app/redux';
import {setIsSidebarCollapsed } from '@/state';
import { Bell, Menu, Settings } from "lucide-react";
import Link from "next/link"
import React from 'react'

const Navbar = () => {

    const dispatch = useAppDispatch();
    const isSidebarCollapsed = useAppSelector(
        (state) => state.global.isSidebarCollapsed
    );

    const toggleSidebar = () => {
        dispatch(setIsSidebarCollapsed(!isSidebarCollapsed));
        console.log("Sidebar " + isSidebarCollapsed);
    };

    return (
        <div className='flex justify-between items-center w-full top-0 mb-1 bg-black text-white'>

            {/*LEFT SIDE*/}
            <div className={`flex items-center gap-5
                ${isSidebarCollapsed ? "px-5" : "px-8"
            }`}>
                <button className="px-3 py-3 bg-white rounded-full hover:bg-blue-100"
                    onClick={toggleSidebar}>
                <Menu className="w-4 h-4 text-black"/>
                </button>

               <div className='flex items-center gap-5'>
                <div className = "flex">    
                    <div>
                        Image
                    </div>
                </div>
                <div>
                    <span>
                        Profile
                    </span>
                </div>
            </div>

            </div>

            {/*RIGHT SIDE*/}
            <div className="flex justify-between items-center gap-5">
                <div className="relative">
                    <button className="text-black px-3 py-3 gap-3 bg-gray-100 rounded-full hover:bg-blue-100"
                        onClick={() => {}}>
                        Filter
                    </button> 
                    <input
                        type="search" placeholder="Start type to search" 
                        className="pl-10 pr-4 py-2 w-50 md:w-80 border-gray-300 bg-white rounded-lg focus:outline-none focus:border-blue-500" 
                    />
                </div>
                <button className="text-black bg-white outline-1 rounded font-semibold px-6 py-2" 
                        onClick={() => {}}>
                        Search
                </button>
            </div>
        </div>
    )
}

export default Navbar