import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { AboutTeamSection } from "@/components/home/AboutTeamSection";
import { FinalCta } from "@/components/home/FinalCta";
import {
  Sparkles,
  Rocket,
  Code2,
  HeartHandshake,
  GraduationCap,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | VISION VERSE24 — IDEAS. CODE. IMPACT.",
  description:
    "Meet the passionate engineering team behind Vision Verse24. We are student developers and full-stack creators from IARE Hyderabad building modern digital solutions for students and businesses.",
};

export default function AboutPage() {
  return (
    <div className="pt-28 pb-20 space-y-20">
      {/* Hero Header */}
      <section className="relative overflow-hidden">
        <div className="glow-orb-purple -top-20 left-1/2 -translate-x-1/2 opacity-30" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#111633] border border-purple-500/30 text-xs font-semibold text-purple-300">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>WHO WE ARE</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight">
            We Are <span className="text-gradient-brand">VISION VERSE24</span>.
            <br />Ideas. Code. Impact.
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Born out of a genuine passion for modern web technologies and software engineering, Vision Verse24 is a digital development agency founded by student engineers at Institute of Aeronautical Engineering (IARE), Hyderabad.
          </p>
        </div>
      </section>

      {/* Story & Philosophy */}
      <section className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-5">
            <div className="text-xs uppercase font-bold tracking-widest text-pink-400">
              Our Vision & Mission
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-white">
              Democratizing High-End Web Development
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              We observed that traditional web agencies charge exorbitant fees that young startups, local businesses, and college students simply cannot afford. Meanwhile, generic automated website builders produce bloated, cookie-cutter templates that lack soul and speed.
            </p>
            <p className="text-sm text-slate-300 leading-relaxed">
              Vision Verse24 changes that equation. We combine handcrafted design systems with high-speed Next.js and Supabase infrastructure, offering students professional resume/portfolio sites from ₹299, and businesses high-converting storefronts from ₹1,500.
            </p>

            <div className="pt-2 space-y-2">
              {[
                "Zero bloated drag-and-drop templates; 100% clean code.",
                "Direct developer-to-client communication with zero agency middleman overhead.",
                "Complete project documentation and viva defense guidance for students.",
                "Reliable Vercel Edge hosting and scalable database architecture.",
              ].map((point, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden border border-purple-500/30 bg-[#0D1127] p-6 shadow-2xl space-y-4">
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-slate-900">
              <Image
                src="/team/team-poster-3.png"
                alt="Vision Verse24 Co-Founders Team"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-2 text-center">
              <div className="text-sm font-bold text-white">
                Kadari Uday • Rajoju Sreeja • Rapalli Venkat Dathadri
              </div>
              <div className="text-xs text-cyan-400 mt-0.5 font-medium">
                B.Tech CSE (AI & ML), 2027 Batch — IARE Hyderabad
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-[#060814] py-20 border-y border-slate-800/80">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              The Principles That Guide Every Commit
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              We uphold integrity and craftsmanship in every website we ship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="p-6 rounded-3xl bg-[#0D1127] border border-blue-500/20 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
                <Code2 className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-white">Clean Engineering</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Code that is easy to read, easy to extend, typed with strict TypeScript, and free of unnecessary dependencies.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-[#0D1127] border border-purple-500/20 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-white">Unconditional Transparency</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                No hidden costs, no hostage domains, and no surprise bills. Everything from source code to deployment accounts belongs to you.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-[#0D1127] border border-pink-500/20 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-pink-500/10 border border-pink-500/30 flex items-center justify-center text-pink-400">
                <Rocket className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-white">Real Impact</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                We measure success by interviews booked, products sold, and college viva scores achieved, not just pretty pixels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Details Component */}
      <AboutTeamSection />

      {/* Final CTA */}
      <FinalCta />
    </div>
  );
}
