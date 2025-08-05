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
                        Home
                    </Link>
                    <Link href={"/#about"}>
                        Chi sono
                    </Link>
                    <Link href={"/#skills"}>
                        Skills
                    </Link>
                    <Link href={"/#projects"}>
                        Progetti
                    </Link>
                    <Link href={"/#contact"}>
                        Contatti
                    </Link>
                </nav>
            </div>           
        </div>
    )
}