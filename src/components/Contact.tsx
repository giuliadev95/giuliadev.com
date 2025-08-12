import Link from "next/link";

export default function Contact() {
    return(
        <div className="flex flex-col items-center gap-8 mx-auto w-[300px] h-[200px] md:w-[500px] md:h-[300px]">
            {/** Contact */}
            <h2 id="contact" className="text-green font-bold text-3xl">
                Contatti
            </h2>
            <div className="flex flex-col items-start justify-start gap-6">
                <h3 className="text-white font-bold text-2xl">
                        Mi piacerebbe entrare in un team
                </h3>
                <p className="text-grayLight">
                    Per opportunità di stage / internship scrivimi pure in DM su LinkedIn o Instagram:
                </p>
                <ul className="text-grayLight flex gap-x-2 underline">
                    <Link
                        href={"https://www.linkedin.com/in/giuliamoukouyou/"}
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        <li>Linkedin</li>
                    </Link>

                    <Link
                        href={"https://www.instagram.com/giulia_moukouyou/"}
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                    <li>Instagram</li>
                    </Link>
                </ul>
            </div>
        </div>
    )
}