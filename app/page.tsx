import { About } from "@/sections/about";
import { Contact } from "@/sections/contact";
import { Experience } from "@/sections/experience";
import { Footer } from "@/sections/footer";
import { Hero } from "@/sections/Hero";
import { Projects } from "@/sections/projects";
import { Skills } from "@/sections/skills";

export default function Home() {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 py-24 sm:px-8 lg:px-12">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
