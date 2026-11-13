"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  MessageSquare,
  Compass,
  Code2,
  Rocket,
  Headphones,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    step: "01",
    title: "DISCUSS",
    desc: "Understand your core requirements, target audience, brand aesthetic, and project goals.",
    icon: MessageSquare,
    color: "from-blue-500 to-cyan-400",
    border: "border-blue-500/40",
  },
  {
    step: "02",
    title: "PLAN",
    desc: "Prepare wireframes, component hierarchy, database schema, and delivery milestone schedule.",
    icon: Compass,
    color: "from-purple-500 to-indigo-400",
    border: "border-purple-500/40",
  },
  {
    step: "03",
    title: "DEVELOP",
    desc: "Build the solution with clean, performant code, modern UI styling, and robust API endpoints.",
    icon: Code2,
    color: "from-pink-500 to-rose-400",
    border: "border-pink-500/40",
  },
  {
    step: "04",
    title: "DEPLOY",
    desc: "Deploy the production-ready project on Vercel with SSL, domain linkage, and edge caching.",
    icon: Rocket,
    color: "from-amber-500 to-yellow-400",
    border: "border-amber-500/40",
  },
  {
    step: "05",
    title: "SUPPORT",
    desc: "Provide comprehensive walkthroughs, code documentation, viva tips, and ongoing support.",
    icon: Headphones,
    color: "from-emerald-500 to-teal-400",
    border: "border-emerald-500/40",
  },
];

export function DevelopmentProcess() {
  return (
    <section className="py-24 relative overflow-hidden bg-[#080B1C]">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#111633] border border-purple-500/30 text-xs font-semibold text-purple-300">
            <span>TRANSPARENT 5-STEP ROADMAP</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Our Simple & Disciplined{" "}
            <span className="text-gradient-brand">Development Process</span>
          </h2>

          <p className="text-base text-slate-300 max-w-2xl mx-auto">
            From initial enquiry to production launch and ongoing assistance, every step is transparent, collaborative, and results-oriented.
          </p>
        </div>

        {/* 5 Steps Process Grid with Connecting Line */}
        <div className="mt-20 relative">
          {/* Desktop Connecting Line behind cards */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 -translate-y-1/2 -z-0 opacity-30" />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative z-10">
            {steps.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="group relative rounded-3xl bg-[#0D1127] border border-purple-500/20 hover:border-purple-400/50 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 shadow-card-glass"
                >
                  {/* Step Number Top Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`text-xs font-black px-3 py-1 rounded-full bg-gradient-to-r ${item.color} text-black font-mono shadow-sm`}
                    >
                      STEP {item.step}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-slate-400 group-hover:text-white transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-extrabold text-white group-hover:text-purple-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  {idx < steps.length - 1 && (
                    <div className="lg:hidden mt-4 pt-3 border-t border-slate-800 flex items-center justify-center text-slate-500 text-xs gap-1">
                      <span>Next Step</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
