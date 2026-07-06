import React, { useState, useMemo } from "react";
import { PUBLICATIONS_DATA, Publication, ResearchCategory } from "../types";
import { Search, ChevronDown, ChevronUp, Copy, Check, Quote, ExternalLink, SlidersHorizontal, Star, Award } from "lucide-react";

interface PublicationsProps {
  selectedCategory: ResearchCategory | null;
  onSelectCategory: (category: ResearchCategory | null) => void;
}

export default function Publications({ selectedCategory, onSelectCategory }: PublicationsProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<"year-desc" | "year-asc" | "citations-desc">("year-desc");
  const [expandedPubId, setExpandedPubId] = useState<string | null>(null);
  const [copiedBibId, setCopiedBibId] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(8);

  // Helper to generate a realistic academic BibTeX citation dynamically
  const generateBibTeX = (pub: Publication): string => {
    const cleanKey = pub.authors.split(",")[0].toLowerCase().replace(/\s/g, "") + pub.year;
    let type = "article";
    let journalOrBook = "journal";

    if (pub.venue.toLowerCase().includes("proceedings") || pub.venue.toLowerCase().includes("conference")) {
      type = "inproceedings";
      journalOrBook = "booktitle";
    } else if (pub.venue.toLowerCase().includes("dissertation")) {
      type = "phdthesis";
      journalOrBook = "school";
    }

    return `@${type}{${cleanKey},\n  title={${pub.title}},\n  author={${pub.authors}},\n  ${journalOrBook}={${pub.venue}},\n  year={${pub.year}},\n  publisher={Scholarly Publisher}\n}`;
  };

  const handleCopyBib = (pub: Publication) => {
    const bibText = generateBibTeX(pub);
    navigator.clipboard.writeText(bibText);
    setCopiedBibId(pub.id);
    setTimeout(() => setCopiedBibId(null), 2000);
  };

  const toggleExpand = (pubId: string) => {
    setExpandedPubId(expandedPubId === pubId ? null : pubId);
  };

  // Filter and sort publications
  const filteredAndSortedPublications = useMemo(() => {
    let result = [...PUBLICATIONS_DATA];

    // Filter by category
    if (selectedCategory) {
      result = result.filter((pub) => pub.categories.includes(selectedCategory));
    }

    // Filter by search query
    if (searchQuery.trim() !== "") {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (pub) =>
          pub.title.toLowerCase().includes(q) ||
          pub.authors.toLowerCase().includes(q) ||
          pub.venue.toLowerCase().includes(q)
      );
    }

    // Sort
    if (sortBy === "year-desc") {
      result.sort((a, b) => b.year - a.year);
    } else if (sortBy === "year-asc") {
      result.sort((a, b) => a.year - b.year);
    } else if (sortBy === "citations-desc") {
      result.sort((a, b) => (b.citations || 0) - (a.citations || 0));
    }

    return result;
  }, [selectedCategory, searchQuery, sortBy]);

  const visiblePubs = filteredAndSortedPublications.slice(0, visibleCount);

  return (
    <section id="publications" className="bg-[#111112] border border-white/5 rounded-2xl p-6 md:p-8 shadow-sm mb-8 scroll-mt-24">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-1 text-accent-blue text-xs font-mono tracking-widest uppercase mb-1">
            <Quote className="w-3.5 h-3.5" />
            <span>Academic Publications</span>
          </div>
          <h3 className="text-2xl font-display font-semibold tracking-tight text-slate-100">
            Scholarly Works
          </h3>
          <p className="text-slate-400 text-sm mt-0.5">
            Peer-reviewed papers, journals, doctoral works, and conference proceedings.
          </p>
        </div>

        {/* Sorting Toggles */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-mono text-slate-400 flex items-center gap-1 mr-1">
            <SlidersHorizontal className="w-3.5 h-3.5" /> Sort By:
          </span>
          <button
            onClick={() => setSortBy("year-desc")}
            className={`text-xs font-medium px-3 py-1.5 rounded-lg transition-all duration-150 border cursor-pointer ${
              sortBy === "year-desc"
                ? "bg-accent-blue border-accent-blue text-slate-950 font-semibold hover:bg-accent-blue/90"
                : "bg-[#111112] border-white/10 text-slate-300 hover:bg-white/5 hover:text-white"
            }`}
          >
            Newest First
          </button>
          <button
            onClick={() => setSortBy("citations-desc")}
            className={`text-xs font-medium px-3 py-1.5 rounded-lg transition-all duration-150 border cursor-pointer ${
              sortBy === "citations-desc"
                ? "bg-accent-blue border-accent-blue text-slate-950 font-semibold hover:bg-accent-blue/90"
                : "bg-[#111112] border-white/10 text-slate-300 hover:bg-white/5 hover:text-white"
            }`}
          >
            Highest Citations
          </button>
        </div>
      </div>

      {/* Search & Category Filter Chips */}
      <div className="space-y-4 mb-6">
        {/* Search Input */}
        <div className="relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 w-4.5 h-4.5" />
          <input
            type="text"
            placeholder="Search papers by keywords, journals, co-authors..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#111112] hover:bg-[#111112]/80 focus:bg-[#161618] border border-white/10 rounded-xl py-2.5 pl-11 pr-4 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-accent-blue/30 focus:border-accent-blue/80 transition-all"
          />
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-1.5 items-center">
          <span className="text-xs font-mono text-slate-400 mr-2">Theme:</span>
          <button
            onClick={() => onSelectCategory(null)}
            className={`text-xs px-3 py-1 rounded-full border transition-all duration-150 cursor-pointer ${
              selectedCategory === null
                ? "bg-accent-blue border-accent-blue text-slate-950 font-semibold"
                : "bg-[#111112] border-white/10 text-slate-400 hover:bg-[#161618] hover:text-white"
            }`}
          >
            All Themes
          </button>
          {Object.values(ResearchCategory).map((cat) => (
            <button
              key={cat}
              onClick={() => onSelectCategory(cat)}
              className={`text-xs px-3 py-1 rounded-full border transition-all duration-150 cursor-pointer ${
                selectedCategory === cat
                  ? "bg-accent-blue border-accent-blue text-slate-950 font-semibold"
                  : "bg-[#111112] border-white/10 text-slate-400 hover:bg-[#161618] hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Publications Grid/List */}
      {filteredAndSortedPublications.length === 0 ? (
        <div className="border border-dashed border-slate-200 rounded-xl py-12 text-center text-slate-400">
          <p className="text-sm">No publications matching your criteria were found.</p>
          <button
            onClick={() => {
              setSearchQuery("");
              onSelectCategory(null);
            }}
            className="text-xs font-medium text-accent-blue hover:underline mt-2 cursor-pointer"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {visiblePubs.map((pub) => {
            const isExpanded = expandedPubId === pub.id;
            const hasCitations = pub.citations !== undefined;

            return (
              <div
                key={pub.id}
                className={`border rounded-xl p-4 md:p-5 transition-all duration-200 ${
                  pub.highlighted
                    ? "bg-accent-blue/5 border-accent-blue/30 hover:border-accent-blue/50"
                    : "bg-[#111112] border-white/5 hover:border-white/10 shadow-sm"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    {/* Highlight Badge */}
                    {pub.highlighted && (
                      <span className="inline-flex items-center px-2 py-0.5 bg-accent-blue/15 text-accent-blue text-[10px] font-mono font-bold italic rounded-md mb-2 uppercase tracking-wider">
                        Key Publication
                      </span>
                    )}

                    <h4 className="text-sm md:text-base font-display font-semibold text-[#F0F0F0] hover:text-accent-blue transition-colors duration-150">
                      {pub.url ? (
                        <a href={pub.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5">
                          {pub.title} <ExternalLink className="w-3.5 h-3.5 inline text-slate-400" />
                        </a>
                      ) : (
                        pub.title
                      )}
                    </h4>

                    {/* Authors List */}
                    <p className="text-xs text-slate-400 leading-relaxed font-sans">
                      {pub.authors.split(",").map((auth, i) => {
                        const isPrimary = auth.trim().includes("AF Al Musawi") || auth.trim().includes("AF Al-Musawi") || auth.trim().includes("AFA Musawi") || auth.trim().includes("A Al-Musawi Jr");
                        return (
                          <React.Fragment key={i}>
                            {i > 0 && ", "}
                            <span className={isPrimary ? "font-semibold text-accent-blue underline decoration-accent-blue/20" : ""}>
                              {auth.trim()}
                            </span>
                          </React.Fragment>
                        );
                      })}
                    </p>

                    {/* Venue and Year */}
                    <p className="text-xs font-mono text-slate-500">
                      <span className="text-slate-400 font-medium">{pub.venue}</span>
                      <span className="mx-2">•</span>
                      <span className="text-slate-400 font-semibold">{pub.year}</span>
                    </p>
                  </div>

                  {/* Right side stats/citations */}
                  <div className="text-right shrink-0">
                    {hasCitations && (
                      <div className="inline-flex flex-col items-center justify-center bg-[#161618] border border-white/5 rounded-lg px-2.5 py-1 text-center min-w-[60px] shadow-sm">
                        <span className="text-xs font-mono font-bold text-accent-blue">
                          {pub.citations}
                        </span>
                        <span className="text-[9px] font-sans tracking-wide uppercase text-slate-500">
                          Cites
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mt-3.5">
                  {pub.categories.map((cat, cIdx) => (
                    <span
                      key={cIdx}
                      className="text-[10px] font-mono bg-[#161618] border border-white/5 text-slate-400 px-2 py-0.5 rounded"
                    >
                      {cat}
                    </span>
                  ))}
                </div>

                {/* Expandable actions drawer toggle */}
                <div className="flex items-center justify-between gap-4 mt-4 pt-3.5 border-t border-white/5 text-xs">
                  <button
                    onClick={() => toggleExpand(pub.id)}
                    className="inline-flex items-center gap-1 text-slate-400 hover:text-white transition-colors font-medium cursor-pointer"
                  >
                    {isExpanded ? (
                      <>
                        <span>Hide Abstract</span> <ChevronUp className="w-3.5 h-3.5" />
                      </>
                    ) : (
                      <>
                        <span>Read Abstract & Cite</span> <ChevronDown className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>

                  <div className="flex items-center gap-3">
                  </div>
                </div>

                {/* Expanded Details Pane */}
                {isExpanded && (
                  <div className="mt-4 p-4 bg-[#161618] rounded-lg border border-white/5 space-y-4 animate-fadeIn">
                    {pub.abstract && (
                      <div className="space-y-1">
                        <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                          Abstract
                        </span>
                        <p className="text-xs text-slate-300 leading-relaxed italic">
                          &ldquo;{pub.abstract}&rdquo;
                        </p>
                      </div>
                    )}

                    {/* BibTeX Section */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                          BibTeX Citation
                        </span>
                        <button
                          onClick={() => handleCopyBib(pub)}
                          className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-300 hover:text-white cursor-pointer bg-[#111112] border border-white/10 hover:border-white/20 rounded px-2.5 py-1 shadow-sm transition-all"
                        >
                          {copiedBibId === pub.id ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-accent-emerald" /> Copied!
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5" /> Copy Citation
                            </>
                          )}
                        </button>
                      </div>
                      <pre className="text-[10px] font-mono bg-[#0A0A0B] border border-white/5 text-slate-300 p-3 rounded-md overflow-x-auto select-all leading-relaxed">
                        {generateBibTeX(pub)}
                      </pre>
                    </div>
                  </div>
                )}
              </div>
            );
          })}

          {/* Load More Trigger */}
          {filteredAndSortedPublications.length > visibleCount && (
            <div className="text-center pt-4">
              <button
                onClick={() => setVisibleCount((prev) => prev + 6)}
                className="inline-flex items-center justify-center gap-1.5 text-xs font-semibold bg-[#111112] border border-white/10 text-slate-300 hover:bg-[#161618] hover:text-white transition-all px-5 py-2.5 rounded-xl shadow-sm cursor-pointer"
              >
                Load More Research Papers ({filteredAndSortedPublications.length - visibleCount} remaining)
              </button>
            </div>
          )}
        </div>
      )}
    </section>
  );
}
