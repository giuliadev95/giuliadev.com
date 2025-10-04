'use client'
import { useState } from "react";
import { FaChevronCircleDown, FaChevronCircleUp } from "react-icons/fa";

export default function Experience() {

    const [openJobDescription, setOpenJobDescription]= useState(false);
    const [openSecondJobDescription, setOpenSecondJobDescription]= useState(false);

    function handleClick(){
        setOpenJobDescription(!openJobDescription)
    }

    function handleSecondClick(){
        setOpenSecondJobDescription(!openSecondJobDescription)
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
                        Focus Informatica - ibrido
                    </p>

                    {/** Date */}
                    <p className="text-lightGrey text-normal ml-[38px]">
                        03/2025 - 08/2025
                    </p>
                    
                    {/** Job description */}
                    <div
                        className={`
                            overflow-hidden transition-all duration-700 ease-in-out 
                            ${openJobDescription ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"}
                            ml-[38px]
                        `}
                    >
                        <p className="text-base md:text-lg font-normal text-lightGrey leading-relaxed">
                            Durante i 6 mesi di stage ho sviluppato una web app per la gestione di una lista contatti, 
                            lavorando all’intero ciclo di progettazione.
                            <br/><br className="md:hidden"/>
                            Ho iniziato con la creazione del database in <strong>SQL Server</strong>, creando le tabelle e le relazioni. 
                            <br/>
                            Successivamente ho realizzato il back-end con <strong>Node.js</strong> ed <strong>Express</strong>, organizzato in controller e routes. 
                            Nel controller ho scritto le <strong>API RESTful</strong> per svolgere sui dati le operazioni <strong>CRUD</strong> di create, read, update e delete.
                            Per testare le API ho utilizzato <strong>Postman</strong>.
                            <br/><br className="md:hidden"/>
                            Ho sviluppato il front-end come Single Page Application con <strong>React</strong>, gestendo lo stato tramite useState  
                            e il fetch dei dati tramite useEffect con la libreria axios. 
                            <br/>
                            Per la parte visiva ho scelto <strong>Tailwind CSS</strong>, che mi ha permesso di stilizzare i componenti in maniera comoda e pulita, 
                            mantenendo un approccio mobile-first.
                            <br/><br className="md:hidden"/>
                            La web app è stata progettata con un’architettura scalabile, così da permettere in futuro l’aggiunta di nuove tabelle, rotte e controller. 
                            <br/>
                            Questo progetto mi ha dato l’opportunità di acquisire e consolidare le mie competenze in <strong>JavaScript</strong>, che è stato fondamentale per 
                            lo sviluppo sia del back-end, sia del front-end.
                        </p>

                    </div>
                </div>


               {/* GoStudent */ }
                <div className="text-darkGrey  pl-6 self-start mb-4">
                    <div className= "flex items-center justify-start gap-4 "> 
                        <button
                            className="hover:cursor-pointer"
                            
                            onClick={() => {
                                handleSecondClick();
                                console.log('State:', openSecondJobDescription);
                            }}
                        >
                            {/** Icon: Up to open, Down to close */}
                            {openSecondJobDescription? (
                                <FaChevronCircleUp size={"20px"}/>
                            ): (
                                <FaChevronCircleDown size={"20px"}/>
                            )}
                        </button>

                        {/** Job title */}
                        <p className="font-bold text-xl"> 
                            Tutor
                        </p>
                    </div>

                    {/** Company name */}
                    <p className="text-lightGrey text-lg ml-[38px]">
                        GoStudent - da remoto
                    </p>

                    {/** Date */}
                    <p className="text-lightGrey text-normal ml-[38px]">
                        06/2021 - 02/2025
                    </p>
                    
                    {/** Job description */}
                    <div
                        className={`
                            overflow-hidden transition-all duration-700 ease-in-out 
                            ${openSecondJobDescription ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"}
                            ml-[38px]
                        `}
                    >
                        <p className="text-base md:text-lg font-normal text-lightGrey leading-relaxed">
                            Ho svolto la professione di insegnante di ripetizioni in materie classiche e letterarie per studenti di scuole medie, 
                            superiori e università dislocati in Italia e all'estero, accompagnandoli con percorsi semestrali o annuali nei loro 
                            cicli scolastici.
                            <br/><br className="md:hidden" />
                            Ho lavorato coordinandomi con il team interno di manager e customer care e grazie a collaborazione e spirito 
                            di squadra abbiamo garantito ai clienti la soddisfazione degli obiettivi scolastici concordati, entro le scadenze.
                            <br/>
                            <br className="md:hidden" />
                            Questo lavoro ha richiesto una forte capacità di ascolto e comunicazione, fondamentali per instaurare rapporti 
                            solidi e di fiducia con i clienti.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}