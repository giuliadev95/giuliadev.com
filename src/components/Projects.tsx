// Import components
import Link from "next/link";

export default function Projects() {
    return(
        <div className="flex flex-col items-center gap-8">
            {/** Projects */}
            <h2 id="projects" className="text-white font-bold text-3xl p-4 mb-8 scroll-mt-12">
                Progetti
            </h2>

            <div className="flex flex-col items-start gap-6">   
                {/** Image with a link to the project page */}
                <Link 
                href={"https://github.com/giuliadev95/Contract-Management-System/"}
                rel="noopener noreferrer"
                target="_blank"
                >
                <div className="bg-[url('/contract-cover.png')] bg-cover bg-center w-[300px] h-[200px] md:w-[500px] md:h-[300px]
                                lg:w-[600px] lg-[300px] rounded-lg border border-zinc-500">      
                </div>
                </Link>

                {/* Title and Languages I used*/}
                <h3 className="text-grayLight text-2xl font-semibold mt-2">
                    Contract Manager
                </h3>
                <div className="flex flex-wrap gap-2 max-w-[300px] md:max-w-[500px]">
                    <span className="px-4 py-1 text-sm rounded-full border border-grayLight text-grayLight">C#</span>
                    <span className="px-4 py-1 text-sm rounded-full border border-grayLight text-grayLight">Asp.NET Core</span>
                    <span className="px-4 py-1 text-sm rounded-full border border-grayLight text-grayLight">Razor Pages</span>
                </div>

                {/** Description */}
                <p className="font-normal text-zinc-400 w-[300px] md:w-[500px]">
                    Questo progetto è in fase di sviluppo e consiste in un archivio di contratti, dove 
                    è possibile loggarsi e gestire i propri documenti. 
                    <br/>
                    <br/>
                    Ogni contratto è rappresentato da una scheda
                    con informazioni dettagliate, alla quale è allegato il pdf del contratto stesso.
                    <br/>
                    {/** Links to GitHub and Live Website */}
                </p>   
                    <span className="flex gap-4 text-sm flex-wrap">
                        {/** Live website */}
                        <Link
                        href={"https://github.com/giuliadev95/Contract-Management-System/"}
                        rel="noopener, noreferrer"
                        target="_blank"
                        className="underline underline-offset-4 text-grayLight"
                        >                
                        GitHub
                        </Link>
                    </span>
                <hr className="bg-slate-600 w-[100%] h-[1px] my-16"/>
            </div>
            

            {/** Contact list- project container */}
            <div className="flex flex-col items-start gap-6">   
                {/** Image with a link to the project page */}
                <Link 
                href={"https://github.com/giuliadev95/contactlist"}
                rel="noopener noreferrer"
                target="_blank"
                >
                <div className="bg-[url('/contactlist.jpg')] bg-cover bg-center w-[300px] h-[200px] md:w-[500px] md:h-[300px]
                                lg:w-[600px] lg-[300px] rounded-lg border border-zinc-500">      
                </div>
                </Link>

                {/* Title and Languages I used*/}
                <h3 className="text-grayLight text-2xl font-semibold mt-2">
                    Contact List
                </h3>
                <div className="flex flex-wrap gap-2 max-w-[300px] md:max-w-[500px]">
                    <span className="px-4 py-1 text-sm rounded-full border border-grayLight text-grayLight">Node.js</span>
                    <span className="px-4 py-1 text-sm rounded-full border border-grayLight text-grayLight">Express</span>
                    <span className="px-4 py-1 text-sm rounded-full border border-grayLight text-grayLight">React</span>
                    <span className="px-4 py-1 text-sm rounded-full border border-grayLight text-grayLight">PosgreSQL</span>
                    <span className="px-4 py-1 text-sm rounded-full border border-grayLight text-grayLight">CSS</span>
                </div>

                {/** Description */}
                <p className="font-normal text-zinc-400 w-[300px] md:w-[500px]">
                    Webapp per creare una lista dove inserire, modificare ed eliminare
                    dei contatti. Questo progetto mi ha permesso di capire il funzionamento complessivo di un software
                    ed è stato il mio trampolino di lancio verso lo sviluppo in Node.js.
                    <br/>
                    <br/>
                    Ho imparato a strutturare il back-end in controllers e routes, scrivendo API RESTful
                    per ricevere dati dal database SQL.
                    Ho usato React nel front-end per avere la velocità di una SPA
                    e ho gestito lo stato e il fetch dei contatti con i React Hooks.
                    <br/>
                    <br/>
                    Pur essendo una webapp semplice, è stata un&#39;occasione per superare molte sfide.
                    <br/>
                    {/** Links to GitHub and Live Website */}
                </p>   
                    <span className="flex gap-4 text-sm flex-wrap">
                        {/** Live website */}
                        <Link
                        href={"https://github.com/giuliadev95/contactlist/"}
                        rel="noopener, noreferrer"
                        target="_blank"
                        className="underline underline-offset-4 text-grayLight"
                        >                
                        GitHub
                        </Link>
                    </span>
                <hr className="bg-slate-600 w-[100%] h-[1px] my-16"/>
            </div>
            
            {/** Tutor life - project container */}
            <div className="flex flex-col items-start gap-6">               
                {/** Image with a link to the project page */}
                <Link 
                href={"https://blog-76ik-git-main-giulia-ms-projects.vercel.app/"}
                rel="noopener noreferrer"
                target="_blank"
                >
                    <div className="bg-[url('/tutorlife.png')] bg-cover bg-center w-[300px] h-[200px] md:w-[500px] md:h-[300px]
                                    lg:w-[600px] lg-[300px] rounded-lg border border-zinc-500">      
                    </div>
                </Link>
                {/* Title and Languages I used*/}
                <h3 className="text-grayLight text-2xl font-semibold mt-2">
                    Tutor life
                </h3>
                <div className="flex flex-wrap gap-2 max-w-[300px] md:max-w-[500px]">
                    <span className="px-4 py-1 text-sm rounded-full border border-grayLight text-grayLight">Sanity CMS</span>
                    <span className="px-4 py-1 text-sm rounded-full border border-grayLight text-grayLight">Next.js</span>
                    <span className="px-4 py-1 text-sm rounded-full border border-grayLight text-grayLight">React</span>
                    <span className="px-4 py-1 text-sm rounded-full border border-grayLight text-grayLight">Typescript</span>
                    <span className="px-4 py-1 text-sm rounded-full border border-grayLight text-grayLight">Tailwind</span>
                </div>
                {/** Description */}
                <p className="font-normal text-zinc-400 w-[300px] md:w-[500px]">
                    Un blog dedicato ai consigli per lavorare come insegnante online, costruito con Next.js e Tailwind
                    per essere veloce e reattivo.
                    Mi è piaciuto curare il web design, facendo i mockup su Figma e traducendoli in interfacce utente pixel per pixel. 
                    <br/>
                    <br/>
                    La sfida è stata integrare al progetto il database dei post, che è Sanity, un CMS Headless basato
                    su GraphQL per il fetch dei dati.
                    <br/>
                </p>      
                {/** Links to GitHub and Live Website */}
                <span className="flex gap-4 text-sm flex-wrap">

                    {/** GitHub link: don't include, it's a private repo
                        <Link 
                        href={"https://github.com/giuliadev95/blog"}
                        rel="noopener, noreferrer"
                        target="_blank"
                        className="underline underline-offset-4 text-grayLight"
                        >
                        GitHub
                    </Link>
                    */}

                    {/** Live website */}
                    <Link 
                    // href={"https://blog-76ik-git-main-giulia-ms-projects.vercel.app/"}
                    href={"https://blog-76ik-git-backup-pre-update-giulia-ms-projects.vercel.app/"}
                    rel="noopener, noreferrer"
                    target="_blank"
                    className="underline underline-offset-4 text-grayLight"
                    >
                    Sito live
                    </Link>
                </span>
                <hr className="bg-slate-600 w-[100%] h-[1px] my-16"/>
            </div>

            {/** This personal website - project container */}
            <div className="flex flex-col items-start gap-6">
                {/** Image with a link to the project page */}
                <div className="bg-[url('/personal-website.png')] bg-cover bg-center w-[300px] h-[200px] md:w-[500px] md:h-[300px]
                                lg:w-[600px] lg-[300px] rounded-lg border border-zinc-500">  
                </div>
                {/* Title and Languages I used*/}
                <h3 className="text-grayLight text-2xl font-semibold mt-2">
                    Sito web portoflio
                </h3>
                <div className="flex flex-wrap gap-2  max-w-[300px] md:max-w-[500px]">
                    <span className="px-4 py-1 text-sm rounded-full border border-grayLight text-grayLight">Next.js</span>
                    <span className="px-4 py-1 text-sm rounded-full border border-grayLight text-grayLight">React</span>
                    <span className="px-4 py-1 text-sm rounded-full border border-grayLight text-grayLight">Tailwind</span>
                </div>
                {/** Description */} 
                <p className="font-normal text-grayLight w-[300px] md:w-[500px]">
                    Un portfolio minimal, costruito con Next.js, progettato in maniera modulare e intuitiva.
                    Costruendolo, ho imparato a usare i componenti React.
                    <br/>
                    <br/>
                </p>
                {/** Links to GitHub and Live Website */}
                <span className="flex gap-4 text-sm flex-wrap">
                    {/** GitHub */}
                    <Link 
                    href={"https://github.com/giuliadev95/portfolio-website"}
                    rel="noopener, noreferrer"
                    target="_blank"
                    className="underline underline-offset-4 text-grayLight"
                    >GitHub
                    </Link>
                    {/** Live website */}
                    <Link 
                    href={"/"}
                    // className="py-2 px-4 border border-grayLight rounded-lg"
                    className="underline underline-offset-4 text-grayLight"
                    >Sito live
                    </Link>
                </span>
                <hr className="bg-slate-600 w-[100%] h-[1px] my-16"/>
            </div>

             {/** FAQ - project container */}
             <div className="flex flex-col items-start gap-6">

                {/** Image with a link to the project page */}
                <Link 
                    href={"https://minimalist-static-portfolio.netlify.app/"}
                    rel="noopener, noreferrer"
                    target="_blank">
                    <div className="bg-[url('/minimalist-portfolio.png')] bg-cover bg-center w-[300px] h-[200px] md:w-[500px] md:h-[300px]
                                    lg:w-[600px] lg-[300px] rounded-lg">
                    </div>
                </Link>      

                {/* Title and Languages I used*/}
                <h3 className="text-grayLight text-2xl font-semibold mt-2">
                    Landing Page
                </h3>
                <div className="flex flex-wrap gap-2  max-w-[300px] md:max-w-[500px]">
                    <span className="px-4 py-1 text-sm rounded-full border border-grayLight text-grayLight">HTML</span>
                    <span className="px-4 py-1 text-sm rounded-full border border-grayLight text-grayLight">CSS</span>
                    <span className="px-4 py-1 text-sm rounded-full border border-grayLight text-grayLight">JavaScript</span>
                </div>

                {/** Description */}
                <p className="font-normal text-grayLight w-[300px] md:w-[500px]">
                    Questa landing page è stata una sfida del programma Frontend Mentor 
                    e ha un look professionale e pulito.
                    La navigazione è fluida e intuitiva, ho disposto gli elementi in un layout ordinato grazie all&#39;uso di CSS Grid e Flexbox.
                    Sono presenti tag che garantiscono accessibilità.
                    <br/>
                    <br/>
                    Il menu mobile e il rendering di immagini diverse a seconda della grandezza dello schermo sono stati gestiti con
                    la manipolazione del DOM in JavaScript puro.
                    <br/> <br/>

                    {/** Links to GitHub and Live Website */}
                    <span className="flex gap-4 text-sm flex-wrap">

                        {/* GitHub */}
                        <Link 
                        href={"https://github.com/giuliadev95/minimalist-portfolio-website"}
                        rel="noopener, noreferrer"
                        target="_blank"
                        className="underline underline-offset-4 text-grayLight"
                        >GitHub
                        </Link>

                        {/* Live website */}
                        <Link 
                        href={"https://minimalist-static-portfolio.netlify.app/"}
                        rel="noopener, noreferrer"
                        target="_blank"
                        className="underline underline-offset-4 text-grayLight"
                        >Sito live
                        </Link>
                    </span>
                </p>
                <hr className="bg-slate-600 w-[100%] h-[1px] my-12"/>
            </div>
            
        </div>
    )
}