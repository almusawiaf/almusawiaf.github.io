import React from "react";
import { Award } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function About() {
  const { t, isRTL } = useLanguage();

  const skillCategories = [
    {
      title: t.skills.aiMl,
      skills: ["Graph Neural Networks (GNNs)", "Deep Learning", "Supervised/Unsupervised Learning", "PyTorch", "Scikit-Learn", "Patient Similarity Networks"],
    },
    {
      title: t.skills.netSci,
      skills: ["Complex Network Modeling", "Link Prediction Algorithms", "Graph Theory", "Motif-based Attachment", "Network Vulnerability Analysis", "Social Network Analysis"],
    },
    {
      title: t.skills.dataSci,
      skills: ["Python", "SQL & NoSQL Databases", "Big Data (Hadoop)", "R", "Feature Engineering", "Heterogeneous Data Integration"],
    },
    {
      title: t.skills.softwareEng,
      skills: ["C / C++", "Java", "Node.js", "Angular", "PHP", "Git / Version Control", "Blender (3D Modeling)"],
    },
  ];

  const academicStats = [
    {
      label: t.stats.totalPubsLabel,
      value: t.stats.totalPubsValue,
      description: t.stats.totalPubsDesc,
    },
    {
      label: t.stats.citationsLabel,
      value: t.stats.citationsValue,
      description: t.stats.citationsDesc,
    },
    {
      label: t.stats.hIndexLabel,
      value: t.stats.hIndexValue,
      description: t.stats.hIndexDesc,
    },
    {
      label: t.stats.experienceLabel,
      value: t.stats.experienceValue,
      description: t.stats.experienceDesc,
    },
  ];

  return (
    <div id="bio" className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8 scroll-mt-24">
      {/* Narrative & Skills */}
      <div className="lg:col-span-8 bg-[#111112] border border-white/5 rounded-2xl p-6 md:p-8 shadow-sm flex flex-col justify-between">
        <div>
          <h3 className="text-2xl font-display font-semibold tracking-tight text-slate-100 mb-4">
            {t.about.title}
          </h3>
          <div className="space-y-4 text-slate-300 text-sm md:text-base leading-relaxed">
            <p>{t.about.p1}</p>
            <p>{t.about.p2}</p>
            <p>{t.about.p3}</p>
          </div>
        </div>

        {/* Technical Skills Catalog */}
        <div className="mt-8 pt-6 border-t border-white/5">
          <h4 className="text-xs font-mono tracking-wider text-slate-500 uppercase mb-4">
            {t.about.capabilitiesTitle}
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories.map((category, idx) => (
              <div key={idx} className="space-y-2">
                <h5 className="text-xs font-display font-semibold text-slate-300 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-blue"></span>
                  {category.title}
                </h5>
                <div className="flex flex-wrap gap-1">
                  {category.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-[11px] font-sans bg-[#161618] text-slate-300 border border-white/5 px-2 py-1 rounded-md font-medium hover:bg-white/5 transition-colors duration-150"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Visual Stats Column */}
      <div className="lg:col-span-4 flex flex-col gap-6">
        <div className="bg-[#161618] text-[#F0F0F0] rounded-2xl p-6 md:p-8 shadow-sm flex-1 flex flex-col justify-between border border-white/5">
          <div>
            <span className="text-[10px] font-mono tracking-widest text-accent-blue uppercase block mb-1">
              {t.stats.footprintTitle}
            </span>
            <h3 className="text-xl font-display font-bold">{t.stats.footprintHeading}</h3>
          </div>

          <div className="space-y-6 my-6">
            {academicStats.map((stat, sIdx) => (
              <div 
                key={sIdx} 
                className={`${isRTL ? "border-r-2 pr-4" : "border-l-2 pl-4"} border-accent-blue/40 py-0.5`}
              >
                <span className="text-2xl font-mono font-bold text-[#F0F0F0] tracking-tight">
                  {stat.value}
                </span>
                <span className="text-xs font-sans text-slate-400 block font-medium">
                  {stat.label}
                </span>
                <span className="text-[10px] text-slate-500 block mt-0.5 leading-tight">
                  {stat.description}
                </span>
              </div>
            ))}
          </div>

          <div className="text-[11px] font-mono text-slate-400 border-t border-white/5 pt-4 flex items-center gap-1.5">
            <Award className="w-3.5 h-3.5 text-accent-emerald shrink-0" />
            <span>{t.stats.updatedMetric}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
