'use client'
import { BsRocketTakeoff } from "react-icons/bs";
// Tech Stack icons
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { RiReactjsLine } from "react-icons/ri";
import { FaJs } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { FaBootstrap } from "react-icons/fa";
import { PiFigmaLogoBold } from "react-icons/pi";
import { VscVscode } from "react-icons/vsc";
import { SiNextdotjs } from "react-icons/si";

export default function About() {
    return(
        <>
            <section className="bg-white px-4 lg:px-16 xl:px-64 py-8 flex flex-col gap-4 mt-12" id="#about">
                {/** Title */}
                <h2 className="text-[32px] md:text-[36px] font-bold text-darkGrey border-l-4 pl-6 border-lightGreen">Chi sono</h2>
                {/** Description about me */}

                <p className="text-base md:text-lg font-normal text-lightGrey leading-relaxed">
                    Sono una web developer con 1 anno di esperienza, trascorso lavorando prima su progetti personali e in seguito
                    facendo uno stage aziendale di 6 mesi. 
                    <br/>
                    <br className="md:hidden" />
                    Sono competente sul back-end e sul front-end, principalmente
                    sviluppo in <strong>Node.js, Express </strong> e <strong>SQL</strong> per il back-end e in <strong>React.js, JavaScript, Next.js, Tailwind CSS</strong> per il front-end.
                    <br/>
                    Ho realizzato landing page, siti web e web app: quello che mi appassiona è trasformare le idee in prodotti web 
                    dal design moderno, user-friendly e responsivo.
                    <br/>
                    <br className="md:hidden" />
                    Ho anche una passione per il design: mi piace sia creare un mock-up originale 
                    per i miei progetti con Figma, sia tradurre i mock-up del web designer in codice, 
                    prestando attenzione ai dettagli pixel per pixel e con un approccio mobile-first.
                </p>
                <div className="flex flex-col items-center justify-center">
                    <hr className="min-w-[40%] border-t-2 border-lightGreen my-6"/>
                </div>
                <h3 className="flex gap-2 text-[28px] md:text-[32px] font-bold text-lightGrey pl-4">
                    {<BsRocketTakeoff/>}
                    Il mio stack tecnologico
                </h3>
                <h4>Linguaggi e framework</h4>
                <ul className="flex flex-col md:flex-row gap-2">
                    <li className="flex flex-col gap-2 items-start justify-start">
                        <FaJs/>
                        <span>JavaScript</span>
                    </li>
                    <li className="flex flex-col gap-2">
                        <span>React</span>
                    </li>
                    <li className="flex flex-col gap-2">
                        <span>Next.js</span>
                    </li>
                    <li className="flex flex-col gap-2">
                        <FaNodeJs/>
                        <span>Node.js</span>
                    </li>
                    <li className="flex flex-col gap-2"></li>
                    <li className="flex flex-col gap-2"></li>
                    <li className="flex flex-col gap-2"></li>
                    <li className="flex flex-col gap-2"></li>
                    <h4>Strumenti</h4>

                    <li className="flex flex-col gap-2"></li>
                    <li className="flex flex-col gap-2"></li>
                </ul>
            </section>
        </>
    )
}