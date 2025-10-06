'use client'

export default function Experience() {
  
    return(
        <>
            <section className="bg-[#fafafa] px-4 lg:px-16 xl:px-64 pt-8 flex flex-col items-center justify-center gap-4 mt-12 scroll-mt-20 min-w-full" id="experience">
                
                {/** Title: Esperienza lavorativa */}
                <h2 className="text-[32px] md:text-[36px] font-bold text-darkGrey border-l-4 pl-6 border-lightGreen self-start mb-4">Esperienza lavorativa</h2>
                
                <div className="max-w-[84rem] pr-4 lg:pr-16 xl:pr-64 self-start">
            
                    {/* Focus Informatica */ }
                    <div className="text-darkGrey  pl-6 self-start mb-[4rem]">
                        <div className= "flex flex-col items-start justify-start gap-2 mb-2"> 

                            {/** Job title */}
                            <p className="font-bold text-xl"> 
                                Front End Developer - stage
                            </p>

                            {/** Company name */}
                            <p className="text-lightGrey text-lg font-semibold">
                                Focus Informatica - ibrido
                            </p>

                            {/** Date */}
                            <p className="text-lightGrey text-normal font-medium">
                                <i>03/2025 - 08/2025</i>
                            </p>
                        </div>
                        
                        {/** Job description */}
                        <ul className="text-base md:text-lg font-normal text-lightGrey leading-relaxed">
                            <li className="pb-[1rem] pt-[1rem]">
                                Questo stage è stato un&apos;importante esperienza formativa, durante la quale ho sviluppato 
                                una web app per la gestione di una lista contatti, 
                                seguendo l’intero ciclo di progettazione.
                            </li>
                            <li className="pb-[1rem]">
                                Ho iniziato con la creazione del database con <strong>SQL Server</strong>, 
                                definendo tabelle e relazioni.
                            </li>
                            <li className="pb-[1rem]">
                                Successivamente ho realizzato il back-end con <strong>Node.js</strong> ed <strong>Express</strong>, 
                                organizzandolo in server, controller e route. 
                                Ho implementato <strong>API RESTful</strong> per eseguire operazioni <strong>CRUD</strong> sui dati e 
                                le ho testate con <strong>Postman</strong>.
                            </li>
                            <li className="pb-[1rem]">
                                Ho sviluppato il front-end come Single Page Application con <strong>React</strong>, 
                                gestendo lo stato e il fetch dei dati tramite gli hook useState e useEffect.
                            </li>
                            <li className="pb-[1rem]">
                                Per lo stile ho utilizzato <strong>Tailwind CSS</strong>, che mi ha permesso di realizzare un design pulito e responsivo, 
                                applicando un approccio mobile-first.
                            </li>
                            <li className="pb-[1rem]">
                                La web app è stata progettata con un’architettura scalabile, così da permettere in futuro l’aggiunta di nuove tabelle, rotte e controller. 
                            </li>
                            <li>
                                Questo progetto mi ha dato l’opportunità di acquisire e consolidare competenze in <strong>JavaScript</strong>, fondamentale per 
                                lo sviluppo sia del <strong>back-end</strong> che del <strong>front-end</strong>.
                            </li>
                        </ul>
                    </div>

                {/* GoStudent */ }
                    <div className="text-darkGrey  pl-6 self-start mb-[2rem]">
                        <div className= "flex flex-col items-start justify-start gap-2 mb-2"> 
                            {/** Job title */}
                            <p className="font-bold text-xl"> 
                                Tutor
                            </p>

                            {/** Company name */}
                            <p className="text-lightGrey text-lg font-semibold">
                                GoStudent - da remoto
                            </p>

                            {/** Date */}
                            <p className="text-lightGrey text-normal font-medium">
                                <i>06/2021 - 02/2025</i>
                            </p>
                        </div>
                        
                        {/** Job description */}
                         <ul className="text-base md:text-lg font-normal text-lightGrey leading-relaxed">
                            <li className="pb-[1rem] pt-[1rem]">
                                Ho insegnato online materie classiche e moderne a studenti di scuole medie,
                                superiori e università di tutta Italia, seguendoli con percorsi di ripetizioni di medio-lungo
                                periodo.
                            </li>
                            <li className="pb-[1rem]">
                                Ho <strong>collaborato con il team</strong> di sales, manager e customer care per <strong>ascoltare </strong> 
                                le esigenze dei clienti ed elaborare piani di recupero scolastico per i loro figli.        
                            </li>
                            <li className="pb-[1rem]">
                                Questo lavoro ha richiesto capacità di <strong>problem-solving</strong> e <strong>comunicazione</strong>, fondamentali per mantenere 
                                il <strong>focus sugli obiettivi </strong> e offrire un&apos;esperienza di qualità.
                            </li>
                           <li className="pb-[1rem]">
                                Ho costruito collaborazioni solide e di <strong>fiducia</strong> con i colleghi e con i 
                                clienti gestiti a distanza, 
                                contribuendo con <strong>spirito di squadra</strong> all&apos;espansione della piattaforma sul territorio nazionale.
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}