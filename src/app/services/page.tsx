import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { servicesData } from "@/config/services";
import { ServiceCard } from "@/components/services/ServiceCard";
import { FinalCta } from "@/components/home/FinalCta";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Check,
  HelpCircle,
  Clock,
  Layers,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Services & Pricing | VISION VERSE24",
  description:
    "Explore Vision Verse24's affordable development services: Resume Websites (₹299), Developer Portfolios (₹499), College Projects (₹699), Practical Training (₹999), and Business Websites (₹1,500+).",
};

export default function ServicesPage() {
  return (
    <div className="pt-28 pb-20 space-y-24">
      {/* Header */}
      <section className="relative overflow-hidden text-center max-w-4xl mx-auto px-4 md:px-6 space-y-6">
        <div className="glow-orb-purple -top-20 left-1/2 -translate-x-1/2 opacity-30" />
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#111633] border border-purple-500/30 text-xs font-semibold text-purple-300">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>OUR SERVICES & TIERS</span>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight">
          Transparent, Student & Business Friendly{" "}
          <span className="text-gradient-brand">Digital Services</span>
        </h1>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Every project is built from scratch with clean, production-grade Next.js, React, and modern databases. No subscription traps, no hidden fees.
        </p>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard key={service.id} service={service} featured={service.popular} />
          ))}
        </div>
      </section>

      {/* Detailed Service Comparison Breakdown */}
      <section className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto rounded-3xl bg-[#0D1127] border border-purple-500/20 p-6 md:p-10 shadow-2xl space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              Service Matrix & Deliverables
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Quick side-by-side comparison of deliverables across our core packages
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs md:text-sm">
              <thead>
                <tr className="border-b border-slate-800 text-slate-400">
                  <th className="py-3 px-4 font-semibold">Features & Benefits</th>
                  <th className="py-3 px-4 font-semibold text-center text-cyan-400">Resume Build (₹299)</th>
                  <th className="py-3 px-4 font-semibold text-center text-purple-400">Portfolio (₹499)</th>
                  <th className="py-3 px-4 font-semibold text-center text-emerald-400">College Project (₹699)</th>
                  <th className="py-3 px-4 font-semibold text-center text-pink-400">Business (₹1500+)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-slate-300">
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
                  <td className="text-center py-3.5 px-4 text-slate-600">—</td>
                  <td className="text-center py-3.5 px-4"><Check className="w-4 h-4 text-emerald-400 mx-auto" /></td>
                  <td className="text-center py-3.5 px-4"><Check className="w-4 h-4 text-emerald-400 mx-auto" /></td>
                  <td className="text-center py-3.5 px-4"><Check className="w-4 h-4 text-emerald-400 mx-auto" /></td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-medium text-white">Full Academic Documentation & Viva Prep</td>
                  <td className="text-center py-3.5 px-4 text-slate-600">—</td>
                  <td className="text-center py-3.5 px-4 text-slate-600">—</td>
                  <td className="text-center py-3.5 px-4"><Check className="w-4 h-4 text-emerald-400 mx-auto" /></td>
                  <td className="text-center py-3.5 px-4 text-slate-600">—</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-medium text-white">Backend Database & Admin Portal</td>
                  <td className="text-center py-3.5 px-4 text-slate-600">—</td>
                  <td className="text-center py-3.5 px-4 text-slate-600">—</td>
                  <td className="text-center py-3.5 px-4"><Check className="w-4 h-4 text-emerald-400 mx-auto" /></td>
                  <td className="text-center py-3.5 px-4"><Check className="w-4 h-4 text-emerald-400 mx-auto" /></td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-medium text-white">Delivery Turnaround</td>
                  <td className="text-center py-3.5 px-4 font-mono text-cyan-400">24-48 Hours</td>
                  <td className="text-center py-3.5 px-4 font-mono text-purple-400">2-3 Days</td>
                  <td className="text-center py-3.5 px-4 font-mono text-emerald-400">3-5 Days</td>
                  <td className="text-center py-3.5 px-4 font-mono text-pink-400">5-10 Days</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Services FAQ */}
      <section className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="text-center space-y-2">
            <h3 className="text-2xl font-bold text-white">Common Questions About Our Services</h3>
            <p className="text-xs text-slate-400">Everything you need to know before ordering</p>
          </div>

          <div className="space-y-4">
            <div className="p-5 rounded-2xl bg-[#0D1127] border border-purple-500/20 space-y-2">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-purple-400" />
                <span>How does the payment and delivery process work?</span>
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed pl-6">
                You submit your enquiry via our website or directly on WhatsApp. We discuss the details, clarify requirements, and confirm the deliverable timeline. For student services, payment is typically split 50% advance and 50% upon demo approval.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#0D1127] border border-purple-500/20 space-y-2">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-purple-400" />
                <span>Do I get full access to the source code?</span>
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed pl-6">
                Yes! We push the complete, unminified source code to your personal GitHub account. You have full ownership of the project files, assets, and deployment.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#0D1127] border border-purple-500/20 space-y-2">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-purple-400" />
                <span>What if I need revisions after delivery?</span>
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed pl-6">
                We offer unlimited revisions within the agreed scope. For portfolios and resumes, minor text and image updates are included to ensure you are 100% satisfied.
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
