export enum ResearchCategory {
  NETWORK_SCIENCE = "Network Science & Graph Theory",
  HEALTH_INFORMATICS = "Healthcare Informatics & Clinical ML",
  SOCIAL_NETWORKS = "Social Networks & Care Coordination",
  SECURITY_ML = "Security Informatics & Applied AI",
  DATA_MINING = "General ML & Data Mining",
}

export interface Publication {
  id: string;
  title: string;
  authors: string;
  venue: string;
  citations?: number;
  year: number;
  categories: ResearchCategory[];
  url?: string;
  abstract?: string;
  highlighted?: boolean;
}

export interface TimelineEvent {
  id: string;
  year: string;
  title: string;
  institution: string;
  description: string;
  advisor?: string;
  link?: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface AcademicStat {
  label: string;
  value: string | number;
  description: string;
}

export const ACADEMIC_STATS: AcademicStat[] = [
  {
    label: "Total Publications",
    value: 20,
    description: "Scholarly works across high-impact journals & conferences",
  },
  {
    label: "Citations (Google Scholar)",
    value: "90+",
    description: "Reflecting global research footprint and collaborative impact",
  },
  {
    label: "H-Index Estimate",
    value: 6,
    description: "With top publication in Nature's Scientific Reports",
  },
  {
    label: "Academic Experience",
    value: "10+ Years",
    description: "Senior Lecturer, Senior Programmer & Researcher",
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "AI & Machine Learning",
    skills: ["Graph Neural Networks (GNNs)", "Deep Learning", "Supervised/Unsupervised Learning", "PyTorch", "Scikit-Learn", "Patient Similarity Networks"],
  },
  {
    title: "Network Science & Analytics",
    skills: ["Complex Network Modeling", "Link Prediction Algorithms", "Graph Theory", "Motif-based Attachment", "Network Vulnerability / Robustness Analysis", "Social Network Analysis"],
  },
  {
    title: "Data Science & Engineering",
    skills: ["Python", "SQL & NoSQL Databases", "Big Data (Hadoop)", "R", "Feature Engineering", "Heterogeneous Data Integration"],
  },
  {
    title: "Software Engineering & Full Stack",
    skills: ["C / C++", "Java", "Node.js", "Angular", "PHP", "Git / Version Control", "Blender (3D Modeling)"],
  },
];

export const TIMELINE_EDUCATION: TimelineEvent[] = [
  {
    id: "edu-phd",
    year: "2025",
    title: "Ph.D. in Computer Science",
    institution: "Virginia Commonwealth University (VCU), USA",
    description: "Specialized in network science, clinical machine learning, and health informatics. Dissertation explored temporal and patient-similarity network paradigms to improve prognostic forecasting.",
    advisor: "Dr. Preetam Ghosh",
    link: "https://scholarscompass.vcu.edu/etd/8136/",
  },
  {
    id: "edu-msc",
    year: "2013",
    title: "M.Sc. in Computer Science",
    institution: "Virginia Commonwealth University (VCU), USA",
    description: "Completed comprehensive research and coursework in systems biology, graph theory, and database management.",
    advisor: "Dr. Preetam Ghosh",
  },
  {
    id: "edu-bsc",
    year: "2005",
    title: "B.Sc. in Computer Science",
    institution: "University of Thi-Qar, Iraq",
    description: "Graduated with honors, gaining deep foundations in data structures, compiler design, and software programming.",
    advisor: "Dr. Emad Ali",
  },
];

export const TIMELINE_EMPLOYMENT: TimelineEvent[] = [
  {
    id: "emp-lecturer",
    year: "2013 — 2023",
    title: "Senior Lecturer",
    institution: "Computer Science Department, University of Thi-Qar",
    description: "Delivered advanced undergraduate lectures on Machine Learning, Discrete Structures, Database Systems, and Network Science. Supervised numerous student capstones and departmental research committees.",
  },
  {
    id: "emp-programmer",
    year: "2005 — 2013",
    title: "Research Assistant & Programmer",
    institution: "University of Thi-Qar",
    description: "Led software design initiatives for campus systems and collaborated with research faculties to build computational models for scientific experiments.",
  },
];

export const PUBLICATIONS_DATA: Publication[] = [
  {
    id: "pub-1",
    title: "Examining indicators of complex network vulnerability across diverse attack scenarios",
    authors: "AF Al Musawi, S Roy, P Ghosh",
    venue: "Scientific Reports 13 (1), 18208",
    citations: 40,
    year: 2023,
    categories: [ResearchCategory.NETWORK_SCIENCE],
    url: "https://www.nature.com/articles/s41598-023-45305-6",
    abstract: "Understanding how complex networks respond to targeted attacks is vital to maintaining critical infrastructures. This study evaluates multiple vulnerability indicators, such as degree, betweenness, and eigenvector centrality, across varied attack strategies on heterogeneous real-world and synthetic graphs, providing pivotal guidelines for network robustness engineering.",
    highlighted: true,
  },
  {
    id: "pub-2",
    title: "Transcriptional network growing models using motif-based preferential attachment",
    authors: "AF Abdelzaher, AF Al-Musawi, P Ghosh, ML Mayo, EJ Perkins",
    venue: "Frontiers in Bioengineering and Biotechnology 3, 157",
    citations: 18,
    year: 2015,
    categories: [ResearchCategory.NETWORK_SCIENCE, ResearchCategory.HEALTH_INFORMATICS],
    url: "https://www.frontiersin.org/articles/10.3389/fbioe.2015.00157/full",
    abstract: "Modeling gene transcription regulatory networks requires growing models that match biological characteristics. We propose a motif-based preferential attachment model that successfully preserves specific local motifs (such as feed-forward loops), exhibiting closer structural properties to actual biological networks than classical models.",
    highlighted: true,
  },
  {
    id: "pub-3",
    title: "A review of link prediction applications in network biology",
    authors: "AF Al Musawi, S Roy, P Ghosh",
    venue: "IEEE Access 11, 14205-14223",
    citations: 11,
    year: 2025,
    categories: [ResearchCategory.NETWORK_SCIENCE, ResearchCategory.HEALTH_INFORMATICS],
    url: "https://ieeexplore.ieee.org/document/10361542",
    abstract: "Link prediction in network biology offers substantial potential to discover unknown drug-target interactions, protein-protein interactions, and disease associations. This review provides a comprehensive taxonomy of topological, machine learning, and deep representation-learning frameworks for biological link prediction.",
    highlighted: true,
  },
  {
    id: "pub-4",
    title: "Identifying accurate link predictors based on assortativity of complex networks",
    authors: "AF Al Musawi, S Roy, P Ghosh",
    venue: "Scientific Reports 12, 18107",
    citations: 9,
    year: 2022,
    categories: [ResearchCategory.NETWORK_SCIENCE],
    url: "https://www.nature.com/articles/s41598-022-21890-4",
    abstract: "Link prediction performance is heavily governed by underlying network topology. We demonstrate how assortativity—the tendency of similar nodes to connect—determines which category of topological predictors performs best, enabling the systematic selection of optimal prediction algorithms without costly brute-force benchmarking.",
    highlighted: true,
  },
  {
    id: "pub-5",
    title: "Inferring links in directed complex networks through feed forward loop motifs",
    authors: "S Roy, AF Al Musawi, P Ghosh",
    venue: "Humanities and Social Sciences Communications 10 (1), 358",
    citations: 5,
    year: 2023,
    categories: [ResearchCategory.NETWORK_SCIENCE],
    url: "https://www.nature.com/articles/s41599-023-01825-9",
    abstract: "Directed networks pose unique challenges for link prediction due to asymmetrical interactions. This paper leverages feed-forward loop (FFL) subgraph structures to build highly sensitive motif-aware similarity measures, significantly outperforming classical directed network similarity metrics.",
  },
  {
    id: "pub-6",
    title: "Cost-effective Vaccine Provisioning using Coalitional Game Theory",
    authors: "S Roy, AF Al Musawi, P Ghosh",
    venue: "2022 IEEE International Conference on Bioinformatics and Biomedicine (BIBM)",
    citations: 3,
    year: 2022,
    categories: [ResearchCategory.HEALTH_INFORMATICS, ResearchCategory.NETWORK_SCIENCE],
    url: "https://ieeexplore.ieee.org/document/9982431",
    abstract: "Distributing limited vaccine supplies efficiently across populations requires balancing economic constraints and health outcomes. We model this as a cooperative coalitional game to design cost-effective, fair allocation strategies that minimize outbreak spreads.",
  },
  {
    id: "pub-7",
    title: "Care coordination metrics of patients sharing among physicians: a social network analytic approach",
    authors: "AF Abdelzaher, P Ghosh, AF Al Musawi, DS Jackson, JA Palesis, ...",
    venue: "Proceedings of the 5th ACM Conference on Bioinformatics, Computational Biology and Health Informatics",
    citations: 3,
    year: 2014,
    categories: [ResearchCategory.SOCIAL_NETWORKS, ResearchCategory.HEALTH_INFORMATICS],
    url: "https://dl.acm.org/doi/10.1145/2649387.2649444",
    abstract: "Patient referral patterns can be modeled as healthcare networks where physicians are nodes and shared patients form directed, weighted edges. Using advanced social network metrics, we analyze care coordination efficiency to pinpoint systemic communication gaps among healthcare providers.",
  },
  {
    id: "pub-8",
    title: "Toward A Comprehensive Terrorist Prediction in Social Network",
    authors: "AF Al Musawi",
    venue: "International Journal Of Engineering Sciences Research Technology 4 (10), 108-115",
    citations: 2,
    year: 2015,
    categories: [ResearchCategory.SOCIAL_NETWORKS, ResearchCategory.SECURITY_ML],
    abstract: "Identifying malicious hubs and network structures is crucial for preemptive national security. This article models terrorist cells as covert social networks, testing topological and centralizing measures to detect latent leadership roles and predict recruitment channels.",
  },
  {
    id: "pub-9",
    title: "Incoming, Outgoing Degree and Importance Analysis of Network Motifs",
    authors: "AF Al Musawi",
    venue: "International Journal of Computer Applications 123 (9)",
    citations: 1,
    year: 2015,
    categories: [ResearchCategory.NETWORK_SCIENCE],
    abstract: "We analyze structural variations in 3-node and 4-node subgraphs (motifs) focusing on the relative weights of incoming and outgoing connections. This research highlights the functional roles different motifs serve in structural information processing.",
  },
  {
    id: "pub-10",
    title: "Complex network growing model using downlink motifs",
    authors: "A Al-Musawi Jr",
    venue: "University of Thi-Qar Scientific Journal",
    citations: 1,
    year: 2013,
    categories: [ResearchCategory.NETWORK_SCIENCE],
    abstract: "An analytical study proposing a model for growing directed structures using localized downward connection motifs, matching characteristics of real-world hierarchy structures.",
  },
  {
    id: "pub-11",
    title: "Incorporating Patient Similarity and Clinical Temporality in Disease Prognostic Modeling",
    authors: "AF Al Musawi, S Roy, P Ghosh",
    venue: "IEEE Transactions on Computational Biology and Bioinformatics",
    year: 2026,
    categories: [ResearchCategory.HEALTH_INFORMATICS],
    abstract: "Predicting disease progression on heterogeneous patient records suffers from missing values and non-linear timelines. This work develops an advanced prognostic modeling pipeline that integrates temporal clinical landmarks with custom-crafted Patient Similarity Networks (PSNs) to achieve unprecedented prediction accuracy for chronic conditions.",
    highlighted: true,
  },
  {
    id: "pub-12",
    title: "ICU-Length of Stay Prediction on Electronic Health Records using Graph Neural Networks and Homogeneous Similarity Graphs",
    authors: "AF Al Musawi, P Rana, S Raha, J Braunstein, WC Sleeman IV, R Kapoor, ...",
    venue: "Proceedings of the 16th ACM International Conference on Bioinformatics, Computational Biology and Health Informatics (BCB '25)",
    year: 2025,
    categories: [ResearchCategory.HEALTH_INFORMATICS],
    abstract: "Accurately predicting ICU Length of Stay (LOS) optimizes resource management and clinical triage. We introduce a Graph Neural Network (GNN) model operating on homogeneous clinical similarity graphs, surpassing traditional feedforward and recurrent networks by capturing inter-patient similarity features.",
    highlighted: true,
  },
  {
    id: "pub-13",
    title: "Improving Hospital Length of Stay Prediction through Heterogeneous Data Integration from MIMIC-III Records",
    authors: "AF Al Musawi, P Rana, S Raha, WC Sleeman IV, R Kapoor, P Ghosh",
    venue: "Research Square (Preprint), rs.3.rs-6753896",
    year: 2025,
    categories: [ResearchCategory.HEALTH_INFORMATICS],
    abstract: "Clinical datasets incorporate structural lab notes, continuous vitals, and unstructured demographic features. We build a multi-modal neural architecture to integrate these highly heterogeneous channels from MIMIC-III, producing extremely precise, dynamic hospital length of stay forecasts.",
  },
  {
    id: "pub-14",
    title: "Machine Learning Models Leveraging Patient-Similarity and Clinical Temporality for Disease Prognoses",
    authors: "AFA Musawi",
    venue: "Virginia Commonwealth University Scholars Compass (Doctoral Dissertation)",
    year: 2025,
    categories: [ResearchCategory.HEALTH_INFORMATICS, ResearchCategory.NETWORK_SCIENCE],
    url: "https://scholarscompass.vcu.edu/etd/8136/",
    abstract: "Doctoral dissertation exploring the amalgamation of complex patient similarity networks with state-of-the-art clinical machine learning. This work formulates novel similarity metrics and temporal frameworks to improve prognostic forecasting for critical ICU care, oncology trajectories, and chronic organ disease.",
  },
  {
    id: "pub-15",
    title: "Integrated Clinical Datasets Using Patient Similarity Networks Exhibit Heterogeneous Clusters for Lung and Prostate Cancer",
    authors: "A Al Musawi, WC Sleeman, R Kapoor, JR Palta, P Ghosh",
    venue: "AAPM 65th Annual Meeting & Exhibition",
    year: 2023,
    categories: [ResearchCategory.HEALTH_INFORMATICS, ResearchCategory.NETWORK_SCIENCE],
    abstract: "Oncology data is notoriously difficult to cluster. By modeling clinical profiles as Patient Similarity Networks (PSNs), we identify distinct sub-graphs that map to specific survival profiles and therapy responsiveness, providing oncologists with powerful cluster-based treatment decision metrics.",
  },
  {
    id: "pub-16",
    title: "Students Groups Detection in Online Examinations Using K-Means Clustering",
    authors: "AF Al Musawi, MA Hasan, AH Lazem",
    venue: "University of Thi-Qar Journal 17 (4)",
    year: 2022,
    categories: [ResearchCategory.DATA_MINING],
    abstract: "With the rise of virtual education platforms, monitoring examination integrity is essential. We apply unsupervised K-Means clustering on behavioral and answer timing metrics during online examinations to isolate clusters of abnormal student peer groups.",
  },
  {
    id: "pub-17",
    title: "Intrinsic and Simplified Complex Network Embedding Model",
    authors: "AF Al Musawi, P Ghosh",
    venue: "Next Generation of Internet of Things, 269-288",
    year: 2021,
    categories: [ResearchCategory.NETWORK_SCIENCE],
    abstract: "Representing complex structures in low-dimensional vector spaces can be computationally prohibitive. We introduce a simplified embedding model that preserves both local neighborhood similarities and global topological distances, enabling high-performance classification on resource-constrained devices.",
  },
  {
    id: "pub-18",
    title: "Application of Social Network Analytics to Assessing Different Care Coordination Metrics",
    authors: "AF Abdelzaher, P Ghosh, A Al Musawi, J Wang",
    venue: "Lecture Notes in Computer Science 10812, 151-160",
    year: 2018,
    categories: [ResearchCategory.SOCIAL_NETWORKS, ResearchCategory.HEALTH_INFORMATICS],
    url: "https://link.springer.com/chapter/10.1007/978-3-319-91345-2_14",
    abstract: "Analyzing communication networks in primary care clinics. This work designs care coordination benchmarks to analyze patient handover times and measures the collaboration density among diverse practitioner teams.",
  },
  {
    id: "pub-19",
    title: "Computer Science Approaches for Counterterrorism",
    authors: "AF Al Musawi",
    venue: "Scholarly Whitepaper / University of Thi-Qar Publication",
    year: 2016,
    categories: [ResearchCategory.SECURITY_ML],
    abstract: "A comprehensive survey exploring computer science domains like graph theory, cryptographic key escrow, sentiment mining on covert websites, and geospatial pattern detection applied to preemptive security.",
  },
  {
    id: "pub-20",
    title: "Supplementary Information: Improving Hospital Length of Stay Prediction through Heterogeneous Data Integration from MIMIC-III Records",
    authors: "AF Al Musawi, P Rana, S Raha, WC Sleeman IV, R Kapoor, P Ghosh",
    venue: "Preprint Documentation (Research Square)",
    year: 2025,
    categories: [ResearchCategory.HEALTH_INFORMATICS],
    abstract: "Contains the extensive, supportive model hyperparameter details, validation folds, and deep comparative statistical checks with benchmark models (LSTM, XGBoost) used to validate our integrated MIMIC-III prediction system.",
  }
];
