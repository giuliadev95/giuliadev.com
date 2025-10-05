import Link from "next/link"

export default function ProjectCard({imgSource, title, body, stack, alt, github, details}){

    return(
        <>       
            <div className="flex flex-col items-start justify-start content-start md:flex-row">
                <img
                    src={imgSource}
                    alt={alt}
                    width={"400px"}
                    height={"auto"}
                />
                <div className="flex flex-col items-start justify-between">
                    <ul>
                        <li>
                            {title}
                        </li>
                        <li>
                            {body}
                        </li>
                        
                    </ul>
                    <ul className="flex flex-wrap items-center justify-start">
                        {stack.map((item, index)=> (    
                            <li 
                                key={index}
                                className="inline-block rounded-full border border-black bg-black px-3 py-1 text-xs font-semibold text-white wh mr-2 mb-2">
                                {item}
                            </li>
                        ))}
                    </ul>  
                    <div className="flex gap-4 justify-between items-center mt-4">
                        {details && 
                            <Link 
                                href={details}
                                className="py-1 px-4 bg-lightGreen text-white border-darkGreen rounded-2xl"
                            >
                                Scopri di più
                            </Link>
                        }

                        {github && 
                            <Link 
                                href={github}
                                className="py-1 px-4 bg-lightGreen text-white border-darkGreen rounded-2xl"
                            >
                                Vai al progetto
                            </Link>
                        }                   
                    </div>
                </div>
            </div>
        </>
    )
}




