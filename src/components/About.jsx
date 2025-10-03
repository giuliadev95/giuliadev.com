'use client'
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
import { FaSquareGit } from "react-icons/fa6";

export default function About() {
    return(
        <>
            <section className="bg-white px-4 lg:px-16 xl:px-64 py-8 flex flex-col items-center justify-center gap-4 mt-12 scroll-mt-20" id="about">
                {/** Title */}
                <h2 className="text-[32px] md:text-[36px] font-bold text-darkGrey border-l-4 pl-6 border-lightGreen self-start">Chi sono</h2>
                {/** Description about me */}

                <p  className="text-base md:text-lg font-normal text-lightGrey leading-relaxed">
                    Sono una web developer con 1 anno di esperienza, trascorso lavorando prima su progetti personali e in seguito
                    facendo uno stage aziendale di 6 mesi. 
                    <br/>
                    <br className="md:hidden" />
                    Sono competente sul back-end e sul front-end, principalmente
                    sviluppo in <strong>Node.js, Express </strong> e <strong>SQL</strong> per il back-end e in <strong>React.js, JavaScript, Tailwind</strong> per il front-end.
                    <br/>
                    Ho realizzato landing page, siti web e web app: quello che mi appassiona è trasformare le idee in prodotti web 
                    dal design moderno, user-friendly e responsivo.
                    <br/>
                    <br className="md:hidden" />
                    Ho anche una passione per il design: mi piace creare i mock-up originali 
                    per un progetto usando Figma, prestando attenzione ai dettagli pixel per pixel, con un approccio mobile-first. 
                    Per tradurre uno stile in codice, utilizzo Tailwind, perchè mi permette di applicare gli stili direttamente inline sui 
                    singoli componenti.
                </p>
                <br/>

                {/* Stack tecnologico */ }
                <h3 className="text-[24px] md:text-[30px] font-medium text-darkGrey border-l-4 pl-6 border-lightGreen self-start mb-4">
                    Stack tecnologico
                </h3>
                <ul className="flex flex-wrap items-start justify-start gap-4 self-start mt-2">
                    <li className="flex flex-col gap-2 items-start justify-start">
                        <FaJs size={"2rem"} color={"#FFD600"}/>
                        <span>JavaScript</span>
                    </li>
                    <li className="flex flex-col gap-2">
                        <RiReactjsLine size={"2rem"} color={"#62d4fa"}/>
                        <span>React</span>
                    </li>
                    <li className="flex flex-col gap-2">
                        <FaNodeJs size={"2rem"} color={"#54B689"}/>
                        <span>Node.js</span>
                    </li>
                    <li className="flex flex-col gap-2">
                        <BiLogoPostgresql size={"2rem"} color={"#326791"}/>
                        PostgreSQL
                    </li>
                    <li className="flex flex-col gap-2">
                        <RiTailwindCssFill size={"2rem"} color={"#37BDF8"}/>
                        Tailwind
                    </li>
                    <li className="flex flex-col gap-2">
                        <FaBootstrap size={"2rem"} color={"#6E2BF5"}/>
                        Bootstrap
                    </li>
                    <li className="flex flex-col gap-2">
                        <FaHtml5 size={"2rem"} color={"#EF6931"}/>
                        HTML
                    </li>
                    <li className="flex flex-col gap-2">
                        <IoLogoCss3 size={"2rem"} color={"#3BAEDE"}/>
                        CSS
                    </li>
                </ul>

                {/* Strumenti */ }
                <h3 className="text-[24px] md:text-[30px] font-medium text-darkGrey border-l-4 pl-6 border-lightGreen self-start mb-4 mt-12">
                    Strumenti
                </h3>
                <ul className="flex flex-wrap items-start justify-start gap-4 self-start">
                    <li className="flex flex-col gap-2 items-start justify-start">
                        <VscVscode size={"2rem"} color={"#1C7CBC"}/>
                        <span>VS Code</span>
                    </li>
                    <li className="flex flex-col gap-2">
                        <FaSquareGit size={"2rem"} color={"#F05033"}/>
                        <span>GIT</span>
                    </li>
                    <li className="flex flex-col gap-2">
                        <PiFigmaLogoBold size={"2rem"} color={"#222222"}/>
                        <span>Figma</span>
                    </li>         
                </ul>
            </section>
        </>
    )
}