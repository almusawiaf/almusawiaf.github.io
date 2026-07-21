import React, { useState } from "react";
import { ResearchCategory } from "../types";
import { Network, HelpCircle, Activity, GitFork, BrainCircuit, HeartPulse, ShieldAlert } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

interface NodeData {
  id: string;
  category: ResearchCategory;
  icon: React.ReactNode;
  x: number;
  y: number;
  keyPublications: string[];
}

const NODES_CONFIG: NodeData[] = [
  {
    id: "net-vulnerability",
    x: 200,
    y: 120,
    category: ResearchCategory.NETWORK_SCIENCE,
    icon: <ShieldAlert className="w-5 h-5 text-rose-500" />,
    keyPublications: ["Scientific Reports 2023", "Scientific Reports 2022"],
  },
  {
    id: "link-prediction",
    x: 400,
    y: 100,
    category: ResearchCategory.NETWORK_SCIENCE,
    icon: <GitFork className="w-5 h-5 text-blue-500" />,
    keyPublications: ["Scientific Reports 2022", "Hum. & Soc. Sci. Comm. 2023"],
  },
  {
    id: "net-biology",
    x: 600,
    y: 150,
    category: ResearchCategory.NETWORK_SCIENCE,
    icon: <Activity className="w-5 h-5 text-teal-500" />,
    keyPublications: ["Frontiers in Bioeng. 2015", "IEEE Access 2025"],
  },
  {
    id: "patient-similarity",
    x: 700,
    y: 280,
    category: ResearchCategory.HEALTH_INFORMATICS,
    icon: <HeartPulse className="w-5 h-5 text-emerald-500" />,
    keyPublications: ["IEEE TCBB 2026", "AAPM 2023"],
  },
  {
    id: "gnn-ehr",
    x: 500,
    y: 350,
    category: ResearchCategory.HEALTH_INFORMATICS,
    icon: <BrainCircuit className="w-5 h-5 text-purple-500" />,
    keyPublications: ["ACM BCB 2025", "Research Square 2025"],
  },
  {
    id: "care-coordination",
    x: 250,
    y: 320,
    category: ResearchCategory.SOCIAL_NETWORKS,
    icon: <Network className="w-5 h-5 text-cyan-500" />,
    keyPublications: ["ACM BCB 2014", "Springer LNCS 2018"],
  },
];

const EDGES = [
  { source: "net-vulnerability", target: "link-prediction" },
  { source: "link-prediction", target: "net-biology" },
  { source: "net-biology", target: "patient-similarity" },
  { source: "patient-similarity", target: "gnn-ehr" },
  { source: "gnn-ehr", target: "care-coordination" },
  { source: "care-coordination", target: "net-vulnerability" },
  { source: "link-prediction", target: "gnn-ehr" },
  { source: "net-biology", target: "gnn-ehr" },
];

interface ResearchMapProps {
  onSelectCategory: (category: ResearchCategory | null) => void;
  selectedCategory: ResearchCategory | null;
}

export default function ResearchMap({ onSelectCategory, selectedCategory }: ResearchMapProps) {
  const { t, language } = useLanguage();
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);
  const [activeNodeId, setActiveNodeId] = useState<string>("link-prediction");

  // Localized text map for nodes
  const getNodeDetails = (id: string) => {
    switch (id) {
      case "net-vulnerability":
        return t.researchMap.nodeVulnerability;
      case "link-prediction":
        return t.researchMap.nodeLinkPrediction;
      case "net-biology":
        return t.researchMap.nodeNetBiology;
      case "patient-similarity":
        return t.researchMap.nodePatientSimilarity;
      case "gnn-ehr":
        return t.researchMap.nodeGnnEhr;
      case "care-coordination":
        return t.researchMap.nodeCareCoordination;
      default:
        return t.researchMap.nodeLinkPrediction;
    }
  };

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

  const activeNodeData = NODES_CONFIG.find((n) => n.id === activeNodeId) || NODES_CONFIG[1];
  const activeNodeDetails = getNodeDetails(activeNodeData.id);

  const handleNodeClick = (node: NodeData) => {
    setActiveNodeId(node.id);
    if (selectedCategory === node.category) {
      onSelectCategory(null);
    } else {
      onSelectCategory(node.category);
    }
  };

  return (
    <div id="research-map" className="bg-[#111112] border border-white/5 rounded-2xl p-6 md:p-8 shadow-sm mb-8 scroll-mt-24">
      <div className="mb-6">
        <div className="flex items-center gap-2 text-accent-blue text-xs font-mono tracking-widest uppercase mb-1">
          <Network className="w-4 h-4" />
          <span>{t.researchMap.badge}</span>
        </div>
        <h3 className="text-2xl font-display font-semibold tracking-tight text-slate-100">
          {t.researchMap.title}
        </h3>
        <p className="text-slate-400 mt-1 max-w-2xl text-sm md:text-base">
          {t.researchMap.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* SVG Visualization Canvas */}
        <div className="lg:col-span-7 bg-[#161618]/30 border border-white/5 rounded-xl relative overflow-hidden flex justify-center items-center py-4">
          <svg
            viewBox="100 50 700 360"
            className="w-full h-auto max-h-[380px] drop-shadow-sm select-none"
          >
            <defs>
              <linearGradient id="edge-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#cbd5e1" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#94a3b8" stopOpacity="0.4" />
              </linearGradient>
            </defs>

            {/* Render Network Connections */}
            {EDGES.map((edge, idx) => {
              const src = NODES_CONFIG.find((n) => n.id === edge.source);
              const tgt = NODES_CONFIG.find((n) => n.id === edge.target);
              if (!src || !tgt) return null;

              const isEdgeHighlighted =
                activeNodeId === edge.source ||
                activeNodeId === edge.target ||
                hoveredNodeId === edge.source ||
                hoveredNodeId === edge.target;

              return (
                <line
                  key={`edge-${idx}`}
                  x1={src.x}
                  y1={src.y}
                  x2={tgt.x}
                  y2={tgt.y}
                  stroke={isEdgeHighlighted ? "#C5A059" : "rgba(255, 255, 255, 0.12)"}
                  strokeWidth={isEdgeHighlighted ? 2.5 : 1.2}
                  strokeDasharray={isEdgeHighlighted ? "none" : "3,3"}
                  className="transition-all duration-300"
                />
              );
            })}

            {/* Render Nodes */}
            {NODES_CONFIG.map((node) => {
              const details = getNodeDetails(node.id);
              const isSelected = activeNodeId === node.id;
              const isCategoryMatch = selectedCategory === node.category;
              const isHovered = hoveredNodeId === node.id;

              return (
                <g
                  key={node.id}
                  className="cursor-pointer group"
                  transform={`translate(${node.x}, ${node.y})`}
                  onClick={() => handleNodeClick(node)}
                  onMouseEnter={() => setHoveredNodeId(node.id)}
                  onMouseLeave={() => setHoveredNodeId(null)}
                >
                  {isSelected && (
                    <circle
                      r="26"
                      fill="none"
                      stroke="#C5A059"
                      strokeWidth="2"
                      className="animate-ping opacity-25"
                    />
                  )}

                  <circle
                    r={isSelected ? "20" : "16"}
                    fill={isSelected ? "#C5A059" : isHovered ? "#232326" : "#111112"}
                    stroke={isSelected ? "#C5A059" : isCategoryMatch ? "#8E793E" : "rgba(255, 255, 255, 0.2)"}
                    strokeWidth={isSelected || isCategoryMatch ? "3" : "1.5"}
                    className="transition-all duration-300 shadow-sm"
                  />

                  <circle
                    r="6"
                    fill={
                      node.category === ResearchCategory.NETWORK_SCIENCE
                        ? "#C5A059"
                        : node.category === ResearchCategory.HEALTH_INFORMATICS
                        ? "#8E793E"
                        : node.category === ResearchCategory.SOCIAL_NETWORKS
                        ? "#d4af37"
                        : "#e2e2e5"
                    }
                  />

                  <text
                    y={isSelected ? "34" : "28"}
                    textAnchor="middle"
                    className={`font-sans select-none pointer-events-none transition-all duration-200 ${
                      isSelected
                        ? "text-[11px] font-semibold fill-[#F0F0F0]"
                        : "text-[10px] font-medium fill-[#aaaaaf] group-hover:fill-[#F0F0F0]"
                    }`}
                  >
                    {details.label}
                  </text>
                </g>
              );
            })}
          </svg>

          {selectedCategory && (
            <div className="absolute top-3 right-3 bg-accent-blue/10 text-accent-blue text-[11px] font-mono font-medium px-2 py-0.5 rounded border border-accent-blue/20 flex items-center gap-1.5 animate-pulse">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-blue"></span>
              {t.researchMap.selectedCategoryText}
            </div>
          )}
        </div>

        {/* Dynamic Detail Card */}
        <div className="lg:col-span-5 h-full flex flex-col justify-between">
          <div className="bg-[#161618]/50 rounded-xl p-5 border border-white/5 flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-[#111112] rounded-lg border border-white/5 shadow-sm">
                  {activeNodeData.icon}
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-500 block uppercase tracking-wider">
                    {getCategoryTitle(activeNodeData.category)}
                  </span>
                  <h4 className="text-base font-display font-semibold text-slate-100 leading-tight">
                    {activeNodeDetails.label}
                  </h4>
                </div>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                {activeNodeDetails.desc}
              </p>

              <div className="space-y-1.5">
                <span className="text-xs font-mono text-slate-500 block uppercase">
                  {t.researchMap.keyPubsTitle}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {activeNodeData.keyPublications.map((paper, i) => (
                    <span
                      key={i}
                      className="text-[11px] font-mono bg-[#111112] border border-white/5 px-2 py-0.5 rounded text-slate-300 font-medium"
                    >
                      {paper}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <span className="text-[11px] font-sans text-slate-500 italic">
                * {selectedCategory ? getCategoryTitle(selectedCategory) : t.researchMap.allCategories}
              </span>
              <button
                onClick={() => {
                  onSelectCategory(selectedCategory === activeNodeData.category ? null : activeNodeData.category);
                }}
                className={`text-xs font-medium px-3.5 py-1.5 rounded-lg transition-all duration-200 border cursor-pointer ${
                  selectedCategory === activeNodeData.category
                    ? "bg-accent-blue border-accent-blue text-slate-950 hover:bg-accent-blue/90 font-semibold"
                    : "bg-[#111112] border-white/10 text-slate-300 hover:bg-white/5 hover:text-white"
                }`}
              >
                {selectedCategory === activeNodeData.category ? t.researchMap.resetFilter : `تصفية حسب المجال / Filter`}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
