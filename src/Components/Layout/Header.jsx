import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Profileimage from '../../assets/ProfileImage.png';
import { RxArrowTopRight } from "react-icons/rx";
import { scrollToId } from "../UI/scrollTo";

const navLinks = [
    { label: "About", id: "#about" },
    { label: "Services", id: "#services" },
    { label: "Work", id: "#projects" },
    { label: "Testimonials", id: "#testimonials" },
    { label: "FAQ", id: "#faq" },
];

const Header = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = () => setIsDrawerOpen((v) => !v);
    const closeDrawer = () => setIsDrawerOpen(false);

    const handleNavClick = (e, id) => {
        e.preventDefault();
        closeDrawer();
        scrollToId(id);
    };

    useEffect(() => {
        document.body.classList.toggle("no-scroll", isDrawerOpen);
        return () => document.body.classList.remove("no-scroll");
    }, [isDrawerOpen]);

    return (
        <header className="h-[65px] fixed top-[20px] w-full z-50 flex justify-center px-4">

            <div className="transition-all duration-500 rounded-xl  backdrop-blur-md text-white w-full max-w-[1100px] shadow-[0_2px_20px_rgba(0,0,0,0.04)]">

                <div className="mx-auto px-4 h-[65px] flex justify-between items-center">

                    <a href="#top" onClick={(e) => handleNavClick(e, "#top")} className="flex items-center gap-2 shrink-0">
                        <img src={Profileimage} alt="Junaid Hunani" className="rounded-full w-[42px] h-[42px] object-cover border border-gray-300" />

                        <div className="hidden sm:flex flex-col text-left gap-0.5">
                            <p className="font-semibold text-[15px] leading-[16px]">Junaid Hunani</p>
                            <p className="text-xs leading-[12px] text-gray-500">AI Software Developer</p>
                        </div>
                    </a>

                    <nav className="hidden md:flex items-center gap-6 text-[14.5px] text-gray-300">
                        {navLinks.map((link) => (
                            <a
                                key={link.id}
                                href={link.id}
                                onClick={(e) => handleNavClick(e, link.id)}
                                className="hover:text-black transition-colors font-medium"
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    <div className="hidden md:block">
                        <button
                            onClick={(e) => handleNavClick(e, "#contact")}
                            className="flex items-center cursor-pointer group justify-center gap-2 bg-linear-to-b rounded-full to-accent from-accent/70 text-white font-medium pl-4 pr-1 py-1"
                        >
                            Book a call
                            <span className="relative flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-white text-black/60 text-[18px] leading-none">
                                <RxArrowTopRight className="absolute transition-all duration-300 group-hover:-top-full group-hover:-right-full top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2" strokeWidth={0.4} />
                                <RxArrowTopRight className="absolute transition-all duration-300 top-full right-full group-hover:top-1/2 group-hover:right-1/2 group-hover:translate-x-1/2 group-hover:-translate-y-1/2" strokeWidth={0.4} />
                            </span>
                        </button>
                    </div>

                    <button
                        aria-label="Toggle menu"
                        className="md:hidden text-xl cursor-pointer p-2 -mr-2"
                        onClick={toggleDrawer}
                    >
                        {isDrawerOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>

                {isDrawerOpen && (
                    <div className="md:hidden border-t border-gray-100 bg-white rounded-b-xl overflow-hidden">
                        <div className="flex flex-col p-4 gap-1">
                            {navLinks.map((link) => (
                                <a
                                    key={link.id}
                                    href={link.id}
                                    onClick={(e) => handleNavClick(e, link.id)}
                                    className="text-gray-700 font-medium py-2.5 px-2 rounded-lg hover:bg-gray-50"
                                >
                                    {link.label}
                                </a>
                            ))}
                            <button
                                onClick={(e) => handleNavClick(e, "#contact")}
                                className="mt-2 w-full flex items-center justify-center gap-2 bg-accent rounded-full text-white font-medium py-2.5"
                            >
                                Book a call
                                <RxArrowTopRight />
                            </button>
                        </div>
                    </div>
                )}
            </div>

        </header>
    );
};

export default Header;
