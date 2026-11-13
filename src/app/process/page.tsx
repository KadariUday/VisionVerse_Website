import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { FinalCta } from "@/components/home/FinalCta";
import {
  Compass,
  FileCode2,
  Code2,
  Rocket,
  Headphones,
  Check,
  ArrowUpRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Our Process | VISION VERSE24 — IDEAS. CODE. IMPACT.",
  description:
    "Explore Vision Verse24's 5-step development lifecycle: Discover, Plan, Build, Launch, and Support. Clear communication and reliable delivery.",
};

const detailedSteps = [
  {
    step: "01",
    name: "DISCOVER",
    headline: "Understanding Your Vision & Core Objectives",
    icon: Compass,
    color: "text-[#F59E0B]",
    bg: "bg-[#F59E0B]/10 border-[#F59E0B]/30",
    description:
      "We begin with a focused discovery session over WhatsApp, Google Meet, or direct phone call. We examine your target audience, reference sites you admire, feature requirements, and timeline milestones.",
    deliverables: [
      "Initial requirements summary document",
      "Technology recommendations (Next.js, Supabase, Tailwind, Python)",
      "Fixed, upfront price quotation (Zero surprises)",
      "Target delivery calendar & milestone schedule",
    ],
  },
  {
    step: "02",
    name: "PLAN",
    headline: "Wireframes, Architecture & Database Design",
    icon: FileCode2,
    color: "text-[#FBBF24]",
    bg: "bg-[#FBBF24]/10 border-[#FBBF24]/30",
    description:
      "Before writing a line of code, we organize user journeys. We sketch responsive layout wireframes, select typography and color themes, and architect normalized database schemas with proper security constraints.",
    deliverables: [
      "Figma UI wireframe or visual design blueprint",
      "Database schema & relationship diagram (PostgreSQL)",
      "API route definitions & validation contracts",
      "Component structure blueprint",
    ],
  },
  {
    step: "03",
    name: "BUILD",
    headline: "Writing Clean, Performant & Documented Code",
    icon: Code2,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10 border-emerald-500/30",
    description:
      "We engineer your solution using modern Next.js 14 App Router, TypeScript, and Tailwind CSS. We implement responsive design for 320px mobile screens up to 4K displays, wire backend APIs, and configure database access.",
    deliverables: [
      "100% modular, human-readable React components",
      "Strict TypeScript type safety and zero compiler warnings",
      "Micro-interactions and fluid layout transitions",
      "Continuous live preview staging link for feedback",
    ],
  },
  {
    step: "04",
    name: "LAUNCH",
    headline: "Production Rollout on Vercel Global Edge",
    icon: Rocket,
    color: "text-[#F97316]",
    bg: "bg-[#F97316]/10 border-[#F97316]/30",
    description:
      "We deploy your application to Vercel's global edge network. We connect your custom domain (or provide a free .vercel.app domain), configure automatic SSL certificates, optimize assets for Core Web Vitals, and run security audits.",
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
    color: "text-[#10B981]",
    bg: "bg-[#10B981]/10 border-[#10B981]/30",
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
    <div className="pt-28 pb-20 space-y-24 bg-[#0C0D0E]">
      {/* Header */}
      <section className="relative overflow-hidden text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 pt-12">
        <div className="inline-flex items-center gap-2 font-mono text-xs text-[#F59E0B] uppercase tracking-widest">
          <span>{"// HOW WE WORK"}</span>
        </div>

        <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.06]">
          05 PHASES.{" "}
          <span className="font-serif italic font-normal text-white/90">DISCIPLINED</span>{" "}
          EXECUTION.
        </h1>

        <p className="text-base sm:text-xl text-[#A2A6B2] max-w-2xl mx-auto leading-relaxed font-normal">
          Predictable milestones, direct developer communication, and complete clarity from your initial
          message to final production launch.
        </p>
      </section>

      {/* Deep Steps Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {detailedSteps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.step}
                className="p-6 sm:p-8 rounded-2xl bg-[#15171C] border border-white/[0.08] hover:border-white/20 transition-all duration-200 shadow-studio space-y-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/[0.08]">
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 rounded-xl border flex items-center justify-center ${step.bg}`}
                    >
                      <Icon className={`w-6 h-6 ${step.color}`} />
                    </div>
                    <div>
                      <span className="text-xs font-mono text-[#777982] uppercase tracking-wider">
                        PHASE {step.step}
                      </span>
                      <h2 className="font-heading text-2xl font-bold text-white">{step.name}</h2>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-[#A2A6B2] px-3 py-1 rounded-full bg-white/[0.04] border border-white/5 self-start sm:self-auto">
                    {step.headline}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#A2A6B2] leading-relaxed">
                  {step.description}
                </p>

                <div className="p-4 sm:p-5 rounded-xl bg-[#1B1E26] border border-white/5 space-y-2.5">
                  <div className="text-xs font-mono text-[#777982] uppercase tracking-wider">
                    Key Deliverables In This Phase:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {step.deliverables.map((del, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2 text-xs text-[#D3D5DC]">
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
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
