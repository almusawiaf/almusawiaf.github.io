export type Language = "en" | "ar";

export interface TranslationStructure {
  nav: {
    bio: string;
    researchMap: string;
    publications: string;
    timeline: string;
    contact: string;
    brandRole: string;
    toggleLang: string;
  };
  hero: {
    statusBadge: string;
    name: string;
    title: string;
    bio: string;
    location: string;
    educationBadge: string;
    contactEmails: string;
    exploreBtn: string;
    contactBtn: string;
    scholarBtn: string;
    researchGateBtn: string;
    orcidBtn: string;
  };
  stats: {
    totalPubsLabel: string;
    totalPubsValue: string;
    totalPubsDesc: string;
    citationsLabel: string;
    citationsValue: string;
    citationsDesc: string;
    hIndexLabel: string;
    hIndexValue: string;
    hIndexDesc: string;
    experienceLabel: string;
    experienceValue: string;
    experienceDesc: string;
    footprintTitle: string;
    footprintHeading: string;
    updatedMetric: string;
  };
  about: {
    title: string;
    p1: string;
    p2: string;
    p3: string;
    capabilitiesTitle: string;
  };
  skills: {
    aiMl: string;
    netSci: string;
    dataSci: string;
    softwareEng: string;
  };
  researchMap: {
    badge: string;
    title: string;
    subtitle: string;
    clickPrompt: string;
    resetFilter: string;
    allCategories: string;
    selectedCategoryText: string;
    keyPubsTitle: string;
    nodeVulnerability: {
      label: string;
      desc: string;
    };
    nodeLinkPrediction: {
      label: string;
      desc: string;
    };
    nodeNetBiology: {
      label: string;
      desc: string;
    };
    nodePatientSimilarity: {
      label: string;
      desc: string;
    };
    nodeGnnEhr: {
      label: string;
      desc: string;
    };
    nodeCareCoordination: {
      label: string;
      desc: string;
    };
  };
  publications: {
    badge: string;
    title: string;
    subtitle: string;
    searchPlaceholder: string;
    sortByLabel: string;
    sortNewest: string;
    sortOldest: string;
    sortCitations: string;
    filterAll: string;
    citedCount: string;
    featuredBadge: string;
    abstractTitle: string;
    copyBibtex: string;
    copiedBibtex: string;
    viewPaper: string;
    showMore: string;
    showingCount: string;
    noResults: string;
  };
  timeline: {
    eduTitle: string;
    eduSubtitle: string;
    expTitle: string;
    expSubtitle: string;
    viewDissertation: string;
    advisorLabel: string;
    eduPhdTitle: string;
    eduPhdInst: string;
    eduPhdDesc: string;
    eduMscTitle: string;
    eduMscInst: string;
    eduMscDesc: string;
    eduBscTitle: string;
    eduBscInst: string;
    eduBscDesc: string;
    empLecturerTitle: string;
    empLecturerInst: string;
    empLecturerDesc: string;
    empProgrammerTitle: string;
    empProgrammerInst: string;
    empProgrammerDesc: string;
  };
  contact: {
    badge: string;
    title: string;
    subtitle: string;
    directEmails: string;
    officeLocation: string;
    locationDesc: string;
    hours: string;
    hoursDesc: string;
    formName: string;
    formNamePlaceholder: string;
    formEmail: string;
    formEmailPlaceholder: string;
    formInst: string;
    formInstPlaceholder: string;
    formSubject: string;
    formSubjectResearch: string;
    formSubjectCollab: string;
    formSubjectTeaching: string;
    formSubjectOther: string;
    formMessage: string;
    formMessagePlaceholder: string;
    sendBtn: string;
    sendingBtn: string;
    successMessage: string;
    errorMessage: string;
  };
  categories: {
    networkScience: string;
    healthInformatics: string;
    socialNetworks: string;
    securityMl: string;
    dataMining: string;
  };
}

export const translations: Record<Language, TranslationStructure> = {
  en: {
    nav: {
      bio: "Biography",
      researchMap: "Research Map",
      publications: "Publications",
      timeline: "Academic Timeline",
      contact: "Contact",
      brandRole: "Computer Science Ph.D.",
      toggleLang: "العربية",
    },
    hero: {
      statusBadge: "Available for Collaborations",
      name: "Ahmad F. Al Musawi, Ph.D.",
      title: "Computer Scientist & Senior Researcher",
      bio: "Specializing in Network Science, Graph Neural Networks (GNNs), and Clinical Machine Learning. Dr. Al Musawi models medical records and biological mechanisms as complex topologies to forecast critical disease progressions and optimize healthcare systems.",
      location: "Nasiriyah, Thi Qar, Iraq",
      educationBadge: "Ph.D. Graduate, VCU 2025",
      contactEmails: "Direct Academic Email Addresses",
      exploreBtn: "Explore Publications",
      contactBtn: "Direct Contact",
      scholarBtn: "Google Scholar Profile",
      researchGateBtn: "ResearchGate Profile",
      orcidBtn: "ORCID iD",
    },
    stats: {
      totalPubsLabel: "Total Publications",
      totalPubsValue: "20",
      totalPubsDesc: "Scholarly works across high-impact journals & conferences",
      citationsLabel: "Citations (Google Scholar)",
      citationsValue: "90+",
      citationsDesc: "Reflecting global research footprint and collaborative impact",
      hIndexLabel: "H-Index Estimate",
      hIndexValue: "6",
      hIndexDesc: "With top publication in Nature's Scientific Reports",
      experienceLabel: "Academic Experience",
      experienceValue: "10+ Years",
      experienceDesc: "Senior Lecturer, Senior Programmer & Researcher",
      footprintTitle: "Scholarly Footprint",
      footprintHeading: "Academic Impact",
      updatedMetric: "Updated with latest Google Scholar metrics",
    },
    about: {
      title: "Research & Bio",
      p1: "I hold a Ph.D. in Computer Science from Virginia Commonwealth University (VCU), where my research centered at the intersection of Network Science, Graph Neural Networks (GNNs), and Clinical Machine Learning. My doctoral dissertation, advised by Dr. Preetam Ghosh, formulated innovative machine learning architectures leveraging Patient Similarity Networks (PSNs) and clinical temporality to predict chronic disease trajectories and optimize critical hospital resource allocation.",
      p2: "Over the last decade, I have served as a Senior Lecturer at the University of Thi-Qar, leading courses in AI, network theory, and software development, and mentoring hundreds of undergraduate students. My software engineering roots span from robust full-stack platforms to specialized mathematical solvers and complex simulation environments.",
      p3: "My current research efforts focus on advancing precision medicine. By translating complex, multi-modal electronic health records (EHRs like MIMIC-III) into interconnected graph structures, I deploy Graph Neural Networks (GNNs) to forecast ICU length of stay, survival coefficients, and therapeutic outcomes with superior transparency and predictive power.",
      capabilitiesTitle: "Technical & Research Capabilities",
    },
    skills: {
      aiMl: "AI & Machine Learning",
      netSci: "Network Science & Analytics",
      dataSci: "Data Science & Engineering",
      softwareEng: "Software Engineering & Full Stack",
    },
    researchMap: {
      badge: "Interactive Topology",
      title: "Interdisciplinary Research Map",
      subtitle: "Click on any node to filter publications and explore computational sub-domains.",
      clickPrompt: "Click a node to inspect focus area & publications",
      resetFilter: "Reset Map Filter",
      allCategories: "All Domains Selected",
      selectedCategoryText: "Filtering by Domain:",
      keyPubsTitle: "Key Publications in this Focus Area:",
      nodeVulnerability: {
        label: "Network Robustness",
        desc: "Analyzing indicators of complex network vulnerability and attack tolerance under targeted attacks. Essential for critical utility infrastructures and cyber-physical grids.",
      },
      nodeLinkPrediction: {
        label: "Link Prediction",
        desc: "Predicting latent or missing associations in directed networks. Employs structural motif metrics, assortativity matching, and feed-forward loop alignments.",
      },
      nodeNetBiology: {
        label: "Network Biology",
        desc: "Developing growing models of transcriptional gene regulatory networks using motif-based preferential attachment and link prediction to discover novel therapeutics.",
      },
      nodePatientSimilarity: {
        label: "Patient Similarity Networks",
        desc: "Modeling clinical EHRs as patient similarity networks (PSNs) where edges reflect diagnostic overlap. Reveals patient sub-types for precise disease prognoses.",
      },
      nodeGnnEhr: {
        label: "Graph Neural Networks",
        desc: "Deploying GNNs on homogeneous and heterogeneous clinical similarity graphs. Specifically designed for high-accuracy length of stay predictions in intensive care units (ICUs).",
      },
      nodeCareCoordination: {
        label: "Care Coordination Analysis",
        desc: "Modeling physician patient-sharing systems as social networks. Uses centrality metrics to optimize care coordination and assess professional integration.",
      },
    },
    publications: {
      badge: "Academic Publications",
      title: "Scholarly Works",
      subtitle: "Peer-reviewed papers, journals, doctoral works, and conference proceedings.",
      searchPlaceholder: "Search title, author, venue, or year...",
      sortByLabel: "Sort By:",
      sortNewest: "Newest First",
      sortOldest: "Oldest First",
      sortCitations: "Most Cited",
      filterAll: "All Categories",
      citedCount: "citations",
      featuredBadge: "Featured Work",
      abstractTitle: "Abstract & Research Summary",
      copyBibtex: "Copy BibTeX Citation",
      copiedBibtex: "BibTeX Copied!",
      viewPaper: "View Publication",
      showMore: "Show More Publications",
      showingCount: "Showing",
      noResults: "No publications found matching your criteria. Try adjusting search or category filter.",
    },
    timeline: {
      eduTitle: "Academic Education",
      eduSubtitle: "Formal academic degrees",
      expTitle: "Academic & Professional Experience",
      expSubtitle: "Teaching, leadership, and research career",
      viewDissertation: "View Ph.D. Dissertation",
      advisorLabel: "Advisor:",
      eduPhdTitle: "Ph.D. in Computer Science",
      eduPhdInst: "Virginia Commonwealth University (VCU), USA",
      eduPhdDesc: "Specialized in network science, clinical machine learning, and health informatics. Dissertation explored temporal and patient-similarity network paradigms to improve prognostic forecasting.",
      eduMscTitle: "M.Sc. in Computer Science",
      eduMscInst: "Virginia Commonwealth University (VCU), USA",
      eduMscDesc: "Completed comprehensive research and coursework in systems biology, graph theory, and database management.",
      eduBscTitle: "B.Sc. in Computer Science",
      eduBscInst: "University of Thi-Qar, Iraq",
      eduBscDesc: "Graduated with honors, gaining deep foundations in data structures, compiler design, and software programming.",
      empLecturerTitle: "Senior Lecturer",
      empLecturerInst: "Computer Science Department, University of Thi-Qar",
      empLecturerDesc: "Delivered advanced undergraduate lectures on Machine Learning, Discrete Structures, Database Systems, and Network Science. Supervised numerous student capstones and departmental research committees.",
      empProgrammerTitle: "Research Assistant & Programmer",
      empProgrammerInst: "University of Thi-Qar",
      empProgrammerDesc: "Led software design initiatives for campus systems and collaborated with research faculties to build computational models for scientific experiments.",
    },
    contact: {
      badge: "Get In Touch",
      title: "Collaboration & Inquiries",
      subtitle: "Whether you are interested in discussing complex networks, clinical predictive models, potential paper reviews, or educational collaborations, feel free to drop a message.",
      directEmails: "Direct Email Addresses",
      officeLocation: "Office Location",
      locationDesc: "Department of Computer Science, University of Thi-Qar, Nasiriyah, Iraq",
      hours: "Academic Hours",
      hoursDesc: "Available for scholarly consultation and research discussions.",
      formName: "Full Name",
      formNamePlaceholder: "Dr. Jane Doe",
      formEmail: "Email Address",
      formEmailPlaceholder: "jane.doe@university.edu",
      formInst: "Institution / Organization",
      formInstPlaceholder: "Harvard Medical School / VCU / University...",
      formSubject: "Subject / Topic",
      formSubjectResearch: "Research Collaboration & Joint Grants",
      formSubjectCollab: "Clinical ML / GNN Inquiry",
      formSubjectTeaching: "Peer Review / Scholarly Inquiry",
      formSubjectOther: "General / Educational Inquiry",
      formMessage: "Message",
      formMessagePlaceholder: "Briefly outline your research proposal or inquiry...",
      sendBtn: "Send Message",
      sendingBtn: "Sending Message...",
      successMessage: "Thank you for reaching out! Your message has been prepared and logged. Dr. Al Musawi will reply shortly.",
      errorMessage: "Please fill out all required fields (Name, Email, Message) before sending.",
    },
    categories: {
      networkScience: "Network Science & Graph Theory",
      healthInformatics: "Healthcare Informatics & Clinical ML",
      socialNetworks: "Social Networks & Care Coordination",
      securityMl: "Security Informatics & Applied AI",
      dataMining: "General ML & Data Mining",
    },
  },
  ar: {
    nav: {
      bio: "السيرة الذاتية",
      researchMap: "خريطة البحوث",
      publications: "المنشورات العلمية",
      timeline: "المسيرة الأكاديمية",
      contact: "التواصل المباشر",
      brandRole: "دكتوراه في علوم الحاسوب",
      toggleLang: "English",
    },
    hero: {
      statusBadge: "متاح للتعاون الأكاديمي والبحثي",
      name: "د. أحمد فاضل الموسوي",
      title: "عالم حاسوب وباحث أول",
      bio: "متخصص في علم الشبكات، الشبكات العصبيّة البيانيّة (GNNs)، وتعلم الآلة السريري. يقوم د. الموسوي بنمذجة السجلات الطبية والآليات البيولوجية كشبكات معقدة للتنبؤ بمسارات الأمراض المزمنة وتحسين كفاءة أنظمة الرعاية الصحية.",
      location: "الناصرية، ذي قار، العراق",
      educationBadge: "خريج دكتوراه - جامعة VCU 2025",
      contactEmails: "العناوين الإلكترونية الأكاديمية الرسمية",
      exploreBtn: "تصفح الأبحاث والمنشورات",
      contactBtn: "التواصل المباشر",
      scholarBtn: "ملف Google Scholar",
      researchGateBtn: "ملف ResearchGate",
      orcidBtn: "معرّف ORCID",
    },
    stats: {
      totalPubsLabel: "إجمالي المنشورات العلمية",
      totalPubsValue: "20",
      totalPubsDesc: "أبحاث محكمة وأوراق منشورات في مجلات ومؤتمرات عالمية مرموقة",
      citationsLabel: "الاستشهادات الأكاديمية (Google Scholar)",
      citationsValue: "+90",
      citationsDesc: "تعكس النطاق العلمي العالمي والأثر التشاركي للبحوث",
      hIndexLabel: "مؤشر هـ (H-Index)",
      hIndexValue: "6",
      hIndexDesc: "يتضمن بحثاً رئيسياً في مجلة Nature Scientific Reports",
      experienceLabel: "الخبرة الأكاديمية والتدريسية",
      experienceValue: "+10 سنوات",
      experienceDesc: "محاضر أول ومبرمج باحث ومستشار علمي",
      footprintTitle: "الأثر العلمي والأكاديمي",
      footprintHeading: "المؤشرات والأرقام الأكاديمية",
      updatedMetric: "محدث بأحدث بيانات واستشهادات Google Scholar",
    },
    about: {
      title: "السيرة الذاتية والنطاق البحثي",
      p1: "أحمل درجة الدكتوراه في علوم الحاسوب من جامعة فيرجينيا كومونويلث (VCU) بالولايات المتحدة الأمريكية، حيث تركزت أبحاثي في التقاطع بين علم الشبكات، والشبكات العصبية البيانية (GNNs)، وتعلم الآلة السريري والمعلوماتية الصحية. تناولت أطروحتي للدكتوراه، بإشراف أ.د. بريتام غوش، ابتكار نماذج ذكاء اصطناعي تعتمد على شبكات تشابه المرضى (PSNs) والنمذجة الزمانية للتنبؤ بمسارات الأمراض المزمنة وتخصيص الموارد في المستشفيات.",
      p2: "على مدى العقد الماضي، عملت كمحاضر أول في قسم علوم الحاسوب بجامعة ذي قار، حيث قمت بتدريس مساقات متقدمة في الذكاء الاصطناعي، ونظرية الشبكات، وهياكل البيانات، وقواعد البيانات، مع الإشراف على مئات مشاريع التخرج للطلبة واللجان العلمية.",
      p3: "تركز جهودي البحثية الحالية على تطوير الطب الدقيق والتنبؤ الطبي. من خلال تحويل السجلات الصحية الإلكترونية غير المتجانسة (مثل بيانات MIMIC-III) إلى هياكل بيانية مترابطة، أستخدم شبكات الأعصاب البيانية لتحديد مدة إقامة العناية المركزة (ICU LOS)، ومؤشرات البقاء على قيد الحياة، والتنبؤ بالنتائج العلاجية بدقة عالية وشفافية فائقة.",
      capabilitiesTitle: "القدرات والمهارات التقنية والبحثية",
    },
    skills: {
      aiMl: "الذكاء الاصطناعي وتعلم الآلة",
      netSci: "علم الشبكات وتحليل البيانات المعقدة",
      dataSci: "علم البيانات وهندستها",
      softwareEng: "هندسة البرمجيات والأنظمة المتكاملة",
    },
    researchMap: {
      badge: "تفاعلية الهياكل",
      title: "خريطة المجالات البحثية المتداخلة",
      subtitle: "انقر على أي عقدة لتصفية المنشورات واستكشاف التخصصات الدقيقة.",
      clickPrompt: "انقر على عقدة لعرض التخصص والمنشورات المتعلقة بها",
      resetFilter: "إلغاء التصفية والأظهار للكل",
      allCategories: "جميع المجالات معروضة",
      selectedCategoryText: "جاري التصفية حسب المجال:",
      keyPubsTitle: "أبرز المنشورات في هذا المجال البحثي:",
      nodeVulnerability: {
        label: "متانة وقوة الشبكات",
        desc: "تحليل مؤشرات هشاشة الشبكات المعقدة وقدرتها على تحمل الهجمات المستهدفة. أساسي للبنى التحتية الحيوية وشبكات الطاقة والاتصالات.",
      },
      nodeLinkPrediction: {
        label: "التنبؤ بالروابط المفقودة",
        desc: "التنبؤ بالعلاقات والروابط الخفية أو المفقودة في الشبكات الموجهة باستخدام خوارزميات الأشكال البنائية (Motifs) وتطابق التشابه.",
      },
      nodeNetBiology: {
        label: "البيولوجيا الشبكية",
        desc: "تطوير نماذج نمو الشبكات الجينية والتنظيمية باستخدام آليات التعلق المفضل القائم على الأشكال البنائية لاكتشاف التفاعلات الدوائية والجينية.",
      },
      nodePatientSimilarity: {
        label: "شبكات تشابه المرضى",
        desc: "نمذجة السجلات الصحية الإلكترونية كشبكات تشابه بين المرضى (PSNs) حيث تعبر الروابط عن التشابه التشخيصي لتصنيف الأمراض بدقة.",
      },
      nodeGnnEhr: {
        label: "الشبكات العصبية البيانية (GNNs)",
        desc: "تطبيق نماذج GNNs على رسوم تشابه صحية متجانسة وغير متجانسة للتنبؤ بدقة بمدة إقامة المرضى في العناية المركزة (ICU).",
      },
      nodeCareCoordination: {
        label: "تحليل تنسيق الرعاية الصحية",
        desc: "نمذجة شبكات إحالة وتشارك المرضى بين الأطباء كشبكات اجتماعية واستخدام المقاييس المركزية لتحسين كفاءة التواصل الطبي.",
      },
    },
    publications: {
      badge: "المنشورات والأبحاث",
      title: "الأوراق والمؤلفات العلمية",
      subtitle: "أبحاث محكمة في مجلات عالمية، مؤتمرات دولية، وأطاريح أكاديمية.",
      searchPlaceholder: "ابحث في العنوان، المؤلفين، أو اسم المجلة...",
      sortByLabel: "ترتيب حسب:",
      sortNewest: "الأحدث أولاً",
      sortOldest: "الأقدم أولاً",
      sortCitations: "الأكثر استشهاداً",
      filterAll: "جميع التصنيفات",
      citedCount: "استشهاد",
      featuredBadge: "بحث مميز",
      abstractTitle: "الملخص والهدف البحثي",
      copyBibtex: "نسخ الاقتباس (BibTeX)",
      copiedBibtex: "تم نسخ اقتباس BibTeX!",
      viewPaper: "عرض المقال الأصلي",
      showMore: "عرض المزيد من المنشورات",
      showingCount: "عرض",
      noResults: "لم يتم العثور على منشورات تطابق شروط البحث. يرجى تعديل البحث أو التصنيف.",
    },
    timeline: {
      eduTitle: "المؤهلات والشهادات الأكاديمية",
      eduSubtitle: "الدرجات الأكاديمية والجامعات",
      expTitle: "الخبرات الأكاديمية والمهنية",
      expSubtitle: "التدريس، البحث العلمي، والقيادة",
      viewDissertation: "عرض أطروحة الدكتوراه الكاملة",
      advisorLabel: "المشرف الأكاديمي:",
      eduPhdTitle: "دكتوراه في علوم الحاسوب",
      eduPhdInst: "جامعة فيرجينيا كومونويلث (VCU)، الولايات المتحدة الأمريكية",
      eduPhdDesc: "تخصص في علم الشبكات، تعلم الآلة السريري، والمعلوماتية الصحية. تناولت الأطروحة نماذج النمذجة الزمانية وشبكات تشابه المرضى للتنبؤ الطبي.",
      eduMscTitle: "ماجستير في علوم الحاسوب",
      eduMscInst: "جامعة فيرجينيا كومونويلث (VCU)، الولايات المتحدة الأمريكية",
      eduMscDesc: "إتمام دراسات وبحوث متقدمة في الأنظمة البيولوجية الحاسوبية، نظرية الرسوم البيانية، وإدارة قواعد البيانات المعقدة.",
      eduBscTitle: "بكالوريوس في علوم الحاسوب",
      eduBscInst: "جامعة ذي قار، العراق",
      eduBscDesc: "التخرج بمرتبة الشرف، مع التأسيس المتقدم في هياكل البيانات، تصميم المترجمات، والبرمجة المتقدمة.",
      empLecturerTitle: "محاضر أول (استاذ م.)",
      empLecturerInst: "قسم علوم الحاسوب، جامعة ذي قار",
      empLecturerDesc: "تدريس مساقات تعلم الآلة، الهياكل المتقطعة، قواعد البيانات، وعلم الشبكات. الإشراف على العديد من مشاريع التخرج واللجان العلمية في الكلية.",
      empProgrammerTitle: "مساعد پژوهش ومبرمج أنظمة",
      empProgrammerInst: "جامعة ذي قار",
      empProgrammerDesc: "قيادة تطوير الأنظمة البرمجية البرمجية والتعاون مع الكادر البحثي لبناء النماذج الحاسوبية للتجارب العلمية.",
    },
    contact: {
      badge: "تواصل معي",
      title: "الاستفسارات والتعاون البحثي",
      subtitle: "سواء كنت مهتماً بمناقشة أبحاث الشبكات المعقدة، النماذج التنبؤية الطبية، تحكيم الأوراق العلمية، أو التعاون الأكاديمي، يسعدني استقبال رسالتك.",
      directEmails: "عناوين البريد الإلكتروني المباشرة",
      officeLocation: "موقع المكتب الأكاديمي",
      locationDesc: "قسم علوم الحاسوب، كلية التربية للعلوم الصرفة / كلية العلوم، جامعة ذي قار، الناصرية، العراق",
      hours: "الساعات الأكاديمية",
      hoursDesc: "متاح للاستشارات الأكاديمية والنقاشات البحثية.",
      formName: "الاسم الكامل",
      formNamePlaceholder: "د. عبد الله محمد",
      formEmail: "البريد الإلكتروني",
      formEmailPlaceholder: "name@domain.edu",
      formInst: "الجامعة / المؤسسة",
      formInstPlaceholder: "جامعة ذي قار / جامعة VCU / مؤسسة أخرى...",
      formSubject: "موضوع الرسالة",
      formSubjectResearch: "تعاون بحثي / مشاريع مشتركة",
      formSubjectCollab: "استفسار حول تعلم الآلة والشبكات (GNNs)",
      formSubjectTeaching: "تحكيم أوراق علمية / استفسار أكاديمي",
      formSubjectOther: "استفسار عام",
      formMessage: "تفاصيل الرسالة",
      formMessagePlaceholder: "اكتب موجز مقترحك البحثي أو استفسارك هنا...",
      sendBtn: "إرسال الرسالة",
      sendingBtn: "جاري الإرسال...",
      successMessage: "شكراً لتواصلك! تم تجهيز رسالتك بنجاح. سيقوم د. أحمد فاضل الموسوي بالرد في أقرب وقت ممكن.",
      errorMessage: "يرجى تعبئة كافة الحقول المطلوبة (الاسم، البريد، والرسالة) قبل الإرسال.",
    },
    categories: {
      networkScience: "علم الشبكات ونظرية الرسوم البيانية",
      healthInformatics: "المعلوماتية الصحية وتعلم الآلة السريري",
      socialNetworks: "الشبكات الاجتماعية وتنسيق الرعاية",
      securityMl: "معلوماتية الأمن والذكاء الاصطناعي التطبيقي",
      dataMining: "التنقيب في البيانات وتعلم الآلة العام",
    },
  },
};
