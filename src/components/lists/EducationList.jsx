'use client'
 
export default function EducationList({title, school, date, certificateSrc, certificateLink, alt}){
    return(
        <>
            <div className="flex flex-col items-baseline justify-start content-start gap-[2rem] mb-[4rem]">
                <div>
                    <p className="font-bold text-xl">
                        {title}
                    </p>
                    <p className="text-lightGrey text-lg font-bold">
                        {school}
                    </p>
                    <p className="text-lightGrey text-normal font-normal">{date}</p>
                </div>
                {/** Img */}
                <img
                    src={certificateSrc}
                    alt={alt}
                    width={"400px"}
                    height={"auto"}
                    className="shadow-lg border-neutral-500 hover:cursor-pointer"
                    onClick={()=>{
                        certificateLink && (
                            window.open(certificateLink, "_blank")
                        )
                    }}             
                />
            </div>
        </>
    )
}