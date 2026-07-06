import React, { useState, useEffect } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import ResearchMap from "./components/ResearchMap";
import Publications from "./components/Publications";
import Timeline from "./components/Timeline";
import Contact from "./components/Contact";
import { ResearchCategory } from "./types";
import { Network, GraduationCap, Quote, Mail, ChevronUp, BookOpen, User, ArrowUpRight } from "lucide-react";

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<ResearchCategory | null>(null);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  // Scroll spy to highlight active nav link and toggle back-to-top button
  useEffect(() => {
    const handleScroll = () => {
      // Back to top visibility
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }

      // Scroll spy logic
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
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 100; // Offset for sticky navbar
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
    // If a category was chosen, auto-scroll to the publications section so the user sees the filtered results
    if (category) {
      setTimeout(() => {
        scrollToSection("publications");
      }, 300);
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0B] selection:bg-accent-blue/20 selection:text-white font-sans antialiased text-[#F0F0F0] flex flex-col">
      
      {/* Sticky Top Navigation */}
      <nav id="top-nav" className="sticky top-0 bg-[#0A0A0B]/85 backdrop-blur-md border-b border-white/5 z-50 transition-all duration-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-3.5 flex items-center justify-between">
          
          {/* Logo / Identity */}
          <div 
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2.5 cursor-pointer group"
          >
            <div className="w-8 h-8 rounded-lg bg-[#161618] border border-white/10 flex items-center justify-center text-accent-blue font-mono font-bold text-sm group-hover:bg-accent-blue group-hover:text-slate-950 transition-all duration-200">
              AM
            </div>
            <div className="leading-tight">
              <span className="font-display font-bold text-white text-sm tracking-tight block">
                Ahmad F. Al Musawi
              </span>
              <span className="text-[10px] text-slate-500 font-mono block">
                Computer Science Ph.D.
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-2 text-xs font-semibold text-slate-400">
            <button
              onClick={() => scrollToSection("bio")}
              className={`px-3 py-1.5 rounded-lg border transition-all cursor-pointer ${
                activeSection === "bio" 
                  ? "bg-accent-blue/10 border-accent-blue/20 text-accent-blue font-bold" 
                  : "border-transparent text-slate-400 hover:text-white hover:bg-white/5"
              }`}
            >
              Biography
            </button>
            <button
              onClick={() => scrollToSection("research-map")}
              className={`px-3 py-1.5 rounded-lg border transition-all cursor-pointer ${
                activeSection === "research-map" 
                  ? "bg-accent-blue/10 border-accent-blue/20 text-accent-blue font-bold" 
                  : "border-transparent text-slate-400 hover:text-white hover:bg-white/5"
              }`}
            >
              Research Map
            </button>
            <button
              onClick={() => scrollToSection("publications")}
              className={`px-3 py-1.5 rounded-lg border transition-all cursor-pointer ${
                activeSection === "publications" 
                  ? "bg-accent-blue/10 border-accent-blue/20 text-accent-blue font-bold" 
                  : "border-transparent text-slate-400 hover:text-white hover:bg-white/5"
              }`}
            >
              Publications
            </button>
            <button
              onClick={() => scrollToSection("cv")}
              className={`px-3 py-1.5 rounded-lg border transition-all cursor-pointer ${
                activeSection === "cv" 
                  ? "bg-accent-blue/10 border-accent-blue/20 text-accent-blue font-bold" 
                  : "border-transparent text-slate-400 hover:text-white hover:bg-white/5"
              }`}
            >
              Academic Timeline
            </button>
            
            <span className="h-4 w-px bg-white/10 mx-2"></span>

            <button
              onClick={() => scrollToSection("contact")}
              className="inline-flex items-center gap-1 bg-[#161618] border border-white/10 text-slate-200 hover:text-white hover:bg-white/5 px-4 py-2 rounded-lg transition-all duration-200 shadow-sm cursor-pointer"
            >
              <span>Contact</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile contact button */}
          <button
            onClick={() => scrollToSection("contact")}
            className="md:hidden inline-flex items-center justify-center px-3 py-2 bg-[#161618] border border-white/10 text-slate-200 hover:text-white rounded-lg text-xs font-semibold cursor-pointer"
          >
            Contact
          </button>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 md:px-8 py-8">
        
        {/* Academic Hero Identity Card */}
        <Hero />

        {/* Biography Section */}
        <div id="bio" className="scroll-mt-24">
          <About />
        </div>

        {/* Custom Ontological Map */}
        <div id="research-map" className="scroll-mt-24 mb-8">
          <ResearchMap
            selectedCategory={selectedCategory}
            onSelectCategory={handleSelectCategory}
          />
        </div>

        {/* Dynamic Publications Database */}
        <Publications
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        {/* Timeline (Education & Employment) */}
        <Timeline />

        {/* Dynamic Contact Coordinator */}
        <Contact />

      </main>

      {/* Scholarly Footer */}
      <footer className="bg-[#0A0A0B] border-t border-white/5 mt-auto py-12">
        <div className="max-w-6xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left space-y-1">
            <h4 className="font-display font-bold text-white text-sm">
              Ahmad F. Al Musawi, Ph.D.
            </h4>
            <p className="text-xs text-slate-500">
              © 2026 Ahmad F. Al Musawi. Crafted for clarity, academic excellence, and responsive performance.
            </p>
          </div>

          {/* Footer Social / Profile links */}
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
          className="fixed bottom-6 right-6 p-3 bg-[#161618] hover:bg-[#232326] border border-white/10 text-slate-300 hover:text-white rounded-full shadow-lg transition-all duration-200 z-40 cursor-pointer animate-fadeIn"
          title="Back to Top"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      )}

    </div>
  );
}
