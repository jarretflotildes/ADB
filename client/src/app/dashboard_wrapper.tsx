import React from 'react';
import Navbar from "@/app/(Components)/Navbar"

const Dashboard_wrapper = ({children }: { children: React.ReactNode}) => {
    return (
        <div>
            <div className="flex flex-col px-4 py-2">
                <Navbar/>
            </div>

            <div className='light flex bg-gray-50 text-gray-900 w-full min-h-screen'>
                <main className='flex flex-col w-full h-full py-7 px-9 bg-gray-50 md:pl-24'>
                   {children}
                </main>
            </div>

        </div>
        
    )
}

export default Dashboard_wrapper
