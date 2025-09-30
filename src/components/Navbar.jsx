'use client'
import { useState } from "react";
import { useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { BiLogoLinkedin } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { IoDocumentTextSharp } from "react-icons/io5";
import { FaBriefcase } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
import { IoSchool } from "react-icons/io5";
import { RiContactsBook3Fill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";

import Link from "next/link";

export default function NavBar() {
    // Set the nav menu as invisible by default (false)
    const [showNavbar, setShownavbar] = useState(false);

    // Set the "x" icon of the navbar as invisible by default
    const [closeMenu, setCloseMenu] = useState(false);

    // Avoid the body from scrolling down when the navbar-menu is opened
    useEffect(() => {
	if (showNavbar) {
		document.body.style.overflow = 'hidden';
	} else document.body.style.overflow = 'scroll';
	return () => {};
}, [showNavbar]);

    // return the body
    return(
        <>
            <div className="lg:hidden flex justify-start items-center gap-4 min-w-[100%] h-20 p-[1rem] bg-lightGreen fixed top-0 left-0 ">
                {
                    !showNavbar ? (
                        <>
                            <FaBars
                                className="text-[24px] text-white font-thin"
                                onClick={()=> {
                                    setShownavbar(true);
                                    setCloseMenu(true);
                                }}
                            />
                        </>
                    ) : (
                        <>
                            <IoClose
                                className="text-[24px] text-white font-thin"

                                onClick={()=> {
                                    setShownavbar(false);
                                    setCloseMenu(false)
                                }}
                            />
                        </>
                    )
                }
            </div>
            <div>   
                {
                    showNavbar && (     
                        <div className="lg:hidden flex flex-col items-center gap-5 md:gap-7 px-4 py-5 min-h-[100vh] min-w-[100%] bg-lightGreen mt-0 fixed top-20 left-0">
                            <ul className="flex justify-center items-center gap-4">
                                <li>
                                    <a target="_blank" href="https://www.linkedin.com/in/giuliamoukouyou/" rel="noopener noreferrer">
                                
                                        <BiLogoLinkedin
                                            className="text-lightGreen font-semibold text-3xl md:text-4xl border border-white rounded-2xl p-1 bg-white"
                                        />
                                    </a>
                                </li>
                                <li>
                                    <a target="_blank" href="https://github.com/giuliadev95" rel="noopener noreferrer">
                                        <FaGithub
                                            className="text-lightGreen font-semibold text-3xl md:text-4xl border border-white rounded-2xl p-1 bg-white"
                                        />
                                    </a>
                                </li>
                            </ul>
                            <hr className="min-w-[10rem] text-white font-semibold"/>
                            <ul className="flex flex-col gap-4">
                                <li>
                                    <Link 
                                        href="#about" 
                                        onClick={()=> setShownavbar(false)}
                                        className="flex items-center justify-start gap-2 text-xl text-white font-semibold hover:text-[#00000080]"
                                    >
                                        <FaUser/>
                                        Chi sono
                                    </Link>
                                </li>
                                <li>
                                    <Link 
                                        href="#experience" 
                                        onClick={()=> setShownavbar(false)} 
                                        className="flex items-center justify-start gap-2 text-xl text-white font-semibold hover:text-[#00000080]"
                                        >
                                            <FaBriefcase/>
                                        Esperienza
                                    </Link>
                                </li>
                                <li>
                                    <Link 
                                        href="#projects" 
                                        onClick={()=> setShownavbar(false)}
                                        className="flex items-center justify-start gap-2 text-xl text-white font-semibold hover:text-[#00000080]"
                                    >
                                        <FaCode />
                                        Progetti
                                    </Link>
                                </li>
                                <li>
                                    <Link 
                                        href="#education" 
                                        onClick={()=> setShownavbar(false)}
                                        className="flex items-center justify-start gap-2 text-xl text-white font-semibold hover:text-[#00000080]"
                                    >
                                        <IoSchool/>
                                        Educazione
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#contacts" 
                                        onClick={()=> setShownavbar(false)}
                                        className="flex items-center justify-start gap-2 text-xl text-white font-semibold hover:text-[#00000080]"
                                    >
                                        <RiContactsBook3Fill/>
                                        Contatti
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    )
                }
            </div>
            <div className="hidden lg:px-16 xl:px-64 lg:flex justify-start items-center gap-4 min-w-[100%] h-20 p-[1rem] bg-lightGreen fixed top-0 left-0 font-poppins">
                <ul className="flex gap-10">
                    <li>
                        <Link 
                            href="#about" 
                            onClick={()=> setShownavbar(false)}
                            className="flex items-center justify-center gap-2 text-lg text-white font-thin hover:text-[#00000080] font-poppins hover:underline"
                        >
                            <FaUser/>
                            Chi sono
                        </Link>
                    </li>
                    <li>
                        <Link 
                            href="#experience" 
                            onClick={()=> setShownavbar(false)} 
                            className="flex items-center justify-start gap-2 text-lg text-white font-thin hover:text-[#00000080] font-poppins hover:underline"
                            >
                                <FaBriefcase/>
                            Esperienza
                        </Link>
                    </li>
                    <li>
                        <Link 
                            href="#projects" 
                            onClick={()=> setShownavbar(false)}
                            className="flex items-center justify-start gap-2 text-lg text-white font-thin hover:text-[#00000080] font-poppins hover:underline"
                        >
                            <FaCode />
                            Progetti
                        </Link>
                    </li>
                    <li>
                        <Link 
                            href="#education" 
                            onClick={()=> setShownavbar(false)}
                            className="flex items-center justify-start gap-2 text-lg text-white font-thin hover:text-[#00000080] font-poppins hover:underline"
                        >
                            <IoSchool/>
                            Educazione
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="#contacts" 
                            onClick={()=> setShownavbar(false)}
                            className="flex items-center justify-start gap-2 text-lg text-white font-thin hover:text-[#00000080] font-poppins hover:underline"
                        >
                            <RiContactsBook3Fill/>
                            Contatti
                        </Link>
                    </li>
                </ul>
            </div>     
        </>
    )
}