"use client";

import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { ArrowUpRight, MessageSquareCode } from "lucide-react";

export function FinalCta() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-[#0C0D0E]">
      {/* Studio Grid Overlay */}
      <div className="absolute inset-0 bg-studio-grid pointer-events-none opacity-40" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto rounded-3xl bg-[#131517] border border-[#F59E0B]/20 p-8 sm:p-14 lg:p-16 text-center space-y-6 shadow-studio-elevated relative overflow-hidden">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#F59E0B] uppercase tracking-widest">
            <span>{"// LET'S COLLABORATE"}</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.08]">
            WHAT ARE YOU THINKING{" "}
            <span className="font-serif italic font-normal text-white/90">OF BUILDING?</span>
          </h2>

          <p className="text-base sm:text-lg text-[#A1A1AA] max-w-xl mx-auto leading-relaxed">
            Tell us your idea. Let&apos;s work together to make it real.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-wider text-black bg-[#F59E0B] hover:bg-[#D97706] transition-all duration-200 shadow-[0_0_25px_rgba(245,158,11,0.25)] group"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-black" />
            </Link>

            <a
              href={`https://wa.me/${siteConfig.owner.whatsapp}?text=${encodeURIComponent(
                "Hello Vision Verse24! I have a project idea and would like to discuss it."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 transition-all duration-200"
            >
              <MessageSquareCode className="w-4 h-4" />
              <span>Talk on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
