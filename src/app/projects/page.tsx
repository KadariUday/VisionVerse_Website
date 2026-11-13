import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ProjectsGrid } from "@/components/projects/ProjectsGrid";
import { FinalCta } from "@/components/home/FinalCta";
import {
  ExternalLink,
  Crown,
  ArrowUpRight,
  FolderGit2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Selected Work & Projects | VISION VERSE24 — IDEAS. CODE. IMPACT.",
  description:
    "Explore 16 production-grade web applications, e-commerce storefronts, and AI tools built by Vision Verse24 with live demos and GitHub repositories.",
};

export default function ProjectsPage() {
  return (
    <div className="pt-28 pb-20 space-y-24 bg-[#0C0D0E]">
      {/* Header */}
      <section className="relative overflow-hidden text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 pt-12">
        <div className="inline-flex items-center gap-2 font-mono text-xs text-[#F59E0B] uppercase tracking-widest">
          <FolderGit2 className="w-3.5 h-3.5" />
          <span>{"// PORTFOLIO DIRECTORY"}</span>
        </div>

        <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.06]">
          SELECTED WORK.{" "}
          <span className="font-serif italic font-normal text-white/90">REAL</span> EXECUTION.
        </h1>

        <p className="text-base sm:text-xl text-[#A2A6B2] max-w-2xl mx-auto leading-relaxed font-normal">
          We pride ourselves on transparent engineering. Every project featured here is a verified
          codebase developed by our team, with live production URLs and GitHub repositories.
        </p>
      </section>

      {/* Featured Flagship Banner: SR Jewellery Collections */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto rounded-3xl bg-[#14080B] border border-[#F59E0B]/30 p-6 sm:p-10 shadow-studio">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#F59E0B]">
                <Crown className="w-3.5 h-3.5 fill-[#F59E0B]" />
                <span>FEATURED CLIENT STOREFRONT</span>
              </div>

              <h2 className="font-heading text-2xl sm:text-4xl font-bold text-white">
                SR Jewellery Collections
              </h2>

              <p className="text-xs sm:text-sm text-[#C8C2BC] leading-relaxed">
                A luxury jewellery e-commerce platform featuring dynamic collections, real-time product search,
                persistent cart & wishlist, instant zero-fee UPI QR verification, and a comprehensive
                store management admin dashboard.
              </p>

              <div className="flex flex-wrap gap-2 pt-1 font-mono text-[11px] text-[#F59E0B]">
                {["Next.js 14", "React 18", "Supabase", "PostgreSQL", "Recharts", "Vercel"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 rounded-md bg-black/60 border border-[#F59E0B]/30"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>

              <div className="pt-3 flex flex-wrap items-center gap-3">
                <a
                  href="https://sr-jewellery-collections.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-black bg-[#F59E0B] hover:bg-[#D97706] transition-all duration-200 shadow-sm"
                >
                  <span>Visit Live Store</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <Link
                  href="/projects/sr-jewellery-collections"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-white/5 hover:bg-white/10 border border-white/15 transition-colors"
                >
                  <span>Read Full Case Study</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 relative w-full aspect-[16/11] rounded-2xl overflow-hidden border border-[#F59E0B]/30 bg-black">
              <Image
                src="/projects/srj-laptop-preview.png"
                alt="SR Jewellery Platform Preview"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main 16-Project Directory Grid with Filters */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ProjectsGrid showFilters={true} />
      </section>

      {/* Final CTA */}
      <FinalCta />
    </div>
  );
}
