// import { About } from "@/sections/about";
import { Contact } from "@/sections/contact";
// import { Experience } from "@/sections/experience";  //not needed Experience
import { Footer } from "@/sections/footer";
import { Hero } from "@/sections/Hero";
import { Projects } from "@/sections/projects";
import { Skills } from "@/sections/skills";
import { Journey } from "@/sections/Journey";
import { Certifications } from "@/sections/Certifications";
import { ImpactStats } from "@/sections/ImpactStats";

export default function Home() {
  return (
    <div className="min-h-screen w-full">
      <Hero />
       <ImpactStats />

      {/* <About /> */}
      <Skills />
      <Journey />
      {/* <Experience /> */}   
      <Projects />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
}