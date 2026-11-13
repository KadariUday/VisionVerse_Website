"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import {
  Github,
  Linkedin,
  Globe,
  GraduationCap,
  Phone,
  Check,
} from "lucide-react";

export function AboutTeamSection() {
  return (
    <section id="about" className="py-24 lg:py-32 relative overflow-hidden bg-[#101114]">
      {/* Studio Grid Overlay */}
      <div className="absolute inset-0 bg-studio-grid pointer-events-none opacity-40" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#315BFF] uppercase tracking-widest">
            <span>{"// THE STUDIO LEADERSHIP"}</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.08]">
            SMALL TEAM.{" "}
            <span className="font-serif italic font-normal text-white/90">BIG</span> IDEAS.
            MEANINGFUL WORK.
          </h2>

          <p className="text-base sm:text-lg text-[#A2A6B2] leading-relaxed max-w-2xl font-normal">
            Vision Verse24 was founded by builders who believe high-performing software should be accessible,
            transparent, and meticulously designed. We are hands-on developers who turn ideas into production code.
          </p>

          <div className="pt-1 inline-flex items-center gap-2 text-xs font-mono text-[#A2A6B2] bg-[#15171C] px-3.5 py-1.5 rounded-full border border-white/[0.08]">
            <GraduationCap className="w-3.5 h-3.5 text-[#315BFF]" />
            <span>Institute of Aeronautical Engineering, Hyderabad • B.Tech CSE (AI & ML) 2027</span>
          </div>
        </div>

        {/* 3 Co-Founders Team Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {siteConfig.coFounders.map((member, idx) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="rounded-2xl bg-[#15171C] border border-white/[0.08] hover:border-white/20 p-6 flex flex-col justify-between transition-all duration-300 group"
            >
              <div className="space-y-5">
                {/* Photo & Identity */}
                <div className="flex items-center gap-4">
                  <div className="relative w-16 h-16 rounded-xl overflow-hidden border border-white/10 bg-[#1B1E26] shrink-0">
                    <Image
                      src={member.avatar}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-white group-hover:text-[#315BFF] transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-xs text-[#315BFF] font-medium mt-0.5">
                      {member.role}
                    </p>
                    <p className="text-[11px] text-[#777982] font-mono mt-0.5">
                      {member.degree}
                    </p>
                  </div>
                </div>

                {/* Quote / Tagline */}
                <p className="text-xs font-serif italic text-[#D3D5DC] bg-white/[0.03] p-3 rounded-xl border border-white/5">
                  "{member.tagline}"
                </p>

                {/* Strengths */}
                <div className="space-y-1.5">
                  <div className="font-mono text-[10px] text-[#777982] uppercase tracking-wider">
                    Focus Areas:
                  </div>
                  <div className="grid grid-cols-2 gap-1.5">
                    {member.strengths.map((str, sIdx) => (
                      <div
                        key={sIdx}
                        className="text-[11px] text-[#A2A6B2] flex items-center gap-1.5"
                      >
                        <Check className="w-3 h-3 text-[#315BFF] shrink-0" />
                        <span className="truncate">{str}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Skills */}
                <div className="pt-3 border-t border-white/[0.06] flex flex-wrap gap-1.5">
                  {member.skills.map((skill, skIdx) => (
                    <span
                      key={skIdx}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#1B1E26] text-[#A2A6B2] border border-white/5"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links & Connect */}
              <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-[#1B1E26] hover:bg-white/10 text-[#A2A6B2] hover:text-white transition-colors"
                    aria-label={`${member.name} GitHub`}
                  >
                    <Github className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-[#1B1E26] hover:bg-white/10 text-[#315BFF] hover:text-white transition-colors"
                    aria-label={`${member.name} LinkedIn`}
                  >
                    <Linkedin className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={member.portfolio}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-[#1B1E26] hover:bg-white/10 text-[#753BDB] hover:text-white transition-colors"
                    aria-label={`${member.name} Portfolio`}
                  >
                    <Globe className="w-3.5 h-3.5" />
                  </a>
                </div>

                <a
                  href={`https://wa.me/${member.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 bg-emerald-500/10 px-3 py-1.5 rounded-lg border border-emerald-500/30 transition-colors"
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
