"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Smartphone,
  Zap,
  Search,
  ShieldCheck,
  Code2,
  CloudUpload,
  BookOpen,
  Award,
  Check,
} from "lucide-react";

const deliverables = [
  {
    title: "100% Responsive Fluidity",
    desc: "Seamless visual fidelity across mobile phones, tablets, laptops, and ultra-wide screens.",
    icon: Smartphone,
    metric: "320px — 4K",
  },
  {
    title: "Sub-Second Loading",
    desc: "Optimized Next.js edge caching, static generation, and image transforms.",
    icon: Zap,
    metric: "< 1.0s LCP",
  },
  {
    title: "Production SEO Schema",
    desc: "Structured JSON-LD schema metadata, Open Graph cards, dynamic sitemaps, and robots.",
    icon: Search,
    metric: "Google-Ready",
  },
  {
    title: "Secure Architecture",
    desc: "Protected environment secrets, backend input sanitization, and Supabase RLS policies.",
    icon: ShieldCheck,
    metric: "RLS Enabled",
  },
  {
    title: "Clean, Typed Code",
    desc: "Modular React components, strict TypeScript interfaces, and zero spaghetti code.",
    icon: Code2,
    metric: "100% Typed",
  },
  {
    title: "Vercel Edge Deployment",
    desc: "Live production URL with SSL certificates and custom domain DNS configuration assistance.",
    icon: CloudUpload,
    metric: "Zero Downtime",
  },
  {
    title: "Full Documentation",
    desc: "Architecture diagrams, local setup commands, API descriptions, and viva explanations.",
    icon: BookOpen,
    metric: "Viva Ready",
  },
  {
    title: "Satisfaction Guarantee",
    desc: "Iterative revisions included to guarantee every deliverable matches your specifications.",
    icon: Award,
    metric: "100% Focused",
  },
];

export function WhatYouGet() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-[#101114] border-t border-white/[0.08]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#315BFF] uppercase tracking-widest">
            <span>{"// THE STUDIO STANDARD"}</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.08]">
            DELIVERED WITH{" "}
            <span className="font-serif italic font-normal text-white/90">EVERY</span> BUILD.
          </h2>

          <p className="text-base sm:text-lg text-[#A2A6B2] leading-relaxed max-w-2xl font-normal">
            We don't just hand over code and vanish. Every solution comes equipped with production
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
                className="p-5 sm:p-6 rounded-2xl bg-[#15171C] border border-white/[0.08] hover:border-white/20 transition-all duration-200 flex flex-col justify-between space-y-4 group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-[#1B1E26] border border-white/10 flex items-center justify-center text-[#315BFF] group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-[10px] text-[#A2A6B2] uppercase tracking-wider bg-white/[0.03] px-2 py-0.5 rounded border border-white/5">
                      {item.metric}
                    </span>
                  </div>

                  <h3 className="font-heading text-base font-bold text-white group-hover:text-[#315BFF] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-[#777982] leading-relaxed">
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
