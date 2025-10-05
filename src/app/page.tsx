import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";

export default function Home() {
  return (
  <main className=" pt-[80px] min-w-[100%] mx-auto">
    {/**
      * components here
      * <About : =>  (<Button/>) />
      * <Projects.tsx/>
      * <Footer => ( <Contacts/>)/>
      <p className="font-sans font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem delectus mollitia a cumque earum nesciunt, dignissimos, pariatur alias omnis laborum sequi sed non nostrum soluta qui repellendus blanditiis? Vel, veritatis?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem delectus mollitia a cumque earum nesciunt, dignissimos, pariatur alias omnis laborum sequi sed non nostrum soluta qui repellendus blanditiis? Vel, veritatis?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem delectus mollitia a cumque earum nesciunt, dignissimos, pariatur alias omnis laborum sequi sed non nostrum soluta qui repellendus blanditiis? Vel, veritatis?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem delectus mollitia a cumque earum nesciunt, dignissimos, pariatur alias omnis laborum sequi sed non nostrum soluta qui repellendus blanditiis? Vel, veritatis?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem delectus mollitia a cumque earum nesciunt, dignissimos, pariatur alias omnis laborum sequi sed non nostrum soluta qui repellendus blanditiis? Vel, veritatis?</p> 
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem delectus mollitia a cumque earum nesciunt, dignissimos, pariatur alias omnis laborum sequi sed non nostrum soluta qui repellendus blanditiis? Vel, veritatis?</p> 
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem delectus mollitia a cumque earum nesciunt, dignissimos, pariatur alias omnis laborum sequi sed non nostrum soluta qui repellendus blanditiis? Vel, veritatis?</p> 
      */}
      <Hero/>
      <About/>
      <Experience/>
      <Projects/>
</main>
  );
}
