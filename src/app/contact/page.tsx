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
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us & Project Enquiry | VISION VERSE24",
  description:
    "Ready to build your website, portfolio, AI app or college project? Submit an enquiry or message Vision Verse24 on WhatsApp at +91-9392438853 for an instant response.",
};

interface Props {
  searchParams: {
    service?: string;
  };
}

export default function ContactPage({ searchParams }: Props) {
  const initialService = searchParams.service;

  return (
    <div className="pt-28 pb-20 space-y-16">
      {/* Header */}
      <section className="relative overflow-hidden text-center max-w-4xl mx-auto px-4 md:px-6 space-y-4">
        <div className="glow-orb-purple -top-20 left-1/2 -translate-x-1/2 opacity-30" />
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#111633] border border-purple-500/30 text-xs font-semibold text-purple-300">
          <Sparkles className="w-3.5 h-3.5 text-pink-400" />
          <span>DIRECT DEVELOPER ACCESS</span>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight">
          Let's Build Your <span className="text-gradient-brand">Next Project</span>
        </h1>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Submit your project enquiry below or message us directly on WhatsApp. We typically respond within minutes.
        </p>
      </section>

      {/* Main Grid: Form + Contact Cards */}
      <section className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: The Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <ContactForm initialService={initialService} />
          </div>

          {/* Right Column: Direct Contact Details & WhatsApp / Instagram Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick WhatsApp Connect Box */}
            <div className="rounded-3xl bg-gradient-to-br from-[#0e2a1b] to-[#0D1127] border border-emerald-500/30 p-6 md:p-8 shadow-xl space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                  <MessageSquareCode className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400">
                    Instant Response Channel
                  </span>
                  <h3 className="text-lg font-bold text-white">Direct WhatsApp</h3>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                Prefer to chat right now? Reach Kadari Uday directly on WhatsApp for real-time discussion, portfolio previews, or urgent college project deadlines.
              </p>

              <div className="pt-2">
                <a
                  href={`https://wa.me/${siteConfig.owner.whatsapp}?text=${encodeURIComponent("Hello Vision Verse24! I want to discuss a project with you.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-bold text-xs text-black bg-gradient-to-r from-emerald-400 to-green-500 hover:from-emerald-300 hover:to-green-400 transition-all shadow-glow-sm"
                >
                  <span>Chat on WhatsApp (+91-9392438853)</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Direct Contact Channels Card */}
            <div className="rounded-3xl bg-[#0D1127] border border-purple-500/20 p-6 md:p-8 space-y-5 shadow-card-glass">
              <h3 className="text-base font-bold text-white uppercase tracking-wider text-xs">
                Official Agency Contacts
              </h3>

              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-white">Phone & WhatsApp:</div>
                    <a
                      href={`tel:${siteConfig.owner.phone}`}
                      className="text-slate-300 hover:text-white transition-colors"
                    >
                      {siteConfig.owner.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-white">Official Email:</div>
                    <a
                      href={`mailto:${siteConfig.owner.email}`}
                      className="text-slate-300 hover:text-white transition-colors break-all"
                    >
                      {siteConfig.owner.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Instagram className="w-4 h-4 text-pink-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-white">Instagram:</div>
                    <a
                      href={siteConfig.socials.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-pink-400 hover:underline"
                    >
                      @vision_verse24
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-white">Location:</div>
                    <span className="text-slate-400">
                      Institute of Aeronautical Engineering, Dundigal, Hyderabad, Telangana — 500043
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-white">Working Hours:</div>
                    <span className="text-slate-400">
                      Monday to Sunday: 8:00 AM – 10:00 PM IST
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Instagram QR Mini Card */}
            <div className="rounded-3xl bg-gradient-to-r from-[#1c0819] to-[#0D1127] border border-pink-500/30 p-6 flex items-center gap-5 shadow-xl">
              <div className="relative w-24 h-24 rounded-xl overflow-hidden bg-white p-1 shrink-0">
                <Image
                  src="/images/vision-verse24-qr.png"
                  alt="Vision Verse24 Instagram QR"
                  fill
                  className="object-contain p-1"
                />
              </div>
              <div className="space-y-1">
                <div className="text-xs font-bold text-pink-400 uppercase tracking-wider">
                  Instagram QR
                </div>
                <div className="text-sm font-black text-white">@vision_verse24</div>
                <p className="text-[11px] text-slate-300">
                  Scan on your phone to DM us or check latest live project reels.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
