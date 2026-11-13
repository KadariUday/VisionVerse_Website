import { ProjectItem } from "@/types";

export const projectsData: ProjectItem[] = [
  // 1. CareerForge AI
  {
    id: "proj-careerforge-ai",
    title: "CareerForge AI — Career & College Intelligence",
    slug: "careerforge-ai",
    client: "AI Intelligence Project",
    tagline: "AI-powered career and resume intelligence platform for students and job seekers.",
    description:
      "AI-powered career guidance platform offering personalized college predictions and intelligent resume analysis.",
    category: "AI Application",
    badge: "Featured AI App",
    isLive: true,
    iconName: "Compass",
    featured: true,
    published: true,
    thumbnail: "/projects/careerforge-ai.png",
    screenshots: ["/projects/careerforge-ai.png"],
    technologies: ["React", "FastAPI", "Python", "MongoDB", "Tailwind CSS", "OpenAI / LLM API"],
    liveUrl: "https://career-forge-ai-eight.vercel.app",
    githubUrl: "https://github.com/KadariUday/CareerForge-AI",
    completedAt: "2026",
    overview:
      "CareerForge AI was built to solve the modern job search bottleneck. It leverages AI models to review student resumes against target job descriptions, highlight missing keywords, and provide actionable rewrite recommendations.",
    challenges: [
      "Parsing diverse resume formats and complex PDF text flows accurately.",
      "Structuring prompt outputs into actionable scoring categories (ATS Match, Grammar, Skills Gap).",
    ],
    solutions: [
      "Built structured prompt chains with JSON response validation.",
      "Implemented a clean, interactive glassmorphic dashboard for visualizing skill gaps.",
    ],
    keyFeatures: [
      {
        title: "ATS Compatibility Scoring",
        description: "Evaluates resume text against standard Applicant Tracking Systems.",
      },
      {
        title: "Missing Skill Identifier",
        description: "Compares current profile against real tech job postings and suggests required certifications.",
      },
    ],
  },

  // 2. CareerAI
  {
    id: "proj-career-ai",
    title: "CareerAI — Deep Learning Career Recommendation System",
    slug: "career-ai-deep-learning",
    client: "AI Deep Learning Initiative",
    tagline: "Browser-based deep learning career advisor running TensorFlow.js neural networks.",
    description:
      "Browser-based deep learning career advisor running TensorFlow.js neural networks and NLP resume skill parsing.",
    category: "AI Application",
    badge: "Deep Learning AI",
    isLive: false,
    iconName: "Compass",
    featured: true,
    published: true,
    thumbnail: "/projects/career-ai.png",
    screenshots: ["/projects/career-ai.png"],
    technologies: ["TypeScript", "React", "TensorFlow.js", "NLP", "Python", "Tailwind CSS"],
    githubUrl: "https://github.com/KadariUday/careerAI",
    completedAt: "2026",
    overview:
      "CareerAI implements on-device neural network inference using TensorFlow.js to evaluate student engineering profiles, academic electives, and soft skills without streaming sensitive student CVs to third-party cloud servers.",
    challenges: [
      "Running machine learning model inference client-side inside the browser efficiently.",
      "Extracting contextual token embeddings from freeform student project descriptions.",
    ],
    solutions: [
      "Quantized deep learning neural weights for fast browser memory footprint.",
      "Engineered an intuitive visual confidence gauge displaying career fit rankings.",
    ],
    keyFeatures: [
      {
        title: "Client-Side Neural Inference",
        description: "Runs TensorFlow.js locally in the browser with zero cloud latency.",
      },
      {
        title: "NLP Resume Parsing",
        description: "Extracts technical keywords, frameworks, and tools from unstructured text.",
      },
    ],
  },

  // 3. Sentinel AI
  {
    id: "proj-sentinel-ai",
    title: "Sentinel AI — Phishing & Scam Detection Platform",
    slug: "sentinel-ai-phishing-detection",
    client: "Cybersecurity Intelligence Initiative",
    tagline: "Real-time threat engine analyzing domain structures and deceptive heuristics.",
    description:
      "Real-time cybersecurity intelligence platform identifying malicious URLs, suspicious emails, and phishing scams.",
    category: "Cybersecurity",
    badge: "Cybersecurity AI",
    isLive: false,
    iconName: "Shield",
    featured: true,
    published: true,
    thumbnail: "/projects/sentinel-ai.png",
    screenshots: ["/projects/sentinel-ai.png", "/projects/phishing-detection.png"],
    technologies: ["TypeScript", "React", "Python", "FastAPI", "Scikit-Learn", "Tailwind CSS"],
    githubUrl: "https://github.com/KadariUday/ai-phishing-scam-detection",
    completedAt: "2026",
    overview:
      "Sentinel AI combines statistical NLP feature extraction with pre-trained ensemble classifiers to inspect incoming URLs, shortened links, and sender headers, generating explainable threat scores for non-technical users.",
    challenges: [
      "Distinguishing obfuscated zero-day homograph domains from legitimate URLs.",
      "Keeping latency below 200ms per URL check.",
    ],
    solutions: [
      "Pre-computed Whois domain age, certificate issuer, and entropy features.",
      "Designed a real-time risk breakdown modal with safety recommendations.",
    ],
    keyFeatures: [
      {
        title: "Domain Heuristic Scanner",
        description: "Detects typo-squatting, punycode tricks, and suspicious subdomains.",
      },
      {
        title: "Explainable Risk Scoring",
        description: "Breaks down specific red flags like missing HTTPS, young registrar age, and spoofed brands.",
      },
    ],
  },

  // 4. SR Heritage (SR Jewellery Collections)
  {
    id: "proj-sr-jewellery",
    title: "SR Heritage — Luxury Indian Jewellery E-Commerce",
    slug: "sr-jewellery-collections",
    client: "SR Jewellery Collections",
    tagline: "A premium jewellery e-commerce platform crafted to deliver luxury, trust & elegance.",
    description:
      "Full-stack luxury e-commerce web platform with direct 0% fee UPI payment gateway and order tracking.",
    category: "E-Commerce",
    badge: "E-Commerce System",
    isLive: true,
    iconName: "Sparkles",
    featured: true,
    published: true,
    thumbnail: "/projects/sr-jewellery-poster.png",
    bannerImage: "/projects/srj-laptop-preview.png",
    screenshots: [
      "/projects/sr-jewellery-poster.png",
      "/projects/srj-laptop-preview.png",
      "/projects/srj-laher-cyan.png",
      "/projects/srj-dhara-emerald.png",
      "/projects/srj-aj-silver.png",
      "/projects/srj-royal-ruby.png",
    ],
    technologies: [
      "Next.js 14",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Supabase",
      "PostgreSQL",
      "Recharts",
      "Vercel Deployment",
    ],
    liveUrl: "https://sr-jewellery-collections.vercel.app",
    githubUrl: "https://github.com/KadariUday/SR-Jewellery-Collections",
    completedAt: "2026",
    overview:
      "SR Jewellery Collections is a production-grade digital storefront created for an exclusive jewellery brand. The client needed a modern, mobile-first web application that conveys the prestige of traditional Indian craftsmanship while offering contemporary e-commerce standards: instantaneous search, curated collections, persistent cart & wishlist, UPI dynamic payment verification, and a comprehensive backend operations portal.",
    challenges: [
      "Translating the rich tactile feeling of fine gold, diamond and antique jhumkas into a high-end digital interface.",
      "Optimizing heavy, high-resolution jewellery photography without compromising loading performance on mobile 4G networks.",
      "Building a frictionless UPI QR code checkout system tailored to the Indian market.",
    ],
    solutions: [
      "Designed a bespoke Midnight Black and Royal Gold visual language with subtle glow accents and tactile micro-interactions.",
      "Utilized Next.js Image optimization, edge caching on Vercel, and lazy-loaded image galleries to achieve sub-second page loads.",
      "Architected a normalized Supabase PostgreSQL database schema with row-level security and atomic inventory management.",
    ],
    keyFeatures: [
      {
        title: "Product Catalogue & Dynamic Collections",
        description: "Browse necklaces, earrings, bangles and rings with multi-tier category filtering, price sliders, and instant search.",
      },
      {
        title: "Dynamic UPI Checkout",
        description: "Frictionless direct payment flow generating branded QR codes and transaction reference verification.",
      },
    ],
  },

  // 5. Aura Health
  {
    id: "proj-aura-health",
    title: "Aura Health — Disease Prediction & Triage Chatbot",
    slug: "aura-health-disease-prediction",
    client: "Healthcare AI Project",
    tagline: "Conversational clinical assistant mapping user-reported symptoms to medical guidance.",
    description:
      "Conversational healthcare assistant mapping clinical symptoms to disease probabilities and medical advice.",
    category: "Healthcare",
    badge: "Healthcare AI",
    isLive: true,
    iconName: "Activity",
    featured: true,
    published: true,
    thumbnail: "/projects/aura-health.png",
    screenshots: ["/projects/aura-health.png"],
    technologies: ["React", "FastAPI", "Python", "Scikit-Learn", "Tailwind CSS", "NLP"],
    liveUrl: "https://aurahealth-ai.vercel.app",
    githubUrl: "https://github.com/KadariUday/AuraHealth",
    completedAt: "2026",
    overview:
      "Aura Health is an interactive clinical triaging companion. It allows users to describe multiple symptoms in plain everyday language and calculates statistical correlations across 40+ disease indicators with precautions.",
    challenges: [
      "Handling ambiguous and colloquial symptom descriptions.",
      "Ensuring responsible medical disclaimers and emergency redirect prompts.",
    ],
    solutions: [
      "Trained multi-label decision trees and SVM models over verified clinical corpora.",
      "Added immediate red-flag triggers for critical emergencies prompting urgent care.",
    ],
    keyFeatures: [
      {
        title: "Interactive Symptom Assessment",
        description: "Step-by-step interview process clarifying severity and duration of discomfort.",
      },
      {
        title: "Clinical Risk Stratification",
        description: "Categorizes likelihood percentages and lists recommended primary care specialists.",
      },
    ],
  },

  // 6. LibMaster
  {
    id: "proj-libmaster",
    title: "LibMaster — Library & Academic Management Suite",
    slug: "libmaster-academic-suite",
    client: "Campus Systems Lab",
    tagline: "Modern full-stack academic and library dashboard with interactive catalog search.",
    description:
      "Modern full-stack academic and library dashboard with interactive catalog search and circulation tracking.",
    category: "Academic",
    badge: "Management Suite",
    isLive: false,
    iconName: "Database",
    featured: false,
    published: true,
    thumbnail: "/projects/libmaster.png",
    screenshots: ["/projects/libmaster.png"],
    technologies: ["TypeScript", "React", "Tailwind CSS", "Radix UI", "Node.js", "Express.js"],
    githubUrl: "https://github.com/KadariUday/LibMaster",
    completedAt: "2026",
    overview:
      "LibMaster reimagines legacy college library software. It provides an intuitive catalog search, ISBN scanner integration, automated fine calculators, and real-time book loan tracking for students and librarians.",
    challenges: [
      "Managing complex circulation rules with variable loan durations for undergraduate vs postgraduate students.",
      "Handling concurrent reservation requests on popular textbooks.",
    ],
    solutions: [
      "Designed an ACID-compliant schema with transaction locks on book availability.",
      "Constructed a clean Radix UI dashboard with instant search-as-you-type indexing.",
    ],
    keyFeatures: [
      {
        title: "Book Catalog & ISBN Lookup",
        description: "Quickly locate titles, shelf locations, and copies available across departments.",
      },
      {
        title: "Automated Fine & Due Date Tracker",
        description: "Calculates overdue balances automatically and sends email reminders.",
      },
    ],
  },

  // 7. Samvidha Attendance
  {
    id: "proj-samvidha-attendance",
    title: "Samvidha Attendance — Academic Standing Suite",
    slug: "samvidha-attendance",
    client: "College Academic Automation",
    tagline: "Automated student attendance tracking and biometric standing simulator for IARE.",
    description:
      "Automated student attendance tracker providing instant biometric calculations and minimum class simulations.",
    category: "Academic",
    badge: "Live System",
    isLive: true,
    iconName: "Users",
    featured: true,
    published: true,
    thumbnail: "/projects/samvidha-attendance.png",
    screenshots: ["/projects/samvidha-attendance.png"],
    technologies: ["React", "Express.js", "Node.js", "MongoDB", "Puppeteer", "Tailwind CSS"],
    liveUrl: "https://samvidha-attendance.vercel.app",
    githubUrl: "https://github.com/KadariUday/samvidha_attendence",
    completedAt: "2026",
    overview:
      "Developed for students at IARE, this suite bridges the gap with the college Samvidha ERP portal. It allows students to simulate future attendance, view detailed subject-wise breakdown percentages, and receive alerts before falling below mandatory 75% thresholds.",
    challenges: [
      "Scraping dynamic session-based data from the legacy college portal securely without storing user passwords.",
      "Calculating how many classes a student can safely miss or must attend to reach exact target percentages.",
    ],
    solutions: [
      "Implemented a secure Node.js session proxy with instant token expiry.",
      "Built a class simulation calculator with visual color-coded risk alerts.",
    ],
    keyFeatures: [
      {
        title: "Real-time Attendance Sync",
        description: "Retrieves attendance registers directly from the college database.",
      },
      {
        title: "Class Target Calculator",
        description: "Simulates how many upcoming lectures are needed to maintain eligibility.",
      },
    ],
  },

  // 8. DiabCare+
  {
    id: "proj-diabcare-plus",
    title: "DiabCare+ — Diabetes Diet & Insulin Calculation",
    slug: "diabetic-diet-and-insulin",
    client: "Healthcare Informatics",
    tagline: "Interactive medical tool for carbohydrate counting and insulin dose simulation.",
    description:
      "Interactive health education tool demonstrating meal planning, glucose dynamics, and insulin calculations.",
    category: "Healthcare",
    badge: "Health Simulation",
    isLive: true,
    iconName: "Activity",
    featured: false,
    published: true,
    thumbnail: "/projects/diabcare-plus.png",
    screenshots: ["/projects/diabcare-plus.png"],
    technologies: ["JavaScript", "HTML5", "CSS3", "Data Computation Logic"],
    liveUrl: "https://kadariuday.github.io/diabetic-diet-and-insulin-calculation/",
    githubUrl: "https://github.com/KadariUday/diabetic-diet-and-insulin-calculation",
    completedAt: "2026",
    overview:
      "DiabCare+ provides diabetic patients and healthcare educators with meal-time carbohydrate estimation and rapid insulin bolus calculation based on insulin-to-carb ratios and target blood sugar levels.",
    challenges: [
      "Ensuring accurate mathematical formulas for medical simulations without software rounding errors.",
      "Creating an intuitive meal selector suitable for senior citizens.",
    ],
    solutions: [
      "Built rigorous validation algorithms adhering to clinical dietary guidelines.",
      "Designed high-contrast, large-button mobile input components.",
    ],
    keyFeatures: [
      {
        title: "Carbohydrate Counter",
        description: "Search popular Indian food items and compute net carbs automatically.",
      },
      {
        title: "Insulin Dose Estimator",
        description: "Calculates correction doses and meal boluses based on personalized factors.",
      },
    ],
  },

  // 9. Lumina Weather AI
  {
    id: "proj-lumina-weather",
    title: "Lumina Weather AI — Intelligent Meteorological App",
    slug: "lumina-weather-ai",
    client: "AI Meteorological Utility",
    tagline: "AI-enhanced global weather forecasting with dynamic atmospheric visuals.",
    description:
      "Full-stack weather forecasting app delivering AI-generated weather summaries and dynamic atmospheric visuals.",
    category: "AI Application",
    badge: "AI Weather",
    isLive: true,
    iconName: "CloudSun",
    featured: false,
    published: true,
    thumbnail: "/projects/lumina-weather-ai.png",
    screenshots: ["/projects/lumina-weather-ai.png"],
    technologies: ["Python", "Flask", "JavaScript", "HTML5", "OpenWeatherMap API", "CSS3"],
    liveUrl: "https://lumina-weather-ai.onrender.com",
    githubUrl: "https://github.com/KadariUday/lumina-weather-ai",
    completedAt: "2026",
    overview:
      "Lumina Weather AI combines real-time OpenWeatherMap data feeds with generative summaries, describing the forecast in natural human terms rather than just raw numbers and barometric millibars.",
    challenges: [
      "Integrating asynchronous external weather APIs with fallback caching during rate limits.",
      "Creating atmospheric gradient animations matching real-world sunset, rain, and fog conditions.",
    ],
    solutions: [
      "Constructed a lightweight Python Flask caching layer.",
      "Designed dynamic CSS visual filters that adapt dynamically to local temperature and cloud cover.",
    ],
    keyFeatures: [
      {
        title: "Natural Language Forecasts",
        description: "Translates complex humidity and wind vectors into daily outfit and travel advice.",
      },
      {
        title: "7-Day Hourly Breakdown",
        description: "Interactive visual graphs tracking precipitation probability and thermal trends.",
      },
    ],
  },

  // 10. MediMap AI
  {
    id: "proj-medimap-ai",
    title: "MediMap AI — Healthcare Route & Facility Intelligence",
    slug: "medimap-ai-healthcare-routing",
    client: "Geospatial Health Platform",
    tagline: "Geospatial emergency triage navigator mapping specialized departments and optimal routes.",
    description:
      "Geospatial emergency triage navigator mapping nearby hospitals, specialized departments, and optimal routes.",
    category: "Healthcare",
    badge: "Geospatial AI",
    isLive: false,
    iconName: "Activity",
    featured: false,
    published: true,
    thumbnail: "/projects/medimap-ai.png",
    screenshots: ["/projects/medimap-ai.png"],
    technologies: ["TypeScript", "React", "Leaflet / Maps API", "Python", "FastAPI"],
    githubUrl: "https://github.com/KadariUday/MediMap-AI",
    completedAt: "2026",
    overview:
      "MediMap AI assists emergency responders and patients in locating the closest medical facilities equipped with specific specialized care units (e.g., Burn ICU, Pediatric Trauma, Cardiac Cath Lab), optimizing emergency transport time.",
    challenges: [
      "Filtering hospitals based on dynamic capability attributes rather than just basic distance.",
      "Providing real-time turn-by-turn routing with traffic avoidance.",
    ],
    solutions: [
      "Integrated OpenStreetMap and Leaflet geospatial indexing.",
      "Developed a custom triage filter that pairs incoming medical conditions with accredited hospitals.",
    ],
    keyFeatures: [
      {
        title: "Specialty Department Filter",
        description: "Filter medical centers by ICU bed availability, neurology, pediatrics, and trauma tier.",
      },
      {
        title: "One-Tap Emergency Navigation",
        description: "Launches prioritized turn-by-turn routing with direct facility contact numbers.",
      },
    ],
  },

  // 11. Cloud Privacy Multi-Agent Framework
  {
    id: "proj-cloud-privacy",
    title: "Cloud Privacy Multi-Agent Framework",
    slug: "cloud-privacy-multi-agent",
    client: "AI Research & Cloud Security",
    tagline: "Autonomous multi-agent system orchestrating privacy-preserving data exchanges.",
    description:
      "Autonomous multi-agent system orchestrating privacy-preserving data exchanges and policy compliance.",
    category: "Multi-Agent",
    badge: "Multi-Agent AI",
    isLive: false,
    iconName: "Shield",
    featured: false,
    published: true,
    thumbnail: "/projects/cloud-privacy.png",
    screenshots: ["/projects/cloud-privacy.png"],
    technologies: ["Python", "Multi-Agent Systems", "LangChain", "Cloud Security"],
    githubUrl: "https://github.com/KadariUday/Cloud-Privacy-Multi-Agent",
    completedAt: "2026",
    overview:
      "This framework deploys collaborating autonomous agents to audit, enforce, and log cloud data transfers against strict data residency laws (GDPR, HIPAA, DPDP Act), preventing unauthorized exfiltration of sensitive telemetry.",
    challenges: [
      "Synchronizing consensus between auditor agents, encryption agents, and routing agents.",
      "Maintaining zero performance degradation on streaming cloud pipelines.",
    ],
    solutions: [
      "Implemented LangChain-based declarative agent roles with verified message contracts.",
      "Created immutable cryptographic audit logs for every data packet clearance.",
    ],
    keyFeatures: [
      {
        title: "Autonomous Compliance Auditing",
        description: "Scans payload schemas in flight for PII and policy infractions.",
      },
      {
        title: "Multi-Agent Consensus",
        description: "Requires dual-agent approval before routing sensitive datasets outside private VPCs.",
      },
    ],
  },

  // 12. DocuFind
  {
    id: "proj-docufind",
    title: "DocuFind — Student Emergency Documents Portal",
    slug: "student-emergency-docs-finder",
    client: "Campus Emergency Services",
    tagline: "High-speed campus lookup portal for instant retrieval of student records.",
    description:
      "High-speed campus lookup portal enabling instant retrieval of student identification and records by roll number.",
    category: "Academic",
    badge: "Campus Tool",
    isLive: true,
    iconName: "Users",
    featured: false,
    published: true,
    thumbnail: "/projects/student-docs.png",
    screenshots: ["/projects/student-docs.png"],
    technologies: ["JavaScript", "HTML5", "CSS3", "REST APIs"],
    liveUrl: "https://kadariuday.github.io/student-emergency-docs-finder/",
    githubUrl: "https://github.com/KadariUday/student-emergency-docs-finder",
    completedAt: "2026",
    overview:
      "Engineered for college security desks and administrative offices, DocuFind provides authorized staff with sub-second retrieval of student emergency contacts, blood group, medical alerts, and parent phone numbers via roll number lookup.",
    challenges: [
      "Providing instant results on low-bandwidth mobile browsers without loading heavy frontend libraries.",
      "Keeping data access secure while ensuring instant access during emergencies.",
    ],
    solutions: [
      "Built with vanilla JavaScript and lightweight DOM manipulation for zero overhead.",
      "Structured fast in-memory indexing for instant keystroke searches.",
    ],
    keyFeatures: [
      {
        title: "Sub-Second Roll Number Search",
        description: "Type student ID or roll number to pull emergency contact and blood group instantly.",
      },
      {
        title: "One-Click Emergency Call",
        description: "Direct dial link for parents, local guardians, and campus medical officers.",
      },
    ],
  },

  // 13. GlobalGuide
  {
    id: "proj-globalguide",
    title: "GlobalGuide — Real-Time Country Explorer",
    slug: "globalguide-country-explorer",
    client: "Geopolitical Intelligence Tool",
    tagline: "Interactive geopolitical explorer fetching live demographic data on 250+ nations.",
    description:
      "Interactive geopolitical explorer fetching live demographic data and statistics on 250+ nations.",
    category: "Utility",
    badge: "API Explorer",
    isLive: false,
    iconName: "Code2",
    featured: false,
    published: true,
    thumbnail: "/projects/globalguide.png",
    screenshots: ["/projects/globalguide.png"],
    technologies: ["JavaScript", "HTML5", "CSS3", "REST Countries API"],
    githubUrl: "https://github.com/KadariUday/GlobalGuide",
    completedAt: "2026",
    overview:
      "GlobalGuide queries the REST Countries API to deliver visual country profiles featuring real-time population, currency conversions, regional borders, timezones, and national flags.",
    challenges: [
      "Managing nested API data structures with varying international standards.",
      "Creating a smooth, responsive card layout for 250+ country items.",
    ],
    solutions: [
      "Implemented client-side caching to reduce repetitive network requests.",
      "Designed a responsive card filter with region-based dropdown selectors.",
    ],
    keyFeatures: [
      {
        title: "250+ Country Database",
        description: "Browse detailed demographic, economic, and geopolitical indicators.",
      },
      {
        title: "Interactive Region Filtering",
        description: "Quickly filter by continent, currency, or official languages.",
      },
    ],
  },

  // 14. SwiftLink
  {
    id: "proj-swiftlink",
    title: "SwiftLink — URL Shortener & Automation Tool",
    slug: "swiftlink-url-shortener",
    client: "Developer Utility Tool",
    tagline: "Python automation script and CLI converter utilizing Bitly V4 API.",
    description:
      "Python automation script and CLI converter utilizing Bitly V4 API with automatic clipboard copy.",
    category: "Utility",
    badge: "Python Tool",
    isLive: false,
    iconName: "Code2",
    featured: false,
    published: true,
    thumbnail: "/projects/swiftlink.png",
    screenshots: ["/projects/swiftlink.png"],
    technologies: ["Python", "REST APIs", "Requests", "JSON"],
    githubUrl: "https://github.com/KadariUday/SwiftLink",
    completedAt: "2026",
    overview:
      "SwiftLink is a productivity utility that converts lengthy web addresses into clean shortened URLs via the Bitly V4 API, immediately copying the shortened link to the system clipboard for streamlined sharing.",
    challenges: [
      "Handling API token authentication and rate-limit recovery seamlessly in a CLI terminal.",
      "Cross-platform clipboard access across Windows, macOS, and Linux.",
    ],
    solutions: [
      "Built clean exception handling with colorized terminal logging.",
      "Integrated native clipboard wrappers for zero user friction.",
    ],
    keyFeatures: [
      {
        title: "Instant Bitly Shortening",
        description: "Turns complex tracking URLs into clean shareable links in under 500ms.",
      },
      {
        title: "Auto-Clipboard Copy",
        description: "Automatically places generated link directly into system clipboard.",
      },
    ],
  },

  // 15. Kadari Uday Interactive Developer Portfolio
  {
    id: "proj-kadari-uday",
    title: "Kadari Uday — Interactive Developer Portfolio",
    slug: "kadari-uday-portfolio",
    client: "Personal Brand & Engineering Showcase",
    tagline: "High-performance developer portfolio built with React, Framer Motion, and GSAP.",
    description:
      "High-performance developer portfolio built with React, Framer Motion, GSAP, and dynamic GitHub synchronization.",
    category: "Portfolio",
    badge: "Live Portfolio",
    isLive: true,
    iconName: "Code2",
    featured: true,
    published: true,
    thumbnail: "/projects/kadari-uday-portfolio.png",
    screenshots: ["/projects/kadari-uday-portfolio.png"],
    technologies: ["React", "Vite", "Tailwind CSS", "Framer Motion", "GSAP", "GitHub API"],
    liveUrl: "https://portfolio-kadariudays-projects.vercel.app/",
    githubUrl: "https://github.com/KadariUday",
    completedAt: "2026",
    overview:
      "A flagship personal developer showcase engineered with high-frequency animation libraries, custom WebGL canvas shaders, interactive project sliders, and real-time GitHub repository stats.",
    challenges: [
      "Balancing complex GSAP scroll animations with 60 FPS mobile performance.",
      "Showcasing full-stack engineering expertise across web development, AI, and cloud architectures.",
    ],
    solutions: [
      "Leveraged GPU-accelerated CSS transforms and lightweight Vite bundling.",
      "Created modular interactive showcase cards with live demo links and source code repositories.",
    ],
    keyFeatures: [
      {
        title: "Interactive GSAP Animation Engine",
        description: "Silky smooth entrance effects, cursor glow aura, and scroll-linked progress bars.",
      },
      {
        title: "Dynamic GitHub Stats Integration",
        description: "Fetches live public repositories, star counts, and commit histories in real time.",
      },
    ],
  },

  // 16. Sri Karuna Hospital
  {
    id: "proj-sri-karuna-hospital",
    title: "Sri Karuna Hospital",
    slug: "sri-karuna-hospital",
    client: "Healthcare Management System",
    tagline: "Comprehensive hospital information management platform with role-based access control.",
    description:
      "A comprehensive hospital management system with role-based dashboards for Administrators, Doctors, Receptionists, and Pharmacy staff.",
    category: "Healthcare",
    badge: "Fork / Adaptation",
    isLive: false,
    iconName: "Activity",
    featured: false,
    published: true,
    thumbnail: "/projects/sri-karuna-hospital.png",
    screenshots: ["/projects/sri-karuna-hospital.png"],
    technologies: ["JavaScript", "HTML5", "CSS3", "Node.js"],
    githubUrl: "https://github.com/KadariUday/Sri-karuna-hospital-",
    completedAt: "2026",
    overview:
      "Sri Karuna Hospital is a hospital operations system designed to coordinate patient admissions, doctor appointment queues, electronic prescription records, and pharmacy inventory across separate department workstations.",
    challenges: [
      "Segmenting sensitive patient medical histories according to staff clearance levels.",
      "Maintaining unified billing between doctor consultations, lab tests, and pharmacy dispensaries.",
    ],
    solutions: [
      "Built role-based authorization guards for doctors, receptionists, and pharmacy clerks.",
      "Centralized patient invoices into a consolidated billing slip with itemized charges.",
    ],
    keyFeatures: [
      {
        title: "Role-Based Staff Dashboards",
        description: "Specialized workstations tailored for doctors, front-desk reception, and pharmacy inventory.",
      },
      {
        title: "Patient Electronic Medical Records (EMR)",
        description: "Stores clinical notes, diagnosis records, and prescription histories securely.",
      },
    ],
  },
];
