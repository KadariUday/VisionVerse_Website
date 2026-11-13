import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { servicesData } from "@/config/services";
import { ServicesSection } from "@/components/services/ServicesSection";
import { FinalCta } from "@/components/home/FinalCta";
import {
  Check,
  HelpCircle,
  ArrowUpRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Services & Pricing | VISION VERSE24 — IDEAS. CODE. IMPACT.",
  description:
    "Explore Vision Verse24's affordable development services: Resume Websites (₹299), Developer Portfolios (₹499), College Projects (₹699), Practical Training (₹999), and Business Websites (₹1,500+).",
};

export default function ServicesPage() {
  return (
    <div className="pt-28 pb-20 space-y-24 bg-[#101114]">
      {/* Header */}
      <section className="relative overflow-hidden text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 pt-12">
        <div className="inline-flex items-center gap-2 font-mono text-xs text-[#315BFF] uppercase tracking-widest">
          <span>{"// DISCIPLINES & RATE CARD"}</span>
        </div>

        <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.06]">
          TRANSPARENT RATES.{" "}
          <span className="font-serif italic font-normal text-white/90">PRODUCTION</span>{" "}
          QUALITY.
        </h1>

        <p className="text-base sm:text-xl text-[#A2A6B2] max-w-2xl mx-auto leading-relaxed font-normal">
          Every project is built from scratch with clean, production-grade Next.js, React, and modern databases.
          Zero subscription lock-in, zero hidden fees.
        </p>
      </section>

      {/* Main Services Asymmetric Section */}
      <ServicesSection />

      {/* Detailed Service Comparison Breakdown */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto rounded-3xl bg-[#15171C] border border-white/[0.08] p-6 sm:p-10 shadow-studio space-y-8">
          <div className="space-y-2">
            <div className="font-mono text-xs uppercase tracking-widest text-[#315BFF]">
              {"// FEATURE MATRIX"}
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Deliverables Comparison
            </h2>
            <p className="text-xs sm:text-sm text-[#777982]">
              Side-by-side breakdown of inclusions across our core packages
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs md:text-sm">
              <thead>
                <tr className="border-b border-white/[0.08] text-[#777982] font-mono text-xs">
                  <th className="py-3.5 px-4 font-semibold">Features & Benefits</th>
                  <th className="py-3.5 px-4 font-semibold text-center text-[#60A5FA]">Resume (₹299)</th>
                  <th className="py-3.5 px-4 font-semibold text-center text-[#A78BFA]">Portfolio (₹499)</th>
                  <th className="py-3.5 px-4 font-semibold text-center text-emerald-400">College Project (₹699)</th>
                  <th className="py-3.5 px-4 font-semibold text-center text-[#FF5D65]">Business (₹1500+)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.06] text-[#D3D5DC]">
                <tr>
                  <td className="py-3.5 px-4 font-medium text-white">Responsive Mobile Design</td>
                  <td className="text-center py-3.5 px-4"><Check className="w-4 h-4 text-emerald-400 mx-auto" /></td>
                  <td className="text-center py-3.5 px-4"><Check className="w-4 h-4 text-emerald-400 mx-auto" /></td>
                  <td className="text-center py-3.5 px-4"><Check className="w-4 h-4 text-emerald-400 mx-auto" /></td>
                  <td className="text-center py-3.5 px-4"><Check className="w-4 h-4 text-emerald-400 mx-auto" /></td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-medium text-white">Vercel Edge Live Hosting</td>
                  <td className="text-center py-3.5 px-4"><Check className="w-4 h-4 text-emerald-400 mx-auto" /></td>
                  <td className="text-center py-3.5 px-4"><Check className="w-4 h-4 text-emerald-400 mx-auto" /></td>
                  <td className="text-center py-3.5 px-4"><Check className="w-4 h-4 text-emerald-400 mx-auto" /></td>
                  <td className="text-center py-3.5 px-4"><Check className="w-4 h-4 text-emerald-400 mx-auto" /></td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-medium text-white">Source Code Delivery (GitHub)</td>
                  <td className="text-center py-3.5 px-4"><Check className="w-4 h-4 text-emerald-400 mx-auto" /></td>
                  <td className="text-center py-3.5 px-4"><Check className="w-4 h-4 text-emerald-400 mx-auto" /></td>
                  <td className="text-center py-3.5 px-4"><Check className="w-4 h-4 text-emerald-400 mx-auto" /></td>
                  <td className="text-center py-3.5 px-4"><Check className="w-4 h-4 text-emerald-400 mx-auto" /></td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-medium text-white">Interactive WhatsApp Direct Chat</td>
                  <td className="text-center py-3.5 px-4 text-[#777982]">—</td>
                  <td className="text-center py-3.5 px-4"><Check className="w-4 h-4 text-emerald-400 mx-auto" /></td>
                  <td className="text-center py-3.5 px-4"><Check className="w-4 h-4 text-emerald-400 mx-auto" /></td>
                  <td className="text-center py-3.5 px-4"><Check className="w-4 h-4 text-emerald-400 mx-auto" /></td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-medium text-white">Full Academic Documentation & Viva Prep</td>
                  <td className="text-center py-3.5 px-4 text-[#777982]">—</td>
                  <td className="text-center py-3.5 px-4 text-[#777982]">—</td>
                  <td className="text-center py-3.5 px-4"><Check className="w-4 h-4 text-emerald-400 mx-auto" /></td>
                  <td className="text-center py-3.5 px-4 text-[#777982]">—</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-medium text-white">Backend Database & Admin Portal</td>
                  <td className="text-center py-3.5 px-4 text-[#777982]">—</td>
                  <td className="text-center py-3.5 px-4 text-[#777982]">—</td>
                  <td className="text-center py-3.5 px-4"><Check className="w-4 h-4 text-emerald-400 mx-auto" /></td>
                  <td className="text-center py-3.5 px-4"><Check className="w-4 h-4 text-emerald-400 mx-auto" /></td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-medium text-white">Delivery Turnaround</td>
                  <td className="text-center py-3.5 px-4 font-mono text-[#60A5FA]">24–48 Hours</td>
                  <td className="text-center py-3.5 px-4 font-mono text-[#A78BFA]">2–3 Days</td>
                  <td className="text-center py-3.5 px-4 font-mono text-emerald-400">3–5 Days</td>
                  <td className="text-center py-3.5 px-4 font-mono text-[#FF5D65]">5–10 Days</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Services FAQ */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <div className="font-mono text-xs uppercase tracking-widest text-[#315BFF]">
              {"// ANSWERS"}
            </div>
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white">Frequently Asked Questions</h3>
            <p className="text-xs text-[#777982]">Everything you need to know before initiating a build</p>
          </div>

          <div className="space-y-4">
            <div className="p-5 rounded-2xl bg-[#15171C] border border-white/[0.08] space-y-2">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-[#315BFF]" />
                <span>How does the payment and delivery workflow proceed?</span>
              </h4>
              <p className="text-xs text-[#A2A6B2] leading-relaxed pl-6">
                You submit your enquiry via our website or directly on WhatsApp. We discuss the details, clarify requirements,
                and confirm the deliverable timeline. For student services, payment is typically split 50% advance and 50% upon demo approval.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#15171C] border border-white/[0.08] space-y-2">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-[#753BDB]" />
                <span>Do I receive full access and ownership of the source code?</span>
              </h4>
              <p className="text-xs text-[#A2A6B2] leading-relaxed pl-6">
                Yes! We push the complete, unminified source code directly to your personal GitHub account.
                You hold 100% legal ownership of the repository files, assets, and deployment accounts.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#15171C] border border-white/[0.08] space-y-2">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-[#FF5D65]" />
                <span>What is your revision policy following project delivery?</span>
              </h4>
              <p className="text-xs text-[#A2A6B2] leading-relaxed pl-6">
                We provide iterative revisions within the agreed scope. For portfolios and resumes, minor text and image updates
                are included to ensure you are completely satisfied before public launch.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <FinalCta />
    </div>
  );
}
