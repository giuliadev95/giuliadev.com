'use client'
import { useState } from "react";
import { FaChevronCircleDown, FaChevronCircleUp } from "react-icons/fa";

export default function Experience() {

    const [openJobDescription, setOpenJobDescription]= useState(false);
    function handleClick(){
        setOpenJobDescription(!openJobDescription)
    }
    
    return(
        <>
            <section className="bg-white px-4 lg:px-16 xl:px-64 py-8 flex flex-col items-center justify-center gap-4 mt-12 scroll-mt-20 max-w-[100rem]" id="experience">
                
                {/** Title: Esperienza lavorativa */}
                <h2 className="text-[32px] md:text-[36px] font-bold text-darkGrey border-l-4 pl-6 border-lightGreen self-start mb-4">Esperienza lavorativa</h2>
                
                {/* Focus Informatica */ }
                <div className="text-darkGrey  pl-6 self-start mb-4">
                    <div className= "flex items-center justify-start gap-4 "> 
                        <button
                            className="hover:cursor-pointer"
                            
                            onClick={() => {
                                handleClick();
                                console.log('State:', openJobDescription);
                            }}
                        >
                            {/** Icon: Up to open, Down to close */}
                            {openJobDescription? (
                                <FaChevronCircleUp size={"20px"}/>
                            ): (
                                <FaChevronCircleDown size={"20px"}/>
                            )}
                        </button>

                        {/** Job title */}
                        <p className="font-bold text-xl"> 
                            Front End Developer - stage
                        </p>
                    </div>

                    {/** Company name */}
                    <p className="text-lightGrey text-lg ml-[38px]">
                        Focus Informatica 
                    </p>

                    {/** Date */}
                    <p className="text-lightGrey text-normal ml-[38px]">
                        03/2025 - 08/2025
                    </p>
                    
                    {/** Job description */}
                    {
                        openJobDescription && (
                            <>
                                <p  className="text-base md:text-lg font-normal text-lightGrey leading-relaxed ml-[38px]">
                                    Durante questo stage mi è stata affidata la realizzazione di una web app full-stack che consentisse agli utenti di consultare una lista di contatti, completa di database e funzioni CRUD.
                                    <br/>
                                    <br className="md:hidden" />
                                    Sono competente sul back-end e sul front-end, principalmente
                                    sviluppo in <strong>Node.js, Express </strong> e <strong>SQL</strong> per il back-end e in <strong>React.js, JavaScript, Tailwind</strong> per il front-end.
                                    <br/>
                                    E’ stata per me un’opportunità per implementare un back-end da zero e connetterlo a un database, anch’esso realizzato da me. 
                                    <br/>
                                    <br className="md:hidden" />
                                    Ho utilizzato Node.js con il framework Express per strutturare il back-end in server, routes e controllers, scrivendo API RESTful che ho testato con Postman. 
                                    <br/>
                                    Per il front-end ho implementato una SPA in React.js, usando lo useState per il controllo dello stato dei contatti e lo useEffect per eseguire il fetch dei contatti tramite axios.
                                    <br/>
                                    Per lo stile ho scelto Tailwind, per la semplicità che offre nello stilizzare i componenti direttamente inline.
                                    </p>
                            </>
                        )
                    }
                </div>


                {/* Tutor */ }
                <div className="text-darkGrey pl-6 self-start mb-4">
                    <p className="font-bold text-xl">
                        Tutor
                    </p>
                    <p className="text-lightGrey text-lg">
                        GoStudent 
                    </p>
                    <p className="text-lightGrey text-normal">
                        06/2021 - 02/2025
                    </p>
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
                </div>
            </section>
        </>
    )
}