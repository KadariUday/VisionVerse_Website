import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { servicesData } from "@/config/services";
import { FinalCta } from "@/components/home/FinalCta";
import {
  Check,
  ArrowUpRight,
  ShieldCheck,
  HelpCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Pricing & Plans | VISION VERSE24 — IDEAS. CODE. IMPACT.",
  description:
    "Transparent upfront pricing from ₹299 to ₹5,000. Full source code ownership on GitHub, zero monthly platform fees, and live Vercel Edge hosting.",
};

export default function PricingPage() {
  return (
    <div className="pt-28 pb-20 space-y-24 bg-[#101114]">
      {/* Header */}
      <section className="relative overflow-hidden text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 pt-12">
        <div className="inline-flex items-center gap-2 font-mono text-xs text-[#315BFF] uppercase tracking-widest">
          <span>{"// TRANSPARENT RATE CARD"}</span>
        </div>

        <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.06]">
          FIXED RATES.{" "}
          <span className="font-serif italic font-normal text-white/90">ZERO</span> SURPRISES.
        </h1>

        <p className="text-base sm:text-xl text-[#A2A6B2] max-w-2xl mx-auto leading-relaxed font-normal">
          Honest, upfront pricing for students and businesses. Every project includes full source code delivery
          to your personal GitHub, free Vercel Edge hosting setup, and post-delivery support.
        </p>
      </section>

      {/* Pricing Grid */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className={`rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 border ${
                service.popular
                  ? "bg-[#181B24] border-[#315BFF]/40 shadow-studio"
                  : "bg-[#15171C] border-white/[0.08] hover:border-white/20"
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-[#777982] uppercase tracking-wider">
                    {service.category} Tier
                  </span>
                  {service.popular && (
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-white bg-[#315BFF] px-2.5 py-0.5 rounded-full">
                      Most Popular
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="font-heading text-xl font-bold text-white">
                    {service.title}
                  </h3>
                  <p className="text-xs text-[#777982] font-mono uppercase tracking-wider mt-0.5">
                    {service.tagline}
                  </p>
                </div>

                <div className="py-2">
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-heading text-3xl sm:text-4xl font-black text-white">
                      {service.priceFormatted}
                    </span>
                    <span className="text-xs text-[#777982] font-mono">one-time</span>
                  </div>
                  <p className="text-xs text-[#A2A6B2] mt-0.5">{service.priceNote}</p>
                </div>

                <p className="text-xs text-[#A2A6B2] leading-relaxed">
                  {service.description}
                </p>

                <div className="pt-4 border-t border-white/[0.06] space-y-2">
                  <div className="font-mono text-[10px] text-[#777982] uppercase tracking-wider">
                    Inclusions:
                  </div>
                  <ul className="space-y-1.5 text-xs text-[#D3D5DC]">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#315BFF] shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 mt-4 border-t border-white/[0.08]">
                <Link
                  href={`/contact?service=${encodeURIComponent(service.key)}`}
                  className={`w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-200 group ${
                    service.popular
                      ? "bg-[#315BFF] hover:bg-[#2546CC] text-white shadow-subtle"
                      : "bg-[#1B1E26] hover:bg-[#315BFF] text-white border border-white/10 hover:border-[#315BFF]"
                  }`}
                >
                  <span>Select {service.key}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trust & Guarantee Box */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto rounded-2xl bg-[#15171C] border border-white/[0.08] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center sm:text-left">
            <h4 className="text-base font-bold text-white font-heading">
              Need custom enterprise architecture or a unique MVP?
            </h4>
            <p className="text-xs text-[#A2A6B2]">
              We frequently build custom machine learning workflows, multi-agent frameworks, and bespoke dashboards.
            </p>
          </div>
          <Link
            href="/contact?service=Custom%20Web%20Application"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-[#315BFF] hover:bg-[#2546CC] transition-colors shrink-0"
          >
            <span>Custom Quote</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      <FinalCta />
    </div>
  );
}
