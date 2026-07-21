import React from "react";
import { GraduationCap, Briefcase, Calendar, ExternalLink } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function Timeline() {
  const { t, isRTL } = useLanguage();

  const educationEvents = [
    {
      id: "edu-phd",
      year: "2025",
      title: t.timeline.eduPhdTitle,
      institution: t.timeline.eduPhdInst,
      description: t.timeline.eduPhdDesc,
      advisor: "Dr. Preetam Ghosh",
      link: "https://scholarscompass.vcu.edu/etd/8136/",
    },
    {
      id: "edu-msc",
      year: "2013",
      title: t.timeline.eduMscTitle,
      institution: t.timeline.eduMscInst,
      description: t.timeline.eduMscDesc,
      advisor: "Dr. Preetam Ghosh",
    },
    {
      id: "edu-bsc",
      year: "2005",
      title: t.timeline.eduBscTitle,
      institution: t.timeline.eduBscInst,
      description: t.timeline.eduBscDesc,
      advisor: "Dr. Emad Ali",
    },
  ];

  const employmentEvents = [
    {
      id: "emp-lecturer",
      year: "2013 — 2023",
      title: t.timeline.empLecturerTitle,
      institution: t.timeline.empLecturerInst,
      description: t.timeline.empLecturerDesc,
    },
    {
      id: "emp-programmer",
      year: "2005 — 2013",
      title: t.timeline.empProgrammerTitle,
      institution: t.timeline.empProgrammerInst,
      description: t.timeline.empProgrammerDesc,
    },
  ];

  return (
    <section id="cv" className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8 scroll-mt-24">
      {/* Education Timeline */}
      <div className="bg-[#111112] border border-white/5 rounded-2xl p-6 md:p-8 shadow-sm">
        <div className="flex items-center gap-2 mb-6">
          <div className="p-2 bg-accent-blue/10 text-accent-blue rounded-xl border border-accent-blue/20">
            <GraduationCap className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl font-display font-semibold text-slate-100">
              {t.timeline.eduTitle}
            </h3>
            <span className="text-xs text-slate-400 font-mono">{t.timeline.eduSubtitle}</span>
          </div>
        </div>

        <div className={`relative ${isRTL ? "border-r-2 pr-6 mr-4" : "border-l-2 pl-6 ml-4"} border-white/10 space-y-8`}>
          {educationEvents.map((edu) => (
            <div key={edu.id} className="relative group">
              {/* Timeline dot */}
              <div 
                className={`absolute ${isRTL ? "-right-[31px]" : "-left-[31px]"} top-1 w-4 h-4 rounded-full bg-[#111112] border-2 border-accent-blue ring-4 ring-[#0A0A0B] group-hover:bg-accent-blue transition-colors duration-200`}
              ></div>

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
                    <span className="font-semibold text-slate-400 uppercase">{t.timeline.advisorLabel}</span> {edu.advisor}
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
                      <span>{t.timeline.viewDissertation}</span> <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Experience Timeline */}
      <div className="bg-[#111112] border border-white/5 rounded-2xl p-6 md:p-8 shadow-sm">
        <div className="flex items-center gap-2 mb-6">
          <div className="p-2 bg-accent-teal/10 text-accent-teal rounded-xl border border-accent-teal/20">
            <Briefcase className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl font-display font-semibold text-slate-100">
              {t.timeline.expTitle}
            </h3>
            <span className="text-xs text-slate-400 font-mono">{t.timeline.expSubtitle}</span>
          </div>
        </div>

        <div className={`relative ${isRTL ? "border-r-2 pr-6 mr-4" : "border-l-2 pl-6 ml-4"} border-white/10 space-y-8`}>
          {employmentEvents.map((emp) => (
            <div key={emp.id} className="relative group">
              {/* Timeline dot */}
              <div 
                className={`absolute ${isRTL ? "-right-[31px]" : "-left-[31px]"} top-1 w-4 h-4 rounded-full bg-[#111112] border-2 border-accent-teal ring-4 ring-[#0A0A0B] group-hover:bg-accent-teal transition-colors duration-200`}
              ></div>

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
