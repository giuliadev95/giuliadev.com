import { CourseCard } from "./CourseCard";
import { courses } from "@/app/data/CoursesData";

export function CourseList() {
    return(
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(auto,_1fr))] md:grid-cols-2 gap-8 mt-2">
            {courses.map((course, index)=>(
                <CourseCard key={index} {...course}/>
            ))}
        </div>
    );
}