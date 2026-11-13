"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { projectsData } from "@/config/projects";
import { ProjectItem } from "@/types";
import {
  ExternalLink,
  Github,
  ArrowRight,
  FolderGit2,
  Sparkles,
  Layers,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectsGridProps {
  initialLimit?: number;
  showFilters?: boolean;
}

export function ProjectsGrid({ initialLimit = 4, showFilters = true }: ProjectsGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "E-Commerce", "Portfolio", "Academic"];

  const filteredProjects = projectsData.filter((project) => {
    if (selectedCategory === "All") return true;
    return project.category === selectedCategory;
  });

  const displayedProjects = initialLimit ? filteredProjects.slice(0, initialLimit) : filteredProjects;

  return (
    <div className="space-y-10">
      {/* Category Filter Pills */}
      {showFilters && (
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={cn(
                "px-5 py-2 rounded-full text-xs font-semibold transition-all duration-200 border",
                selectedCategory === cat
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white border-purple-400/50 shadow-glow-sm"
                  : "bg-[#111633] text-slate-300 border-purple-500/20 hover:text-white hover:bg-white/5"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      {/* Grid of Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayedProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group rounded-3xl bg-[#0D1127] border border-purple-500/20 hover:border-purple-400/50 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 shadow-card-glass"
          >
            <div>
              {/* Project Image Box */}
              <div className="relative w-full h-52 bg-slate-900 overflow-hidden">
                <Image
                  src={project.thumbnail}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1127] via-transparent to-transparent opacity-80" />
                
                {/* Category Pill on Image */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#080B1C]/90 text-cyan-400 border border-cyan-500/30 backdrop-blur-md">
                    {project.category}
                  </span>
                </div>

                {project.featured && (
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-amber-500 text-black shadow-glow-gold flex items-center gap-1">
                      <Sparkles className="w-3 h-3 fill-black" />
                      Featured
                    </span>
                  </div>
                )}
              </div>

              {/* Body */}
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack Pills */}
                <div className="pt-2 flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 4).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 border border-white/10 text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-1.5 py-0.5 rounded text-[10px] font-mono text-purple-400">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Footer Buttons */}
            <div className="p-6 pt-0 border-t border-slate-800/80 mt-4 flex items-center justify-between gap-3">
              <Link
                href={`/projects/${project.slug}`}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-purple-400 hover:text-purple-300 transition-colors"
              >
                <span>View Details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              <div className="flex items-center gap-2">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors border border-white/10"
                    aria-label="GitHub Repository"
                  >
                    <Github className="w-3.5 h-3.5" />
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-sm hover:from-blue-500 hover:to-purple-500 transition-colors"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
