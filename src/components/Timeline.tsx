import React from "react";
import { TIMELINE_EDUCATION, TIMELINE_EMPLOYMENT } from "../types";
import { GraduationCap, Briefcase, Calendar, Award, ExternalLink, ArrowUpRight } from "lucide-react";

export default function Timeline() {
  return (
    <section id="cv" className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
      {/* Education Timeline */}
      <div className="bg-[#111112] border border-white/5 rounded-2xl p-6 md:p-8 shadow-sm">
        <div className="flex items-center gap-2 mb-6">
          <div className="p-2 bg-accent-blue/10 text-accent-blue rounded-xl border border-accent-blue/20">
            <GraduationCap className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl font-display font-semibold text-slate-100">
              Academic Education
            </h3>
            <span className="text-xs text-slate-400 font-mono">Formal academic degrees</span>
          </div>
        </div>

        <div className="relative border-l-2 border-white/10 pl-6 ml-4 space-y-8">
          {TIMELINE_EDUCATION.map((edu) => (
            <div key={edu.id} className="relative group">
              {/* Timeline dot */}
              <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-[#111112] border-2 border-accent-blue ring-4 ring-[#0A0A0B] group-hover:bg-accent-blue transition-colors duration-200"></div>

              <div className="space-y-1.5">
                <span className="inline-flex items-center gap-1 text-[11px] font-mono font-bold text-accent-blue bg-accent-blue/10 border border-accent-blue/20 rounded-md px-2 py-0.5">
                  <Calendar className="w-3 h-3" /> {edu.year}
                </span>

                <h4 className="text-base font-display font-semibold text-slate-100 group-hover:text-accent-blue transition-colors duration-200">
                  {edu.title}
                </h4>

                <p className="text-xs font-semibold text-slate-400">
                  {edu.institution}
                </p>

                {edu.advisor && (
                  <p className="text-[11px] font-mono text-slate-500">
                    <span className="font-semibold text-slate-400 uppercase">Advisor:</span> {edu.advisor}
                  </p>
                )}

                <p className="text-xs text-slate-400 leading-relaxed pt-1">
                  {edu.description}
                </p>

                {edu.link && (
                  <div className="pt-2">
                    <a
                      href={edu.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] font-semibold text-accent-blue hover:underline cursor-pointer"
                    >
                      <span>View Ph.D. Dissertation</span> <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Employment Timeline */}
      <div className="bg-[#111112] border border-white/5 rounded-2xl p-6 md:p-8 shadow-sm">
        <div className="flex items-center gap-2 mb-6">
          <div className="p-2 bg-accent-teal/10 text-accent-teal rounded-xl border border-accent-teal/20">
            <Briefcase className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl font-display font-semibold text-slate-100">
              Academic Appointments
            </h3>
            <span className="text-xs text-slate-400 font-mono">Lecturing & software positions</span>
          </div>
        </div>

        <div className="relative border-l-2 border-white/10 pl-6 ml-4 space-y-8">
          {TIMELINE_EMPLOYMENT.map((emp) => (
            <div key={emp.id} className="relative group">
              {/* Timeline dot */}
              <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-[#111112] border-2 border-accent-teal ring-4 ring-[#0A0A0B] group-hover:bg-accent-teal transition-colors duration-200"></div>

              <div className="space-y-1.5">
                <span className="inline-flex items-center gap-1 text-[11px] font-mono font-bold text-accent-teal bg-accent-teal/10 border border-accent-teal/20 rounded-md px-2 py-0.5">
                  <Calendar className="w-3 h-3" /> {emp.year}
                </span>

                <h4 className="text-base font-display font-semibold text-slate-100 group-hover:text-accent-teal transition-colors duration-200">
                  {emp.title}
                </h4>

                <p className="text-xs font-semibold text-slate-400">
                  {emp.institution}
                </p>

                <p className="text-xs text-slate-400 leading-relaxed pt-1">
                  {emp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
