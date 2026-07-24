import React, { useState, useEffect } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Courses from "./components/Courses";
import ResearchMap from "./components/ResearchMap";
import Publications from "./components/Publications";
import Timeline from "./components/Timeline";
import Contact from "./components/Contact";
import { ResearchCategory } from "./types";
import { ChevronUp, ArrowUpRight, GraduationCap, Home } from "lucide-react";
import { LanguageProvider, useLanguage } from "./context/LanguageContext";

function MainAppContent() {
  const { t, language, setLanguage, isRTL } = useLanguage();
  const [currentView, setCurrentView] = useState<"portfolio" | "courses">("portfolio");
  const [selectedCategory, setSelectedCategory] = useState<ResearchCategory | null>(null);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }

      if (currentView === "portfolio") {
        const sections = ["bio", "research-map", "publications", "cv", "contact"];
        const scrollPosition = window.scrollY + 160;

        for (const sectionId of sections) {
          const el = document.getElementById(sectionId);
          if (el) {
            const top = el.offsetTop;
            const height = el.offsetHeight;
            if (scrollPosition >= top && scrollPosition < top + height) {
              setActiveSection(sectionId);
              break;
            }
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentView]);

  const navigateToSection = (id: string) => {
    if (currentView !== "portfolio") {
      setCurrentView("portfolio");
      setTimeout(() => {
        scrollToSection(id);
      }, 100);
    } else {
      scrollToSection(id);
    }
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const handleSelectCategory = (category: ResearchCategory | null) => {
    setSelectedCategory(category);
    if (category) {
      if (currentView !== "portfolio") {
        setCurrentView("portfolio");
      }
      setTimeout(() => {
        scrollToSection("publications");
      }, 300);
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0B] selection:bg-accent-blue/20 selection:text-white font-sans antialiased text-[#F0F0F0] flex flex-col">
      
      {/* Sticky Top Navigation */}
      <nav id="top-nav" className="sticky top-0 bg-[#0A0A0B]/90 backdrop-blur-md border-b border-white/5 z-50 transition-all duration-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-3.5 flex items-center justify-between gap-4">
          
          {/* Logo / Identity */}
          <div 
            onClick={() => {
              setCurrentView("portfolio");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-2.5 cursor-pointer group shrink-0"
          >
            <div className="w-8 h-8 rounded-lg bg-[#161618] border border-white/10 flex items-center justify-center text-accent-blue font-mono font-bold text-sm group-hover:bg-accent-blue group-hover:text-slate-950 transition-all duration-200">
              AM
            </div>
            <div className="leading-tight">
              <span className="font-display font-bold text-white text-sm tracking-tight block">
                {t.hero.name.split(",")[0]}
              </span>
              <span className="text-[10px] text-slate-500 font-mono block">
                {t.nav.brandRole}
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1.5 text-xs font-semibold text-slate-400">
            <button
              onClick={() => {
                setCurrentView("portfolio");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className={`px-3 py-1.5 rounded-lg border transition-all cursor-pointer flex items-center gap-1.5 ${
                currentView === "portfolio" && activeSection === "about"
                  ? "bg-accent-blue/10 border-accent-blue/20 text-accent-blue font-bold" 
                  : "border-transparent text-slate-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <Home className="w-3.5 h-3.5" />
              <span>{t.nav.home}</span>
            </button>

            <button
              onClick={() => {
                setCurrentView("courses");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className={`px-3.5 py-1.5 rounded-lg border transition-all cursor-pointer flex items-center gap-1.5 ${
                currentView === "courses" 
                  ? "bg-accent-blue text-slate-950 font-extrabold border-accent-blue shadow-sm" 
                  : "bg-accent-blue/10 border-accent-blue/20 text-accent-blue hover:bg-accent-blue/20"
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>{t.nav.courses}</span>
            </button>

            <button
              onClick={() => navigateToSection("bio")}
              className={`px-3 py-1.5 rounded-lg border transition-all cursor-pointer ${
                currentView === "portfolio" && activeSection === "bio" 
                  ? "bg-accent-blue/10 border-accent-blue/20 text-accent-blue font-bold" 
                  : "border-transparent text-slate-400 hover:text-white hover:bg-white/5"
              }`}
            >
              {t.nav.bio}
            </button>

            <button
              onClick={() => navigateToSection("research-map")}
              className={`px-3 py-1.5 rounded-lg border transition-all cursor-pointer ${
                currentView === "portfolio" && activeSection === "research-map" 
                  ? "bg-accent-blue/10 border-accent-blue/20 text-accent-blue font-bold" 
                  : "border-transparent text-slate-400 hover:text-white hover:bg-white/5"
              }`}
            >
              {t.nav.researchMap}
            </button>

            <button
              onClick={() => navigateToSection("publications")}
              className={`px-3 py-1.5 rounded-lg border transition-all cursor-pointer ${
                currentView === "portfolio" && activeSection === "publications" 
                  ? "bg-accent-blue/10 border-accent-blue/20 text-accent-blue font-bold" 
                  : "border-transparent text-slate-400 hover:text-white hover:bg-white/5"
              }`}
            >
              {t.nav.publications}
            </button>

            <button
              onClick={() => navigateToSection("cv")}
              className={`px-3 py-1.5 rounded-lg border transition-all cursor-pointer ${
                currentView === "portfolio" && activeSection === "cv" 
                  ? "bg-accent-blue/10 border-accent-blue/20 text-accent-blue font-bold" 
                  : "border-transparent text-slate-400 hover:text-white hover:bg-white/5"
              }`}
            >
              {t.nav.timeline}
            </button>
          </div>

          {/* Right Top Bar Controls: Language Switch Key + Contact Button */}
          <div className="flex items-center gap-2.5">
            {/* Arabic / English Switch Key */}
            <div className="inline-flex items-center p-1 bg-[#161618] border border-white/10 rounded-xl shadow-inner">
              <button
                onClick={() => setLanguage("en")}
                className={`px-2.5 py-1 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                  language === "en"
                    ? "bg-accent-blue text-slate-950 font-bold shadow-sm"
                    : "text-slate-400 hover:text-white"
                }`}
                title="Switch to English"
              >
                EN
              </button>
              <button
                onClick={() => setLanguage("ar")}
                className={`px-2.5 py-1 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                  language === "ar"
                    ? "bg-accent-blue text-slate-950 font-bold shadow-sm"
                    : "text-slate-400 hover:text-white"
                }`}
                title="التحويل للغة العربية"
              >
                العربية
              </button>
            </div>

            <button
              onClick={() => navigateToSection("contact")}
              className="hidden sm:inline-flex items-center gap-1 bg-[#161618] border border-white/10 text-slate-200 hover:text-white hover:bg-white/5 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 shadow-sm cursor-pointer"
            >
              <span>{t.nav.contact}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Mobile Sub-Navigation Bar */}
        <div className="flex lg:hidden items-center justify-around bg-[#111112] border-t border-white/5 px-2 py-2 overflow-x-auto text-xs font-medium text-slate-300">
          <button
            onClick={() => {
              setCurrentView("portfolio");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className={`px-3 py-1 rounded-lg shrink-0 ${currentView === "portfolio" ? "text-accent-blue font-bold bg-accent-blue/10" : ""}`}
          >
            {t.nav.home}
          </button>

          <button
            onClick={() => {
              setCurrentView("courses");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className={`px-3 py-1 rounded-lg shrink-0 font-bold ${currentView === "courses" ? "text-slate-950 bg-accent-blue" : "text-accent-blue bg-accent-blue/10"}`}
          >
            {t.nav.courses}
          </button>

          <button
            onClick={() => navigateToSection("bio")}
            className="px-3 py-1 rounded-lg shrink-0"
          >
            {t.nav.bio}
          </button>

          <button
            onClick={() => navigateToSection("publications")}
            className="px-3 py-1 rounded-lg shrink-0"
          >
            {t.nav.publications}
          </button>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 md:px-8 py-8">
        {currentView === "courses" ? (
          /* Standalone Dedicated Teaching Page View */
          <Courses
            isStandalonePage={true}
            onBackToHome={() => {
              setCurrentView("portfolio");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          />
        ) : (
          /* Portfolio Main Page View */
          <>
            {/* Academic Hero Identity Card */}
            <Hero />

            {/* Quick Banner Link to Dedicated Teaching Materials */}
            <div className="bg-gradient-to-r from-accent-blue/10 via-[#161618] to-emerald-950/20 border border-accent-blue/20 rounded-2xl p-5 mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-sm">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 bg-accent-blue/20 text-accent-blue text-[10px] font-mono uppercase font-bold rounded">
                    My Teaching Materials
                  </span>
                  <span className="text-xs font-mono text-emerald-400">
                    {language === "ar" ? "صفحة تعليمية جديدة متكاملة" : "New Dedicated Classroom Portal"}
                  </span>
                </div>
                <h3 className="text-lg font-display font-bold text-slate-100">
                  {language === "ar" ? "الكورسات والمواد الدراسية والأجندات والدروس المرئية" : "Undergraduate & Graduate Course Materials & Video Lectures"}
                </h3>
                <p className="text-xs text-slate-400 max-w-2xl">
                  {language === "ar"
                    ? "صفحة مخصصة كلياً لمادة ذكاء الأعمال (Business Intelligence) تحتوي على الفيديوهات المدمجة والجدول الزمني التفاعلي للمواضيع مع إمكانية التشغيل في التطبيق مباشرةً."
                    : "Browse complete Business Intelligence syllabus modules with in-app video playback and clickable topic timestamps."}
                </p>
              </div>

              <button
                onClick={() => {
                  setCurrentView("courses");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="inline-flex items-center justify-center gap-2 bg-accent-blue hover:bg-accent-blue/90 text-slate-950 font-bold px-5 py-2.5 rounded-xl text-xs transition-all shadow-md cursor-pointer shrink-0 self-start md:self-auto"
              >
                <GraduationCap className="w-4 h-4 text-slate-950" />
                <span>{language === "ar" ? "الانتقال إلى صفحة المواد الدراسية" : "Open Teaching Materials Portal"}</span>
              </button>
            </div>

            {/* Biography Section */}
            <About />

            {/* Custom Ontological Map */}
            <ResearchMap
              selectedCategory={selectedCategory}
              onSelectCategory={handleSelectCategory}
            />

            {/* Dynamic Publications Database */}
            <Publications
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
            />

            {/* Timeline (Education & Employment) */}
            <Timeline />

            {/* Dynamic Contact Coordinator */}
            <Contact />
          </>
        )}
      </main>

      {/* Scholarly Footer */}
      <footer className="bg-[#0A0A0B] border-t border-white/5 mt-auto py-12">
        <div className="max-w-6xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left space-y-1">
            <h4 className="font-display font-bold text-white text-sm">
              {t.hero.name}
            </h4>
            <p className="text-xs text-slate-500">
              © 2026 {t.hero.name.split(",")[0]}. Crafted for academic distinction, responsive research dissemination, and bilingual accessibility.
            </p>
          </div>

          <div className="flex items-center gap-4 text-xs font-semibold text-slate-500">
            <a
              href="https://scholar.google.com/citations?user=QJYj-n4AAAAJ"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent-blue transition-colors"
            >
              Google Scholar
            </a>
            <span className="text-white/10">•</span>
            <a
              href="https://www.researchgate.net/profile/Ahmad_Al_Musawi"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent-blue transition-colors"
            >
              ResearchGate
            </a>
            <span className="text-white/10">•</span>
            <a
              href="https://www.linkedin.com/in/ahmad-f-al-musawi-577410141/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent-blue transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>

      {/* Floating Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className={`fixed bottom-6 ${isRTL ? "left-6" : "right-6"} p-3 bg-[#161618] hover:bg-[#232326] border border-white/10 text-slate-300 hover:text-white rounded-full shadow-lg transition-all duration-200 z-40 cursor-pointer animate-fadeIn`}
          title="Back to Top"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <MainAppContent />
    </LanguageProvider>
  );
}
