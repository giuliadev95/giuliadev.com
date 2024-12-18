// Import React icons
import { FaCss3Alt } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { IoLogoHtml5 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiBootstrap } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { SiSanity } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { BiLogoVisualStudio } from "react-icons/bi";
import { SiTypescript } from "react-icons/si";
import { SiNetlify } from "react-icons/si";
import { IoLogoVercel } from "react-icons/io5";
// Import components
import Link from "next/link";

export default function About() {
    return(
        <div>
            {/** About me Presentation */}
            <div className="flex flex-col gap-8 py-20 items-center justify-center mx-8">
                <h2 id="about" className="text-white text-bold text-3xl scroll-mt-24">
                    About
                </h2>

                {/** Description */}
                <p className="text-grayLight max-w-[500px]">
                    I’m a web developer passionate about design and software. 
                    I build my projects with a full-stack approach, from the mockup on Figma to 
                    the actual implementation of the code.
                    <br/><br/>
                    I work mainly with JavaScript / Typescript, 
                    using React and Next.js as frameworks.
                    <br/><br/>
                    My journey started as a self-taught person, 
                    studying really hard and attending courses, while strengthening my skills through 
                    side projects. I’m currently diving deeper into Next.js and the full-stack world.
                </p>
            </div>

            {/** My courses */}
            <div className="flex flex-col gap-8 pb-20 items-center justify-center mx-8">
                <h3 className="text-white text-bold text-3xl scroll-mt-24">
                    My courses
                </h3>

                <div className="grid grid-cols-[repeat(auto-fit,_minmax(auto,_1fr))] md:grid-cols-2 gap-8 mt-2"> 
                    {/** Single Course presentation */}
                    <div className="grid grid-rows-3 text-grayLight text-sm md:text-base w-[250px] rounded-xl px-4 py-2 border border-grayLight gap-4 h-[150px] md:h-[200px]">
                        <p className=" font-semibold">
                            October - november 2024
                        </p>
                        <p>
                            Content-driven web application foundations 
                        </p>
                            <Link 
                                href={"https://www.sanity.io/learn/course/content-driven-web-application-foundations/share/gfwE6oY85?utm_campaign=course_completed&utm_medium=social&utm_source=copy_link"}
                                rel="noopener noreferrer"
                                target="_blank"
                                aria-label="Go to Sanity Learn and check the course I completed"
                                title="Check the course I attendend on Sanity Learn"
                                >
                                <span className="text-green">
                                    Sanity Learn
                                </span>
                            </Link>
                    </div>

                    {/** Single Course presentation */}
                    <div className="grid grid-rows-3 text-grayLight text-sm md:text-base w-[250px] rounded-xl px-4 py-2 border border-grayLight gap-4 h-[150px] md:h-[200px]">
                        <p className="font-semibold">September - october 2024</p>
                        <p>
                            Complete JavaScript course
                            <br/>
                            &quot;Corso JavaScript completo&quot;
                            </p>
                        <Link 
                            href={"https://www.codegrind.it/corsi/corso-js-completo"}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Go to Codegrind and check the course I completed"
                            title="Check the course I bought on Codegrind">
                                
                            <span className="text-green"> Codegrind</span>
                            </Link>
                    </div>

                    {/** Single Course presentation */}
                    <div className="grid grid-rows-3 text-grayLight text-sm md:text-base w-[250px] rounded-xl px-4 py-2 border border-grayLight gap-4 h-[150px] md:h-[200px]">
                        <p className="font-semibold">April - september 2024</p>
                        <p>
                            Frontend Menotr challenges
                        </p>
                        <Link
                            href={"https://www.frontendmentor.io/profile/giuliadev95"}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Go to Frontend Menot and check the challenges I completed"
                            title="Check my profile and my challenges on Frontend Mentor">
                            <span className="text-green"> Frontend Mentor</span>
                        </Link>
                   
                    </div>

                    {/** Single Course presentation */}
                    <div className="grid grid-rows-3 text-grayLight text-sm md:text-base w-[250px] rounded-xl px-4 py-2 border border-grayLight gap-4 h-[150px] md:h-[200px]">
                        <p className="font-semibold">
                            May 2024
                        </p>
                        <p>
                            Introduction to Front-End development
                        </p>
                            <Link 
                                href={"https://www.coursera.org/learn/introduction-to-front-end-development"}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Check the course I completed on Coursera"
                                title="Check the course I completed on Coursera">
                                <span className="text-green"> 
                                    Coursera
                                </span>
                            </Link>
                    </div>
                </div>
            </div>

            {/** My skills */}
            <div className="flex flex-col gap-8 pb-20 justify-center items-start max-w-fit mx-auto">
                <h3 className="text-white text-bold text-3xl scroll-mt-24">
                    My skills
                </h3>

                {/** Languages 
                <div className="flex items-center justify-center gap-4"> 
                    <h3 className="text-yellow text-xl">
                        Languages
                    </h3>
                    {/* List of programming languages 
                    <div className="relative group">
                         <IoLogoJavascript className="text-grayLight text-4xl"/>
                        <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 hidden group-hover:block bg-gray-800 text-white text-sm rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            JavaScript
                        </div>
                    </div>
                    <div className="relative group">
                        <SiTypescript className="text-grayLight text-4xl"/>
                        <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 hidden group-hover:block bg-gray-800 text-white text-sm rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Typescript
                        </div>
                    </div>
                    <div className="relative group">
                        <IoLogoHtml5 className="text-grayLight text-4xl"/>
                        <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 text-center hidden group-hover:block bg-gray-800 text-white text-sm rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            HTML 5
                        </div>
                    </div>
                    <div className="relative group">
                        <FaCss3Alt className="text-grayLight text-4xl"/>
                        <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 text-center hidden group-hover:block bg-gray-800 text-white text-sm rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                           CSS 3
                        </div>
                    </div>

                </div>
              
                {/** Frameworks 
                <div className="flex items-center justify-center gap-4"> 
                    <h3 className="text-yellow text-xl">
                        Frameworks
                    </h3>
                    {/* List of frameworks 
                    <div className="relative group">
                        <FaReact className="text-grayLight text-4xl"/>
                        <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 text-center hidden group-hover:block bg-gray-800 text-white text-sm rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                           React
                        </div>
                    </div>
                    <div className="relative group">
                        <SiNextdotjs className="text-grayLight text-4xl"/>
                        <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 text-center hidden group-hover:block bg-gray-800 text-white text-sm rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Next.js
                        </div>
                    </div>
                    <div className="relative group">
                        <RiTailwindCssFill className="text-grayLight text-4xl"/>
                        <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 text-center hidden group-hover:block bg-gray-800 text-white text-sm rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                           Tailwind CSS
                        </div>
                    </div>
                    <div className="relative group">
                        <SiBootstrap className="text-grayLight text-4xl"/>
                        <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 hidden group-hover:block bg-gray-800 text-white text-sm rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Bootstrap
                        </div>
                    </div>
                </div>
                {/** CMS 
                <div className="flex items-center justify-center gap-4"> 
                    <h3 className="text-yellow text-xl">CMS</h3>
                    <div className="relative group">
                        <SiSanity className="text-grayLight text-4xl"/>      
                        <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 hidden group-hover:block bg-gray-800 text-white text-sm rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Sanity
                        </div>
                    </div>
                </div>

                {/** Development tools *
                <div className="flex items-center justify-center gap-4"> 
                    <h3 className="text-yellow text-xl">Tools</h3>

                    {/* List of development tools *
                    <div className="relative group">
                        <FaGitAlt className="text-grayLight text-4xl"/>
                        <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 hidden group-hover:block bg-gray-800 text-white text-sm rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Git
                        </div>
                    </div>
                    <div className="relative group">
                        <FaGithub className="text-grayLight text-4xl"/>
                        <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 hidden group-hover:block bg-gray-800 text-white text-sm rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            GitHub
                        </div>
                    </div>
                    <div className="relative group">
                        <BiLogoVisualStudio className="text-grayLight text-4xl"/>
                        <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 hidden group-hover:block bg-gray-800 text-white text-sm rounded px-2 py-1 w-[100px] text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Visual Studio Code
                        </div>
                    </div>
                    <div className="relative group">
                        <SiNetlify className="text-grayLight text-4xl"/>
                        <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 hidden group-hover:block bg-gray-800 text-white text-sm rounded px-2 py-1 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Netlify
                        </div>
                    </div>
                    <div className="relative group">
                        <IoLogoVercel className="text-grayLight text-4xl"/>
                        <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 hidden group-hover:block bg-gray-800 text-white text-sm rounded px-2 py-1 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Vercel
                        </div>
                    </div>
                </div>
                {/* Design tool *
                <div className="flex items-center justify-center gap-4"> 
                    <h3 className="text-yellow text-xl">Design</h3>
                    <div className="relative group">
                        <FaFigma className="text-grayLight text-4xl" tabIndex={0}/>
                        <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 hidden group-hover:block bg-gray-800 text-white text-sm rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Figma
                        </div>
                    </div>
                </div>
                */}

                <div className="flex flex-wrap items-center justify-start gap-4 text-[#97D4C7] font-semibold max-w-[300px] md:max-w-[500px]">
                    <p className="px-2 py-1 w-fit rounded-xl border border-[#97D4C7]"># JavaScript</p>
                    <p className="px-2 py-1 w-fit border border-[#97D4C7] rounded-xl"># TypeScript</p>
                    <p className="px-2 py-1 w-fit border border-[#97D4C7] rounded-xl"># React</p>
                    <p className="px-2 py-1 w-fit border border-[#97D4C7] rounded-xl"># Next.js</p>
                    <p className="px-2 py-1 w-fit border border-[#97D4C7] rounded-xl"># Tailwind CSS</p>
                    <p className="px-2 py-1 w-fit border border-[#97D4C7] rounded-xl"># HTML</p>
                    <p className="px-2 py-1 w-fit border border-[#97D4C7] rounded-xl"># CSS</p>
                    <p className="px-2 py-1 w-fit border border-[#97D4C7] rounded-xl"># Git</p>
                    <p className="px-2 py-1 w-fit border border-[#97D4C7] rounded-xl"># Sanity CMS</p>
                </div>
            </div>
        </div>

    )
}