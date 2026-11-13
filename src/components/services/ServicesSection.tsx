"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { servicesData } from "@/config/services";
import {
  FileText,
  Layout,
  GraduationCap,
  Lightbulb,
  Briefcase,
  ArrowUpRight,
  Check,
  Sparkles,
  Clock,
  Shield,
  Layers,
  HelpCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";

export function ServicesSection() {
  const resumeSrv = servicesData.find((s) => s.key === "Resume Build") || servicesData[0];
  const portfolioSrv = servicesData.find((s) => s.key === "Portfolio Website") || servicesData[1];
  const collegeSrv = servicesData.find((s) => s.key === "College Project") || servicesData[2];
  const trainingSrv = servicesData.find((s) => s.key === "Training & Learn") || servicesData[3];
  const businessSrv = servicesData.find((s) => s.key === "Business Website") || servicesData[4];

  return (
    <section id="services" className="py-24 lg:py-32 relative overflow-hidden bg-[#101114]">
      {/* Studio Grid Overlay */}
      <div className="absolute inset-0 bg-studio-grid pointer-events-none opacity-40" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#315BFF] uppercase tracking-widest">
            <span>{"// SERVICES & DELIVERABLES"}</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.08]">
            DISCIPLINED CRAFT.{" "}
            <span className="font-serif italic font-normal text-white/90">TRANSPARENT</span> RATES.
          </h2>

          <p className="text-base sm:text-lg text-[#A2A6B2] leading-relaxed max-w-2xl font-normal">
            Whether launching your personal engineering portfolio, submitting a college capstone,
            or establishing a high-converting digital storefront for your business — we deliver production
            grade code without the inflated agency markup.
          </p>
        </div>

        {/* Editorial Asymmetric Services Composition */}
        <div className="space-y-6">
          {/* Row 1: Split Duo — Resume Build (Compact) + Portfolio Website (Hero Card) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* 1. Resume Build — ₹299 (5 cols) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="lg:col-span-5 rounded-2xl bg-[#15171C] border border-white/[0.08] p-6 sm:p-8 flex flex-col justify-between hover:border-white/20 transition-all duration-300"
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-lg bg-[#1B1E26] border border-white/10 flex items-center justify-center text-[#315BFF]">
                    <FileText className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-xs text-[#A2A6B2] uppercase tracking-wider bg-white/[0.04] px-3 py-1 rounded-full border border-white/5">
                    24–48h Delivery
                  </span>
                </div>

                <div>
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-white">
                    {resumeSrv.title}
                  </h3>
                  <p className="text-xs text-[#777982] mt-1 font-mono uppercase tracking-wider">
                    {resumeSrv.tagline}
                  </p>
                </div>

                <div className="pt-2 pb-1">
                  <div className="flex items-baseline gap-2">
                    <span className="font-heading text-3xl sm:text-4xl font-black text-white">
                      {resumeSrv.priceFormatted}
                    </span>
                    <span className="text-xs text-[#777982] font-mono">one-time</span>
                  </div>
                  <p className="text-xs text-[#A2A6B2] mt-1">{resumeSrv.priceNote}</p>
                </div>

                <p className="text-xs sm:text-sm text-[#A2A6B2] leading-relaxed">
                  {resumeSrv.description}
                </p>

                <div className="space-y-2 pt-2 border-t border-white/[0.06]">
                  <div className="font-mono text-[11px] text-[#777982] uppercase tracking-wider">
                    Deliverables:
                  </div>
                  <ul className="space-y-1.5 text-xs text-[#D3D5DC]">
                    {resumeSrv.features.slice(0, 4).map((f) => (
                      <li key={f} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#315BFF] shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 mt-4 border-t border-white/[0.08]">
                <Link
                  href={`/contact?service=${encodeURIComponent(resumeSrv.key)}`}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-semibold uppercase tracking-wider text-white bg-[#1B1E26] hover:bg-[#315BFF] border border-white/10 hover:border-[#315BFF] transition-all duration-200 group"
                >
                  <span>Enquire for {resumeSrv.key}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </motion.div>

            {/* 2. Portfolio Website — ₹499 (Featured 7 cols) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="lg:col-span-7 rounded-2xl bg-gradient-to-br from-[#181B24] via-[#15171C] to-[#12141A] border border-[#315BFF]/30 p-6 sm:p-8 flex flex-col justify-between shadow-studio hover:border-[#315BFF]/60 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#315BFF]/[0.08] rounded-full blur-3xl pointer-events-none" />

              <div className="space-y-5 relative z-10">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-lg bg-[#315BFF]/20 border border-[#315BFF]/40 flex items-center justify-center text-[#315BFF]">
                    <Layout className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-white bg-[#315BFF] px-3.5 py-1 rounded-full shadow-subtle flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3" />
                    <span>Most Popular</span>
                  </span>
                </div>

                <div>
                  <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white">
                    {portfolioSrv.title}
                  </h3>
                  <p className="text-xs text-[#315BFF] mt-1 font-mono uppercase tracking-wider">
                    {portfolioSrv.tagline}
                  </p>
                </div>

                <div className="pt-2 pb-1">
                  <div className="flex items-baseline gap-2">
                    <span className="font-heading text-4xl sm:text-5xl font-black text-white">
                      {portfolioSrv.priceFormatted}
                    </span>
                    <span className="text-xs text-[#777982] font-mono">one-time • free hosting</span>
                  </div>
                  <p className="text-xs text-[#A2A6B2] mt-1">{portfolioSrv.priceNote}</p>
                </div>

                <p className="text-xs sm:text-sm text-[#A2A6B2] leading-relaxed">
                  {portfolioSrv.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 border-t border-white/[0.08]">
                  {portfolioSrv.features.map((f) => (
                    <div key={f} className="flex items-center gap-2 text-xs text-[#D3D5DC]">
                      <Check className="w-3.5 h-3.5 text-[#315BFF] shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-white/[0.08] relative z-10">
                <Link
                  href={`/contact?service=${encodeURIComponent(portfolioSrv.key)}`}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl text-xs font-semibold uppercase tracking-wider text-white bg-[#315BFF] hover:bg-[#2546CC] transition-colors shadow-subtle group"
                >
                  <span>Enquire for {portfolioSrv.key}</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Row 2: Split Duo — College Projects (₹699) + Training & Mentorship (₹999) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            {/* 3. College Projects — ₹699 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="rounded-2xl bg-[#15171C] border border-white/[0.08] p-6 sm:p-8 flex flex-col justify-between hover:border-white/20 transition-all duration-300"
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-lg bg-[#1B1E26] border border-white/10 flex items-center justify-center text-emerald-400">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-xs text-emerald-400 bg-emerald-400/10 px-3 py-1 rounded-full border border-emerald-400/20">
                    Viva Ready Package
                  </span>
                </div>

                <div>
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-white">
                    {collegeSrv.title}
                  </h3>
                  <p className="text-xs text-[#777982] mt-1 font-mono uppercase tracking-wider">
                    {collegeSrv.tagline}
                  </p>
                </div>

                <div className="pt-2 pb-1">
                  <div className="flex items-baseline gap-2">
                    <span className="font-heading text-3xl sm:text-4xl font-black text-white">
                      {collegeSrv.priceFormatted}
                    </span>
                    <span className="text-xs text-[#777982] font-mono">full package</span>
                  </div>
                  <p className="text-xs text-[#A2A6B2] mt-1">{collegeSrv.priceNote}</p>
                </div>

                <p className="text-xs sm:text-sm text-[#A2A6B2] leading-relaxed">
                  {collegeSrv.description}
                </p>

                <div className="space-y-1.5 pt-2 border-t border-white/[0.06]">
                  <div className="font-mono text-[11px] text-[#777982] uppercase tracking-wider">
                    Package Highlights:
                  </div>
                  <ul className="space-y-1.5 text-xs text-[#D3D5DC]">
                    {collegeSrv.features.slice(0, 5).map((f) => (
                      <li key={f} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 mt-4 border-t border-white/[0.08]">
                <Link
                  href={`/contact?service=${encodeURIComponent(collegeSrv.key)}`}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-semibold uppercase tracking-wider text-white bg-[#1B1E26] hover:bg-emerald-600 border border-white/10 hover:border-emerald-500 transition-all duration-200 group"
                >
                  <span>Enquire for {collegeSrv.key}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </motion.div>

            {/* 4. Training & Learn — ₹999 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="rounded-2xl bg-[#15171C] border border-white/[0.08] p-6 sm:p-8 flex flex-col justify-between hover:border-white/20 transition-all duration-300"
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-lg bg-[#1B1E26] border border-white/10 flex items-center justify-center text-[#753BDB]">
                    <Lightbulb className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-xs text-[#753BDB] bg-[#753BDB]/10 px-3 py-1 rounded-full border border-[#753BDB]/20">
                    Hands-On Mentorship
                  </span>
                </div>

                <div>
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-white">
                    {trainingSrv.title}
                  </h3>
                  <p className="text-xs text-[#777982] mt-1 font-mono uppercase tracking-wider">
                    {trainingSrv.tagline}
                  </p>
                </div>

                <div className="pt-2 pb-1">
                  <div className="flex items-baseline gap-2">
                    <span className="font-heading text-3xl sm:text-4xl font-black text-white">
                      {trainingSrv.priceFormatted}
                    </span>
                    <span className="text-xs text-[#777982] font-mono">practical project track</span>
                  </div>
                  <p className="text-xs text-[#A2A6B2] mt-1">{trainingSrv.priceNote}</p>
                </div>

                <p className="text-xs sm:text-sm text-[#A2A6B2] leading-relaxed">
                  {trainingSrv.description}
                </p>

                <div className="space-y-1.5 pt-2 border-t border-white/[0.06]">
                  <div className="font-mono text-[11px] text-[#777982] uppercase tracking-wider">
                    What You Master:
                  </div>
                  <ul className="space-y-1.5 text-xs text-[#D3D5DC]">
                    {trainingSrv.features.slice(0, 5).map((f) => (
                      <li key={f} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#753BDB] shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 mt-4 border-t border-white/[0.08]">
                <Link
                  href={`/contact?service=${encodeURIComponent(trainingSrv.key)}`}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-semibold uppercase tracking-wider text-white bg-[#1B1E26] hover:bg-[#753BDB] border border-white/10 hover:border-[#753BDB] transition-all duration-200 group"
                >
                  <span>Enquire for {trainingSrv.key}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Row 3: Full-Width Studio Grade Banner Card — Business Websites & Applications (₹1,500 – ₹5,000) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.25 }}
            className="rounded-2xl bg-[#15171C] border border-white/[0.12] p-6 sm:p-10 shadow-studio hover:border-white/25 transition-all duration-300"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 font-mono text-xs text-[#FF5D65] uppercase tracking-widest">
                  <Briefcase className="w-3.5 h-3.5" />
                  <span>PRODUCTION BUSINESS SYSTEMS</span>
                </div>

                <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                  {businessSrv.title}
                </h3>

                <p className="text-xs text-[#777982] font-mono uppercase tracking-wider">
                  {businessSrv.tagline}
                </p>

                <p className="text-xs sm:text-sm text-[#A2A6B2] leading-relaxed max-w-xl">
                  {businessSrv.description} Custom-built digital storefronts, lead capture funnels,
                  direct 0% fee UPI payment verification, and dedicated administrator backoffices.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                  {businessSrv.features.slice(0, 6).map((f) => (
                    <div key={f} className="flex items-center gap-2 text-xs text-[#D3D5DC]">
                      <Check className="w-3.5 h-3.5 text-[#FF5D65] shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-xl bg-[#1B1E26] border border-white/[0.08] space-y-6">
                <div>
                  <div className="font-mono text-xs text-[#777982] uppercase">Investment Scope:</div>
                  <div className="font-heading text-3xl sm:text-4xl font-black text-white mt-1">
                    {businessSrv.priceFormatted}
                  </div>
                  <p className="text-xs text-[#A2A6B2] mt-1">{businessSrv.priceNote}</p>
                </div>

                <div className="text-xs text-[#777982] leading-relaxed">
                  Tailored according to page count, database requirements, and inventory complexity.
                  Includes production Vercel deployment, custom domain wiring, and SSL.
                </div>

                <Link
                  href={`/contact?service=${encodeURIComponent(businessSrv.key)}`}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl text-xs font-semibold uppercase tracking-wider text-white bg-[#315BFF] hover:bg-[#2546CC] transition-colors group"
                >
                  <span>Enquire for {businessSrv.key}</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
