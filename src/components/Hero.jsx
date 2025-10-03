'use client'
import Button from "./Button";
import { IoDocumentTextSharp } from "react-icons/io5";
import { FaCode } from "react-icons/fa6";

export default function Hero() {
    return (
        // Section to contain the Hero section
        <section className="bg-[#fafafa] px-4 lg:px-16 xl:px-64 py-8">
            <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between md:gap-16 max-w-[70rem]">
                
                {/* Text about me */}
                <div className="flex flex-col gap-6 max-w-xl">
                    <span 
                        className="flex items-center gap-3 text-2xl font-normal text-lightGrey"
                    >
                        Ciao, sono Giulia 
                        <FaCode className="text-lightGreen font-bold" />
                    </span>

                    <h1 className="text-[28px] md:text-[36px] font-bold text-darkGrey">
                        Front-End Developer
                    </h1>

                    <p className="text-base md:text-lg font-normal text-lightGrey leading-relaxed">
                        Sono una sviluppatrice web specializzata sul front-end, 
                        mi occupo di creare interfacce moderne, responsive e performanti, 
                        garantendo un'esperienza utente fluida e accessibile.
                    </p>

                    {/** 2 CTA Button components : view cv and go to projects */}
                    <div className="flex gap-4 mt-4">
                        <Button 
                            color="green"
                            icon={<IoDocumentTextSharp />}
                            text="Vedi CV"
                        />
                        <Button 
                            color="grey"
                            icon={<FaCode />}
                            text="Progetti"
                        />
                    </div>
                </div>

                {/* My profile image */}
                <div className="flex-shrink-0 self-start">
                    <img 
                        src="./foto_bg_removed.png"
                        alt="Foto di Giulia"
                        className="w-[200px] h-[200px] md:w-[280px] md:h-[280px]"
                    />
                </div>
            </div>
        </section>
    );
}
