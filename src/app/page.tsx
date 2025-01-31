import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="absolute top-[50px] min-w-[100%] mx-auto">
      <Hero/>
      <About/>
      <Projects/>
      <Contact/>
    </main>
  );
}
