// Import components
import Link from "next/link";

export default function Projects() {
    return(
        <div className="flex flex-col items-center gap-8">
            {/** Projects */}
            <h2 id="projects" className="text-white font-bold text-3xl p-4 mb-8 scroll-mt-12">
                Projects
            </h2>
            
            {/** Tutor life - project container */}
            <div className="flex flex-col items-start gap-6">
                
                {/** Image with a link to the project page */}
                <Link 
                href={"https://blog-76ik.vercel.app/"}
                rel="noopener noreferrer"
                target="_blank"
                >
                    <div className="bg-[url('/tutorlife.png')] bg-cover bg-center w-[300px] h-[200px] md:w-[500px] md:h-[300px]
                                    lg:w-[600px] lg-[300px] rounded-lg border border-zinc-500">      
                    </div>
                </Link>

                {/* Title and Languages I used*/}
                <h3 className="text-grayLight text-2xl font-semibold mt-2">
                    Tutor life
                </h3>
                <div className="flex flex-wrap gap-2 max-w-[300px] md:max-w-[500px]">
                    <span className="px-4 py-1 text-sm rounded-full border border-grayLight text-grayLight">Sanity CMS</span>
                    <span className="px-4 py-1 text-sm rounded-full border border-grayLight text-grayLight">Next.js</span>
                    <span className="px-4 py-1 text-sm rounded-full border border-grayLight text-grayLight">React</span>
                    <span className="px-4 py-1 text-sm rounded-full border border-grayLight text-grayLight">Typescript</span>
                    <span className="px-4 py-1 text-sm rounded-full border border-grayLight text-grayLight">Tailwind</span>
                </div>

                {/** Description */}
                <p className="font-normal text-zinc-400 w-[300px] md:w-[500px]">
                    I created this fullstack blog to share personal tips on teaching online: 
                    I worked with Next.js and its integration with the headless CMS Sanity, 
                    which is based on Typescript and stores all my blog posts.
                    <br/>
                    <br/>
                    I got the chance to work with types and queries, to get a dynamic and more robust website.
                    <br/> <br/>

                    {/** Links to GitHub and Live Website */}
                    <span className="flex gap-4 text-sm flex-wrap">

                        {/** GitHub */}
                        <Link 
                        href={"https://github.com/giuliadev95/blog"}
                        rel="noopener, noreferrer"
                        target="_blank"
                        className="underline underline-offset-4 text-grayLight"
                        >
                        GitHub
                        </Link>

                        {/** Live website */}
                        <Link 
                        href={"https://blog-76ik.vercel.app/"}
                        rel="noopener, noreferrer"
                        target="_blank"
                        className="underline underline-offset-4 text-grayLight"
                        >
                        Live website
                        </Link>
                    </span>
                </p>
                
                <hr className="bg-slate-600 w-[100%] h-[1px] my-16"/>
            </div>

            {/** This personal website - project container */}
            <div className="flex flex-col items-start gap-6">
                {/** Image with a link to the project page */}
                <div className="bg-[url('/personal-website.png')] bg-cover bg-center w-[300px] h-[200px] md:w-[500px] md:h-[300px]
                                lg:w-[600px] lg-[300px] rounded-lg border border-zinc-500">  
                </div>

                {/* Title and Languages I used*/}
                <h3 className="text-grayLight text-2xl font-semibold mt-2">
                    This personal website
                </h3>
                <div className="flex flex-wrap gap-2  max-w-[300px] md:max-w-[500px]">
                    <span className="px-4 py-1 text-sm rounded-full border border-grayLight text-grayLight">Next.js</span>
                    <span className="px-4 py-1 text-sm rounded-full border border-grayLight text-grayLight">React</span>
                    <span className="px-4 py-1 text-sm rounded-full border border-grayLight text-grayLight">Typescript</span>
                    <span className="px-4 py-1 text-sm rounded-full border border-grayLight text-grayLight">Tailwind</span>
                </div>

                {/** Description */} 
                <p className="font-normal text-grayLight w-[300px] md:w-[500px]">
                    A simple portfolio website, built with Next.js. 
                    I consider this a milestone in my learning journey, as it gave me 
                    the opportunity to solidify my foundations, while also 
                    showing my learning journey.
                    <br/>
                    <br/>
                    I tried to get a simple and professional look: the mockups I created in Figma 
                    helped me clearly define the design before development, while keeping the project responsive.
                    <br/> <br/>

                    {/** Links to GitHub and Live Website */}
                    <span className="flex gap-4 text-sm flex-wrap">

                         {/** GitHub */}
                        <Link 
                        href={"https://github.com/giuliadev95/portfolio-website"}
                        rel="noopener, noreferrer"
                        target="_blank"
                        className="underline underline-offset-4 text-grayLight"
                        >GitHub
                        </Link>

                        {/** Live website */}
                        <Link 
                        href={"/"}
                        // className="py-2 px-4 border border-grayLight rounded-lg"
                        className="underline underline-offset-4 text-grayLight"
                        >Live website
                        </Link>
                    </span>
                </p>

                <hr className="bg-slate-600 w-[100%] h-[1px] my-16"/>
            </div>

             {/** FAQ - project container */}
             <div className="flex flex-col items-start gap-6">

                {/** Image with a link to the project page */}
                <Link 
                    href={"https://minimalist-static-portfolio.netlify.app/"}
                    rel="noopener, noreferrer"
                    target="_blank">
                    <div className="bg-[url('/minimalist-portfolio.png')] bg-cover bg-center w-[300px] h-[200px] md:w-[500px] md:h-[300px]
                                    lg:w-[600px] lg-[300px] rounded-lg">
                    </div>
                </Link>      

                {/* Title and Languages I used*/}
                <h3 className="text-grayLight text-2xl font-semibold mt-2">
                    Minimalist Portfolio
                </h3>
                <div className="flex flex-wrap gap-2  max-w-[300px] md:max-w-[500px]">
                    <span className="px-4 py-1 text-sm rounded-full border border-grayLight text-grayLight">HTML</span>
                    <span className="px-4 py-1 text-sm rounded-full border border-grayLight text-grayLight">CSS</span>
                    <span className="px-4 py-1 text-sm rounded-full border border-grayLight text-grayLight">JavaScript</span>
                </div>

                {/** Description */}
                <p className="font-normal text-grayLight w-[300px] md:w-[500px]">
                    This is a static portfolio page I built to test my responsive design skills, 
                    focusing on CSS flexbox and grid.
                    <br/>
                    <br/>
                    Also, I did my first tests with DOM manipulation: using JavaScript, 
                    I implemented the opening of the mobile menu and replaced the images 
                    of the projects when resizing the web page.
                    <br/> <br/>

                    {/** Links to GitHub and Live Website */}
                    <span className="flex gap-4 text-sm flex-wrap">

                        {/* GitHub */}
                        <Link 
                        href={"https://github.com/giuliadev95/minimalist-portfolio-website"}
                        rel="noopener, noreferrer"
                        target="_blank"
                        className="underline underline-offset-4 text-grayLight"
                        >GitHub
                        </Link>

                        {/* Live website */}
                        <Link 
                        href={"https://minimalist-static-portfolio.netlify.app/"}
                        rel="noopener, noreferrer"
                        target="_blank"
                        className="underline underline-offset-4 text-grayLight"
                        >Live website
                        </Link>
                    </span>
                </p>
                <hr className="bg-slate-600 w-[100%] h-[1px] my-12"/>
            </div>
            
        </div>
    )
}