export default function SectionHeading({ title, subtitle, badge }) {
  return (
    <div className="mb-10">
      {badge && (
        <span className="inline-block text-xs font-semibold uppercase tracking-wider text-indigo-400 bg-indigo-950/60 border border-indigo-800/60 px-3 py-1 rounded-full mb-3">
          {badge}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-extrabold text-slate-100 tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 text-base md:text-lg text-slate-400 max-w-2xl">
          {subtitle}
        </p>
      )}
      <div className="mt-4 h-1 w-12 bg-indigo-500 rounded-full" />
    </div>
  );
}
