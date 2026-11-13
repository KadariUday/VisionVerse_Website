"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ExternalLink,
  Crown,
  Sparkles,
  ShoppingBag,
  Search,
  Heart,
  QrCode,
  ShieldCheck,
  Smartphone,
  Check,
} from "lucide-react";

const jewelleryShowcase = [
  {
    name: "Laher Cyan Blue Lotus Jhumka",
    category: "Earrings",
    image: "/projects/srj-laher-cyan.png",
    tag: "Handcrafted Antique",
  },
  {
    name: "Dhara Emerald Green Jhumka",
    category: "Earrings",
    image: "/projects/srj-dhara-emerald.png",
    tag: "Royal Heritage",
  },
  {
    name: "AJ Art Silver Emerald Chandbali",
    category: "Earrings",
    image: "/projects/srj-aj-silver.png",
    tag: "Fine Silver",
  },
  {
    name: "Royal Silver Ruby Chandbali",
    category: "Earrings",
    image: "/projects/srj-royal-ruby.png",
    tag: "Exclusive Festive",
  },
];

const customerFeatures = [
  { title: "Dynamic Product Catalog", desc: "Curated collections with multi-tier category and gemstone filtering." },
  { title: "Sub-Second Search", desc: "Instant search indexing across collections, carats, and design motifs." },
  { title: "Session Cart & Wishlist", desc: "Persistent shopping cart state retained seamlessly across device reloads." },
  { title: "Zero-Fee UPI Gateway", desc: "Direct dynamic QR code generation eliminating 2-3% aggregator fees." },
  { title: "Verified Customer Tracking", desc: "Direct WhatsApp order confirmation and real-time status inquiry." },
  { title: "Mobile Touch Optimization", desc: "Bespoke bottom sheet navigation and tactile swipe interactions." },
];

const adminFeatures = [
  "Real-time revenue, orders & sales analytics dashboard",
  "Inventory management with automated out-of-stock indicators",
  "Consolidated invoice generation and printable order slips",
  "Promotional discount coupon code generator",
  "Direct customer WhatsApp communication shortcuts",
  "Synchronized store banner and announcements editor",
];

export function FeaturedProject() {
  const [activeTab, setActiveTab] = useState<"customer" | "admin">("customer");

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-[#0F080B] text-[#F7F6F2]">
      {/* Luxury Ambient Lighting: Deep Burgundy & Champagne Gold */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-[#3D0C1D]/30 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[350px] bg-[#D9A441]/[0.08] rounded-full blur-[130px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Editorial Label & Headline */}
        <div className="max-w-3xl space-y-4 mb-14">
          <div className="inline-flex items-center gap-2.5 font-mono text-xs uppercase tracking-widest text-[#D9A441]">
            <Crown className="w-3.5 h-3.5 fill-[#D9A441]" />
            <span>FLAGSHIP CASE STUDY — PRODUCTION RELEASE</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.08]">
            SR JEWELLERY{" "}
            <span className="font-serif italic font-normal text-[#D9A441]">COLLECTIONS</span>
          </h2>

          <p className="text-base sm:text-lg text-[#C8C2BC] leading-relaxed max-w-2xl font-normal">
            A bespoke luxury e-commerce platform and backoffice operations suite engineered for
            an exclusive fine jewellery house. Built with Next.js 14, Supabase PostgreSQL, and direct
            zero-fee UPI payment infrastructure.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="https://sr-jewellery-collections.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider text-black bg-[#D9A441] hover:bg-[#F5E6BE] transition-all duration-200 shadow-glow-gold"
            >
              <span>View Live Platform</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <Link
              href="/projects/sr-jewellery-collections"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-white/5 hover:bg-white/10 border border-white/15 transition-colors"
            >
              <span>Read Architecture Case Study</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Luxury Case Study Stage */}
        <div className="rounded-3xl border border-[#D9A441]/25 bg-[#180A10]/80 p-6 sm:p-10 backdrop-blur-xl shadow-studio-elevated">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Visual Preview (7 cols) */}
            <div className="lg:col-span-7 space-y-5">
              <div className="relative rounded-2xl overflow-hidden border border-[#D9A441]/30 bg-black shadow-2xl group">
                {/* Brand Emblem */}
                <div className="absolute top-4 left-4 z-20 w-16 h-16 sm:w-20 sm:h-20 drop-shadow-2xl">
                  <Image
                    src="/projects/sr-jewellery-badge.png"
                    alt="SR Jewellery Royal Emblem"
                    width={80}
                    height={80}
                    className="w-full h-full object-contain filter drop-shadow-[0_4px_12px_rgba(217,164,65,0.4)]"
                  />
                </div>

                <div className="relative w-full aspect-[16/10] overflow-hidden">
                  <Image
                    src="/projects/srj-laptop-preview.png"
                    alt="SR Jewellery Platform Preview"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#100508] via-transparent to-transparent opacity-85" />
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-2 text-xs">
                  <span className="bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 text-white font-mono text-[11px]">
                    Production Vercel Deployment
                  </span>
                  <span className="bg-[#D9A441]/20 text-[#D9A441] px-3 py-1.5 rounded-lg border border-[#D9A441]/40 font-mono text-[11px]">
                    sr-jewellery-collections.vercel.app
                  </span>
                </div>
              </div>

              {/* Real Handcrafted Items Showcase */}
              <div>
                <div className="text-xs font-mono text-[#D9A441] uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Real Catalog Photography Live In Store:</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {jewelleryShowcase.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded-xl bg-black/50 border border-white/10 hover:border-[#D9A441]/50 transition-colors"
                    >
                      <div className="w-full h-20 rounded-lg overflow-hidden relative bg-black/40">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="mt-2">
                        <div className="text-[11px] font-bold text-white truncate">
                          {item.name}
                        </div>
                        <div className="text-[10px] text-[#D9A441] font-mono">
                          {item.tag}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Architecture & Features Details (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              {/* Tab Selector */}
              <div className="flex items-center gap-2 p-1 rounded-xl bg-black/60 border border-white/10">
                <button
                  onClick={() => setActiveTab("customer")}
                  className={`flex-1 py-2 px-3 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                    activeTab === "customer"
                      ? "bg-[#D9A441] text-black font-bold shadow-sm"
                      : "text-[#A2A6B2] hover:text-white"
                  }`}
                >
                  Customer Storefront
                </button>
                <button
                  onClick={() => setActiveTab("admin")}
                  className={`flex-1 py-2 px-3 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                    activeTab === "admin"
                      ? "bg-[#D9A441] text-black font-bold shadow-sm"
                      : "text-[#A2A6B2] hover:text-white"
                  }`}
                >
                  Admin Operations
                </button>
              </div>

              {/* Dynamic Content based on active tab */}
              {activeTab === "customer" ? (
                <div className="space-y-3.5">
                  <div className="font-mono text-xs text-[#D9A441] uppercase tracking-wider">
                    Storefront Capabilities:
                  </div>
                  <div className="space-y-3">
                    {customerFeatures.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 rounded-xl bg-black/40 border border-white/5 space-y-1"
                      >
                        <div className="text-xs font-bold text-white flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-[#D9A441]" />
                          <span>{item.title}</span>
                        </div>
                        <p className="text-[11px] text-[#A2A6B2] pl-5 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="space-y-3.5">
                  <div className="font-mono text-xs text-[#D9A441] uppercase tracking-wider">
                    Merchant Backoffice Modules:
                  </div>
                  <div className="space-y-2.5">
                    {adminFeatures.map((feat, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 p-3 rounded-xl bg-black/40 border border-white/5 text-xs text-[#E5E0DA]"
                      >
                        <Check className="w-4 h-4 text-[#D9A441] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Architecture Badges */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap gap-2 text-[11px] font-mono text-[#D9A441]">
                {["Next.js 14", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL", "UPI QR"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-black/60 border border-[#D9A441]/30"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
