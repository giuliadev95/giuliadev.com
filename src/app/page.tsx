import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

export default function Home() {
  return (
  <main className=" pt-[80px] min-w-[100%] mx-auto">
      <Hero/>
      <About/>
      <Experience/>
      <Projects/>
      <Education/>
      <Contact/>
</main>
  );
}
