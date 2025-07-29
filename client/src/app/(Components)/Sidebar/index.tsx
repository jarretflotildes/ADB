"use client"

import { useAppDispatch, useAppSelector } from '@/app/redux';
import { setIsSidebarCollapsed } from '@/state';
import { usePathname } from 'next/navigation';
import {Clapperboard, LucideBook, Clipboard, Layout, LucideIcon, Menu, SlidersHorizontal, User, Gamepad2, Settings, House } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

interface SidebarLinkProps {
    href: string,
    icon: LucideIcon;
    label: string;
    isCollapsed: boolean;
}

const SidebarLink = ({
    href,
    icon: Icon,
    label,
    isCollapsed
}: SidebarLinkProps) => {
    const pathname = usePathname();
    const isActive = pathname === href || (pathname === "/" && href === "/dashboard");
    return (
        <Link href={href}>
            <div className={`cursor-pointer flex items-center ${
                isCollapsed ? "justify-center py-4" : "justify-start px-8 py-4"
            }
            hover:text-blue-500 hover:bg-blue-100 gap-3 transition-colors ${
                isActive ? "bg-blue-200 text-white" : ""
                }`
            }
            >
                <Icon className="w-6 h-5 " />
                <span className={`${ isCollapsed ? "hidden" : "block"
                      } font-medium text-white 
                }`}>
                   {label}
                </span>

            </div>
        
        </Link>
         
    )
}

const Sidebar = () => {

    const dispatch = useAppDispatch();
    const isSidebarCollapsed = useAppSelector(
        (state) => state.global.isSidebarCollapsed
    );

    const toggleSidebar = () => {
        dispatch(setIsSidebarCollapsed(!isSidebarCollapsed));
    };

    const sidebarClassNames = `fixed flex flex-col ${
      isSidebarCollapsed ? "w-0 md:w-16" : "w-72 md:w-64"  
    } bg-black text-white transition-all duration-50 overflow-hidden h-full shadow-md z-20`;
    
    return (

        <div className={sidebarClassNames}>
            {/* TOP */}
            <div className="flex gap-3 justify-between md:justify-normal items-center pt-8">
                    <div>LOGO</div>
                <button className="md:hidden px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100"
                onClick={toggleSidebar}>
                    <Menu className="w-4 h-4"/>
                </button>
            </div>
            {/* LINKS */}
            <div className="flex-grow mt-8">
                {/*LINKS HERE */}
                <SidebarLink href="/" icon={House} label="Home" isCollapsed={isSidebarCollapsed} />
                <SidebarLink href="/books" icon={LucideBook} label="Books" isCollapsed={isSidebarCollapsed} />
                <SidebarLink href="/movies" icon={Clapperboard} label="Movies" isCollapsed={isSidebarCollapsed} />
                <SidebarLink href="/video_games" icon={Gamepad2} label="Video Games" isCollapsed={isSidebarCollapsed} />
                <SidebarLink href="/settings" icon={Settings} label="Settings" isCollapsed={isSidebarCollapsed} />
            </div>

            {/* FOOTER*/}
            <div className={`$isSidebarCollapsed ? "hidden" : "block"} mb-10`}>
                <p className="text-center text-xs text-gray-500">&copy; 2025 </p>
            </div>

        </div>
    )
}

export default Sidebar;
