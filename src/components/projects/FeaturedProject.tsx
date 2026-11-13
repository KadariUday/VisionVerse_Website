"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Crown,
  Sparkles,
  ShoppingBag,
  Search,
  Heart,
  QrCode,
  ShieldCheck,
  BarChart3,
  Layers,
  ArrowRight,
  Smartphone,
  Laptop,
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
  { title: "Product Catalogue", icon: ShoppingBag, desc: "Curated fine jewellery collections with high-res galleries" },
  { title: "Search & Filtering", icon: Search, desc: "Dynamic multi-attribute filters by category, price & material" },
  { title: "Cart & Wishlist", icon: Heart, desc: "Seamless session retention even across device tab reloads" },
  { title: "Dynamic UPI Checkout", icon: QrCode, desc: "0% fee instant QR code and transaction ID verification" },
  { title: "Customer Auth & History", icon: ShieldCheck, desc: "Secure passwordless authentication and order tracking" },
  { title: "Mobile Experience", icon: Smartphone, desc: "Tailored bottom app bar and fluid gesture navigation" },
];

const adminFeatures = [
  "Real-time revenue & sales analytics dashboard",
  "Product catalog & inventory stock alert controls",
  "Order tracking & printable tax invoice generation",
  "Custom coupon creator with discount percentages",
  "Customer contact desk with direct WhatsApp triggers",
  "Dynamic store banner and settings synchronizer",
];

export function FeaturedProject() {
  const [activeTab, setActiveTab] = useState<"customer" | "admin">("customer");

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-[#080B1C] via-[#0E0C06] to-[#080B1C]">
      {/* Gold & Amber background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Top Featured Pill */}
        <div className="flex flex-col items-center text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-500/20 via-yellow-500/20 to-amber-500/20 border border-amber-400/40 text-amber-300 text-xs font-bold uppercase tracking-widest shadow-glow-gold">
            <Crown className="w-4 h-4 text-amber-300 fill-amber-300" />
            <span>PROUDLY BUILT & DEPLOYED BY US</span>
            <div className="flex text-amber-400 text-xs">★★★★★</div>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight">
            SR Jewellery <span className="text-gradient-gold">Collections</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
            A premium jewellery e-commerce platform designed to deliver a luxurious, seamless and secure
            online shopping experience for an exclusive fine jewellery brand.
          </p>

          {/* Action Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href="https://sr-jewellery-collections.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-black bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-500 hover:from-yellow-200 hover:to-amber-400 shadow-glow-gold transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <span>View Live Project</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <Link
              href="/projects/sr-jewellery-collections"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white bg-white/10 hover:bg-white/15 border border-amber-400/30 hover:border-amber-400 transition-all duration-300"
            >
              <span>Explore Case Study</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Large Luxury Stage Container */}
        <div className="mt-16 rounded-3xl border border-amber-500/30 bg-[#0E0B05]/90 p-6 md:p-10 shadow-2xl backdrop-blur-xl relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Visual Column: Laptop Preview with Logo Badge */}
            <div className="lg:col-span-7 space-y-4">
              <div className="relative rounded-2xl overflow-hidden border border-amber-400/40 bg-black shadow-2xl group">
                {/* Brand emblem badge overlay */}
                <div className="absolute top-4 left-4 z-20 w-16 h-16 md:w-20 md:h-20 drop-shadow-2xl">
                  <Image
                    src="/projects/sr-jewellery-badge.png"
                    alt="SR Jewellery Emblem"
                    width={80}
                    height={80}
                    className="w-full h-full object-contain filter drop-shadow-[0_4px_12px_rgba(247,184,59,0.5)]"
                  />
                </div>

                <div className="relative w-full aspect-[16/10] overflow-hidden">
                  <Image
                    src="/projects/srj-laptop-preview.png"
                    alt="SR Jewellery Platform Preview"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-amber-200">
                  <span className="bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-amber-500/30 font-semibold">
                    Live Production Deployment on Vercel
                  </span>
                  <span className="bg-amber-500/20 text-amber-300 px-3 py-1.5 rounded-lg border border-amber-400/40 font-mono">
                    sr-jewellery-collections.vercel.app
                  </span>
                </div>
              </div>

              {/* Real Jewellery Collection Carousel Cards */}
              <div>
                <div className="text-xs font-bold text-amber-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Real Jewellery Showcase In Production:</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {jewelleryShowcase.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded-xl bg-black/60 border border-amber-500/20 hover:border-amber-400/60 transition-colors"
                    >
                      <div className="w-full h-24 rounded-lg overflow-hidden relative bg-black/40">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div className="mt-2">
                        <div className="text-[11px] font-bold text-white truncate">
                          {item.name}
                        </div>
                        <div className="text-[10px] text-amber-400 font-medium">
                          {item.tag}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Platform Specifications & Admin Portal */}
            <div className="lg:col-span-5 space-y-6">
              {/* Feature Tab Switcher */}
              <div className="flex p-1 rounded-xl bg-black/60 border border-amber-500/30">
                <button
                  onClick={() => setActiveTab("customer")}
                  className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${
                    activeTab === "customer"
                      ? "bg-gradient-to-r from-amber-500 to-yellow-500 text-black shadow-sm"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  Customer Storefront (6 Features)
                </button>
                <button
                  onClick={() => setActiveTab("admin")}
                  className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${
                    activeTab === "admin"
                      ? "bg-gradient-to-r from-amber-500 to-yellow-500 text-black shadow-sm"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  Admin Operations Portal
                </button>
              </div>

              {/* Tab 1: Customer Features */}
              {activeTab === "customer" ? (
                <div className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {customerFeatures.map((feat, i) => {
                      const Icon = feat.icon;
                      return (
                        <div
                          key={i}
                          className="p-3 rounded-xl bg-black/40 border border-amber-500/20 hover:border-amber-400/40 transition-colors"
                        >
                          <div className="flex items-center gap-2 text-amber-400 mb-1">
                            <Icon className="w-4 h-4" />
                            <h4 className="text-xs font-bold text-white">{feat.title}</h4>
                          </div>
                          <p className="text-[11px] text-slate-300 leading-tight">
                            {feat.desc}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ) : (
                /* Tab 2: Admin Operations */
                <div className="p-4 rounded-xl bg-black/50 border border-amber-500/30 space-y-3">
                  <div className="text-xs font-bold text-amber-300 uppercase tracking-wider flex items-center gap-2">
                    <BarChart3 className="w-4 h-4 text-amber-400" />
                    <span>Back-Office Operations Built In:</span>
                  </div>
                  <ul className="space-y-2">
                    {adminFeatures.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-200">
                        <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tech Stack Badges */}
              <div className="pt-2">
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  Verified Production Tech Stack:
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Next.js 14.2.3",
                    "React 18.3.1",
                    "TypeScript 5.0",
                    "Tailwind CSS",
                    "Supabase PostgreSQL",
                    "Recharts",
                    "Lucide React",
                    "Vercel Edge",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-amber-500/10 text-amber-300 border border-amber-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Card Summary */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-amber-950/40 to-yellow-950/20 border border-amber-500/30 flex items-center justify-between">
                <div>
                  <div className="text-xs text-amber-300 font-semibold">Want a similar solution?</div>
                  <div className="text-sm font-bold text-white">Let's build your store</div>
                </div>
                <Link
                  href="/contact?service=E-commerce%20Website"
                  className="px-4 py-2 rounded-lg text-xs font-bold text-black bg-amber-400 hover:bg-amber-300 transition-colors"
                >
                  Get E-Commerce Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
