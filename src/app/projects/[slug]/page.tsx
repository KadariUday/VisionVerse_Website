import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projectsData } from "@/config/projects";
import { FinalCta } from "@/components/home/FinalCta";
import {
  ExternalLink,
  Github,
  ArrowLeft,
  Calendar,
  Layers,
  CheckCircle2,
  AlertCircle,
  Lightbulb,
  ShieldCheck,
  Crown,
  Smartphone,
  BarChart3,
  Star,
} from "lucide-react";

interface Props {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export function generateMetadata({ params }: Props): Metadata {
  const project = projectsData.find((p) => p.slug === params.slug);
  if (!project) {
    return {
      title: "Project Not Found | VISION VERSE24",
    };
  }

  return {
    title: `${project.title} — Case Study | VISION VERSE24`,
    description: project.description,
    openGraph: {
      title: `${project.title} | VISION VERSE24 Case Study`,
      description: project.description,
      images: [{ url: project.thumbnail }],
    },
  };
}

export default function ProjectDetailsPage({ params }: Props) {
  const project = projectsData.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  const isSRJewellery = project.slug === "sr-jewellery-collections";

  return (
    <div className="pt-28 pb-20 space-y-16">
      {/* Top Breadcrumb & Back Link */}
      <div className="container mx-auto px-4 md:px-6">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Projects</span>
        </Link>
      </div>

      {/* Hero Case Study Header */}
      <section className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto space-y-6 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#111633] border border-purple-500/30 text-xs font-semibold text-purple-300">
            {isSRJewellery ? <Crown className="w-3.5 h-3.5 text-amber-400 fill-amber-400" /> : <Layers className="w-3.5 h-3.5 text-cyan-400" />}
            <span>{project.category} CASE STUDY</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight">
            {project.title}
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {project.tagline}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold transition-all duration-300 hover:scale-105 active:scale-95 ${
                  isSRJewellery
                    ? "text-black bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-500 shadow-glow-gold"
                    : "text-white bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 shadow-glow-md"
                }`}
              >
                <span>View Live Project</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-slate-200 bg-[#111633] hover:bg-[#18204A] border border-purple-500/30 hover:text-white transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>View Repository</span>
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Main Banner / Visual Preview */}
      <section className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden border border-purple-500/30 bg-[#0D1127] p-4 md:p-8 shadow-2xl relative">
          <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-slate-900 border border-slate-800">
            <Image
              src={project.bannerImage || project.thumbnail}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Metadata quick stats bar */}
          <div className="mt-6 pt-6 border-t border-slate-800 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-[11px] font-semibold text-slate-400 uppercase">Client / Scope</div>
              <div className="text-sm font-bold text-white mt-0.5">{project.client}</div>
            </div>
            <div>
              <div className="text-[11px] font-semibold text-slate-400 uppercase">Year Delivered</div>
              <div className="text-sm font-bold text-white mt-0.5">{project.completedAt}</div>
            </div>
            <div>
              <div className="text-[11px] font-semibold text-slate-400 uppercase">Category</div>
              <div className="text-sm font-bold text-cyan-400 mt-0.5">{project.category}</div>
            </div>
            <div>
              <div className="text-[11px] font-semibold text-slate-400 uppercase">Deployment</div>
              <div className="text-sm font-bold text-emerald-400 mt-0.5">Vercel Edge Global</div>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Case Study Body */}
      <section className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Project Overview */}
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-black text-white">Project Overview</h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {project.overview}
            </p>
          </div>

          {/* Challenges & Solutions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 rounded-3xl bg-[#0D1127] border border-rose-500/20 space-y-3">
              <div className="flex items-center gap-2 text-rose-400 font-bold text-base">
                <AlertCircle className="w-5 h-5" />
                <span>The Engineering Challenges</span>
              </div>
              <ul className="space-y-2.5 pt-2">
                {project.challenges.map((c, i) => (
                  <li key={i} className="text-xs text-slate-300 flex items-start gap-2 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-400 shrink-0 mt-1.5" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 rounded-3xl bg-[#0D1127] border border-emerald-500/20 space-y-3">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-base">
                <Lightbulb className="w-5 h-5" />
                <span>Our Architectural Solutions</span>
              </div>
              <ul className="space-y-2.5 pt-2">
                {project.solutions.map((s, i) => (
                  <li key={i} className="text-xs text-slate-300 flex items-start gap-2 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Key Implemented Features */}
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-black text-white">Key Features Implemented</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.keyFeatures.map((feat, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-[#0D1127] border border-purple-500/20 space-y-1.5"
                >
                  <h3 className="text-sm font-bold text-white flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>{feat.title}</span>
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed pl-6">
                    {feat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Admin Operations Portal (For SR Jewellery) */}
          {project.adminFeatures && project.adminFeatures.length > 0 && (
            <div className="p-8 rounded-3xl bg-gradient-to-r from-[#181308] to-[#0E0C06] border border-amber-500/30 space-y-4">
              <div className="flex items-center gap-2 text-amber-400 font-bold text-lg">
                <BarChart3 className="w-5 h-5" />
                <span>Admin Operations & Back-Office Infrastructure</span>
              </div>
              <p className="text-xs text-slate-300">
                To enable non-technical business owners to run their business without developer assistance, we built a dedicated admin control suite:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {project.adminFeatures.map((feat, i) => (
                  <div key={i} className="text-xs text-amber-100 flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technology Badges */}
          <div className="space-y-4 pt-4 border-t border-slate-800">
            <h3 className="text-base font-bold text-white uppercase tracking-wider text-xs">
              Complete Technology Stack & Dependencies:
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-lg text-xs font-mono bg-[#111633] text-purple-300 border border-purple-500/30"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Results & Impact */}
          {project.results && project.results.length > 0 && (
            <div className="space-y-4 pt-4 border-t border-slate-800">
              <h2 className="text-2xl font-black text-white">Project Impact & Deliverables</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.results.map((res, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-200 flex items-start gap-2.5"
                  >
                    <Star className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5 fill-yellow-400" />
                    <span>{res}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <FinalCta />
    </div>
  );
}
