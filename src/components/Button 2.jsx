export default function Button({color, icon, text}) {
    return(
        <>
            <div>
                { 
                    color === "green"? (
                        <>
                            <button
                                type="button"
                                onClick={() => {}}
                                className="bg-lightGreen text-white text-[1rem] font-bold flex items-center gap-3 justify-center rounded-lg p-2"
                            >
                                {icon}
                                {text}
                            </button>
                        </>
                    )
                     : (
                        <>
                        <button
                                type="button"
                                onClick={() => {}}
                                className="bg-lightGrey text-white text-[1rem] font-bold flex items-center gap-3 justify-center rounded-lg py-2 px-6"
                            >
                                {icon}
                                {text}                            
                            </button>
                        </>

                     )
                }
            </div>
        </>
    )
}