// import { Education, Experience, SkillCategory } from './types';

// // ------------------------------------------------------------------------------------------
// // INSTRUCTIONS FOR IMAGES (图片修改指南):
// // 1. Create a folder named 'images' inside your 'public' folder. (在 public 目录下新建 images 文件夹)
// // 2. Add your image files there (e.g., 'profile.jpg', 'ultrasound.png'). (把图片放进去)
// // 3. Update the fields below using a leading slash. (修改下面的链接，记得前面加个斜杠 /)
// //    Example: heroImage: "/images/profile.jpg"
// // ------------------------------------------------------------------------------------------

// export const PERSONAL_INFO = {
//   name: "Keli Niu",
//   title: "Computer Vision & Computer Graphics",
//   email: "niukeli299@gmail.com",
//   phone: "+44 7419732452",
//   github: "https://github.com/Keli202",
//   location: "Bristol, United Kingdom",
//   about: "I enjoy designing and implementing solutions to complex problems in visual computing and data science. With a First Class BSc in Computer Science and a Distinction in MSc Data Science from the University of Bristol, I work across computer vision and graphics, large-scale data analysis, and applied machine learning.",
//   // [CHANGE HERE] Your Profile Photo / 你的个人照片 (Make sure it is inside public/images/)
//   heroImage: "/images/my.jpeg" 
// };

// export const EDUCATION: Education[] = [
//   {
//     institution: "University of Bristol (UoB)",
//     degree: "MSc - Data Science (Distinction)",
//     date: "Sep 2024 – Sep 2025",
//     details: [
//       "Key Courses: Large-Scale Data Engineering, Statistical Computing, AI & Text Analytics, Visual Analytics."
//     ]
//   },
//   {
//     institution: "University of Bristol (UoB)",
//     degree: "BSc - Computer Science (First Class Honours)",
//     date: "Sep 2021 – Jun 2024",
//     details: [
//       "Key Courses: Machine Learning, Image Processing & Computer Vision, Computer Graphics, OS & Security."
//     ]
//   }
// ];

// export const RESEARCH_EXPERIENCE: Experience[] = [
//    {
//     id: "msc-fetal-ultrasound",   // ✅ 唯一且稳定
//     title: "Key-Frame Detection in Blind-Sweep Fetal Ultrasound",
//     role: "MSc Dissertation",
//     company: "University of Bristol",
//     location: "Bristol, UK",
//     date: "Jun 2025 – Aug 2025",
//     type: "research",
//     tags: ["Medical Imaging", "BiomedCLIP", "Transformers", "nnU-Net"],
//     imageUrl: "https://picsum.photos/800/600?random=1",
//     githubUrl: "https://github.com/Keli202",
//     paperVenue: "Submitted to IEEE ISBI 2026",
//     // 有公开链接就加，暂时没有可以不写 paperUrl
//     // paperUrl: "https://arxiv.org/abs/xxxx.xxxxx",

//     summary:
//       "Key-frame detection in blind-sweep fetal ultrasound using prior-guided enhancement and weakly supervised transformers.",

//     points: [
//       "Developed a prior-guided pipeline combining nnU-Net abdominal masking and Structure-guided Multi-frame Enhancement (SMFE).",
//       "Proposed Peak-preserving Redundancy Suppression (PRS) with BCE-centred calibration.",
//       "Achieved +9.6pp and +25.0pp F1 gains over strong baselines for abdominal-circumference measurement.",
//       "Extended the work into a paper submitted to IEEE ISBI 2026."
//     ]
//   },
//   {
//     id: "mir100hg-multiomics",
//     title: "Multi-omics Integration for MIR100HG in Cancer",
//     role: "Group Lead",
//     company: "University of Bristol",
//     location: "Bristol, UK",
//     date: "Feb 2025 – Apr 2025",
//     type: "research",
//     tags: ["Bioinformatics", "XGBoost", "SHAP"],
//     imageUrl: "https://picsum.photos/800/600?random=2",
//     githubUrl: "https://github.com/EMATM0050-2024/dsmp-2024-groupm24",
//     summary:
//       "Multi-omics analysis of MIR100HG across multiple cancer types using XGBoost and SHAP-based feature attribution.",
//     points: [
//       "Integrated ENCODE transcription factor priors, methylation and RNA-seq across multiple cancer types (LUAD, STAD, etc.).",
//       "Built MIR100HG-centred networks using XGBoost and SHAP.",
//       "Performed Kaplan–Meier and Cox survival modelling; identified convergent TFs such as JUN and SUZ12.",
//       "Found high MIR100HG associated with worse overall survival (HR ≈ 1.83) in STAD."
//     ]
//   },

//   // {
//   //   role: "Group Lead",
//   //   company: "University of Bristol",
//   //   location: "Bristol, UK",
//   //   date: "Feb 2025 – Apr 2025",
//   //   type: "research",
//   //   tags: ["Bioinformatics", "XGBoost", "SHAP"],
//   //   // [CHANGE HERE] Project Image / 项目图片
//   //   imageUrl: "https://picsum.photos/800/600?random=2",
//   //   githubUrl: "https://github.com/EMATM0050-2024/dsmp-2024-groupm24",
//   //   points: [
//   //     "Project: Multi-omics Integration for Cancer (MIR100HG).",
//   //     "Integrated ENCODE transcription factor priors, methylation, and RNA-seq across multiple cancer types (LUAD, STAD, etc.).",
//   //     "Built MIR100HG-centred networks using XGBoost and SHAP.",
//   //     "Performed Kaplan–Meier/Cox survival modelling; identified convergent TFs (JUN, SUZ12).",
//   //     "Found high MIR100HG associated with worse overall survival (HR ≈ 1.83) in STAD."
//   //   ]
//   // },
  
  
//   // {
//   //   role: "BSc Dissertation",
//   //   company: "University of Bristol",
//   //   location: "Bristol, UK",
//   //   date: "Feb 2024 – May 2024",
//   //   type: "research",
//   //   tags: ["SAR Images", "YOLOv8", "Swin Transformer"],
//   //   // [CHANGE HERE] Project Image / 项目图片
//   //   imageUrl: "https://picsum.photos/800/600?random=3",
//   //   githubUrl: "https://github.com/Keli202",
//   //   points: [
//   //     "Project: Ship Detection in Synthetic Aperture Radar (SAR) Images.",
//   //     "Enhanced YOLOv8-obb with a Swin Transformer backbone, BiFPN, and small-object head.",
//   //     "Introduced anchor-area weighted loss and targeted augmentation for complex backgrounds.",
//   //     "Achieved 97.8% accuracy with significant gains on small/near-shore scenes."
//   //   ]
//   // },
//   // {
//   //   role: "Research Intern",
//   //   company: "Institute of Automation, CAS",
//   //   location: "Beijing, China",
//   //   date: "Jul 2023 – Aug 2023",
//   //   type: "internship",
//   //   tags: ["Computer Vision", "YOLOv5", "Multimodal"],
//   //   // [CHANGE HERE] Project Image / 项目图片
//   //   imageUrl: "https://picsum.photos/800/600?random=4",
//   //   githubUrl: "https://github.com/Keli202",
//   //   points: [
//   //     "Reproduced and analysed YOLOv5; proposed RNN-based enhancements.",
//   //     "Evaluated a multimodal model (Viscpm-chat) against MME benchmarks using Python/Linux."
//   //   ]
//   // }


// ];

// export const OTHER_PROJECTS: Experience[] = [

//   {
//     id: "mir100hg-multiomics",
//     title: "Multi-omics Integration for MIR100HG in Cancer",
//     role: "Group Lead",
//     company: "University of Bristol",
//     location: "Bristol, UK",
//     date: "Feb 2025 – Apr 2025",
//     type: "research",
//     tags: ["Bioinformatics", "XGBoost", "SHAP"],
//     imageUrl: "https://picsum.photos/800/600?random=2",
//     githubUrl: "https://github.com/EMATM0050-2024/dsmp-2024-groupm24",
//     summary:
//       "Multi-omics analysis of MIR100HG across multiple cancer types using XGBoost and SHAP-based feature attribution.",
//     points: [
//       "Integrated ENCODE transcription factor priors, methylation and RNA-seq across multiple cancer types (LUAD, STAD, etc.).",
//       "Built MIR100HG-centred networks using XGBoost and SHAP.",
//       "Performed Kaplan–Meier and Cox survival modelling; identified convergent TFs such as JUN and SUZ12.",
//       "Found high MIR100HG associated with worse overall survival (HR ≈ 1.83) in STAD."
//     ]
//   },
//   // {
//   //   role: "Data Science Pipeline",
//   //   company: "Bristol Data Science Society",
//   //   date: "Mar 2022",
//   //   type: "project",
//   //   tags: ["Data Engineering", "Python", "ML"],
//   //   // [CHANGE HERE] Project Image / 项目图片
//   //   imageUrl: "https://picsum.photos/800/600?random=6",
//   //   githubUrl: "https://github.com/Keli202",
//   //   points: [
//   //     "Built an end-to-end Python data pipeline (ingestion/cleaning/validation).",
//   //     "Ran regression analyses to surface variable relationships for downstream ML training."
//   //   ]
//   // }
 
  
//   // {
//   //   role: "Teach Math",
//   //   company: "Bristol Data Science Society",
//   //   date: "Mar 2022",
//   //   type: "project",
//   //   tags: ["Data Engineering", "Python", "ML"],
//   //   // [CHANGE HERE] Project Image / 项目图片
//   //   imageUrl: "https://picsum.photos/800/600?random=6",
//   //   githubUrl: "https://github.com/spe-uob/2022-TeachMath",
//   //   points: [
//   //     "Built an end-to-end Python data pipeline (ingestion/cleaning/validation).",
//   //     "Ran regression analyses to surface variable relationships for downstream ML training."
//   //   ]
//   // }
 

// ];

// export const SKILLS: SkillCategory[] = [
//   {
//     category: "Languages",
//     items: ["Mandarin (Native)", "English (Fluent)"]
//   },
//   {
//     category: "Programming",
//     items: ["Python", "R (tidyverse)", "Go", "Java", "C/C++", "C#", "SQL"]
//   },
//   {
//     category: "ML / AI",
//     items: ["PyTorch", "TensorFlow", "scikit-learn", "BERT/TinyBERT", "SHAP", "Survival Analysis"]
//   },
//   {
//     category: "CV / NLP",
//     items: ["YOLO v5/v8-obb", "nnU-Net", "Swin Transformer", "Sequence Labelling"]
//   },
//   {
//     category: "Cloud & Tools",
//     items: ["AWS (S3/SQS/DynamoDB)", "Tableau", "Unity", "Maya (3D)", "Git"]
//   }
// ];

const BASE = import.meta.env.BASE_URL;


import { Education, Experience, SkillCategory } from './types';

// ------------------------------------------------------------------------------------------
// INSTRUCTIONS FOR IMAGES (图片修改指南):
// 1. Create a folder named 'images' inside your 'public' folder. (在 public 目录下新建 images 文件夹)
// 2. Add your image files there (e.g., 'profile.jpg', 'ultrasound.png'). (把图片放进去)
// 3. Update the fields below using a leading slash. (修改下面的链接，记得前面加个斜杠 /)
//    Example: heroImage: "/images/profile.jpg"
// ------------------------------------------------------------------------------------------

export const PERSONAL_INFO = {
  name: "Keli Niu",
  title: "Computer Vision & Computer Graphics",
  email: "niukeli299@gmail.com",
  phone: "+44 7419732452",
  github: "https://github.com/Keli202",
  cvUrl: `${BASE}CV.pdf`,
  location: "Bristol, United Kingdom",
  about:
    "I enjoy designing and implementing solutions to complex problems in visual computing and data science. With a First Class BSc in Computer Science and a Distinction in MSc Data Science from the University of Bristol, I work across computer vision and graphics, large-scale data analysis, and applied machine learning.",
  // [CHANGE HERE] Your Profile Photo / 你的个人照片 (Make sure it is inside public/images/)
  heroImage:  `${BASE}images/my.jpeg`
};

export const EDUCATION: Education[] = [
  {
    institution: "University of Bristol (UoB)",
    degree: "MSc - Data Science (Distinction)",
    date: "Sep 2024 – Sep 2025",
    details: [
      "Selected Courses: Large-Scale Data Engineering, Statistical Computing & Empirical Methods, Introduction to AI & Text Analytics, Visual Analytics, Technology, Innovation, Business & Society."
    ]
  },
  {
    institution: "University of Bristol (UoB)",
    degree: "BSc - Computer Science (First Class Honours)",
    date: "Sep 2021 – Jun 2024",
    details: [
      "Selected Courses: Machine Learning, Image Processing & Computer Vision, Computer Graphics, Computer-Generated Imagery, Operating Systems & Security, Human-Computer Interaction."
    ]
  }
];

// =======================
// Selected Research / 主项目
// =======================
export const RESEARCH_EXPERIENCE: Experience[] = [
  {
    id: "msc-fetal-ultrasound",
    title: "Key-Frame Detection in Blind-Sweep Fetal Ultrasound",
    role: "MSc Dissertation",
    company: "University of Bristol",
    location: "Bristol, UK",
    date: "Jun 2025 – Aug 2025",
    type: "research",
    tags: ["Medical Imaging", "BiomedCLIP", "Transformers", "nnU-Net"],
    imageUrl: `${BASE}images/pipeline.jpg`,
    githubUrl: "https://github.com/Keli202/BSP",

    paperVenue: "Submitted to IEEE ISBI 2026",

    summary:
      "Segmentation-prior-guided key-frame detection with multi-depth temporal modelling and peak-preserving redundancy suppression, substantially improving F1 and segment stability for blind-sweep fetal ultrasound AC measurement.",

    points: [
      "Designed a prior-guided pipeline that uses nnU-Net fetal-abdomen segmentation and Structure-guided Multi-frame Enhancement (SMFE) to clean blind sweeps before temporal modelling.",
      "Built a stage-wise multi-depth semantic–temporal transformer (SMDST) that fuses BiomedCLIP frame embeddings with sequence context to score key and sub-key frames.",
      "Proposed Peak-preserving Redundancy Suppression (PRS) with BCE-centred calibration plus light supervised-contrastive and Gumbel-Softmax regularisation to suppress redundant responses while preserving high-confidence peaks.",
      "On blind-sweep fetal ultrasound, achieved +9.6 pp and +25.0 pp F1 improvements over two strong baselines and produced stable key/sub-key segments and dwell intervals for reliable abdominal-circumference (AC) measurement.",
      "Extended this work into a full paper submitted to IEEE ISBI 2026 as a structure-augmented alternative to purely frame-level key-frame selection."
    ]
  },

  {
    id: "mir100hg-multiomics",
    title: "Integrative Multi-omics Dissection of MIR100HG in Cancer",
    role: "Group Lead",
    company: "University of Bristol",
    location: "Bristol, UK",
    date: "Feb 2025 – Apr 2025",
    type: "project",
    tags: ["Bioinformatics", "Multi-omics", "XGBoost", "SHAP", "Survival Analysis"],
    imageUrl: `${BASE}images/MIR100HG.jpg`,
    githubUrl: "https://github.com/EMATM0050-2024/dsmp-2024-groupm24",

    summary:
      "Pan-cancer multi-omics study of MIR100HG integrating TF priors, methylation and RNA-seq with XGBoost–SHAP and survival models to map its regulation and prognostic role.",

    points: [
      "Led a pan-cancer analysis across LUAD, PAAD, PRAD, SKCM and STAD, integrating TCGA/GTEx expression, 450K methylation and ENCODE TF–target priors to build MIR100HG-centred regulatory landscapes in tumours and matched normals.",
      "Designed a fully reproducible preprocessing pipeline for ID harmonisation, probe filtering, KNN/mixed imputation, β→M transformation and z-score scaling to enable joint analysis of expression, methylation and clinical data.",
      "Trained XGBoost classifiers with SHAP attribution on TF, methylation and DEG feature sets, identifying convergent regulators such as JUN, SUZ12 and GATA1 and cancer-specific regulatory circuits.",
      "Performed Kaplan–Meier and multivariate Cox survival modelling, showing that high MIR100HG expression predicts significantly worse overall survival in STAD (HR ≈ 1.83, p ≈ 0.0066), and released all analysis code as a reproducible GitHub pipeline."
    ]
  },

  {
    id: "bsc-sar-ship-detection",
    title: "Ship Detection in Synthetic Aperture Radar (SAR) Imagery",
    role: "BSc Dissertation",
    company: "University of Bristol",
    location: "Bristol, UK",
    date: "Feb 2024 – May 2024",
    type: "research",
    tags: ["SAR", "YOLOv8-obb", "Swin Transformer", "Object Detection"],
    imageUrl: `${BASE}images/visualbest.png`,
    githubUrl: "https://github.com/Keli202/Sar-ship-detection",

    summary:
      "Structure-aware YOLOv8-obb variant with Swin backbone, BiFPN and small-object–weighted loss for robust ship detection in cluttered SAR scenes.",

    points: [
      "Redesigned YOLOv8-obb with a Swin Transformer backbone, BiFPN feature pyramid and a dedicated small-object head to better capture fine-scale ship structure in SAR imagery.",
      "Proposed an anchor-area–weighted loss that up-weights small and near-shore targets to improve robustness in challenging backgrounds.",
      "On the held-out test set, achieved 97.8% detection accuracy and +1.0 / +3.2 percentage point gains on small-ship and near-shore scenarios over strong YOLOv8-obb baselines."
    ]
  },
  {
    id: "ai-text-analytics",
    title: "AI and Text Analytics",
    role: "Course Project",
    company: "University of Bristol",
    location: "Bristol, UK",
    date: "Apr 2025",
    type: "project",
    tags: [
      "NLP",
      "Text Classification",
      "LDA",
      "TinyBERT",
      "NER",
      "Semantic Distance",
      "Clustering"
    ],
    imageUrl: `${BASE}images/lda_variants.png`,
    // githubUrl: "https://github.com/Keli202",

    summary:
      "Coursework in modern NLP and semantic modelling across financial news, climate texts and literary novels. Overall mark 76%.",

    points: [
      "Built and compared financial news classifiers using CountVectorizer with Naive Bayes, a shallow neural network and TinyBERT, then analysed accuracy curves, confusion matrices and typical errors.",
      "Modelled climate risk and opportunity language with LDA, tuned topic number and alpha, compared verb based and noun based preprocessing and selected settings using coherence and topic distribution heatmaps.",
      "Fine tuned TinyBERT for NER on noisy social media text with careful label alignment and hyperparameter sweeps, and evaluated models with F1 and span level error analysis.",
      "Designed an original semantic distance pipeline for multi theme novels that uses BERT based semantic windows, nearest neighbour word distances and Dijkstra shortest paths, then applied UMAP with KMeans to obtain more coherent clusters and better silhouette scores."
      
    ]
  }


];

// =======================
// Additional Projects / 其它项目 & 实习
// =======================
export const OTHER_PROJECTS: Experience[] = [
  {
    id: "ia-cas-intern-2023",
    title: "Research Intern – Institute of Automation, CAS",
    role: "Research Intern",
    company: "Institute of Automation, Chinese Academy of Sciences",
    location: "Beijing, China",
    date: "Jul 2023 – Aug 2023",
    type: "internship",
    tags: ["Computer Vision", "YOLOv5", "Multimodal", "Benchmarking"],
    imageUrl: `${BASE}images/CASIA.jpg`,
    // githubUrl: "https://github.com/Keli202",
    summary:
      "Internship focusing on YOLOv5 reproduction and evaluation of a multimodal model on video–language benchmarks.",
    points: [
      "Reproduced and analysed YOLOv5 training and inference, and explored RNN-based enhancements for temporal modelling.",
      "Evaluated a multimodal model (Viscpm-chat) against MME-style benchmarks using Python and Linux tooling."
    ]
  },
  // {
  //   id: "bdss-data-pipeline-2022",
  //   title: "Data Pipeline for Bristol Data Science Society",
  //   role: "Data Science Society Member",
  //   company: "Bristol Data Science Society (BDSS)",
  //   location: "Bristol, UK",
  //   date: "Mar 2022",
  //   type: "project",
  //   tags: ["Data Engineering", "Python", "Regression", "Feature Engineering"],
  //   imageUrl: "https://picsum.photos/800/600?random=6",
  //   githubUrl: "https://github.com/Keli202",
  //   summary:
  //     "End-to-end Python data pipeline for cleaning, validation and feature preparation in a student-led data science project.",
  //   points: [
  //     "Built an end-to-end Python data pipeline covering data ingestion, cleaning and validation.",
  //     "Ran regression analyses to surface key variable relationships and prepared features for downstream machine learning models."
  //   ]
  // }
  {
   id: "aws-scalable-architectures",
    title: "Scalable AWS Architectures for MyTravel and WordFreq",
    role: "Course Project",
    company: "University of Bristol",
    location: "Bristol, UK",
    date: "Nov 2024",
    type: "project",
    tags: [
      "AWS",
      "Cloud Architecture",
      "Auto Scaling",
      "S3",
      "SQS",
      "DynamoDB",
      "EC2",
      "CloudWatch"
    ],
    imageUrl: `${BASE}images/WordFreq.png`, // 你之后用自己的图替换
    // githubUrl: "https://github.com/Keli202",

    summary:
      "Designed a global travel site (MyTravel) stack on AWS and optimised the queue driven WordFreq text processor with Auto Scaling, backup and cost aware EC2 tuning. Overall mark 87%.",

    points: [
      "Designed the MyTravel web architecture with Route 53, CloudFront, ALB, EC2 Auto Scaling, S3 and DynamoDB plus AWS Backup and S3 Glacier for multi layer resilience and disaster recovery.",
      "Implemented the WordFreq pipeline with S3 upload and processing buckets, SQS jobs and results queues, EC2 worker instances and DynamoDB results store, then added an Auto Scaling Group driven by SQS metrics.",
      "Used CloudWatch to compare queue metrics, switched scale in logic from visible messages to not visible messages and introduced step scaling policies, which reduced end to end processing time and avoided premature scale in.",
      "Benchmarked EC2 instance types for the worker role, showed that extra vCPUs brought large gains while extra memory had little effect and proposed Lambda and EMR as alternatives for different workload sizes."
    ]
  },
  {
    id: "stat-comp-r-ann-heart-failure",
    title: "Statistical Computing and Empirical Methods – R Wrangling and ANN Heart Failure Study",
    role: "Course Project",
    company: "University of Bristol",
    location: "Bristol, UK",
    date: "Nov 2024",
    type: "project",
    tags: ["R", "Tidyverse", "Python", "PyTorch", "ANN", "Bootstrap", "Cross-Validation"],
    imageUrl: `${BASE}images/ST.png`,
    githubUrl: "https://github.com/Keli202/FirstRProject",
    summary:
    "Used R to wrangle and visualise World Bank–style debt data and to derive/simulate custom probability models, and used PyTorch to build a heart-failure classifier with systematic hyperparameter and regularisation studies. Overall mark 85%.",


    points: [
      "Used R (Tidyverse) to wrangle multi-table World Bank debt data: joined country/indicator lookups, renamed and reshaped variables, built region-level summary tables and violin/time-series plots for financial flows and reserves.",
      "Derived analytic results for custom probability models (shifted exponential–like distribution and red/blue ball counts), implemented MLE and 95% bootstrap confidence intervals, and ran large-scale simulation studies to analyse MSE, CLT behaviour and sampling variance.",
      "Implemented a two-hidden-layer ANN in PyTorch for heart failure prediction with one-hot encoding, feature standardisation, ReLU + dropout hidden layers, Softmax output, cross-entropy loss and Adam, wrapped in an early-stopping training loop with tracked loss/accuracy.",
      "Systematically evaluated data and model choices: varied training-set size, ran log-scale learning-rate sweeps, compared single validation split to 5-fold cross-validation, and performed a regularisation ablation (none vs dropout vs L2 vs dropout+L2), showing that the combined scheme best reduced the train–validation gap and improved generalisation."
    ]
  },
  {
    id: "visual-analytics-uk-census",
    title: "Visual Analytics of UK Labour Market Structure",
    role: "Course Project",
    company: "University of Bristol",
    location: "Bristol, UK",
    date: "Apr 2025",
    type: "project",
    tags: ["Python", "Pandas", "Tableau", "PCA", "t-SNE", "Bayesian Modelling", "Data Visualisation"],
    imageUrl: `${BASE}images/VA.jpg`,
    summary:
      "Analysed 2011 England and Wales Census data and aligned 2011–2021 working-hours data using Python and Tableau to build interactive dashboards on occupational structure, ethnicity, gender and working time, combining dimensionality reduction with Bayesian forecasting. Overall mark 80%.",

    points: [
      "Used Python (pandas) to clean, merge and standardise 400+ census variables across ethnicity, occupation, gender, working hours, age and economic activity, and handled missing data with Bayesian ridge regression rather than simple imputations.",
      "Designed a set of interactive Tableau dashboards that link maps, bar charts, heat tables, heatmaps, line charts and dot plots so users can compare regions, groups and time periods within Munzner’s WHY–WHAT–HOW framework.",
      "Applied PCA and t-SNE with KMeans clustering to reveal regional labour-market patterns and changes in work-hour structures between 2011 and 2021, highlighting clusters that differ in ethnicity mix, occupation profile and working time.",
      "Built a Bayesian ridge model to forecast 2030 working-hour distributions for Bristol and national benchmarks, reporting credible intervals and interpreting projected trends in the context of work–life balance and labour-market inequality."
    ]
  },

  {
    id: "cpp-rendering-engine",
    title: "C++ Rendering Engine",
    role: "Personal Project",
    company: "University of Bristol",
    location: "Bristol, UK",
    date: "Nov–Dec 2023",
    type: "project",
    tags: ["C++", "Computer Graphics", "Ray Tracing", "Rasterization", "Linear Algebra"],
    imageUrl: "cv-portfolio/images/CG.jpg",
    githubUrl: "https://github.com/Keli202/CGworkbook",
    summary:
      "Built a C++ rendering engine that converts 3D geometry into images and animations by implementing the camera, projection and shading pipeline directly instead of using graphics APIs such as OpenGL or DirectX.",

    points: [
      "Implemented three rendering modes: wireframe, rasterised and ray traced, on top of a custom C++ math layer for vectors, matrices, coordinate transforms and camera control.",
      "Reproduced the core stages of a classical graphics pipeline, including model, view and projection transforms, perspective division, clipping and triangle rasterisation with a depth buffer.",
      "Experimented with several lighting and shadow techniques, such as diffuse and specular shading and ray based shadow testing, and compared the visual quality and running time of different settings.",
      "Designed, coded and optimised the entire system independently, improving numerical stability and frame time while keeping the code structured so that new rendering effects can be added cleanly."
    ]
  },
  {
    id: "maya-gothic-architecture",
    title: "Maya 3D Modelling – Gothic Architecture",
    role: "Personal Project",
    company: "University of Bristol",
    location: "Bristol, UK",
    date: "Apr–May 2024",
    type: "project",
    tags: ["Maya", "3D Modelling", "Rendering", "Animation"],
    imageUrl: "/cv-portfolio/images/CGI.jpg",
    summary:
      "Used Autodesk Maya to model and animate a Gothic-style building, with attention to architectural detail, camera motion and final rendered presentation.",

    points: [
      "Planned and constructed a complete Gothic-style building in Maya using polygon modelling techniques such as extrusion, edge loops and curve-based profiling for arches, spires and tracery.",
      "Authored a short animation sequence with camera paths and keyframed objects to showcase the exterior from multiple viewpoints.",
      "Configured materials, lighting and render settings to generate stills and a short turntable video of the finished model."
    ]
  }




];

export const SKILLS: SkillCategory[] = [
  {
    category: "Languages",
    items: ["Mandarin (Native)", "English (Fluent)"]
  },
  {
    category: "Programming",
    items: ["Python", "R (tidyverse)", "Go", "Java", "C/C++", "C#", "SQL"]
  },
  {
    category: "ML / AI",
    items: ["PyTorch", "TensorFlow", "scikit-learn", "BERT/TinyBERT", "SHAP", "Survival Analysis (Kaplan–Meier/Cox)"]
  },
  {
    category: "CV / NLP",
    items: ["YOLO v5/v8-obb", "nnU-Net", "Swin Transformer", "Sequence Labelling", "LDA Topic Modelling"]
  },
  {
    category: "Cloud & Tools",
    items: ["AWS (Auto Scaling, S3, SQS, DynamoDB, CloudWatch)", "Tableau", "Maya (3D Modelling)", "Unity + Android Studio", "Git"]
  }
];
