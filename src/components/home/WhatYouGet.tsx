"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Code,
  ShieldCheck,
  Zap,
  Smartphone,
  Search,
  Headphones,
  GitBranch,
  Layers,
} from "lucide-react";

const deliverables = [
  {
    title: "100% Custom TypeScript Code",
    desc: "Clean, human-written Next.js 14 and React code tailored precisely to your specific requirements. No bloated WordPress plugins.",
    icon: Code,
    metric: "0% Bloat",
  },
  {
    title: "Vercel Serverless Edge Hosting",
    desc: "Deployed to global edge data centers with sub-100ms cold starts, automated SSL certificates, and 99.99% uptime.",
    icon: Zap,
    metric: "< 100ms",
  },
  {
    title: "Pixel-Perfect Mobile Fidelity",
    desc: "Engineered mobile-first. Tested across iOS, Android, tablets, and desktop resolutions with zero layout shift.",
    icon: Smartphone,
    metric: "100% Fluid",
  },
  {
    title: "Comprehensive SEO Architecture",
    desc: "Complete metadata, OpenGraph cards, dynamic sitemap.xml, and schema.org JSON-LD structured data for Google rankings.",
    icon: Search,
    metric: "Rank Ready",
  },
  {
    title: "Full GitHub Repository Ownership",
    desc: "Direct push or complete transfer to your personal GitHub account. You hold 100% intellectual property rights.",
    icon: GitBranch,
    metric: "100% Yours",
  },
  {
    title: "Post-Launch Technical Support",
    desc: "Dedicated post-delivery assistance for minor adjustments, DNS wiring, and code walkthroughs.",
    icon: Headphones,
    metric: "Direct Access",
  },
  {
    title: "Production Component Architecture",
    desc: "Modular, reusable React components styled with Tailwind CSS for effortless future expansion and maintenance.",
    icon: Layers,
    metric: "Modular",
  },
  {
    title: "Database Security & RLS",
    desc: "Supabase PostgreSQL Row-Level Security, parameterized queries, and safe client-side credential handling.",
    icon: ShieldCheck,
    metric: "PostgreSQL",
  },
];

export function WhatYouGet() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-[#0C0D0E] border-t border-white/[0.08]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#F59E0B] uppercase tracking-widest">
            <span>{"// THE STUDIO STANDARD"}</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.08]">
            DELIVERED WITH{" "}
            <span className="font-serif italic font-normal text-white/90">EVERY</span> BUILD.
          </h2>

          <p className="text-base sm:text-lg text-[#A1A1AA] leading-relaxed max-w-2xl font-normal">
            We don&apos;t just hand over code and vanish. Every solution comes equipped with production
            engineering, accessibility standards, and complete deployment ownership.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {deliverables.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className="p-5 sm:p-6 rounded-2xl bg-[#131517] border border-white/[0.08] hover:border-[#F59E0B]/30 transition-all duration-200 flex flex-col justify-between space-y-4 group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-[#181A1F] border border-white/10 flex items-center justify-center text-[#F59E0B] group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-[10px] text-[#A1A1AA] uppercase tracking-wider bg-white/[0.03] px-2 py-0.5 rounded border border-white/5">
                      {item.metric}
                    </span>
                  </div>

                  <h3 className="font-heading text-base font-bold text-white group-hover:text-[#F59E0B] transition-colors">
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
    </section>
  );
}
