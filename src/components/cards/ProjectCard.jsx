import Link from "next/link"

export default function ProjectCard({imgSource, title, body, stack, alt, github, demo, description}) {

  return (
    <>
        <div className="flex flex-col items-start justify-start content-start md:flex-row gap-6 p-4 border-b border-gray-200">
            <img
                src={imgSource}
                alt={alt}
                width={400}
                height="auto"
                className="rounded-2xl shadow-md"
            />

            <div className="flex flex-col items-start justify-between flex-1">
                {/* Title & Body */}
                <ul className="flex flex-col items-start justify-start gap-2">
                    <li className="font-bold text-xl">
                        {title}
                    </li>
                    <li className="text-lightGrey text-lg font-semibold">
                        {body}
                    </li>
                </ul>

                {/* Tech Stack */}
                <ul className="flex flex-wrap items-center justify-start gap-2 mt-2">
                    {stack.map((item, index) => (
                        <li
                        key={index}
                        className="inline-block rounded-full border border-black bg-black px-3 py-1 text-xs font-semibold text-white"
                        >
                        {item}
                        </li>
                    ))}
                </ul>

                {/* Links */}
                <div className="flex gap-4 justify-between items-center mt-4">
                    {github && demo && (
                        <div className="flex gap-2">
                            <Link
                                href={github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="py-1 px-4 bg-lightGreen text-white border-darkGreen rounded-2xl"
                            >
                                Codice
                            </Link>
                            <Link
                                href={demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="py-1 px-4 bg-lightGreen text-white border-darkGreen rounded-2xl"
                            >
                                Live
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>

        {/* Description */}
        {description && (
            <div className="mt-6">
                <h3 className="font-semibold text-lg mb-2">Descrizione</h3>

                {Array.isArray(description) ? (
                    <ul className="list-disc list-inside space-y-2 text-base md:text-lg font-normal text-lightGrey leading-relaxed">
                        {description.map((item, index) => (
                        <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
                        ))}
                    </ul>
                ) : (
                    <p className="text-base md:text-lg font-normal text-lightGrey leading-relaxed">
                        {description}
                    </p>
                )}
            </div>
        )}
    </>
  )
}
