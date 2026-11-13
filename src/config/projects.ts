import { ProjectItem } from "@/types";

export const projectsData: ProjectItem[] = [
  {
    id: "proj-sr-jewellery",
    title: "SR Jewellery Collections",
    slug: "sr-jewellery-collections",
    client: "SR Jewellery Collections",
    tagline: "A premium jewellery e-commerce platform crafted to deliver luxury, trust & elegance.",
    description:
      "Full-stack luxury Indian heritage jewellery e-commerce platform & admin portal with Next.js 14, direct 0% fee dynamic UPI checkout, reviews, and live order tracking.",
    category: "E-Commerce",
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
      "Next.js 14.2.3",
      "React 18.3.1",
      "TypeScript 5.0",
      "Tailwind CSS 3.4",
      "Lucide React",
      "Recharts",
      "Supabase (PostgreSQL)",
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
      "Equipping the store owner with real-time stock, coupon and order tracking without needing technical expertise.",
    ],
    solutions: [
      "Designed a bespoke Midnight Black and Royal Gold visual language with subtle glow accents and tactile micro-interactions.",
      "Utilized Next.js Image optimization, edge caching on Vercel, and lazy-loaded image galleries to achieve sub-second page loads.",
      "Architected a normalized Supabase PostgreSQL database schema with row-level security and atomic inventory management.",
      "Developed a dedicated Admin Operations Portal featuring live revenue analytics charts, stock counters, printable tax invoices, and customer support desk.",
    ],
    keyFeatures: [
      {
        title: "Product Catalogue & Dynamic Collections",
        description: "Browse necklaces, earrings, bangles and rings with multi-tier category filtering, price sliders, and instant search.",
        icon: "Package",
      },
      {
        title: "Shopping Cart & Persistent Wishlist",
        description: "Seamless user experience with local session retention so customer items persist across page refreshes.",
        icon: "ShoppingBag",
      },
      {
        title: "Customer Authentication & Orders",
        description: "Secure login, profile management, and order history tracking with detailed order status timestamps.",
        icon: "UserCheck",
      },
      {
        title: "Dynamic UPI Checkout",
        description: "Frictionless direct payment flow generating branded QR codes and transaction reference verification.",
        icon: "CreditCard",
      },
      {
        title: "Customer Reviews & Ratings",
        description: "Authentic customer review submissions with star ratings and verified buyer badges.",
        icon: "Star",
      },
      {
        title: "Fully Responsive Mobile Experience",
        description: "Tailored bottom navigation, gesture-friendly product cards, and lightweight mobile drawer menus.",
        icon: "Smartphone",
      },
    ],
    adminFeatures: [
      "Real-time Revenue & Orders Analytics Dashboard powered by Recharts",
      "Product & Inventory Management (stock alerts, price editing, tags)",
      "Order Management with one-click status transitions (Pending, Paid, Shipped, Delivered)",
      "Printable Tax Invoices & customer slips",
      "Custom Coupon & Promo Code Creator (percentage and flat discounts)",
      "Customer Contact Desk with direct WhatsApp & Email trigger buttons",
      "Dynamic Store Profile & operational settings synchronization",
    ],
    results: [
      "Over 100+ fine jewellery products listed with detailed specifications.",
      "100% responsive across desktop, tablet, Android and iOS mobile viewports.",
      "Vercel Edge-hosted deployment with zero cold starts and instant CDN delivery.",
      "Empowered non-technical store management through intuitive admin panels.",
    ],
  },
  {
    id: "proj-careerforge-ai",
    title: "CareerForge AI",
    slug: "careerforge-ai",
    client: "AI Intelligence Project",
    tagline: "AI-Powered career and resume intelligence platform for students and job seekers.",
    description:
      "Intelligent career acceleration tool that analyzes resumes, matches skills to current tech market vacancies, and generates ATS-optimized career profiles.",
    category: "AI Application",
    featured: true,
    published: true,
    thumbnail: "/projects/careerforge-ai.png",
    screenshots: ["/projects/careerforge-ai.png"],
    technologies: ["JavaScript", "React", "Node.js", "Tailwind CSS", "OpenAI / LLM API", "Vercel"],
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
  {
    id: "proj-samvidha-attendance",
    title: "Samvidha Attendance Automation",
    slug: "samvidha-attendance",
    client: "IARE College Student Utility",
    tagline: "Automated academic attendance calculations and biometric tracking tool for students.",
    description:
      "Provides students with an instant, accurate summary of their academic standing, including an adjusted biometric percentage that accounts for specific portal formatting.",
    category: "Academic",
    featured: false,
    published: true,
    thumbnail: "/projects/samvidha-attendance.png",
    screenshots: ["/projects/samvidha-attendance.png"],
    technologies: ["JavaScript", "HTML5", "CSS3", "DOM Parser", "Vercel"],
    liveUrl: "https://samvidha-attendance-98tm.vercel.app/",
    githubUrl: "https://github.com/KadariUday/Samvidha_Attendance",
    completedAt: "2026",
    overview:
      "Developed for students at Institute of Aeronautical Engineering (IARE) to demystify complex attendance calculations, biometric adjustments, and condonation thresholds.",
    challenges: [
      "Parsing university portal HTML tables with erratic markup.",
      "Accurately projecting required hours to reach 75% attendance.",
    ],
    solutions: [
      "Engineered a lightweight client-side parser that calculates margin classes needed for safe eligibility.",
    ],
    keyFeatures: [
      {
        title: "Biometric Adjustment Calculation",
        description: "Correctly accounts for lab credits and biometric punch rules.",
      },
      {
        title: "Safe Class Bunk Calculator",
        description: "Calculates how many sessions a student can safely miss while remaining above 75%.",
      },
    ],
  },
  {
    id: "proj-lumina-weather-ai",
    title: "Lumina Weather AI",
    slug: "lumina-weather-ai",
    client: "Full-Stack Meteorological App",
    tagline: "Professional-grade weather platform delivering real-time meteorological analytics.",
    description:
      "Full-stack weather web application designed to deliver real-time meteorological data with an immersive user experience using Python Flask and modern responsive UI.",
    category: "AI Application",
    featured: false,
    published: true,
    thumbnail: "/projects/lumina-weather-ai.png",
    screenshots: ["/projects/lumina-weather-ai.png"],
    technologies: ["Python", "Flask", "JavaScript", "HTML5/CSS3", "REST Weather APIs", "Vercel"],
    liveUrl: "https://lumina-weather-ai.vercel.app",
    githubUrl: "https://github.com/KadariUday/Lumina-Weather-AI",
    completedAt: "2026",
    overview:
      "Lumina Weather AI connects global meteorological telemetry with an animated front-end, providing atmospheric pressure, UV index, wind compass, and multi-day predictive models.",
    challenges: [
      "Normalizing diverse international weather station data feeds.",
      "Rendering weather-reactive visual themes without client performance lag.",
    ],
    solutions: [
      "Designed a Flask caching layer and CSS hardware-accelerated animated weather backdrops.",
    ],
    keyFeatures: [
      {
        title: "Hyper-Local Forecasting",
        description: "Minute-by-minute precipitation tracking and multi-day radar metrics.",
      },
      {
        title: "Dynamic Visual Ambience",
        description: "Interface lighting shifts realistically based on sunrise, sunset, and storm conditions.",
      },
    ],
  },
  {
    id: "proj-diabcare",
    title: "DiabCare+ Diet & Insulin Platform",
    slug: "diabetic-diet-and-insulin",
    client: "Healthcare Informatics Project",
    tagline: "Interactive healthcare web application for personalized diet planning and insulin dosing.",
    description:
      "Interactive healthcare web application designed to demonstrate how personalized diet planning and insulin calculations help in managing diabetes effectively.",
    category: "Academic",
    featured: false,
    published: true,
    thumbnail: "/projects/diabcare-plus.png",
    screenshots: ["/projects/diabcare-plus.png"],
    technologies: ["JavaScript", "HTML5", "CSS3", "Medical Formula Calculations", "Vercel"],
    liveUrl: "https://diabetic-diet-and-insulin-managemen.vercel.app",
    githubUrl: "https://github.com/KadariUday/Diabetic-Diet-and-Insulin-Management",
    completedAt: "2026",
    overview:
      "DiabCare+ educates users and students on the clinical relationship between macronutrient intake, glycemic index, and insulin dosing units.",
    challenges: [
      "Ensuring accurate mathematical model implementations of insulin-to-carb ratios.",
    ],
    solutions: [
      "Implemented step-by-step clinical calculation formulas with disclaimers for educational usage.",
    ],
    keyFeatures: [
      {
        title: "Carbohydrate to Insulin Ratio Calculator",
        description: "Calculates bolus requirements based on meal composition.",
      },
      {
        title: "Interactive Meal Diary",
        description: "Visualizes glycemic impact across breakfast, lunch, and dinner.",
      },
    ],
  },
  {
    id: "proj-phishing-detection",
    title: "AI Phishing & Scam Detection Platform",
    slug: "ai-phishing-scam-detection",
    client: "Cybersecurity & AI Wing",
    tagline: "Machine learning classifier detecting suspicious URLs and malicious digital communications.",
    description:
      "An intelligent cybersecurity platform that inspects URL lexical features, SSL certificate anomalies, and NLP heuristics to flag phishing scams in real time.",
    category: "AI Application",
    featured: false,
    published: true,
    thumbnail: "/projects/phishing-detection.png",
    screenshots: ["/projects/phishing-detection.png"],
    technologies: ["TypeScript", "Python", "Machine Learning", "Scikit-Learn", "FastAPI", "Next.js"],
    githubUrl: "https://github.com/KadariUday/AI-Phishing-Scam-Detection-Platform",
    completedAt: "2026",
    overview:
      "Designed as a frontline defense against social engineering, this platform scans suspicious domains, analyzes redirect hops, and delivers risk scores to protect end users.",
    challenges: [
      "Mitigating false positives on shortened or promotional URLs.",
      "Running heuristic checks with low latency.",
    ],
    solutions: [
      "Trained ensemble classifiers on Kaggle and PhishTank datasets, paired with an asynchronous inspection pipeline.",
    ],
    keyFeatures: [
      {
        title: "Lexical & Domain Age Analysis",
        description: "Scrutinizes punycode spoofing, WHOIS registration age, and DNS records.",
      },
      {
        title: "Threat Breakdown Matrix",
        description: "Visual risk rating indicating specific vulnerabilities identified in the tested link.",
      },
    ],
  },
  {
    id: "proj-plagiarism-checker",
    title: "Plagiarism Detection Suite",
    slug: "plagiarism-checker-suite",
    client: "Academic Natural Language Processing",
    tagline: "Academic text similarity analysis engine with cosine similarity and report generation.",
    description:
      "Semantic plagiarism detection engine featuring cosine text similarity algorithms, document comparison, and visual highlight reporting.",
    category: "Academic",
    featured: false,
    published: true,
    thumbnail: "/projects/plagiarism-checker.png",
    screenshots: ["/projects/plagiarism-checker.png"],
    technologies: ["TypeScript", "Python", "NLP", "Flask", "React", "Tailwind CSS"],
    liveUrl: "https://plagarism-checker-frontend-ruby.vercel.app",
    githubUrl: "https://github.com/KadariUday/Plagarism-Checker-Frontend-",
    completedAt: "2026",
    overview:
      "Built for academic departments and students to verify thesis originality, identify matching text chunks, and ensure ethical citation standards.",
    challenges: [
      "Handling synonym replacements and sentence structure shuffling.",
    ],
    solutions: [
      "Applied N-gram tokenization and TF-IDF vectorization for semantic similarity matching.",
    ],
    keyFeatures: [
      {
        title: "Side-by-Side Comparison",
        description: "Synchronized dual view highlighting identical and paraphrased text segments.",
      },
      {
        title: "Similarity Percentage Gauge",
        description: "Instant numerical score ready for university submission verification.",
      },
    ],
  },
  {
    id: "proj-promptpilot",
    title: "PromptPilot AI",
    slug: "promptpilot-ai",
    client: "Productivity AI Platform",
    tagline: "Turn natural language prompts into automated code, workflows, and web designs.",
    description:
      "Multi-functional prompt execution platform that converts natural language instructions into functional code snippets, content summaries, and UI mockups.",
    category: "AI Application",
    featured: false,
    published: true,
    thumbnail: "/projects/promptpilot.png",
    screenshots: ["/projects/promptpilot.png"],
    technologies: ["CSS", "JavaScript", "AI Prompt Engineering", "Node.js", "OpenAI"],
    githubUrl: "https://github.com/KadariUday/PromptPilot",
    completedAt: "2025",
    overview:
      "PromptPilot was created to accelerate developer workflow, acting as an intelligent prompt workbench that executes multi-step prompt chains.",
    challenges: [
      "Prompt drift and inconsistent responses across different model generations.",
    ],
    solutions: [
      "Curated few-shot prompting libraries and output sanitizer guards.",
    ],
    keyFeatures: [
      {
        title: "Actionable Prompt Templates",
        description: "Pre-tested prompt templates for web design, SQL queries, and bug fixes.",
      },
    ],
  },
  {
    id: "proj-student-docs",
    title: "Student Photo & Emergency Docs Finder",
    slug: "student-emergency-docs-finder",
    client: "IARE Campus Administration Tool",
    tagline: "Instant roll-number student identity and academic document lookup utility.",
    description:
      "Lightweight web application that allows university staff and students to quickly view essential student credentials using roll numbers.",
    category: "Academic",
    featured: false,
    published: true,
    thumbnail: "/projects/student-docs.png",
    screenshots: ["/projects/student-docs.png"],
    technologies: ["HTML5", "CSS3", "JavaScript", "REST APIs", "Vercel"],
    liveUrl: "https://student-emergency-docs-finder.vercel.app",
    githubUrl: "https://github.com/KadariUday/Student_Emergency_Docs_Finder",
    completedAt: "2025",
    overview:
      "A fast campus utility created to speed up identity lookups during college registration and emergencies.",
    challenges: [
      "Ensuring sub-second response times on campus Wi-Fi networks.",
    ],
    solutions: [
      "Zero-dependency pure HTML/JavaScript implementation with instant CDN delivery.",
    ],
    keyFeatures: [
      {
        title: "Roll-Number Direct Query",
        description: "Instant lookup without logging into cumbersome ERP portals.",
      },
    ],
  },
  {
    id: "proj-kadari-portfolio",
    title: "Kadari Uday — Personal Portfolio",
    slug: "kadari-uday-portfolio",
    client: "Kadari Uday (Personal)",
    tagline: "Modern developer portfolio showcasing AI/ML and full-stack web solutions.",
    description:
      "A fast, responsive developer portfolio featuring interactive skill visualizations, project showcases, and direct contact integrations built with Next.js and Tailwind CSS.",
    category: "Portfolio",
    featured: false,
    published: true,
    thumbnail: "/team/kadari-uday.png",
    screenshots: ["/team/kadari-uday.png"],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
    liveUrl: "https://portfolio-kadariudays-projects.vercel.app",
    githubUrl: "https://github.com/KadariUday/Portfolio",
    completedAt: "2026",
    overview:
      "Official portfolio website for Kadari Uday, Lead Full-Stack and AI Developer at Vision Verse24. Built to showcase engineering projects, technical skillsets, and academic milestones from IARE Hyderabad.",
    challenges: [
      "Creating a distinctive dark developer identity that stands out from standard templates.",
      "Ensuring rapid performance and fluid animations across mobile devices.",
    ],
    solutions: [
      "Crafted custom terminal and glassmorphic card components with Framer Motion animations.",
      "Integrated instant WhatsApp and email contact channels.",
    ],
    keyFeatures: [
      {
        title: "Project Showcase",
        description: "Interactive cards with live demo links and GitHub repository access.",
      },
      {
        title: "Skills & Tech Stack Grid",
        description: "Visual breakdown of frontend, backend, database and AI competencies.",
      },
      {
        title: "Direct Contact Integration",
        description: "Quick-connect buttons for WhatsApp, LinkedIn, GitHub and email.",
      },
    ],
  },
  {
    id: "proj-sreeja-portfolio",
    title: "Rajoju Sreeja — UI/UX & Dev Portfolio",
    slug: "sreeja-portfolio",
    client: "Rajoju Sreeja (Personal)",
    tagline: "Clean, elegant portfolio highlighting UI/UX design and frontend development.",
    description:
      "A creative portfolio presenting modern interface designs, design thinking workflows, and clean frontend web development implementations.",
    category: "Portfolio",
    featured: false,
    published: true,
    thumbnail: "/team/rajoju-sreeja.png",
    screenshots: ["/team/rajoju-sreeja.png"],
    technologies: ["React", "JavaScript", "Tailwind CSS", "Figma", "Vercel"],
    liveUrl: "https://portfolio-azure-zeta-ozysd1qhg.vercel.app/",
    githubUrl: "https://github.com/Sreeja-Rajoju",
    completedAt: "2026",
    overview:
      "Portfolio platform designed by Rajoju Sreeja to demonstrate her user experience design principles, component mockups, and AI engineering projects at IARE Hyderabad.",
    challenges: [
      "Balancing aesthetic visual flair with clarity and accessible typography.",
    ],
    solutions: [
      "Clean visual hierarchy with modern pastel-accented dark components and responsive layout.",
    ],
    keyFeatures: [
      {
        title: "Design Showcase",
        description: "Wireframes, high-fidelity prototypes and live component demos.",
      },
      {
        title: "Academic & Tech Highlights",
        description: "Overview of B.Tech AI & ML achievements, hackathons, and certifications.",
      },
    ],
  },
  {
    id: "proj-venkat-portfolio",
    title: "Rapalli Venkat Dathadri — Portfolio",
    slug: "venkat-portfolio",
    client: "Rapalli Venkat Dathadri (Personal)",
    tagline: "Engineering portfolio focusing on web development, project coordination & operations.",
    description:
      "Personal portfolio platform representing technical capabilities in web development, database management, and agile project delivery.",
    category: "Portfolio",
    featured: false,
    published: true,
    thumbnail: "/team/venkat-dathadri.png",
    screenshots: ["/team/venkat-dathadri.png"],
    technologies: ["React", "JavaScript", "Tailwind CSS", "MySQL", "Vercel"],
    liveUrl: "https://my-portfolio-5t6t.vercel.app/",
    githubUrl: "https://github.com/venkatdathu",
    completedAt: "2026",
    overview:
      "Personal portfolio highlighting web solutions, database integrations, and project leadership under Vision Verse24.",
    challenges: [
      "Providing a streamlined overview of technical and leadership skills.",
    ],
    solutions: [
      "Structured layout with clear service offerings and verified contact channels.",
    ],
    keyFeatures: [
      {
        title: "Work & Education Timeline",
        description: "Clear overview of academic trajectory and technical competencies.",
      },
      {
        title: "Interactive Connect",
        description: "Direct links to LinkedIn, GitHub, and phone contact.",
      },
    ],
  },
];
