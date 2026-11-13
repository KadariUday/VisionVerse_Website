"use client";

import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { ArrowRight, MessageSquareCode, Sparkles, Rocket } from "lucide-react";

export function FinalCta() {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-[#080B1C] to-[#050713]">
      {/* Background glow orbs */}
      <div className="glow-orb-blue top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 opacity-30" />
      <div className="glow-orb-purple top-1/2 right-1/4 -translate-y-1/2 opacity-30" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-r from-[#111633] via-[#18204A] to-[#111633] border border-purple-500/40 p-8 sm:p-14 text-center space-y-6 shadow-glow-md backdrop-blur-xl relative overflow-hidden">
          {/* Subtle decorative glow */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-pink-500/20 rounded-full blur-3xl pointer-events-none" />

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-purple-400/30 text-xs font-semibold text-purple-300">
            <Rocket className="w-3.5 h-3.5 text-pink-400" />
            <span>LET'S TURN YOUR IDEA INTO REALITY</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight uppercase">
            HAVE AN IDEA?{" "}
            <span className="text-gradient-brand">WE CAN BUILD IT!</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Tell us what you want to create. From personal portfolio sites to custom e-commerce and full-stack web platforms, let's turn your idea into reality today.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-base font-bold text-white bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-500 hover:to-pink-500 shadow-glow-md hover:shadow-glow-pink transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-5 h-5" />
            </Link>

            <a
              href={`https://wa.me/${siteConfig.owner.whatsapp}?text=${encodeURIComponent("Hello Vision Verse24! I have a project idea and would like to discuss it.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-base font-semibold text-emerald-400 bg-emerald-950/40 hover:bg-emerald-900/60 border border-emerald-500/40 hover:border-emerald-400 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <MessageSquareCode className="w-5 h-5" />
              <span>Contact on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
