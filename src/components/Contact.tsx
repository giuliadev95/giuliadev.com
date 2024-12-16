import Link from "next/link";

export default function Contact() {
    return(
        <div className="flex flex-col items-center gap-8 mx-auto w-[300px] h-[200px] md:w-[500px] md:h-[300px]">
            {/** Contact */}
            <h2 id="contact" className="text-green font-bold text-3xl">
                Contact
            </h2>
            <div className="flex flex-col items-start justify-start gap-6">
                <h3 className="text-white font-bold text-2xl">
                        Let's get in touch!
                </h3>
                <p className="text-grayLight">
                    I’m currently looking for a stage in a company and collaborations,
                    to grow my skills and work with a team on new projects.
                    <br/> 
                    For job opportunities contact me at:
                </p>
                <ul className="text-grayLight">
                    <li>giuliadev95@gmail.com</li>
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