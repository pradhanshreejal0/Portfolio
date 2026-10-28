import { ExternalLink, Github, Sparkles, CheckCircle2 } from "lucide-react";

export default function ProjectCard({ project }) {
  const {
    title,
    subtitle,
    description,
    tags = [],
    highlights = [],
    liveUrl,
    githubUrl,
    featured,
    category
  } = project;

  return (
    <article
      className={`rounded-2xl border transition-all duration-300 flex flex-col justify-between overflow-hidden ${
        featured
          ? "bg-gradient-to-b from-slate-800/90 to-slate-900 border-amber-500/40 shadow-lg shadow-amber-500/5 hover:border-amber-500/70"
          : "bg-slate-800/60 hover:bg-slate-800 border-slate-700/80 hover:border-slate-600 shadow-sm hover:shadow-md"
      }`}
    >
      <div className="p-6 md:p-7">
        {/* Top Badges */}
        <div className="flex items-center justify-between gap-3 mb-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 bg-slate-900/80 px-2.5 py-1 rounded-md border border-slate-700/60">
            {category}
          </span>
          {featured && (
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-300 bg-amber-950/60 border border-amber-500/40 px-2.5 py-1 rounded-full">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              Featured Flagship
            </span>
          )}
        </div>

        {/* Title & Subtitle */}
        <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-indigo-300 transition-colors">
          {title}
        </h3>
        <p className="text-sm font-medium text-indigo-400 mt-1 mb-3">
          {subtitle}
        </p>

        {/* Description */}
        <p className="text-sm md:text-base text-slate-300 leading-relaxed mb-5">
          {description}
        </p>

        {/* Key Highlights */}
        {highlights.length > 0 && (
          <div className="mb-6 space-y-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Key Capabilities
            </h4>
            <ul className="space-y-1.5">
              {highlights.map((item, idx) => (
                <li
                  key={idx}
                  className="text-xs md:text-sm text-slate-300 flex items-start gap-2"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-700/60">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="text-xs font-medium text-slate-300 bg-slate-900/90 border border-slate-700/50 px-2.5 py-1 rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Action Footer */}
      <div className="p-6 pt-0 flex flex-wrap items-center gap-3">
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold transition-all shadow-md shadow-indigo-600/20"
          >
            <ExternalLink className="w-4 h-4" />
            Live Demo
          </a>
        )}
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-700 hover:bg-slate-600 text-slate-200 hover:text-white text-sm font-medium transition-all"
          >
            <Github className="w-4 h-4" />
            Source Code
          </a>
        )}
      </div>
    </article>
  );
}
