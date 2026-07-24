export interface TopicTimestamp {
  time?: string;
  seconds?: number;
  topicEn: string;
  topicAr: string;
}

export interface Lecture {
  id: string;
  number: number;
  part?: string;
  titleEn: string;
  titleAr: string;
  url?: string;
  youtubeId?: string;
  topics: TopicTimestamp[];
}

export interface Course {
  id: string;
  code: string;
  titleEn: string;
  titleAr: string;
  levelEn: string;
  levelAr: string;
  departmentEn: string;
  departmentAr: string;
  institutionEn: string;
  institutionAr: string;
  descriptionEn: string;
  descriptionAr: string;
  youtubePlaylistUrl?: string;
  lectures: Lecture[];
}

export const COURSES_DATA: Course[] = [
  {
    id: "business-intelligence-it4",
    code: "IT401",
    titleEn: "Business Intelligence",
    titleAr: "ذكاء الأعمال (Business Intelligence)",
    levelEn: "4th Year Undergraduate",
    levelAr: "المرحلة الرابعة - بكالوريوس",
    departmentEn: "Department of Information Technology",
    departmentAr: "قسم تكنولوجيا المعلومات",
    institutionEn: "University of Thi-Qar",
    institutionAr: "جامعة ذي قار",
    descriptionEn: "A comprehensive upper-level course covering decision support systems, data warehousing architectures, OLAP/OLTP, multidimensional cubes, ETL processes, exploratory data analysis, data mining methodologies, regression analysis, association rule mining, and k-NN classification.",
    descriptionAr: "كورس دراسي متكامل للمرحلة الرابعة يعالج نظم دعم القرار (DSS)، معمارية مستودعات البيانات (Data Warehouses)، معالجة OLAP و OLTP، المكعبات متعددة الأبعاد، عمليات ETL، التحليل الاستكشافي للبيانات (EDA)، مفاهيم التنقيب عن البيانات، تحليل الانحدار والتنبؤ، قواعد الاقتران، وخوارزميات التصنيف مثل k-NN.",
    youtubePlaylistUrl: "https://www.youtube.com/@new_ur_academy",
    lectures: [
      {
        id: "bi-lec1-p1",
        number: 1,
        part: "Part 1",
        titleEn: "Introduction to Business Intelligence (Part 1)",
        titleAr: "مقدمة في ذكاء الأعمال (الجزء الأول)",
        url: "https://youtu.be/tGb1qEG66xQ?si=3AjeRtMsOianCgHP",
        youtubeId: "tGb1qEG66xQ",
        topics: [
          { topicEn: "Course Agenda & Learning Objectives", topicAr: "جدول أعمال الكورس والأهداف التعليمية" },
          { topicEn: "Introduction to Business Intelligence (BI)", topicAr: "مقدمة شمولية في ذكاء الأعمال (BI)" },
          { topicEn: "Effective and Timely Decision Making", topicAr: "صنع القرارات الفعالة في الوقت المناسب" },
          { topicEn: "Customer Retention in Mobile & Telecom Industry", topicAr: "استراتيجيات الاحتفاظ بالعملاء في قطاع الاتصالات" },
          { topicEn: "Decision Making at the Ultimate Time", topicAr: "اتخاذ القرار في الوقت المثالي والأنسب" },
        ],
      },
      {
        id: "bi-lec1-p2",
        number: 1,
        part: "Part 2",
        titleEn: "Introduction to Business Intelligence (Part 2)",
        titleAr: "مقدمة في ذكاء الأعمال (الجزء الثاني)",
        url: "https://youtu.be/xQ0RmFCE6T8?si=bhANxEJ6AOOzx_wN",
        youtubeId: "xQ0RmFCE6T8",
        topics: [
          { topicEn: "Logistics Planning & Supply Chain Integration", topicAr: "التخطيط اللوجستي وتكامل سلاسل الإمداد" },
          { topicEn: "Data, Information, and Knowledge Continuum", topicAr: "التسلسل الهرمي: البيانات، المعلومات، والمعرفة" },
          { topicEn: "Role of Mathematical Models in BI", topicAr: "دور النماذج الرياضية في أنظمة ذكاء الأعمال" },
          { topicEn: "Business Intelligence System Architectures", topicAr: "معمارية وبنية أنظمة ذكاء الأعمال" },
          { topicEn: "The Cycle of a Business Intelligence System", topicAr: "دورة حياة نظام ذكاء الأعمال" },
          { topicEn: "Enabling Factors in BI Projects", topicAr: "العوامل الممكنة والعناصر الأساسية لمشاريع BI" },
          { topicEn: "Development Lifecycle of BI Systems", topicAr: "مراحل تطوير وبناء أنظمة ذكاء الأعمال" },
        ],
      },
      {
        id: "bi-lec2",
        number: 2,
        titleEn: "Decision Support Systems (DSS)",
        titleAr: "نظم دعم القرار (Decision Support Systems)",
        url: "https://youtu.be/DXgXta99how?si=z0DRebsxId2KTP_k",
        youtubeId: "DXgXta99how",
        topics: [
          { time: "00:00", seconds: 0, topicEn: "Lecture Agenda", topicAr: "جدول الأعمال" },
          { time: "01:46", seconds: 106, topicEn: "What is a System? System Theory & Foundations", topicAr: "ما هو النظام؟ أسس ونظرية الأنظمة" },
          { time: "13:07", seconds: 787, topicEn: "Representation of the Decision-Making Process", topicAr: "تمثيل عملية اتخاذ القرار" },
          { time: "13:07", seconds: 787, topicEn: "a. Rationality and Problem-Solving Frameworks", topicAr: "أ. العقلانية وأطر حل المشكلات" },
          { time: "20:50", seconds: 1250, topicEn: "b. The Multi-Stage Decision-Making Process", topicAr: "ب. مراحل عملية اتخاذ القرار" },
          { time: "28:57", seconds: 1737, topicEn: "c. Structured, Semi-Structured & Unstructured Decisions", topicAr: "ج. أنواع القرارات (الميكانيكية، شبه المهيكلة، وغير المهيكلة)" },
          { time: "33:22", seconds: 2002, topicEn: "d. Approaches to the Decision-Making Process", topicAr: "د. المناهج والأساليب المتبعة في صنع القرار" },
          { time: "37:14", seconds: 2234, topicEn: "Evolution of Information Systems (MIS, TPS, DSS, EIS)", topicAr: "تطور نظم المعلومات التاريخي" },
          { time: "41:50", seconds: 2510, topicEn: "Definition & Architecture of Decision Support Systems", topicAr: "تعريف وبنية نظم دعم القرار (DSS)" },
          { time: "51:29", seconds: 3089, topicEn: "Development Methodology for Decision Support Systems", topicAr: "منهجية تطوير وبناء نظام دعم القرار" },
        ],
      },
      {
        id: "bi-lec3-p1",
        number: 3,
        part: "Part 1",
        titleEn: "Data Warehouse Fundamentals (Part 1)",
        titleAr: "مستودع البيانات (Data Warehouse - الجزء الأول)",
        url: "https://youtu.be/51OMCAaVCNM?si=RP4M8kpqo1aavQUP",
        youtubeId: "51OMCAaVCNM",
        topics: [
          { time: "00:00", seconds: 0, topicEn: "Lecture Agenda", topicAr: "جدول الأعمال" },
          { time: "01:35", seconds: 95, topicEn: "Formal Definition of Data Warehouse", topicAr: "التعريف العلمي لمستودع البيانات" },
          { time: "11:56", seconds: 716, topicEn: "OLTP: On-Line Transaction Processing Systems", topicAr: "أنظمة معالجة المعاملات الفورية (OLTP)" },
          { time: "15:36", seconds: 936, topicEn: "OLAP: On-Line Analytical Processing Systems", topicAr: "أنظمة المعالجة التحليلية الفورية (OLAP)" },
          { time: "19:29", seconds: 1169, topicEn: "Properties of DW Data (Subject-Oriented, Integrated, Non-Volatile, Time-Variant)", topicAr: " خصائص بيانات مستودع البيانات الأساسية" },
          { time: "27:28", seconds: 1648, topicEn: "Data Marts vs. Enterprise Data Warehouses", topicAr: "أسواق البيانات (Data Marts) مقارنة بمستودع المؤسسة" },
          { time: "31:27", seconds: 1887, topicEn: "Data Quality & Governance Principles", topicAr: "جودة البيانات وحوكمتها" },
        ],
      },
      {
        id: "bi-lec3-p2",
        number: 3,
        part: "Part 2",
        titleEn: "Data Warehouse Architecture & ETL (Part 2)",
        titleAr: "معمارية مستودع البيانات وأدوات ETL (الجزء الثاني)",
        url: "https://youtu.be/SzY3AQhpurY?si=_sxMCii3jzGXI6z8",
        youtubeId: "SzY3AQhpurY",
        topics: [
          { time: "00:00", seconds: 0, topicEn: "Resuming Data Warehouse Foundations", topicAr: "متابعة الجزء الثاني لمستودع البيانات" },
          { time: "00:22", seconds: 22, topicEn: "Multi-Tier Data Warehouse Architecture", topicAr: "المعمارية متعددة الطبقات لمستودع البيانات" },
          { time: "07:07", seconds: 427, topicEn: "ETL Tools: Data Extraction Pipelines", topicAr: "أدوات ETL: مرحلة الاستخراج (Extraction)" },
          { time: "09:26", seconds: 566, topicEn: "ETL Tools: Data Transformation & Cleaning", topicAr: "أدوات ETL: مرحلة التحويل والتنقية (Transformation)" },
          { time: "11:51", seconds: 711, topicEn: "ETL Tools: Data Loading Strategies", topicAr: "أدوات ETL: مرحلة التحميل (Loading)" },
          { time: "12:50", seconds: 770, topicEn: "Metadata Repository & Data Dictionaries", topicAr: "مستودع البيانات الوصفية (Metadata)" },
          { time: "17:18", seconds: 1038, topicEn: "Cubes & Multidimensional Data Analysis", topicAr: "مكعبات البيانات والتحليل متعدد الأبعاد" },
          { time: "17:22", seconds: 1042, topicEn: "Dimension Tables Design", topicAr: "تصميم جداول الأبعاد (Dimension Tables)" },
          { time: "21:36", seconds: 1296, topicEn: "Fact Tables & Granularity Measures", topicAr: "جداول الحقائق (Fact Tables) ومستويات التفصيل" },
          { time: "26:19", seconds: 1579, topicEn: "Schema Design: Star Schema & Snowflake Schema", topicAr: "تصميم المخططات: مخطط النجمة والمخطط الثلجي" },
          { time: "29:19", seconds: 1759, topicEn: "3D & 4D Data Cubes Visualization", topicAr: "المكعبات ثنائية وثلاثية ورباعية الأبعاد" },
        ],
      },
      {
        id: "bi-lec4",
        number: 4,
        titleEn: "Introduction to Data Mining",
        titleAr: "مقدمة في التنقيب عن البيانات (Data Mining)",
        url: "https://youtu.be/HBtk7Mwaj_0?si=aFtlstUitR9jPK2h",
        youtubeId: "HBtk7Mwaj_0",
        topics: [
          { time: "00:00", seconds: 0, topicEn: "Structure of Mathematical Models", topicAr: "هيكل وبنية النموذج الرياضي" },
          { time: "09:31", seconds: 571, topicEn: "Development Lifecycle of Mathematical Models", topicAr: "مراحل تطوير النموذج الرياضي" },
          { time: "16:15", seconds: 975, topicEn: "Classes of Mathematical & Statistical Models", topicAr: "تصنيفات وفئات النماذج" },
          { time: "21:28", seconds: 1288, topicEn: "Formal Definition of Data Mining", topicAr: "التعريف العلمي للتنقيب عن البيانات (Data Mining)" },
          { time: "25:00", seconds: 1500, topicEn: "Real-World Applications of Data Mining", topicAr: "التطبيقات العملية للتنقيب عن البيانات" },
          { time: "30:03", seconds: 1803, topicEn: "Representation of Input Data & Feature Vectors", topicAr: "تمثيل البيانات المدخلة ومتجهات الخصائص" },
          { time: "36:14", seconds: 2174, topicEn: "The Data Mining Process (CRISP-DM)", topicAr: "مراحل وخطوات عملية التنقيب عن البيانات" },
          { time: "49:05", seconds: 2945, topicEn: "Analysis Methodology & Model Evaluation", topicAr: "منهجية التحليل وتقييم الأداء" },
        ],
      },
      {
        id: "bi-lec5",
        number: 5,
        titleEn: "Exploratory Data Analysis & Descriptive Statistics",
        titleAr: "التحليل الاستكشافي للبيانات والإحصاء الوصفي (EDA)",
        url: "https://youtu.be/xGzO_0xypz4?si=m8aKWjYVuyHdEWT1",
        youtubeId: "xGzO_0xypz4",
        topics: [
          { time: "00:00", seconds: 0, topicEn: "Lecture Agenda", topicAr: "جدول الأعمال" },
          { time: "01:36", seconds: 96, topicEn: "Core Objectives of Exploratory Data Analysis (EDA)", topicAr: "أهداف التحليل الاستكشافي للبيانات" },
          { time: "08:10", seconds: 490, topicEn: "Representation & Formatting of Input Data", topicAr: "تمثيل وهيكلة مدخلات البيانات" },
          { time: "10:55", seconds: 655, topicEn: "Dataset Types & Measurement Scales", topicAr: "أنواع مجموعات البيانات ومقاييس القياس" },
          { time: "14:36", seconds: 876, topicEn: "Descriptive Statistics: Measures of Central Tendency", topicAr: "الإحصاء الوصفي: مقاييس النزعة المركزية" },
          { time: "15:20", seconds: 920, topicEn: "Mean (Arithmetic Average)", topicAr: "المتوسط الحسابي (Mean)" },
          { time: "18:30", seconds: 1110, topicEn: "Median", topicAr: "الوسيط الحسابي (Median)" },
          { time: "21:16", seconds: 1276, topicEn: "Mode", topicAr: "المنوال (Mode)" },
          { time: "30:26", seconds: 1826, topicEn: "Measures of Dispersion: Range", topicAr: "مقاييس التشتت: المدى (Range)" },
          { time: "31:43", seconds: 1903, topicEn: "Variance", topicAr: "التباين (Variance)" },
          { time: "32:46", seconds: 1966, topicEn: "Standard Deviation", topicAr: "الانحراف المعياري (Standard Deviation)" },
          { time: "34:47", seconds: 2087, topicEn: "Bivariate Analysis & Correlation Metrics", topicAr: "التحليل الثنائي ومعامل الارتباط" },
          { time: "43:29", seconds: 2609, topicEn: "Data Transformation & Normalization Techniques", topicAr: "تحويل البيانات ومعايرتها" },
          { time: "44:02", seconds: 2642, topicEn: "Min-Max Normalization", topicAr: "تقييس أدنى-أعلى (Min-Max Normalization)" },
          { time: "48:25", seconds: 2905, topicEn: "Z-Score Standardization", topicAr: "التقييس المعياري (Z-Score Standardization)" },
        ],
      },
      {
        id: "bi-lec6",
        number: 6,
        titleEn: "Prediction & Regression Analysis",
        titleAr: "التنبؤ وتحليل الانحدار (Prediction & Regression)",
        url: "https://youtu.be/GXgcppbrkus?si=wnSNxAI8dT8jV7Uz",
        youtubeId: "GXgcppbrkus",
        topics: [
          { time: "00:00", seconds: 0, topicEn: "Lecture Agenda", topicAr: "جدول الأعمال" },
          { time: "04:53", seconds: 293, topicEn: "Introduction to Predictive Modeling", topicAr: "مقدمة في النمذجة التنبؤية" },
          { time: "13:20", seconds: 800, topicEn: "Simple Linear Regression & Least Squares Method", topicAr: "الانحدار الخطي البسيط وطريقة المربعات الصغرى" },
          { time: "22:22", seconds: 1342, topicEn: "Interactive Demo & Hands-on Application", topicAr: "تطبيق عملي وتوضيح تفاعلي" },
          { time: "37:13", seconds: 2233, topicEn: "Multiple Linear Regression Analysis", topicAr: "الانحدار الخطي المتعدد (Multiple Linear Regression)" },
          { time: "38:57", seconds: 2337, topicEn: "Nonlinear Regression Models", topicAr: "نماذج الانحدار غير الخطي" },
          { time: "41:33", seconds: 2493, topicEn: "Predictor Error Evaluation Measures", topicAr: "مقاييس تقييم خطأ التنبؤ" },
          { topicEn: "Absolute Error & Squared Error", topicAr: "الخطأ المطلق والخطأ المربع" },
          { topicEn: "Mean Absolute Error (MAE)", topicAr: "متوسط الخطأ المطلق (MAE)" },
          { topicEn: "Mean Squared Error (MSE)", topicAr: "متوسط مربع الخطأ (MSE)" },
          { topicEn: "Relative Absolute Error (RAE) & Relative Squared Error (RSE)", topicAr: "الخطأ المطلق النسبي والخطأ المربع النسبي (RAE, RSE)" },
        ],
      },
      {
        id: "bi-lec7",
        number: 7,
        titleEn: "Association Rule Mining (ARM)",
        titleAr: "التنقيب عن قواعد الاقتران (Association Rule Mining)",
        url: "https://www.youtube.com/results?search_query=Association+Rule+Mining+Business+Intelligence+Ahmad+Al+Musawi",
        topics: [
          { topicEn: "Introduction to Association Rule Mining (ARM)", topicAr: "مقدمة في التنقيب عن قواعد الاقتران (ARM)" },
          { topicEn: "Market Basket Analysis Principles", topicAr: "تحليل سلة التسوق (Market Basket Analysis)" },
          { topicEn: "Frequent Itemset Generation & Apriori Algorithm", topicAr: "استخراج المجموعات المتكررة وخوارزمية الأبريوري" },
          { topicEn: "Core Metrics: Support, Confidence, and Lift", topicAr: "المقاييس الأساسية: الدعم (Support)، الثقة (Confidence)، والرفع (Lift)" },
          { topicEn: "Business Significance & Retail Analytics", topicAr: "الأهمية التجارية والتحليلات البيعية في الأعمال" },
          { topicEn: "Machine Learning Paradigm: Supervised vs. Unsupervised", topicAr: "مقارنة التعلم الخاضع للرعاية وغير الخاضع للرعاية" },
        ],
      },
      {
        id: "bi-lec8",
        number: 8,
        titleEn: "K-Nearest Neighbor (k-NN) Classification",
        titleAr: "خوارزمية الجار أقرب k (K-Nearest Neighbor)",
        url: "https://www.youtube.com/results?search_query=k-Nearest+Neighbor+Business+Intelligence+Ahmad+Al+Musawi",
        topics: [
          { topicEn: "Fundamentals of K-Nearest Neighbor (k-NN) Algorithm", topicAr: "أساسيات خوارزمية k-NN في التصنيف" },
          { topicEn: "Distance Metrics: Euclidean, Manhattan, & Minkowski", topicAr: "مقاييس المسافة: الإقليدية، مانهاتن، ومينكوفسكي" },
          { topicEn: "Choosing the Optimal Value of K & Cross-Validation", topicAr: "اختيار قيمة k المثلى والتحقق المتقاطع" },
          { topicEn: "Lazy Learning vs. Eager Learning Paradigms", topicAr: "التردد في التعلم (Lazy vs. Eager Learning)" },
          { topicEn: "Practical Applications in Business Decision Making", topicAr: "التطبيقات العملية في اتخاذ القرارات الذكية" },
        ],
      },
    ],
  },
];

