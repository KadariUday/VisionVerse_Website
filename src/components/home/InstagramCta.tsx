"use client";

import React from "react";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { Instagram, ArrowUpRight, QrCode } from "lucide-react";

export function InstagramCta() {
  return (
    <section className="py-20 relative overflow-hidden bg-[#0B0C0E] border-y border-white/[0.08]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto rounded-3xl bg-[#15171C] border border-white/[0.08] p-8 sm:p-12 shadow-studio">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="md:col-span-7 space-y-4 text-center md:text-left">
              <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#FF5D65]">
                <Instagram className="w-3.5 h-3.5" />
                <span>COMMUNITY & LOGS</span>
              </div>

              <h2 className="font-heading text-2xl sm:text-4xl font-bold text-white tracking-tight leading-snug">
                FOLLOW OUR WORK &{" "}
                <span className="font-serif italic font-normal text-white/90">BUILD LOGS.</span>
              </h2>

              <p className="text-xs sm:text-sm text-[#A2A6B2] leading-relaxed">
                We share design breakdowns, engineering tips, and live project drops daily on Instagram.
                Follow our handle, drop a direct message, and let's explore your idea.
              </p>

              <div className="pt-1 flex items-center justify-center md:justify-start gap-3">
                <span className="font-mono text-sm font-semibold text-white">
                  <span className="text-[#FF5D65]">@</span>vision_verse24
                </span>
              </div>

              <div className="pt-2">
                <a
                  href={siteConfig.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-[#1B1E26] hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-200 group"
                >
                  <Instagram className="w-3.5 h-3.5 text-[#FF5D65]" />
                  <span>Open Instagram Handle</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>

            {/* Right: Instagram QR Card */}
            <div className="md:col-span-5 flex justify-center">
              <div className="p-4 rounded-2xl bg-[#1B1E26] border border-white/10 text-center shadow-subtle max-w-[220px]">
                <div className="relative w-40 h-44 mx-auto rounded-xl overflow-hidden bg-white p-2">
                  <Image
                    src="/images/vision-verse24-qr.png"
                    alt="Vision Verse24 Instagram QR Code"
                    fill
                    className="object-contain p-1"
                  />
                </div>
                <div className="mt-3">
                  <div className="text-xs font-bold text-white flex items-center justify-center gap-1 font-mono">
                    <QrCode className="w-3.5 h-3.5 text-[#FF5D65]" />
                    <span>Scan on Instagram</span>
                  </div>
                  <div className="text-[10px] text-[#A2A6B2] font-mono mt-0.5">
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
