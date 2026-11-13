import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { FinalCta } from "@/components/home/FinalCta";
import { HelpCircle, Sparkles, MessageSquareCode, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | VISION VERSE24 — Independent Digital Product Studio",
  description:
    "Comprehensive answers regarding Vision Verse24's engineering lifecycle, student-accessible pricing tiers, project timelines, deliverables, and architecture.",
};

const faqs = [
  {
    category: "Studio Identity & Philosophy",
    questions: [
      {
        q: "Who is behind VISION VERSE24?",
        a: "Vision Verse24 was founded by engineer-builders Kadari Uday, Rajoju Sreeja, and Rapalli Venkat Dathadri from Institute of Aeronautical Engineering (IARE), Hyderabad, B.Tech CSE (AI & ML) 2027 batch. We build production web solutions for ambitious students, creators, and commercial businesses.",
      },
      {
        q: "Are the prices really transparent and starting at ₹299?",
        a: "Yes. By keeping our operational overhead lean and engineering directly without intermediary layers, we provide accessible rates starting from ₹299 for resume builds and ₹499 for full portfolio websites. Full-stack commercial storefronts scale between ₹1,500 and ₹5,000.",
      },
      {
        q: "Why choose custom studio engineering over generic site builders?",
        a: "Generic site builders generate bloated bundles, impose recurring subscription locks, and limit custom backend features. We engineer bespoke Next.js 14 and React applications deployed to Vercel's global edge network. Your site loads in milliseconds, incurs zero mandatory monthly fees, and you retain complete GitHub source ownership.",
      },
    ],
  },
  {
    category: "Workflow & Engagement",
    questions: [
      {
        q: "What is your standard turnaround timeline?",
        a: "Resume applications and personal portfolios are delivered within 24 to 48 hours. Academic college systems take 3 to 5 days including technical reports, system diagrams, and test suites. Custom commercial platforms and e-commerce platforms take 5 to 10 days depending on architecture scope.",
      },
      {
        q: "How does the enquiry-to-WhatsApp pipeline work?",
        a: "When you submit a specification through our contact portal, your data is validated and recorded into our Supabase PostgreSQL database. A unique tracking identifier (e.g., VV-2026-0001) is assigned, and a pre-formatted payload launches in WhatsApp so you can converse directly with our founding engineer.",
      },
      {
        q: "What is your revision and iteration policy?",
        a: "We provide comprehensive revisions within the agreed scope. We will not consider a project complete until the typography, responsive fidelity, speed metrics, and core features align with your expectations.",
      },
    ],
  },
  {
    category: "Academic & Systems Engineering",
    questions: [
      {
        q: "What deliverables are provided with the College Project tier (₹699)?",
        a: "You receive clean, modular source code, setup and execution scripts, complete project documentation (synopsis, Blackbook-format report), ER and architecture diagrams, and a 1-on-1 code walkthrough to prepare you thoroughly for viva voce defense.",
      },
      {
        q: "Do you assist with technical defense and viva preparation?",
        a: "Yes. We supply a curated defense guide explaining model selection, database normalization, API architecture, and algorithmic complexity so you can speak to every component with full mastery.",
      },
    ],
  },
  {
    category: "Infrastructure & Security",
    questions: [
      {
        q: "Where is the software deployed and do I have to pay for hosting?",
        a: "We deploy directly to Vercel's global serverless edge network, which provides generous tier allowances for individual developers, portfolios, and startups with free automated SSL encryption.",
      },
      {
        q: "Can I connect my own custom domain (e.g. yourname.com)?",
        a: "Yes. We configure DNS records and SSL provisioning to attach your personal or company domain to the Vercel edge deployment at no additional configuration cost.",
      },
      {
        q: "Do you implement database persistence and authentication?",
        a: "Yes. For dynamic web applications and e-commerce systems, we integrate Supabase PostgreSQL with strict Row Level Security (RLS) policies, server-side Next.js route handlers, and API security guards.",
      },
    ],
  },
];

export default function FaqPage() {
  return (
    <div className="pt-32 pb-24 space-y-20 bg-[#0C0D0E]">
      {/* Studio Header */}
      <section className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono font-medium text-[#F59E0B] mb-6">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>KNOWLEDGE & PROTOCOLS</span>
          </div>

          <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight leading-[1.05]">
            FREQUENTLY ASKED QUESTIONS.
          </h1>

          <p className="font-serif italic text-xl sm:text-2xl text-[#F59E0B] mt-4">
            Everything you need to know about our engineering standards, student pricing, and delivery milestones.
          </p>
        </div>
      </section>

      {/* FAQ Groups */}
      <section className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl space-y-14">
          {faqs.map((group, gIdx) => (
            <div key={gIdx} className="space-y-5">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-semibold text-[#F59E0B] uppercase tracking-wider">
                  0{gIdx + 1} /
                </span>
                <h2 className="font-heading text-lg font-bold text-white tracking-tight">
                  {group.category}
                </h2>
              </div>

              <div className="space-y-4">
                {group.questions.map((faq, qIdx) => (
                  <div
                    key={qIdx}
                    className="p-6 md:p-7 rounded-2xl bg-[#15171C] border border-white/10 space-y-3 shadow-studio"
                  >
                    <h3 className="font-heading text-base font-bold text-white flex items-start gap-3">
                      <span className="text-[#F59E0B] font-mono text-sm shrink-0 mt-0.5">Q.</span>
                      <span>{faq.q}</span>
                    </h3>
                    <p className="text-xs sm:text-sm text-[#A0A2AD] leading-relaxed pl-6">
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Direct Contact Banner */}
      <section className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl p-8 md:p-10 rounded-2xl bg-[#15171C] border border-white/10 space-y-4 shadow-studio">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-medium text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            <span>UNANSWERED INQUIRIES</span>
          </div>
          <h3 className="font-heading text-2xl font-bold text-white">Have a unique technical query?</h3>
          <p className="text-xs sm:text-sm text-[#A0A2AD] max-w-xl leading-relaxed">
            Reach founding engineer Kadari Uday on WhatsApp for an immediate technical assessment and architectural guidance.
          </p>
          <div className="pt-2">
            <a
              href={`https://wa.me/${siteConfig.owner.whatsapp}?text=${encodeURIComponent(
                "Hello Vision Verse24! I have a question about your services."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-medium text-black bg-gradient-to-r from-emerald-400 to-green-500 hover:from-emerald-300 hover:to-green-400 transition-all shadow-glow-sm"
            >
              <MessageSquareCode className="w-4 h-4" />
              <span>Converse on WhatsApp (+91-9392438853)</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <FinalCta />
    </div>
  );
}
