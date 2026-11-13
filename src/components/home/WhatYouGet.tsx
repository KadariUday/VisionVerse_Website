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
  Sparkles,
} from "lucide-react";

const deliverables = [
  {
    title: "100% Responsive Design",
    desc: "Seamless visual fidelity across mobile phones, tablets, laptops, and ultra-wide screens.",
    icon: Smartphone,
    color: "from-blue-500 to-cyan-400",
  },
  {
    title: "Blazing Fast Loading",
    desc: "Sub-second initial paint with Next.js static and server edge optimizations.",
    icon: Zap,
    color: "from-amber-400 to-yellow-500",
  },
  {
    title: "SEO Optimization",
    desc: "Structured schema metadata, Open Graph cards, sitemaps, and robots configuration.",
    icon: Search,
    color: "from-purple-500 to-indigo-500",
  },
  {
    title: "Secure Architecture",
    desc: "Protected environment secrets, backend input sanitization, and Supabase RLS policies.",
    icon: ShieldCheck,
    color: "from-emerald-400 to-teal-500",
  },
  {
    title: "Clean & Documented Code",
    desc: "Modular React components, readable TypeScript interfaces, and zero spaghetti code.",
    icon: Code2,
    color: "from-pink-500 to-rose-500",
  },
  {
    title: "Vercel Deployment Support",
    desc: "Instant live production URL with SSL certificate and custom domain linkage assistance.",
    icon: CloudUpload,
    color: "from-blue-600 to-purple-600",
  },
  {
    title: "Complete Documentation",
    desc: "Architecture diagrams, local setup commands, API descriptions, and viva explanations.",
    icon: BookOpen,
    color: "from-indigo-500 to-blue-400",
  },
  {
    title: "100% Satisfaction Guarantee",
    desc: "Scope revisions included to ensure your website meets every single expectation.",
    icon: Award,
    color: "from-yellow-400 to-amber-500",
  },
];

export function WhatYouGet() {
  return (
    <section className="py-24 relative overflow-hidden bg-[#060814] border-t border-slate-800/80">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#111633] border border-emerald-500/30 text-xs font-semibold text-emerald-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>STANDARDS & DELIVERABLES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            What You Get With <span className="text-gradient-brand">Every Project</span>
          </h2>

          <p className="text-base text-slate-300 max-w-2xl mx-auto">
            We don't just hand over code and vanish. Every solution comes packed with enterprise-grade craftsmanship, performance, and launch support.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {deliverables.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="p-6 rounded-2xl bg-[#0D1127] border border-purple-500/15 hover:border-emerald-400/40 transition-all duration-300 hover:-translate-y-1 shadow-card-glass"
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} p-0.5 mb-4 shadow-sm`}
                >
                  <div className="w-full h-full bg-[#0D1127] rounded-[10px] flex items-center justify-center text-white">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                </div>
                <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
