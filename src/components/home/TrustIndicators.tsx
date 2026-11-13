"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Code2, Sparkles, Layers, ShieldCheck } from "lucide-react";

export function TrustIndicators() {
  const pillars = [
    {
      num: "01",
      title: "Engineered For Impact",
      desc: "We don't assemble bloated templates. We write clean, typed TypeScript and modern Next.js systems engineered for sub-second performance and real business conversions.",
    },
    {
      num: "02",
      title: "Radically Transparent",
      desc: "Fixed, honest pricing from ₹299 for student resumes to ₹1,500+ for production business applications. Zero hidden retainer fees, zero surprises.",
    },
    {
      num: "03",
      title: "Direct Engineering Access",
      desc: "Work directly with lead builders, not non-technical project managers. From initial discovery to deployment on Vercel and Supabase.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 border-y border-white/[0.08] bg-[#0E0F12] relative z-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Editorial Statement & Philosophy */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-[#315BFF] uppercase tracking-widest">
              <span>{"// STUDIO PHILOSOPHY"}</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.12]">
              GOOD IDEAS DESERVE{" "}
              <span className="font-serif italic font-normal text-white/90">GREAT</span>{" "}
              EXECUTION.
            </h2>

            <p className="text-base sm:text-lg text-[#A2A6B2] leading-relaxed">
              At Vision Verse24, we believe great software is an art of thoughtful subtraction: clean code,
              instinctive interfaces, and uncompromising reliability. Whether you are a student launching
              your first engineering portfolio, a business needing a high-converting storefront, or a team
              building an AI application — we treat your vision with the craftsmanship it deserves.
            </p>

            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#315BFF] hover:text-white transition-colors group"
              >
                <span>Read our full story & manifesto</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>

          {/* Right Column: Editorial Pillars */}
          <div className="lg:col-span-6 space-y-6">
            {pillars.map((pillar, idx) => (
              <motion.div
                key={pillar.num}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-6 rounded-xl bg-[#15171C] border border-white/[0.08] hover:border-white/20 transition-all duration-200"
              >
                <div className="flex items-start gap-4">
                  <span className="font-mono text-sm font-bold text-[#315BFF] pt-0.5">
                    {pillar.num}
                  </span>
                  <div className="space-y-1.5">
                    <h3 className="text-base font-bold text-white">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#777982] leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
