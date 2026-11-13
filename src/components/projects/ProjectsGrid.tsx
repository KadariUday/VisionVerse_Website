"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { projectsData } from "@/config/projects";
import { ProjectItem } from "@/types";
import {
  Compass,
  Shield,
  Sparkles,
  Activity,
  Database,
  Users,
  CloudSun,
  Code2,
  Terminal,
  ArrowUpRight,
  Github,
  ExternalLink,
} from "lucide-react";
import { cn } from "@/lib/utils";

const iconMap: Record<string, any> = {
  Compass,
  Shield,
  Sparkles,
  Activity,
  Database,
  Users,
  CloudSun,
  Code2,
  Terminal,
};

const categoryThemeMap: Record<string, { iconStyle: string; badgeStyle: string; borderHover: string }> = {
  "E-Commerce": {
    iconStyle: "bg-[#F59E0B]/15 text-[#F59E0B] border-[#F59E0B]/30",
    badgeStyle: "bg-[#F59E0B]/10 text-[#F59E0B] border-[#F59E0B]/30",
    borderHover: "hover:border-[#F59E0B]/50",
  },
  "AI Application": {
    iconStyle: "bg-[#F59E0B]/15 text-[#F59E0B] border-[#F59E0B]/30",
    badgeStyle: "bg-[#F59E0B]/10 text-[#FBBF24] border-[#F59E0B]/25",
    borderHover: "hover:border-[#F59E0B]/50",
  },
  Cybersecurity: {
    iconStyle: "bg-[#F97316]/15 text-[#F97316] border-[#F97316]/30",
    badgeStyle: "bg-[#F97316]/10 text-[#F97316] border-[#F97316]/25",
    borderHover: "hover:border-[#F97316]/50",
  },
  Healthcare: {
    iconStyle: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
    badgeStyle: "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    borderHover: "hover:border-emerald-500/50",
  },
  Academic: {
    iconStyle: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
    badgeStyle: "bg-emerald-500/10 text-emerald-300 border-emerald-500/25",
    borderHover: "hover:border-emerald-500/50",
  },
  "Multi-Agent": {
    iconStyle: "bg-[#F59E0B]/15 text-[#F59E0B] border-[#F59E0B]/30",
    badgeStyle: "bg-[#F59E0B]/10 text-[#F59E0B] border-[#F59E0B]/25",
    borderHover: "hover:border-[#F59E0B]/50",
  },
  Portfolio: {
    iconStyle: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
    badgeStyle: "bg-emerald-500/10 text-emerald-300 border-emerald-500/25",
    borderHover: "hover:border-emerald-500/50",
  },
  Utility: {
    iconStyle: "bg-white/10 text-white border-white/20",
    badgeStyle: "bg-white/5 text-[#D4D4D8] border-white/10",
    borderHover: "hover:border-white/30",
  },
};

interface ProjectsGridProps {
  initialLimit?: number;
  showFilters?: boolean;
}

export function ProjectsGrid({ initialLimit, showFilters = true }: ProjectsGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = [
    "All",
    "AI Application",
    "E-Commerce",
    "Healthcare",
    "Academic",
    "Cybersecurity",
    "Utility",
    "Portfolio",
  ];

  const filteredProjects = projectsData.filter((project) => {
    if (selectedCategory === "All") return true;
    return project.category === selectedCategory;
  });

  const displayedProjects = initialLimit
    ? filteredProjects.slice(0, initialLimit)
    : filteredProjects;

  return (
    <div className="space-y-8">
      {/* Category Filter Pills & Dynamic Counter */}
      {showFilters && (
        <div className="space-y-4">
          <div className="flex items-center justify-between flex-wrap gap-4 text-xs font-mono text-[#71717A] pb-3 border-b border-white/[0.08]">
            <div>
              Showing <span className="font-bold text-white">{displayedProjects.length}</span> of{" "}
              <span className="font-bold text-white">{projectsData.length}</span> verified projects
            </div>
            <div className="text-emerald-400 flex items-center gap-2 font-mono text-[11px]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Production Deployed & Open Source</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-start gap-2 pt-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={cn(
                  "px-4 py-1.5 rounded-full text-xs font-medium tracking-wide uppercase transition-all duration-200 border",
                  selectedCategory === cat
                    ? "bg-[#F59E0B] text-black font-semibold border-[#F59E0B] shadow-[0_0_15px_rgba(245,158,11,0.25)]"
                    : "bg-[#131517] text-[#71717A] border-white/[0.08] hover:text-white hover:border-white/20"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Grid of 16 Projects with Bespoke Studio Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedProjects.map((project, index) => {
          const Icon = (project.iconName && iconMap[project.iconName]) || Code2;
          const theme = categoryThemeMap[project.category] || categoryThemeMap["Utility"];
          const displayTech = project.technologies.slice(0, 4);
          const remainingCount = project.technologies.length - 4;

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: (index % 6) * 0.05 }}
              className={cn(
                "group relative rounded-2xl bg-[#131517] border border-white/[0.08] p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-subtle",
                theme.borderHover
              )}
            >
              <div className="space-y-4">
                {/* Top Row: Icon + Badges */}
                <div className="flex items-center justify-between gap-2">
                  <div
                    className={cn(
                      "w-10 h-10 rounded-xl flex items-center justify-center border transition-transform duration-300 group-hover:scale-105",
                      theme.iconStyle
                    )}
                  >
                    <Icon className="w-5 h-5" />
                  </div>

                  <div className="flex items-center gap-1.5 flex-wrap justify-end">
                    {/* Live Badge */}
                    {project.isLive && (
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Live
                      </span>
                    )}

                    {/* Category / Type Badge */}
                    <span
                      className={cn(
                        "px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium border",
                        theme.badgeStyle
                      )}
                    >
                      {project.badge || project.category}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <div>
                  <h3 className="font-heading text-base sm:text-lg font-bold text-white group-hover:text-white transition-colors leading-snug line-clamp-2">
                    {project.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-xs text-[#A1A1AA] leading-relaxed line-clamp-2 min-h-[34px]">
                  {project.description}
                </p>

                {/* Technology Tags */}
                <div className="flex flex-wrap items-center gap-1.5 pt-1">
                  {displayTech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-[#181A1F] text-[#A1A1AA] border border-white/[0.06]"
                    >
                      {tech}
                    </span>
                  ))}
                  {remainingCount > 0 && (
                    <span className="px-1.5 py-0.5 rounded-md text-[10px] font-mono text-[#71717A] bg-white/[0.03] border border-white/[0.04]">
                      +{remainingCount}
                    </span>
                  )}
                </div>
              </div>

              {/* Bottom Actions Row */}
              <div className="flex items-center gap-2 pt-5 mt-4 border-t border-white/[0.08]">
                <Link
                  href={`/projects/${project.slug}`}
                  className="flex-1 py-2.5 px-3 rounded-xl text-xs font-semibold uppercase tracking-wider text-[#F4F4F5] bg-[#181A1F] hover:bg-[#F59E0B] hover:text-black border border-white/[0.08] hover:border-[#F59E0B] transition-all flex items-center justify-center gap-1.5 group/btn"
                >
                  <span>View Details</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 text-[#71717A] group-hover/btn:text-black" />
                </Link>

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-[#181A1F] hover:bg-white/10 border border-white/[0.08] hover:border-white/20 text-[#A1A1AA] hover:text-white transition-all"
                    title="View GitHub Repository"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                )}

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 hover:text-emerald-300 transition-all"
                    title="Open Live Website"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
