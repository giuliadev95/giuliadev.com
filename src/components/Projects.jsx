import ProjectCard from "./cards/ProjectCard";
import { projectsData } from "./data/ProjectsData";

export default function Projects(){
    return(
        <section className="mt-[4rem] px-4 lg:px-16 xl:px-64 py-8 scroll-mt-20 min-w-full" id="projects">
            {/** Title: Esperienza lavorativa */}
            <h2 className="text-[32px] md:text-[36px] font-bold text-darkGrey border-l-4 pl-6 border-lightGreen self-start mb-4">Progetti</h2>
                
            <div className="flex flex-col items-start justify-start gap-[4rem] md:gap-[6rem]">
            
                {/** Project Card */}
                {projectsData.map((project, index)=> (
                    <ProjectCard
                        key={index}
                        imgSource={project.imgSource}
                        alt={project.alt}
                        title={project.title}
                        body={project.body}
                        stack={project.stack}
                        github={project.github}
                        details={project.details}
                    />
                ))}
            </div>
        </section>
    )
}