import React, { useState, useMemo } from "react";
import { PUBLICATIONS_DATA, Publication, ResearchCategory } from "../types";
import { Search, ChevronDown, ChevronUp, Copy, Check, Quote, ExternalLink, SlidersHorizontal } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

interface PublicationsProps {
  selectedCategory: ResearchCategory | null;
  onSelectCategory: (category: ResearchCategory | null) => void;
}

export default function Publications({ selectedCategory, onSelectCategory }: PublicationsProps) {
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<"year-desc" | "year-asc" | "citations-desc">("year-desc");
  const [expandedPubId, setExpandedPubId] = useState<string | null>(null);
  const [copiedBibId, setCopiedBibId] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(8);

  const getCategoryTitle = (category: ResearchCategory) => {
    switch (category) {
      case ResearchCategory.NETWORK_SCIENCE:
        return t.categories.networkScience;
      case ResearchCategory.HEALTH_INFORMATICS:
        return t.categories.healthInformatics;
      case ResearchCategory.SOCIAL_NETWORKS:
        return t.categories.socialNetworks;
      case ResearchCategory.SECURITY_ML:
        return t.categories.securityMl;
      case ResearchCategory.DATA_MINING:
        return t.categories.dataMining;
      default:
        return category;
    }
  };

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

  const filteredAndSortedPublications = useMemo(() => {
    let result = [...PUBLICATIONS_DATA];

    if (selectedCategory) {
      result = result.filter((pub) => pub.categories.includes(selectedCategory));
    }

    if (searchQuery.trim() !== "") {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (pub) =>
          pub.title.toLowerCase().includes(q) ||
          pub.authors.toLowerCase().includes(q) ||
          pub.venue.toLowerCase().includes(q)
      );
    }

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
            <span>{t.publications.badge}</span>
          </div>
          <h3 className="text-2xl font-display font-semibold tracking-tight text-slate-100">
            {t.publications.title}
          </h3>
          <p className="text-slate-400 text-sm mt-0.5">
            {t.publications.subtitle}
          </p>
        </div>

        {/* Sorting Toggles */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-mono text-slate-400 flex items-center gap-1 mr-1">
            <SlidersHorizontal className="w-3.5 h-3.5" /> {t.publications.sortByLabel}
          </span>
          <button
            onClick={() => setSortBy("year-desc")}
            className={`text-xs font-medium px-3 py-1.5 rounded-lg transition-all duration-150 border cursor-pointer ${
              sortBy === "year-desc"
                ? "bg-accent-blue border-accent-blue text-slate-950 font-semibold hover:bg-accent-blue/90"
                : "bg-[#111112] border-white/10 text-slate-300 hover:bg-white/5 hover:text-white"
            }`}
          >
            {t.publications.sortNewest}
          </button>
          <button
            onClick={() => setSortBy("citations-desc")}
            className={`text-xs font-medium px-3 py-1.5 rounded-lg transition-all duration-150 border cursor-pointer ${
              sortBy === "citations-desc"
                ? "bg-accent-blue border-accent-blue text-slate-950 font-semibold hover:bg-accent-blue/90"
                : "bg-[#111112] border-white/10 text-slate-300 hover:bg-white/5 hover:text-white"
            }`}
          >
            {t.publications.sortCitations}
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
            placeholder={t.publications.searchPlaceholder}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#111112] hover:bg-[#111112]/80 focus:bg-[#161618] border border-white/10 rounded-xl py-2.5 pl-11 pr-4 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-accent-blue/30 focus:border-accent-blue/80 transition-all"
          />
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-1.5 items-center">
          <button
            onClick={() => onSelectCategory(null)}
            className={`text-xs px-3 py-1 rounded-full border transition-all duration-150 cursor-pointer ${
              selectedCategory === null
                ? "bg-accent-blue border-accent-blue text-slate-950 font-semibold"
                : "bg-[#111112] border-white/10 text-slate-400 hover:bg-[#161618] hover:text-white"
            }`}
          >
            {t.publications.filterAll}
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
              {getCategoryTitle(cat)}
            </button>
          ))}
        </div>
      </div>

      {/* Publications Grid/List */}
      {filteredAndSortedPublications.length === 0 ? (
        <div className="border border-dashed border-slate-800 rounded-xl py-12 text-center text-slate-400">
          <p className="text-sm">{t.publications.noResults}</p>
          <button
            onClick={() => {
              setSearchQuery("");
              onSelectCategory(null);
            }}
            className="text-xs font-medium text-accent-blue hover:underline mt-2 cursor-pointer"
          >
            {t.publications.filterAll}
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
                    {pub.highlighted && (
                      <span className="inline-flex items-center px-2 py-0.5 bg-accent-blue/15 text-accent-blue text-[10px] font-mono font-bold italic rounded-md mb-2 uppercase tracking-wider">
                        {t.publications.featuredBadge}
                      </span>
                    )}

                    <h4 className="text-sm md:text-base font-display font-semibold text-[#F0F0F0] hover:text-accent-blue transition-colors duration-150">
                      {pub.url ? (
                        <a href={pub.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5">
                          {pub.title} <ExternalLink className="w-3.5 h-3.5 inline text-slate-400 shrink-0" />
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
                          {t.publications.citedCount}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Abstract Accordion & BibTeX Copy */}
                {pub.abstract && (
                  <div className="mt-3 pt-3 border-t border-white/5">
                    <button
                      onClick={() => toggleExpand(pub.id)}
                      className="text-xs font-mono text-slate-400 hover:text-accent-blue flex items-center gap-1 cursor-pointer"
                    >
                      <span>{isExpanded ? "▲ Hide Abstract" : "▼ " + t.publications.abstractTitle}</span>
                    </button>

                    {isExpanded && (
                      <div className="mt-3 space-y-3 bg-[#161618]/60 p-4 rounded-xl border border-white/5 text-xs text-slate-300 leading-relaxed">
                        <p>{pub.abstract}</p>

                        <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-white/5">
                          <button
                            onClick={() => handleCopyBib(pub)}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#111112] border border-white/10 text-slate-300 hover:text-white hover:bg-white/5 text-xs font-mono transition-colors cursor-pointer"
                          >
                            {copiedBibId === pub.id ? (
                              <>
                                <Check className="w-3.5 h-3.5 text-accent-emerald" />
                                <span className="text-accent-emerald">{t.publications.copiedBibtex}</span>
                              </>
                            ) : (
                              <>
                                <Copy className="w-3.5 h-3.5 text-slate-400" />
                                <span>{t.publications.copyBibtex}</span>
                              </>
                            )}
                          </button>

                          {pub.url && (
                            <a
                              href={pub.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-accent-blue hover:underline font-semibold text-xs cursor-pointer"
                            >
                              <span>{t.publications.viewPaper}</span>
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* Show More Button */}
      {visibleCount < filteredAndSortedPublications.length && (
        <div className="mt-8 text-center">
          <button
            onClick={() => setVisibleCount((prev) => prev + 6)}
            className="px-6 py-2.5 bg-[#161618] border border-white/10 hover:border-white/20 text-slate-200 hover:text-white rounded-xl text-xs font-semibold shadow-sm transition-all cursor-pointer"
          >
            {t.publications.showMore} ({t.publications.showingCount} {visibleCount} / {filteredAndSortedPublications.length})
          </button>
        </div>
      )}
    </section>
  );
}
