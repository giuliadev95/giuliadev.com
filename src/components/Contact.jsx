'use client';
import { BiLogoLinkedin } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";

export default function Contact() {
    
    return(
        <section className="bg-white px-4 lg:px-16 xl:px-64 py-8 flex flex-col items-start justify-start gap-4 mt-12 scroll-mt-20 max-w-[100rem]" id="contact">
            
            {/** Title */}
            <h2 className="text-[32px] md:text-[36px] font-bold text-darkGrey self-start border-l-4 pl-6 border-lightGreen">Contatti</h2>
            <p className="text-base md:text-lg font-normal text-lightGrey leading-relaxed">
                Cerchi collaborazioni per un un progetto? Mi piacerebbe entrare nel tuo team!
            </p>

            <a href="mailto:giuliadev95@gmail.com" className="hover:underline text-base md:text-lg font-bold text-lightGrey">
                contattami
            </a>

            <ul className="flex justify-start items-start gap-[2rem]">
                {/**
                 * 
                    <li>
                        <a target="_blank" href="https://www.linkedin.com/in/giuliamoukouyou/" rel="noopener noreferrer">       
                            <BiLogoLinkedin
                                className="text-lightGreen font-semibold text-[3rem] border border-white rounded-2xl bg-white"
                            />
                        </a>
                    </li>
                 */}
                <li>
                    <a target="_blank" href="https://github.com/giuliadev95" rel="noopener noreferrer">
                        <FaGithub
                            className="text-lightGreen font-semibold text-[3rem] border border-white rounded-2xl bg-white"
                        />
                    </a>
                </li>
            </ul>
        </section>                        
    )
}