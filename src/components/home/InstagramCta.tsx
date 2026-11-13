"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { Instagram, Sparkles, ArrowRight, QrCode, Heart, Users } from "lucide-react";

export function InstagramCta() {
  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-r from-[#14081c] via-[#080B1C] to-[#1c0819] border-y border-pink-500/20">
      {/* Background glow */}
      <div className="glow-orb-pink top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto rounded-3xl bg-[#0D1127]/90 border border-pink-500/30 p-8 md:p-12 shadow-glow-pink backdrop-blur-xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="md:col-span-7 space-y-4 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-400 text-xs font-bold uppercase tracking-wider">
                <Instagram className="w-3.5 h-3.5" />
                <span>FOLLOW OUR JOURNEY</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
                Let's Build Something <span className="text-gradient-brand">Amazing Together!</span>
              </h2>

              <p className="text-sm text-slate-300 leading-relaxed">
                We share our work, website design inspirations, full-stack tips, and live project demos daily on Instagram. Follow us, drop a DM, and let's discuss your next project!
              </p>

              <div className="pt-2 flex items-center justify-center md:justify-start gap-4">
                <div className="flex items-center gap-2 text-white font-bold text-lg font-mono">
                  <span className="text-pink-400">@</span>vision_verse24
                </div>
              </div>

              <div className="pt-3">
                <a
                  href={siteConfig.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-bold text-white bg-gradient-to-r from-pink-600 via-purple-600 to-rose-600 hover:from-pink-500 hover:to-purple-500 shadow-glow-pink transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  <Instagram className="w-4 h-4" />
                  <span>Connect With Us on Instagram</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right: Instagram QR Card */}
            <div className="md:col-span-5 flex justify-center">
              <div className="p-4 rounded-2xl bg-white/5 border border-pink-500/40 text-center shadow-xl backdrop-blur-md max-w-[240px]">
                <div className="relative w-44 h-48 mx-auto rounded-xl overflow-hidden bg-white p-2">
                  <Image
                    src="/images/vision-verse24-qr.png"
                    alt="Vision Verse24 Instagram QR Code"
                    fill
                    className="object-contain p-1"
                  />
                </div>
                <div className="mt-3">
                  <div className="text-xs font-bold text-white flex items-center justify-center gap-1">
                    <QrCode className="w-3.5 h-3.5 text-pink-400" />
                    <span>Scan on Instagram</span>
                  </div>
                  <div className="text-[10px] text-pink-300 font-mono mt-0.5">
                    @vision_verse24
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
