import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    const closeDrawer = () => {
        setIsDrawerOpen(false);
    };

    return (
        <header className="h-[50px] bg-(--secc) text-(--txtc) sticky top-0  w-full z-50">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                {/* Logo */}
                <div className="text-2xl font-bold">Logo</div>

                {/* Links (Hidden on small screens) */}
                <nav className="hidden md:flex space-x-6">
                    <a href="#link1" className="hover:text-gray-400">
                        Link 1
                    </a>
                    <a href="#link2" className="hover:text-gray-400">
                        Link 2
                    </a>
                    <a href="#link3" className="hover:text-gray-400">
                        Link 3
                    </a>
                    <a href="#link4" className="hover:text-gray-400">
                        Link 4
                    </a>
                </nav>

                {/* Button */}
                <button className="hidden md:block bg-blue-600 px-4 py-2 rounded hover:bg-blue-700">
                    Button
                </button>

                {/* Hamburger Icon (Visible on small screens) */}
                <div className="md:hidden text-2xl cursor-pointer" onClick={toggleDrawer}>
                    {isDrawerOpen ? <FaTimes /> : <FaBars />}
                </div>
            </div>

            {/* Drawer (Visible on small screens) */}
            {isDrawerOpen && (
                <div className="md:hidden bg-gray-800 text-white fixed top-0 left-0 w-3/4 h-full shadow-lg z-40">
                    <div className="flex flex-col p-4 space-y-4">
                        <a href="#link1" className="hover:text-gray-400" onClick={closeDrawer}>
                            Link 1
                        </a>
                        <a href="#link2" className="hover:text-gray-400" onClick={closeDrawer}>
                            Link 2
                        </a>
                        <a href="#link3" className="hover:text-gray-400" onClick={closeDrawer}>
                            Link 3
                        </a>
                        <a href="#link4" className="hover:text-gray-400" onClick={closeDrawer}>
                            Link 4
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;