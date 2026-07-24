import React, { useState, useMemo, useRef } from "react";
import { COURSES_DATA, Course, Lecture, TopicTimestamp } from "../data/courses";
import { useLanguage } from "../context/LanguageContext";
import {
  BookOpen,
  GraduationCap,
  PlayCircle,
  Search,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Clock,
  Youtube,
  Sparkles,
  CheckCircle,
  FileText,
  X,
  ArrowLeft,
  ArrowRight,
  Maximize2,
  Tv,
  ListVideo
} from "lucide-react";

interface CoursesProps {
  isStandalonePage?: boolean;
  onBackToHome?: () => void;
}

export default function Courses({ isStandalonePage = false, onBackToHome }: CoursesProps) {
  const { t, language, isRTL } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCourseId, setSelectedCourseId] = useState<string>("business-intelligence-it4");
  const [expandedLectureIds, setExpandedLectureIds] = useState<Record<string, boolean>>({
    "bi-lec1-p1": true,
    "bi-lec2": true,
  });

  // Embedded Video Player State
  const [activeVideo, setActiveVideo] = useState<{
    lecture: Lecture;
    startSeconds: number;
  } | null>({
    lecture: COURSES_DATA[0].lectures[0],
    startSeconds: 0,
  });

  const playerRef = useRef<HTMLDivElement>(null);

  const activeCourse = useMemo(() => {
    return COURSES_DATA.find((c) => c.id === selectedCourseId) || COURSES_DATA[0];
  }, [selectedCourseId]);

  const toggleExpandLecture = (lecId: string) => {
    setExpandedLectureIds((prev) => ({
      ...prev,
      [lecId]: !prev[lecId],
    }));
  };

  const expandAll = () => {
    const allExpanded: Record<string, boolean> = {};
    activeCourse.lectures.forEach((lec) => {
      allExpanded[lec.id] = true;
    });
    setExpandedLectureIds(allExpanded);
  };

  const collapseAll = () => {
    setExpandedLectureIds({});
  };

  const filteredLectures = useMemo(() => {
    if (!searchQuery.trim()) {
      return activeCourse.lectures;
    }
    const q = searchQuery.toLowerCase();
    return activeCourse.lectures.filter((lec) => {
      const matchTitleEn = lec.titleEn.toLowerCase().includes(q);
      const matchTitleAr = lec.titleAr.toLowerCase().includes(q);
      const matchTopics = lec.topics.some(
        (top) =>
          top.topicEn.toLowerCase().includes(q) ||
          top.topicAr.toLowerCase().includes(q) ||
          (top.time && top.time.includes(q))
      );
      return matchTitleEn || matchTitleAr || matchTopics;
    });
  }, [activeCourse, searchQuery]);

  const handlePlayLecture = (lec: Lecture, seconds = 0) => {
    setActiveVideo({
      lecture: lec,
      startSeconds: seconds,
    });
    // Auto expand the lecture agenda
    setExpandedLectureIds((prev) => ({
      ...prev,
      [lec.id]: true,
    }));
    // Smooth scroll to video player
    if (playerRef.current) {
      playerRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="courses" className="space-y-6 scroll-mt-24">
      {/* Standalone Page Header Header Navigation */}
      {isStandalonePage && (
        <div className="bg-[#111112] border border-white/5 rounded-2xl p-6 md:p-8 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4 pb-4 border-b border-white/5">
            {onBackToHome && (
              <button
                onClick={onBackToHome}
                className="inline-flex items-center gap-2 bg-[#161618] hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer self-start"
              >
                {isRTL ? <ArrowRight className="w-4 h-4" /> : <ArrowLeft className="w-4 h-4" />}
                <span>{t.courses.backToPortfolio}</span>
              </button>
            )}

            <div className="flex items-center gap-2">
              <span className="px-3 py-1 bg-accent-blue/10 border border-accent-blue/20 text-accent-blue text-xs font-mono font-semibold rounded-full">
                Dr. Ahmad Fadhil Al Musawi
              </span>
              <span className="px-3 py-1 bg-emerald-950/40 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-semibold rounded-full flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-emerald-400" />
                {language === "ar" ? "مشغل تفاعلي المدمج" : "In-App Player Ready"}
              </span>
            </div>
          </div>

          <div>
            <h1 className="text-2xl md:text-3xl font-display font-bold text-slate-100 tracking-tight">
              {t.courses.dedicatedHeaderTitle}
            </h1>
            <p className="text-slate-400 text-sm mt-1.5 max-w-4xl leading-relaxed">
              {t.courses.dedicatedHeaderSubtitle}
            </p>
          </div>
        </div>
      )}

      {/* Embedded Video Player Panel */}
      {activeVideo && activeVideo.lecture.youtubeId && (
        <div
          ref={playerRef}
          className="bg-[#111112] border-2 border-accent-blue/40 rounded-2xl p-5 md:p-6 shadow-2xl relative overflow-hidden transition-all duration-300"
        >
          {/* Top Bar of Active Video */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4 pb-3 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-accent-blue/15 border border-accent-blue/30 flex items-center justify-center text-accent-blue shrink-0">
                <Tv className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono uppercase bg-accent-blue/20 text-accent-blue border border-accent-blue/30 rounded px-2 py-0.5 font-bold">
                    {t.courses.nowPlaying}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    {activeCourse.code} - {language === "ar" ? `المحاضرة ${activeVideo.lecture.number}` : `Lecture ${activeVideo.lecture.number}`}
                  </span>
                </div>
                <h3 className="text-base md:text-lg font-display font-semibold text-slate-100 mt-0.5">
                  {language === "ar" ? activeVideo.lecture.titleAr : activeVideo.lecture.titleEn}
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0 self-end md:self-auto">
              {activeVideo.lecture.url && (
                <a
                  href={activeVideo.lecture.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-[#161618] hover:bg-rose-950/40 text-rose-400 border border-rose-500/30 px-3 py-1.5 rounded-lg text-xs font-medium transition-all"
                >
                  <Youtube className="w-3.5 h-3.5 text-rose-500" />
                  <span>{t.courses.openInYoutube}</span>
                  <ExternalLink className="w-3 h-3 opacity-70" />
                </a>
              )}

              <button
                onClick={() => setActiveVideo(null)}
                className="p-1.5 bg-[#161618] hover:bg-white/10 border border-white/10 text-slate-400 hover:text-white rounded-lg transition-colors cursor-pointer"
                title={t.courses.closePlayer}
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Player Grid: Video Iframe + Interactive Timestamps Sidebar */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Embedded Iframe Container */}
            <div className="lg:col-span-8 space-y-3">
              <div className="relative w-full aspect-video bg-black rounded-xl overflow-hidden border border-white/10 shadow-lg">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${activeVideo.lecture.youtubeId}?autoplay=1&start=${activeVideo.startSeconds}&rel=0`}
                  title={activeVideo.lecture.titleEn}
                  className="absolute top-0 left-0 w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              <div className="flex flex-wrap items-center justify-between text-xs text-slate-400 bg-[#161618] border border-white/5 rounded-xl p-3">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-accent-blue shrink-0" />
                  <span>
                    {language === "ar"
                      ? "يمكنك الضغط على أي وقت في قائمة المواضيع للانتقال المباشر داخل الفيديو."
                      : "Click any timestamp in the topic agenda to jump directly in the video."}
                  </span>
                </div>
              </div>
            </div>

            {/* Timestamps & Topics Jump Sidebar */}
            <div className="lg:col-span-4 bg-[#161618] border border-white/5 rounded-xl p-4 space-y-3 max-h-[420px] overflow-y-auto">
              <div className="flex items-center justify-between border-b border-white/5 pb-2">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-200">
                  <ListVideo className="w-4 h-4 text-accent-blue" />
                  <span>{t.courses.topicsLabel}</span>
                </div>
                <span className="text-[10px] font-mono text-slate-500 bg-white/5 px-2 py-0.5 rounded">
                  {activeVideo.lecture.topics.length} {language === "ar" ? "محاور" : "topics"}
                </span>
              </div>

              <div className="space-y-2">
                {activeVideo.lecture.topics.map((tp, idx) => {
                  const isCurrent = activeVideo.startSeconds === (tp.seconds || 0);

                  return (
                    <button
                      key={idx}
                      onClick={() => handlePlayLecture(activeVideo.lecture, tp.seconds || 0)}
                      className={`w-full text-left text-right p-2.5 rounded-lg border transition-all cursor-pointer flex items-start gap-2.5 ${
                        isCurrent
                          ? "bg-accent-blue/15 border-accent-blue/40 text-white"
                          : "bg-[#111112] hover:bg-white/5 border-white/5 text-slate-300"
                      }`}
                    >
                      {tp.time ? (
                        <span className="inline-flex items-center gap-1 font-mono font-bold text-[11px] text-accent-blue bg-accent-blue/10 border border-accent-blue/20 rounded px-2 py-0.5 shrink-0 mt-0.5">
                          <Clock className="w-3 h-3" />
                          {tp.time}
                        </span>
                      ) : (
                        <span className="w-1.5 h-1.5 rounded-full bg-accent-blue/60 mt-2 shrink-0"></span>
                      )}

                      <div className="flex-1 space-y-0.5 text-start">
                        <p className="text-xs font-medium leading-snug">
                          {language === "ar" ? tp.topicAr : tp.topicEn}
                        </p>
                        <p className="text-[10px] text-slate-500 font-mono">
                          {language === "ar" ? tp.topicEn : tp.topicAr}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Course Container Section */}
      <div className="bg-[#111112] border border-white/5 rounded-2xl p-6 md:p-8 shadow-sm">
        {/* Header Badge & Title */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-1.5 text-accent-blue text-xs font-mono tracking-widest uppercase mb-1">
              <GraduationCap className="w-4 h-4 text-accent-blue" />
              <span>{t.courses.badge}</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-display font-semibold tracking-tight text-slate-100">
              {t.courses.title}
            </h2>
            <p className="text-slate-400 text-sm mt-1 max-w-3xl leading-relaxed">
              {t.courses.subtitle}
            </p>
          </div>

          {activeCourse.youtubePlaylistUrl && (
            <a
              href={activeCourse.youtubePlaylistUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#161618] hover:bg-rose-950/30 text-rose-400 hover:text-rose-300 border border-rose-500/20 hover:border-rose-500/40 px-4 py-2 rounded-xl text-xs font-semibold transition-all shadow-sm cursor-pointer shrink-0 self-start md:self-auto"
            >
              <Youtube className="w-4 h-4 text-rose-500" />
              <span>{t.courses.playlistBtn}</span>
              <ExternalLink className="w-3 h-3 opacity-70" />
            </a>
          )}
        </div>

        {/* Main Course Details Banner */}
        <div className="bg-[#161618]/60 border border-white/5 rounded-xl p-5 md:p-6 mb-6 relative overflow-hidden">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-2 max-w-3xl">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-0.5 bg-accent-blue/15 text-accent-blue font-mono font-bold text-xs rounded-md border border-accent-blue/20">
                  {activeCourse.code}
                </span>
                <span className="px-2.5 py-0.5 bg-white/5 text-slate-300 font-sans text-xs rounded-md border border-white/10">
                  {language === "ar" ? activeCourse.levelAr : activeCourse.levelEn}
                </span>
                <span className="px-2.5 py-0.5 bg-white/5 text-slate-400 font-sans text-xs rounded-md border border-white/10">
                  {language === "ar" ? activeCourse.departmentAr : activeCourse.departmentEn} - {language === "ar" ? activeCourse.institutionAr : activeCourse.institutionEn}
                </span>
              </div>

              <h3 className="text-xl md:text-2xl font-display font-bold text-slate-100">
                {language === "ar" ? activeCourse.titleAr : activeCourse.titleEn}
              </h3>

              <p className="text-xs md:text-sm text-slate-300 leading-relaxed font-sans pt-1">
                {language === "ar" ? activeCourse.descriptionAr : activeCourse.descriptionEn}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col items-stretch sm:items-center lg:items-end gap-3 shrink-0 pt-2 lg:pt-0 border-t lg:border-t-0 border-white/5">
              <div className="bg-[#111112] border border-white/5 px-4 py-2.5 rounded-xl text-center w-full sm:w-auto">
                <span className="text-xl font-mono font-bold text-accent-blue block">
                  {activeCourse.lectures.length}
                </span>
                <span className="text-[10px] uppercase font-mono text-slate-400 block tracking-wider">
                  {t.courses.lecturesCount}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Search & Expand Controls */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 mb-6">
          {/* Search Bar */}
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 w-4.5 h-4.5" />
            <input
              type="text"
              placeholder={t.courses.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#111112] hover:bg-[#111112]/80 focus:bg-[#161618] border border-white/10 rounded-xl py-2.5 pl-11 pr-4 text-xs md:text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-accent-blue/30 focus:border-accent-blue/80 transition-all"
            />
          </div>

          {/* Expand/Collapse All Buttons */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={expandAll}
              className="px-3 py-2 bg-[#161618] hover:bg-white/5 border border-white/10 text-slate-300 hover:text-white rounded-xl text-xs font-medium transition-all cursor-pointer"
            >
              {t.courses.expandAgenda}
            </button>
            <button
              onClick={collapseAll}
              className="px-3 py-2 bg-[#161618] hover:bg-white/5 border border-white/10 text-slate-300 hover:text-white rounded-xl text-xs font-medium transition-all cursor-pointer"
            >
              {t.courses.collapseAgenda}
            </button>
          </div>
        </div>

        {/* Lecture List */}
        {filteredLectures.length === 0 ? (
          <div className="border border-dashed border-slate-800 rounded-xl py-12 text-center text-slate-400">
            <p className="text-sm">{t.courses.noResults}</p>
            <button
              onClick={() => setSearchQuery("")}
              className="text-xs font-medium text-accent-blue hover:underline mt-2 cursor-pointer"
            >
              {language === "ar" ? "مسح شريط البحث" : "Clear Search"}
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredLectures.map((lec) => {
              const isExpanded = !!expandedLectureIds[lec.id];
              const hasTimestamps = lec.topics.some((t) => t.time);
              const isCurrentlyPlaying = activeVideo?.lecture.id === lec.id;

              return (
                <div
                  key={lec.id}
                  className={`border rounded-xl transition-all duration-200 overflow-hidden ${
                    isCurrentlyPlaying
                      ? "bg-[#161618] border-accent-blue shadow-lg ring-1 ring-accent-blue/40"
                      : isExpanded
                      ? "bg-[#161618]/70 border-white/15 shadow-md"
                      : "bg-[#111112] border-white/5 hover:border-white/15"
                  }`}
                >
                  {/* Lecture Card Header */}
                  <div className="p-4 md:p-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-start gap-3.5 flex-1 cursor-pointer" onClick={() => toggleExpandLecture(lec.id)}>
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-mono font-bold text-sm shrink-0 shadow-sm mt-0.5 md:mt-0 ${
                        isCurrentlyPlaying
                          ? "bg-accent-blue text-slate-950 font-extrabold"
                          : "bg-[#111112] border border-white/10 text-accent-blue"
                      }`}>
                        #{lec.number}
                      </div>

                      <div className="space-y-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-[11px] font-mono font-bold text-accent-blue bg-accent-blue/10 border border-accent-blue/20 rounded px-2 py-0.5">
                            {language === "ar" ? `المحاضرة ${lec.number}` : `Lecture ${lec.number}`} {lec.part ? `(${lec.part})` : ""}
                          </span>

                          {hasTimestamps && (
                            <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-500/20 rounded px-2 py-0.5 flex items-center gap-1">
                              <Clock className="w-3 h-3 text-emerald-400" />
                              {t.courses.timestampsBadge}
                            </span>
                          )}

                          {isCurrentlyPlaying && (
                            <span className="text-[10px] font-mono font-bold text-amber-300 bg-amber-950/60 border border-amber-500/30 rounded px-2 py-0.5 flex items-center gap-1 animate-pulse">
                              <Sparkles className="w-3 h-3 text-amber-400" />
                              {t.courses.nowPlaying}
                            </span>
                          )}
                        </div>

                        <h4 className="text-base font-display font-semibold text-slate-100 hover:text-accent-blue transition-colors">
                          {language === "ar" ? lec.titleAr : lec.titleEn}
                        </h4>

                        <p className="text-xs text-slate-400 font-sans">
                          {language === "ar" ? lec.titleEn : lec.titleAr}
                        </p>
                      </div>
                    </div>

                    {/* Actions Right Side */}
                    <div className="flex items-center gap-2 justify-end shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-white/5">
                      {lec.youtubeId ? (
                        <button
                          onClick={() => handlePlayLecture(lec, 0)}
                          className="inline-flex items-center gap-1.5 bg-accent-blue hover:bg-accent-blue/90 text-slate-950 font-bold px-3.5 py-1.5 rounded-lg text-xs transition-all shadow-md cursor-pointer"
                        >
                          <PlayCircle className="w-4 h-4 text-slate-950" />
                          <span>{t.courses.watchLecture}</span>
                        </button>
                      ) : lec.url ? (
                        <a
                          href={lec.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 bg-accent-blue/15 hover:bg-accent-blue/25 text-accent-blue border border-accent-blue/30 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer"
                        >
                          <PlayCircle className="w-3.5 h-3.5" />
                          <span>{t.courses.watchLecture}</span>
                          <ExternalLink className="w-3 h-3 opacity-70" />
                        </a>
                      ) : null}

                      <button
                        onClick={() => toggleExpandLecture(lec.id)}
                        className="p-1.5 bg-[#111112] hover:bg-white/5 border border-white/10 rounded-lg text-slate-400 hover:text-white transition-colors cursor-pointer"
                        title={isExpanded ? t.courses.collapseAgenda : t.courses.expandAgenda}
                      >
                        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  {/* Collapsible Topic Agenda */}
                  {isExpanded && (
                    <div className="border-t border-white/5 bg-[#111112]/90 p-4 md:p-5 space-y-3">
                      <div className="flex items-center gap-2 text-xs font-mono text-slate-400 uppercase tracking-wider">
                        <FileText className="w-3.5 h-3.5 text-accent-blue" />
                        <span>{t.courses.topicsLabel}</span>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 pt-1">
                        {lec.topics.map((tp, idx) => (
                          <div
                            key={idx}
                            onClick={() => {
                              if (lec.youtubeId) {
                                handlePlayLecture(lec, tp.seconds || 0);
                              }
                            }}
                            className={`flex items-start gap-2.5 p-2.5 bg-[#161618] border border-white/5 rounded-lg transition-all ${
                              lec.youtubeId ? "hover:border-accent-blue/50 hover:bg-[#161618]/80 cursor-pointer group" : ""
                            }`}
                          >
                            {tp.time ? (
                              <span className="inline-flex items-center gap-1 font-mono font-bold text-[11px] text-accent-blue bg-accent-blue/10 border border-accent-blue/20 rounded px-2 py-0.5 shrink-0 group-hover:bg-accent-blue group-hover:text-slate-950 transition-colors">
                                <Clock className="w-3 h-3" />
                                {tp.time}
                              </span>
                            ) : (
                              <span className="w-1.5 h-1.5 rounded-full bg-accent-blue/60 mt-2 shrink-0"></span>
                            )}

                            <div className="space-y-0.5">
                              <p className="text-xs font-medium text-slate-200 group-hover:text-accent-blue transition-colors">
                                {language === "ar" ? tp.topicAr : tp.topicEn}
                              </p>
                              {language === "ar" && (
                                <p className="text-[10px] text-slate-400 font-mono">
                                  {tp.topicEn}
                                </p>
                              )}
                              {language === "en" && (
                                <p className="text-[10px] text-slate-400 font-sans">
                                  {tp.topicAr}
                                </p>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
