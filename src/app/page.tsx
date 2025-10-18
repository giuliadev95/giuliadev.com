import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

export default function Home() {
  return (
  <main className=" pt-[80px] min-w-[100%] mx-auto">
      <Hero/>
      <About/>
      <Projects/>
      <Education/>
      <Contact/>
</main>
  );
}
