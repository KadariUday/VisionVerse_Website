import { ProjectItem } from "@/types";

export const projectsData: ProjectItem[] = [
  {
    id: "proj-sr-jewellery",
    title: "SR Jewellery Collections",
    slug: "sr-jewellery-collections",
    client: "SR Jewellery Collections",
    tagline: "A premium jewellery e-commerce platform crafted to deliver luxury, trust & elegance.",
    description:
      "A complete e-commerce platform designed to deliver a luxurious, seamless and secure online jewellery shopping experience with end-to-end customer features and an operational admin dashboard.",
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
    liveUrl: "https://sr-jewellery-collections.vercel.app/",
    githubUrl: "https://github.com/KadariUday",
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
    thumbnail: "/team/kadari-uday-poster.png",
    screenshots: ["/team/kadari-uday-poster.png"],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
    liveUrl: "https://portfolio-kadariudays-projects.vercel.app/",
    githubUrl: "https://github.com/KadariUday",
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
    thumbnail: "/team/team-poster-3.png",
    screenshots: ["/team/team-poster-3.png"],
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
    thumbnail: "/team/team-poster-2.png",
    screenshots: ["/team/team-poster-2.png"],
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
  {
    id: "proj-academic-ai",
    title: "AI & Full-Stack Academic Projects",
    slug: "academic-projects-suite",
    client: "Vision Verse24 Academic Wing",
    tagline: "Curated academic project solutions with code, viva prep, and comprehensive documentation.",
    description:
      "Complete college project packages built for B.Tech / BCA / MCA students featuring AI/ML algorithms, web dashboards, database architecture, and ready-to-present documentation.",
    category: "Academic",
    featured: false,
    published: true,
    thumbnail: "/images/ai-smart-solutions.png",
    screenshots: ["/images/ai-smart-solutions.png"],
    technologies: ["Python", "FastAPI", "React", "Next.js", "MySQL", "MongoDB", "Scikit-Learn"],
    githubUrl: "https://github.com/KadariUday",
    completedAt: "2026",
    overview:
      "Vision Verse24 provides students with genuine, hands-on academic projects. Unlike static download repositories, every project is delivered with a complete working codebase, local setup guidance, architecture diagrams, and a 1-on-1 code walkthrough session.",
    challenges: [
      "Students often struggle with complex local dependency installation, outdated codebases, and lack of viva preparation.",
    ],
    solutions: [
      "Developed robust, containerized and pre-configured templates with clean documentation and mock viva questions.",
    ],
    keyFeatures: [
      {
        title: "Tested Working Codebase",
        description: "Fully debugged frontend, backend and database scripts with zero missing dependencies.",
      },
      {
        title: "Project Synopsis & Blackbook Report",
        description: "Standard IEEE / university-format documentation with ER diagrams and flowcharts.",
      },
      {
        title: "1-on-1 Mentorship Walkthrough",
        description: "Direct video session explaining how the code functions line-by-line for viva defense.",
      },
    ],
  },
];
