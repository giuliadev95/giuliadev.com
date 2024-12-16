/* component that passes ALL PROPS TO THE tutorlife/page.tsx 

- How to build a prop? ✅

- What do I need for my project description? 
I configure this ProjectDescription.tsx COMPONENT to:
• Accepts specific props to configure each project:
• image: contains the url and link of the background image.
• title: the title of the project.
• tags: an array with the languages/tools used.
• description: a description of the project.
• links: array of links, e.g. GitHub and live demos.
• Dynamically renders each project with a consistent design.

*/


// import Link from "next/link";

// // Typescript Interface
// interface ProjectDescriptionProps {
//     image: {
//         url: string; // url wallpaper image
//         link: string; // Link to project/page.tsx 
//     };
//     title: string; // project title
//     tags: string[]; // languages and tools used in the project
//     description: string; // project description
//     links: { name: string; href: string } []; // two links to GitHub and the Live website
// }

//     const ProjectDescription: React.FC<ProjectDescriptionProps> = ({ image, title, tags, description, links}) => {
//         return (
//             <div className="flex flex-col items-center gap-6">
//                 <Link href={image.link}>
//                     <div 
//                         className="bg-cover bg-center w-[300px] h-[200px] md:w-[500px]
//                         md:h-[300px] lg:w-[600px] lg:h-[300px] rounded-lg"                        
//                         style={{ backgroundImage: `url( ${image.url})`}}
//                         >        
//                     </div>
//                 </Link>

//                 <h3 className="text-grayLight text-2xl font-semibold mt-2">
//                     {title}
//                 </h3>

//                 <div className="flex flex-wrap gap-2 max-w-[300px] md:max-w-[500px] ">
//                     {tags.map((tag, index)=> (

//                     <span
//                     key={index}
//                     className="px-4 py-1 text-sm rounded-full border border-grayLight text-grayLight"
//                     >
//                         {tag}
//                     </span>
//                 ))}
//                 </div>
//                 <p className="font-normal text-zinc-400 w-[300px] md:w-[500px]">
//                     {description}
//                 </p>

//                 <div className="flex gap-4 text-sm flex-wrap">
//                     {links.map((linkItem, index)=> (
//                         <Link
//                         key = {index} href = {linkItem.href} 
//                         className="underline underline-offset-4 text-grayLight"
//                         >
//                             {linkItem.name}
//                         </Link>
//                     ))}
//                 </div>
//                 {/* <hr className="bg-slate-600 w-[100%] h-[1px] my-16" />   */}
//                 <Link href="/#projects" className="mt-8 text-yellow underline underline-offset-4">
//                     Back to Projects
//                 </Link>
//             </div> 
//         );
//     };

//     export default ProjectDescription;
  
  