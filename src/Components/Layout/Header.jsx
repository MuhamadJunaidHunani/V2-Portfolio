import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Button from "../UI/Button";
import Profileimage from '../../assets/ProfileImage.png';


const Header = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);
    const closeDrawer = () => setIsDrawerOpen(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY >= 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`h-[65px] fixed top-[20px] w-full z-50 flex justify-center`}>

            <div className={` transition-all duration-500 rounded-xl border border-gray-200 ${isScrolled ? "bg-[#ffffffe1] backdrop-blur-sm text-black w-[90%]" : "bg-white/60 text-[--txtc] w-[90%]"}`}>

                <div className="container mx-auto px-4 h-full flex justify-between items-center">

                    <div className="flex items-center gap-2">
                        <img src={Profileimage} alt="Logo" className="rounded-full w-[45px] border border-gray-300" />

                        <div className="flex flex-col text-left gap-1">
                            <p className="font-semibold text-lg leading-[18px]">Junaid Hunani</p>
                            <p className="text-sm leading-[14px]">AI Software Developer</p>
                        </div>
                    </div>

                    <nav className="hidden md:flex space-x-6 text-gray-700">
                        <a href="#link2" className="hover:text-gray-500 font-medium text-black">About</a>
                        <a href="#link2" className="hover:text-gray-500">Projects</a>
                        <a href="#link3" className="hover:text-gray-500">Services</a>
                        <a href="#link4" className="hover:text-gray-500">Testimonials</a>
                        <a href="#link4" className="hover:text-gray-500">Contact</a>
                    </nav>

                    <div>
                        <Button size="medium" label="Book 30-min Call" className={''} corner="medium" />
                    </div>
                    {/* Hamburger Icon */}
                    <div className="md:hidden text-2xl cursor-pointer" onClick={toggleDrawer}>
                        {isDrawerOpen ? <FaTimes /> : <FaBars />}
                    </div>
                </div>

                {/* Drawer */}
                {isDrawerOpen && (
                    <div className="md:hidden bg-gray-800 text-white fixed top-0 left-0 w-3/4 h-full shadow-lg z-40">
                        <div className="flex flex-col p-4 space-y-4">
                            <a href="#link1" className="hover:text-gray-400" onClick={closeDrawer}>Link 1</a>
                            <a href="#link2" className="hover:text-gray-400" onClick={closeDrawer}>Link 2</a>
                            <a href="#link3" className="hover:text-gray-400" onClick={closeDrawer}>Link 3</a>
                            <a href="#link4" className="hover:text-gray-400" onClick={closeDrawer}>Link 4</a>
                        </div>
                    </div>
                )}
            </div>

        </header>
    );
};

export default Header;