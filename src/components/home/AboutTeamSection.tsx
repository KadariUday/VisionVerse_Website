"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import {
  Github,
  Linkedin,
  Globe,
  GraduationCap,
  Sparkles,
  Phone,
  Mail,
  CheckCircle,
} from "lucide-react";

export function AboutTeamSection() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#080B1C]">
      {/* Background orbs */}
      <div className="glow-orb-purple -top-10 left-1/4 opacity-30" />
      <div className="glow-orb-pink bottom-0 right-1/4 opacity-25" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#111633] border border-purple-500/30 text-xs font-semibold text-purple-300">
            <Sparkles className="w-3.5 h-3.5 text-pink-400" />
            <span>REAL DEVELOPERS. REAL PASSION.</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Creative Minds. Powerful Technology.{" "}
            <span className="text-gradient-brand">Real Solutions.</span>
          </h2>

          <p className="text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Vision Verse24 is a digital development initiative focused on transforming ideas into
            meaningful digital products. We work on websites, applications, AI-powered solutions
            and student projects with an emphasis on creativity, quality and affordability.
          </p>

          <div className="pt-2 inline-flex items-center gap-2 text-xs font-medium text-slate-400 bg-white/5 px-4 py-2 rounded-full border border-white/10">
            <GraduationCap className="w-4 h-4 text-cyan-400" />
            <span>Institute of Aeronautical Engineering, Dundigal, Hyderabad • B.Tech CSE (AI & ML) 2027 Batch</span>
          </div>
        </div>

        {/* 3 Co-Founders Team Cards Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {siteConfig.coFounders.map((member, idx) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="group rounded-3xl bg-[#0D1127] border border-purple-500/20 hover:border-purple-400/50 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 shadow-card-glass"
            >
              <div>
                {/* Photo & Badge */}
                <div className="flex items-center gap-4">
                  <div className="relative w-20 h-20 rounded-2xl overflow-hidden border-2 border-purple-400/40 bg-slate-800 shadow-md shrink-0">
                    <Image
                      src={member.avatar}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-white group-hover:text-purple-300 transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-xs text-cyan-400 font-semibold mt-0.5">
                      {member.role}
                    </p>
                    <p className="text-[11px] text-slate-400 mt-1">
                      {member.degree}
                    </p>
                  </div>
                </div>

                {/* Tagline */}
                <p className="text-xs italic text-slate-300 mt-4 bg-white/5 p-3 rounded-xl border border-white/5">
                  "{member.tagline}"
                </p>

                {/* Core Strengths */}
                <div className="mt-4 space-y-1.5">
                  <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                    Core Focus:
                  </div>
                  <div className="grid grid-cols-2 gap-1.5">
                    {member.strengths.map((str, sIdx) => (
                      <div
                        key={sIdx}
                        className="text-[11px] text-slate-300 flex items-center gap-1.5"
                      >
                        <CheckCircle className="w-3 h-3 text-purple-400 shrink-0" />
                        <span className="truncate">{str}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Skills */}
                <div className="mt-4 pt-3 border-t border-slate-800 flex flex-wrap gap-1.5">
                  {member.skills.map((skill, skIdx) => (
                    <span
                      key={skIdx}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#111633] text-slate-300 border border-purple-500/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links & Connect */}
              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                    aria-label={`${member.name} GitHub`}
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-blue-400 hover:text-blue-300 transition-colors"
                    aria-label={`${member.name} LinkedIn`}
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href={member.portfolio}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-cyan-400 hover:text-cyan-300 transition-colors"
                    aria-label={`${member.name} Portfolio`}
                  >
                    <Globe className="w-4 h-4" />
                  </a>
                </div>

                <a
                  href={`https://wa.me/${member.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-400 hover:text-emerald-300 bg-emerald-500/10 px-3 py-1.5 rounded-lg border border-emerald-500/30"
                >
                  <Phone className="w-3 h-3" />
                  <span>Connect</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
