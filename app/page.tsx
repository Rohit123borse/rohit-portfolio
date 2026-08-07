// import { About } from "@/sections/about";
import { Contact } from "@/sections/contact";
import { Experience } from "@/sections/experience";
import { Footer } from "@/sections/footer";
import { Hero } from "@/sections/Hero";
import { Projects } from "@/sections/projects";
import { Skills } from "@/sections/skills";

export default function Home() {
  return (
    <div className="min-h-screen w-full">
      <Hero />
      {/* <About /> */}
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}