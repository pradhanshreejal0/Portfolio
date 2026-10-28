import { useState, useEffect } from "react";
import {
  User,
  FolderGit2,
  Wrench,
  Mail,
  Terminal,
  Sparkles
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../ui/BrandIcons";

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState("hero");

  const navItems = [
    { label: "Overview", href: "#hero", icon: Terminal, id: "hero" },
    { label: "About", href: "#about", icon: User, id: "about" },
    { label: "Projects", href: "#projects", icon: FolderGit2, id: "projects" },
    { label: "Skills", href: "#skills", icon: Wrench, id: "skills" },
    { label: "Contact", href: "#contact", icon: Mail, id: "contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "projects", "skills", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <aside
      id="sidebar"
      className="w-72 bg-slate-900 border-r border-slate-800 flex flex-col justify-between p-6 h-screen sticky top-0 shrink-0"
    >
      <div>
        {/* Profile Card */}
        <div className="text-center pb-6 border-b border-slate-800">
          <div className="relative inline-block mx-auto mb-4">
            <div className="w-24 h-24 rounded-2xl bg-gradient-to-tr from-indigo-600 to-purple-500 p-0.5 shadow-lg shadow-indigo-500/20">
              <div className="w-full h-full bg-slate-900 rounded-[14px] flex items-center justify-center text-white font-extrabold text-2xl tracking-wider">
                SP
              </div>
            </div>
            <span className="absolute bottom-1 right-1 w-4 h-4 bg-emerald-500 border-2 border-slate-900 rounded-full" />
          </div>

          <h2 className="text-xl font-bold text-white tracking-tight">
            Shreejal Pradhan
          </h2>
          <p className="text-xs font-semibold uppercase tracking-wider text-indigo-400 mt-1">
            MERN-Stack Developer
          </p>
          <p className="text-xs text-slate-400 mt-1.5 line-clamp-2">
            Building reliable fullstack web apps & REST APIs
          </p>
        </div>

        {/* Navigation Links */}
        <nav className="mt-6 space-y-1.5">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  isActive
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                    : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/80"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-white" : "text-slate-400"}`} />
                {item.label}
              </a>
            );
          })}
        </nav>
      </div>

      {/* Flagship Callout & Social Footer */}
      <div className="pt-6 border-t border-slate-800 space-y-4">
        {/* Foundry Callout */}
        <a
          href="https://foundry-ruby.vercel.app"
          target="_blank"
          rel="noreferrer"
          className="group block p-3 rounded-xl bg-slate-800/60 hover:bg-slate-800 border border-amber-500/30 hover:border-amber-500/60 transition"
        >
          <div className="flex items-center justify-between text-xs font-bold text-amber-400 mb-1">
            <span className="inline-flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5" />
              Foundry Live
            </span>
            <span className="text-[10px] bg-amber-950/80 px-1.5 py-0.5 rounded text-amber-300">
              Demo
            </span>
          </div>
          <p className="text-xs text-slate-400 group-hover:text-slate-300">
            Multi-vendor e-commerce platform
          </p>
        </a>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-3 text-slate-400">
          <a
            href="https://github.com/pradhanshreejal0"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="p-2 rounded-lg hover:bg-slate-800 hover:text-white transition"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="p-2 rounded-lg hover:bg-slate-800 hover:text-white transition"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href="mailto:pradhanshreejal0@gmail.com"
            aria-label="Email"
            className="p-2 rounded-lg hover:bg-slate-800 hover:text-white transition"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

        <p className="text-[11px] text-center text-slate-500">
          &copy; {new Date().getFullYear()} Shreejal Pradhan
        </p>
      </div>
    </aside>
  );
}
