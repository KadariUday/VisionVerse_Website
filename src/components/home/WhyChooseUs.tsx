"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Smartphone,
  Bot,
  Code2,
  Search,
  Tag,
  CloudUpload,
  Headphones,
  Check,
  ShieldCheck,
} from "lucide-react";

const strengths = [
  {
    num: "01",
    title: "Modern Design & Responsive Fluidity",
    desc: "Every interface is tailored from 320px mobile screens to ultra-wide displays with fluid typography, balanced contrast, and tactile touch targets.",
    icon: Smartphone,
    highlight: "100% Fluid & Adaptive",
  },
  {
    num: "02",
    title: "Clean, Typed Code & Performance",
    desc: "Strict TypeScript types, modular component architecture, zero bloated dependencies, and sub-second Core Web Vitals.",
    icon: Code2,
    highlight: "Zero Bloat Architecture",
  },
  {
    num: "03",
    title: "AI-Powered Solutions & Intelligence",
    desc: "Hands-on engineering of LLM prompt chains, client-side TensorFlow.js neural inference, and autonomous multi-agent pipelines.",
    icon: Bot,
    highlight: "AI/ML Engineered",
  },
  {
    num: "04",
    title: "Affordable, Transparent Pricing",
    desc: "Fixed upfront rates from ₹299 for student resumes to ₹1,500+ for enterprise storefronts. Zero hidden retainer fees, ever.",
    icon: Tag,
    highlight: "₹299–₹5,000 Upfront",
  },
  {
    num: "05",
    title: "Production SEO Optimization",
    desc: "Semantic HTML5, automated XML sitemaps, Open Graph social cards, and JSON-LD structured schemas for search engine indexation.",
    icon: Search,
    highlight: "Rank-Ready Metadata",
  },
  {
    num: "06",
    title: "Deployment Assistance & Hosting",
    desc: "Complete production rollout on Vercel Edge networks with custom domain DNS mapping, SSL certificates, and environment secret security.",
    icon: CloudUpload,
    highlight: "Vercel Edge & SSL",
  },
  {
    num: "07",
    title: "Dedicated Ongoing Support",
    desc: "Post-delivery bug warranties, 1-on-1 viva walkthrough sessions for students, and ongoing guidance as your project grows.",
    icon: Headphones,
    highlight: "Direct Lead Access",
  },
  {
    num: "08",
    title: "Responsible Security & Architecture",
    desc: "Supabase PostgreSQL Row-Level Security, parameterized queries, and safe client-side credential handling.",
    icon: ShieldCheck,
    highlight: "Database RLS Enabled",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-[#0C0D0E] border-y border-white/[0.08]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading & Studio Principles */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-[#F59E0B] uppercase tracking-widest">
              <span>{"// ENGINEERING PRINCIPLES"}</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.1]">
              THOUGHTFUL DESIGN.{" "}
              <span className="font-serif italic font-normal text-white/90">SOLID</span>{" "}
              DEVELOPMENT.
            </h2>

            <p className="text-base sm:text-lg text-[#A1A1AA] leading-relaxed font-normal">
              We approach every digital build with the care of artisans and the discipline of systems engineers.
              No fragile no-code workarounds, no inflated overheads — just clean, reliable software that
              serves your goals.
            </p>

            <div className="p-5 rounded-2xl bg-[#131517] border border-white/[0.08] space-y-3">
              <div className="text-xs font-mono text-[#F59E0B] uppercase tracking-wider">
                The Vision Verse24 Standard
              </div>
              <ul className="space-y-2 text-xs text-[#D4D4D8]">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Direct communication with your developer</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Full source code ownership on your GitHub</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Zero monthly platform hosting commission</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Editorial Matrix of 8 Strengths */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {strengths.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.num}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: (idx % 4) * 0.08 }}
                  className="p-5 rounded-xl bg-[#131517] border border-white/[0.08] hover:border-[#F59E0B]/30 transition-all duration-200 flex flex-col justify-between space-y-3"
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-[#F59E0B]">
                        {item.num}
                      </span>
                      <span className="font-mono text-[10px] text-[#A1A1AA] uppercase tracking-wider bg-white/[0.04] px-2 py-0.5 rounded border border-white/5">
                        {item.highlight}
                      </span>
                    </div>

                    <h3 className="font-heading text-base font-bold text-white leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-xs text-[#71717A] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
