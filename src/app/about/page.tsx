import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { AboutTeamSection } from "@/components/home/AboutTeamSection";
import { FinalCta } from "@/components/home/FinalCta";
import {
  Code2,
  HeartHandshake,
  GraduationCap,
  ShieldCheck,
  Check,
  ArrowUpRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | VISION VERSE24 — IDEAS. CODE. IMPACT.",
  description:
    "Meet the passionate engineering team behind Vision Verse24. We are student developers and full-stack creators from IARE Hyderabad building modern digital solutions for students and businesses.",
};

export function generateViewport() {
  return {
    themeColor: "#101114",
  };
}

export default function AboutPage() {
  return (
    <div className="pt-28 pb-20 space-y-24 bg-[#101114]">
      {/* Hero Header */}
      <section className="relative overflow-hidden pt-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#315BFF] uppercase tracking-widest">
            <span>{"// ABOUT VISION VERSE24"}</span>
          </div>

          <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.06]">
            WE ARE{" "}
            <span className="font-serif italic font-normal text-white/90">BUILDERS</span>{" "}
            TURNING IDEAS INTO IMPACT.
          </h1>

          <p className="text-base sm:text-xl text-[#A2A6B2] leading-relaxed font-normal">
            Born out of a genuine passion for modern web technologies and software engineering,
            Vision Verse24 is an independent digital studio founded by student engineers at Institute of
            Aeronautical Engineering (IARE), Hyderabad.
          </p>
        </div>
      </section>

      {/* Story & Philosophy: Split Layout */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-6 space-y-6">
            <div className="font-mono text-xs uppercase tracking-widest text-[#FF5D65]">
              {"// PURPOSE & MOTIVATION"}
            </div>
            <h2 className="font-heading text-2xl sm:text-4xl font-bold text-white tracking-tight leading-snug">
              Democratizing High-End Digital Production
            </h2>
            <p className="text-sm sm:text-base text-[#A2A6B2] leading-relaxed">
              We observed that traditional web agencies charge exorbitant fees that young startups, local businesses,
              and college students simply cannot afford. Meanwhile, generic automated website builders produce bloated,
              cookie-cutter templates that lack soul, speed, and real architectural ownership.
            </p>
            <p className="text-sm sm:text-base text-[#A2A6B2] leading-relaxed">
              Vision Verse24 changes that equation. We combine handcrafted design systems with high-speed Next.js
              and Supabase infrastructure, offering students professional resume/portfolio sites from ₹299,
              and businesses high-converting storefronts from ₹1,500.
            </p>

            <div className="pt-2 space-y-2.5">
              {[
                "Zero bloated drag-and-drop builders; 100% clean, typed code.",
                "Direct developer-to-client communication with zero agency middleman overhead.",
                "Complete project documentation and viva defense guidance for students.",
                "Reliable Vercel Edge hosting and scalable database architecture.",
              ].map((point, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#D3D5DC]">
                  <Check className="w-4 h-4 text-[#315BFF] shrink-0 mt-0.5" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Engineering & Team Lead Card */}
          <div className="lg:col-span-6 rounded-2xl border border-white/[0.08] bg-[#15171C] p-6 sm:p-8 shadow-studio space-y-6">
            {/* Top Terminal Bar */}
            <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF5D65]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#D9A441]" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                <span className="ml-2 font-mono text-xs text-[#777982]">manifesto.ts</span>
              </div>
              <span className="font-mono text-[10px] text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded border border-emerald-400/20">
                ACTIVE LAB
              </span>
            </div>

            {/* Team Leads Quick Grid */}
            <div className="space-y-3">
              <div className="text-xs font-mono text-[#777982] uppercase tracking-wider">
                Founding Leads:
              </div>
              <div className="grid grid-cols-1 gap-2.5">
                {siteConfig.coFounders.map((member) => (
                  <div
                    key={member.name}
                    className="p-3 rounded-xl bg-[#1B1E26] border border-white/[0.06] flex items-center justify-between gap-3 hover:border-white/20 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="relative w-10 h-10 rounded-lg overflow-hidden border border-white/10 shrink-0 bg-slate-800">
                        <Image
                          src={member.avatar}
                          alt={member.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white">{member.name}</div>
                        <div className="text-[11px] text-[#315BFF]">{member.role}</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-[#777982] hidden sm:inline">
                      2027 Batch
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Highlights */}
            <div className="p-4 rounded-xl bg-[#1B1E26] border border-white/5 space-y-1.5">
              <div className="text-xs font-bold text-white font-mono">
                Code Ownership Promise:
              </div>
              <p className="text-xs text-[#A2A6B2] leading-relaxed">
                Every project is crafted with semantic HTML, modern Tailwind CSS, and strict TypeScript types.
                You own 100% of the repository on your GitHub account with zero vendor lock-in.
              </p>
            </div>

            <div className="text-center pt-1">
              <span className="text-xs font-mono text-[#777982]">
                Hyderabad, Telangana, India
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-[#0B0C0E] py-20 border-y border-white/[0.08]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14 space-y-3">
            <div className="font-mono text-xs uppercase tracking-widest text-[#315BFF]">
              {"// CORE PRINCIPLES"}
            </div>
            <h3 className="font-heading text-2xl sm:text-4xl font-bold text-white tracking-tight">
              The Principles That Guide Every Commit
            </h3>
            <p className="text-xs sm:text-sm text-[#A2A6B2]">
              We uphold integrity and craftsmanship in every website we ship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="p-6 rounded-2xl bg-[#15171C] border border-white/[0.08] space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#1B1E26] border border-white/10 flex items-center justify-center text-[#315BFF]">
                <Code2 className="w-5 h-5" />
              </div>
              <h4 className="font-heading text-lg font-bold text-white">Clean Engineering</h4>
              <p className="text-xs text-[#A2A6B2] leading-relaxed">
                Code that is easy to read, typed with strict TypeScript, modularized into reusable components,
                and free of unnecessary third-party dependencies.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#15171C] border border-white/[0.08] space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#1B1E26] border border-white/10 flex items-center justify-center text-[#753BDB]">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h4 className="font-heading text-lg font-bold text-white">Unconditional Transparency</h4>
              <p className="text-xs text-[#A2A6B2] leading-relaxed">
                No hidden costs, no hostage domains, and no recurring surprises. Everything from source code
                to deployment keys belongs directly to you.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#15171C] border border-white/[0.08] space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#1B1E26] border border-white/10 flex items-center justify-center text-[#FF5D65]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="font-heading text-lg font-bold text-white">Real Impact</h4>
              <p className="text-xs text-[#A2A6B2] leading-relaxed">
                We measure success by interviews booked, customers converted, and college viva scores achieved,
                not vanity numbers.
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
