// "use client";

// import { AboutContent } from "@/components/common/AboutContent";
// import { AboutImage } from "@/components/common/AboutImage";

// export function About() {
//   return (
//     <section id="about" className="relative mx-auto mt-8 w-full max-w-6xl rounded-[2rem] border border-white/40 bg-white/70 px-6 py-16 shadow-[0_20px_80px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-zinc-800/70 dark:bg-zinc-900/70 sm:px-8 lg:px-12 lg:py-20">
//       <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.16),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(167,139,250,0.14),_transparent_30%)]" />
//       <div className="relative grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
//         <AboutImage />
//         <AboutContent />
//       </div>
//     </section>
//   );
// }


//new code
"use client"; import { AboutContent } from "@/components/common/AboutContent"; import { AboutImage } from "@/components/common/AboutImage"; import { SectionSurface } from "@/components/common/SectionSurface"; export function About() { return ( <SectionSurface id="about" className="mt-8"> <div className="relative grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]"> <AboutImage /> <AboutContent /> </div> </SectionSurface> ); }