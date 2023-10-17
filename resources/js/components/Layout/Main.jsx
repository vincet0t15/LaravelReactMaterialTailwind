import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from './NavBar'
import { Drawer } from "@material-tailwind/react";
import SideBar from "./SideBar";

export default function Layout() {


    const [openDrawer, setOpenDrawer] = React.useState(false);

    return (
        <div>

            <NavBar isOpen={() => setOpenDrawer(true)} />
            <div className="flex min-h-screen dark:bg-gray-800">
                {/* <SideBar /> */}
                <aside className="hidden lg:block sticky top-16 h-[calc(100vh-theme(spacing.16))]  overflow-y-auto">
                    <SideBar />
                </aside>
                {/* <SideBar /> */}

                {/* MAIN CONTENT */}
                <main className="p-6 mt-6 flex-1 bg-white dark:bg-gray-900">
                    <Outlet />
                </main>
                {/* MAIN CONTENT */}
            </div>

            <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)} className="">
                <SideBar />
            </Drawer>
        </div>
    )
}
