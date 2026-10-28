import SectionHeading from "../ui/SectionHeading";
import { Code2, Layers, Cpu } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 border-b border-slate-800 scroll-mt-6">
      <SectionHeading
        badge="Background"
        title="About Me"
        subtitle="Fullstack developer crafting reliable web applications with end-to-end precision."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Narrative */}
        <div className="lg:col-span-7 space-y-5 text-slate-300 leading-relaxed text-base">
          <p>
            Hello! I&apos;m <strong className="text-white">Shreejal Pradhan</strong>, a dedicated MERN-Stack Developer. I enjoy designing and engineering fullstack web applications that balance robust server architectures with intuitive, modern client experiences.
          </p>
          <p>
            My experience spans creating complete production-ready platforms like <strong className="text-indigo-300">Foundry</strong>—a multi-vendor e-commerce platform built with MongoDB, Express, React, and Node.js with a distinctive dark luxury interface—as well as reusable client libraries, RESTful services, and interactive dashboards.
          </p>
          <p>
            When I build software, I focus on write-once maintainability, thoughtful state management, clean database schema design with Mongoose, and seamless responsive behavior across devices.
          </p>
        </div>

        {/* Pillars / Values */}
        <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
          <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/80">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-lg bg-indigo-600/20 text-indigo-400">
                <Code2 className="w-5 h-5" />
              </div>
              <h4 className="font-semibold text-white text-sm">Fullstack Cohesion</h4>
            </div>
            <p className="text-xs text-slate-400">
              Connecting frontends seamlessly to robust REST APIs and secure backend services.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/80">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-lg bg-indigo-600/20 text-indigo-400">
                <Layers className="w-5 h-5" />
              </div>
              <h4 className="font-semibold text-white text-sm">Modular Architecture</h4>
            </div>
            <p className="text-xs text-slate-400">
              Reusable React components, decoupled data models, and clear separation of concerns.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/80">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-lg bg-indigo-600/20 text-indigo-400">
                <Cpu className="w-5 h-5" />
              </div>
              <h4 className="font-semibold text-white text-sm">Performance First</h4>
            </div>
            <p className="text-xs text-slate-400">
              Fast rendering, optimized bundle sizes with Vite, and responsive mobile-first layouts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
