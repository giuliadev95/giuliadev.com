// Import components
// import Link from "next/link";
import { CourseList } from "./CourseList";

export default function About() {
    return(
        <div>
            {/** About me Presentation */}
            <div className="flex flex-col gap-8 py-20 items-center justify-center mx-8">
                <h2 id="about" className="text-white text-bold text-3xl scroll-mt-24">
                    Chi sono
                </h2>
                {/** Description */}
                <p className="text-grayLight max-w-[500px]">
                    Ho imparato a programmare da autodidatta, realizzando siti e web app partendo
                    dal design fino alla scrittura del codice.
                    Sono appassionata di sviluppo software, motivo per cui vorrei portare le mie competenze e
                    la mia voglia di imparare all&#39;interno di un&#39;azienda, entrando in un team.
                    <br></br>
                    <br></br>
                    Il mio stack principale si basa su JavaScript: lavoro con Node.js / Express, React, Next.js e database SQL.
                    Non smetto mai di imparare, perciò ho iniziato a sviluppare anche in C# e Asp.NET Core.
                    <br></br>
                    <br/><br/>
                    Laureata triennale in Lettere antiche, ho sempre sentito un profondo interesse
                    per il lavoro sui linguaggi e la mia transizione verso la programmazione è stata naturale.
                    Sono una fan della fantascienza e nel tempo libero leggo science fiction e mi tuffo in un
                    episodio di Star Trek.
                </p>
            </div>

            {/** Courses I attended 
            <div className="flex flex-col gap-8 pb-20 items-center justify-center mx-8">
                <h3 className="text-white text-bold text-3xl scroll-mt-24">
                    Courses I attended
                </h3>

                <div className="grid grid-cols-[repeat(auto-fit,_minmax(auto,_1fr))] md:grid-cols-2 gap-8 mt-2"> 
                    {/** Single Course presentation 
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

                    {/** Single Course presentation 
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

                    {/** Single Course presentation 
                    <div className="grid grid-rows-3 text-grayLight text-sm md:text-base w-[250px] rounded-xl px-4 py-2 border border-grayLight gap-4 h-[150px] md:h-[200px]">
                        <p className="font-semibold">April - september 2024</p>
                        <p>
                            Frontend Mentor challenges
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

                    {/** Single Course presentation 
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
            */}

            <div className="flex flex-col gap-8 pb-20 justify-center items-center max-w-fit mx-auto">
                <h3 id="skills" className="text-white text-bold text-3xl scroll-mt-24">
                    Il mio stack
                </h3>
                {/* Skills names */}
                <div className="flex flex-wrap items-center justify-start gap-4 text-[#97D4C7] font-semibold max-w-[300px] md:max-w-[500px]">
                    <p className="px-2 py-1 w-fit rounded-xl border border-[#97D4C7]">JavaScript</p>
                    <p className="px-2 py-1 w-fit border border-[#97D4C7] rounded-xl">Node.js</p>
                    <p className="px-2 py-1 w-fit border border-[#97D4C7] rounded-xl">Express</p>
                    <p className="px-2 py-1 w-fit border border-[#97D4C7] rounded-xl">React</p>
                    <p className="px-2 py-1 w-fit border border-[#97D4C7] rounded-xl">Next.js</p>
                    <p className="px-2 py-1 w-fit border border-[#97D4C7] rounded-xl">C#</p>
                    <p className="px-2 py-1 w-fit border border-[#97D4C7] rounded-xl">Asp.NET Core</p>
                    <p className="px-2 py-1 w-fit border border-[#97D4C7] rounded-xl">HTML</p>
                    <p className="px-2 py-1 w-fit border border-[#97D4C7] rounded-xl">CSS</p>
                    <p className="px-2 py-1 w-fit border border-[#97D4C7] rounded-xl">Tailwind CSS</p>
                    <p className="px-2 py-1 w-fit border border-[#97D4C7] rounded-xl">Sanity</p>
                    <p className="px-2 py-1 w-fit border border-[#97D4C7] rounded-xl">Wordpress CMS</p>
                    <p className="px-2 py-1 w-fit border border-[#97D4C7] rounded-xl">Git</p>
                </div>
            </div>
            {/** Courses I attended: dynamic list with props */}
            <div className="flex flex-col gap-8 pb-20 items-center justify-center mx-8">
                <h3 className="text-white text-bold text-3xl scroll-mt-24">
                    Corsi di formazione seguiti
                </h3>
                <CourseList/>
            </div>


            {/** My skills */}
        </div>
    )
}