// Import React icons
import { FiUser } from "react-icons/fi";
import { IoBriefcaseOutline } from "react-icons/io5";
import { RiHome4Line } from "react-icons/ri";
import { MdOutlineLocalPhone } from "react-icons/md";
// Import components
import Link from "next/link";

// Fixed navbar
export default function Header () {
    return (
        <div className="fixed min-w-[100%] max-h-30px top-0 backdrop-blur-lg z-10 mx-auto">
            <div className="relative w-full bg-background/80"> 
                <div className="absolute inset-0 -z-20 h-full w-full bg-lime-50/5">
                </div>  
                <nav className="flex items-center justify-between px-5 py-4 text-white border-b-zinc-300 font-base text-sm>
                    md:mx-[10rem] lg:mx-[20rem] xxl:mx-[30rem] z-9999 ">
                    <Link href={"/"} className="">
                        {/* <RiHome4Line className="text-white text-xl  xxl:text-3xl hover:text-green hover:cursor-pointer  hover:scale-110 transition-all duration-300"/> */}
                    Home
                    </Link>
                    <Link href={"/#about"}>
                        {/* <FiUser className="text-white text-xl xxl:text-3xl hover:text-green  hover:scale-110 transition-all duration-300"/> */}
                        About
                    </Link>
                    <Link href={"/#skills"}>
                        Skills
                    </Link>
                    <Link href={"/#projects"}>
                        {/* <IoBriefcaseOutline className="text-white text-xl xxl:text-3xl hover:text-green  hover:scale-110 transition-all duration-300"/> */}
                        Projects
                    </Link>
                    <Link href={"/#contact"}>
                        {/* <MdOutlineLocalPhone className="text-white text-xl xxl:text-3xl hover:text-green  hover:scale-110 transition-all duration-300"/>  */}
                        Contact
                    </Link>
                </nav>
            </div>           
        </div>
    )
}