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

      {/* Section E: More Projects Showcase */}
      <section className="py-24 relative overflow-hidden bg-[#060814]">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#111633] border border-purple-500/30 text-xs font-semibold text-purple-300">
                <FolderGit2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>EXPANDABLE PORTFOLIO</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
                Our Proven Work & <span className="text-gradient-cyan">Projects</span>
              </h2>
              <p className="text-sm text-slate-300 max-w-xl">
                Real development for real people. Explore our developer portfolios, e-commerce storefronts, and full-stack solutions.
              </p>
            </div>

            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold text-white bg-[#111633] hover:bg-[#18204A] border border-purple-500/30 hover:border-purple-400 transition-colors shrink-0"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <ProjectsGrid initialLimit={3} showFilters={false} />
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
