import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ProjectsGrid } from "@/components/projects/ProjectsGrid";
import { FinalCta } from "@/components/home/FinalCta";
import {
  Sparkles,
  ExternalLink,
  Crown,
  ArrowRight,
  ShieldCheck,
  FolderGit2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Our Projects & Work | VISION VERSE24",
  description:
    "Explore projects built by Vision Verse24, including the live SR Jewellery Collections e-commerce platform, developer portfolios, and AI academic systems.",
};

export default function ProjectsPage() {
  return (
    <div className="pt-28 pb-20 space-y-24">
      {/* Header */}
      <section className="relative overflow-hidden text-center max-w-4xl mx-auto px-4 md:px-6 space-y-6">
        <div className="glow-orb-purple -top-20 left-1/2 -translate-x-1/2 opacity-30" />
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#111633] border border-purple-500/30 text-xs font-semibold text-purple-300">
          <FolderGit2 className="w-3.5 h-3.5 text-cyan-400" />
          <span>PRODUCTION PORTFOLIO</span>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight">
          Real Projects. Verified Results.{" "}
          <span className="text-gradient-brand">Real Code.</span>
        </h1>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          We pride ourselves on transparency. Every project shown here is a verified codebase engineered by our team, with live production URLs and GitHub repositories.
        </p>
      </section>

      {/* Featured Banner: SR Jewellery Collections */}
      <section className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto rounded-3xl bg-gradient-to-r from-[#181308] via-[#0D0B05] to-[#181308] border border-amber-500/40 p-6 md:p-10 shadow-glow-gold backdrop-blur-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider border border-amber-400/30">
                <Crown className="w-3.5 h-3.5 fill-amber-300" />
                <span>FEATURED CLIENT STOREFRONT</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-black text-white">
                SR Jewellery Collections
              </h2>

              <p className="text-sm text-slate-300 leading-relaxed">
                A luxury jewellery e-commerce platform featuring dynamic collections, real-time product search, persistent cart & wishlist, instant UPI QR verification, and a comprehensive store management admin dashboard.
              </p>

              <div className="flex flex-wrap gap-2 pt-1">
                {["Next.js 14", "React 18", "Supabase", "PostgreSQL", "Recharts", "Vercel"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 rounded text-xs font-mono bg-amber-500/10 text-amber-300 border border-amber-500/30"
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
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold text-black bg-gradient-to-r from-yellow-300 to-amber-400 hover:from-yellow-200 hover:to-amber-300 shadow-glow-gold transition-transform hover:scale-105"
                >
                  <span>Visit Live Website</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <Link
                  href="/projects/sr-jewellery-collections"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold text-white bg-white/10 hover:bg-white/15 border border-amber-400/30 transition-colors"
                >
                  <span>Read Full Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-amber-500/40 bg-black">
              <Image
                src="/projects/srj-laptop-preview.png"
                alt="SR Jewellery Preview"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Full Projects Grid */}
      <section className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              All Completed Works & Case Studies
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Filter by category or click on any project to inspect implementation details
            </p>
          </div>

          <ProjectsGrid initialLimit={10} showFilters={true} />
        </div>
      </section>

      {/* CTA */}
      <FinalCta />
    </div>
  );
}
