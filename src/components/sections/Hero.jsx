import { ArrowRight, Github, Mail, Sparkles, Terminal } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="pt-10 md:pt-16 pb-16 md:pb-24 border-b border-slate-800">
      {/* Availability Pill */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-700/50 text-emerald-300 text-xs font-semibold mb-6">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        Available for fullstack projects & opportunities
      </div>

      {/* Main Headline */}
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
        Building scalable fullstack apps with{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400">
          modern MERN architecture
        </span>
        .
      </h1>

      {/* Intro paragraph */}
      <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-3xl leading-relaxed">
        I&apos;m <span className="font-semibold text-white">Shreejal Pradhan</span>, a MERN-Stack Developer focused on building clean, high-performance web applications. From complex multi-vendor marketplaces to responsive client interfaces, I turn ideas into reliable software.
      </p>

      {/* CTAs */}
      <div className="mt-8 flex flex-wrap items-center gap-4">
        <a
          href="#projects"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-all shadow-lg shadow-indigo-600/25 hover:shadow-indigo-600/40"
        >
          Explore Projects
          <ArrowRight className="w-4 h-4" />
        </a>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white font-medium text-sm border border-slate-700 transition-all"
        >
          <Mail className="w-4 h-4 text-indigo-400" />
          Get in Touch
        </a>
        <a
          href="https://github.com/pradhanshreejal0"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-4 py-3 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800/80 text-sm font-medium transition-all"
        >
          <Github className="w-4 h-4" />
          GitHub
        </a>
      </div>

      {/* Quick Specs Highlight Cards */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-slate-800/80">
        <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-800">
          <div className="flex items-center gap-2 text-indigo-400 text-sm font-semibold mb-1">
            <Terminal className="w-4 h-4" />
            Core Stack
          </div>
          <p className="text-sm text-slate-200 font-medium">
            MongoDB, Express, React 19, Node.js
          </p>
        </div>

        <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-800">
          <div className="flex items-center gap-2 text-indigo-400 text-sm font-semibold mb-1">
            <Sparkles className="w-4 h-4" />
            UI Styling
          </div>
          <p className="text-sm text-slate-200 font-medium">
            Tailwind CSS v4 & Responsive Design
          </p>
        </div>

        <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-800">
          <div className="flex items-center gap-2 text-indigo-400 text-sm font-semibold mb-1">
            <ArrowRight className="w-4 h-4" />
            Engineering Focus
          </div>
          <p className="text-sm text-slate-200 font-medium">
            Clean code, REST APIs & High Performance
          </p>
        </div>
      </div>
    </section>
  );
}
