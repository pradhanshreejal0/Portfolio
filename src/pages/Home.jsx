import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Projects from "../components/sections/Projects";
import Skills from "../components/sections/Skills";
import Contact from "../components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <footer className="py-12 border-t border-slate-800 text-center text-xs text-slate-500">
        <p className="font-medium text-slate-400">
          Designed & Built by Shreejal Pradhan
        </p>
        <p className="mt-1">
          Built with React 19, Tailwind CSS v4, and Vite.
        </p>
      </footer>
    </>
  );
}
