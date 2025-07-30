"use client";

import React, { useEffect } from "react";
import Navbar from "@/app/(Components)/Navbar";
import Sidebar from "@/app/(Components)/Sidebar";
import StoreProvider, { useAppSelector } from "./redux";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed
  );

  return (
    <div>
      <div className="flex flex-col px-4 py-2">
        <Navbar/>
      </div>

      <div
        className="flex bg-white text-black w-full min-h-screen"
      >
        <main
          className={`flex flex-col w-full h-full py-7 px-9 ${
            isSidebarCollapsed ? "md:pl-24" : "md:pl-72"
          }`}
          >
            {children}
        </main>
        
        <Sidebar />
      </div>
    </div>
  );
};

const DashboardWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <StoreProvider>
      <DashboardLayout>{children}</DashboardLayout>
    </StoreProvider>
  );
};

export default DashboardWrapper;