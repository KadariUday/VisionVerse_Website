import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { ContactForm } from "@/components/contact/ContactForm";
import { siteConfig } from "@/config/site";
import {
  Sparkles,
  Phone,
  Mail,
  MapPin,
  Clock,
  Instagram,
  MessageSquareCode,
  ExternalLink,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact & Commission | VISION VERSE24 — Independent Digital Product Studio",
  description:
    "Let's start something. Initiate a project enquiry or message Vision Verse24 on WhatsApp at +91-9392438853 for direct consultation on websites, AI apps, and software.",
};

interface Props {
  searchParams: {
    service?: string;
  };
}

export default function ContactPage({ searchParams }: Props) {
  const initialService = searchParams.service;

  return (
    <div className="pt-32 pb-24 space-y-16">
      {/* Studio Header */}
      <section className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono font-medium text-[#315BFF] mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#315BFF] animate-pulse" />
            <span>COMMISSIONS & ENQUIRIES</span>
          </div>

          <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight leading-[1.05]">
            LET&apos;S START SOMETHING.
          </h1>

          <p className="font-serif italic text-xl sm:text-2xl text-[#D9A441] mt-4">
            Every breakthrough project starts with a candid technical conversation.
          </p>
        </div>
      </section>

      {/* Split Studio Experience */}
      <section className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Agency Introduction & Direct Channels (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h2 className="font-heading text-xs font-mono font-semibold uppercase tracking-wider text-[#A0A2AD]">
                01 / Studio Engagement
              </h2>
              <p className="text-sm sm:text-base text-[#D4D4D8] leading-relaxed">
                Whether you need an industry-defining portfolio, a complete full-stack web application, an academic engineering system, or an end-to-end commercial platform like SR Jewellery Collections, we partner directly with you from discovery through launch.
              </p>
              <p className="text-xs text-[#777982] leading-relaxed">
                No middle managers or outsourced handoffs. You speak and collaborate directly with the engineers designing and coding your product.
              </p>
            </div>

            {/* Direct WhatsApp High-Priority Card */}
            <div className="rounded-2xl bg-gradient-to-br from-[#0c2417] to-[#15171C] border border-emerald-500/30 p-6 md:p-7 space-y-4 shadow-studio">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    <MessageSquareCode className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-medium text-emerald-400 uppercase tracking-wider block">
                      Rapid Consultation
                    </span>
                    <h3 className="font-heading text-base font-bold text-white">
                      Direct WhatsApp Channel
                    </h3>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-[10px] font-mono text-emerald-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  Online
                </span>
              </div>

              <p className="text-xs text-[#D4D4D8] leading-relaxed">
                Have an urgent delivery date, need an instant feasibility check, or want live demos sent directly to your phone?
              </p>

              <a
                href={`https://wa.me/${siteConfig.owner.whatsapp}?text=${encodeURIComponent(
                  "Hello Vision Verse24! I want to discuss a project with you."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-5 rounded-xl font-medium text-xs text-black bg-gradient-to-r from-emerald-400 to-green-500 hover:from-emerald-300 hover:to-green-400 transition-all shadow-glow-sm"
              >
                <span>Chat with Kadari Uday (+91-9392438853)</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Studio Coordinates */}
            <div className="rounded-2xl bg-[#15171C] border border-white/10 p-6 md:p-7 space-y-5 shadow-studio">
              <h3 className="font-heading text-xs font-mono font-semibold uppercase tracking-wider text-[#A0A2AD]">
                02 / Studio Coordinates
              </h3>

              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#315BFF] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[#777982] uppercase text-[10px] tracking-wider font-mono">
                      Telephone & WhatsApp
                    </div>
                    <a
                      href={`tel:${siteConfig.owner.phone}`}
                      className="font-medium text-white hover:text-[#315BFF] transition-colors"
                    >
                      {siteConfig.owner.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#753BDB] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[#777982] uppercase text-[10px] tracking-wider font-mono">
                      Official Inquiries
                    </div>
                    <a
                      href={`mailto:${siteConfig.owner.email}`}
                      className="font-medium text-white hover:text-[#315BFF] transition-colors break-all"
                    >
                      {siteConfig.owner.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Instagram className="w-4 h-4 text-[#FF5D65] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[#777982] uppercase text-[10px] tracking-wider font-mono">
                      Instagram Updates
                    </div>
                    <a
                      href={siteConfig.socials.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-white hover:text-[#FF5D65] transition-colors inline-flex items-center gap-1"
                    >
                      <span>@vision_verse24</span>
                      <ArrowUpRight className="w-3 h-3 text-[#777982]" />
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#D9A441] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[#777982] uppercase text-[10px] tracking-wider font-mono">
                      Studio Location
                    </div>
                    <span className="font-medium text-white">
                      Hyderabad, Telangana, India
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[#777982] uppercase text-[10px] tracking-wider font-mono">
                      Active Hours
                    </div>
                    <span className="text-[#D4D4D8]">
                      Monday – Sunday · 08:00 – 22:00 IST
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Instagram QR Card */}
            <div className="rounded-2xl bg-[#15171C] border border-white/10 p-5 flex items-center gap-4 shadow-studio">
              <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-white p-1 shrink-0">
                <Image
                  src="/images/vision-verse24-qr.png"
                  alt="Vision Verse24 Instagram QR Code"
                  fill
                  className="object-contain p-1"
                />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-mono font-medium text-[#FF5D65] uppercase tracking-wider">
                  Instagram Studio Reel
                </span>
                <div className="text-sm font-bold text-white">@vision_verse24</div>
                <p className="text-[11px] text-[#A0A2AD] leading-relaxed">
                  Scan to preview project walkthroughs, UI teardowns, and live deployments.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Project Enquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <ContactForm initialService={initialService} />
          </div>
        </div>
      </section>
    </div>
  );
}
