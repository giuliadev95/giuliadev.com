'use client';

export default function ButtonCTA({color, icon: Icon, text, path}){
    
    return(
        <div>
            { 
                color === "green"? (
                    <>
                        <a
                            href={path}
                            className="bg-lightGreen text-white text-[1rem] font-bold flex items-center gap-3 justify-center rounded-lg p-2"
                            >
                            <Icon/>
                            {text}
                        </a>
                    </>
                )
                    : (
                    <>
                        <a
                            href={path}   
                            className="bg-lightGrey text-white text-[1rem] font-bold flex items-center gap-3 justify-center rounded-lg py-2 px-6"
                            >
                                <Icon/>
                                {text}                            
                        </a>
                    </>

                    )
            }
        </div>
    )
}