import { useState } from "react";
import { projects } from "../../data/projects";
import ProjectCard from "../ui/ProjectCard";
import SectionHeading from "../ui/SectionHeading";

export default function Projects() {
  const [filter, setFilter] = useState("all");

  const categories = [
    { label: "All Projects", value: "all" },
    { label: "Fullstack MERN", value: "Fullstack MERN" },
    { label: "Frontend UI", value: "Frontend UI" },
    { label: "Backend & API", value: "Backend & API" }
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section id="projects" className="py-16 md:py-24 border-b border-slate-800 scroll-mt-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
        <SectionHeading
          badge="Portfolio"
          title="Featured Work & Projects"
          subtitle="Real-world applications showcasing fullstack architecture, responsive interfaces, and clean code."
        />

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-10 md:mb-12">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setFilter(cat.value)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                filter === cat.value
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                  : "bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-700/60"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
