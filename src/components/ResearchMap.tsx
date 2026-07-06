import React, { useState } from "react";
import { ResearchCategory } from "../types";
import { Network, HelpCircle, Activity, Info, GitFork, BrainCircuit, HeartPulse, ShieldAlert } from "lucide-react";

interface Node {
  id: string;
  label: string;
  x: number;
  y: number;
  category: ResearchCategory;
  icon: React.ReactNode;
  description: string;
  keyPublications: string[];
}

interface Edge {
  source: string;
  target: string;
}

const NODES: Node[] = [
  {
    id: "net-vulnerability",
    label: "Network Robustness",
    x: 200,
    y: 120,
    category: ResearchCategory.NETWORK_SCIENCE,
    icon: <ShieldAlert className="w-5 h-5 text-rose-500" />,
    description: "Analyzing indicators of complex network vulnerability and attack tolerance under targeted attacks. Essential for critical utility infrastructures and cyber-physical grids.",
    keyPublications: ["Scientific Reports 2023", "Scientific Reports 2022"],
  },
  {
    id: "link-prediction",
    label: "Link Prediction",
    x: 400,
    y: 100,
    category: ResearchCategory.NETWORK_SCIENCE,
    icon: <GitFork className="w-5 h-5 text-blue-500" />,
    description: "Predicting latent or missing associations in directed networks. Employs structural motif metrics, assortativity matching, and feed-forward loop alignments.",
    keyPublications: ["Scientific Reports 2022", "Hum. & Soc. Sci. Comm. 2023"],
  },
  {
    id: "net-biology",
    label: "Network Biology",
    x: 600,
    y: 150,
    category: ResearchCategory.NETWORK_SCIENCE,
    icon: <Activity className="w-5 h-5 text-teal-500" />,
    description: "Developing growing models of transcriptional gene regulatory networks using motif-based preferential attachment and link prediction to discover novel therapeutics.",
    keyPublications: ["Frontiers in Bioeng. 2015", "IEEE Access 2025"],
  },
  {
    id: "patient-similarity",
    label: "Patient Similarity Networks",
    x: 700,
    y: 280,
    category: ResearchCategory.HEALTH_INFORMATICS,
    icon: <HeartPulse className="w-5 h-5 text-emerald-500" />,
    description: "Modeling clinical EHRs as patient similarity networks (PSNs) where edges reflect diagnostic overlap. Reveals patient sub-types for precise disease prognoses.",
    keyPublications: ["IEEE TCBB 2026", "AAPM 2023"],
  },
  {
    id: "gnn-ehr",
    label: "Graph Neural Networks",
    x: 500,
    y: 350,
    category: ResearchCategory.HEALTH_INFORMATICS,
    icon: <BrainCircuit className="w-5 h-5 text-purple-500" />,
    description: "Deploying GNNs on homogeneous and heterogeneous clinical similarity graphs. Specifically designed for high-accuracy length of stay predictions in intensive care units (ICUs).",
    keyPublications: ["ACM BCB 2025", "Research Square 2025"],
  },
  {
    id: "care-coordination",
    label: "Care Coordination Analysis",
    x: 250,
    y: 320,
    category: ResearchCategory.SOCIAL_NETWORKS,
    icon: <Network className="w-5 h-5 text-cyan-500" />,
    description: "Modeling physician patient-sharing systems as social networks. Uses centrality metrics to optimize care coordination and assess professional integration.",
    keyPublications: ["ACM BCB 2014", "Springer LNCS 2018"],
  },
];

const EDGES: Edge[] = [
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
  const [hoveredNode, setHoveredNode] = useState<Node | null>(null);
  const [activeNode, setActiveNode] = useState<Node | null>(NODES[1]); // Default select Link Prediction

  const handleNodeClick = (node: Node) => {
    setActiveNode(node);
    if (selectedCategory === node.category) {
      // Toggle off if already matching
      onSelectCategory(null);
    } else {
      onSelectCategory(node.category);
    }
  };

  return (
    <div className="bg-[#111112] border border-white/5 rounded-2xl p-6 md:p-8 shadow-sm">
      <div className="mb-6">
        <div className="flex items-center gap-2 text-accent-blue text-xs font-mono tracking-widest uppercase mb-1">
          <Network className="w-4 h-4" />
          <span>Interactive Ontology Map</span>
        </div>
        <h3 className="text-2xl font-display font-semibold tracking-tight text-slate-100">
          The Research Network
        </h3>
        <p className="text-slate-400 mt-1 max-w-2xl text-sm md:text-base">
          Click any node in Dr. Al Musawi&apos;s network topology map to inspect the underlying research paradigm and filter corresponding publications in the section below.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* SVG Visualization Canvas */}
        <div className="lg:col-span-7 bg-[#161618]/30 border border-white/5 rounded-xl relative overflow-hidden flex justify-center items-center py-4">
          <svg
            viewBox="100 50 700 360"
            className="w-full h-auto max-h-[380px] drop-shadow-sm select-none"
          >
            {/* Defs for gradients/arrows */}
            <defs>
              <linearGradient id="edge-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#cbd5e1" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#94a3b8" stopOpacity="0.4" />
              </linearGradient>
              <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Render Network Connections */}
            {EDGES.map((edge, idx) => {
              const src = NODES.find((n) => n.id === edge.source);
              const tgt = NODES.find((n) => n.id === edge.target);
              if (!src || !tgt) return null;

              const isEdgeHighlighted =
                (activeNode && (activeNode.id === edge.source || activeNode.id === edge.target)) ||
                (hoveredNode && (hoveredNode.id === edge.source || hoveredNode.id === edge.target));

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
            {NODES.map((node) => {
              const isSelected = activeNode?.id === node.id;
              const isCategoryMatch = selectedCategory === node.category;
              const isHovered = hoveredNode?.id === node.id;

              return (
                <g
                  key={node.id}
                  className="cursor-pointer group"
                  transform={`translate(${node.x}, ${node.y})`}
                  onClick={() => handleNodeClick(node)}
                  onMouseEnter={() => setHoveredNode(node)}
                  onMouseLeave={() => setHoveredNode(null)}
                >
                  {/* Subtle pulsing background for selected */}
                  {isSelected && (
                    <circle
                      r="26"
                      fill="none"
                      stroke="#C5A059"
                      strokeWidth="2"
                      className="animate-ping opacity-25"
                    />
                  )}

                  {/* Outer circle */}
                  <circle
                    r={isSelected ? "20" : "16"}
                    fill={isSelected ? "#C5A059" : isHovered ? "#232326" : "#111112"}
                    stroke={isSelected ? "#C5A059" : isCategoryMatch ? "#8E793E" : "rgba(255, 255, 255, 0.2)"}
                    strokeWidth={isSelected || isCategoryMatch ? "3" : "1.5"}
                    className="transition-all duration-300 shadow-sm"
                  />

                  {/* Icon wrapper positioned inside the circle */}
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

                  {/* Node Label */}
                  <text
                    y={isSelected ? "34" : "28"}
                    textAnchor="middle"
                    className={`font-sans select-none pointer-events-none transition-all duration-200 ${
                      isSelected
                        ? "text-[11px] font-semibold fill-[#F0F0F0]"
                        : "text-[10px] font-medium fill-[#aaaaaf] group-hover:fill-[#F0F0F0]"
                    }`}
                  >
                    {node.label}
                  </text>
                </g>
              );
            })}
          </svg>

          {/* Quick interactive reset banner */}
          {selectedCategory && (
            <div className="absolute top-3 right-3 bg-accent-blue/10 text-accent-blue text-[11px] font-mono font-medium px-2 py-0.5 rounded border border-accent-blue/20 flex items-center gap-1.5 animate-pulse">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-blue"></span>
              Category Filter Active
            </div>
          )}
        </div>

        {/* Dynamic Detail Card */}
        <div className="lg:col-span-5 h-full flex flex-col justify-between">
          {activeNode ? (
            <div className="bg-[#161618]/50 rounded-xl p-5 border border-white/5 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-[#111112] rounded-lg border border-white/5 shadow-sm">
                    {activeNode.icon}
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-500 block uppercase tracking-wider">
                      {activeNode.category}
                    </span>
                    <h4 className="text-base font-display font-semibold text-slate-100 leading-tight">
                      {activeNode.label}
                    </h4>
                  </div>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  {activeNode.description}
                </p>

                <div className="space-y-1.5">
                  <span className="text-xs font-mono text-slate-500 block uppercase">
                    Representative Work:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {activeNode.keyPublications.map((paper, i) => (
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
                  *Currently filtering: <strong className="text-accent-blue">{selectedCategory ? selectedCategory : "Showing All"}</strong>
                </span>
                <button
                  onClick={() => {
                    onSelectCategory(selectedCategory === activeNode.category ? null : activeNode.category);
                  }}
                  className={`text-xs font-medium px-3.5 py-1.5 rounded-lg transition-all duration-200 border cursor-pointer ${
                    selectedCategory === activeNode.category
                      ? "bg-accent-blue border-accent-blue text-slate-950 hover:bg-accent-blue/90 font-semibold"
                      : "bg-[#111112] border-white/10 text-slate-300 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {selectedCategory === activeNode.category ? "Show All Papers" : `Filter by theme`}
                </button>
              </div>
            </div>
          ) : (
            <div className="bg-[#161618]/50 rounded-xl p-6 border border-white/5 flex flex-col items-center justify-center text-center h-full text-slate-500">
              <HelpCircle className="w-10 h-10 mb-2 stroke-1 text-slate-600" />
              <p className="text-xs font-mono">Select a topology node to analyze details</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
