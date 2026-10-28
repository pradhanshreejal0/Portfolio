export default function SkillBadge({ name, level, note }) {
  return (
    <div className="group relative bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 hover:border-indigo-500/60 rounded-xl p-3.5 transition-all duration-200 shadow-sm hover:shadow-indigo-500/10 hover:shadow-md">
      <div className="flex items-center justify-between gap-2">
        <span className="font-medium text-slate-200 group-hover:text-white text-sm md:text-base transition-colors">
          {name}
        </span>
        {level && (
          <span className="text-[11px] font-medium text-indigo-400 bg-indigo-950/60 border border-indigo-800/40 px-2 py-0.5 rounded-md">
            {level}
          </span>
        )}
      </div>
      {note && (
        <p className="text-xs text-slate-400 mt-1 line-clamp-1 group-hover:text-slate-300 transition-colors">
          {note}
        </p>
      )}
    </div>
  );
}
