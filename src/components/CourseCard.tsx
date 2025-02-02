// This component is meant to accept some data as props, so to be a "dynamic CourseCard component".
import Link from "next/link";

// Let's define the type of props here
type CourseCardProps = {
    date: string;
    title: string;
    link:string;
    platform: string;
    arialabel: string;
}

// Now let's create the actual Course-Card component
export function CourseCard({ date, title, link, platform, arialabel }:CourseCardProps) {
    return(
        <div className="grid grid-rows-3 text-grayLight text-sm md:text-base w-[250px] rounded-xl px-4 py-2 border border-grayLight gap-4 h-[150px] md:h-[200px]">
            
            {/** Date */}
            <p className="font-semibold"> {date}</p>

            {/*  Name of the course (Course-title)*/}
            <h2> {title}</h2>
            
            {/* Link to the course  */}
            <Link
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={arialabel}
                title= {`Check the course on ${platform}`}
            >

                {/* // Platform */}
                <p className="text-green">{platform}</p>
            </Link>
            
        </div>
    );  
}