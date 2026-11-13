import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { servicesData } from "@/config/services";
import { ServiceCard } from "@/components/services/ServiceCard";
import { FinalCta } from "@/components/home/FinalCta";
import {
  Sparkles,
  Tag,
  ShieldCheck,
  CheckCircle2,
  HelpCircle,
  QrCode,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Pricing Plans | VISION VERSE24",
  description:
    "Honest, upfront pricing for digital development. Student rates from ₹299, business websites from ₹1,500. No subscriptions, 100% code ownership.",
};

export default function PricingPage() {
  return (
    <div className="pt-28 pb-20 space-y-24">
      {/* Header */}
      <section className="relative overflow-hidden text-center max-w-4xl mx-auto px-4 md:px-6 space-y-6">
        <div className="glow-orb-purple -top-20 left-1/2 -translate-x-1/2 opacity-30" />
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#111633] border border-purple-500/30 text-xs font-semibold text-purple-300">
          <Tag className="w-3.5 h-3.5 text-pink-400" />
          <span>TRANSPARENT PRICING • ZERO HIDDEN FEES</span>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight">
          Simple, Honest Plans for{" "}
          <span className="text-gradient-brand">Every Budget</span>
        </h1>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          No monthly retainers, no hostage source code. Pay one time, own everything forever, and launch with confidence.
        </p>

        {/* Highlight Banner */}
        <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs sm:text-sm font-semibold text-emerald-400">
          <ShieldCheck className="w-4 h-4" />
          <span>100% Satisfaction Guarantee • Unlimited revisions within project scope</span>
        </div>
      </section>

      {/* Pricing Cards Grid */}
      <section className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard key={service.id} service={service} featured={service.popular} />
          ))}
        </div>
      </section>

      {/* Payment Methods & Transparency Guarantee */}
      <section className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto rounded-3xl bg-[#0D1127] border border-purple-500/20 p-8 md:p-12 space-y-8 shadow-2xl">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              Payment Flexibility & Instant UPI
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Convenient, secure Indian payment modes supported
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div className="p-4 rounded-2xl bg-[#080B1C] border border-slate-800 space-y-2">
              <div className="text-lg font-bold text-white">Google Pay</div>
              <div className="text-[11px] text-emerald-400 font-mono">Instant UPI</div>
            </div>
            <div className="p-4 rounded-2xl bg-[#080B1C] border border-slate-800 space-y-2">
              <div className="text-lg font-bold text-white">PhonePe</div>
              <div className="text-[11px] text-purple-400 font-mono">Instant UPI</div>
            </div>
            <div className="p-4 rounded-2xl bg-[#080B1C] border border-slate-800 space-y-2">
              <div className="text-lg font-bold text-white">Paytm UPI</div>
              <div className="text-[11px] text-cyan-400 font-mono">QR & Handle</div>
            </div>
            <div className="p-4 rounded-2xl bg-[#080B1C] border border-slate-800 space-y-2">
              <div className="text-lg font-bold text-white">Net Banking</div>
              <div className="text-[11px] text-amber-400 font-mono">NEFT / IMPS</div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs text-slate-300 space-y-2 leading-relaxed">
            <div className="font-bold text-white flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-yellow-400" />
              <span>Milestone-Based Safety For Students:</span>
            </div>
            <p>
              For all projects above ₹499, payments can be split into two milestones: 50% advance to start UI/UX wireframes & architecture, and 50% only after you test the working preview and give approval.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <FinalCta />
    </div>
  );
}
