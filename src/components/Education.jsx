import { EducationData } from "./data/EducationData";
import EducationList from "./lists/EducationList";

export default function Education(){
    return(
        <section className="bg-[#fafafa] px-4 lg:px-16 xl:px-64 py-8 flex flex-col items-center justify-center gap-4 mt-12 scroll-mt-20 min-w-full" id="education">
            
            {/** Title: Educazione */}
            <h2 className="text-[32px] md:text-[36px] font-bold text-darkGrey border-l-4 pl-6 border-lightGreen self-start mb-4">Educazione</h2>
            
            {EducationData.map((item, index)=> (
            <EducationList
                key={index}
                title={item.title}
                school={item.school}
                date = {item.date}
                certificateSrc={item.certificateSrc && item.certificateSrc} 
                certificateLink={item.certificateLink && item.certificateLink}
                alt={item.alt && item.alt}              
            />             
            ))}
        </section>
    )
}