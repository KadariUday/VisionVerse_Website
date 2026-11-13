import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { DevelopmentProcess } from "@/components/home/DevelopmentProcess";
import { FinalCta } from "@/components/home/FinalCta";
import {
  Sparkles,
  MessageSquare,
  Compass,
  Code2,
  Rocket,
  Headphones,
  CheckCircle2,
  ArrowRight,
  Clock,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Our Process | VISION VERSE24",
  description:
    "Explore Vision Verse24's 5-step development lifecycle: Discuss, Plan, Develop, Deploy, and Support. Clear communication and reliable delivery.",
};

const detailedSteps = [
  {
    step: "01",
    name: "DISCUSS",
    headline: "Understanding Your Vision & Core Objectives",
    icon: MessageSquare,
    color: "text-blue-400",
    bg: "bg-blue-500/10 border-blue-500/30",
    description:
      "We begin with a friendly, comprehensive discussion over WhatsApp, Google Meet, or phone. We examine your target audience, reference sites you admire, feature wishlists, and timeline requirements.",
    deliverables: [
      "Initial requirements summary document",
      "Technology recommendation (Next.js, Supabase, Tailwind, Python)",
      "Fixed, upfront price quotation (Zero surprises)",
      "Target delivery calendar & milestone schedule",
    ],
  },
  {
    step: "02",
    name: "PLAN",
    headline: "Wireframes, Architecture & Database Design",
    icon: Compass,
    color: "text-purple-400",
    bg: "bg-purple-500/10 border-purple-500/30",
    description:
      "Before writing a line of code, we organize the user flow. We sketch responsive layout wireframes, select typography and color themes, and architect normalized database schemas with proper security constraints.",
    deliverables: [
      "Figma UI wireframe or visual design mockup",
      "Database schema & relationship diagram (PostgreSQL)",
      "API route definitions & validation rules",
      "Component structure blueprint",
    ],
  },
  {
    step: "03",
    name: "DEVELOP",
    headline: "Writing Clean, Performant & Documented Code",
    icon: Code2,
    color: "text-pink-400",
    bg: "bg-pink-500/10 border-pink-500/30",
    description:
      "We build your website using modern Next.js 14 App Router, TypeScript, and Tailwind CSS. We implement responsive design for 320px mobile screens up to 4K displays, wire backend APIs, and configure database access.",
    deliverables: [
      "100% modular, human-readable React components",
      "Strict TypeScript type safety and zero compiler warnings",
      "Interactive micro-animations with Framer Motion",
      "Continuous live preview staging link for feedback",
    ],
  },
  {
    step: "04",
    name: "DEPLOY",
    headline: "Production Launch on Vercel Global Edge",
    icon: Rocket,
    color: "text-amber-400",
    bg: "bg-amber-500/10 border-amber-500/30",
    description:
      "We deploy your application to Vercel's global edge network. We connect your custom domain (or provide a free .vercel.app domain), enable automatic SSL certificates, optimize assets for Core Web Vitals, and run security checks.",
    deliverables: [
      "Live production website with HTTPS / SSL",
      "Vercel CDN edge caching configured",
      "Environment variables securely configured",
      "Full source code repository pushed to your personal GitHub",
    ],
  },
  {
    step: "05",
    name: "SUPPORT",
    headline: "Comprehensive Walkthrough, Viva Prep & Maintenance",
    icon: Headphones,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10 border-emerald-500/30",
    description:
      "Our relationship does not end at deployment. For students, we provide 1-on-1 code explanations and viva defense preparation tips. For businesses, we guide store management and provide ongoing bug-fix warranties.",
    deliverables: [
      "1-on-1 video walkthrough explaining how the code works",
      "Written README setup & maintenance guide",
      "Mock viva questions & answers for student projects",
      "Post-launch bug fixing & scope revision support",
    ],
  },
];

export default function ProcessPage() {
  return (
    <div className="pt-28 pb-20 space-y-24">
      {/* Header */}
      <section className="relative overflow-hidden text-center max-w-4xl mx-auto px-4 md:px-6 space-y-6">
        <div className="glow-orb-purple -top-20 left-1/2 -translate-x-1/2 opacity-30" />
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#111633] border border-purple-500/30 text-xs font-semibold text-purple-300">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>HOW WE BRING IDEAS TO LIFE</span>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight">
          Our 5-Step Engineering <span className="text-gradient-brand">Lifecycle</span>
        </h1>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Predictable milestones, direct developer communication, and complete clarity from your initial message to final production launch.
        </p>
      </section>

      {/* Deep Steps Section */}
      <section className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          {detailedSteps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.step}
                className="group p-8 rounded-3xl bg-[#0D1127] border border-purple-500/20 hover:border-purple-400/50 transition-all duration-300 shadow-card-glass space-y-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-14 h-14 rounded-2xl border flex items-center justify-center ${step.bg}`}
                    >
                      <Icon className={`w-7 h-7 ${step.color}`} />
                    </div>
                    <div>
                      <span className="text-xs font-mono font-bold text-slate-400">
                        PHASE {step.step}
                      </span>
                      <h2 className="text-2xl font-black text-white">{step.name}</h2>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-slate-400 px-3 py-1 rounded-full bg-white/5 border border-white/10 self-start sm:self-auto">
                    {step.headline}
                  </span>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {step.description}
                </p>

                <div className="p-5 rounded-2xl bg-[#080B1C] border border-slate-800/80 space-y-3">
                  <div className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                    Key Deliverables In This Phase:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {step.deliverables.map((del, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <FinalCta />
    </div>
  );
}
