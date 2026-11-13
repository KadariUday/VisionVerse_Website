"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ArrowRight,
  ExternalLink,
  Sparkles,
  Layers,
  Terminal,
  Shield,
  Activity,
} from "lucide-react";
import { siteConfig } from "@/config/site";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] pt-32 pb-20 lg:pt-40 lg:pb-28 flex items-center overflow-hidden bg-[#0C0D0E]">
      {/* Subtle Studio Grid Overlay */}
      <div className="absolute inset-0 bg-studio-grid pointer-events-none opacity-50" />

      {/* Atmospheric Soft Lighting (Solar Amber & Mint Warmth) */}
      <div className="absolute top-10 right-10 w-[600px] h-[500px] bg-[#F59E0B]/[0.05] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[400px] bg-[#10B981]/[0.03] rounded-full blur-[130px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Expressive Editorial Typography & Statements */}
          <div className="lg:col-span-7 space-y-8">
            {/* Small Introductory Studio Label */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-[#131517] border border-white/[0.08]"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]" />
              <span className="font-mono text-[11px] sm:text-xs font-semibold tracking-[0.18em] uppercase text-[#A1A1AA]">
                INDEPENDENT DIGITAL DEVELOPMENT STUDIO
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-heading text-4xl sm:text-6xl lg:text-[4.25rem] font-bold tracking-tight text-white leading-[1.06]"
            >
              WE TURN IDEAS INTO{" "}
              <span className="font-serif italic font-normal text-white/90 underline decoration-[#F59E0B] decoration-2 underline-offset-8">
                DIGITAL
              </span>{" "}
              EXPERIENCES.
            </motion.h1>

            {/* Supporting Statement */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg lg:text-xl text-[#A1A1AA] max-w-xl leading-relaxed font-normal"
            >
              From ambitious concepts to powerful digital products, we design and develop
              websites, applications and technology that move ideas forward.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-sm font-semibold uppercase tracking-wider text-black bg-[#F59E0B] hover:bg-[#D97706] transition-all duration-200 shadow-[0_0_25px_rgba(245,158,11,0.25)]"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-black" />
              </Link>

              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-semibold uppercase tracking-wider text-[#F4F4F5] bg-[#131517] hover:bg-[#181A1F] border border-white/[0.12] transition-colors"
              >
                <span>Explore Our Work</span>
                <ArrowRight className="w-4 h-4 text-[#71717A]" />
              </Link>
            </motion.div>

            {/* Micro Studio Telemetry */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="pt-6 border-t border-white/[0.08] flex flex-wrap items-center gap-y-3 gap-x-8 text-xs font-mono text-[#71717A]"
            >
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="text-[#A1A1AA]">Hyderabad, India</span>
              </div>
              <div>
                <span className="text-white font-semibold">16+</span> Verified Projects
              </div>
              <div>
                <span className="text-white font-semibold">100%</span> Custom Code
              </div>
            </motion.div>
          </div>

          {/* Right Column: Studio Focal Point with Real Project Compositions */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="relative rounded-2xl bg-[#131517] border border-white/[0.12] p-5 sm:p-6 shadow-studio-elevated overflow-hidden"
            >
              {/* Header Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#F97316]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  <span className="ml-2 font-mono text-[11px] text-[#71717A]">visionverse.studio/work</span>
                </div>
                <span className="font-mono text-[10px] text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded border border-emerald-400/20">
                  LIVE DEPLOYMENTS
                </span>
              </div>

              {/* Main Visual Focal Point: SR Jewellery High-End Preview */}
              <div className="mt-4 relative rounded-xl overflow-hidden border border-white/10 bg-[#090A0B] group">
                <div className="relative aspect-[16/10] w-full">
                  <Image
                    src="/projects/srj-laptop-preview.png"
                    alt="SR Jewellery Collections Case Study"
                    fill
                    priority
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090A0B] via-transparent to-transparent opacity-80" />
                </div>

                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between p-3 rounded-lg bg-[#131517]/90 backdrop-blur-md border border-white/10">
                  <div>
                    <div className="text-xs font-bold text-white">SR Jewellery Collections</div>
                    <div className="text-[11px] text-[#F59E0B]">Luxury E-Commerce & UPI Architecture</div>
                  </div>
                  <a
                    href="https://sr-jewellery-collections.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-md bg-white/10 hover:bg-white/20 text-white transition-colors"
                    title="Visit Live Store"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Complementary Dual Project Cards */}
              <div className="mt-4 grid grid-cols-2 gap-3 font-mono text-xs">
                {/* Card 1: AI App */}
                <div className="p-3 rounded-xl bg-[#181A1F] border border-white/[0.08] space-y-1.5">
                  <div className="flex items-center justify-between text-[10px] text-[#A1A1AA]">
                    <span className="text-[#F59E0B]">CAREERFORGE AI</span>
                    <span>99.2% ATS</span>
                  </div>
                  <p className="text-[11px] font-sans text-slate-300 font-medium line-clamp-1">
                    Resume Intelligence & Career Predictor
                  </p>
                  <div className="text-[10px] text-[#71717A]">FastAPI • React • LLM</div>
                </div>

                {/* Card 2: Campus Suite */}
                <div className="p-3 rounded-xl bg-[#181A1F] border border-white/[0.08] space-y-1.5">
                  <div className="flex items-center justify-between text-[10px] text-[#A1A1AA]">
                    <span className="text-emerald-400">SAMVIDHA SUITE</span>
                    <span>STUDENT ERP</span>
                  </div>
                  <p className="text-[11px] font-sans text-slate-300 font-medium line-clamp-1">
                    Attendance Biometrics & Simulator
                  </p>
                  <div className="text-[10px] text-[#71717A]">Node.js • React • MongoDB</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
