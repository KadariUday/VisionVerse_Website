import React from "react";
import Link from "next/link";
import { ArrowLeft, Home, Sparkles } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] pt-32 pb-20 flex items-center justify-center container mx-auto px-4 text-center">
      <div className="max-w-xl mx-auto space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F97316]/10 border border-[#F97316]/30 text-[#F97316] text-xs font-mono">
          <span>ERROR 404 • PAGE NOT FOUND</span>
        </div>

        <h1 className="text-6xl sm:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#F59E0B] via-[#FBBF24] to-[#F97316]">
          404
        </h1>

        <h2 className="text-2xl sm:text-3xl font-bold text-white">
          This Coordinate Does Not Exist in Vision Verse
        </h2>

        <p className="text-sm text-[#A2A6B2] max-w-md mx-auto leading-relaxed">
          The page or case study you are looking for may have been moved, renamed, or is currently being compiled by our developers.
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider text-black bg-[#F59E0B] hover:bg-[#D97706] shadow-sm transition-all"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider text-[#F7F6F2] bg-[#15171C] hover:bg-[#1C1F26] border border-white/10 hover:border-[#F59E0B]/40 transition-colors"
          >
            <Sparkles className="w-4 h-4 text-[#F59E0B]" />
            <span>Explore Projects</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
