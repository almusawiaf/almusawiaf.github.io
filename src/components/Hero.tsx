import React, { useState } from "react";
import { Mail, GraduationCap, Link2, BookOpen, ExternalLink, Calendar, MapPin } from "lucide-react";

export default function Hero() {
  const [imgError, setImgError] = useState(false);

  return (
    <section className="relative overflow-hidden bg-[#111112] border border-white/5 rounded-3xl p-6 md:p-12 shadow-sm mb-8">
      {/* Subtle Grid Accent Pattern */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none select-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="24" height="24" patternUnits="userSpaceOnUse">
              <path d="M 24 0 L 0 0 0 24" fill="none" stroke="#fff" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-12">
        {/* Profile Image & Avatar */}
        <div className="relative group shrink-0">
          <div className="absolute -inset-1.5 bg-gradient-to-tr from-accent-blue/20 to-accent-teal/20 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative w-40 h-40 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-white/10 shadow-xl bg-[#161618] flex items-center justify-center">
            {!imgError ? (
              <img
                src="/ahmad.jpg"
                alt="Dr. Ahmad F. Al Musawi"
                onError={() => setImgError(true)}
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-[#121214] to-[#0A0A0B] border border-white/5 flex flex-col items-center justify-center text-[#F0F0F0] relative">
                <span className="font-display font-bold text-4xl tracking-tight text-[#C5A059]">AM</span>
                <span className="text-[9px] font-mono tracking-widest uppercase text-slate-400 mt-1">Computer Science</span>
                
                {/* Decorative network nodes in sophisticated gold */}
                <div className="absolute top-4 left-6 w-2 h-2 rounded-full bg-accent-blue opacity-70"></div>
                <div className="absolute bottom-6 right-8 w-1.5 h-1.5 rounded-full bg-accent-teal opacity-70"></div>
                <div className="absolute top-10 right-4 w-1 h-1 rounded-full bg-accent-emerald opacity-60"></div>
              </div>
            )}
          </div>
        </div>

        {/* Hero Copy */}
        <div className="flex-1 text-center md:text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-accent-blue/10 text-accent-blue text-xs font-mono font-medium rounded-full mb-4 border border-accent-blue/20 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-teal animate-pulse"></span>
            <span>Available for Collaborations</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tight text-white leading-[1.1]">
            Ahmad F. Al Musawi, Ph.D.
          </h1>
          
          <p className="text-lg md:text-xl font-medium text-slate-300 mt-2 font-sans">
            Computer Scientist & Senior Researcher
          </p>
          
          <p className="text-slate-400 text-sm md:text-base mt-3 max-w-2xl leading-relaxed">
            Specializing in <strong className="text-accent-blue font-semibold">Network Science</strong>, <strong className="text-accent-blue font-semibold">Graph Neural Networks (GNNs)</strong>, and <strong className="text-accent-blue font-semibold">Clinical Machine Learning</strong>. 
            Dr. Al Musawi models medical records and biological mechanisms as complex topologies to forecast 
            critical disease progressions and optimize healthcare systems.
          </p>

          {/* Quick Details */}
          <div className="flex flex-wrap justify-center md:justify-start gap-y-2 gap-x-6 mt-5 text-xs font-mono text-slate-400">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-slate-500" />
              <span>Nasiriyah, Thi Qar, Iraq</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-slate-500" />
              <span>Ph.D. Graduate, VCU 2025</span>
            </div>
          </div>

          {/* Email Contacts */}
          <div className="mt-5 flex flex-col sm:flex-row justify-center md:justify-start gap-3 sm:gap-6 text-sm text-slate-400 border-t border-white/5 pt-4">
            <a
              href="mailto:almusawiaf@vcu.edu"
              className="flex items-center justify-center md:justify-start gap-2 hover:text-accent-blue transition-colors duration-200 font-mono text-xs"
            >
              <Mail className="w-4 h-4 text-slate-500 shrink-0" />
              <span>almusawiaf@vcu.edu</span>
            </a>
            <a
              href="mailto:almusawiaf@utq.edu.iq"
              className="flex items-center justify-center md:justify-start gap-2 hover:text-accent-blue transition-colors duration-200 font-mono text-xs"
            >
              <Mail className="w-4 h-4 text-slate-500 shrink-0" />
              <span>almusawiaf@utq.edu.iq</span>
            </a>
          </div>

          {/* Professional Links */}
          <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-2.5">
            <a
              href="https://scholar.google.com/citations?user=QJYj-n4AAAAJ"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent-blue hover:bg-accent-blue/90 text-slate-950 font-bold transition-all duration-200 text-xs px-4 py-2.5 rounded-xl shadow-sm cursor-pointer"
            >
              <GraduationCap className="w-4 h-4" />
              <span>Google Scholar</span>
              <ExternalLink className="w-3 h-3 opacity-60" />
            </a>

            <a
              href="https://www.researchgate.net/profile/Ahmad_Al_Musawi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#111112] text-slate-300 hover:text-white border border-white/10 hover:border-white/20 hover:bg-[#161618] transition-all duration-200 text-xs font-semibold px-4 py-2.5 rounded-xl shadow-sm cursor-pointer"
            >
              <BookOpen className="w-4 h-4 text-accent-teal" />
              <span>ResearchGate</span>
              <ExternalLink className="w-3 h-3 opacity-60" />
            </a>

            <a
              href="https://www.linkedin.com/in/ahmad-f-al-musawi-577410141/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#111112] text-slate-300 hover:text-white border border-white/10 hover:border-white/20 hover:bg-[#161618] transition-all duration-200 text-xs font-semibold px-4 py-2.5 rounded-xl shadow-sm cursor-pointer"
            >
              {/* Custom SVG for LinkedIn */}
              <svg className="w-4 h-4 text-accent-blue fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              <span>LinkedIn</span>
              <ExternalLink className="w-3 h-3 opacity-60" />
            </a>

            <a
              href="https://www.youtube.com/@new_ur_academy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#111112] text-slate-300 hover:text-white border border-white/10 hover:border-white/20 hover:bg-[#161618] transition-all duration-200 text-xs font-semibold px-4 py-2.5 rounded-xl shadow-sm cursor-pointer"
            >
              {/* Custom SVG for YouTube */}
              <svg className="w-4 h-4 text-accent-emerald fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.163c-.272-.997-.1.01-1.07-1.274C21.46 4.54 12 4.54 12 4.54s-9.46 0-10.428.35c-.97.263-1.734.98-2.005 1.974C-.1 7.152-.1 12-.1 12s0 4.848.37 5.837c.27.994 1.034 1.71 2.005 1.974 1.068.35 10.428.35 10.428.35s9.46 0 10.43-.35c.97-.264 1.733-.98 2.005-1.974.37-.99.37-4.837.37-4.837s0-4.848-.37-5.837zm-14.12 8.56V9.28l6.32 3.22-6.32 3.22z" />
              </svg>
              <span>New Ur Academy</span>
              <ExternalLink className="w-3 h-3 opacity-60" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
