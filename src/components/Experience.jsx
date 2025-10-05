'use client'

export default function Experience() {
  
    return(
        <>
            <section className="bg-[#fafafa] px-4 lg:px-16 xl:px-64 py-8 flex flex-col items-center justify-center gap-4 mt-12 scroll-mt-20 min-w-full" id="experience">
                
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
                                03/2025 - 08/2025
                            </p>
                        </div>
                        
                        {/** Job description */}
                        <p className="text-base md:text-lg font-normal text-lightGrey leading-relaxed">
                            Durante i 6 mesi di stage ho sviluppato una web app per la gestione di una lista contatti, 
                            lavorando all’intero ciclo di progettazione.
                            <br/><br className="md:hidden"/>
                            Ho iniziato con la creazione del database in <strong>SQL Server</strong>.
                            <br/>
                            Successivamente ho realizzato il back-end con <strong>Node.js</strong> ed <strong>Express</strong>, organizzato in controller e routes. 
                            Nel controller ho scritto le <strong>API RESTful</strong> per svolgere sui dati le operazioni <strong>CRUD</strong> di create, read, update e delete.
                            Per testare le API ho utilizzato <strong>Postman</strong>.
                            <br/><br className="md:hidden"/>
                            Ho sviluppato il front-end come Single Page Application con <strong>React</strong>, gestendo lo stato e il fetch dei dati.
                            <br/>
                            Per la parte visiva ho scelto <strong>Tailwind CSS</strong>, che mi ha permesso di stilizzare i componenti in maniera comoda e pulita, 
                            mantenendo un approccio mobile-first.
                            <br/><br className="md:hidden"/>
                            La web app è stata progettata con un’architettura scalabile, così da permettere in futuro l’aggiunta di nuove tabelle, rotte e controller. 
                            <br/>
                            Questo progetto mi ha dato l’opportunità di acquisire e consolidare le mie competenze in <strong>JavaScript</strong>, che è stato fondamentale per 
                            lo sviluppo sia del <strong>back-end</strong>, sia del <strong>front-end</strong>.
                        </p>
                    </div>

                {/* GoStudent */ }
                    <div className="text-darkGrey  pl-6 self-start mb-[4rem]">
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
                                06/2021 - 02/2025
                            </p>
                        </div>
                        
                        {/** Job description */}
                        <p className="text-base md:text-lg font-normal text-lightGrey leading-relaxed">
                            Ho svolto la professione di insegnante di ripetizioni in materie classiche e letterarie per studenti di scuole medie, 
                            superiori e università dislocati in tutta Italia, accompagnandoli con percorsi semestrali o annuali nel loro 
                            ciclo scolastico.
                            <br/>
                            <br className="md:hidden"/>
                            Ho <strong>collaborato coordinandomi </strong> con il team interno di sales, manager e costumer care per <strong>ascoltare </strong> 
                             le richieste dei clienti ed elaborare i piani di recupero scolastico per i loro figli.
                            <br/>
                            <br className="md:hidden"/>
                            Questo lavoro ha richiesto capacità di <strong>problem-solving</strong> e <strong>comunicazione</strong>, fondamentali per mantenere 
                            il <strong>focus sugli obiettivi </strong> e offrire un&apos;esperienza di qualità sia ai genitori che agli studenti.
                            <br/>
                            <br className="md:hidden"/>
                            Ho inoltre avuto l&apos;occasione di instaurate rapporti solidi e di <strong>fiducia</strong> con clienti gestiti a distanza, 
                            collaborando con spirito di squadra all&apos;espansione della piattaforma in tutta Italia.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}