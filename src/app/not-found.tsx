import React from "react";
import Link from "next/link";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { ArrowLeft, Home, Sparkles } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] pt-32 pb-20 flex items-center justify-center container mx-auto px-4 text-center">
      <div className="max-w-xl mx-auto space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-mono">
          <span>ERROR 404 • PAGE NOT FOUND</span>
        </div>

        <h1 className="text-6xl sm:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
          404
        </h1>

        <h2 className="text-2xl sm:text-3xl font-bold text-white">
          This Coordinate Does Not Exist in Vision Verse
        </h2>

        <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
          The page or case study you are looking for may have been moved, renamed, or is currently being compiled by our developers.
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold text-white bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-500 hover:to-pink-500 shadow-glow-sm transition-all"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold text-slate-300 bg-[#111633] hover:bg-[#18204A] border border-purple-500/30 transition-colors"
          >
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>Explore Projects</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
