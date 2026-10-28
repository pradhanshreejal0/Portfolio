import { skillCategories } from "../../data/skills";
import SkillBadge from "../ui/SkillBadge";
import SectionHeading from "../ui/SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="py-16 md:py-24 border-b border-slate-800 scroll-mt-6">
      <SectionHeading
        badge="Expertise"
        title="Technical Skills & Stack"
        subtitle="Tools, technologies, and frameworks I use to build scalable web applications."
      />

      <div className="space-y-10">
        {skillCategories.map((group, idx) => (
          <div key={idx} className="bg-slate-900/50 rounded-2xl p-6 border border-slate-800/80">
            <div className="mb-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-indigo-500" />
                {group.category}
              </h3>
              <p className="text-xs md:text-sm text-slate-400 mt-0.5">
                {group.description}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {group.skills.map((skill, sIdx) => (
                <SkillBadge
                  key={sIdx}
                  name={skill.name}
                  level={skill.level}
                  note={skill.note}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
