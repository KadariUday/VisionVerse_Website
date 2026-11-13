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
  Layers,
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

const iconColorMap: Record<string, string> = {
  Compass: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
  Shield: "bg-purple-500/10 text-purple-400 border-purple-500/30",
  Sparkles: "bg-amber-500/10 text-amber-300 border-amber-500/40",
  Activity: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
  Database: "bg-blue-500/10 text-blue-400 border-blue-500/30",
  Users: "bg-indigo-500/10 text-indigo-400 border-indigo-500/30",
  CloudSun: "bg-sky-500/10 text-sky-400 border-sky-500/30",
  Code2: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
  Terminal: "bg-amber-500/10 text-amber-400 border-amber-500/30",
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

  const displayedProjects = initialLimit ? filteredProjects.slice(0, initialLimit) : filteredProjects;

  return (
    <div className="space-y-8">
      {/* Category Filter Pills & Dynamic Counter */}
      {showFilters && (
        <div className="space-y-4">
          <div className="flex items-center justify-between flex-wrap gap-4 text-xs font-mono text-slate-400 pb-2 border-b border-slate-800/80">
            <div>
              Showing <span className="font-bold text-white">{displayedProjects.length}</span> of{" "}
              <span className="font-bold text-white">{projectsData.length}</span> projects
            </div>
            <div className="text-emerald-400 flex items-center gap-1.5 font-sans font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Verified Repositories & Deployments</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-start gap-2 pt-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={cn(
                  "px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 border",
                  selectedCategory === cat
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white border-purple-400/50 shadow-glow-sm"
                    : "bg-[#0D1127] text-slate-300 border-slate-800 hover:border-purple-500/30 hover:text-white"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Grid of 16 Projects Matching Reference Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedProjects.map((project, index) => {
          const Icon = (project.iconName && iconMap[project.iconName]) || Code2;
          const iconColors = (project.iconName && iconColorMap[project.iconName]) || "bg-cyan-500/10 text-cyan-400 border-cyan-500/30";
          const displayTech = project.technologies.slice(0, 4);
          const remainingCount = project.technologies.length - 4;

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: (index % 6) * 0.05 }}
              className="group relative rounded-2xl bg-[#0D1127]/90 border border-slate-800 hover:border-purple-500/40 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 shadow-card-glass hover:shadow-glow-sm"
            >
              <div className="space-y-4">
                {/* Top Row: Icon + Badges */}
                <div className="flex items-center justify-between gap-2">
                  <div
                    className={cn(
                      "w-11 h-11 rounded-xl flex items-center justify-center border transition-transform duration-300 group-hover:scale-105",
                      iconColors
                    )}
                  >
                    <Icon className="w-5 h-5" />
                  </div>

                  <div className="flex items-center gap-1.5 flex-wrap justify-end">
                    {/* Live Badge */}
                    {project.isLive && (
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Live
                      </span>
                    )}

                    {/* Category / Type Badge */}
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                      {project.badge || project.category}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug line-clamp-2">
                    {project.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-xs text-slate-400 leading-relaxed line-clamp-2 min-h-[34px]">
                  {project.description}
                </p>

                {/* Technology Tags */}
                <div className="flex flex-wrap items-center gap-1.5 pt-1">
                  {displayTech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg text-[10px] font-mono font-medium bg-[#111633] text-slate-300 border border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                  {remainingCount > 0 && (
                    <span className="px-2 py-1 rounded-lg text-[10px] font-mono text-slate-500 bg-white/5 border border-white/5">
                      +{remainingCount}
                    </span>
                  )}
                </div>
              </div>

              {/* Bottom Actions Row */}
              <div className="flex items-center gap-2 pt-6 mt-4 border-t border-slate-800/80">
                <Link
                  href={`/projects/${project.slug}`}
                  className="flex-1 py-2.5 px-3 rounded-xl text-xs font-bold text-slate-200 bg-[#111633] hover:bg-[#18204A] border border-slate-800 hover:border-purple-500/40 hover:text-white transition-all flex items-center justify-center gap-1.5 group/btn"
                >
                  <span>View Details</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 text-slate-400 group-hover/btn:text-white" />
                </Link>

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-[#111633] hover:bg-[#18204A] border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white transition-all"
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
