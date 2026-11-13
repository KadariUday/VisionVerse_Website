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
  ArrowUpRight,
  AlertCircle,
  Lightbulb,
  Crown,
  Layers,
  BarChart3,
  Star,
  Check,
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
    <div className="pt-28 pb-20 space-y-16 bg-[#0C0D0E]">
      {/* Top Breadcrumb & Back Link */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 font-mono text-xs text-[#777982] hover:text-[#F59E0B] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>&larr; BACK TO ALL PROJECTS</span>
        </Link>
      </div>

      {/* Hero Case Study Header */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#15171C] border border-white/[0.08] font-mono text-xs uppercase tracking-wider text-[#A2A6B2]">
            {isSRJewellery ? (
              <Crown className="w-3.5 h-3.5 text-[#D9A441] fill-[#D9A441]" />
            ) : (
              <Layers className="w-3.5 h-3.5 text-[#F59E0B]" />
            )}
            <span>{project.category} CASE STUDY</span>
          </div>

          <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.08]">
            {project.title}
          </h1>

          <p className="text-base sm:text-lg text-[#A2A6B2] max-w-2xl mx-auto leading-relaxed">
            {project.tagline}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-7 py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 shadow-studio ${
                  isSRJewellery
                    ? "text-black bg-[#D9A441] hover:bg-[#F5E6BE] shadow-glow-gold"
                    : "text-black bg-[#F59E0B] hover:bg-[#D97706]"
                }`}
              >
                <span>View Live Deployment</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider text-[#F7F6F2] bg-[#15171C] hover:bg-[#1B1E26] border border-white/[0.12] transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>View GitHub Repository</span>
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Main Banner / Visual Preview */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`max-w-5xl mx-auto rounded-3xl overflow-hidden p-4 sm:p-8 shadow-studio relative border ${
            isSRJewellery
              ? "bg-[#14080B] border-[#D9A441]/30"
              : "bg-[#15171C] border-white/[0.08]"
          }`}
        >
          <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-black border border-white/10">
            <Image
              src={project.bannerImage || project.thumbnail}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Metadata quick stats bar */}
          <div className="mt-6 pt-6 border-t border-white/[0.08] grid grid-cols-2 md:grid-cols-4 gap-4 text-center font-mono">
            <div>
              <div className="text-[10px] text-[#777982] uppercase tracking-wider">Client / Scope</div>
              <div className="text-xs sm:text-sm font-bold text-white mt-1">{project.client}</div>
            </div>
            <div>
              <div className="text-[10px] text-[#777982] uppercase tracking-wider">Year Delivered</div>
              <div className="text-xs sm:text-sm font-bold text-white mt-1">{project.completedAt}</div>
            </div>
            <div>
              <div className="text-[10px] text-[#777982] uppercase tracking-wider">Category</div>
              <div className="text-xs sm:text-sm font-bold text-[#F59E0B] mt-1">{project.category}</div>
            </div>
            <div>
              <div className="text-[10px] text-[#777982] uppercase tracking-wider">Production Status</div>
              <div className="text-xs sm:text-sm font-bold text-emerald-400 mt-1">
                {project.isLive ? "Live Edge Active" : "Verified Repo"}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Case Study Body */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-14">
          {/* Project Overview */}
          <div className="space-y-4">
            <div className="font-mono text-xs uppercase tracking-widest text-[#F59E0B]">
              {"// PROJECT OVERVIEW"}
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white">
              The Mission & Architecture
            </h2>
            <p className="text-sm sm:text-base text-[#A2A6B2] leading-relaxed">
              {project.overview}
            </p>
          </div>

          {/* Challenges & Solutions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-[#15171C] border border-[#F97316]/20 space-y-3">
              <div className="flex items-center gap-2 text-[#F97316] font-bold text-sm font-mono uppercase tracking-wider">
                <AlertCircle className="w-4 h-4" />
                <span>The Engineering Challenges</span>
              </div>
              <ul className="space-y-2.5 pt-2">
                {project.challenges.map((c, i) => (
                  <li key={i} className="text-xs text-[#D3D5DC] flex items-start gap-2.5 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F97316] shrink-0 mt-1.5" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-[#15171C] border border-emerald-500/20 space-y-3">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm font-mono uppercase tracking-wider">
                <Lightbulb className="w-4 h-4" />
                <span>Our Architectural Solutions</span>
              </div>
              <ul className="space-y-2.5 pt-2">
                {project.solutions.map((s, i) => (
                  <li key={i} className="text-xs text-[#D3D5DC] flex items-start gap-2.5 leading-relaxed">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Key Implemented Features */}
          <div className="space-y-6">
            <div className="font-mono text-xs uppercase tracking-widest text-[#F59E0B]">
              {"// FEATURE IMPLEMENTATION"}
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white">
              Key Features & Capabilities
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.keyFeatures.map((feat, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-[#15171C] border border-white/[0.08] space-y-1.5"
                >
                  <h3 className="text-sm font-bold text-white flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#F59E0B] shrink-0" />
                    <span>{feat.title}</span>
                  </h3>
                  <p className="text-xs text-[#A2A6B2] leading-relaxed pl-6">
                    {feat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Admin Operations Portal (For SR Jewellery) */}
          {project.adminFeatures && project.adminFeatures.length > 0 && (
            <div className="p-8 rounded-3xl bg-[#14080B] border border-[#D9A441]/30 space-y-4 shadow-studio">
              <div className="flex items-center gap-2 text-[#D9A441] font-bold text-base font-mono uppercase tracking-wider">
                <BarChart3 className="w-5 h-5" />
                <span>Admin Operations & Backoffice Infrastructure</span>
              </div>
              <p className="text-xs text-[#C8C2BC] leading-relaxed">
                To enable non-technical business owners to manage operations without developer friction,
                we engineered a dedicated administrative control portal:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {project.adminFeatures.map((feat, i) => (
                  <div key={i} className="text-xs text-[#E5E0DA] flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#D9A441] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technology Badges */}
          <div className="space-y-4 pt-4 border-t border-white/[0.08]">
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#777982]">
              Complete Technology Stack & Dependencies:
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-md text-xs font-mono bg-[#15171C] text-[#D3D5DC] border border-white/[0.08]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Results & Impact */}
          {project.results && project.results.length > 0 && (
            <div className="space-y-4 pt-4 border-t border-white/[0.08]">
              <h2 className="font-heading text-2xl font-bold text-white">Project Impact & Deliverables</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.results.map((res, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-[#15171C] border border-white/[0.08] text-xs text-[#D3D5DC] flex items-start gap-2.5"
                  >
                    <Star className="w-4 h-4 text-[#D9A441] shrink-0 mt-0.5 fill-[#D9A441]" />
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
