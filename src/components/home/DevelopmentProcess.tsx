"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Compass,
  FileCode2,
  Code2,
  Rocket,
  Headphones,
  ArrowRight,
} from "lucide-react";

const processSteps = [
  {
    step: "01",
    title: "DISCOVER",
    phase: "Week 01 // Discovery",
    desc: "We analyze your project goals, technical requirements, target users, and aesthetic vision with zero fluff.",
    icon: Compass,
    deliverables: "Scope Document & Wireframes",
  },
  {
    step: "02",
    title: "PLAN",
    phase: "Architecture Phase",
    desc: "We engineer component hierarchies, database schemas (Supabase/PostgreSQL), and milestone delivery sprints.",
    icon: FileCode2,
    deliverables: "System Design & Milestone Plan",
  },
  {
    step: "03",
    title: "BUILD",
    phase: "Sprint Execution",
    desc: "We write clean, typed TypeScript and Next.js components with continuous progress previews shared directly with you.",
    icon: Code2,
    deliverables: "Full Source Code on GitHub",
  },
  {
    step: "04",
    title: "LAUNCH",
    phase: "Edge Production",
    desc: "We configure Vercel Edge networks, custom domain DNS mapping, SSL certificates, and run Lighthouse performance audits.",
    icon: Rocket,
    deliverables: "Live Production URL & SSL",
  },
  {
    step: "05",
    title: "SUPPORT",
    phase: "Continuity Care",
    desc: "We provide comprehensive 1-on-1 code walkthroughs, academic viva defense tips, and post-launch bug warranty.",
    icon: Headphones,
    deliverables: "Post-Launch Warranty & Support",
  },
];

export function DevelopmentProcess() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-[#101114]">
      {/* Subtle Studio Grid */}
      <div className="absolute inset-0 bg-studio-grid pointer-events-none opacity-40" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#315BFF] uppercase tracking-widest">
            <span>{"// EXECUTION ROADMAP"}</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.08]">
            05 STEPS FROM{" "}
            <span className="font-serif italic font-normal text-white/90">IDEA</span>{" "}
            TO DEPLOYMENT.
          </h2>

          <p className="text-base sm:text-lg text-[#A2A6B2] leading-relaxed max-w-2xl font-normal">
            No guessing games. Every project follows a disciplined, transparent execution cycle
            with direct access to your lead developers at every stage.
          </p>
        </div>

        {/* Timeline Process: Horizontal on Large Screens, Vertical on Mobile */}
        <div className="relative">
          {/* Subtle connecting line for desktop */}
          <div className="hidden lg:block absolute top-[52px] left-12 right-12 h-[1px] bg-white/[0.12] -z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
            {processSteps.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="rounded-2xl bg-[#15171C] border border-white/[0.08] hover:border-white/20 p-6 flex flex-col justify-between transition-all duration-300 group"
                >
                  <div className="space-y-4">
                    {/* Top Step Number & Icon */}
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-full bg-[#1B1E26] border border-white/10 flex items-center justify-center font-mono text-xs font-bold text-white group-hover:border-[#315BFF] group-hover:text-[#315BFF] transition-colors">
                        {item.step}
                      </div>
                      <span className="font-mono text-[10px] text-[#777982] uppercase tracking-wider">
                        {item.phase}
                      </span>
                    </div>

                    <div>
                      <h3 className="font-heading text-lg font-bold text-white tracking-tight">
                        {item.step} — {item.title}
                      </h3>
                      <p className="text-xs text-[#A2A6B2] mt-2 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 mt-4 border-t border-white/[0.06]">
                    <div className="font-mono text-[10px] text-[#777982] uppercase tracking-wider">
                      Output:
                    </div>
                    <div className="text-[11px] font-medium text-[#D3D5DC] mt-0.5">
                      {item.deliverables}
                    </div>
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
