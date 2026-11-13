"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Zap,
  Shield,
  Layers,
  Code2,
  Terminal,
  Cpu,
  Laptop,
  Smartphone,
  ExternalLink,
  CheckCircle2,
} from "lucide-react";
import { siteConfig } from "@/config/site";

export function HeroSection() {
  return (
    <section className="relative min-h-[92vh] pt-32 pb-20 flex items-center justify-center overflow-hidden bg-grid-pattern">
      {/* Dynamic Background Glows */}
      <div className="glow-orb-purple -top-24 left-1/2 -translate-x-1/2 opacity-70" />
      <div className="glow-orb-blue top-1/3 -left-32 opacity-50" />
      <div className="glow-orb-pink bottom-10 -right-24 opacity-40" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-6">
          {/* Top Pill / Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#111633]/80 border border-purple-500/30 text-xs md:text-sm font-medium text-purple-300 shadow-glow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="font-semibold text-white tracking-wide">VISION VERSE24</span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-300">IDEAS. CODE. IMPACT.</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.15] text-white"
          >
            We Don't Just Build Websites.{" "}
            <span className="block mt-2 text-gradient-brand">
              We Build Digital Experiences
            </span>{" "}
            That Grow Your Ideas.
          </motion.h1>

          {/* Supporting Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl font-normal leading-relaxed"
          >
            From professional websites and AI-powered applications to college projects and custom
            business solutions, we turn your ideas into powerful digital experiences.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 pt-2 w-full sm:w-auto"
          >
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-base font-bold text-white bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-500 hover:to-pink-500 shadow-glow-md hover:shadow-glow-pink transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-5 h-5" />
            </Link>

            <Link
              href="/projects"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-semibold text-slate-200 bg-[#111633]/80 hover:bg-[#18204A] border border-purple-500/30 hover:border-purple-400 hover:text-white transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <span>Explore Our Work</span>
              <Sparkles className="w-4 h-4 text-cyan-300" />
            </Link>
          </motion.div>
        </div>

        {/* Hero Interactive Illustration Mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-14 max-w-5xl mx-auto relative"
        >
          {/* Outer glow aura behind devices */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/30 to-pink-600/20 rounded-3xl blur-2xl -z-10" />

          {/* Device Showcase Stage */}
          <div className="relative rounded-2xl md:rounded-3xl border border-purple-500/30 bg-[#0B0F2A]/90 p-4 md:p-8 backdrop-blur-xl shadow-2xl shadow-purple-950/40">
            {/* Window Top Bar / Controls */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/90 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/90 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/90 inline-block" />
                <span className="ml-3 text-xs font-mono text-slate-400 hidden sm:inline">
                  https://visionverse24.vercel.app/live-preview
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Live Edge CDN
                </span>
                <span className="text-xs text-slate-400 font-mono hidden md:inline">Next.js 14 • Supabase</span>
              </div>
            </div>

            {/* Main Interactive Screen Showcase: Split Laptop + Mobile */}
            <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              {/* Laptop Main Display Area (8 cols) */}
              <div className="lg:col-span-8 relative rounded-xl overflow-hidden border border-slate-700/60 bg-[#080B1C] shadow-2xl">
                {/* Simulated Agency Header Bar */}
                <div className="bg-[#111633] px-4 py-2 flex items-center justify-between border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-black text-blue-400">&lt;/&gt;</span>
                    <span className="text-xs font-bold text-white tracking-wide">VISION VERSE24</span>
                  </div>
                  <div className="flex items-center gap-4 text-[11px] text-slate-300">
                    <span className="text-cyan-400">Web Development</span>
                    <span>AI Solutions</span>
                    <span>E-Commerce</span>
                  </div>
                </div>

                {/* Simulated Live Agency Content Inside Mockup */}
                <div className="p-5 md:p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-widest text-pink-400 bg-pink-500/10 px-2 py-0.5 rounded-full border border-pink-500/20">
                        Featured Client Release
                      </span>
                      <h3 className="text-lg md:text-xl font-bold text-white mt-1">
                        SR Jewellery Collections
                      </h3>
                      <p className="text-xs text-slate-400">
                        E-Commerce Storefront + Admin Dashboard + Dynamic UPI Payments
                      </p>
                    </div>
                    <a
                      href="https://sr-jewellery-collections.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-amber-500/20 text-amber-300 border border-amber-400/40 hover:bg-amber-500/30 transition-colors"
                    >
                      <span>Visit Live</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>

                  {/* Laptop Banner & Mockup Visual */}
                  <div className="relative rounded-lg overflow-hidden border border-slate-800 bg-[#060814] h-48 md:h-56 flex items-center justify-center group">
                    <Image
                      src="/projects/srj-laptop-preview.png"
                      alt="SR Jewellery Live Platform Mockup"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080B1C] via-transparent to-transparent opacity-75" />
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                      <span className="text-[11px] font-semibold text-white bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10">
                        Timeless Elegance • Crafted for You
                      </span>
                      <span className="text-[11px] font-bold text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/30">
                        Verified Production
                      </span>
                    </div>
                  </div>

                  {/* Bottom Stats Row inside Mockup */}
                  <div className="grid grid-cols-3 gap-2 pt-1 text-center">
                    <div className="bg-[#111633]/60 p-2 rounded-lg border border-purple-500/10">
                      <div className="text-xs md:text-sm font-bold text-white">100%</div>
                      <div className="text-[10px] text-slate-400">Mobile Responsive</div>
                    </div>
                    <div className="bg-[#111633]/60 p-2 rounded-lg border border-purple-500/10">
                      <div className="text-xs md:text-sm font-bold text-cyan-400">&lt; 1s</div>
                      <div className="text-[10px] text-slate-400">Page Load Time</div>
                    </div>
                    <div className="bg-[#111633]/60 p-2 rounded-lg border border-purple-500/10">
                      <div className="text-xs md:text-sm font-bold text-pink-400">₹299+</div>
                      <div className="text-[10px] text-slate-400">Student Friendly</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Smartphone Mockup (4 cols) */}
              <div className="lg:col-span-4 relative flex justify-center">
                <div className="w-60 md:w-64 rounded-[32px] p-3 bg-slate-900 border-4 border-slate-700 shadow-2xl relative">
                  {/* Phone Speaker & Camera Notch */}
                  <div className="w-20 h-4 bg-slate-800 rounded-b-xl mx-auto mb-2 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-slate-900 border border-slate-700" />
                  </div>

                  {/* Screen Content */}
                  <div className="rounded-[22px] bg-[#080B1C] border border-slate-800 p-3 space-y-3 overflow-hidden text-left">
                    <div className="flex items-center justify-between pb-1 border-b border-slate-800">
                      <div className="text-[10px] font-black text-cyan-400 font-mono">&lt;/&gt; VV24</div>
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    </div>

                    <div className="p-2 rounded-lg bg-gradient-to-r from-blue-900/40 to-purple-900/40 border border-purple-500/20">
                      <div className="text-[9px] font-bold text-pink-300">Instant Enquiry</div>
                      <div className="text-[11px] font-extrabold text-white mt-0.5">
                        Submit & Continue to WhatsApp
                      </div>
                    </div>

                    {/* Jewellery preview item */}
                    <div className="flex items-center gap-2 p-1.5 rounded-lg bg-[#111633] border border-slate-800">
                      <div className="w-10 h-10 rounded-md overflow-hidden relative shrink-0">
                        <Image
                          src="/projects/srj-laher-cyan.png"
                          alt="Jewellery item"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="overflow-hidden">
                        <div className="text-[10px] font-bold text-white truncate">
                          Laher Cyan Jhumka
                        </div>
                        <div className="text-[9px] text-amber-400 font-semibold">Fine Jewellery</div>
                      </div>
                    </div>

                    <div className="pt-1">
                      <Link
                        href="/contact"
                        className="w-full py-2 rounded-lg text-[10px] font-bold text-white bg-gradient-to-r from-blue-600 to-pink-600 flex items-center justify-center gap-1 shadow-sm"
                      >
                        <span>DM on WhatsApp</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>

                    {/* Bottom home bar */}
                    <div className="w-16 h-1 bg-slate-700 rounded-full mx-auto mt-2" />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Tech Badges around illustration */}
            <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-3 text-xs text-slate-300">
              <span className="text-slate-500 text-xs font-semibold uppercase tracking-wider">
                Built With Modern Stacks:
              </span>
              {[
                { name: "Next.js 14", icon: Layers, color: "text-white" },
                { name: "React", icon: Code2, color: "text-cyan-400" },
                { name: "TypeScript", icon: Terminal, color: "text-blue-400" },
                { name: "Tailwind CSS", icon: Sparkles, color: "text-teal-400" },
                { name: "Supabase (PostgreSQL)", icon: Shield, color: "text-emerald-400" },
                { name: "Vercel Hosting", icon: Zap, color: "text-indigo-400" },
                { name: "Python / AI", icon: Cpu, color: "text-amber-400" },
              ].map((tech) => {
                const Icon = tech.icon;
                return (
                  <span
                    key={tech.name}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#111633] border border-purple-500/20 text-slate-200 shadow-sm"
                  >
                    <Icon className={`w-3.5 h-3.5 ${tech.color}`} />
                    <span className="font-medium text-[11px]">{tech.name}</span>
                  </span>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
