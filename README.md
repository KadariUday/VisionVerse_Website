# VISION VERSE24 — IDEAS. CODE. IMPACT.

> **World-Class Digital Development Agency Website & Client Operating Platform**
> 
> Designed, developed, tested, and optimized for **VISION VERSE24** — turning ideas into powerful digital experiences for students, creators, startups, and growing enterprises.

---

## 🌟 Brand Identity

- **Brand Name:** VISION VERSE24
- **Tagline:** IDEAS. CODE. IMPACT.
- **Business Focus:** Web Development • E-Commerce Platforms • AI Solutions • Student & Academic Projects
- **Instagram:** [@vision_verse24](https://www.instagram.com/vision_verse24/)
- **Founder & Lead Developer:** Kadari Uday ([GitHub](https://github.com/KadariUday) • [Portfolio](https://portfolio-kadariudays-projects.vercel.app/))
- **Team / Co-Founders:**
  - **Kadari Uday** (Lead Full Stack & AI Developer)
  - **Rajoju Sreeja** (UI/UX Designer & AI Developer)
  - **Rapalli Venkat Dathadri** (Operations & Developer)
  - *Institute of Aeronautical Engineering (IARE), Hyderabad — B.Tech CSE (AI & ML), 2027 Batch*
- **Flagship Live Showcase:** [SR Jewellery Collections](https://sr-jewellery-collections.vercel.app/)

---

## 🚀 Key Features

1. **Extraordinary Interactive Homepage:**
   - Animated Hero with realistic CSS/SVG laptop and mobile device mockups displaying live agency screens and verified production previews.
   - Dynamic trust indicators (Fast Delivery, Quality Development, Affordable Pricing, Free Initial Consultation).
   - 5 Transparent Service Cards (Resume Build ₹299, Portfolio Website ₹499, College Projects ₹699, Practical Training ₹999, Business Websites ₹1,500–₹5,000).
   - Dedicated Luxury Showcase for **SR Jewellery Collections** featuring genuine jewellery pieces, tech stack badges, and customer/admin operation comparisons.
   - Expandable portfolio grid with verified repositories and live demos.
   - 5-Step visual development process (Discuss, Plan, Develop, Deploy, Support).
   - Authentic team bios, Instagram QR code card, and WhatsApp connect CTAs.

2. **Project Enquiry to WhatsApp System:**
   - 11-field form with strict Zod validation (Indian phone numbers, email sanitization, budget tiers, project description, delivery dates).
   - Server-side route handler with IP rate limiting and spam protection.
   - Supabase PostgreSQL persistence (with local resilient storage fallback for zero data loss).
   - Collision-safe sequential enquiry IDs (e.g., `VV-2026-0001`).
   - Automatically formats and launches the owner's WhatsApp click-to-chat URL (`https://wa.me/919392438853?text=...`).
   - Celebratory visual feedback with confetti and copyable enquiry ID.

3. **Secure Admin Operations Portal (`/admin`):**
   - Protected by `ADMIN_SECRET_KEY` with secure HTTP-only cookies.
   - Real-time metrics: Total, New, In-Progress, and Completed enquiries.
   - Search by ID, customer name, email, or WhatsApp number.
   - Filter by enquiry status and service category.
   - Interactive status dropdowns (`new` -> `in-progress` -> `completed` -> `cancelled`).
   - Full enquiry inspection modal with direct 1-click WhatsApp client chat button.
   - Project catalog browser and centralized service pricing inspector.

4. **Complete Multi-Page Architecture:**
   - `/` — Homepage
   - `/about` — Authentic team story and engineering principles
   - `/services` — Detailed breakdown and side-by-side feature comparison matrix
   - `/projects` — Full portfolio with category filtering
   - `/projects/[slug]` — High-depth case studies (including `/projects/sr-jewellery-collections`)
   - `/pricing` — Transparent student & business pricing with UPI payment modes
   - `/process` — In-depth 5-phase engineering lifecycle and deliverables
   - `/contact` — Direct enquiry form, office address, and WhatsApp/Instagram channels
   - `/faq` — 11+ frequently asked questions on delivery, viva prep, and hosting
   - `/privacy-policy` & `/terms` — Real legal compliance pages
   - `/not-found` — Custom cosmic 404 page
   - `/sitemap.xml` & `/robots.txt` — Automated dynamic SEO feeds

---

## 🛠️ Technology Stack

- **Framework:** Next.js 14.2.18 (App Router, Server Components & Route Handlers)
- **UI Library:** React 18.3.1
- **Language:** TypeScript 5.6
- **Styling:** Tailwind CSS 3.4 (Custom Midnight `#080B1C` palette, glassmorphism, neon halos)
- **Motion:** Framer Motion 11
- **Icons:** Lucide React
- **Forms & Validation:** React Hook Form + Zod
- **Database:** Supabase (PostgreSQL with Row Level Security)
- **Deployment:** Vercel Global Edge Network

---

## ⚙️ Environment Variables Setup

Copy `.env.example` to `.env.local` and configure your credentials:

```bash
# Site URL
NEXT_PUBLIC_SITE_URL=https://visionverse24.vercel.app

# Owner WhatsApp & Contact (International format without '+')
NEXT_PUBLIC_OWNER_WHATSAPP_NUMBER=919392438853
NEXT_PUBLIC_OWNER_EMAIL=kadariudaycl@gmail.com
NEXT_PUBLIC_OWNER_PHONE=+91-9392438853

# Supabase Credentials (Optional for local dev, required for production)
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-supabase-service-role-key

# Admin Authentication
ADMIN_SECRET_KEY=visionverse24-admin-dev-key
ADMIN_EMAIL=kadariudaycl@gmail.com
```

---

## 🗄️ Database Setup (Supabase)

1. Create a free project at [supabase.com](https://supabase.com).
2. Navigate to the **SQL Editor** tab in your Supabase dashboard.
3. Open `supabase/migrations/001_initial_schema.sql` and run the script.
4. It will automatically create:
   - `enquiries` table with constraints and RLS policies
   - Sequential enquiry number generator function (`VV-YYYY-XXXX`)
   - `projects` and `services` tables with seed data
   - Automatic `updated_at` trigger functions
5. Copy your project URL, Anon Key, and Service Role Key into your Vercel project settings or `.env.local`.

---

## 🏃 Local Development & Testing

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Run production build
npm run build

# Run automated end-to-end test suite
node scripts/run-test.mjs
```

---

## 🚢 Deploying to Vercel

1. Push your repository to GitHub (`https://github.com/KadariUday/visionverse24`).
2. Log in to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import your GitHub repository.
4. In the **Environment Variables** section, add the variables from `.env.example`.
5. Click **"Deploy"**.
6. Your website is live worldwide on Vercel's Edge Network with free automated HTTPS!

---

## 📞 Official Contacts

- **WhatsApp / Phone:** +91-9392438853
- **Email:** kadariudaycl@gmail.com
- **Instagram:** [@vision_verse24](https://www.instagram.com/vision_verse24/)
- **Campus Address:** Institute of Aeronautical Engineering, Dundigal, Hyderabad, Telangana — 500043
