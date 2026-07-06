import React from "react";
import { ACADEMIC_STATS, SKILL_CATEGORIES } from "../types";
import { Award, BookOpen, Layers, Users } from "lucide-react";

export default function About() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
      {/* Narrative & Skills */}
      <div className="lg:col-span-8 bg-[#111112] border border-white/5 rounded-2xl p-6 md:p-8 shadow-sm flex flex-col justify-between">
        <div>
          <h3 className="text-2xl font-display font-semibold tracking-tight text-slate-100 mb-4">
            Research & Bio
          </h3>
          <div className="space-y-4 text-slate-300 text-sm md:text-base leading-relaxed">
            <p>
              I hold a <strong className="text-accent-blue font-semibold">Ph.D. in Computer Science</strong> from Virginia Commonwealth University (VCU), where my research centered at the intersection of <strong className="text-accent-blue font-semibold">Network Science, Graph Neural Networks (GNNs), and Clinical Machine Learning</strong>. My doctoral dissertation, advised by Dr. Preetam Ghosh, formulated innovative machine learning architectures leveraging Patient Similarity Networks (PSNs) and clinical temporality to predict chronic disease trajectories and optimize critical hospital resource allocation.
            </p>
            <p>
              Over the last decade, I have served as a <strong className="text-slate-100 font-semibold">Senior Lecturer</strong> at the University of Thi-Qar, leading courses in AI, network theory, and software development, and mentoring hundreds of undergraduate students. My software engineering roots span from robust full-stack platforms to specialized mathematical solvers and complex simulation environments.
            </p>
            <p>
              My current research efforts focus on advancing <strong className="text-accent-blue font-semibold">precision medicine</strong>. By translating complex, multi-modal electronic health records (EHRs like MIMIC-III) into interconnected graph structures, I deploy Graph Neural Networks (GNNs) to forecast ICU length of stay, survival coefficients, and therapeutic outcomes with superior transparency and predictive power.
            </p>
          </div>
        </div>

        {/* Technical Skills Catalog */}
        <div className="mt-8 pt-6 border-t border-white/5">
          <h4 className="text-xs font-mono tracking-wider text-slate-500 uppercase mb-4">
            Technical & Research Capabilities
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SKILL_CATEGORIES.map((category, idx) => (
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
        {/* Quick Stats Grid with Custom Sophisticated Dark Background and Gold Accents */}
        <div className="bg-[#161618] text-[#F0F0F0] rounded-2xl p-6 md:p-8 shadow-sm flex-1 flex flex-col justify-between border border-white/5">
          <div>
            <span className="text-[10px] font-mono tracking-widest text-accent-blue uppercase block mb-1">
              Scholarly Footprint
            </span>
            <h3 className="text-xl font-display font-bold">Academic Impact</h3>
          </div>

          <div className="space-y-6 my-6">
            {ACADEMIC_STATS.map((stat, sIdx) => (
              <div key={sIdx} className="border-l-2 border-accent-blue/40 pl-4 py-0.5">
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
            <Award className="w-3.5 h-3.5 text-accent-emerald" />
            <span>Updated with latest Google Scholar metrics</span>
          </div>
        </div>
      </div>
    </div>
  );
}
