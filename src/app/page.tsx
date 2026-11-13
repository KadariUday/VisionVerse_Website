import React from "react";
import Link from "next/link";
import { HeroSection } from "@/components/hero/HeroSection";
import { TrustIndicators } from "@/components/home/TrustIndicators";
import { ServicesSection } from "@/components/services/ServicesSection";
import { FeaturedProject } from "@/components/projects/FeaturedProject";
import { ProjectsGrid } from "@/components/projects/ProjectsGrid";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { DevelopmentProcess } from "@/components/home/DevelopmentProcess";
import { WhatYouGet } from "@/components/home/WhatYouGet";
import { AboutTeamSection } from "@/components/home/AboutTeamSection";
import { InstagramCta } from "@/components/home/InstagramCta";
import { FinalCta } from "@/components/home/FinalCta";
import { ArrowRight, Sparkles, FolderGit2 } from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Section A: Hero */}
      <HeroSection />

      {/* Section B: Trust Indicators */}
      <TrustIndicators />

      {/* Section C: Our Services */}
      <ServicesSection />

      {/* Section D: Featured Project - SR Jewellery Collections */}
      <FeaturedProject />

      {/* Section E: Selected Work & Projects Showcase */}
      <section className="py-24 lg:py-32 relative overflow-hidden bg-[#0C0D0E] border-t border-white/[0.08]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="space-y-4 max-w-2xl">
              <div className="inline-flex items-center gap-2 font-mono text-xs text-[#F59E0B] uppercase tracking-widest">
                <FolderGit2 className="w-3.5 h-3.5" />
                <span>{"// CURATED PORTFOLIO"}</span>
              </div>
              <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.08]">
                SELECTED WORK.{" "}
                <span className="font-serif italic font-normal text-white/90">REAL</span> EXECUTION.
              </h2>
              <p className="text-base text-[#A2A6B2] leading-relaxed">
                From luxury e-commerce platforms to client-side neural networks, browse our verified
                production deployments and open-source repositories.
              </p>
            </div>

            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-[#15171C] hover:bg-[#1C1F26] border border-white/[0.12] hover:border-[#F59E0B]/40 transition-colors shrink-0 group"
            >
              <span>View All 16 Projects</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 text-[#F59E0B]" />
            </Link>
          </div>

          <ProjectsGrid initialLimit={6} showFilters={false} />
        </div>
      </section>

      {/* Section F: Why Choose Us? */}
      <WhyChooseUs />

      {/* Section G: Our Development Process */}
      <DevelopmentProcess />

      {/* Section H: What You Get */}
      <WhatYouGet />

      {/* Section I: About Us & Team */}
      <AboutTeamSection />

      {/* Section J: Instagram CTA */}
      <InstagramCta />

      {/* Section K: Final CTA */}
      <FinalCta />
    </div>
  );
}
