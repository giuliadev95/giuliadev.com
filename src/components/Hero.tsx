// Import React icons
import { IoCode } from "react-icons/io5";
import { IoDocument } from "react-icons/io5";
// Import components
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return(
        <div className="flex flex-col items-center justify-center mt-8 md:mt-12 lg:mt-16 xxl:mt-24 gap-8 mx-8">

            {/* Hi, I'm Giulia */}
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl drop-shadow-md font-medium ">Hi, I&apos;m Giulia</h1>
            <div className="flex flex-col  gap-2 md:gap-8 items-center">

                {/* Front-end developer , 👋 */}
                <span className="flex gap-4">
                    <span className="text-white text-2xl md:text-3xl lg:text-4xl xxl:text-5xl font-normal">Front-end developer</span>
                    <span className="text-4xl md:text-5xl lg:text-4xl">👋</span>
                </span>

                {/** Profile picture */}
                <span>
                    <Image
                    src={"/foto.png"}
                    alt="Giulia Moukouyou" 
                    width={150}
                    height={150}
                    />
                </span>
            </div> 

            {/** I love designing & developing amazing websites, <br/> focusing on accessibility and user experience. */}
            <p className="text-grayLight text-start text-base md:text-lg flex items-center justify-center max-w-[500px] ">
            I love designing & developing amazing
            websites, focusing on the User Experience.
            </p>   
            
            {/** Dowload CV, Go to projects */}
            <span className="flex justify-between items-center gap-24">
                <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" aria-label="Open my curriculum in a new page" title="Open my curriculum in a new page">
                    <button type="button" className="bg-green rounded-2xl px-4 py-2 flex items-center justify-center gap-1 w-[100px] transition-all duration-300 hover:scale-110">
                            <p className="text-background text-sm font-medium">
                                CV
                            </p>
                        <IoDocument className="text-xl text-greyLight"/>
                    </button>
                </a>             
                <Link href={"/#projects"}  aria-label="Go to my projects" title="Go to my projects" className="bg-green rounded-2xl px-4 py-2 flex items-center justify-center gap-1 w-[100px] transition-all duration-300 hover:scale-110">
                    <p className="text-background text-sm font-medium">
                        Projects
                    </p>
                    <IoCode className="text-xl text-greyLight"/>
                </Link>     
            </span>
        </div>
    )
}