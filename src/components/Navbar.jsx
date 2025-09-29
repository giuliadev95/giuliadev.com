'use client'
import { useState } from "react";
import { useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

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
            <div className="min-w-[100%] h-12 bg-orange-300 flex md:hidden">
                {
                    !showNavbar ? (
                        <FaBars
                            onClick={()=> {
                                setShownavbar(true);
                                setCloseMenu(true);
                            }}
                        />
                    ) : (
                        <IoClose
                        onClick={()=> {
                            setShownavbar(false);
                            setCloseMenu(false)
                        }}
                        />
                    )
                }
            </div>
            {
                showNavbar && (
                    <>
                        <div className="flex flex-col min-h-[100vh] min-w-[100%] bg-lime-500 mt-0">
                            <p>test</p>
                            <p>test</p>
                            <p>test</p>
                            <p>test</p>
                        </div>
                    </>
                )
            }          
        </>
    )
}